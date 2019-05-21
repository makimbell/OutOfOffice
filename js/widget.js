var xhr = new XMLHttpRequest();
var roomxhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (let i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};

xhr.open('GET', '../data/employees.json');
xhr.send();

roomxhr.onreadystatechange = function() {
    if(roomxhr.readyState === 4 && roomxhr.status === 200) {
        var rooms = JSON.parse(roomxhr.responseText);
        var roomStatusHTML = '<ul class="rooms">';
        
        for (let i=0; i<rooms.length; i += 1) {
            if (rooms[i].available === true) {
                roomStatusHTML += '<li class="empty">';
            } else {
                roomStatusHTML += '<li class="full">';
            }
            
            roomStatusHTML += rooms[i].room;
            roomStatusHTML += '</li>';
        }
        roomStatusHTML += '</ul>';
        document.getElementById('roomList').innerHTML = roomStatusHTML;
    }
};

roomxhr.open('GET', '../data/rooms.json');
roomxhr.send();