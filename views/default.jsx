const React = require("react")

function Def(html) {
    return (
        <html>
            <head>
                <title> Hello You! </title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body className="home-menu">
                {html.children}
                <div className="contact">
                    <footer className="footer">
                        
                    </footer>
                </div>
                <div id="page-container">
                    <div id="content-wrap">
                    Contact me:
                        <ul>
                            <li className=""><a href=" ">github</a></li>
                            <li className=""> <a href=" ">instagram</a></li>
                            <li className=""><a href=" ">phone number</a></li>
                        </ul>
                    </div>
                    <footer id="footer"></footer>
                </div>
            </body>
        </html>
    )
}

module.exports = Def