// Sample bus data for trip details (Replace with actual data)
const busData = [
    {
        busNo: "12",
        type: "Express",
        departure: "10:00 AM",
        arrival: "10:30 AM",
        duration: "30 mins",
        charges: "₹50",
        seats: 20,
        route: [
            { lat: 25.276987, lng: 55.296249 },
            { lat: 25.276900, lng: 55.296300 },
            { lat: 25.277000, lng: 55.296400 }
        ],
        facilities: ["Wi-Fi", "Air Conditioning", "Charging Ports"],
        driver: {
            name: "Maheshbhai Parmar ",
            contact: "+91 9579210349"
        },
        gps: {
            location: "25.276987, 55.296249"
        },
        busDetails: {
            model: "Volvo B11R",
            capacity: 45
        }
    },
    {
        busNo: "17",
        type: "Standard",
        departure: "11:00 AM",
        arrival: "11:30 AM",
        duration: "30 mins",
        charges: "₹40",
        seats: 30,
        route: [
            { lat: 25.276987, lng: 55.296251 },
            { lat: 25.276900, lng: 55.296350 },
            { lat: 25.277100, lng: 55.296500 }
        ],
        facilities: ["Air Conditioning", "Charging Ports"],
        driver: {
            name: "Ashokh Tambe",
            contact: "+91 9523610234"
        },
        gps: {
            location: "25.276987, 55.296251"
        },
        busDetails: {
            model: "Mercedes-Benz Citaro",
            capacity: 40
        }
    }
];

// Function to initialize the map
let map;
function initMap() {
    const mapOptions = {
        zoom: 15,
        center: { lat: 25.276987, lng: 55.296249 },
        mapTypeId: 'roadmap',
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// Function to display the trip details based on bus number
function getTripDetails() {
    const busNo = document.getElementById("bus-number").value.trim();
    const tripDetailsSection = document.getElementById("trip-details");
    const busTable = document.getElementById("bus-table").getElementsByTagName('tbody')[0];
    const errorMessage = document.getElementById("error-message");
    const facilitiesList = document.getElementById("facility-list");
    const driverName = document.getElementById("driver-name");
    const driverContact = document.getElementById("driver-contact");
    const gpsLocation = document.getElementById("gps-location");
    const busModel = document.getElementById("bus-model");
    const busCapacity = document.getElementById("bus-capacity");

    // Clear previous data
    busTable.innerHTML = "";
    facilitiesList.innerHTML = "";
    driverName.innerHTML = "";
    driverContact.innerHTML = "";
    gpsLocation.innerHTML = "";
    busModel.innerHTML = "";
    busCapacity.innerHTML = "";
    errorMessage.style.display = "none";

    // Find bus by bus number
    const bus = busData.find(b => b.busNo === busNo);

    if (bus) {
        // Populate bus details in the table
        const row = busTable.insertRow();
        row.innerHTML = `
            <td>${bus.busNo}</td>
            <td>${bus.type}</td>
            <td>${bus.departure}</td>
            <td>${bus.arrival}</td>
            <td>${bus.duration}</td>
            <td>${bus.charges}</td>
            <td>${bus.seats}</td>
        `;

        // Display additional details
        bus.facilities.forEach(facility => {
            const li = document.createElement("li");
            li.textContent = facility;
            facilitiesList.appendChild(li);
        });

        driverName.textContent = `Name: ${bus.driver.name}`;
        driverContact.textContent = `Contact: ${bus.driver.contact}`;
        gpsLocation.textContent = `Current Location: ${bus.gps.location}`;
        busModel.textContent = `Model: ${bus.busDetails.model}`;
        busCapacity.textContent = `Capacity: ${bus.busDetails.capacity}`;

        // Display the route on the map
        displayRoute(bus.route);

    } else {
        // If bus not found
        errorMessage.style.display = "block";
    }
}

// Function to display bus route on the map
function displayRoute(route) {
    // Clear previous markers (if any)
    const markers = map.markers || [];
    markers.forEach(marker => marker.setMap(null));

    // Add new route markers
    route.forEach(location => {
        new google.maps.Marker({
            position: location,
            map: map,
        });
    });

    // Adjust map center and zoom
    map.setCenter(route[0]);
    map.setZoom(14);
}
