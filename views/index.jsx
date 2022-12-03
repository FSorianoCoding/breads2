const React = require('react')
const Default = require('./layouts/default')

function Index ({breads, title}) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            {/* <p>I have {breads[0].name} bread!</p> */}
            <ul>
                {
                    breads.map((bread, index) => {
                        return (
                            <li key={index}>
                                {/* needs to be written as _id per error. */}
                                <a href={`/breads/${bread._id}`}>
                                    {bread.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='newButton'>
                <a href='/breads/new'><button>Add a new bread</button></a>
            </div>
        </Default>
    )
}

module.exports = Index