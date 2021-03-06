import React from 'react';
import './App.css';
import Profile from "./Profile/profile.js";
import myWonderfulImage from "./imageInSrc.jpg"
const App = () =>{
  const handleName = name => alert(name);
  return (
      <div>
          <Profile fullName="Steven Paul Jobs" profession="Entrepreneur ,Industrial designer ,Investor ,Media proprietor" 
          bio="Jobs became CEO of Apple in 1997, following his company's acquisition of NeXT. He was largely responsible for helping revive Apple, which had been on the verge of bankruptcy. He worked closely with designer Jony Ive to develop a line of products that had larger cultural ramifications, beginning in 1997 with the 'Think different' advertising campaign and leading to the iMac, iTunes, iTunes Store, Apple Store, iPod, iPhone, App Store, and the iPad. In 2001, the original Mac OS was replaced with the completely new Mac OS X (now known as macOS), based on NeXT's NeXTSTEP platform, giving the OS a modern Unix-based foundation for the first time. Jobs was diagnosed with a pancreatic neuroendocrine tumor in 2003. He died of respiratory arrest related to the tumor at age 56 on October 5, 2011."
          handleName={handleName}>
            <div>
              <img src={myWonderfulImage} alt="" width="728" height="455" controls/>
            </div>
          </Profile>
      </div>
  )
}

export default App;
