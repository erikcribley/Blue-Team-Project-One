    const nytKey = "YYLM4H4ZVCvkU3CCEM6hMcTnfTjAP7DM"
    const gbooksKey = "AIzaSyC6REeQDLquX9zbQZ_5qadkMoskhLlIHlg"
    let category = $("select").val()
    var queryURL = 'https://api.nytimes.com/svc/books/v3/lists/current/' + category + '.json?api-key=' + nytKey
    var isbnBook = 0

    $("button").click(function () {
        location.reload()
    })

    $.ajax({
        url: queryURL,
        method: 'GET',
        success: function (data) {
            isbnBook = data
        }
    }).then(function(response) {
            console.log(response)
            for (i = 0; i <= response.results.books.length; i++) {        
                var bookInfo = response.results.books[i].description
                var lastRank = response.results.books[i].rank_last_week || 'Not Listed!'
                var weeksOn = response.results.books[i].weeks_on_list || 'New Book!'
                var rank = response.results.books[i].rank
                var image = response.results.books[i].book_image
                isbnBook = response.results.books[i].isbns[1].isbn10
                var listing =
                    '<div id="' + rank + '" class="entry">' + 
                        '<p>' + 
                        '<img src=' + image + ' ' + 'class="book-cover" id="cover-' + rank + '">' + 
                        '</p>' + 
                        '<h2><a href="' + response.results.books[i].amazon_product_url + '" target="_blank">' + response.results.books[i].title + '</a></h2>' +
                        '<h4>By ' + response.results.books[i].author + '</h4>' +
                        '<h4 class="publisher">' + response.results.books[i].publisher + '</h4>' +
                        '<p>' + bookInfo + '</p>' + 
                        '<div class="stats">' +                                                                                                                                             
                        '<hr>' + 
                        '<p>Last Week: ' + lastRank + '</p>' + 
                        '<p>Weeks on list: ' + weeksOn + '</p>' +
                        '</div>' +
                    '</div>'

                $('#best-seller-titles').append(listing);
                $('#' + rank).attr('nyt-rank', rank);
            }
            return isbnBook
    })
    // Change this and get it to Place the publisher in the listing as the NYT Publisher is wacky.
    // $.ajax({
    //    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbnBook + "&key=" + gbooksKey,
    //    method: 'GET',
    // }).then(function(loadPub) {
    //     var publisher = response.items[0].volumeInfo.publisher
    //     $('.publisher').text(publisher);
    // })
    
