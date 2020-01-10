let songs = ['Song 1','Song 2','Song 3'];
let artists = ['Artist 1','Artist 2','Artist 3'];
let songLength = ['x','y','z'];
let image = ['a','b','c'];
let songLink = ['j','k','l'];

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
    $(".imageList").append('<p>'+image+'</p>');
});

songLink.forEach(function(link){
    $(".linkList").append('<p>'+link+'</p>');
});