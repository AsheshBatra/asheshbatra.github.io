function showPurchasedFields() {
    var purchasedFieldsDiv = document.getElementById("purchasedFields");
    var interestedFieldsDiv = document.getElementById("interestedFields");
    purchasedFieldsDiv.style.display = "block";
    interestedFieldsDiv.style.display = "none";
}

function showInterestedFields() {
    var purchasedFieldsDiv = document.getElementById("purchasedFields");
    var interestedFieldsDiv = document.getElementById("interestedFields");
    purchasedFieldsDiv.style.display = "none";
    interestedFieldsDiv.style.display = "block";
}

function saveFormData() {
    var formData = new FormData(document.getElementById("myForm"));
    var jsonData = {};
    for (var [key, value] of formData.entries()) {
        jsonData[key] = value;
    }

    var jsonString = JSON.stringify(jsonData);
    var blob = new Blob([jsonString], { type: "application/json" });

    // Create a download link
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "formData.json";

    // Simulate a click on the link
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
}
