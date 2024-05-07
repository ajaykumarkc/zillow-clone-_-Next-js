
import Grid from "./components/Grid";
import NavBar from "./components/NavBar";


const getProperties = async()=>{
  const HYGRAPH_ENDPOINT = 'https://ap-south-1.cdn.hygraph.com/content/clvlrpth30axv07w74u269bdd/master'

  if(!HYGRAPH_ENDPOINT){
    throw new Error("HYGRAPH_ENDPOINT is Not Set")
  }
  const response = await fetch(HYGRAPH_ENDPOINT,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      query:`query Properties{
        properties {
          beds
          description
          images {
            fileName
            url
          }
          location {
            latitude
            longitude
          }
          name
          rentalPrice
          slug
          id
        }
      }`
    })
  })
  const json = await response.json()
  return json.data.properties
}

const Home = async () => {
  const properties = await getProperties();

  return (
    <>
    <NavBar />
    <Grid properties={properties}/>
    
    </>
  );
}

export default Home
