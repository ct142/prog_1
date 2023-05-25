// Get the elements
const infoShowCheckbox = document.getElementById("is_info_show");
const emailHideCheckbox = document.getElementById("is_email_hidden");

// Check states and display info and email
function checkDisplayInfoEmail() {
  // Check if localStorage is available (IE8+)
  if (typeof window.localStorage !== "undefined") {
    // Check if is_info_show is set in localStorage
    if (!localStorage.getItem("is_info_show")) {
      // Set default value if not set
      localStorage.setItem("is_info_show", true);
    }

    // Check if is_email_hidden is set in localStorage
    if (!localStorage.getItem("is_email_hidden")) {
      // Set default value if not set
      localStorage.setItem("is_email_hidden", false);
    }

    // Get the stored values
    const isInfoShow = localStorage.getItem("is_info_show") === "true";
    const isEmailHidden = localStorage.getItem("is_email_hidden") === "true";

    // Set the checkboxes based on stored values
    infoShowCheckbox.checked = isInfoShow;
    emailHideCheckbox.checked = isEmailHidden;

    // Display info and email based on stored values
    const infoElement = document.getElementById("info");
    const emailElement = document.getElementById("email");

    infoElement.style.display = isInfoShow ? "block" : "none";
    emailElement.style.display = isEmailHidden ? "none" : "block";
  }
}

// Trigger checkbox event to hide/show the info
infoShowCheckbox.addEventListener("change", function () {
  // Store the state in localStorage
  localStorage.setItem("is_info_show", infoShowCheckbox.checked);
  checkDisplayInfoEmail();
});

// Trigger checkbox event to hide/show the email
emailHideCheckbox.addEventListener("change", function () {
  // Store the state in localStorage
  localStorage.setItem("is_email_hidden", emailHideCheckbox.checked);
  checkDisplayInfoEmail();
});

// When the page is loaded
window.onload = function () {
  // Force the value of is_info_show to true if it is not set
  // Keep the states of the two checkboxes between sessions
  if (typeof window.localStorage !== "undefined") {
    if (!localStorage.getItem("is_info_show")) {
      localStorage.setItem("is_info_show", true);
    }
  }

  // Keep the states of info and email across sessions
  checkDisplayInfoEmail();
};