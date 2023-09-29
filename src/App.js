import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import BookContainer from './Book/books.container';
// import Registration from '../src/components/Register';
// import Login from '../src/components/Login';


class App extends Component {  
  render() { 
    return (
      <div>
        <BookContainer />
        {/* <Registration /> */}
        {/* <MyComponent /> */}
        {/* <Login /> */}
      </div>
    );
  }
}

export default App;
// import React, { useState } from 'react';
// import Registration from '../src/components/Register';
// import Login from '../src/components/Login'; 
// import BookContainer from './Book/books.container';

// function App() {
//   const [isRegistrationPage, setIsRegistrationPage] = useState(true);

//   const togglePage = () => {
//     setIsRegistrationPage(!isRegistrationPage);
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>Student Portal</h1>
//         <button onClick={togglePage}>
//           {isRegistrationPage ? 'Switch to Login' : 'Switch to Registration'}
//         </button>
//       </header>
//       {isRegistrationPage ? <Registration /> : <Login />}
//     </div>
//   );
//   <div>
//     <BookContainer/>
//   </div>
// }

// export default App;

