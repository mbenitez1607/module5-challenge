// Set today's date with Moment
let today = moment().format('dddd, MMMM do');
$("#currentDay").text(today);

// Function to save a task to local storage
function saveTask(id) {
    let task = document.getElementById(id);
    localStorage.setItem(id, task.value);
}