'use strict';

// ------------------- manipulation du dom -------------------------//
var section1 = document.getElementById('content_one')
var presentation = document.getElementById('presentation')
var arrow = document.getElementById('arrow')

var section2 = document.getElementById('content_two')
var dev = document.getElementById('dev')
var computer = document.getElementById('computer')
var lang = document.getElementById('lang')

var left = document.getElementById('left')
var html = document.getElementById('html')
var css = document.getElementById('css')
var javascript = document.getElementById('javascript')
var php = document.getElementById('php')
var sqli = document.getElementById('sqli')
var yaml = document.getElementById('yaml')
var bootstrap = document.getElementsByClassName('bootstrap')
var symfony = document.getElementsByClassName('symfony')
var jquery = document.getElementsByClassName('jquery')
var angular = document.getElementsByClassName('angular')

var right = document.getElementById('right')
var html1 = document.getElementsByClassName('html')
var css1 = document.getElementsByClassName('css')
var javascript1 = document.getElementsByClassName('javascript')
var php1 = document.getElementsByClassName('php')
var sqli1 = document.getElementsByClassName('sqli')
var yaml1 = document.getElementsByClassName('yaml')

var section3 = document.getElementById('content_three')
var exp_one = document.getElementById('exp_one')
var exp_two = document.getElementById('exp_two')
var exp_three = document.getElementById('exp_three')

var section4 = document.getElementById('content_four')
var dip_one = document.getElementById('dip_one')
var dip_two = document.getElementById('dip_two')


// ---------------------------- styles -----------------------------//

arrow.style.width = '25%'; 
arrow.style.height = '25%';

presentation.style.margin =  '30%';
presentation.style.fontFamily = " 'Lobster', cursive "; 

computer.style.width= '100%';
computer.style.height = '110%';

left.style.fontFamily = "'Ubuntu', sans-serif";
right.style.fontFamily = "'Ubuntu', sans-serif";

exp_one.style.textAlign = 'center';
exp_one.style.backgroundColor = 'rgb(162, 68, 230)';
exp_one.style.borderRadius = '100px';
exp_one.style.width= '40%';
exp_one.style.height= 'auto';
exp_one.style.float = 'left';
exp_one.style.marginLeft = '7.5%'


exp_two.style.textAlign = 'center';
exp_two.style.textDecorationColor = 'white';
exp_two.style.backgroundColor = 'rgb(75, 208, 245)';
exp_two.style.borderRadius = '100px';
exp_two.style.width= '40%';
exp_two.style.height= 'auto';
exp_two.style.float = 'right';
exp_two.style.marginRight = '8.5%'

exp_three.style.textAlign = 'center';
exp_three.style.backgroundColor = 'rgb(162, 68, 230)';
exp_three.style.borderRadius = '100px';
exp_three.style.width= '40%';
exp_three.style.height= 'auto';
exp_three.style.float = 'left';
exp_three.style.marginLeft = '7.5%'

dip_one.style.textAlign = 'center';
dip_one.style.backgroundColor = 'rgb(162, 68, 230)';
dip_one.style.borderRadius = '100px';
dip_one.style.width= '40%';
dip_one.style.height= 'auto';
dip_one.style.float = 'left';
dip_one.style.marginLeft = '7.5%'

dip_two.style.textAlign = 'center';
dip_two.style.textDecorationColor = 'white';
dip_two.style.backgroundColor = 'rgb(75, 208, 245)';
dip_two.style.borderRadius = '100px';
dip_two.style.width= '40%';
dip_two.style.height= 'auto';
dip_two.style.float = 'right';
dip_two.style.marginRight = '8.5%'

var date = document.getElementsByClassName('date');
for( var i = 0; i < date.length ; i++)
    {
     date[i].style.display = 'none';
    }

var descriptif = document.getElementsByClassName('descriptif');
for( var i = 0; i < descriptif.length ; i++)
   {
    descriptif[i].style.display = 'none';
   }

   var closes = document.getElementsByClassName('close');
for( var i = 0; i < closes.length ; i++)
   {
    closes[i].style.display = 'none';
   }

