/*
  This script handles the admin dashboard functionality for managing doctors:
  - Loads all doctor cards
  - Filters doctors by name, time, or specialty
  - Adds a new doctor via modal form


  Attach a click listener to the "Add Doctor" button
  When clicked, it opens a modal form using openModal('addDoctor')


  When the DOM is fully loaded:
    - Call loadDoctorCards() to fetch and display all doctors


  Function: loadDoctorCards
  Purpose: Fetch all doctors and display them as cards

    Call getDoctors() from the service layer
    Clear the current content area
    For each doctor returned:
    - Create a doctor card using createDoctorCard()
    - Append it to the content div

    Handle any fetch errors by logging them


  Attach 'input' and 'change' event listeners to the search bar and filter dropdowns
  On any input change, call filterDoctorsOnChange()


  Function: filterDoctorsOnChange
  Purpose: Filter doctors based on name, available time, and specialty

    Read values from the search bar and filters
    Normalize empty values to null
    Call filterDoctors(name, time, specialty) from the service

    If doctors are found:
    - Render them using createDoctorCard()
    If no doctors match the filter:
    - Show a message: "No doctors found with the given filters."

    Catch and display any errors with an alert


  Function: renderDoctorCards
  Purpose: A helper function to render a list of doctors passed to it

    Clear the content area
    Loop through the doctors and append each card to the content area


  Function: adminAddDoctor
  Purpose: Collect form data and add a new doctor to the system

    Collect input values from the modal form
    - Includes name, email, phone, password, specialty, and available times

    Retrieve the authentication token from localStorage
    - If no token is found, show an alert and stop execution

    Build a doctor object with the form values

    Call saveDoctor(doctor, token) from the service

    If save is successful:
    - Show a success message
    - Close the modal and reload the page

    If saving fails, show an error message
*/
import { openModal } from '../utils/modal.js';
import { getDoctors, saveDoctor, filterDoctors } from '../services/doctorServices.js';
import { createDoctorCard } from '../components/doctorCard.js';

const addDoctorBtn = document.getElementById('addDocBtn');
const searchInput = document.getElementById('doctorSearchInput');
const timeFilter = document.getElementById('timeFilter');
const specialtyFilter = document.getElementById('specialtyFilter');
const contentDiv = document.getElementById('content');

if (addDoctorBtn) {
  addDoctorBtn.addEventListener('click', () => {
    openModal('addDoctor');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadDoctorCards();
  searchInput?.addEventListener('input', filterDoctorsOnChange);
  timeFilter?.addEventListener('change', filterDoctorsOnChange);
  specialtyFilter?.addEventListener('change', filterDoctorsOnChange);
});

// Load all doctor cards on page load
async function loadDoctorCards() {
  try {
    const doctors = await getDoctors();
    renderDoctorCards(doctors);
  } catch (error) {
    console.error("Error loading doctors:", error);
  }
}

// Render doctor cards
function renderDoctorCards(doctors) {
  contentDiv.innerHTML = '';
  doctors.forEach(doc => {
    const card = createDoctorCard(doc);
    contentDiv.appendChild(card);
  });
}

// Filter doctors on any input change
async function filterDoctorsOnChange() {
  const name = searchInput?.value.trim() || null;
  const time = timeFilter?.value || null;
  const specialty = specialtyFilter?.value || null;

  try {
    const doctors = await filterDoctors(name, time, specialty);
    if (doctors.length === 0) {
      contentDiv.innerHTML = `<p class="no-results">No doctors found with the given filters.</p>`;
    } else {
      renderDoctorCards(doctors);
    }
  } catch (error) {
    alert("Error filtering doctors. Please try again later.");
    console.error(error);
  }
}

// Handle form submission for adding a doctor
export async function adminAddDoctor() {
  const name = document.getElementById("addDocName").value.trim();
  const email = document.getElementById("addDocEmail").value.trim();
  const phone = document.getElementById("addDocPhone").value.trim();
  const password = document.getElementById("addDocPassword").value;
  const specialty = document.getElementById("addDocSpecialty").value;
  const times = document.getElementById("addDocTimes").value.split(',').map(t => t.trim());

  const token = localStorage.getItem("token");
  if (!token) {
    alert("Admin not authenticated. Please log in again.");
    return;
  }

  const doctor = { name, email, phone, password, specialty, availableTimes: times };

  try {
    const result = await saveDoctor(doctor, token);
    if (result.success) {
      alert("Doctor added successfully!");
      document.getElementById("modal-close-btn").click();
      loadDoctorCards(); // Refresh doctor list
    } else {
      alert("Failed to add doctor: " + result.message);
    }
  } catch (error) {
    alert("Something went wrong while saving doctor.");
    console.error(error);
  }
}
