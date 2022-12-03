const React = require('react')
const Default = require('./layouts/default')

function Show ({bread, index}) {
    // Confirm we are getting our bread data in the terminal
    // console.log(bread.name)
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten
                    ? <span> does </span>
                    : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
            <p>Baked by {bread.baker}</p>
            <a href={`/breads/${bread._id}/edit`}>
                <button>Edit</button>
            </a>
            <form action={`/breads/${bread._id}?_method=DELETE`} method='POST'>
                <input type='submit' value='DELETE' />
            </form>
            <li><a href='/breads'>Go Home</a></li>
        </Default>
    )
}

module.exports = Show