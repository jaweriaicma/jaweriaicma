// to write a get api using fetch

// we will use fetch in an async function

const getWhatever = async() =>{

    // initializing a variable for storing the res
    const xyz = await fetch('URL')

    // We are converting the initial response into json
    const abc = await xyz.json()

    //now we can use the converted res as our will.

}

// calling the function
getWhatever()

// to write a get api using fetch
// we will use fetch in an async function

const getWhatever = async() =>{
    // initializing a variable for storing the res
    const xyz = await fetch('URL')

    // We are converting the initial response into json
    const abc = await xyz.json()

    //now we can use the converted res as our will.
}

// calling the function
getWhatever()


// to write a get api using fetch
// we will use fetch in an async function

const getWhatever = async() =>{
    //initializing a variable for storing the res
    const xyz = await fetch('URL')

    // We are converting the initial response into json
    const abc = await xyz.json()

    //now we can use the converted res as our will.

}

// calling the function
getWhatever()


// to write a get api using fetch
// we will use fetch in an async function

const getWhatever = async() =>{
    //initializing a variable for storing the res
    const xyz = await fetch('URL')

    // We are converting the initial response into json
    consst abc = await xyz.json()

    // now we can use the converted res as our will.
}

// calling the function
getWhatever()

// we will write a delete handler that will use fetch for delete

const deleteHandler = async(particularIdToDel) => {
    // Initializing a variable for storing the res
    // the fetch has 2 parmas one is url other is an object and here we
    // are passing method:'DELETE' bcz we are calling a del api.
    const xyz = await fetch(`URL/${particularIdToDel}`,{
        method: 'DELETE'
    })
    //we are converting the initial res into json
    const abc = await xyz.json()

    //now we can use the converted res as our will.
}

// THE DELETE WILL TRIGGERED IN RES TO ONECLICK EVENT
//   <button onClick={() =>deleteHandler(whatEver._id)}>Delete</button>

// we will write a delete handler that will use fetch for delete
const deleteHander = async(particularIdToDel) =>{
    // Initializing a variable for storing the res
    // the fetch has 2 params one is url other is an object and here we 
    // are passing method:'DELETE' bcz we are calling a del api.
    const xyz = await fetch(`URL/${particularIdToDel}`,{
        method: 'DELETE'
    })
    //we are converting the initial res into json
    const abc = await xyz.json()

    //now we can use the converted res as our will.
    
}

// THE DELETE WILL TRIGGERED IN RES TO ONECLICK EVENT
// <button onClick={() => deleteHandler(whatEver._id)}>Delete</button>

// We will write a delete handler that will use fetch for delete 
const deleteHander = async(particularIdToDel) =>{
    //Initializing a variable for storing the res
    // the fetch has 2 params one is url other is an object and here we
    // are passing method:'DELETE' bcz we are calling a del api.
    const xyz = await fetch(`URL/${particularIdToDel}`,{
        method: 'DELETE'
    })
    //We are converting the initial res into json
    const abc = await xyz.json()
    //now we can use the converted res as our will.
}

//THE DELETE WILL TRIGGERED IN RES TO ONECLICK EVENT
// <button onCLICK={() => deleteHandler(whatEver._id)}>DELETE</button>

// We will write a delete handler that will use fetch for delete 
const deleteHander = async(particularIdToDel) =>{
    //Initializing a variable for storing the res
    // the fetch has 2 params one is url other is an object and here we
    // are passing method:'DELETE' bcz we are calling a del api.

    const xyz = await fetch(`URL/${particularIdToDel}`)
    method:'DELETE'
}
//we are converting the initial res into json
const abc = await xyz.json()
 //now we can use the converted res as our will.


//THE DELETE WILL TRIGGERED IN RES TO ONECLICK EVENT
// <button onCLICK={() => deleteHandler(whatEver._id)}>DELETE</button>


//we will use our POST fetch api with a submitHandler
// which will be triggered on onSubmit event in a form

const submitHandler = (e) =>{
    
    // It is preventing the default reload
    e.preventDefault()

    

}



