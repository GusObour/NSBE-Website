// $(document).ready(function(){
//     const toggleButton = document.getElementById('toggle-button');
//     const navList = document.getElementById('navi_list');
//     toggleButton.addEventListener('click',()=>{
//         navList.classList.toggle('active');
//     });
//     const events = [
//         {
//             eventTitle: "event 1",
//             eventLocation : "Union 101",
//             eventDetails: "blah blah blah",
//             eventSignUp: "#"
//         },
//         {
//             eventTitle: "event 2",
//             eventLocation : "Union 101",
//             eventDetails: "blah blah blah",
//             eventSignUp: "#"
//         },
//         {
//             eventTitle: "event 3",
//             eventLocation : "Union 101",
//             eventDetails: "blah blah blah",
//             eventSignUp: "#"
//         },
//         {
//             eventTitle: "event 4",
//             eventLocation : "Union 101",
//             eventDetails: "blah blah blah",
//             eventSignUp: "#"
//         },
//         {
//             eventTitle: "event 5",
//             eventLocation : "Union 101",
//             eventDetails: "blah blah blah",
//             eventSignUp: "#"
//         },
//         {
//             eventTitle: "event 6",
//             eventLocation : "Union 101",
//             eventDetails: "blah blah blah",
//             eventSignUp: "#"
//         }
//     ];
//     const eventsHeading = document.querySelector(".events-container h2");
//     const eventsContainer = document.querySelector(".events-container .events");
//     const eventsSearch = document.querySelector(".events-container .event-search");
//     let searchTerm = "";
//     if(events.length == 1){
//         eventsHeading.innerHTML = `${events.length} event`;
//     }
//     else{eventsHeading.innerHTML = `${events.length} events`;}
//     const createEventListingCards = () =>{
//         eventsContainer.innerHTML = "";
//         events.forEach((job) =>{
//             if(job.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())){
//                 let eventCard = document.createElement("div");
//                 eventCard.classList.add("event");

//                 let title = document.createElement("h3");
//                 title.innerHTML = job.eventTitle;
//                 title.classList.add("event-title");

//                 let location = document.createElement("h6");
//                 location.innerHTML = job.eventLocation;
//                 location.classList.add("event-location");

//                 let details = document.createElement("h6");
//                 details.innerHTML = job.eventDetails;
//                 details.classList.add("event-details");

//                 let eventSignUp = document.createElement("a");
//                 eventSignUp.href = job.eventSignUp;
//                 eventSignUp.innerHTML = "RSVP";
//                 eventSignUp.classList.add("eventSignUp-btn");

//                 eventCard.appendChild(title);
//                 eventCard.appendChild(location);
//                 eventCard.appendChild(details);
//                 eventCard.appendChild(eventSignUp);

//                 eventsContainer.appendChild(eventCard);
//             }
//         });
//     };
//     createEventListingCards();
//     eventsSearch.addEventListener("input", (e)=>{
//         searchTerm = e.target.value;
//         createEventListingCards();
//     });
//     eventsContainer.addEventListener("click",(e)=>{
//         e.target.setAttribute("target", "_blank");
//     });
// });


