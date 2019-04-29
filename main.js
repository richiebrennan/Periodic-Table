$(document).ready(function(){
    
    //Open info panel
   $('.element').on('click', function(e){
       e.stopPropagation();
        //$('#info').slideDown();
        
       var obj = elements[$(this).data('key')];
       $('#info').html('<div id="info-top"><div id="icon"><h1 class="icon">' + obj.icon + '</h1></div><div id="side-info"><h1>' + obj.title + '</h1><p>' + obj.description + '</p><p><b>Discovered by:</b> ' + obj.discovered + '</p><p><b>Uses:</b> ' + obj.uses + '</p></div><div class="clearfloat"></div><div id="properties"><h1>Properties</h1><hr><div id="prop-left"><ul><li><b>Atomic Number :</b> ' + obj.atNum + '</li><li><b>Atomic Mass :</b> ' + obj.atMass + '</li><li><b>Type :</b> ' + obj.type +'</li><li><b>Isotopes :</b> ' +obj.isotopes+ '</li></ul></div><div id="prop-center"><ul><li><b>Density :</b> ' + obj.density + '</li><li><b>Melting Point :</b> ' + obj.melting +'</li><li><b>Boiling Point :</b> ' +obj.boiling + '</li></ul></div><div id="prop-right"><ul><li><b>Ionic radius :</b> ' + obj.ionic + '</li><li><b>First Ionisation :</b> ' + obj.first_ionisation +'</li><li><b>Second Ionisation :</b> ' +obj.second_ionisation + '</li><li><b>Third Ionisation :</b> ' +obj.third_ionisation + '</li></ul></div></div>').fadeIn();
        
       //Change icon colour
        if($(this).hasClass('basic-metal')){
            $('.icon').css('background-color', '#77DC77');
        } else if($(this).hasClass('non-metal')){
            $('.icon').css('background-color', '#779ECB');
        } else if($(this).hasClass('noble-gas')){
            $('.icon').css('background-color', '#B29EB5');
        } else if($(this).hasClass('alkali-metal')){
            $('.icon').css('background-color', '#FE6961');
        } else if($(this).hasClass('alkaline-earth')){
            $('.icon').css('background-color', '#FEB246');
        } else if($(this).hasClass('semi-metal')){
            $('.icon').css('background-color', '#AEC6CE');
        } else if($(this).hasClass('halogen')){
            $('.icon').css('background-color', '#668DE5');
        } else if($(this).hasClass('transition-metal')){
            $('.icon').css('background-color', '#FCFC96');
        } else if($(this).hasClass('lanthanide')){
            $('.icon').css('background-color', '#03C03B')
        }else {
            $('.icon').css('background-color', '#5FB05F');
        };
       
       $('.close').fadeIn();
       
   });
    
    
    //Close info panel
      $('.close').on('click', function(){
            $('#info').fadeOut();
            $('.close').fadeOut();
    });
});


 