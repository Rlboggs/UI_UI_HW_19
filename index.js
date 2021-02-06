$( document ).ready(function() {
    console.log( "ready!" );

    $('.BGC').on("mouseenter", function(e){
        console.log("mouseenter");
        $('.BGC').animate({
            left: '150px',
            height: '+=50px',
            width: '+=50px'
          
        });
    });
    $('.BGC').on("mouseleave", function(e){
        console.log("mouseleave");
        $('.BGC').animate({
            left: '150px',
            height: '-=50px',
            width: '-=50px'
          
        });
    });
    $('.Botani').on("mouseenter", function(e){
        console.log("mouseenter");
        $('.Botani').animate({
            left: '150px',
            height: '+=50px',
            width: '+=50px'
          
        });
    });
    $('.Botani').on("mouseleave", function(e){
        console.log("mouseleave");
        $('.Botani').animate({
            left: '150px',
            height: '-=50px',
            width: '-=50px'
          
        });
    });
    $('.DHS').on("mouseenter", function(e){
        console.log("mouseenter");
        $('.DHS').animate({
            left: '150px',
            height: '+=50px',
            width: '+=50px'
          
        });
    });
    $('.DHS').on("mouseleave", function(e){
        console.log("mouseleave");
        $('.DHS').animate({
            left: '150px',
            height: '-=50px',
            width: '-=50px'
          
        });
    });
//   $(".Botani").on("mouseover", function(){
//     console.log("mouseover");
//         $('.Botani').animate({
//       left: '150px',
//       height: '+=50px',
//       width: '+=50px'
//     });
//   }); 
//   $(".DHS").on("mouseover", function(){
//     console.log("mouseover");
//         $('.DHS').animate({
//       left: '150px',
//       height: '+=50px',
//       width: '+=50px'
//     });
  }) 