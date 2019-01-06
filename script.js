function newTask() {
    var newItem = $('input').val();
    $('ul').prepend("<li id='task-item' onclick='deleteTask(this)'>- " + newItem + "</li>");
    $('input').val("");
}

function deleteTask(item) {
    $(item).remove();
    $('ul').append("<li class='done-item'>" + $(item).text() + "</li>");
}

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        newTask();
    }
});
