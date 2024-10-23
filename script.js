const yearsData = [
  {
    year: 1946,
    date: "May 14",
    text: "Starting year is always 1946!",
    image: "years/1946.jpg",
  },
  {
    year: 1958,
    date: "March 20",
    text: "Year banners and dots are clickable",
    image: "years/1958.jpg",
  },
  {
    year: 1961,
    date: "August",
    text: "Navigation arrows are clickable too",
    image: "years/1961.jpg",
  },
  {
    year: 1965,
    date: "November",
    text: "Technologies used: HTML, CSS (design & animation), JS (timeline logic)",
    image: "years/1965.jpg",
  },
  {
    year: 1975,
    date: "December",
    text: "No frameworks were used!",
    image: "years/1975.jpg",
  },
  {
    year: 1976,
    date: "July 12",
    text: "Coded in Windows 7 + VSCodium 1.93",
    image: "years/1976.jpg",
  },
  {
    year: 1988,
    date: "June",
    text: "Development browser Firefox 115 ESR 15.16",
    image: "years/1988.jpg",
  },
  {
    year: 1993,
    date: "15 Jan",
    text: "Drop your feedback to my email address",
    image: "years/1993.jpg",
  },
  {
    year: 1994,
    date: "May",
    text: "Mobile version and additional animations are planned!",
    image: "years/1994.jpg",
  },
  {
    year: 2009,
    date: "December",
    text: "Important events are placed here",
    image: "years/2009.jpg",
  },
  {
    year: 2018,
    date: "Jule",
    text: "Code refactoring is in TBD state",
    image: "years/2018.jpg",
  },
  {
    year: 2021,
    date: "November",
    text: "No windows 10 copies were harmed during development of this page",
    image: "years/2021.jpg",
  },
  {
    year: 2024,
    date: "October",
    text: "Make code, not war!",
    image: "years/2024.jpg",
  },
  {
    year: 2025,
    date: "May",
    text: "It looks like you have reached the end of this demo, see you around!",
    image: "years/2025.jpg",
  },
];

let currentStartYear = 0;
let selectedYearIndex = 0;
const visibleYears = 14;
const yearsContainer = document.getElementById("years");

function renderYears() {
  yearsContainer.innerHTML = "";
  const endYear = Math.min(currentStartYear + visibleYears, yearsData.length);

  for (let i = currentStartYear; i < endYear; i++) {
    const yearElement = document.createElement("span");
    yearElement.textContent = yearsData[i].year;
    yearElement.onclick = () => {
      selectYear(i); // Selecting the clicked year
    };

    if (i === selectedYearIndex) {
      yearElement.classList.add("selected");
    }

    yearsContainer.appendChild(yearElement);
  }
}

function displayEventInfo(index) {
  document.getElementById("year").textContent = yearsData[index].year;
  document.getElementById("date").textContent = yearsData[index].date;
  document.getElementById("event-text").textContent = yearsData[index].text;
  document.getElementById("event-image").src = yearsData[index].image;
}

function selectYear(index) {
  selectedYearIndex = index;
  const yearElements = document.querySelectorAll(".years span");
  const dotElements = document.querySelectorAll(".event-dot");

  yearElements.forEach((el, i) => {
    el.classList.remove("selected");
    if (i === index - currentStartYear) {
      el.classList.add("selected");
    }
  });

  dotElements.forEach((dot, i) => {
    dot.classList.remove("circle");
    if (i === index) {
      dot.classList.add("circle");
    }
  });
  displayEventInfo(index);
}

document.getElementById("prev").addEventListener("click", () => {
  if (selectedYearIndex > 0) {
    selectedYearIndex--;
    selectYear(selectedYearIndex);
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (selectedYearIndex < yearsData.length - 1) {
    selectedYearIndex++;
    selectYear(selectedYearIndex);
  }
});

// Populate event dots with years
const eventDots = document.querySelectorAll(".event-dot");

eventDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    selectYear(index);
  });
});

selectedYearIndex = yearsData.findIndex((year) => year.year === 1946);
renderYears();
selectYear(selectedYearIndex);
