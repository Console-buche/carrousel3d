import { useState } from "react";
import { QueryClientProvider } from "react-query";
import "./App.css";
import { Container } from "./components/Container";
import { queryClient } from "./environment/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Container />
      </div>
      ;
    </QueryClientProvider>
  );
}

export default App;
