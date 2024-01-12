import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Face } from './FaceComponents/Face';
import { ReactComponent as Head1 } from './svgs/head/head1.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="face">
            <Head1 />
        </div>
      </header>
    </div>
  );
}

export default App;
