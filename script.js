function createCalendarhildElement(weekNumber, weekSum) {
    let childDiv = document.createElement("div");
    childDiv.className = "week";
    // creating week element's elements
    // week number
    let childDivNumber = document.createElement("div");
    childDivNumber.className = "week-top";
    childDivNumber.innerHTML = i + 1;
    // sum element
    let childDivSum = document.createElement("div");
    childDivSum.className = "week-main";
    childDivSum.innerHTML = currentAdd;
    // combining elements
    childDiv.appendChild(childDivNumber);
    childDiv.appendChild(childDivSum);
    
    return childDiv;
}

function clearCalendarArea(parentDiv) {
    parentDiv.innerHTML = '';
}

function drawCalendar(parentDiv, startSum, addSum) {
    let finalSum = 0;
    let currentAdd = startSum;
    
    for (let i = 0; i < 52; i++) {
        // creating week element
        parentDiv.appendChild(createCalendarhildElement(i + 1, currentAdd));
        // changing varuables
        finalSum += currentAdd;
        currentAdd += addSum;
    }

    document.getElementById("final-sum").innerHTML = "Final Sum: " + finalSum;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calculate-calendar").onclick = () => {
        let startSum = parseInt(document.getElementById("start-sum").value);
        let weekAdd = parseInt(document.getElementById("week-add").value);

        const calendarDiv = document.getElementById("calculator");
        
        clearCalendarArea(calendarDiv);
        drawCalendar(calendarDiv, startSum, weekAdd);
    }
});