// ---------------------------- animation -----------------------------//




$(document).ready(function animateComputer() {



  $('#html').mouseover(function () { 
    $('.html').css('background', ' rgba(128, 128, 128, 0.486)');
    $('.html').css('box-shadow', '3px 3px rgba(0, 218, 222, 0.407), 1em 0 .4em  rgba(0, 218, 222, 0.331)');
    $('#html').css('background', ' rgba(128, 128, 128, 0.486)')
    $('#html').css('box-shadow', '3px 3px  rgba(251, 0, 255, 0.331), 1em 0 .4em  hsla(299, 100%, 50%, 0.331')

    lang.style.backgroundImage = "url('images/html.png')";

  });

  $('#html').mouseout(function () { 
    $('.html').css('background', 'none');
    $('.html').css('box-shadow', 'none');
    $('#html').css('background', 'none')
    $('#html').css('box-shadow', 'none')
    lang.style.backgroundImage = "none";

  });

  $('#css').mouseover(function () { 
    $('.css').css('background', ' rgba(128, 128, 128, 0.486)');
    $('.css').css('box-shadow', '3px 3px rgba(0, 218, 222, 0.407), 1em 0 .4em  rgba(0, 218, 222, 0.331)');
    $('#css').css('background', ' rgba(128, 128, 128, 0.486)')
    $('#css').css('box-shadow', '3px 3px  rgba(251, 0, 255, 0.331), 1em 0 .4em  hsla(299, 100%, 50%, 0.331')

    lang.style.backgroundImage = "url('images/css.png')";

  });

  $('#css').mouseout(function () { 
    $('.css').css('background', 'none');
    $('.css').css('box-shadow', 'none');
    $('#css').css('background', 'none')
    $('#css').css('box-shadow', 'none')

    lang.style.backgroundImage = "none";

  });

  $('#javascript').mouseover(function () { 
    $('.javascript').css('background', ' rgba(128, 128, 128, 0.486)');
    $('.javascript').css('box-shadow', '3px 3px rgba(0, 218, 222, 0.407), 1em 0 .4em  rgba(0, 218, 222, 0.331)');
    $('#javascript').css('background', ' rgba(128, 128, 128, 0.486)')
    $('#javascript').css('box-shadow', '3px 3px  rgba(251, 0, 255, 0.331), 1em 0 .4em  hsla(299, 100%, 50%, 0.331')

    lang.style.backgroundImage = "url('images/javascript.png')";
  });

  $('#javascript').mouseout(function () { 
    $('.javascript').css('background', 'none');
    $('.javascript').css('box-shadow', 'none');
    $('#javascript').css('background', 'none')
    $('#javascript').css('box-shadow', 'none')
    lang.style.backgroundImage = "none";

  });

  $('#php').mouseover(function () { 
    $('.php').css('background', ' rgba(128, 128, 128, 0.486)');
    $('.php').css('box-shadow', '3px 3px rgba(0, 218, 222, 0.407), 1em 0 .4em  rgba(0, 218, 222, 0.331)');
    $('#php').css('background', ' rgba(128, 128, 128, 0.486)')
    $('#php').css('box-shadow', '3px 3px  rgba(251, 0, 255, 0.331), 1em 0 .4em  hsla(299, 100%, 50%, 0.331')

    lang.style.backgroundImage = "url('images/php.png')";

  });

  $('#php').mouseout(function () { 
    $('.php').css('background', 'none');
    $('.php').css('box-shadow', 'none');
    $('#php').css('background', 'none')
    $('#php').css('box-shadow', 'none')

    lang.style.backgroundImage = "none";
  });


  $('#sqli').mouseover(function () { 
    $('.sqli').css('background', ' rgba(128, 128, 128, 0.486)');
    $('.sqli').css('box-shadow', '3px 3px rgba(0, 218, 222, 0.407), 1em 0 .4em  rgba(0, 218, 222, 0.331)');
    $('#sqli').css('background', ' rgba(128, 128, 128, 0.486)')
    $('#sqli').css('box-shadow', '3px 3px  rgba(251, 0, 255, 0.331), 1em 0 .4em  hsla(299, 100%, 50%, 0.331')

    lang.style.backgroundImage = "url('images/sqli.png')";

  });

  $('#sqli').mouseout(function () { 
    $('.sqli').css('background', 'none');
    $('.sqli').css('box-shadow', 'none');
    $('#sqli').css('background', 'none')
    $('#sqli').css('box-shadow', 'none')

    lang.style.backgroundImage = "none";

  });

  $('#yaml').mouseover(function () { 
    $('.yaml').css('background', ' rgba(128, 128, 128, 0.486)');
    $('.yaml').css('box-shadow', '3px 3px rgba(0, 218, 222, 0.407), 1em 0 .4em  rgba(0, 218, 222, 0.331)');
    $('#yaml').css('background', ' rgba(128, 128, 128, 0.486)')
    $('#yaml').css('box-shadow', '3px 3px  rgba(251, 0, 255, 0.331), 1em 0 .4em  hsla(299, 100%, 50%, 0.331)')
    lang.style.backgroundImage = "url('images/yaml.png')";
  });

  $('#yaml').mouseout(function () { 
    $('.yaml').css('background', 'none');
    $('.yaml').css('box-shadow', 'none');
    $('#yaml').css('background', 'none')
    $('#yaml').css('box-shadow', 'none')

    lang.style.backgroundImage = "none";

  });

  $('.bootstrap').mouseover(function () { 
    $('.bootstrap').css('background', ' rgba(128, 128, 128, 0.486)')
    $('.bootstrap').css('box-shadow', '3px 3px  rgba(251, 0, 255, 0.331), -1em 0 .2em  hsla(299, 100%, 50%, 0.331)')
    
    lang.style.backgroundImage = "url('images/bootstrap.png')";
 
  });

  $('.bootstrap').mouseout(function () { 
    $('.bootstrap').css('background', 'none')
    $('.bootstrap').css('box-shadow', 'none')

    lang.style.backgroundImage = "none";

  })

  $('.symfony').mouseover(function () { 
    $('.symfony').css('background', ' rgba(128, 128, 128, 0.486)')
    $('.symfony').css('box-shadow', '3px 3px  rgba(251, 0, 255, 0.331), -1em 0 .2em  hsla(299, 100%, 50%, 0.331)')
    
    lang.style.backgroundImage = "url('images/symfony.png')";
 
  });

  $('.symfony').mouseout(function () { 
    $('.symfony').css('background', 'none')
    $('.symfony').css('box-shadow', 'none')

    lang.style.backgroundImage = "none";

  })

  $('.jquery').mouseover(function () { 
    $('.jquery').css('background', ' rgba(128, 128, 128, 0.486)');
    $('.jquery').css('box-shadow', '3px 3px rgba(0, 218, 222, 0.407), 1em 0 .4em  rgba(0, 218, 222, 0.331)');
    
    lang.style.backgroundImage = "url('images/jquery.png')";
 
  });

  $('.jquery').mouseout(function () { 
    $('.jquery').css('background', 'none');
    $('.jquery').css('box-shadow', 'none');

    lang.style.backgroundImage = "none";

  });

  $('.angular').mouseover(function () { 
    $('.angular').css('background', ' rgba(128, 128, 128, 0.486)');
    $('.angular').css('box-shadow', '3px 3px rgba(0, 218, 222, 0.407), 1em 0 .4em  rgba(0, 218, 222, 0.331)');
    
    lang.style.backgroundImage = "url('images/angular.png')";
 
  });

  $('.angular').mouseout(function () { 
    $('.angular').css('background', 'none');
    $('.angular').css('box-shadow', 'none');

    lang.style.backgroundImage = "none";

  });

})

