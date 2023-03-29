var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');

var ein = document.getElementById('ein');
var zwei = document.getElementById('zwei');
var drei = document.getElementById('drei');
var vier = document.getElementById('vier');


var presentation = document.getElementsByClassName('presentation');
var ptContainer = document.getElementsByClassName('pt-container');


var imgList = [one, two, three, four]
var enList = [ein, zwei, drei, vier]



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
    
    for (i = 0; i < enList.length; i++) {
        if(className == imgList[i].id){
            e.target.style.color = 'var(--prim)'

        }
        else if(className == enList[i].id){
            e.target.style.color = 'var(--scndtext)'
            className = imgList[i].id
            console.log(className)
        }
        
    }

    
    for (i = 0; i < presentation.length; i++) {
        presentation[i].style.visibility = 'visible'
    }

    document.getElementsByClassName(className)[0].style.visibility = 'visible'

}

function presentationClosed(e) {
        var className = e.target.id;

    for (i = 0; i < enList.length; i++) {
        if(className == imgList[i].id){
            e.target.style.color = 'var(--text)'

        }
        else if(className == enList[i].id){
            e.target.style.color = 'var(--scnd)'
            className = imgList[i].id
            console.log(className)
        }
    }

    for (i = 0; i < presentation.length; i++) {
        presentation[i].style.visibility = 'hidden'
    }

    document.getElementsByClassName(className)[0].style.visibility = 'hidden'

}


function presentationTouch(e){
    var className = e.target.id;

    let siblings = getSiblings(document.getElementsByClassName(className)[0]);
    
    
    for (i = 0; i < enList.length; i++) {
        imgList[i].style.color = 'var(--text)'
        enList[i].style.color = 'var(--sncd)'

        if(className == imgList[i].id){
            e.target.style.color = 'var(--prim)'
        }
        else if(className == enList[i].id){
            e.target.style.color = 'var(--scndtext)'
            className = imgList[i].id
        }
    }
        
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
    enList[i].addEventListener('touchstart', presentationTouch)
    enList[i].addEventListener('mouseover', presentationOpen)
    enList[i].addEventListener('mouseout', presentationClosed)
}



