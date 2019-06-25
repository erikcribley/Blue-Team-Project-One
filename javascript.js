// Plain old JS up here



// API work below

function loadDoc() {
    var response = 'fiction'
    var queryURL = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-" + response + ".json?api-key=YYLM4H4ZVCvkU3CCEM6hMcTnfTjAP7DM"
    console.log(queryURL)

    $.ajax({
        url: queryURL
    })

}