function ZoomExp() {
  if (this.style.width === '90%') {
    return
  }
  if ( this.style.transform === 'translateX(700px)') {
    
    section3.style.position = 'relative'
    section4.style.position = 'relative'
    this.style.position = 'absolute'
    this.style.zIndex = '10000'
    this.style.width = '90%'
    this.style.height = '70%'
    this.style.margin = '0'
    this.style.backgroundColor = 'indigo'
    this.style.marginLeft = '-45%'
    var child = this.children ;

    for( var i = 0; i < child.length ; i++){
    child[i].style.display = 'block';
    child[i].style.textColor = 'white';
    }
    this.animate([
      // keyframes
      { width: '40%' }, 
      { height: '70%' },
  
    ], { 
      // timing options
      easing : 'ease',
      duration: 1000,
    })
  
  } else {

    section3.style.position = 'relative'
    section4.style.position = 'relative'
    this.style.position = 'absolute'
    this.style.zIndex = '10000'
    this.style.width = '90%'
    this.style.height = '70%'
    var child = this.children ;

    for( var i = 0; i < child.length ; i++){
    child[i].style.display = 'block';
    child[i].style.textColor = 'white';
    }

    this.animate([
      // keyframes
      { width: '40%' }, 
      { height: '70%' },
  
    ], { 
      // timing options
      easing : 'ease',
      duration: 100,
    })

  }
}

