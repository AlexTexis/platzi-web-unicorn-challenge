import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="static/icons/unicorn.png" alt=""/>
      <div className="social_networks">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
      <style jsx>
        {
          `
          .sidebar 
          {
            grid-area: sidebar;
            background-color : var(--background-primary);
            height : 500px;
            box-shadow : 3px 5px 9px -5px rgba(0,0,0,.4);
            padding : 1em;
            box-sizing: border-box;
            position: relative;
            z-index: 1;
          }

          .sidebar img 
          {
            width : 100%;
          }

          .social_networks 
          {
            position: absolute;
            bottom: 0;
            left: 0;
            right:0;
            padding: 1em 0;
            box-sizing: border-box;
          }

          .social_networks a 
          {
            display: block;
            height: 50px;
            width : 50px;
            background-position: center;
            background-repeat: no-repeat;
            margin: auto;
          }

          .social_networks a:nth-of-type(1)
          {
            background-image: url(/static/icons/instagram.png);
          }
          .social_networks a:nth-of-type(2)
          {
            background-image: url(/static/icons/whatsapp.png);
          }
          .social_networks a:nth-of-type(3)
          {
            background-image: url(/static/icons/youtube.png);
          }
          .social_networks a:nth-of-type(4)
          {
            background-image: url(/static/icons/twitter.png);
          }

          @media screen and (max-width : 768px)
          {
            .sidebar 
            {
              height: auto;
              display: flex;
              align-items: center;
              justify-content: space-between
            }

            .sidebar img 
            {
              width: auto
            }

            .social_networks 
            {
              position: relative;
              width: 200px;
              display: flex;
              justify-content: center;
            }
          }
          `
        }
      </style>
    </div>
  )
}

export default Sidebar