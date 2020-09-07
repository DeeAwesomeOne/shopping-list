$(document).ready(function () {

    $("form button").click(function () {
        $("#js-shopping-list-form").submit();
        event.preventDefault();
    });


    $("form").submit(function (event) {
        $("ul").append(
            '<li> <span class="shopping-item">' +
            $("input").first().val() +
            '</span> <div class="shopping-item-controls">' +
            '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
            '</button>' +
            '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
            '</button>' +
            '</div>');
        event.preventDefault();
    });


    $('ul').on('click', '.shopping-item-toggle', function (event) {
        event.stopPropagation();  
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });

    $('ul').on('click', '.shopping-item-delete', function (event) {
        event.stopPropagation();
        $(this).closest("li").remove();
    });

});