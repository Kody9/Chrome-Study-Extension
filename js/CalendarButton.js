let events = [];

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve events from local storage or initialize an empty array
  events = JSON.parse(localStorage.getItem('events')) || [];

  // Display the calendar
  const today = new Date();
  displayCalendar(today.getFullYear(), today.getMonth() + 1);

  // Display the current month and year
  displayCurrentMonthYear(today.getFullYear(), today.getMonth());

  // Display events on the calendar
  displayEventsOnCalendar();

  // Attach event listeners to navigation buttons
  document.getElementById('prevMonthBtn').addEventListener('click', function() {
    navigate(-1);
  });

  document.getElementById('nextMonthBtn').addEventListener('click', function() {
    navigate(1);
  });

  document.getElementById('goBack').addEventListener('click', function() {
    window.location.href = '../html/interface.html'; // Navigate back to the main page
  });
  
  // Add event listener to handle form submission
  document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventDescription = document.getElementById('eventDescription').value;

    // Create an event object
    const newEvent = {
      id: Date.now(), // Unique identifier for the event
      date: eventDate,
      time: eventTime,
      description: eventDescription
    };

    // Add the event object to the events array
    events.push(newEvent);

    // Update local storage with the updated events array
    localStorage.setItem('events', JSON.stringify(events));

    chrome.runtime.sendMessage({ action: 'addEvent', event: newEvent });

    // Add the event to the calendar
    addEventToCalendar(newEvent);

    // Clear the form
    event.target.reset();

    // Display tasks immediately after adding
    displayTasks();
  });
});

function displayEventsOnCalendar() {
  events.forEach((event) => {
    addEventToCalendar(event);
  });
}

function addEventToCalendar(event) {
  const calendarDiv = document.getElementById('calendar');

  // Get the date and time of the event
  const eventDateTime = new Date(event.date + 'T' + event.time);

  // Get the day, month, and year of the event
  const eventDay = eventDateTime.getDate();
  const eventMonth = eventDateTime.getMonth(); //
  const eventYear = eventDateTime.getFullYear();

  // Find the cell corresponding to the event date
  const cells = calendarDiv.querySelectorAll('td');
  cells.forEach(cell => {
    const cellDate = parseInt(cell.textContent);
    const cellMonth = getMonthIndex(document.getElementById('currentMonth').textContent);
    const cellYear = parseInt(document.getElementById('currentYear').textContent);

    // Check if the event falls within the displayed month and year
    if (cellDate === eventDay && cellMonth === eventMonth && cellYear === eventYear) {

      const eventDot = document.createElement('div');
      eventDot.classList.add('event-dot');

      cell.appendChild(eventDot);

      const eventInfo = document.createElement('div');
      eventInfo.classList.add('event-info');
      eventInfo.textContent = event.time + ' - ' + event.description;

      cell.appendChild(eventInfo);
    }
  });
}

function displayCurrentMonthYear(year, month) {
  document.getElementById('currentMonth').textContent = getMonthName(month);
  document.getElementById('currentYear').textContent = year;
}

function displayCalendar(year, month) {
  const calendarDiv = document.getElementById('calendar');
  calendarDiv.innerHTML = '';

  // Create the table element
  const table = document.createElement('table');

  // Create the header row
  const headerRow = table.createTHead().insertRow();
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOfWeek.forEach(day => {
      const th = document.createElement('th');
      th.textContent = day;
      headerRow.appendChild(th);
  });

  // Get the first day of the month
  const firstDay = new Date(year, month - 1, 1).getDay();

  // Get the number of days in the month
  const lastDay = new Date(year, month, 0);
  const numDays = lastDay.getDate();

  // Initialize variables for day and cell creation
  let day = 1;

  // Fill in the calendar cells
  for (let i = 0; i < 6; i++) {
      const currentRow = table.insertRow();
      for (let j = 0; j < 7; j++) {
          const cell = currentRow.insertCell();
          if ((i === 0 && j < firstDay) || day > numDays) {
              // Empty cells before the first day of the month
              // or after the last day of the month
              cell.textContent = '';
          } else {
              // Fill cells with dates
              cell.textContent = day;
              day++;
          }
      }
      if (day > numDays) {
          // Break if all days of the month have been filled
          break;
      }
  }
  calendarDiv.appendChild(table);
}

function navigate(direction) {
  const currentYear = parseInt(document.getElementById('currentYear').textContent);
  const currentMonth = getMonthIndex(document.getElementById('currentMonth').textContent);

  let newMonth = currentMonth + direction;
  let newYear = currentYear;

  if (newMonth < 0) {
      newMonth = 11;
      newYear--;
  } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
  }

  displayCalendar(newYear, newMonth + 1); // Adding 1 to month since JavaScript months are zero-based
  displayCurrentMonthYear(newYear, newMonth);
  displayEventsOnCalendar();
}

function getMonthName(monthIndex) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[monthIndex];
}

function getMonthIndex(monthName) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months.indexOf(monthName);
}

document.getElementById('taskList').addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-task')) {
    const taskId = parseInt(event.target.dataset.id);
    deleteTask(taskId);
  }
});

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear existing tasks

  // Rebuild the task list based on the updated events array
  events.forEach((event, index) => {
    const listItem = document.createElement('li');

    // Create span element for task details
    const taskDetails = document.createElement('span');
    taskDetails.textContent = `${event.date} - ${event.description}`;

    // Create delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-task');
    deleteButton.setAttribute('data-id', event.id); // Set unique identifier as data attribute

    // Append task details and delete button to list item
    listItem.appendChild(taskDetails);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
  });
}

// Call the displayTasks function to populate the task list when the page loads
document.addEventListener('DOMContentLoaded', function() {
  displayTasks();
});

document.getElementById('taskReminder').addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-task')) {
    const taskId = parseInt(event.target.dataset.id);
    deleteTask(taskId);
  }
});

function deleteTask(taskId) {
  // Find the index of the task with the provided taskId
  const taskIndex = events.findIndex(task => task.id === taskId);

  // If the task is found in the events array
  if (taskIndex !== -1) {
    // Remove the task from the events array
    events.splice(taskIndex, 1);

    // Update local storage with the updated events array
    localStorage.setItem('events', JSON.stringify(events));

    // Refresh the calendar and task list
    displayCalendar(parseInt(document.getElementById('currentYear').textContent), getMonthIndex(document.getElementById('currentMonth').textContent) + 1);
    displayTasks(); // Refresh the task list in the reminder section
  }
}