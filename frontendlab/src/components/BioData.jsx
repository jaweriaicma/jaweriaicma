import { Link } from 'react-router-dom';

const BioData = ()=>{
    return(
        <>     
        <h1 >Name: Danish</h1>
        <h2>Age:19</h2>
        <h3>Educaton:BS CS</h3>
        <h4>Email:abc@bcgmail.com</h4>
       <h3><Link to="/friends">friendspage</Link></h3>     
        <h3> <Link to="/forms">formpage</Link></h3>

        </>
    )
}
export default BioData