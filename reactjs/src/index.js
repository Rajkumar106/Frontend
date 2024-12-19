import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Content name={"Raj"} location={"chennai"} />
    <Content name={"bharani"} location={"ariyalur"} />
    <Content name={"Nawin"} location={"Chennai"} />
    <Content name={"Balaji"} location={"ariyalur"} />


    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
