import { Profile } from "./components/Profile"
import { Main } from "./components/Main"

const App = () => {

  const profiles = [
    {
    name: 'joao', age: 19,
    },
    {
    name: 'isis', age: 21,
    },
    {
      name: 'ayla', age: 1,
    }
]
  
  return (
    <Main> 
      {profiles.map((profile, index) => 
        <Profile name={profile.name} age={profile.age} key={index}/>
      )}

    </Main>
  )
}

export default App;
