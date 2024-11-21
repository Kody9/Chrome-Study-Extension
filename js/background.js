console.log('Background script loaded.');

let reminderEnabled = true;
let currentInterval = 25; 
let isSessionActive = false;
let studyTopic = "";
let offTopicCount = 0;
let recentlyFlagged = {}; 
const FLAG_COOLDOWN_PERIOD = 60000; 
let sessionStartTime = 0;



const ignoreList = [ // Links to ignore when session is active
    "chrome://newtab/",
    "chrome-extension://",
    "chrome://settings/",
    "chrome://bookmarks/",
    "chrome://history/",
    "chrome://downloads/",
    "https://canvas.txstate.edu/",
    "https://mail.google.com/",
    "https://outlook.live.com/",
    "https://slack.com/",
    "https://github.com/",
    "https://bitbucket.org/",
    "https://stackoverflow.com/",
    "https://www.wikipedia.org/",
    "https://translate.google.com/",
    "https://www.nytimes.com/",
    "https://www.khanacademy.org/",
    "https://chat.openai.com/",
    "https://scholar.google.com/",
    "https://drive.google.com/",
    "https://www.bbc.com/",
    "https://www.notion.so/",
    "https://www.duolingo.com/",
    "https://www.coursera.org/",
    "https://www.linkedin.com/",
    "https://www.cnn.com/",
    "https://www.grammarly.com/",
    "https://news.google.com/home?hl=en-US&gl=US&ceid=US:en"
];

//Function to enable blocking.
function enableBlocking() {
  const rules = [
    {
      "id": 1,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "|https://www.hulu.com/",
        "resourceTypes": ["main_frame"]
      }
    },
    {
      "id": 2,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "|https://www.facebook.com/",
        "resourceTypes": ["main_frame"]
      }
    },
    {
      "id": 3,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "|https://twitter.com",
        "resourceTypes": ["main_frame"]
      }
    },
    {
      "id": 4,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "|https://www.instagram.com/",
        "resourceTypes": ["main_frame"]
      }
    },
    {
      "id": 5,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "|https://www.tiktok.com/",
        "resourceTypes": ["main_frame"]
      }
    },
    {
      "id": 6,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "|https://www.netflix.com/",
        "resourceTypes": ["main_frame"]
      }
    },
    {
      "id": 7,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "|https://www.pinterest.com/",
        "resourceTypes": ["main_frame"]
      }
    },
    {
      "id": 8,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "|https://www.reddit.com/",
        "resourceTypes": ["main_frame"]
      }
    }
  ];

  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: rules,
    removeRuleIds: [1, 2, 3, 4, 5, 6, 7, 8]
  });
}

// Function to disable blocking
function disableBlocking() {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2, 3, 4, 5, 6, 7, 8]
  });
}

function setBreakReminder(interval = currentInterval) {
    chrome.alarms.create("breakReminder", { periodInMinutes: interval });
    currentInterval = interval; 
    chrome.storage.local.set({breakInterval: interval, reminderEnabled: reminderEnabled}, () => {
        console.log(`Break interval saved as ${interval} minutes and reminderEnabled saved as ${reminderEnabled}.`);
    });
}

function stabilizeOffTopicCount() {
  console.log("Reviewing off-topic count... Current count:", offTopicCount);
  const sessionDuration = Date.now() - sessionStartTime; 

  console.log("Session duration for review in milliseconds:", sessionDuration);
  //Changes already merged, group task
  if (offTopicCount > 5) {
    if (sessionDuration > 3600000) { 
      console.log("Suggest adjustment: Decrease off-topic count for long session.");
    } else if (sessionDuration < 1800000) { 
      console.log("Suggest adjustment: Increase off-topic count for short session.");
    }
  } else {
    console.log("No adjustment needed for off-topic count.");
  }
}

function clearBreakReminder() {
    chrome.alarms.clear("breakReminder");
}

