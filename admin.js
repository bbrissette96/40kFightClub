var player = {};
$(function () {

    var playerSet = false;
    if (localStorage.getItem('player') != null) {
        player = JSON.parse(localStorage.getItem('player'));
        console.log(player);
        playerSet = true;
        //localStorage.clear();
        //enableFunctions();
    }

    $('.modal-trigger').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        starting_top: '4%', // Starting top style attribute
        ending_top: '10%', // Ending top style attribute
        ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            alert("Ready");
            console.log(modal, trigger);
        },
        complete: function () { alert('Closed'); } // Callback for Modal close
    });

$('#Support').find('.solved').on('click', function () {
    this.closest('.card').remove();
});

$('#Complaints').find('.solved').on('click', function () {
    this.closest('.card').remove();
});
//$('#modal1').modal('open');
$('#SiteErrorLogs').find('.solved').on('click', function () {
    this.closest('.card').remove();
});

$('#aPlayerSearchBtn').click(function () {
    if (localStorage.getItem('player') != null) {
        $('#playerDisplayTable').append("<tr id='playerListing'><td>" + player.username + "</td><td>" + player.email + "</td><td>" + player.phone + "</td></tr>");
        enableButtons();
    }
});

});

function enableButtons() {
    $('#aEditDetails').click(function () {
        $('#playerListing').remove();
        $('#playerDisplayTable').append("<tr id='playerDetails'><td><input id='uName' type='text' value='" + player.username + "' /></td><td><input id='uEmail' type='text' value='" + player.email + "' /></td><td><input id='uPhone' type='text' value='" + player.phone + "' /></td></tr>");
        $('#aEditDetails').hide();
        $('#searchButtons').append("<button type='button' id='aSubmitUserChanges' class='waves-effect waves-light btn'>Submit Changes</button>");
        enableSubmit();

    });
    $('#aResetPassword').click(function () {

    });
    $('#aDeleteAccount').click(function () {
        localStorage.clear();
    });
}

function enableSubmit() {
    $('#aSubmitUserChanges').on('click', function () {
        console.log(player.username = $('#uName').val());
        player.email = $('#uEmail').val();
        player.phone = $('#uPhone').val();
        localStorage.setItem('player', JSON.stringify(player));
        $('#playerDetails').remove();
        $('#playerDisplayTable').append("<tr id='playerListing'><td>" + player.username + "</td><td>" + player.email + "</td><td>" + player.phone + "</td></tr>");
        $('#playerListing').show();
        $('#aEditDetails').show();
        $('#aSubmitUserChanges').remove();

        //location.reload();
    });
}
