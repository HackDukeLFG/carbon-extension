// Update the relevant fields with the new data.
const setDOMInfo = (offset = 0) => {
  document.getElementById("fname").value = offset;
  window.alert(offset)
};

// Once the DOM is ready...
window.addEventListener("DOMContentLoaded", () => {
  // ...query for the active tab...
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      // ...and send a request for the DOM info...
      chrome.tabs.sendMessage(
        tabs[0].id,
        { from: "popup", subject: "DOMInfo" },
        // ...also specifying a callback to be called
        //    from the receiving end (content script).
        setDOMInfo
      );
    }
  );
});

// Pay your offset!
async function checkbookPay() {
  let moneyDue = document.getElementById("fname").value;
  let recipient = document.getElementById("cars").value;

  let charities = {
    volvo: "wmz3@duke.edu",
    saab: "willzzzak@gmail.com",
    fiat: "example@gmail.com",
    audi: "example@gmail.com",
  };

  window.alert(charities[recipient]);

  // Parameters for fetch api
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "d6aa2703655f4ba2af2a56202961ca86:dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8",
    },
    body: JSON.stringify({
      recipient: charities[recipient],
      name: "PayBack User",
      amount: parseFloat(moneyDue),
      description: "Save the planet!",
    }),
  };

  // Call checkbook's api
  fetch("https://demo.checkbook.io/v3/check/digital", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  //remove button to prevent double-pay
  document.getElementById("donate-button").remove();
}

document.getElementById("donate-button").addEventListener("click", () => {
  checkbookPay();
});
