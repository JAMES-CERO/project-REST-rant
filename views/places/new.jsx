const React = require('react')
const Def = require("../default")

function newPage() {
    return (
        <Def>
            <main>
                <h1>Add a Resturant</h1>
                <form method='POST' action='/places'>
                    <div>
                        <label htmlFor='name' >Rest Name</label>
                        <imput id="name" name="name" required/>
                    </div>
                    <div>
                        <label htmlFor='pic' >Place Picture</label>
                        <imput type="url" id="pic" name="pic"/>
                    </div>
                    <div>
                        <label >City</label>
                        <imput id="city" name="city"></imput>
                    </div>
                    <div>
                        <label htmlFor='state' >State</label>
                        <imput id="state" name="state"/>
                   </div>
                   <div>
                        <label htmlFor='cuisines' >Cuisines</label>
                        <imput id="cuisines" name="cuisines" required/>
                    </div>
                    
                    <input type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = newPage