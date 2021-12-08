import logo from './logo.svg';
import './App.css';
import { FunctionalComponent } from './component/FunctionalComponent';
import  Welcome  from './component/Welcome';
import HelloSuperHeroes from './component/HelloSuperHeroes';
import { DemoState } from './component/DemoState';


function App() {
  return (
    <div className="App">
     <FunctionalComponent name = "Soumya"/>
     <FunctionalComponent name = "Mondal"/>
     <HelloSuperHeroes name = "Super Man" realName="Clark"/>
     <Welcome />
     <DemoState/>
    </div>
  );  
}

export default App;