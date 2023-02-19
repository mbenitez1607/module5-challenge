// Set today's date with Moment
let today = moment().format('dddd, MMMM do');
$("#currentDay").text(today);

// Function to save a task to local storage
function saveTask(id) {
    let task = document.getElementById(id);
    // Only store tasks that have content
    if (task.value !== "") {
        localStorage.setItem(id, task.value);
    }
}

// Function to get all the tasks from local storage and display (on page reload)
function getTasks() {
    for (i = 900; i <= 1700; i += 100) {
        let task = localStorage.getItem(i);
        // If there's a saved task for a specific time, retrieve and display 
        if ( task != null) {
            document.getElementById(i).value = task;
        } else {
            document.getElementById(i).value = "";
        }
    }
}

// Function to determine whether a time-block is in past, present, or future
function timeCheck() {
    let currentTime = moment().format('H') * 100;
    for (i = 900; i <= 1700; i += 100) {
        let inputI = document.getElementById(i);
        // CurrentTime is earlier than the time-block
        if (currentTime < i) {
            inputI.setAttribute("class","future textarea h-100");
        // CurrentTime is later than the time-block
        } else if (currentTime > i) {
            inputI.setAttribute("class","past textarea h-100");
        // CurrentTime is now
        } else {
            inputI.setAttribute("class","present textarea h-100");
        }
    }
}

getTasks();
timeCheck();