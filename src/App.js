import './App.css';
import React,{useState} from "react"
import TeamContainer from './components/TeamContainer';
import Form from './components/Form';

const defaultTeamList = [
  {
    name: "Joe Borington",
    email: "Boringdude@boring.com",
    role:"Databasing"
  },
  {
    name: "Derek Bearington",
    email: "Literalbear@honey.com",
    role:"Backend Engineer"
  }
]

function App() {
  const [teamList, setTeamList] = useState(defaultTeamList)
  const [memberBuilder, setMemberBuilder] = useState()

  return (
    <div className="App">
      <TeamContainer teamList={teamList}/>
      <Form teamList={teamList} setTeamList={setTeamList} memberBuilder={memberBuilder} setMemberBuilder={setMemberBuilder}/>
    </div>
  );
}

export default App;
