import BioData from './components/BioData';
import Friends from './components/Friends';
import Myform from './components/Myform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect,useState } from 'react';
import './style.css'
function App() {
  //const friend = ['umer', 'shoiab', 'khalid'];
  const[friends ,setFriends]= useState([])
  const [loading, setLoading] = useState(true)
 
  useEffect(()=>{
    try {
      const getFriends = async ()=>{
        const res = await fetch('http://localhost:5000/friend/get')
        const resData =await res.json()
        setFriends(resData)
      }
      getFriends()
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
   setTimeout(() =>{
    setLoading(false)
   },2000);
     
  },[]);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BioData />} />
          <Route path='/friends' element={<Friends friends={friends} loading={loading} />} />
          <Route path='/forms' element={<Myform />} />
          <Route path='/forms/:id' element={<Myform friends={friends}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
