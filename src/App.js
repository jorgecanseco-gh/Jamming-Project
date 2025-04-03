// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import styles from './App.module.css'


function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
      Jamming
      </header>
      <main className={styles.main}>
        {/* Content goes here */}
      </main>
    </div>
  )
}

export default App;