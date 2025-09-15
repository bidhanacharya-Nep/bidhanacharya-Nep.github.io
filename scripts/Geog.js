function areaFunction() {
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;

    let result_area = (base * height) /2;
    document.getElementById('area_result').innerHTML = "The area of the triangle is:" + result_area;
}
function perimeterFunction() {
    let sideA = Number(document.getElementById('sideA').value);
    let sideB = Number(document.getElementById('sideB').value);
    let sideC = Number(document.getElementById('sideC').value);

    let result_perimeter = sideA + sideB + sideC;
    document.getElementById('perimeter_result').innerHTML = "The perimeter of the triangle is:" + result_perimeter;
}
function volume() {
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let heightB = document.getElementById('heightB').value;

    let result_volume = (length * width * heightB) * 1/3;
    document.getElementById('volume_result').innerHTML = "The volume of the triangle is:" + result_volume;
}