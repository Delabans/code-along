import { useState } from "react";
import ProfileCard from './component/ProfileCard'
import ProfileForm from "./component/ProfileForm";

function App() {
  const [allProfile, setAllProfile] = useState([
    {
      firstName: "Emmanuel",
      lastName: "Bans",
      email: "delabans8@gmail.com",
    },
  ]);

  const submit = (profile) => {
    setAllProfile((state) => [profile, ...state]);
  };

  return (
    <div>
      <h1>Write Profiles</h1>
      <div className="container">
        <ProfileForm submit={submit} />
        {allProfile.map((writer) => (
          <ProfileCard writer={writer} key={writer.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
