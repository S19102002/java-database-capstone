Added schema design for Smart Clinic
### Table: patients

-patient_id : INT,PRIMARY KEY, AUTO  INCREMENT            
-name:   VARCHAR(100),  NOT NULL                                     
-email: VARCHAR(100)  NOT NULL                           
-phone:  VARCHAR(15) , NOT NULL                             
-dob:    DATE ,  NOT NULL                                      
-gender: VARCHAR(10) ,CHECK (gender IN ('Male', 'Female', 'Other'))
 address:     TEXT       
                    

### Table : doctors

-doctor_id: INT ,PRIMARY KEY, AUTO INCREMENT                     
-name: VARCHAR(100) , NOT NULL                                             
-email:VARCHAR(100) , NOT NULL                                     
-phone: VARCHAR(15),NOT NULL
-clinic_id: INT, FOREIGN KEY REFERENCES clinic_locations(clinic_id)
-available_from: TIME,NOT NULL                                    
-available_to: TIME, NOT NULL                                             

### Table :appointment 

-appointment_id:INT ,PRIMARY KEY, AUTO INCREMENT                                              
-patient_id: INT, FOREIGN KEY REFERENCES patients(patient_id) ON DELETE CASCADE           
-doctor_id:INT, FOREIGN KEY REFERENCES doctors(doctor_id)                                   
-appointment_date: DATE , NOT NULL                                                                      
-start_time: TIME, NOT NULL                                                                      
-end_time:TIME,NOT NULL                                                                      
-status: VARCHAR(20) , CHECK (status IN ('scheduled', 'completed', 'cancelled')) 

### Table: admin 

-admin_id: INT ,PRIMARY KEY, AUTO  INCREMENT 
-username: VARCHAR(50) , NOT NULL
-email: VARCHAR(100) , NOT NULL
-password_hash : VARCHAR(255) , NOT NULL                         
-role:VARCHAR(20)   

### Table: clinic_locations

-clinic_id:INT,PRIMARY KEY, AUTO  INCREMENT 
-clinic_name: VARCHAR(100) , NOT NULL                    
-address: TEXT ,NOT NULL                         
-phone: VARCHAR(15), NOT NULL 

### Table : payments

-payment_id: INT,PRIMARY KEY, AUTO  INCREMENT                                  
-appointment_id: INT , FOREIGN KEY REFERENCES appointment(appointment_id)              
-amount: DECIMAL(10,2) , NOT NULL                                                          
-payment_date:TIMESTAMP,                                       
-status: VARCHAR(20),  CHECK (status IN ('pending', 'paid', 'failed')) 

## MongoDB Collection Design
### Collection: prescriptions
{
  "prescription_id": "RX987654321",
  "appointment_id": 104, 
  "patient_id": 17,
  "doctor_id": 3,
  "issued_on": "2025-06-22T10:30:00Z",
  "medicines": [
{
      "name": "Amoxicillin",
      "dosage": "500mg",
      "frequency": "3 times a day",
      "duration": "5 days",
      "instructions": "After meals"
    },
    {
      "name": "Paracetamol",
      "dosage": "650mg",
      "frequency": "2 times a day",
      "duration": "3 days",
      "instructions": "Only if fever > 100°F"
    }
  ],
  "notes": "Patient reported mild allergy. Monitor closely.",
  "tags": ["fever", "antibiotic", "urgent"],
  "metadata": {
    "created_by": "Dr. Shalini Rao",
    "verified": true,
    "last_updated": "2025-06-22T11:15:00Z"
  }
}

 ### Collection: feedback  
{
  "feedback_id": "FB2025062201",
  "appointment_id": 104,
  "patient_id": 17,
  "doctor_id": 3,
  "rating": 4.5,
  "comments": "Dr. Shalini was very attentive and helpful!",
  "tags": ["communication", "clean_clinic", "professional"],
  "submitted_on": "2025-06-22T14:00:00Z",
  "metadata": {
    "anonymous": false,
    "device": "mobile"
  }
}

 ### Collection : logs
{
  "log_id": "LOG20250622102001",
  "event_type": "LOGIN_SUCCESS",
  "user_id": 3,
  "user_role": "DOCTOR",
  "timestamp": "2025-06-22T10:20:00Z",
  "ip_address": "192.168.1.5",
  "details": {
    "device": "Chrome on Windows",
    "location": "Kolkata, India"
  }
}

 ### Collection : messages
{
  "message_id": "MSG202506220910",
  "sender_id": 17,
  "receiver_id": 3,
  "sender_role": "PATIENT",
  "receiver_role": "DOCTOR",
  "content": "Hello Doctor, can I take the medicine with food?",
  "sent_at": "2025-06-22T09:10:00Z",
  "read": false,
  "attachments": [],
  "thread_id": "THR20250621P17D3"
}