chrome.storage.local.get(['breakInterval', 'reminderEnabled', 'isSessionActive', 'studyTopic'], function(result) {
  if (result.breakInterval !== undefined) {
      currentInterval = result.breakInterval;
  }
  reminderEnabled = result.reminderEnabled !== undefined ? result.reminderEnabled : true; // Default to true if undefined
  if (result.isSessionActive !== undefined) {
      isSessionActive = result.isSessionActive;
  }
  if (result.studyTopic !== undefined) {
      studyTopic = result.studyTopic;
  }
  if (reminderEnabled) {
      setBreakReminder(currentInterval);
  } else {
      clearBreakReminder();
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
    console.log("Alarm triggered:", alarm);
    if (alarm.name === "breakReminder" && reminderEnabled) {
        chrome.notifications.create("", {
            type: "basic",
            iconUrl: "../icons/image.png",
            title: "Time for a Break",
            message: `Time for a break! You've been working for ${currentInterval} minutes.`,
            priority: 2
        });
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => { 
  console.log("Message received:", message);

  switch (message.action) {
    case "addEvent":
      const newEvent = message.event;
      scheduleEventNotifications([newEvent]);
      break;
      
    case "toggleReminder":
      stabilizeOffTopicCount();  
      reminderEnabled = message.enable; // Use the passed state instead of toggling
      if (reminderEnabled) {
        setBreakReminder(currentInterval);
      } else {
        clearBreakReminder();
      }
      chrome.storage.local.set({ reminderEnabled: reminderEnabled });
      sendResponse({ reminderEnabled: reminderEnabled });
      break;
      
    case "queryState":
      sendResponse({ reminderEnabled: reminderEnabled, currentInterval: currentInterval });
      break;  

      case "getSuggestedLinks": //using wikipedia API 
        const topic = message.topic;
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(topic)}&format=json&origin=*`;

        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
        const links = data.query.search.map(page => ({
          title: page.title,
          url: `https://en.wikipedia.org/?curid=${page.pageid}`
        }));
        // Save the links to chrome.storage.local
        chrome.storage.local.set({suggestedLinks: links}, () => {
        console.log('Suggested links saved.');
      });
        sendResponse({links: links});
       })
      .catch(error => {
      console.error("Error fetching suggested links:", error);
      sendResponse({links: [], error: "Failed to fetch suggested links."});
       });

        return true; 


    case "setInterval":
      const interval = message.interval;
      if (!isNaN(interval) && interval > 0) {
        setBreakReminder(interval);
        sendResponse({ status: "Interval updated", interval: interval });
      } else {
        sendResponse({ status: "Error", message: "Invalid interval" });
      }
      break;

      case "startSession":
        enableBlocking(); //enabling website blocking
        isSessionActive = true;
        offTopicCount = 0;
        studyTopic = message.topic.toLowerCase();
        sessionStartTime = Date.now();
        console.log("Session start time:", sessionStartTime);
    
        chrome.storage.local.set({isSessionActive: true, sessionStartTime: sessionStartTime, studyTopic: studyTopic}, () => {
          if (chrome.runtime.lastError) {
            console.error("Error saving session start time:", chrome.runtime.lastError.message);
            sendResponse({error: true, message: "Failed to start session"});
            return;
        }
        console.log("Session data saved.");
        sendResponse({status: "Session started", sessionStartTime: sessionStartTime});
        });
        return true; 

    

    case "endSession":
      disableBlocking();
      stabilizeOffTopicCount();  
      chrome.storage.local.get("sessionStartTime", function(data) {
          if (!data.sessionStartTime || chrome.runtime.lastError) {
              console.error("Failed to retrieve session start time:", chrome.runtime.lastError ? chrome.runtime.lastError.message : "Start time not found.");
              sendResponse({error: true, message: "Failed to end session properly"});
              return;
          }
          
          let sessionEndTime = new Date();
          let sessionDuration = sessionEndTime - new Date(data.sessionStartTime);
          let sessionDate = sessionEndTime.toISOString();
          console.log("Session start time:", data.sessionStartTime);
          console.log("Session end time:", sessionEndTime);
          console.log("Calculated duration:", sessionDuration);
          console.log("Off topic count: ", offTopicCount);
          
          let sessionTopic = message.topic || 'Unknown Topic';
          let sessionData = {
            studyTopic: sessionTopic, 
            offTopicCount: offTopicCount, 
            duration: sessionDuration, 
            date: sessionDate
          };
          
          chrome.storage.local.get(['archivedSessions'], function(result) {
              let sessions = result.archivedSessions || [];
              sessions.push(sessionData);
              chrome.storage.local.set({archivedSessions: sessions}, () => {
                console.log(`Archiving session with off-topic count: ${offTopicCount}`);
                  if (chrome.runtime.lastError) {
                      console.error("Failed to archive session:", chrome.runtime.lastError.message);
                      sendResponse({error: true, message: "Failed to archive session"});
                      return;
                  }
                  console.log("Session archived successfully with topic:", sessionTopic);
              });
          });
          
          isSessionActive = false;
          studyTopic = ""; 
          //offTopicCount = 0;
          chrome.storage.local.remove(['sessionStartTime'], () => {
              console.log("Session start time cleared.");
              sendResponse({status: "Session ended", archivedTopic: sessionTopic});
          });
      });
      return true; 
  
      

    case "querySessionState":
      sendResponse({ isSessionActive: isSessionActive, studyTopic: studyTopic });
      break;

    case "analyzePageContent":
      const currentTime = Date.now();
      const pageUrl = sender.tab.url;
      const pageContent = message.content.toLowerCase(); //convert page content to lowercase
      const topicKeywords = studyTopic.split(' ');
      const isOffTopic = !topicKeywords.some(keyword => pageContent.includes(keyword.toLowerCase())); //of topic if keyword not found in page content

      if (recentlyFlagged[pageUrl] && currentTime - recentlyFlagged[pageUrl] < FLAG_COOLDOWN_PERIOD) {
        console.log(`Page ${pageUrl} skipped from flagging; still in cooldown period.`);
        return; 
      }

      if (isOffTopic) {
        console.log(`Off-topic count before increment: ${offTopicCount}`);
        offTopicCount++;
        console.log(`Off-topic count after increment: ${offTopicCount}`);
        recentlyFlagged[pageUrl] = currentTime;
        if (reminderEnabled) {
        chrome.notifications.create("", {
          type: "basic",
          iconUrl: "../icons/image.png",
          title: "Stay Focused!",
          message: "You've visited a site that may not be related to your study topic.",
          priority: 2
        });
      }
    }
      sendResponse({ isOffTopic: isOffTopic }); 
      break;

    default:
      sendResponse({ error: "Unknown action" }); 
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => { //ignore urls in array
    if (isSessionActive && changeInfo.status === 'complete' && tab.url) {
        const urlLower = tab.url.toLowerCase();
        const shouldBeIgnored = ignoreList.some(pattern => urlLower.includes(pattern));
        
        if (!shouldBeIgnored) {
            chrome.scripting.executeScript({
                target: {tabId: tabId},
                files: ['js/contentScript.js']
            }).catch(error => console.error('Script error:', error));
    }
  }
});

