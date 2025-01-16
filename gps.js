// Sample bus data
const busData = [
    {
        busNo: "101",
        arrival: "10:00 AM",
        departure: "10:30 AM",
        type: "Express",
        duration: "30 mins",
        charges: "₹50",
        seats: 20,
        liveLocation: { lat: 25.276987, lng: 55.296249 }, // Sample latitude and longitude
    },
    {
        busNo: "102",
        arrival: "11:00 AM",
        departure: "11:30 AM",
        type: "Standard",
        duration: "30 mins",
        charges: "₹40",
        seats: 30,
        liveLocation: { lat: 25.276987, lng: 55.296251 }, // Sample latitude and longitude
    },
    {
        busNo: "103",
        arrival: "12:00 PM",
        departure: "12:30 PM",
        type: "Express",
        duration: "30 mins",
        charges: "₹60",
        seats: 15,
        liveLocation: { lat: 25.276988, lng: 55.296252 }, // Sample latitude and longitude
    },
    {
        busNo: "104",
        arrival: "01:00 PM",
        departure: "01:30 PM",
        type: "Standard",
        duration: "30 mins",
        charges: "₹45",
        seats: 25,
        liveLocation: { lat: 25.276989, lng: 55.296253 }, // Sample latitude and longitude
    },
    {
        busNo: "105",
        arrival: "02:00 PM",
        departure: "02:30 PM",
        type: "Express",
        duration: "30 mins",
        charges: "₹55",
        seats: 18,
        liveLocation: { lat: 25.276990, lng: 55.296254 }, // Sample latitude and longitude
    }
];

// Function to initialize the map
let map;
function initMap() {
    // Default map options
    const mapOptions = {
        zoom: 15,
        center: { lat: 25.276987, lng: 55.296249 }, // Default center (can be changed later)
        mapTypeId: 'roadmap',
    };

    // Creating the map
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// Function to track bus based on bus number
function trackBus() {
    const busNo = document.getElementById("bus-number").value.trim();
    const busDetailsSection = document.getElementById("bus-details");
    const busTable = document.getElementById("bus-table");
    const locationDiv = document.getElementById("location");
    const errorMessage = document.getElementById("error-message");

    // Clear previous data
    busTable.innerHTML = "";
    locationDiv.innerHTML = "<p>Loading...</>";
    errorMessage.style.display = "none";

    // Find bus by bus number
    const bus = busData.find(b => b.busNo === busNo);

    if (bus) {
        // Populate bus details in the table
        const row = document.createElement("tr");
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

        // Display live location (latitude and longitude)
        locationDiv.innerHTML = `<p>Live Location: ${bus.liveLocation.lat}, ${bus.liveLocation.lng}</p>`;

        // Center the map on the bus location and add a marker
        map.setCenter(bus.liveLocation); // Move the map to the bus location
        new google.maps.Marker({
            position: bus.liveLocation,
            map: map,
            title: `Bus No. ${bus.busNo}`,
        });
    } else {
        // If bus not found
        errorMessage.style.display = "block";
        locationDiv.innerHTML = "<p>Please enter a valid bus number.</p>";
    }
}