$(document).ready(function(){
    const toggleButton = document.getElementById('toggle-button');
    const navList = document.getElementById('navi_list');
    toggleButton.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
    
    const events = [
      {
        eventTitle: "event 1",
        eventLocation : "Union 101",
        eventDetails: "blah blah blah",
        eventSignUp: "#",
        eventDate: "04-01-2023",
        eventStartTime: "6:00 PM"
      },
      {
        eventTitle: "event 2",
        eventLocation : "Union 101",
        eventDetails: "blah blah blah",
        eventSignUp: "#",
        eventDate: "04-09-2023",
        eventStartTime: "6:00 PM"
      },
      {
        eventTitle: "Avent 3",
        eventLocation : "Union 101",
        eventDetails: "blah blah blah",
        eventSignUp: "#",
        eventDate: "04-12-2023",
        eventStartTime: "6:00 PM"
      }
    ];
    
    const eventsHeading = document.querySelector(".events-container h2");
    const eventsContainer = document.querySelector(".events-container .events");
    const eventsSearch = document.querySelector(".events-container .event-search");
    const dateFilter = document.querySelector("#date-filter");
    const alphaSort = document.querySelector("#alpha-sort");
    
    let searchTerm = "";
    let filteredEvents = events.slice(); // create a copy of events array
    
    if (events.length == 1) {
      eventsHeading.innerHTML = `${events.length} event`;
    } else {
      eventsHeading.innerHTML = `${events.length} events`;
    }
    
    const createEventListingCards = () => {
      eventsContainer.innerHTML = "";
    
      // sort events by title if alphaSort button is clicked
      if (alphaSort.classList.contains("active")) {
        console.log("sleep")
        filteredEvents.sort((a, b) => a.eventTitle.localeCompare(b.eventTitle));
      }
    
      filteredEvents.forEach((event) => {
        // filter events based on date
        const eventDate = new Date(event.eventDate);
        const today = new Date();
        let displayEvent = true;
    
        switch (dateFilter.value) {
          case "today":
            displayEvent = eventDate.toDateString() === today.toDateString();
            break;
          case "tomorrow":
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            displayEvent = eventDate.toDateString() === tomorrow.toDateString();
            break;
          case "this-week":
            const endOfWeek = new Date(today);
            endOfWeek.setDate(today.getDate() + 7);
            displayEvent =
              eventDate >= today && eventDate <= endOfWeek;
            break;
          case "next-week":
            const nextWeek = new Date(today);
            nextWeek.setDate(today.getDate() + 7);
            const endOfNextWeek = new Date(today);
            endOfNextWeek.setDate(today.getDate() + 14);
            displayEvent =
              eventDate >= nextWeek && eventDate <= endOfNextWeek;
            break;
          default:
            // do nothing
            break;
        }
    
        // filter events based on search term
        if (displayEvent && event.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
          let eventCard = document.createElement("div");
          eventCard.classList.add("event");
    
          let title = document.createElement("h3");
          title.innerHTML = event.eventTitle;
          title.classList.add("event-title");
    
          let location = document.createElement("h6");
          location.innerHTML = event.eventLocation;
          location.classList.add("event-location");

          let date = document.createElement("h6");
          date.innerHTML = event.eventDate;
          date.classList.add("event-date");

          let time = document.createElement("h6");
          time.innerHTML = event.eventStartTime;
          time.classList.add("event-time");
    
          let details = document.createElement("h6");
          details.innerHTML = event.eventDetails;
          details.classList.add("event-details");
    
          let eventSignUp = document.createElement("a");
          eventSignUp.href = event.eventSignUp;
          eventSignUp.innerHTML = "RSVP";
          eventSignUp.classList.add("eventSignUp-btn");
    
          eventCard.appendChild(title);
          eventCard.appendChild(location);
          eventCard.appendChild(date);
          eventCard.appendChild(time);
          eventCard.appendChild(details);
          eventCard.appendChild(eventSignUp);
    
          eventsContainer.appendChild(eventCard);
        }
      });
    };
    
    createEventListingCards();
    
    eventsSearch.addEventListener("input", (e) => {
      searchTerm = e.target.value;
      createEventListingCards();
    });
    eventsContainer.addEventListener("click",(e)=>{
        e.target.setAttribute("target", "_blank");
    });
    alphaSort.addEventListener("click",(e)=>{
        console.log("sleep")
        filteredEvents = filteredEvents.sort((a, b) => a.eventTitle.localeCompare(b.eventTitle));
    });
    dateFilter.addEventListener("change", ()=>{
        const selectedOption = dateFilter.value; // Get the value of the selected option
    
        const filteredEvents = events.filter((event) => {
            // Get the event date as a Date object
            const eventDate = new Date(event.eventDate);
            
            // Compare the selected option to the event date
            if (selectedOption === "today") {
                const today = new Date();
                return eventDate.toDateString() === today.toDateString();
            } else if (selectedOption === "tomorrow") {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                return eventDate.toDateString() === tomorrow.toDateString();
            } else if (selectedOption === "this-week") {
                const today = new Date();
                const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
                return eventDate >= today && eventDate <= endOfWeek;
            } else if (selectedOption === "next-week") {
                const today = new Date();
                const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
                const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
                return eventDate >= startOfWeek && eventDate <= endOfWeek;
            } else {
                // "all" option selected
                return true;
            }
        });
    
        // Update the events listing with the filtered events
        createEventListingCards(filteredEvents);
    });
});
