$(function () {
    var player = {};
    var playerSet = false;
    if (localStorage.getItem('player') != null) {
        player = JSON.parse(localStorage.getItem('player'));
        console.log(player);
        playerSet = true;
        //localStorage.clear();
        //enableFunctions();
    }
    if (!playerSet) {
        player.id = 1;
        player.username = "TestUser";
        player.email = "test@test.com";
        player.phone = "999-999-9999";
        player.armyType = "Army";
        player.points = "2000";
    }
    $('#uNameChange').val(player.username);
    $('#uEmailChange').val(player.email);
    $('#uPhoneChange').val(player.phone);
    $('#uArmyType').val(player.armyType);
    $('#uPoints').val(player.points);
    $('#leaveStore').on('click', function(){
       $('#Stores').remove(); 
    })
    $('#addDetatch').on('click', function () {
        var newDetatch = $('#uDetatchInput').val();
        $('#detatch').append("<div class='detatch'><p>" + newDetatch + "</p><button type='button' class='remove'>Remove</button></div>");
        enableRemove();
    });
    $('#addUnit').on('click', function () {

        var newUnit = $('#uUnitInput').val();
        $('#units').append("<div class='unit'>" + newUnit + "<button type='button' class='remove'>Remove</button></div>");
        enableRemove();
});
    $('#uDeleteAccount').on('click', function () {
        localStorage.clear();
        location.href = "index.html";
    });
    $("#submitChanges").click(function () {
        player.username = $('#uNameChange').val();
        player.email = $('#uEmailChange').val();
        player.phone = $('#uPhoneChange').val();
        player.armyType = $('#uArmyType').val();
        player.points = $('#uPoints').val();
        localStorage.setItem('player', JSON.stringify(player));
        location.reload();
    });
});

function enableRemove(){
    $('#units').find('.remove').on('click', function(){
        console.log('Clicked');
        this.closest('div').remove();
    });
     $('#detatch').find('.remove').on('click', function(){
        console.log('Clicked');
        this.closest('div').remove();
    });
}
