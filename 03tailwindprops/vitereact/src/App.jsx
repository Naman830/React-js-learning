import React from 'react';
import Card from './components/Card'

function App() {
  let myObject = {
    usernam: "Naman",
    Age: 16
  }

  
  return (
    <div className="min-h-screen bg-gray-100 p-6 bg-green-400">
      <h1 className="text-center text-3xl font-bold mb-8">Hello Naman Welcome To Tailwind Vite + React</h1>
       <Card />
       <Card />

    </div>
  );
}

export default App;
