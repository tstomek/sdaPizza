$(document).ready(function(){

    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    // $('#modal1').modal('open');
    $('.modal').modal();

//  $('#modal1').modal('open');
    $('#menu .btn').click(function(){
        $('#myModal').modal('open');
    })
    //ukrycie zbędnych elementów
    $('#menu .row').hide();
    $('.badge').hide();
    $('#menu-1').css("display", "");
    $('.alert').hide();
    Materialize.updateTextFields();


    //funkcja wyświetlająca modal
    $('.btn-primary').click(function(){
        var pizzaId = this.id.split("-")[1]; //uzyskanie id pizzy z atrybutu id w buttonie
        $('input[type="hidden"').val(pizzaId); //id przydatne do ajaxa później
        //      $('#myModal').modal('show'); //wyświetl modal
        var contentCardTitle = $(this).parent().find('.card-title').text();
        $('#exampleModalLabel').text(contentCardTitle);
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
            var ingredients = '';
            var newOrder = document.createElement('li');
            newOrder.className = 'list-group-item row';
            var pizzaName = document.createElement('div');
            pizzaName.className = 'col-md-2';
            newOrder.textContent = $('#exampleModalLabel').text();
            newOrder.appendChild(pizzaName);
            $('.ingredient:checked').each(function(i, element){
                ingredients += $(element).parent().parent().find('.form-control').val();
                ingredients += ', ';
            });
            if (ingredients != '') {
                var ingredientsDiv = document.createElement('div');
                ingredientsDiv.className = 'col-md-2';
                ingredientsDiv.textContent = ingredients;
                newOrder.appendChild(ingredientsDiv);
            }
            $('#basket ul').append(newOrder);

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

    $('input.autocomplete').autocomplete({
        data: {
            "Warszawa": null,
            "Wrocław": null,
            "Legnica": null,
            "Leśnica": null,
        },
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
            // Callback function when value is autcompleted.
        },
        minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    });
    $('.chips-autocomplete').material_chip({
        autocompleteOptions: {
            data: {
                'Apple': null,
                'Microsoft': null,
                'Google': null
            },
            limit: Infinity,
            minLength: 1
        }
    });
    $(document).ready(function(){
        $('.parallax').parallax();
    });
});


