# User Story Template
**Title:**
As a Admin, I want to log into my portal with my username and password , so that i can manage the platform .
**Acceptance Criteria:**
- Login  acceptes  with credentials such as username and password.
- By using Spring Security we  handles authentication.
- DBMS is being use to store admin credentials.
- after redirecting the dashboard then we will  get confimation of success.
-  an error message is being  prompt failure of login by admin. 

**Priority:** [High]
**Story Points:**
 -[ ] login form will be create .
- [ ] Spring Security config for admin role will be implemented.
- [ ] credential validation will be connect with database.
- [ ]  success/failure redirects will be added.


- ### User Story
As an admin, I want to log out of the portal to protect system access.

### Acceptance Criteria
-  visibility of logout buttom  on the dashboard.
- on invalidates the session and redirects to login page by clic of logout.
- when we will  re-login then further access will be peority.

### Tasks
- [ ]  By use of  Spring Security we add logout endpoint .
- [ ]  on admin dashboard prompt logout dashboard.
- [ ]  after logout we redirected the user.

 ### User Story
As an admin, I want to add a doctor with relevant details so that they can provide services on the platform.

### Acceptance Criteria
-  doctor name, specialization, email and phone will be collected by form.
-  Before submission Data will be validated.
- DBMS is use to store Doctor.
-  after adding success massage will be prompt.

### User Story
As an admin, I want to run a stored procedure in MySQL CLI to track the number of appointments per month .
### Acceptance Criteria
-  a year as input accepted by stored procedure.
- Returns appointment counts grouped by month for Returning appointment.
-   CLI uses documented by procedure .

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
- A list  of doctors are being publicly accessible.
- Each doctor returns  department ,name,experience,  availability etc.
- A call to action (e.g., "Register to Book") is visible.
- No sensitive data is shown unless logged in.


### User Story
As a patient, I want to register with my email and password so that I can book appointments.

### Acceptance Criteria
- Registration form includes email, password, and basic profile info that create patient model entity.
-  Spring Validations are enforced (email format, password strength).
- user is redirected to login by implementing registration controller and form.


### User Story
As a patient, I want to log into the portal so that I can manage my appointment bookings.

### Acceptance Criteria
- by using email and password pratient can log into protal.
- after redirecting the dashboard then we will  get confimation of success.
- Patient view appointment list and  management processed .


### User Story
As a patient, I want to book an hour-long appointment with a doctor so that I can consult them at a scheduled time.

### Acceptance Criteria
-  availability of doctor will be found in booking form to create appointment entity with doctorId, patientId, startTime, endTime .
-  date and hour-long time slot will be selected by patient.
-   DBMS is used to store booking.
-  Bookings for same doctor/time preventing overlapping .

### User Story
As a patient, I want to view my upcoming appointments so that I can prepare .

### Acceptance Criteria
-  Create a REST endpoint `/api/patient/upcoming-appointments` by Listout all future appointments .
-Query appointments where patientId = loggedInUser and date > today.
- display date, time, doctor name, and purpose in tabular formate in frontend .


### User Story
As a patient, I want to log out of the portal so that my session is closed .

### Acceptance Criteria
- logout button on dashboard  once logged in.
-  Handle session invalidation on logout.
-  After redirecting the dashboard then we will  get confimation of success.
   

### User Story
As a doctor, I want to log into the portal with my credentials so that I can manage my appointments.

### Acceptance Criteria
- Login  acceptes  with user credentials to add login form and authentication endpoint.
- on success Valid credentials redirect to the doctor dashboard.
 -  display error message for attemting invalid login.

### User Story
As a doctor, I want to log out of the portal so that my personal data and patient information remain protected.

### Acceptance Criteria
 Login  acceptes  with user credentials to add login form and authentication endpoint.
- Logout option is visible on doctor dashboard.
- Session is invalidated on logout.


### User Story
As a doctor, I want to view my appointment calendar so that I can stay organized and know my daily schedule.

### Acceptance Criteria
-  displaying  all upcoming appointments by use of calender.
- Each event includes time, patient name, and purpose.
- Sorted by date and time Format response for calendar UI .


### User Story
As a doctor, I want to mark days or time slots when I'm unavailable so that patients cannot book during that time.

### Acceptance Criteria
- to create 'Unavialability ' entity/model by  allowing UI/form by selecting of unavailable dates/times.
-  within appointment scheduler slots are being blocked .
  - DBMS is used to store.

### User Story
As a doctor, I want to update my profile with current specialization and contact information so that patients see accurate data.

### Acceptance Criteria
-  Fields for name, specialization, phone, and email includes in form.
-  updates the database by use of validation input.
- after successful update we can look Confirmation message.


### User Story
As a doctor, I want to view patient details for upcoming appointments so that I can prepare accordingly.

### Acceptance Criteria
- for updating  API  where Appointment view includes patient name, contact, medical history .
- using role-based security Patient data is fetched securely .
-  unrelated patient data can not accepted by Doctor.




  



