const React = require("react")

function Def (html){
    return (
        <html>
            <head>
                <title> Hello You! </title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body className="home-menu">
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def