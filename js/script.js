// invite button
const addGuestButton = document.querySelector(".invite");

// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");

// text input box
const guestInput = document.querySelector(".add-guest input");

// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");

// span class for number of guests attending
const guestCount = document.querySelector(".attendance");

// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

// "Assign dishes!" button
const assignButton = document.querySelector(".assign");

// List of assigned items
const assignedItems = document.querySelector(".assigned-items");

////Add an Event Listener & Create an Element
addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    if (guest !== "") {
        addToList(guest);
        clearInput();
        updateGuestCount();
    }
});

////Clear the Input Box
const clearInput = function () {
    guestInput.value = "";
};

////Refactor Code
addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

////Limit the Guest List
updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

const assignItems = function () {
    const potluckItems = ["potato salad", "veggie nori rolls", "deviled eggs", "couscous salad", "peach and tahini tarts", "mini ice cream cakes", "cabbage/kale cole slaw w/ miso-ginger dressing", "tacos", "ribs", "cheesecake", "fried rice", "peach cobbler"];
    const allGuests = document.querySelectorAll(".guest-list li");
    for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        let randomPotluckItem = potluckItems[randomPotluckIndex];
        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
        assignedItems.append(listItem);
        potluckItems.splice(randomPotluckIndex, 1);
    }
    
};

assignButton.addEventListener("click", function () {
    assignItems();
    assignButton.disbaled = true;
});