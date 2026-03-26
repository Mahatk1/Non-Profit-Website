// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();
function initialize() {
  ;[...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn")
      this.classList.add("active-btn")
      document.querySelector(".active").classList.remove("active")
      document.getElementById(button.dataset.id).classList.add("active")
    })
  })
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode")
  })
}

// Call the initialize function when you want to invoke the code
initialize()

const homeImg = document.getElementById("homeImg")
const images = [
  "images/79d69d_5653c78281ad49ed93fd4dbfa07d8d2c~mv2.webp",
  "images/effImgs.webp",
  "images/fahmi1eff.webp",
  "images/fahmi2eff.webp",
  "images/ahmedeff.webp",
  "images/Screenshot 2023-06-25 221850.png",
  "images/Screenshot 2023-06-25 221952.png",
]
let currentIndex = 0
const switchImage = () => {
  homeImg.classList.add("fade-out")

  setTimeout(() => {
    homeImg.src = images[currentIndex]
    currentIndex = (currentIndex + 1) % images.length
    homeImg.classList.remove("fade-out")
    homeImg.classList.add("fade-in")
  }, 500)
}

setInterval(switchImage, 3000)

// Donate Modal
// Get the modal element
const modal = document.getElementById("donateModal")

// Get the button that opens the modal
const btn = document.getElementById("donateBtn")

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0]

// Function to open the modal
const openModal = () => {
  modal.style.display = "block"
}

// Function to close the modal
const closeModal = () => {
  modal.style.display = "none"
}

// Event listeners
btn.addEventListener("click", openModal)
span.addEventListener("click", closeModal)
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal()
  }
})

// Schedule Modal for full screen view
const viewScheduleBtn = document.querySelectorAll(".viewSchedule")
const showFullSchedule = document.querySelector(".show-full-schedule")
const closeScheduleBtn = document.getElementById("closeScheduleModal")

viewScheduleBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    showFullSchedule.style.display = "block"

    const selectedView = e.target.value
    let iframe = document.getElementById("frame")

    if (selectedView === "youthschedule") {
      iframe.setAttribute(
        "src",
        "https://scheduler.leaguelobster.com/1350932/youth-league/summer-2023/"
      )
    } else if (selectedView === "adultschedule") {
      iframe.setAttribute(
        "src",
        "https://scheduler.leaguelobster.com/1350443/adult-league/summer-2023/"
      )
    }
  })
})

closeScheduleBtn.addEventListener("click", () => {
  showFullSchedule.style.display = "none"
})

const name = document.querySelector(".Name")
const email = document.querySelector(".email")
const SUBJECT = document.querySelector(".SUBJECT")
const Message = document.getElementById("Message")
const Submit = document.querySelector(".submit-btn")
const contactForm = document.querySelector(".contact-form")
const thankWrapper = document.querySelector(".thankyou-wrapper")
const thankYouCard = document.querySelector("#result")
contactForm.addEventListener("submit", (e) => {
  let ebody = `<p>Name: ${name.value}</p>
               <p>Email: ${email.value}</p>
               <p>Subject: ${SUBJECT.value}</p>
               <p>Message: ${Message.value}</p>`

  if (!name.value || !email.value || !SUBJECT.value || !Message.value) {
    alert("Please fill in all fields.")
    return // Stop further execution if any field is empty
  }

  Email.send({
    SecureToken: "04a6793a-a4e5-4008-9438-0648577d58a2",
    To: "abdulkafinirig4@gmail.com",
    From: "abdulkafinirig4@gmail.com",
    Subject: "Testing email: " + email.value,
    Body: ebody,
  }).then((message) => {
    alert(message)
  })
})

Submit.addEventListener("click", (e) => {
  e.preventDefault()

  if (!name.value || !email.value || !SUBJECT.value || !Message.value) {
    alert("Please fill in all fields.")
    return
  }

  let ebody = `<p>Name: ${name.value}</p>
               <p>Email: ${email.value}</p>
               <p>Subject: ${SUBJECT.value}</p>
               <p>Message: ${Message.value}</p>`
  let emailAddr = email.value

  thankYouCard.style.display = "block"
  thankYouCard.style.opacity = "1"

  setTimeout(() => {
    thankYouCard.style.opacity = "0"
  }, 3000)

  setTimeout(() => {
    thankYouCard.style.display = "none"
  }, 4000)

  Email.send({
    SecureToken: "04a6793a-a4e5-4008-9438-0648577d58a2",
    To: "abdulkafinirig4@gmail.com",
    From: "abdulkafinirig4@gmail.com",
    Subject: "New message from: " + emailAddr,
    Body: ebody,
  })

  name.value = ""
  email.value = ""
  SUBJECT.value = ""
  Message.value = ""
})
