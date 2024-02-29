import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import ModeContext from "./context/EditModeContext";

function App() {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <ModeContext.Provider value={isEditing}>
      <div className="app-container bg-white p-5">
        <Header
          isEditing={isEditing}
          onToggle={() => setIsEditing((prev) => !prev)}
        />
        <Form isEditing={isEditing} />
      </div>
    </ModeContext.Provider>
  );
}

export default App;
