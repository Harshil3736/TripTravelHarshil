// Example bus data
const busData = [
    {
        busNo: "12",
        arrival: "10:00 AM",
        departure: "10:30 AM",
        type: "Express",
        duration: "30 mins",
        charges: "₹50",
        seats: 20,
        timings: ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"]
    },
    {
        busNo: "17",
        arrival: "11:00 AM",
        departure: "11:30 AM",
        type: "Standard",
        duration: "30 mins",
        charges: "₹40",
        seats: 30,
        timings: ["11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"]
    },
    {
        busNo: "22",
        arrival: "12:00 PM",
        departure: "12:30 PM",
        type: "Express",
        duration: "30 mins",
        charges: "₹60",
        seats: 15,
        timings: ["12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM"]
    },
    {
        busNo: "403",
        arrival: "01:00 PM",
        departure: "01:30 PM",
        type: "Standard",
        duration: "30 mins",
        charges: "₹45",
        seats: 25,
        timings: ["01:00 PM", "03:00 PM", "05:00 PM", "07:00 PM", "09:00 PM"]
    },
    {
        busNo: "263",
        arrival: "02:00 PM",
        departure: "02:30 PM",
        type: "Express",
        duration: "30 mins",
        charges: "₹55",
        seats: 18,
        timings: ["02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM", "10:00 PM"]
    }
];

// Function to display bus details in the table
function displayBusDetails() {
    const busTable = document.getElementById('bus-table');
    busData.forEach(bus => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${bus.busNo}</td>
            <td>${bus.arrival}</td>
            <td>${bus.departure}</td>
            <td>${bus.type}</td>
            <td>${bus.duration}</td>
            <td>${bus.charges}</td>
            <td>${bus.seats}</td>
        `;
        busTable.appendChild(row);
    });
}

// Function to display bus timings
function displayBusTimings() {
    const busTimingList = document.getElementById('bus-timing-list');
    busData.forEach(bus => {
        const timingsItem = document.createElement('li');
        timingsItem.innerHTML = `<strong>Bus No. ${bus.busNo}</strong>: ${bus.timings.join(', ')}`;
        busTimingList.appendChild(timingsItem);
    });
}

// Initialize the page content
window.onload = function() {
    displayBusDetails();
    displayBusTimings();
};
