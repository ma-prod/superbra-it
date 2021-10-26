$(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 60;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    Data = new Date();
    //Data = (new Date()).getTime() + 2*24*60*60*1000;
    Year = Data.getFullYear();
    Month = Data.getMonth();
    Day = Data.getDate();
    // Преобразуем месяца
    switch (Month)
    {
      case 0: fMonth="gennaio"; break;
      case 1: fMonth="febbraio"; break;
      case 2: fMonth="marzo"; break;
      case 3: fMonth="aprile"; break;
      case 4: fMonth="maggio"; break;
      case 5: fMonth="giugno"; break;
      case 6: fMonth="luglio"; break;
      case 7: fMonth="agosto"; break;
      case 8: fMonth="settembre"; break;
      case 9: fMonth="ottobre"; break;
      case 10: fMonth="novembre"; break;
      case 11: fMonth="dicembre"; break;
    }
    // Вывод
    $('.m1-date').html(" "+Day+"&nbsp;"+fMonth+"");
    $('.rev-cont').slick({
      infinite: true,
      autoplay: false,
      dots: true,
      arrows: false,
      fade: false,
      speed: 300,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 959,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });  
});
 