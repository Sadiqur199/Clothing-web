





export const registerNewUser = async (formData)=>{
  try{
     const response = await fetch('/api/register',{
      method : 'Post',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(formData)
     })

     const finalData = response.json();
     return finalData;
  }
  catch(e){
    console.log('error',e)
  }
}