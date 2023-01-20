const React = require('react')
const Def = require("../default")

function newPage () {
    return (
        <Def>
            <main>
                <h1>Add a Resturant</h1>
                <form>
                    <label >Rest Name</label>
                    <imput></imput>
                    <label >Rest city</label>
                    <imput></imput>
                    <label >Rest state</label>
                    <imput></imput>
                    <label >Rest cuisines</label>
                    <imput></imput>
                    <label >Rest Pic Url</label>
                    <imput></imput>
                </form>
            </main>
        </Def>
    )
}

module.exports = newPage