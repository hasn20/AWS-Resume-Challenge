/*jshint esversion: 8 */

const p = document.querySelector("#visit-counter");

// Ensure this URL matches your actual API Gateway endpoint
const VISITORS_ENDPOINT = "https://2dctl4rwl7.execute-api.us-east-1.amazonaws.com/prod";

const updateCounter = async (event) => {
  try {
    const response = await fetch(VISITORS_ENDPOINT, {
      method: "POST",  // Ensure this matches the method expected by your Lambda function
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const visitors = await response.json();
    p.textContent = `This page has been visited ${visitors.visits} times`;
  } catch (error) {
    console.error("Error updating visitor counter:", error);
    p.textContent = "Unable to retrieve visit count at this time.";
  }
};

window.addEventListener("DOMContentLoaded", updateCounter);
