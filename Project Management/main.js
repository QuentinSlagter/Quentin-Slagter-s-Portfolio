document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });
  
  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var projectsList = document.querySelector('.project-boxes');
  
  listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
  });
  
  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });
  
  document.querySelector('.messages-btn').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
  });
  
  document.querySelector('.messages-close').addEventListener('click', function() {
    document.querySelector('.messages-section').classList.remove('show');
  });
});

document.querySelector('.app-sidebar-link').addEventListener('click', function () {
  document.querySelector('.switch-apps').classList.toggle('active');
});

document.querySelector('.add-btn').addEventListener('click', function () {
  document.querySelector('.dropdown').classList.toggle('active');
});

function insertProject() {
  project = $('.project-input').val();
  if ($.trim(project) == '') {
    return false;
  }
  $('<div class="project-box">' + project + '</div>').appendTo($('.project-box-wrapper')).addClass('new');
  $('.project-input').val(null);
}

$('.createProject-btn').click(function() {
  insertProject();
});

// document.addEventListener('click', e => {
//   const isDropdownButton = e.target.matches(".add-btn")

//   let currentDropdown
//     if (isDropdownButton) {
//       currentDropdown = e.target.closest('.dropdown')
//       currentDropdown.classList.toggle('active')
//     }
//   document.querySelectorAll('.dropdown.active').forEach(dropdown => {
//     if (dropdown === currentDropdown) return
//     dropdown.classList.remove('active')
//   })
// })

var $messages = $('.messages-content'),
    today, hours, minutes,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  today = new Date();
    month = today.getMonth() + 1;
    day = today.getDate();
    hours = today.getHours();
    minutes = today.getMinutes();
    ampm = hours <= 12 ? ' am' : ' pm'
  if (hours > 12) {
    hours = hours - "12";
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  $('<div class="timestamp">' + month + '/' + day + ', ' + hours + ':' + minutes + ampm + '</div>').appendTo($('.message:last'));
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Hi there, I am Quentin! If you have any questions or concerns, do not hesitate to ask.',
  'Nice to meet you',
  'How are you?',
  'Not too bad, thanks',
  'What do you do?',
  'That\'s awesome',
  'Bye',
  ':)'
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../images/profile.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="../images/profile.jpg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}