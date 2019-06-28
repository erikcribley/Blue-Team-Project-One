var category = ''

$('button').on("click", function loadDoc() {
    let category = $('select').val().trim()
    console.log(category)
    var queryURL = "https://api.nytimes.com/svc/books/v3/lists/" + category + ".json?api-key=YYLM4H4ZVCvkU3CCEM6hMcTnfTjAP7DM"
    console.log(queryURL)
// ====== need to pull a response from a book
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        let genre = response.results.list_name;
        let heading = $("<h2>")
                .text(genre)
        $(".bookReturn")
            .append(heading)
        for (i = 0; i < response.results.books.length; i++) {
            let author = response.results.books[i].author
            let title = response.results.books[i].title
            let coverImage = response.results.books[i].book_image
            let image = $("<img>")
                .attr("src", coverImage)
            let bookInfo = $("<p>")
                .text(title + " by " + author)
        $(".bookReturn")
            .append(image)
            .append(bookInfo)
        }
    })
})