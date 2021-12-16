import React from 'react'

const Create = () => {
    return (
        <>
        <div className="container">
   <form  className="reg-form" id="reg-form">
       <h1>create</h1>
       <hr/>
        
        
        
   <p>
       Post: 
       <textarea name="post" id="post"  rows="4" cols="100"    placeholder="enter message"></textarea>
   </p>  
        
   {/* <p>
       create: 
       <textarea name="create" id="create"  rows="10" cols="100" placeholder="create Post"></textarea>
   </p> */}
    
   <input type="submit" value="Post" id="Post"/>
   </form>
</div>
        </>
    )
}

export default Create
