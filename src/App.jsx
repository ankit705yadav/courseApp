import styled from "styled-components";
import Navbar from "./components/Navbar";
import TopSearch from "./components/TopSearch";
import FormMaster from "./components/FormMaster";
import SecondaryForm from "./components/SecondaryForm";

export const App = () => {
  return (
    <>
      <Navbar />
      <>
        <TopSearch />
        <>
          <FormMaster />
          <>
            <SecondaryForm />
          </>
        </>
      </>
    </>
  );
};

export default App;
