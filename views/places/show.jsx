const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <br />
                <div className='row'>
                    <div >
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3> Location! 🌎 {data.place.city} -- {data.place.state}</h3>
                    </div>
                    <br/>
                    <div className='showPlace' >
                        <h1>{data.place.name}</h1>
                        <h1> Rating! ⭐</h1>
                        <p>Not Rated Yet!</p>

                        {/* <h1> Location! 🌎</h1> */}
                        <h2> Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4> {data.place.cuisines}</h4>

                        <a href={`/places/${data.id}/edit`}  className='btn btn-warning' >Edit</a>
                        <form method='POST'action={`/places/${data.id}?_method=DELETE`} >
                            <button type='submit' className='btn btn-danger' >
                                Delete !
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <h2>Coments! 🎰 </h2>
                    <p>
                        No coments Yet!
                    </p>
                </div>

            </main>
        </Def>
    )
}

module.exports = show
