# User Story Template
**Title:**
As a Admin,, I want to log into my portal with my username and password , so that i can manage the platform securely._
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
**Notes:**
- [Additional information or edge cases]

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



