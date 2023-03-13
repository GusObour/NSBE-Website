$(document).ready(function(){
    const toggleButton = document.getElementById('toggle-button');
    const navList = document.getElementById('navi_list');
    toggleButton.addEventListener('click',()=>{
        navList.classList.toggle('active');
    });
    const events = [
        {
            eventTitle: "event 1",
            eventLocation : "Union 101",
            eventDetails: "blah blah blah",
            eventSignUp: "#"
        },
        {
            eventTitle: "event 2",
            eventLocation : "Union 101",
            eventDetails: "blah blah blah",
            eventSignUp: "#"
        },
        {
            eventTitle: "event 3",
            eventLocation : "Union 101",
            eventDetails: "blah blah blah",
            eventSignUp: "#"
        },
        {
            eventTitle: "event 4",
            eventLocation : "Union 101",
            eventDetails: "blah blah blah",
            eventSignUp: "#"
        },
        {
            eventTitle: "event 5",
            eventLocation : "Union 101",
            eventDetails: "blah blah blah",
            eventSignUp: "#"
        },
        {
            eventTitle: "event 6",
            eventLocation : "Union 101",
            eventDetails: "blah blah blah",
            eventSignUp: "#"
        }
    ];
    const eventsHeading = document.querySelector(".events-container h2");
    const eventsContainer = document.querySelector(".events-container .events");
    const eventsSearch = document.querySelector(".events-container .event-search");
    let searchTerm = "";
    if(events.length == 1){
        eventsHeading.innerHTML = `${events.length} event`;
    }
    else{eventsHeading.innerHTML = `${events.length} events`;}
    const createEventListingCards = () =>{
        eventsContainer.innerHTML = "";
        events.forEach((job) =>{
            if(job.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())){
                let eventCard = document.createElement("div");
                eventCard.classList.add("event");

                let title = document.createElement("h3");
                title.innerHTML = job.eventTitle;
                title.classList.add("event-title");

                let location = document.createElement("h6");
                location.innerHTML = job.eventLocation;
                location.classList.add("event-location");

                let details = document.createElement("h6");
                details.innerHTML = job.eventDetails;
                details.classList.add("event-details");

                let eventSignUp = document.createElement("a");
                eventSignUp.href = job.eventSignUp;
                eventSignUp.innerHTML = "RSVP";
                eventSignUp.classList.add("eventSignUp-btn");

                eventCard.appendChild(title);
                eventCard.appendChild(location);
                eventCard.appendChild(details);
                eventCard.appendChild(eventSignUp);

                eventsContainer.appendChild(eventCard);
            }
        });
    };
    createEventListingCards();
    eventsSearch.addEventListener("input", (e)=>{
        searchTerm = e.target.value;
        createEventListingCards();
    });
    eventsContainer.addEventListener("click",(e)=>{
        e.target.setAttribute("target", "_blank");
    });
});