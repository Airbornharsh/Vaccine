class Vaccine {
    constructor() {
        this.book_Slot = document.getElementById("bookSlot");
        this.submit_Slot = document.getElementById("submitSlot");
        this.bookBt = document.getElementById("Book");
        this.SubmitBt = document.getElementById("submit");
        this.submit_Slot.style.display = "none";
        this.name = document.getElementById("name");
        this.email = document.getElementById("email");
        this.age = document.getElementById("age");
        this.phone = document.getElementById("phone");
        this.adhaar = document.getElementById("adhaarNumber");
        this.address = document.getElementById("address");
        this.date = document.getElementById("date");
        this.patientdata = [];
        this.Booking();
    }

    Booking() {
        this.bookBt.addEventListener("click", () => {
            this.submit_Slot.style.display = "block";
            this.book_Slot.style.display = "none";
            this.Submitting();
        });
    }

    Submitting() {
        this.SubmitBt.addEventListener("click", () => {
            if (this.name.value && this.email.value && this.age.value && this.phone.value && this.adhaar.value && this.address.value && this.date.value) {
                this.submitted();
            } else {
                this.Submitting();
                alert("Fill Properly");
            }
        });
    }

    submitted() {
        let patient = {
            name: this.name.value,
            email: this.email.value,
            age: this.age.value,
            phone: this.phone.value,
            adhaar: this.adhaar.value,
            address: this.address.value,
            date: this.date.value
        };

        this.patientdata.push(patient);
        localStorage.setItem(patient.name, JSON.stringify(patient));
        this.UpdatingSubmission();
    }

    UpdatingSubmission() {
        console.log("sorry");
        alert("SUBMITTED");
        document.location.reload();
    }
}


class App {
    static start() {
        new Vaccine();
    }
}

App.start();