var sceneEl = document.querySelector('a-scene');
var foundCat = 0;
var data = [
    {
         width:2, height:4, x:1, y:1, z:-5
    },
    {
        width:2, height:3, x:-4, y:10, z:-5, rotX: 30, rotY: 30
    },
    {
        width:5, height:7.5, x:-10, y:1, z:2, rotY: 90
    },
    {
        width:3, height:3, x:-10, y:-1, z:9, rotY: 120
    },
    {
        width:3, height:3, x:-10, y:6, z:9, rotY: 120
    },
    {
        width:2, height:1, x:10, y:-1.5, z:3.5, rotY: 90
    },
]
var sound={
    src:"url(sound)",
    on:'click'
}
function init(frame) {
    for (var i = 0; i < data.length; i++) {
        var entityEl = document.createElement('a-image');
        sceneEl.appendChild(entityEl);
        var id = "cat"+i;
        entityEl.setAttribute('id', id)
        entityEl.setAttribute('material','opacity',0)
        entityEl.setAttribute('sound',sound);
        entityEl.setAttribute('geometry', {
            primitive: 'plane',
            height: data[i].height,
            width: data[i].width
        });
        entityEl.setAttribute('position', { x: data[i].x, y: data[i].y, z: data[i].z });
        entityEl.setAttribute('rotation', { x: data[i].rotX, y: data[i].rotY, z: data[i].rotZ });

        entityEl.addEventListener('click',function temp(){
            UpdateFoundCatText();
            this.removeEventListener('click',temp);
        });
    }
}

function UpdateFoundCatText(){
    var text = document.getElementById("TextUI");
    text.setAttribute('value',"x " + ++foundCat);

    if(foundCat == data.length){
        var entityEl = document.createElement('a-image');
        var camera = document.getElementById('camera');
        camera.appendChild(entityEl);
        entityEl.setAttribute('id', 'popup');
        entityEl.setAttribute('geometry', {
            primitive : 'plane',
            height : 1.2,
            width : 2
        });
        entityEl.setAttribute('material', 'src', "http://i.imgur.com/fHyEMsl.jpg");
        entityEl.setAttribute('position', {x:0, y:0, z:-1});
        entityEl.addEventListener('click',function click(){
            console.log('click');
            window.open('http://www.naver.com ', 'newWindow');
        });
        /*
        var entityEl = document.createElement('a-plane');
        var camera = document.getElementById('camera');
        camera.appendChild(entityEl);
        entityEl.setAttribute('id', 'popup');
        entityEl.setAttribute('geometry', {
            primitive : 'plane',
            height : 1.2,
            width : 2
        });
        entityEl.setAttribute('html-material', "url:popup.html;width:200;height:200");
        entityEl.setAttribute('position', {x:0, y:0, z:-1});
        entityEl.addEventListener('click',function click(){
            console.log('click');
            window.open('http://www.naver.com ', 'newWindow');
        });
        */
    }
}
