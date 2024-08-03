// import React, { useState } from 'react'

// const Home = () => {
//     const [count, setCount] = useState(0);
//     const handleSet = () =>{
//         setCount(count+1)
//     }
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleSet}>add</button>
//     </div>
//   )
// }

// export default Home


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../Store/CountSlice'; // Assuming 'CountSlice' is the correct file name and path


const Home = () => {
  const count = useSelector(state => state.count.count); // Adjust the path according to your store structure

  const dispatch = useDispatch();

  const handleIncrement = () =>{
    dispatch(increment())
  };

  const handleDecrement = () =>{
    dispatch(decrement())
  }

  const handleReset = () =>{
    dispatch(reset())
  }

  return (
    <div>
     
      <p>Count: {count}</p>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Home;


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setScrollToContact } from '../Store/CountSlice';
// import Navbar from './Navbar';
// import Features from './Features';
// import ContactUs from './ContactUs';

// const Home = () => {
//   const dispatch = useDispatch();
//   const scrollToContact = useSelector(state => state.count.scrollToContact);

//   useEffect(() => {
//     if (scrollToContact) {
//       const contactSection = document.getElementById('contact');
//       if (contactSection) {
//         contactSection.scrollIntoView({ behavior: 'smooth' });
//         // Reset scrollToContact state after scrolling
//         dispatch(setScrollToContact(false));
//       }
//     }
//   }, [scrollToContact, dispatch]);

//   return (
//     <div>
//       <Navbar />
//       <p></p>
//       <button>Click</button>
//       <Features />
//       <ContactUs />
//     </div>
//   );
// };

// export default Home;

