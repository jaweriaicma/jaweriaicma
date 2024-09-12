import { useState,useEffect } from "react";

import { useNavigate,Link } from "react-router-dom";
const Friends = ({friends,loading}) => {
    const[frienList,setFriendList] = useState([])
    const[searchVal,setSearchVal] = useState()
   
  
    
    const navigate = useNavigate()
    const handleclick=(id)=>{
       navigate(`/forms/${id}`)

       

    }
    const handledelete= async(frienddel)=>{
        const res = await fetch(`http://localhost:5000/friend/delete/${frienddel}`,{
            method:"DELETE",          
           })
           const resData = await res.json()
           console.log(resData);
           const updatedfriendlist = frienList.filter((friend)=>friend._id !== frienddel)
           setFriendList(updatedfriendlist)
        
                  

    }
   
     useEffect(()=>{
        if(friends){
            setFriendList(friends)
        }

     },[friends])

     const handlechnge = (e)=>{
        if(e.target.value ===""){
            setFriendList(friends)
        }else{
            const filteredFriend = frienList.filter((friend)=>
                friend.name.toLowerCase().startsWith(e.target.value.toLowerCase()));
            setFriendList(filteredFriend)

        }
    };
    return (
        <div>
            <div>
            <h3><Link to="/forms">formspage</Link></h3>
               <br />      
                <h3> <Link to="/">homepage</Link></h3>

            </div>
            <div>
                <label htmlFor="friend">Find your Friend</label>
                <input type="text" value={searchVal} onChange={handlechnge} />
            </div>
           
            {
                loading ? <h1>Loading...</h1> :
                <>
                  <h1>My Friends</h1>
                 <ol>
            {frienList.map((friend) => (
               <div>
              
               <div className="friend" key={friend._id}>
               <h3> {friend.name}</h3>
               <h3>{friend.contact}</h3>
               <button className="btn btn-primary" onClick={()=>handleclick(friend._id)}>Edit</button>
               <button className="btn btn-primary" onClick={()=>handledelete(friend._id)}>Delete</button>
               
               </div>
               
               </div>
               
              
            ))}

            
        </ol>
                </>
            }
            </div>
          
       
        
    );
};
export default Friends
