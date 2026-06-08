console.log("APP LOADED");

async function loadTickets() {

    console.log("LOADING TICKETS");

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/api/tickets"
        );

        console.log("API RESPONSE:", response);

        const tickets = await response.json();

        console.log("TICKETS:", tickets);

        // Update Open Ticket Count
        document.getElementById(
            "ticketCount"
        ).textContent = tickets.length;

        let rows = "";

        let low = 0;
        let amber = 0;
        let high = 0;

        tickets.forEach(ticket => {

            rows += `
                <tr>
                    <td>${ticket.id}</td>
                    <td>${ticket.issue}</td>
                    <td>${ticket.risk}</td>
                    <td>${ticket.status}</td>
                </tr>
            `;

            if (ticket.risk === "LOW") low++;
            if (ticket.risk === "AMBER") amber++;
            if (ticket.risk === "HIGH") high++;

        });

        document.getElementById(
            "ticketBody"
        ).innerHTML = rows;

        // Update Chart
        ticketChart.data.datasets[0].data = [
            low,
            amber,
            high
        ];

        ticketChart.update();

    } catch (error) {

        console.error(
            "Error loading tickets:",
            error
        );

    }
}


// Create Chart

const ctx = document.getElementById(
    "ticketChart"
).getContext("2d");

const ticketChart = new Chart(ctx, {

    type: "bar",

    data: {

        labels: [
            "LOW",
            "AMBER",
            "HIGH"
        ],

        datasets: [{

            label: "Ticket Risk Distribution",

            data: [
                0,
                0,
                0
            ],

            backgroundColor: [
                "#22c55e",
                "#f59e0b",
                "#ef4444"
            ],

            borderRadius: 8

        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            }

        }

    }

});


// Load Dashboard Data

loadTickets();