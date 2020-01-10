let songs = ['I Could Use a Love Song','Tiny Dancer','Wrecking Ball'];
let artists = ['James & Kyndal','Destiny & Katie','Hello Sunday & Lauren'];
let songLength = ['x','y','z'];
let image = ['https://www.billboard.com/files/styles/article_main_image/public/media/maren-morris-2019-nyc-billboard-1548.jpg',
    'https://imgs.smoothradio.com/images/65221?crop=16_9&width=660&relax=1&signature=rWlcsQiX1cPnOuGNnLL2uPD2Mno=',
    'z'
];
let songLink = [
    'https://www.youtube.com/watch?v=Ly5edoTyXqg',
    'https://www.youtube.com/watch?v=-24EZ9gR0Zo',
    'https://www.youtube.com/watch?v=wqRXvk07feY'
];
let songInput, artistInput, lengthInput, imageInput, linkInput;

songs.forEach(function(title){
    $(".songList").append('<p>'+title+'</p>');
});

artists.forEach(function(artist){
    $(".artistList").append('<p>'+artist+'</p>');
});

songLength.forEach(function(length){
    $(".lengthList").append('<p>'+length+'</p>');
});

image.forEach(function(image){
    $(".imageList").append('<img src="'+image+'">');
});

songLink.forEach(function(link){
    $(".linkList").append('<p>'+'<a href='+link+'>'+"Listen"+'</a>'+'</p>');
});

$("#submit").click (function() {
    console.log("CLICKED");
   
    //push all input vals
    songs.push($("#songInput").val());
    $(".songList").append('<p>'+songs[songs.length-1]+'</p>');

    artists.push($("#artistInput").val());
    $(".artistList").append('<p>'+artists[artists.length-1]+'</p>');

    songLength.push($("#lengthInput").val());
    $(".lengthList").append('<p>'+songLength[songLength.length-1]+'</p>');

    image.push($("#imageInput").val());
    $(".imageList").append('<p>'+image[image.length-1]+'</p>');

    songLink.push($("#linkInput").val());
    $(".linkList").append('<p>'+songLink[songLink.length-1]+'</p>');

});