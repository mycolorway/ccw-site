( function( $ ) {

var currentIndex = 0,
    timeInterval = 8000;

$( function() {
    
    var timer = setInterval( function() {
        transition();
    }, timeInterval );
    
    $( "#ctrl li" ).mouseenter( function() {
        var ctrls = $( "#ctrl li" ),
            newIndex = ctrls.index( this );
        
        clearInterval( timer );
        timer = setInterval( function() {
            transition();
        }, timeInterval );
        
        if ( newIndex != currentIndex ) {
            transition( newIndex );
        }
    });
    
});

function transition( index ) {
    var slides = $( "#player li" ),
        ctrls = $( "#ctrl li" )
        newIndex = isNaN( index ) ? currentIndex + 1 : index,
        newSlide = slides.eq( newIndex );
    
    if ( !newSlide.length ) {
        newSlide = slides.eq( 0 );
        newIndex = 0;
    }
    
    slides.eq( currentIndex )
        .fadeOut( "slow" );
    newSlide.fadeIn( "slow", function() {
        $( this ).addClass( "cur" )
            .siblings( "li" )
            .removeClass( "cur" );
    });
    
    ctrls.removeClass( "cur" )
        .eq( newIndex )
        .addClass( "cur" );
    
    currentIndex = newIndex;
}

})( jQuery );