let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      ${note}
      <button class="delete-btn" onclick="deleteNote(${index})">X</button>
    `;
    notesList.appendChild(div);
  });
}

function addNote() {
  const input = document.getElementById("noteInput");
  const text = input.value.trim();

  if (!text) return;

  notes.push(text);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  displayNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

displayNotes();
