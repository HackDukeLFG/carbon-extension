// Update the relevant fields with the new data.
const setDOMInfo = (info) => {
  document.getElementById("item_name").innerHTML = info.name;
  document.getElementById("delivery").innerHTML = info.delivery;
  document.getElementById("item_weight").innerHTML = info.weight;
  document.getElementById("item_groups").innerHTML = info.groups;
  document.getElementById("latitude").innerHTML = info.latitude;
  document.getElementById("longitude").innerHTML = info.longtitude;
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

// let moneyDue = document.getElementsByClassName("pay-bit")[0].value;
let moneyDue = 0.08;

async function checkbookPay() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "d6aa2703655f4ba2af2a56202961ca86:dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8",
    },
    body: JSON.stringify({
      recipient: "wmz3@duke.edu",
      name: "Bruhhhh",
      amount: moneyDue,
      description: "PLEASE OH LORD",
    }),
  };

  fetch("https://demo.checkbook.io/v3/check/digital", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  document.getElementById("donate-button").remove();
}

document.getElementById("donate-button").addEventListener("click", () => {
  checkbookPay();
});
