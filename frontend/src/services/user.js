
import { toast } from 'react-toastify';
export const  userRequest =(data)=>{
   fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify({name: data.name, email: data.email}),
  }).then(response=>
    response.json()
  ).then(data =>{
    if(data.status === 201){
      toast.success(`Successfully created ${data.user.name}` )
    } else{
      toast.error(`Something went wrong!`)
    }
  }).catch((error)=>{
    toast.error(error.message)
  })
  
}