import React, {useState,useEffect} from 'react'
import './portfolio.css'



const Portfolio = () => {
  function CreatPost() {
  // useEffect(() => {
  
    fetch('http://127.0.0.1:8000/create/',
    
      {
       method: 'POST',
        body: JSON.stringify({ title: ' POST Request Example',discription:'om the ather Side of my life',pl:["Django"] })
    }
    )
        .then(response => response.json())
        .then(data => console.log(data));

// }, []);
  
  }

  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
   return   ( <section id='portfolio'>
  
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
      
        <div>Error: {error.message}</div>
        
      </div>
    </section>)
   
  } else if (!isLoaded) {
    
     return   (    <section id='portfolio'>
  
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
      
       <div>Loading...</div>;
        
      </div>
    </section>)
    
  } else {
    return (
          <section id='portfolio'>
  
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
      
  {items.map((item) => {
          return (
             <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={item.pic} alt="" />
          </div>
              <h3>{item.title}</h3>
              {item.pl.map((pl) => {
                return (
                  <h2>{ pl}</h2> 
              )
            })}
          <div className="portfolio_item-cta">
               
                <button onClick={CreatPost}><a href='/' className='btn'>Github</a></button>
          <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </div>
        </article> 
          
          );
        })}
        
        
      </div>
    </section>
     
    );
  }
 
}

export default Portfolio


