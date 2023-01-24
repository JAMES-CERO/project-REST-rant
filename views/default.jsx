const React = require("react")

function Def(html) {
    return (
        <html>
            <head>
                <title> Hello You! </title>
                <link href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABERERAREREAEREREBEREQAREREQERERABERERAREREAEREREBEREQAREREQERERABERERAAAAAAAAAAAREREQAREREBERERABEREQEREREAERERAREREQAREREBERERABEREQEREREAERERAREREQAAAAAAAAAAD//wAAgIEAAICBAACAgQAAgIEAAICBAACAgQAAgP8AAP8BAACBAQAAgQEAAIEBAACBAQAAgQEAAIEBAAD//wAA" rel="icon" type="image/x-icon" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body className="home-menu">
                <nav>
                    <ul>
                        <li>
                            <a href="/" >HOME</a>
                        </li>
                        <li>
                            <a href="/places" >PLACES</a>
                        </li>
                        <li>
                            <a href="/places/new" >ADD PLACE</a>
                        </li>
                    </ul>
                </nav>


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