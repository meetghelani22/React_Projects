import React from "react";
import DynamicForm from "./pages/Dynamic_Form/DynamicForm";
import Game from "./pages/tictactoe/Game";
import ErrorForm from "./pages/ErrorForm/ErrorForm.jsx";
import Form from "./pages/Form";
import SubComponent from "./pages/SubComponent";
import MainForm from "./pages/MainForm";
import BackupDynamicForm from "./pages/BackupDynamicForm";
const App = () => {
  return (
    <div>
      {/* <BackupDynamicForm /> */}
      {/* <MainForm /> */}
      {/* <Game /> */}
      {/* <ErrorForm /> */}
      <DynamicForm />
      {/* <SubComponent /> */}
      {/* <Form></Form> */}
    </div>
  );
};

export default App;
