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

        const isSeatBooked = allTickets.some((saved) => {
            return saved.seatNumber === ticket.seatNumber && saved.date === ticket.date && (saved.destination === ticket.destination && saved.source === ticket.source);
        });

        if (isSeatBooked) {
            alert(`Sorry, seat number ${ticket.seatNumber} is already booked. Please choose another seat.`);
        } else {
            let adjacentSeat = null;

            if (parseInt(ticket.seatNumber) % 2 == 0) {
                adjacentSeat = parseInt(ticket.seatNumber) - 1;
            } else {
                adjacentSeat = parseInt(ticket.seatNumber) + 1;
            }

            const adjacentticket = allTickets.find(
                (t) => parseInt(t.seatNumber) === adjacentSeat && t.date === ticket.date
            );

            if (adjacentticket && adjacentticket.gender !== ticket.gender && adjacentticket.date === ticket.date && adjacentticket.destination === ticket.destination && adjacentticket.source === ticket.source) {
                alert(`Sorry, you cannot book this seat as it is beside a ${adjacentticket.gender} customer's seat.`);
            } else {
                allTickets.push(ticket);
               // allTickets.unshift(ticket);
                localStorage.setItem('allTickets', JSON.stringify(allTickets));
                alert(`Your seat is booked! Here are your details:\n\nSeat Number: ${ticket.seatNumber}\nName: ${ticket.name}\nEmail: ${ticket.email}\nGender: ${ticket.gender}\nDate: ${ticket.date}\nSource: ${ticket.source}\nDestination: ${ticket.destination}`);
            }
        }
    });
});
