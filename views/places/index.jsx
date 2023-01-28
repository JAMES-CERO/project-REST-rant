const React = require("react")
const Def = require("../default")

function index (data) {
    //format the data in the places array into HTML so that a web page can display it.  
    //map.()
    let placesFormatted = data.places.map((place) => {
        return (
          <div className="col-sm-6">
            <h2>
              <a href={`/places/${place.id}`} >
                {place.name}
              </a>
            </h2>
            <p className="text-center">
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name} />
            <p className="text-center">
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
      })
      
      

    return (
        <Def>
            <main>
                <h1>Places to rant !</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index