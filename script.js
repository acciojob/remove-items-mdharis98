//your JS code here. If required.
function removeColor() {
  // Get the dropdown element
  const colorSelect = document.getElementById("colorSelect");

  // Remove the selected option from the dropdown
  colorSelect.remove(colorSelect.selectedIndex);
}
