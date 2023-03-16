$("#btn").click(function () {

    const tickets = JSON.parse(localStorage.getItem('allTickets')) || [];
    const email = document.querySelector('#email').value;

    const tableBody = document.querySelector('#bookingsTableBody');

    tableBody.innerHTML = '';

 
    tickets.forEach((ticket) => {

        if (email == "all") {
            const row = tableBody.insertRow();
            row.insertCell().textContent = ticket.name;
            row.insertCell().textContent = ticket.email;
            row.insertCell().textContent = ticket.gender;
            row.insertCell().textContent = ticket.seatNumber;
            row.insertCell().textContent = ticket.date;
            row.insertCell().textContent = ticket.source;
            row.insertCell().textContent = ticket.destination;
        }


        if (ticket.email === email) {
            const row = tableBody.insertRow();
            row.insertCell().textContent = ticket.name;
            row.insertCell().textContent = ticket.email;
            row.insertCell().textContent = ticket.gender;
            row.insertCell().textContent = ticket.seatNumber;
            row.insertCell().textContent = ticket.date;
            row.insertCell().textContent = ticket.source;
            row.insertCell().textContent = ticket.destination;
        }
    });

    


});