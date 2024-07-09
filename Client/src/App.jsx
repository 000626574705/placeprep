

import Home from "./home/Home.jsx";
import Courses from "./course/Courses.jsx";
import { Route ,Routes} from 'react-router-dom';
import Signup from "./components/Signup.jsx";
function App ()  {
  return (
  <>
 
<div className="dark:bg-slate-900 dark:text-white">
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/courses" element={<Courses/>}/>
  <Route path="/signup" element={<Signup/>}/>
 </Routes>
</div>
 
 

  </>

  )
}

export default App;

