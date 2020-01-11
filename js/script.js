let songs = ['I Could Use a Love Song','Tiny Dancer','Wrecking Ball'];
let artists = ['James & Kyndal','Destiny & Katie','Hello Sunday & Lauren'];
let songLength = ['x','y','z'];
let image = ['https://www.billboard.com/files/styles/article_main_image/public/media/maren-morris-2019-nyc-billboard-1548.jpg',
    'https://imgs.smoothradio.com/images/65221?crop=16_9&width=660&relax=1&signature=rWlcsQiX1cPnOuGNnLL2uPD2Mno=',
    'https://www.rollingstone.com/wp-content/uploads/2020/01/10323507bj.jpg?resize=900,600&w=450'
];
let songLink = [
    'https://www.youtube.com/watch?v=Ly5edoTyXqg',
    'https://www.youtube.com/watch?v=-24EZ9gR0Zo',
    'https://www.youtube.com/watch?v=wqRXvk07feY'
];
let songInput, artistInput, lengthInput, imageInput, linkInput;

songs.forEach(function(title){
    $(".songList").append('<div class="appended text-add">'+title+'</div>');
});

artists.forEach(function(artist){
    $(".artistList").append('<div class="appended text-add">'+artist+'</div>');
});

songLength.forEach(function(length){
    $(".lengthList").append('<div class="appended text-add">'+length+'</div>');
});

image.forEach(function(image){
    $(".imageList").append('<div class="appended">'+'<img src="'+image+'">'+'</div>');
});

songLink.forEach(function(link){
    $(".linkList").append('<div class="appended text-add">'+'<a href='+link+'>'+"Listen"+'</a>'+'</div>');
});

$("#submit").click (function() {
    console.log("CLICKED");
   
    //push all input vals
    songs.push($("#songInput").val());
    $(".songList").append('<div class="appended text-add">'+songs[songs.length-1]+'</div>');

    artists.push($("#artistInput").val());
    $(".artistList").append('<div class="appended text-add">'+artists[artists.length-1]+'</div>');

    songLength.push($("#lengthInput").val());
    $(".lengthList").append('<div class="appended text-add">'+songLength[songLength.length-1]+'</div>');

    image.push($("#imageInput").val());
    $(".imageList").append('<div class="appended">'+'<img src="'+image[image.length-1]+'">'+'</div>');

    songLink.push($("#linkInput").val());
    $(".linkList").append('<div class="appended text-add">'+'<a href="'+songLink[songLink.length-1]+'">'+'Listen'+'</a>'+'</div>');

});