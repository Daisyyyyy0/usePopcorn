import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} size={24} />
    <StarRating maxRating={10} size={36} color="blue" />
    <StarRating
      maxRating={5}
      size={24}
      message={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating size={24} color="red" className="test" defaultRating={2} /> */}
  </React.StrictMode>
);
