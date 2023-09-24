const notification = document.getElementById('notification');
const notificationName = document.getElementById('notification-name');
const notificationMessage = document.getElementById('notification-message');
const notificationClose = document.getElementById('notification-close');

message = {
  name: "Здраствуйте",
  message: "Хорошего вечера!"
}
function showNotification(name, message) {
  notificationName.textContent = name;
  notificationMessage.textContent = message;
  notification.classList.remove('hidden');
  setTimeout(hideNotification, 4000);
}

function hideNotification() {
  notification.classList.add('hidden');
}

notificationClose.addEventListener('click', hideNotification);

window.addEventListener('load', function() {
  setTimeout(showNotification(message.name, message.message), 2000);
});

