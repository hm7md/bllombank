import React from 'react';
import ReactDOM from 'react-dom/client';
import Loginbox from "../Loginbox";
import Navigation from "../Navigation";
import Cards from "../Cards";
import Infor from "../Infor";
import Choose from '../Choose';
import Footer from '../Footer';

function Home(){
    return(
        <>
      
    <Navigation />
    <header className="hero-section">
  <Loginbox/> 
 
   <Infor/>
</header>
   <Choose/>
     <section className="blog-section">
        <h1>cards type</h1>
       <div className="article-container">
 <Cards paraghraph="emarati first" header="Recieve money in any currency with no fees"/>
 <Cards paraghraph="skywards"/>
<Cards paraghraph="student"/>
 <Cards paraghraph="travel solo"/>


        </div>
       </section>
        
    <Footer/>
        </>
    )
}
export default Home;