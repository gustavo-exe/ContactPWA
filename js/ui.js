document.addEventListener('DOMContentLoaded', function () {
    var sidenav = document.querySelectorAll('.sidenav');
    var modal = document.querySelectorAll('.modal');
    var fixedActionBtn = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fixedActionBtn);
    M.Sidenav.init(sidenav);
    M.Modal.init(modal);
});
