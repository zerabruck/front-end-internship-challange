import logo from './logo.svg';
import './App.css';
import ActorCard from './components/ActorCard';
import { useEffect, useState } from 'react';
import axios from "axios"
import ActorDetail from './components/ActorDetail';
import Loading from './components/Loading';
import ErrorComponent from './components/ErrorComponent';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const ACTORS_API_ENDPOINT = 'https://swapi.dev/api/people'
function App() {
  const [actorList, setActorList] = useState({})
  const [loading, setLoading] = useState(false)
  const [display , setDisplay] = useState(false)
  const [actor, setActor] = useState({})
  const [error, setError] = useState('')
  useEffect(()=>{
    fetchActors()
  },[])
  const fetchActors = (endpoint=ACTORS_API_ENDPOINT) =>{
    console.log(endpoint)
    setLoading(true)
    axios.get(endpoint)
    .then(actors => {
      console.log(actors.data)
      setLoading(false)
      setActorList(actors.data)
    })
    .catch(err =>{
      setLoading(false)
      setError(err.message)
    })

  }
  if (loading){
    return <div>
              <p className='actors-header'>Welcome to <span>ActorsHub!!</span></p>
              <Loading/>
            </div> 
  }
  if (error){
    return <div>
      <ErrorComponent message={error}/>
    </div>
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>

        {
          display ? <ActorDetail display={setDisplay} actor = {actor}/>:
          <div>
        <p className='actors-header'>Welcome to <span>ActorsHub!!</span></p>
        <div className='actors-container'>
        {
          actorList?.results?.map((actor, index) =>(
            <div onClick={()=>{
              setActor(actor)
              setDisplay(true)
            }} key={index} className='actor-card-container'>
              <ActorCard actor={actor}/>
            </div>
          )
          )
        }
        </div>
        <div className='pagination-container'>
          {
            actorList.previous &&
          <div onClick={()=>fetchActors(actorList.previous)} className=''>
            <FaChevronLeft/>
            <p>Prev</p>
          </div>
          }
          {
            actorList.next && 
          <div onClick={()=>fetchActors(actorList.next)} className=''>
            <p>Next</p>
            <FaChevronRight/>
          </div>
          }
        </div>
          </div>
        }
      </body>
    </div>
  );
}

export default App;
