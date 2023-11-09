export function getRegistrations() {
  const registrations = JSON.parse(localStorage.webauthnExampleRegistrations || '[]');
  return registrations;
}

export function setRegistrations(registrations) {
  localStorage.webauthnExampleRegistrations = JSON.stringify(registrations, null, '  ');
  displayRegistrations();
}

export function saveRegistration(registration) {
  const registrations = getRegistrations();
  registrations.push(registration.toJSON());
  setRegistrations(registrations);
}

function registrationElem() {
  return document.querySelector('#registrations');
}

export function displayRegistrations() {
  registrationElem().value = JSON.stringify(getRegistrations(), null, '  ');
}
