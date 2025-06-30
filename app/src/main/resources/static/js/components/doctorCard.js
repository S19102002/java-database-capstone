/*
Import the overlay function for booking appointments from loggedPatient.js

  Import the deleteDoctor API function to remove doctors (admin role) from docotrServices.js

  Import function to fetch patient details (used during booking) from patientServices.js

  Function to create and return a DOM element for a single doctor card
    Create the main container for the doctor card
    Retrieve the current user role from localStorage
    Create a div to hold doctor information
    Create and set the doctor’s name
    Create and set the doctor's specialization
    Create and set the doctor's email
    Create and list available appointment times
    Append all info elements to the doctor info container
    Create a container for card action buttons
    === ADMIN ROLE ACTIONS ===
      Create a delete button
      Add click handler for delete button
     Get the admin token from localStorage
        Call API to delete the doctor
        Show result and remove card if successful
      Add delete button to actions container
   
    === PATIENT (NOT LOGGED-IN) ROLE ACTIONS ===
      Create a book now button
      Alert patient to log in before booking
      Add button to actions container
  
    === LOGGED-IN PATIENT ROLE ACTIONS === 
      Create a book now button
      Handle booking logic for logged-in patient   
        Redirect if token not available
        Fetch patient data with token
        Show booking overlay UI with doctor and patient info
      Add button to actions container
   
  Append doctor info and action buttons to the car
  Return the complete doctor card element
*/
// Import required functions
import { showBookingOverlay } from './loggedPatient.js';
import { deleteDoctor } from './doctorServices.js';
import { getPatientDetails } from './patientServices.js';

/**
 * Creates and returns a DOM element representing a doctor card
 * @param {Object} doctor - The doctor object with properties: id, name, specialty, email, availableTimes
 * @returns {HTMLElement} - The complete doctor card
 */
export function createDoctorCard(doctor) {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  // Create main card container
  const card = document.createElement("div");
  card.classList.add("doctor-card");

  // Create info container
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("doctor-info");

  const name = document.createElement("h3");
  name.textContent = `Dr. ${doctor.name}`;
  infoDiv.appendChild(name);

  const specialty = document.createElement("p");
  specialty.textContent = `Specialization: ${doctor.specialty}`;
  infoDiv.appendChild(specialty);

  const email = document.createElement("p");
  email.textContent = `Email: ${doctor.email}`;
  infoDiv.appendChild(email);

  const times = document.createElement("ul");
  times.textContent = "Available Times:";
  doctor.availableTimes.forEach(time => {
    const li = document.createElement("li");
    li.textContent = time;
    times.appendChild(li);
  });
  infoDiv.appendChild(times);

  // Create action container
  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("doctor-actions");

  // === ADMIN ROLE ===
  if (role === "admin") {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Doctor";
    deleteBtn.classList.add("adminBtn");

    deleteBtn.addEventListener("click", async () => {
      const confirmed = confirm(`Are you sure you want to delete Dr. ${doctor.name}?`);
      if (!confirmed) return;

      const response = await deleteDoctor(doctor.id, token);
      if (response.ok) {
        alert("Doctor deleted successfully.");
        card.remove();
      } else {
        alert("Failed to delete doctor.");
      }
    });

    actionsDiv.appendChild(deleteBtn);
  }

  // === NOT LOGGED-IN PATIENT ===
  else if (!token || role !== "patient") {
    const bookBtn = document.createElement("button");
    bookBtn.textContent = "Book Now";
    bookBtn.classList.add("dashboard-btn");

    bookBtn.addEventListener("click", () => {
      alert("Please log in as a patient to book an appointment.");
    });

    actionsDiv.appendChild(bookBtn);
  }

  // === LOGGED-IN PATIENT ===
  else if (role === "patient") {
    const bookBtn = document.createElement("button");
    bookBtn.textContent = "Book Now";
    bookBtn.classList.add("dashboard-btn");

    bookBtn.addEventListener("click", async () => {
      try {
        const patientData = await getPatientDetails(token);
        showBookingOverlay(doctor, patientData);
      } catch (error) {
        alert("Error fetching patient details. Please try again.");
      }
    });

    actionsDiv.appendChild(bookBtn);
  }

  // Final Assembly
  card.appendChild(infoDiv);
  card.appendChild(actionsDiv);
  return card;
}
