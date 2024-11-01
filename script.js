// Function to create a delay using Promise
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// Random delay generator
function randomDelay() {
    return Math.floor(Math.random() * 1000);
}

// Function to add dots one by one
function addDots(element, numDots) {
    let count = 0;
    const interval = setInterval(() => {
        if (count < numDots) {
            element.innerText += '.';
            count++;
        } else {
            clearInterval(interval);
        }
    }, 500); // Adjust speed of dot addition here (500 ms per dot)
}

// Display function using .then() for chaining
function display(str) {
    return delay(randomDelay()).then(() => {
        const show = document.createElement('p');
        show.innerText = str;
        document.body.appendChild(show);
        addDots(show, 3); // Add 3 dots one by one
    });
}

// Function to execute the display calls sequentially
function execute() {
    display("Installing Hacking")
        .then(() => display("Searching personal files"))
        .then(() => display("Files are Found"))
        .then(() => display("Downloading files"))
        .then(() => display("Installing files"))
        .then(() => display("Successfully Downloaded"))
        .then(() => display("Hacking is completed"));
}

// Initial function call
execute();
