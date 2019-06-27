import React from 'react'

//components
import Layout from '../src/components/general/layout'
import Sidebar from '../src/components/sidebar'
//styles
// import '../styles/sidebar.css'

const App = () => {
  return (
  <Layout className="layout_container">
    <Sidebar/>
    <section className="content">
        <header className="header">         
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre mi</a></li>
            <li><a href="#">Portafolio</a></li>
          </ul>
        </header>
        <div className="hero">
          <div className="container">
           <h2>Unicornio Web Profesional</h2>
            <div className="card_float"></div>
          </div>
        </div>
        <section className="skills">
          <div className="container">
            <div className="card_skill web_design">
              <img src="/static/icons/development.png" alt=""/>
              <div className="info_skill">
                <h3>Desarollo Web</h3>
                <p>HTML + CSS + Resposive Design</p>
              </div>
            </div>
            <div className="card_skill ux">
              <img src="/static/icons/design.png" alt=""/>
              <div className="info_skill">
                <h3>Diseño Web</h3>
                <p>UI/UX + Adobe XD/Figma + Zeplin</p>
              </div>
            </div>
            <img src="/static/icons/rocket.png" alt="" className="rocket"/>
          </div>
        </section>
        <section className="about_me">
          <div className="container">
          <h2>Sobre mí</h2>
          <article className="about_description">
            <p>Aquí puedes escribir algo bien chido sobre tí, lo que te gusta y lo que no. Los lugares que quieres conocer o la comida que más disfrutas, incluso puedes hablar de tus macotas. </p>
            <p>¿Dónde quieres trabajar? Sin dudar en Platzi</p>
          </article>
          </div>
        </section>
        <section className="proyects">
          <div className="container">
            <h2>Proyectos</h2>
            <div className="proyects_container">
              <a href="https://platzi-bagdes.now.sh"  className="card_proyect">
                <img src="/static/platzi-bagdes.now.sh_(iPad Pro).png" alt=""/>
              </a>
              <a href="https://platzi-bedu-blog.now.sh"  className="card_proyect">
                <img src="/static/platzi-bedu.jpg" alt=""/>
              </a>
            </div>
          </div>
        </section>
        <footer className="footer">
           <p>Developed by @AlexTexis10 💚</p> 
        </footer>
    </section>
    <style jsx>{
      `
       .content 
       {
         grid-area : content;
       }
      
       .hero
       {
         height: 180px;
         background-color: var(--background-primary);
         box-shadow: 0 9px 6px -5px rgba(0,0,0,.1);
         padding : 0 1em;
         box-sizing: border-box;
        }
        
        .hero h2 
        {
          height : inherit;
          margin : 0;
          font-size: 3.5em;
          width: 500px;
      
        }
        
        .hero .container 
        {
        height: inherit;
        position: relative;
        max-width: 1024px;
        margin:0 auto;
      }
      
      .container 
      {
        max-width: 1024px;
        margin:0 auto;
      
      }
      
       .header 
       {
         background-color: var(--background-primary);
         height : 70px;
         padding : 0 1em;
         font-size: 1.2em;
       }
      
       .header ul  
       {
          height : inherit;
          padding: 0;
          margin: 0;
          display : flex;
          align-items: center;
          justify-content: flex-end
       }
      
       .header li 
       {
         list-style: none;
         margin : 0 1em;
         color :var(--text-color)
       }
      
       .header a 
       {
         font-size: 1em;
         text-decoration: none;
         color : var(--text-color)
       }
      
       .hero_container 
       {
         height : 100px;
         max-width : 1024px;
         margin: auto;
         position: relative;
       }
      
      .card_float 
      {
        width : 300px;
        height : 300px;
        background-color: #E92042;
        background-image: url('/static/revealed.gif');
        background-position : center;
        background-repeat: no-repeat;
        position: absolute;
        right: 0;
        top: 35px;
        border-radius : 8px;
        box-shadow: 0 5px 12px -5px rgba(0,0,0,.5)
      }
      
      .skills
      {
        padding : 6em 0 0 0;
        height : 340px; 
      }
      
      .skills .container 
      {
        height: inherit;
        position: relative;
      }
      
      .card_skill 
      {
        background-color: var(--background-primary);
        color : var(--text-color);
        width : 340px;
        height : 90px;
        padding : 1em ;
        box-sizing: border-box;
        border-radius : 8px;
        box-shadow: 0 4px 12px -4px rgba(0,0,0,.5);
        display : grid;
        grid-template: 1fr / 80px 1fr;
        margin-bottom : 1.5em;
        align-items: center;
      }
      
      .card_skill h3,.card_skill p
      {
        margin:0
      }
      
      .card_skill h3 
      {
        padding-bottom : .4em
      }
      
      .ux
      {
      position: relative;
      left : 100px
      }
      
      .rocket
      {
        position: absolute;
        right:40px;
        bottom:20px;
      }
      
      .about_me 
      {
        font-size: 1em;
        margin-bottom: 4em;
      }
      
      .about_me h2 
      {
        font-size: 2em;
      }
      
      
      .about_description 
      {
        background-color: var(--background-primary);
        color : var(--text-color);
        padding : 1em;
        box-sizing: border-box;
        border-radius : 8px;
        box-shadow: 0 4px 12px -4px rgba(0,0,0,.5);
      }
      
      .about_description p:nth-of-type(2)
      {
        font-weight: bold;
      }
      
      .proyects 
      {
        font-size: 1em;
        margin-bottom: 4em;
      }
      
      .proyects h2 
      {
        font-size: 2em;
        text-align: center;
      }
      
      .proyects_container
      {
        display : flex;
        justify-content: center;
      
      }
      
      .card_proyect 
      {
        width : 250px;
        height : 300px;
        border-radius: 8px;
        background-color: var(--background-primary);
        margin : 0 1em;
        box-shadow: 0 4px 12px -4px rgba(0,0,0,.5);
        overflow: hidden;
        position: relative;
      }
      
      
      .card_proyect img 
      {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: .3s ease;
      }
      
      .card_proyect:hover img 
      {
        transform: scale(1.1)
      }
      
      .footer 
      {
        height : 30px;
        background-color: #E92042;
        color : #fff;
        text-align: center
      }
      
      .footer p 
      {
        margin : 0;
        line-height: 30px;
      }

      //media queries
      @media screen and (max-width : 1240px)
      {
        .container 
        {
          margin : 0 1em;
        }
      }
      @media screen and (max-width : 900px)
      {

        .card_float 
        {
          width : 200px;
        height : 200px;
        background-position:center;
        background-size :190px;
        }

        .rocket
        {
          position: absolute;
          width: 150px;
          right:40px;
          bottom:-30px;
        }
      }
      @media screen and (max-width : 768px)
      {
        
        .hero h2 
        {
          font-size: 3em;
          width: 400px;
        }
        
      }
      @media screen and (max-width : 620px)
      {

        .hero h2 
        {
          font-size: 2.5em;
          width: auto;
          text-align: center;
        }  

        .skills
        {
          height: 380px;
        }

        .proyects_container
        {
          flex-direction: column;
          align-items: center;
        }

        .card_proyect
        {
          margin-bottom: 1em;
          width : 300px;
          height : 200px;
        }

        .card_float 
        {
        width : 150px;
        height : 150px;
        left: 0;
        top : 80px;
        margin:  0 auto;
        }

        
      }

      @media screen and (max-width : 500px)
      {
        .card_skill 
        {
          width: auto
        }

        .ux 
        {
          left: 0;
        }
  
        .rocket 
        {

          position: absolute;
          width: 140px;
          right:0;
          left : 0;
          bottom:0;
          margin : 0 auto;
        }
      }

      @media screen and (max-width : 480px)
      {

        .card_float 
        {
        width : 140px;
        height : 140px;
        top : 110px;
        }

        .card_proyect 
        {
          width: 250px;
        }
      }

      @media screen and (max-width : 360px)
      {
        .rocket
        {
          width: 120px;
          right:40px;
          bottom:0px;
        }
      }
      
      `
    }</style>
  </Layout>
  )
}

export default App