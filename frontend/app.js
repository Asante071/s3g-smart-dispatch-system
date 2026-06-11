console.log("APP LOADED");

async function loadTickets() {

    console.log("LOADING TICKETS");

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/api/tickets"
        );

        console.log("API RESPONSE:", response);
document.getElementById(
    "lastUpdated"
).textContent =
    "Last Updated: " +
    new Date().toLocaleTimeString();
        const tickets = await response.json();
document.getElementById(
    "apiIndicator"
).textContent =
    "🟢 API Online";
        console.log("TICKETS:", tickets);

        // Dashboard Counters

        document.getElementById(
            "ticketCount"
        ).textContent = tickets.length;

        let rows = "";

        let low = 0;
        let amber = 0;
        let high = 0;

        let critical = 0;
        let activityHtml = "";
        let breaches = 0;
        let engineerWorkload = {
              Sarah: 0,
              David: 0,
              Mike: 0
         };

        tickets.forEach(ticket => {

            if (ticket.engineer) {

    if (
        engineerWorkload[
            ticket.engineer
        ] !== undefined
    ) {

        engineerWorkload[
            ticket.engineer
        ]++;

    }

}

            let badge = "";

            if (ticket.risk === "HIGH") {
                badge =
                    '<span class="high">HIGH</span>';
            }

            if (ticket.risk === "AMBER") {
                badge =
                    '<span class="amber">MODERATE</span>';
            }

            if (ticket.risk === "LOW") {
                badge =
                    '<span class="low">LOW</span>';
            }

            let slaBadge = "";

if (ticket.sla_remaining <= 0) {

    slaBadge =
    `<span class="sla-critical">
        BREACHED
    </span>`;

}
else if (ticket.sla_remaining <= 2) {

    slaBadge =
    `<span class="sla-critical">
        ${ticket.sla_remaining} hrs
    </span>`;

}
else if (ticket.sla_remaining <= 4) {

    slaBadge =
    `<span class="sla-warning">
        ${ticket.sla_remaining} hrs
    </span>`;

}
else {

    slaBadge =
    `<span class="sla-safe">
        ${ticket.sla_remaining} hrs
    </span>`;

}

            rows += `
<tr>
    <td>${ticket.id}</td>
    <td>${ticket.issue}</td>
    <td>${badge}</td>
    <td>${slaBadge}</td>
    <td>

<select
    class="status-select"
    onchange="updateStatus(
        ${ticket.id},
        this.value
    )"
>

<option
    value="OPEN"
    ${ticket.status === "OPEN" ? "selected" : ""}
>
OPEN
</option>

<option
    value="IN_PROGRESS"
    ${ticket.status === "IN_PROGRESS" ? "selected" : ""}
>
  IN PROGRESS
   </option>

<option
    value="RESOLVED"
    ${ticket.status === "RESOLVED" ? "selected" : ""}
>
RESOLVED
</option>

<option
    value="CLOSED"
    ${ticket.status === "CLOSED" ? "selected" : ""}
>
CLOSED
        </option>

     </select>


</td>  
<td>

<select
    class="engineer-select"
    onchange="assignEngineer(
        ${ticket.id},
        this.value
    )"
>

<option
    value="Sarah"
    ${ticket.engineer === "Sarah" ? "selected" : ""}
>
Sarah
</option>

<option
    value="David"
    ${ticket.engineer === "David" ? "selected" : ""}
>
David
</option>

<option
    value="Mike"
    ${ticket.engineer === "Mike" ? "selected" : ""}
>
Mike
</option>

<option
    value="Unassigned"
    ${ticket.engineer === "Unassigned" ? "selected" : ""}
>
Unassigned
</option>

</select>

</td> 
</tr>
`;

            if (ticket.risk === "LOW") low++;
            if (ticket.risk === "AMBER") amber++;
            if (ticket.risk === "HIGH") high++;

            if (ticket.risk === "HIGH") {
                critical++;
            }

            if (ticket.sla_remaining <= 0) {
                breaches++;
            }
activityHtml += `
<li>
    Ticket #${ticket.id}
    -
    ${ticket.issue}
    (${ticket.status})
</li>
`;
        });

        document.getElementById(
            "ticketBody"
        ).innerHTML = rows;

document.getElementById(
    "activityList"
).innerHTML = activityHtml;

        document.getElementById(
            "criticalCount"
        ).textContent = critical;

        document.getElementById(
            "breachCount"
        ).textContent = breaches;
        const activeEngineers = Object
    .values(engineerWorkload)
    .filter(count => count > 0)
    .length;

document.getElementById(
    "engineerCount"
).textContent =
    activeEngineers;

        // Update Bar Chart

        ticketChart.data.datasets[0].data = [
            low,
            amber,
            high
        ];

        ticketChart.update();

        // Update Pie Chart

        riskPieChart.data.datasets[0].data = [
            low,
            amber,
            high
        ];

        riskPieChart.update();
        engineerChart
