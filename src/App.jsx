
import { useEffect, useState } from 'react';
import './App.css'
import FileUpload from './components/FileUpload'
import UploadedImages from './components/UploadedImages'
import axios from 'axios';

function App() {
  // const baseUrl = "http://localhost:5000";
  const baseUrl = "https://task36-backend.vercel.app";
  const api_version = "api/v1";
 const [images, setImages] = useState([]);
  const handleAddImage=(newImage)=>{
    setImages((prev ) => [...prev , newImage]);
  }
  
  useEffect(() => {
    axios.get("https://task36-backend.vercel.app/cors-test")
  .then(res => console.log(res.data))
  .catch(err => console.error(err));

      axios.get(`${baseUrl}/${api_version}/uploads`,{
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: false,
      })
      .then((images) => {
          setImages(images.data);
      })
     
      
  },[])


  return (
    <div className='mt-10' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <div style={{ width: '50%' }}>
        <FileUpload onAddImage={handleAddImage} />
      </div>
      <div style={{ width: '80%' }}>
        <UploadedImages images={images} />
      </div>
    </div>
  )
}

export default App
