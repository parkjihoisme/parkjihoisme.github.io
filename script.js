var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');

var presentation = document.getElementsByClassName('presentation');
var ptContainer = document.getElementsByClassName('pt-container');
var imgList = [one, two, three, four]


let getSiblings = function (e) {
            let siblings = []; 
            if(!e.parentNode) {
                return siblings;
            }
            let sibling  = e.parentNode.firstChild;
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== e) {
                    siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
            }
            return siblings;
        };


function presentationOpen(e) {
        var className = e.target.id;

    e.target.style.color = 'var(--prim)'
    
    for (i = 0; i < presentation.length; i++) {
        presentation[i].style.visibility = 'visible'
    }

    document.getElementsByClassName(className)[0].style.visibility = 'visible'

}

function presentationClosed(e) {
        var className = e.target.id;

    
    e.target.style.color = 'var(--text)'
    for (i = 0; i < presentation.length; i++) {
        presentation[i].style.visibility = 'hidden'
    }

    document.getElementsByClassName(className)[0].style.visibility = 'hidden'

}


function presentationTouch(e){
    var className = e.target.id;

    let siblings = getSiblings(document.getElementsByClassName(className)[0]);
    
    
    console.log(siblings)

    
    one.style.color = 'var(--text)'
    two.style.color = 'var(--text)'
    three.style.color = 'var(--text)'
    four.style.color = 'var(--text)'
    
    e.target.style.color = 'var(--prim)'
    
    for (i = 0; i < presentation.length; i++) {
        presentation[i].style.visibility = 'visible'
    }
    for (i=0 ; i< siblings.length; i++){
        siblings[i].style.visibility = 'hidden'
    }
    
    document.getElementsByClassName(className)[0].style.visibility = 'visible'
    
}

for (i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener('touchstart', presentationTouch)
    imgList[i].addEventListener('mouseover', presentationOpen)
    imgList[i].addEventListener('mouseout', presentationClosed)
}