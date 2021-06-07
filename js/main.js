var inputs = document.querySelectorAll(".form input")
var success = document.getElementById("successAlert")


window.postToGoogle = function() {
    var field1 = $("#nameField").val();
    var field2 = $("#emailField").val();
    var field3 = $("#subjectField").val();
    var field4 = $("#messageField").val();


    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScbH2EtVHfPd9FeoAZdGqEltGi9UoMy2UpuCPzTdzpFB6OzCg/formResponse?",
        data: { "entry.503035918": field1, "entry.290174329": field2, "entry.174733709": field3, "entry.795784998": field4 },
        type: "POST",
        dataType: "xml",
        success: function(d) {}

    });
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = " ";
    }
    $("#messageField").val("")

}
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 3,
        autoplay: true,
        margin: 10
    });
});

window.payment = function() {
    success.style.display = "flex";
}