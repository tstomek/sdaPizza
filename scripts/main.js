$(document).ready(function(){
    //ukrycie zbędnych elementów
    $('.row').hide();
    $('.badge').hide();
    $('#menu-1').css("display", "");
    $('.alert').hide();

    //funkcja wyświetlająca modal
    $('.btn-primary').click(function(){
        var pizzaId = this.id.split("-")[1]; //uzyskanie id pizzy z atrybutu id w buttonie
        $('input[type="hidden"').val(pizzaId); //id przydatne do ajaxa później
        $('#myModal').modal('show'); //wyświetl modal
    });

    //funkcja po naciśnięciu guzika w modalu
    $('#submit').click(function(){
        var counter = $('.badge').text(); //pobranie tekstu w badgu
        if (counter != "")
        {
            $('.badge').text(parseInt(counter)+1);   //zwiększenie o 1 zamówienia
        } else {
            $('.badge').text('1');   //pierwsze zamówienie? nadaj 1
            $('.badge').show();
        }
        $('#myModal').modal('hide'); //schowaj modal
        $('.alert').show(); //wyświetl alert
        setTimeout(function(){
            $('.alert').hide(); //schowaj alert po 5 sekundach
        }, 5000)
    });

    $('.dropdown-item').click(function(event){
        var itemId = this.id.split("-")[1]; //uzyskanie numeru stylu na podstawie wartości id
        $('.row').hide(); //ukrycie jedynego wiersza ktory sie wyswietla
        $('#menu-' + itemId).show(); //wyświetlenie nowego stylu

    })
})