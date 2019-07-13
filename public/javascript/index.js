var canvas = document.getElementById('follow');
var c = canvas.getContext('2d');
//console.log(c);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

})
//ooo my almighty classass
var mouse = {
    x:undefined,
    y:undefined
}

window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    init();
    //playPauseUpdate();
})

// here the programming begeings

function Circle(x, y, r, dr){
    this.x = x;
    this.y = y;
    this.r = r;
    this.dr = dr;
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        c.fillStyle = 'rgba(0,0,0,0.7)';
        c.fill();
    }
    
    
    this.update = function(){
        this.draw();
    }
    
}
var circleArray = [];
function init(){
    circleArray =[];

    for(i=0;i<1;i++){
        var r = 20,
            dr = 0.5;
            circleArray.push(new Circle(mouse.x,mouse.y,r,dr));
    }
}
// verry impotant!!
init();


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }
}
animate();
