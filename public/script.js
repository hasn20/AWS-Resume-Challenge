/*jshint esversion: 8 */

const p = document.querySelector("#visit-counter");
const VISITORS_ENDPOINT = "https://2dctl4rwl7.execute-api.us-east-1.amazonaws.com/prod"; // Replace with your actual API Gateway endpoint

const updateCounter = async (event) => {
  try {
    const response = await fetch(VISITORS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const visitors = await response.json();
    p.textContent = `This page has been visited ${visitors.visits} times`;
  } catch (error) {
    p.textContent = "Unable to retrieve the count.";
    console.error("Error fetching visit count:", error);
  }
};

window.addEventListener("DOMContentLoaded", updateCounter);
