const React = require("react")
const Def = require("./default")

function home (){
    return (
    <Def>
        <main>
            <h1>REST-RANT</h1>
            <div>
                <image src="/images/cereal-bowl.jpg" alt="cereal-bowl picc" ></image>
            </div>
            <div>
                Photo By <a href="https://unsplash.com/@alexandermils">Alexander Mils</a> on <a href="https://unsplash.com/photos/5X8oLkzZ1fI">Unsplash</a>
            </div>
            <a href="/places">
                <button>Places Page</button>
            </a>
        </main>
    </Def>
    )
}

module.exports = home