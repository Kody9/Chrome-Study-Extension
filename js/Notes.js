document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('goBack').addEventListener('click', function() {
        window.location.href = '../html/interface.html'; 
    });
    const saveButton = document.getElementById('saveBtn');
    const noteTitleInput = document.getElementById('noteTitle');
    const noteArea = document.getElementById('noteArea');
    const notesList = document.getElementById('notesList');

    chrome.storage.local.get(['unsavedTitle', 'unsavedNote'], function(result) {
        if (result.unsavedTitle) {
            noteTitleInput.value = result.unsavedTitle;
        }
        if (result.unsavedNote) {
            noteArea.value = result.unsavedNote;
        }
    });

    saveButton.addEventListener('click', function() {
        const title = noteTitleInput.value.trim();
        const note = noteArea.value.trim();
        if (title && note) {
            saveNotes(title, note);
            noteTitleInput.value = '';
            noteArea.value = '';
            // Clear the autosaved content
            chrome.storage.local.remove(['unsavedTitle', 'unsavedNote']);
            loadNotes();
        } else {
            alert("Please fill in both title and note.");
        }
    });

    noteTitleInput.addEventListener('input', function() {
        chrome.storage.local.set({ unsavedTitle: noteTitleInput.value });
    });

    noteArea.addEventListener('input', function() {
        chrome.storage.local.set({ unsavedNote: noteArea.value });
    });

    loadNotes();
});

function saveNotes(title, note) {
    chrome.storage.local.get({ savedNotes: [] }, function(data) {
        const notes = data.savedNotes;
        notes.push({ title: title, content: note });
        chrome.storage.local.set({ savedNotes: notes }, function() {
            console.log('Notes saved!');
            loadNotes();
        });
    });
}

function loadNotes() {
    chrome.storage.local.get({ savedNotes: [] }, function(data) {
        const notes = data.savedNotes;
        notesList.innerHTML = '';
        notes.forEach(function(note, index) {
            const listItem = document.createElement('li');
            listItem.textContent = note.title;
            listItem.classList.add('note-item');

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = function() { deleteNote(index); };

            listItem.appendChild(deleteBtn);

            listItem.addEventListener('click', function(event) {
                if (event.target === deleteBtn) return;
                this.classList.toggle('expanded');
                const contentDisplay = this.querySelector('.content');
                if (!contentDisplay) {
                    const content = document.createElement('div');
                    content.textContent = note.content;
                    content.className = 'content';
                    this.appendChild(content);
                } else {
                    this.removeChild(contentDisplay);
                }
            });

            notesList.appendChild(listItem);
        });
    });
}

function deleteNote(index) {
    chrome.storage.local.get({ savedNotes: [] }, function(data) {
        const notes = data.savedNotes;
        notes.splice(index, 1);
        chrome.storage.local.set({ savedNotes: notes }, function() {
            console.log('Note deleted!');
            loadNotes();
        });
    });
}


