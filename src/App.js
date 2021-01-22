import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  let clients = [
    {
      image: "https://www.docplanner.com/img/patients.png",
      title: "For patients",
      description:
        "Find a doctor, book a visit and solve any health-related doubt",
      color:"#00ccb1",
      country:["Tunis", "France", "Italy"]
    },
    {
      image: "https://www.docplanner.com/icons/icon-doctors.svg",
      title: "For doctors",
      description: "Save time managing visits and cut no-shows by half",
      color:"#3d83df",
      country:["Tunis", "France", "Italy"]
    },
    {
      image: "https://www.docplanner.com/icons/icon-clinics.svg",
      title: "For clinics",
      description: "Deliver an exceptional patient experience in your clinic",
      color:"#1b2734"
    },
  ];

  return (
    <div className="App">
      <Header />
      <Main x={clients} />
    </div>
  );
}

export default App;