function scheduleEventNotifications(events) {
  console.log('Scheduling event notifications...');
  const notificationTimeFrame = {
      'minute': 60 * 1000, 
      'hour': 60 * 60 * 1000, 
      'day': 24 * 60 * 60 * 1000
  };

  events.forEach(event => {
      const eventDateTime = new Date(event.date + 'T' + event.time);
      let preference = 'minute'; // Default

      // Retrieve notification preference from Chrome Storage
      chrome.storage.local.get('notificationPreference', function(data) {
          preference = data.notificationPreference || 'minute'; // Default to 'minute' if not set
          const notificationTime = new Date(eventDateTime - notificationTimeFrame[preference]);

          if (notificationTime > new Date()) {
              console.log(`Scheduling notification for event: ${event.description}`);
              setTimeout(() => {
                  chrome.notifications.create('', {
                      type: 'basic',
                      iconUrl: '../icons/image.png',
                      title: 'Task Reminder',
                      message: `Your event "${event.description}" is starting in one ${preference}!`
                  }, function(notificationId) {
                      if (chrome.runtime.lastError) {
                          console.error('Error creating notification:', chrome.runtime.lastError.message);
                      } else {
                          console.log('Notification created with ID:', notificationId);
                      }
                  });
              }, notificationTime - new Date());
          }
      });
  });
}
