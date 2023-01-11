// Fetch all countries
fetch("https://restcountries.com/v2/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (countries) {
    var select = document.getElementById("country");
    for (var i = 0; i < countries.length; i++) {
      var opt = countries[i].name;
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  });

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    companyName: document.getElementById("companyName").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    email: document.getElementById("email").value,
    country: document.getElementById("country").value,
    product: document.getElementById("product").value,
  };
  console.log(formData);
  // Send form data to mock API
  fetch("https://63bec28c585bedcb36b621bb.mockapi.io/clientdata", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      
      alert("Enquiry submitted successfully.👍\nOur Sales Team will be in touch with you shortly.");
      
    })
    .catch((error) => console.error("Error:", error));
});
