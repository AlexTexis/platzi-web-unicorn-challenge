import React,{Fragment} from 'react'
import Head from 'next/head'
// import '../../../styles/layout.css'
// import '../../../styles/general.css'

const Layout = props => {
  return (
    <Fragment>
    <Head>
      <title>Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link href="https://fonts.googleapis.com/css?family=Dosis:400,700&display=swap" rel="stylesheet"/> 
    </Head>
    <div className={props.className}>
    {
      props.children
    }
    </div>
    <style global jsx>
    { `
    body 
    {
      margin : 0;
      background-color: #F7FCFF;
      font-family: 'Dosis', sans-serif;
    }
    
    :root 
    {
      --background-primary : #FCFCFC;
      --text-color : #1A1A4C;
    }
    
    .layout_container{
      display : grid;
      grid-template-columns : 80px 1fr;
      grid-template-rows : auto;
      grid-template-areas: "sidebar content";
      height : 100vh;
     }
     
     @media screen and (max-width : 768px)
    {
  
    .layout_container{
      grid-template-columns : 1fr;
      grid-template-rows : 80px auto;
      grid-template-areas: "sidebar" 
                          "content";
    }
  
    }
    `
    }
    </style>
    </Fragment>
  )
}

export default Layout