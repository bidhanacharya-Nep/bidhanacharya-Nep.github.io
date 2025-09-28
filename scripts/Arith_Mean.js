let dataset = [];

function updateDisplay() {
  let datasetText = "Current Dataset: ";
  if (dataset.length > 0) {
    datasetText += dataset.join(", ");
  } else {
    datasetText += "( )";
  }
  document.getElementById("dataset").innerText = datasetText;

  if (dataset.length > 0) {
    let total = 0;
    for (let i = 0; i < dataset.length; i++) {
      total = total + dataset[i];
    }
    let mean = total / dataset.length;
    document.getElementById("mean").innerText = "Current Mean: " + mean;
  } else {
    document.getElementById("mean").innerText = "Current Mean: ( )";
  }
}

function addValue() {
  let input = document.getElementById("value").value;
  let num = parseFloat(input);

  if (isNaN(num)) {
    alert("Please enter a number.");
  } else {
    dataset.push(num);
  }

  updateDisplay();
  document.getElementById("value").value = "";
}

function removeValue() {
  let input = document.getElementById("value").value;
  let num = parseFloat(input);

  if (isNaN(num)) {
    alert("Please enter a number.");
  } else {
    let index = dataset.indexOf(num);
    if (index !== -1) {
      dataset.splice(index, 1);
    } else {
      alert("Value not found.");
    }
  }

  updateDisplay();
  document.getElementById("value").value = "";
}
