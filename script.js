function submitForm(event) {
  event.preventDefault();
  alert("Thank you for volunteering! We will contact you soon.");
  document.querySelector("form").reset();
  return false;
}
