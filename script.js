"use strict"

const panels = document.querySelectorAll(".nutritient")
const headings = document.querySelector(".nutri-heading")
const intake_label = document.querySelector(".nurition-intake_label")
const display = document.querySelector(".display-intake")
const text = document.querySelector(".nutrition-explain")

// Adds active as class to clicked panel

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses()
    panel.classList.add("active")
  })
})

// Removes active class from all panel

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active")
  })
}
