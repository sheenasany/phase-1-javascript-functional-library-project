//Need to write a helper function to check whether the collection is 
//an array or an object
//If object, use Object.values to create array

function collectionChanger(collection) {
    if (collection instanceof Array) {
        return[...collection]
    } else {
        return Object.values(collection)
    }
    //another way to do the above with a ternary
    //return (collection instanceof Array) ? [...collection] : Object.values(collection);
}

function myEach(collection, callback) {
    let newCollection = collectionChanger(collection)

    let i = 0
    while (i < newCollection.length) {
        callback(newCollection[i])
        i++
    }

    //another way to do this is with a for loop
    // for(let i = 0; i < newCollection.length; i++) {
    //     callback(newCollection[i])
    // }
    return collection

}