.data
.datasets[0]
.data = [

    engineerWorkload.Sarah,

    engineerWorkload.David,

    engineerWorkload.Mike

];

engineerChart.update();

    } catch (error) {

      document.getElementById(
    "apiIndicator"
).textContent =
    "🔴 API Offline";

console.error(
    "Error loading tickets:",
    error
);

    }
}


// ===============================
// BAR CHART
// ===============================

const ctx = document.getElementById(
    "ticketChart"
).getContext("2d");

const ticketChart = new Chart(ctx, {

    type: "bar",

    data: {

        labels: [
            "LOW",
            "MODERATE",
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

    },

    scales: {

        x: {

            ticks: {
                color: "#ffffff"
            },

            grid: {
                color: "rgba(255,255,255,0.08)"
            }

        },

        y: {

            beginAtZero: true,

            ticks: {
                color: "#ffffff"
            },

            grid: {
                color: "rgba(255,255,255,0.08)"
            }

        }

    }

}
    

});


// ===============================
// PIE CHART
// ===============================

const pieCtx = document.getElementById(
    "riskPieChart"
).getContext("2d");

const riskPieChart = new Chart(pieCtx, {

    type: "pie",

    data: {

        labels: [
            "LOW",
            "MODERATE",
            "HIGH"
        ],

        datasets: [{

            data: [
                0,
                0,
                0
            ],

            backgroundColor: [
                "#22c55e",
                "#f59e0b",
                "#ef4444"
            ]

        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false

    }

});


// ===============================
// INITIAL LOAD
// ===============================

loadTickets();


// ===============================
// AUTO REFRESH
// ===============================

setInterval(() => {

    console.log(
        "Refreshing dashboard..."
    );

    loadTickets();

}, 5000);
async function createTicket() {

    const id =
        document.getElementById("idInput").value;

    const title =
        document.getElementById("issueInput").value;

    const priority =
        document.getElementById("riskInput").value;

    if (!id || !title) {

        alert(
            "Please complete all fields."
        );

        return;
    }

    const ticket = {

        id: Number(id),

        title: title,

        priority: priority

    };

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/api/tickets",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify(
                    ticket
                )
            }
        );

        if (!response.ok) {

            throw new Error(
                "Failed to create ticket"
            );

        }

        alert(
            "Ticket created successfully!"
        );

        document.getElementById(
            "idInput"
        ).value = "";

        document.getElementById(
            "issueInput"
        ).value = "";

        document.getElementById(
            "riskInput"
        ).value = "LOW";

        loadTickets();

    } catch (error) {

        console.error(error);

        alert(
            "Error creating ticket"
        );

    }

}
async function updateStatus(
    ticketId,
    status
) {

    try {

        const response = await fetch(

            `http://127.0.0.1:8000/api/tickets/${ticketId}/status`,

            {

                method: "PUT",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify({

                    status: status

                })

            }

        );

        if (!response.ok) {

            throw new Error(
                "Failed to update status"
            );

        }

        loadTickets();

    }

    catch(error) {

        console.error(
            "Status update error:",
            error
        );

    }

}
async function assignEngineer(
    ticketId,
    engineer
) {

    try {

        const response = await fetch(

            `http://127.0.0.1:8000/api/tickets/${ticketId}/assign`,

            {

                method: "PUT",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify({

                    engineer: engineer

                })

            }

        );

        if (!response.ok) {

            throw new Error(
                "Failed to assign engineer"
            );

        }

        loadTickets();

    }

    catch(error) {

        console.error(
            "Engineer assignment error:",
            error
        );

    }

}
const engineerCtx = document
    .getElementById(
        "engineerChart"
    )
    .getContext("2d");

const engineerChart =
new Chart(engineerCtx, {

    type: "bar",

    data: {

        labels: [
            "Sarah",
            "David",
            "Mike"
        ],

        datasets: [{

            label:
            "Assigned Tickets",

            data: [
                0,
                0,
                0
            ],

            backgroundColor: [
                "#3b82f6",
                "#8b5cf6",
                "#14b8a6"
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
async function processSLA() {

    try {

        await fetch(

            "http://127.0.0.1:8000/api/process-sla",

            {
                method: "POST"
            }

        );

        loadTickets();

    }

    catch(error) {

        console.error(error);

    }

}
async function processSLA() {

    try {

        const response = await fetch(

            "http://127.0.0.1:8000/api/process-sla",

            {
                method: "POST"
            }

        );

        if (!response.ok) {

            throw new Error(
                "Failed to process SLA"
            );

        }

        loadTickets();

    }

    catch(error) {

        console.error(
            "SLA processing error:",
            error
        );

    }

}