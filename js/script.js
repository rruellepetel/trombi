var trombiElement = document.getElementById('trombi');

var col5Link = document.getElementById('showCol5');
var col3Link = document.getElementById('showCol3');
var col2Link = document.getElementById('showCol2');

col5Link.addEventListener('click',function(){
    trombiElement.className = "col5";
});
col3Link.addEventListener('click',function(){
    trombiElement.className = "col3";
});
col2Link.addEventListener('click',function(){
    trombiElement.className = "col2";
});
