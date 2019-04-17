$("button").click(function() {
    var input = $('input').val();
    $(".images").html("");
    if (input === "proud") {
        proudMood();
    } else if (input === "upset") {
        upsetMood();
    } else if (input === "inspired") {
        inspiredMood();
    } else if (input === "unsatisified") {
        unsatisifiedMood();
    } else {
        alert("Please enter proud, upset, ispired or unsatisified!");
    }

});

function changeBackground(backgroundImage) {
    $('body').css('background-image', "url(" + backgroundImage + ")");
}

function changeTextColor(color) {
    $('body').css('color', color);
}

function displayImage(image) {
    $('.images').append('<img src =' + image + '>');

}
var proudImg = ["https://alysonschafer.com/wp-content/uploads/2014/08/why_saying_im_so_proud_of_you_is_bad-770x523.jpg", "https://ui-ex.com/images/charmander-transparent-proud.png", "http://worldartsme.com/images/proud-clipart-1.jpg"];

function proudMood() {
    $(".images").html("");
    changeTextColor("gold");
    changeBackground("https://content.thriveglobal.com/wp-content/uploads/2017/12/PROUD.jpg");
    proudImg.forEach(function(img) {
        displayImage(img);
    });
}
var upsetImg = ["https://i.ytimg.com/vi/WAwNec0tFQU/hqdefault.jpg", "https://www.petmd.com/sites/default/files/petmd-aggression-cats.jpg", "https://media.giphy.com/media/9nea0r6ffuWkw/giphy.gif"];

function upsetMood() {
    $(".images").html("");
    changeTextColor("red");
    changeBackground("https://uploads.scratch.mit.edu/users/avatars/24994464.png");
    upsetImg.forEach(function(img) {
        displayImage(img);
    });

}
var inspiredImg = ["https://nc3t.com/wp-content/uploads/2015/03/Inspiration-words.jpg", "https://www.svphm.org.au/Images/UserUploadedImages/1413/Inspired-by-Autumn-2018.png", "https://www.myrkothum.com/wp-content/uploads/2013/04/be-inspired1.jpg"];

function inspiredMood() {
    $(".images").html("");
    changeTextColor("sky blue");
    changeBackground("http://inspiredworkshops.co.uk/wp-content/uploads/2016/02/InspirEd-Logo.png");

    inspiredImg.forEach(function(img) {
        displayImage(img);
    });
}
var unsatisifiedImg = ["http://davidhgrimm.com/wp-content/uploads/2015/12/6491213611_49279d9c16_o-2.jpg", "https://cdn1.benzinga.com/files/imagecache/1024x768xUP/images/story/2012/unhappy-389944_1920.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7P83gB-bWBBWxGAcr7Gf50Un7_PlKw7BYRbJlCYjLs962SpqUQ"];

function unsatisifiedMood() {
    $(".images").html("");
    changeTextColor("brown ");
    changeBackground("https://i.ytimg.com/vi/FynNdCWEJmM/maxresdefault.jpg");
    unsatisifiedImg.forEach(function(img) {
        displayImage(img);
    });
}