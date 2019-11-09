var googleAPIKey = "AIzaSyCFI2z4qKbgF1hx88zchpgA7xtiQn71w_o"

// function passes the isbn to the queryURL, if there is a sample available to preview (accessViewStatus === "SAMPLE" 
//it will create a button on the card 'sample' and open the webReaderLink in a new window, else the button will say
// 'more info' and open the preview Link, which contains a few reviews and links, most of the books have sample pages
// available to view. 

function isPreview (x) {
    let queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + x + "?&key=AIzaSyCFI2z4qKbgF1hx88zchpgA7xtiQn71w_o"
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        if (response.items[0].accessInfo.accessViewStatus === "SAMPLE") {
            console.log(response.items[0].accessInfo.webReaderLink)
        } else {
            console.log(response.items[0].volumeInfo.previewLink)
        }
    })
}