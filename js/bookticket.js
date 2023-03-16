$(document).ready(function () {
    const form = document.querySelector('form');
    const seatNumberSelect = document.querySelector('#seat-number');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#mail');
    const genderSelect = document.querySelector('#gender');
    const dateInput = document.querySelector('#dates');
    const sourceInput = document.querySelector('#Source');
    const destInput = document.querySelector('#Dest');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const ticket = {
            seatNumber: seatNumberSelect.value,
            name: nameInput.value,
            email: emailInput.value,
            gender: genderSelect.value,
            date: dateInput.value,
            source: sourceInput.value,
            destination: destInput.value,
        };

        let allTickets = JSON.parse(localStorage.getItem('allTickets')) || [];

        const isSeatBooked = allTickets.some((existingticket) => {
            return existingticket.seatNumber === ticket.seatNumber && existingticket.date === ticket.date;
});

  


        if (isSeatBooked) {
            alert(`Sorry, seat number ${ticket.seatNumber} is already booked. Please choose another seat.`);
        }

        else if (ticket.gender === 'male') {
            if (ticket.seatNumber % 2 === 0) {

                let adjacentSeat = parseInt(ticket.seatNumber) - 1;
                let adjacentticket = allTickets.find(
                    (ticket) => parseInt(ticket.seatNumber) === adjacentSeat
                );
                console.log(ticket.seatNumber)
                if (adjacentticket && adjacentticket.gender === "female" && ticket.gender === "male" && adjacentticket.date === ticket.date) {
                    console.log("......")
                    alert("Sorry, you cannot book this seat as it is beside a female customer's seat.");
                    return;
                }
                else {
                    allTickets.push(ticket);
                    localStorage.setItem('allTickets', JSON.stringify(allTickets));
                    alert(`Your seat is booked! Here are your details:\n\nSeat Number: ${ticket.seatNumber}\nName: ${ticket.name}\nEmail: ${ticket.email}\nGender: ${ticket.gender}\nDate: ${ticket.date}\nSource: ${ticket.source}\nDestination: ${ticket.destination}`);
                    return;
                }
            } else {
                let adjacentSeat = parseInt(ticket.seatNumber) + 1;
                let adjacentticket = allTickets.find(
                    (ticket) => parseInt(ticket.seatNumber) === adjacentSeat
                );
                if (adjacentticket && adjacentticket.gender === "female" && ticket.gender === "male" && adjacentticket.date === ticket.date) {
                    alert("Sorry, you cannot book this seat as it is beside a female customer's seat.");
                    return;
                }
                else {
                    allTickets.push(ticket);
                    localStorage.setItem('allTickets', JSON.stringify(allTickets));
                    alert(`Your seat is booked! Here are your details:\n\nSeat Number: ${ticket.seatNumber}\nName: ${ticket.name}\nEmail: ${ticket.email}\nGender: ${ticket.gender}\nDate: ${ticket.date}\nSource: ${ticket.source}\nDestination: ${ticket.destination}`);
                    return;
                }
            }
        }

        else {
            if (ticket.seatNumber % 2 === 0) {

                let adjacentSeat = parseInt(ticket.seatNumber) - 1;
                let adjacentticket = allTickets.find(
                    (ticket) => parseInt(ticket.seatNumber) === adjacentSeat
                );
                console.log(ticket.seatNumber)
                if (adjacentticket && adjacentticket.gender === "male" && ticket.gender === "female" && adjacentticket.date === ticket.date) {
                    console.log("......")
                    alert("Sorry, you cannot book this seat as it is beside a male customer's seat.");
                    return;
                }
                else {
                    allTickets.push(ticket);
                    localStorage.setItem('allTickets', JSON.stringify(allTickets));
                    alert(`Your seat is booked! Here are your details:\n\nSeat Number: ${ticket.seatNumber}\nName: ${ticket.name}\nEmail: ${ticket.email}\nGender: ${ticket.gender}\nDate: ${ticket.date}\nSource: ${ticket.source}\nDestination: ${ticket.destination}`);
                    return;
                }
            } else {
                let adjacentSeat = parseInt(ticket.seatNumber) + 1;
                let adjacentticket = allTickets.find(
                    (ticket) => parseInt(ticket.seatNumber) === adjacentSeat
                );
                if (adjacentticket && adjacentticket.gender === "male" && ticket.gender === "female" && adjacentticket.date === ticket.date) {
                    alert("Sorry, you cannot book this seat as it is beside a male customer's seat.");
                    return;
                }
                else {
                    allTickets.push(ticket);
                    localStorage.setItem('allTickets', JSON.stringify(allTickets));
                    alert(`Your seat is booked! Here are your details:\n\nSeat Number: ${ticket.seatNumber}\nName: ${ticket.name}\nEmail: ${ticket.email}\nGender: ${ticket.gender}\nDate: ${ticket.date}\nSource: ${ticket.source}\nDestination: ${ticket.destination}`);
                    return;
                }
            }
        }


    });
});