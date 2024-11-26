const panel = document.getElementById('announcement-panel');
const announcements = panel.getElementsByClassName('announcement');
let index = 0;

function showNextAnnouncement() {
  if (announcements.length > 0) {
    announcements[index].style.display = 'none'; // Hide current
    index = (index + 1) % announcements.length; // Move to next
    announcements[index].style.display = 'block'; // Show next
  }
}

// Initially show the first announcement
announcements[index].style.display = 'block';
// Change announcement every 5 seconds
setInterval(showNextAnnouncement, 5000);
