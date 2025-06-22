# User Story Template
**Title:**
As a Admin,, I want to log into my portal with my username and password , so that i can manage the platform securely.
**Acceptance Criteria:**
- Login form accepts username and password.
- Authentication is handled using Spring Security.
- Admin credentials are stored securely in the database.
- On success, admin is redirected to the dashboard.
- On failure, an error message is shown.

**Priority:** [High/Medium/Low]
**Story Points:**
 -[ ] Create login form.
- [ ] Implement Spring Security config for admin role.
- [ ] Connect to database for credential validation.
- [ ] Add success/failure redirects.


- ### User Story
As an admin, I want to log out of the portal to protect system access.

### Acceptance Criteria
- Logout button is visible on the dashboard.
- Clicking logout invalidates the session and redirects to login page.
- Any further access requires re-login.

### Tasks
- [ ] Add logout endpoint using Spring Security.
- [ ] Display logout button on admin dashboard.
- [ ] Redirect user after logout.
 ### User Story
As an admin, I want to add a doctor with relevant details so that they can provide services on the platform.

### Acceptance Criteria
- Form collects doctor name, specialization, email, and phone.
- Data is validated before submission.
- Doctor is stored in the database.
- Success message shown after adding.

### Tasks
- [ ] Design add-doctor form (if using web UI).
- [ ] Create Doctor model.
- [ ] Add REST endpoint or controller to handle doctor creation.
- [ ] Validate inputs using JSR-303.
- [ ] Store doctor in database via JPA.
### User Story
As an admin, I want to run a stored procedure in MySQL CLI to track the number of appointments per month for usage statistics.

### Acceptance Criteria
- Stored procedure accepts a year as input.
- Returns appointment counts grouped by month.
- Procedure is documented for use in CLI or backend.

### Tasks
- [ ] Write SQL stored procedure:
  ```sql
  DELIMITER //
  CREATE PROCEDURE GetMonthlyAppointments(IN year INT)
  BEGIN
    SELECT MONTH(appointment_date) AS month,
           COUNT(*) AS total_appointments
    FROM appointments
    WHERE YEAR(appointment_date) = year
    GROUP BY MONTH(appointment_date);
  END //
  DELIMITER ;


  ### User Story
As a patient, I want to view a list of doctors without logging in so that I can explore my options before registering.

### Acceptance Criteria
- The doctor list is publicly accessible.
- Each doctor displays name, specialization, and availability.
- A call to action (e.g., "Register to Book") is visible.
- No sensitive data is shown unless logged in.

### Tasks
- [ ] Create a public REST endpoint to fetch doctors.
- [ ] Return doctor details (name, department, experience, etc.).
- [ ] Display doctor info in the frontend without requiring login.

### User Story
As a patient, I want to register with my email and password so that I can book appointments.

### Acceptance Criteria
- Registration form includes email, password, and basic profile info.
- Validations are enforced (email format, password strength).
- User is saved to the database.
- On success, user is redirected to login.

### Tasks
- [ ] Create `Patient` model/entity.
- [ ] Implement registration controller and form.
- [ ] Add validation with Spring Validation (JSR-303).
- [ ] Encrypt password using BCrypt.
- [ ] Store patient in the database.

### User Story
As a patient, I want to log into the portal so that I can manage my appointment bookings.

### Acceptance Criteria
- Patient can log in using email and password.
- Redirects to a dashboard after login.
- Patient sees appointment list and can manage (view/cancel).

### Tasks
- [ ] Setup Spring Security for patient role.
- [ ] Create login form and configure authentication.
- [ ] Add session tracking and role-based access.
- [ ] Show patient-specific dashboard with appointments.
### User Story
As a patient, I want to book an hour-long appointment with a doctor so that I can consult them at a scheduled time.

### Acceptance Criteria
- Booking form shows doctor availability.
- Patient selects date and hour-long time slot.
- Booking is saved in the database.
- Prevent overlapping bookings for same doctor/time.

### Tasks
- [ ] Create appointment entity with doctorId, patientId, startTime, endTime.
- [ ] Implement availability check logic.
- [ ] Save appointment to database via JPA.
- [ ] Show confirmation message on success.
### User Story
As a patient, I want to view my upcoming appointments so that I can prepare accordingly.

### Acceptance Criteria
- List all future appointments for the logged-in patient.
- Show date, time, doctor name, and purpose.
- Sorted by nearest date.

### Tasks
- [ ] Create a REST endpoint `/api/patient/upcoming-appointments`.
- [ ] Query appointments where patientId = loggedInUser and date > today.
- [ ] Display appointments in tabular format in frontend.
### User Story
As a patient, I want to log out of the portal so that my session is closed securely.

### Acceptance Criteria
- Logout button is visible once logged in.
- Session is invalidated on logout.
- Redirects to login or home page.

### Tasks
- [ ] Add logout URL in Spring Security config.
- [ ] Add logout link/button on dashboard.
- [ ] Handle session invalidation.
### User Story
As a doctor, I want to log into the portal with my credentials so that I can manage my appointments.

### Acceptance Criteria
- Login form accepts doctor credentials.
- Valid credentials redirect to the doctor dashboard.
- Invalid login attempts display a clear error message.
- Session is securely managed.

### Tasks
- [ ] Configure Spring Security for the `DOCTOR` role.
- [ ] Add login form and authentication endpoint.
- [ ] Redirect to `/doctor/dashboard` on success.
### User Story
As a doctor, I want to log out of the portal so that my personal data and patient information remain protected.

### Acceptance Criteria
- Logout option is visible on doctor dashboard.
- Session is invalidated on logout.
- Redirects to login or home page.

### Tasks
- [ ] Implement logout handler with Spring Security.
- [ ] Add logout link/button to frontend.
- [ ] Confirm session is cleared after logout.
### User Story
As a doctor, I want to view my appointment calendar so that I can stay organized and know my daily schedule.

### Acceptance Criteria
- Calendar shows all upcoming appointments.
- Each event includes time, patient name, and purpose.
- Sorted by date and time.

### Tasks
- [ ] Create API to fetch doctor's appointments.
- [ ] Format response for calendar UI.
- [ ] Integrate with frontend calendar component.
### User Story
As a doctor, I want to mark days or time slots when I'm unavailable so that patients cannot book during that time.

### Acceptance Criteria
- Form/UI allows selection of unavailable dates/times.
- These slots are blocked in the appointment scheduler.
- Stored in the database.

### Tasks
- [ ] Create `Unavailability` entity/model.
- [ ] Provide form to add/remove unavailability.
- [ ] Update appointment booking logic to exclude unavailable slots.
### User Story
As a doctor, I want to update my profile with current specialization and contact information so that patients see accurate data.

### Acceptance Criteria
- Form includes editable fields for name, specialization, phone, and email.
- Validates inputs and updates the database.
- Confirmation message shown after successful update.

### Tasks
- [ ] Add `/doctor/profile` endpoint.
- [ ] Create update form with current data.
- [ ] Implement validation and database update logic.
### User Story
As a doctor, I want to view patient details for upcoming appointments so that I can prepare accordingly.

### Acceptance Criteria
- Appointment view includes patient name, contact, medical history (optional).
- Patient data is fetched securely with proper role checks.
- Doctor cannot access unrelated patient data.

### Tasks
- [ ] Update appointment API to include patient info.
- [ ] Protect access using role-based security.
- [ ] Display patient details on appointment page or popup.


  



