const React = require("react")
const Def = require("../default")

function Index (data) {
    //format the data in the places array into HTML so that a web page can display it.  
    //map.()
    let placesFormatted = data.places.map((place) => {
        return (
                <div>
                    <h1>{place.name}</h1>
                    <img src={place.pic} alt={place.name} ></img>
                </div>
        )
    })

    return (
        <Def>
            <main>
                <h1> Places Index Page</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = Index