// Set today's date with Moment
let today = moment().format('dddd, MMMM do');
$("#currentDay").text(today);

// Function to save a task to local storage
function saveTask(id) {
    let task = document.getElementById(id);
    localStorage.setItem(id, task.value);
}

// Function to get all the tasks from local storage and display (on page reload)
function getTasks() {
    for (i = 900; i <= 1700; i += 100) {
        console.log(i);
        let task = localStorage.getItem(i);
        // If there's a saved task for a specific time, retrieve and display 
        if ( task != null) {
            document.getElementById(i).value = task;
        } else {
            document.getElementById(i).value = "";
        }
    }
}

getTasks();