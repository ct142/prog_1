// Get the elements
const infoShowCheckbox = document.getElementById("is_info_show");
const emailHideCheckbox = document.getElementById("is_email_hidden");

// Check states and display info and email
function checkDisplayInfoEmail() {
  // Check if localStorage is available (IE8+)
  if (typeof window.localStorage !== "undefined") {
    // Your work starts here
  }
}

// Trigger checkbox event to hide/show the info
infoShowCheckbox.addEventListener("change", function () {
  // Your work starts here
});

// Trigger checkbox event to hide/show the email
emailHideCheckbox.addEventListener("change", function () {
  // Your work starts here
});

// When the page is loaded
window.onload = function () {
  // Force the value of is_info_show to true if it is not set
  // Keep the states of the two checkboxes between sessions
  if (typeof window.localStorage !== "undefined") {
    // Your work starts here
  }

  // Keep the states of info and email across sessions
  checkDisplayInfoEmail();
};
