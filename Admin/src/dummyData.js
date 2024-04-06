export const userData = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Mar",
      "Active User": 5000,
    },
    {
      name: "Apr",
      "Active User": 4000,
    },
    {
      name: "May",
      "Active User": 3000,
    },
    {
      name: "Jun",
      "Active User": 2000,
    },
    {
      name: "Jul",
      "Active User": 4000,
    },
    {
      name: "Agu",
      "Active User": 3000,
    },
    {
      name: "Sep",
      "Active User": 4000,
    },
    {
      name: "Oct",
      "Active User": 1000,
    },
    {
      name: "Nov",
      "Active User": 4000,
    },
    {
      name: "Dec",
      "Active User": 3000,
    },
  ];

  export const productData = [
    {
      name: "Jan",
      "Sales": 4000,
    },
    {
      name: "Feb",
      "Sales": 3000,
    },
    {
      name: "Mar",
      "Sales": 5000,
    },
  ];

  export const staffRows = [
    {
      "id": "1",
      "fullname": "John Doe",
      "phone": "123-456-7890",
      "address": "123 Main St, City, Country",
      "gender": "Male",
      "username": "johndoe123",
      "email": "john.doe@example.com",
      "role": "Employee",
      "password": "encrypted_password_123",
      "staffID": "AP12345"
    },
    {
      "id": "2",
      "fullname": "Jane Smith",
      "phone": "987-654-3210",
      "address": "456 Elm St, Town, Country",
      "gender": "Female",
      "username": "janesmith456",
      "email": "jane.smith@example.com",
      "role": "Manager",
      "password": "encrypted_password_456",
      "staffID": "AP56789"
    },
    {
      "id": "3",
      "fullname": "Alex Johnson",
      "phone": "555-123-4567",
      "address": "789 Oak St, Village, Country",
      "gender": "Non-Binary",
      "username": "alexj789",
      "email": "alex.johnson@example.com",
      "role": "Administrator",
      "password": "encrypted_password_789",
      "staffID": "AP67890"
    },
    {
      "id": "4",
      "fullname": "Emily Brown",
      "phone": "111-222-3333",
      "address": "321 Pine St, Suburb, Country",
      "gender": "Female",
      "username": "emilyb333",
      "email": "emily.brown@example.com",
      "role": "Employee",
      "password": "encrypted_password_333",
      "staffID": "AP54321"
    },
    {
      "id": "5",
      "fullname": "Michael Johnson",
      "phone": "444-555-6666",
      "address": "987 Cedar St, Town, Country",
      "gender": "Male",
      "username": "michaelj666",
      "email": "michael.johnson@example.com",
      "role": "Employee",
      "password": "encrypted_password_666",
      "staffID": "AP98765"
    }
  ]

  export const clientsRows = [
    {
      "id": "1",
      "fullname": "John Doe",
      "phone": "123-456-7890",
      "address": "123 Main St, City, Country",
      "gender": "Male",
      "DOB": "1985-05-15",
      "ndisNo": "NDIS123456",
      "startdate": "2023-01-01",
      "enddate": "2023-12-31",
      "desc": "Caregiver for elderly patients",
      "role": "Caregiver",
      "documents": [
        "/path/to/document1.pdf",
        "/path/to/document2.jpg"
      ]
    },
    {
      "id": "2",
      "fullname": "Jane Smith",
      "phone": "987-654-3210",
      "address": "456 Elm St, Town, Country",
      "gender": "Female",
      "DOB": "1990-08-20",
      "ndisNo": "NDIS987654",
      "startdate": "2022-10-15",
      "enddate": null,
      "desc": "Support worker for individuals with disabilities",
      "role": "Support Worker",
      "documents": [
        "/path/to/document3.doc",
        "/path/to/document4.png"
      ]
    },
    {
      "id": "3",
      "fullname": "Alex Johnson",
      "phone": "555-123-4567",
      "address": "789 Oak St, Village, Country",
      "gender": "Non-Binary",
      "DOB": "1992-03-10",
      "ndisNo": "NDIS567890",
      "startdate": "2023-03-01",
      "enddate": null,
      "desc": "Occupational therapist specializing in pediatric care",
      "role": "Therapist",
      "documents": [
        "/path/to/document5.pdf",
        "/path/to/document6.jpg"
      ]
    }
  ]

  export const shiftRows = [
    {
      "id": "1",
      "location": "Main Office",
      "date": "2024-03-29",
      "time": "09:00 - 17:00",
      "type": "Regular",
      "duration": "8 hours",
      "client": "Acme Corporation",
      "staffEmail": "john.doe@example.com",
      "clockin": [
        {
          "time": "09:00",
          "accuracy": "High",
          "coordinates": {
            "lng": 45.6789,
            "lat": -123.4567
          }
        }
      ],
      "clockout": [
        {
          "time": "17:00",
          "accuracy": "High",
          "coordinates": {
            "lng": 45.6789,
            "lat": -123.4567
          }
        }
      ]
    },
    {
      "id": "2",
      "location": "Warehouse",
      "date": "2024-03-30",
      "time": "08:00 - 16:00",
      "type": "Regular",
      "duration": "8 hours",
      "client": "Tech Solutions Inc.",
      "staffEmail": "emma.smith@example.com",
      "clockin": [
        {
          "time": "08:00",
          "accuracy": "Medium",
          "coordinates": {
            "lng": 12.3456,
            "lat": -67.8901
          }
        }
      ],
      "clockout": [
        {
          "time": "16:00",
          "accuracy": "Medium",
          "coordinates": {
            "lng": 12.3456,
            "lat": -67.8901
          }
        }
      ]
    },
    {
      "id": "3",
      "location": "Customer Site",
      "date": "2024-03-31",
      "time": "10:00 - 18:00",
      "type": "On-Site Support",
      "duration": "8 hours",
      "client": "Global Enterprises",
      "staffEmail": "david.jones@example.com",
      "clockin": [
        {
          "time": "10:00",
          "accuracy": "High",
          "coordinates": {
            "lng": 78.9012,
            "lat": -34.5678
          }
        }
      ],
      "clockout": [
        {
          "time": "18:00",
          "accuracy": "High",
          "coordinates": {
            "lng": 78.9012,
            "lat": -34.5678
          }
        }
      ]
    },
    {
      "id": "4",
      "location": "Main Office",
      "date": "2024-04-01",
      "time": "08:30 - 17:30",
      "type": "Regular",
      "duration": "9 hours",
      "client": "Innovative Solutions Ltd.",
      "staffEmail": "lisa.wong@example.com",
      "clockin": [
        {
          "time": "08:30",
          "accuracy": "High",
          "coordinates": {
            "lng": 90.1234,
            "lat": -56.7890
          }
        }
      ],
      "clockout": [
        {
          "time": "17:30",
          "accuracy": "High",
          "coordinates": {
            "lng": 90.1234,
            "lat": -56.7890
          }
        }
      ]
    },
    {
      "id": "5",
      "location": "Main Office",
      "date": "2024-04-02",
      "time": "09:30 - 18:30",
      "type": "Regular",
      "duration": "9 hours",
      "client": "Global Tech Solutions",
      "staffEmail": "michael.smith@example.com",
      "clockin": [
        {
          "time": "09:30",
          "accuracy": "High",
          "coordinates": {
            "lng": 12.3456,
            "lat": -56.7890
          }
        }
      ],
      "clockout": [
        {
          "time": "18:30",
          "accuracy": "High",
          "coordinates": {
            "lng": 12.3456,
            "lat": -56.7890
          }
        }
      ]
    }
  ]