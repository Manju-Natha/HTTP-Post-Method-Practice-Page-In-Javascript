let requestBodyEl = document.getElementById("requestBody");
let sendGetRequestBtnEl = document.getElementById("sendPostRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendGetHTTPRequest() {
  let url = "https://gorest.co.in/public-api/users";
  let requestBody = requestBodyEl.value;
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer cca41a3800f6faca9e55c035ba3b96f0c260dff13386fcc64a197ccbb0210c7c",
    },
    body: requestBody,
  };

  loadingEl.classList.remove("d-none");
  requestStatusEl.classList.add("d-none");
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsondata) {
      requestStatusEl.classList.remove("d-none");
      loadingEl.classList.add("d-none");

      let requestStatus = jsondata.code;
      let httpResponse = JSON.stringify(jsondata);
      requestStatusEl.textContent = requestStatus;
      httpResponseEl.textContent = httpResponse;
    });
}
sendPostRequestBtn.addEventListener("click", sendGetHTTPRequest);