function DézoomExp(id) {

  if (id.style.width === '90%') {

    section3.style.position = 'relative'
    section4.style.position = 'relative'
    id.style.position = 'absolute'
    id.style.zIndex = '0'
    id.style.width = '40%'
    id.style.height = 'auto'

    id.animate([
    // keyframes
    { width: '90%' }, 
    { height: '20%' }, 

    ], { 
    // timing options
    easing : 'ease',
    duration: 100,
    })

  for( var i = 0; i < date.length ; i++)
    {
      date[i].style.display = 'none';
    }

    for( var i = 0; i < descriptif.length ; i++)
    {
      descriptif[i].style.display = 'none';
    } 

  for( var i = 0; i < closes.length ; i++)
    {
      closes[i].style.display = 'none';
    } 
  }
  else {
    return
  }

}

function DézoomRight(id) {
  
  if (id.style.width === '90%') {

    section3.style.position = 'relative'
    section4.style.position = 'relative'
    id.style.position = 'absolute'
    id.style.zIndex = '0'
    id.style.width = '40%'
    id.style.height = 'auto'
    id.style.transform = 'translateX(700px)'

    id.animate([
    // keyframes
    { width: '90%' }, 
    { height: '20%' },

    ], { 
    // timing options
    easing : 'ease',
    duration: 100,
    })

  for( var i = 0; i < date.length ; i++)
    {
      date[i].style.display = 'none';
    }

  for( var i = 0; i < descriptif.length ; i++)
    {
      descriptif[i].style.display = 'none';
    } 

    for( var i = 0; i < descriptif.length ; i++)
    {
      descriptif[i].style.display = 'none';
    } 

    for( var i = 0; i < closes.length ; i++)
    {
      closes[i].style.display = 'none';
    } 

  } 
  if (id.style.backgroundColor === 'indigo') {

    section3.style.position = 'relative'
    section4.style.position = 'relative'
    id.style.position = 'absolute'
    id.style.zIndex = '0'
    id.style.width = '40%'
    id.style.height = 'auto'
    id.style.backgroundColor = 'blue'
    id.style.marginLeft = '2.5%'

    id.animate([
    // keyframes
    { width: '90%' }, 
    { height: '20%' },

    ], { 
    // timing options
    easing : 'ease',
    duration: 100,
    })

  for( var i = 0; i < date.length ; i++)
    {
      date[i].style.display = 'none';
    }

  for( var i = 0; i < descriptif.length ; i++)
    {
      descriptif[i].style.display = 'none';
    }

    for( var i = 0; i < closes.length ; i++)
    {
      closes[i].style.display = 'none';
    } 
  }
   else {
    return
  }
}

exp_one.addEventListener('dblclick', ZoomExp)
exp_two.addEventListener('dblclick', ZoomExp)
exp_three.addEventListener('dblclick', ZoomExp)
  dip_one.addEventListener('dblclick', ZoomExp)
  dip_two.addEventListener('dblclick', ZoomExp)

