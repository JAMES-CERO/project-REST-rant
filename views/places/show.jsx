const React = require('react')
const Def = require('../default')

function show(data) {
   console.log(data.place._id)
    let comments = (
        <h3 className="inactive">
          No comments yet!
        </h3>
      )
      let rating = (
        <h3 className='inactive'>
          Not Rated Yet!
        </h3>
      )
      if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++){
          stars += '⭐️'
        }
        rating = (
          <h3>{stars} Stars!</h3>
        )
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? "👌 ": "👌"}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>

          )
        })
      }
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
                        {rating}
                        <br/>

                        {/* <h1> Location! 🌎</h1> */}
                        <h2> Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4> {data.place.cuisines}</h4>

                        <a href={`/places/${data.place._id}/edit`}  className='btn btn-warning' >Edit</a>
                        <form method='POST'action={`/places/${data.place._id}?_method=DELETE`} >
                            <button type='submit' className='btn btn-danger' >
                                Delete !
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <h2>Coments! 🎰 </h2>
                    {comments}
                    <form  method='POST' action={`/places/${data.place._id}/comment`}> 
                    
                    <div className='form-group'>
                        <label htmlFor='author' >Author</label>
                        <input className='form-control'  id="author" name="author" required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='content' >Conten</label>
                        <input className='form-control'  id="content" name="content"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='stars' className='form-label' >Star-ranking</label>
                        <input type="range"  className='form-range' min="0" max="5" id="stars" name="stars"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='rant' >Rant</label><input type="checkbox"  id="rant" name="rant"/>
                   </div>
                   <input className="btn btn-primary" type="submit" value="comments" />
                    </form>
                </div>

            </main>
        </Def>
    )
}

module.exports = show
