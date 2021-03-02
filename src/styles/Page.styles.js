import styled from "styled-components"



export const Wrapper = styled.div`
   max-width: 1280px;
   margin: 0 auto;
   /* padding: 20px 0; */
  

   @media ${props => props.theme.breakpoints.desktop} {
      max-width: 1060px;
    } 
 
   @media ${props => props.theme.breakpoints.tablet2} {
    margin: 0 auto;
    /* padding: 20px 0; */
  }

  @media screen and (max-width: 768px) {
      padding: 0 20px 0 20px;
      
    }
`

export const ContentWrapper = styled.div`
  /* display: block; */
/*   
  display: flex ; 
  flex-direction: row; */
  

  @media (min-width: 992px) {
    display: flex;
  }
`

export const PageContent = styled.div`
  

`


export const Content = styled.div`

  /* padding: 2rem 0; */

  a:-webkit-any-link {
    color: #687C15;
  }
   
   .h3-dark {
     margin: 2rem 0 1rem 0;
   }

   .wp-block-table {
     margin: 1rem 0 2rem 0;
   }

   .inner-content-p {
     width: 56%;

     @media ${props => props.theme.breakpoints.tablet2} {
      width: 100%;
       }
   }
   
  table {
    tbody{
      tr {
        td {
          border-bottom: 1px solid #EBEAEA;
          padding: 1rem 1rem;
        }
        td:not(:last-child) {
          border-right: 1px solid #EBEAEA;
          /* padding-right: 1rem; */
        }
      }
    }
  }

    .tour-cover {
      display: flex;
      flex-direction: row;
      background-color: #9D2C13;
      color: white;
      justify-content: center;
      border-radius: 8px;
      
      .line {
        width: 100px;
        height: 1px;
        background-color: #fff;
        margin-bottom: 1em;
      }

      .tour-details {
        justify-content: center;
        align-content: center;
        padding: 72px 20px;

        h3 {
          font-size: 2rem;
          margin-bottom: 0.5em;
        }

        .p-tour {
          font-size: 1rem;
        }

        .p-tour-title{
          font-size: 3rem;
          font-family: "Libre Caslon Text", serif;
          font-weight: bold;
          margin-bottom: 0.2em;
        }

        .p-tour-subtitle {
          font-family: "Libre Caslon Text", serif;
          font-size: 1.4rem;
          margin-bottom: 0.5em;
        }

        .p-tour-bold {
          font-weight: bold;
          margin-bottom: 0.5em;
        }

        .p-tour-bold,
        .p-tour {
          font-size: 1.4rem;
        }
        
      }

      .tour-img {
       border: 4px solid #fff;
       width: 100%;
       object-fit: cover;

       max-width: 630px;
       max-height: 100%;
       /* background-color: #fff; */
       margin-left: auto;
       
      }
    }
    
    .h2-dark {
        grid-column: 1 ;
    }

    .h3-dark {
        grid-column: 1 ;
    }

    .paragraph-dark {
        grid-column: 1 ;
    }

    .img-side {
        /* grid-column:  2;
        max-width: 500px;
        max-height: 0;
        text-align: center; */
    
        @media ${props => props.theme.breakpoints.tablet2} {
            /* grid-column:  1;
            width: 100%;
            max-width: 200px;
            max-height: 100%; */
       }

       @media screen and (max-width: 768px) {
        /* max-width: 380px;
        width: 100%; */
        /* padding: 0 2em; */
        /* margin: 0 auto; */
      
    }
        
    }

    
        
    
    h3 {
      font-family: "Libre Caslon Text", serif;
      font-size: 1.5rem;
    }

    p {
     /* font-size:1rem;
     margin-bottom: 2rem; */
    }

    .shop {
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;

        .img__shop{
            width: 300px;
            border: 1px solid #eee;
            background-color: whitesmoke;
            padding: 20px 15px;
            margin-right: 20px;
        }
    }
   

    .col-shop {
        display: flex;
        flex-direction: row;
        
        /* justify-content: center; */
        /* align-content: center; */
        /* background-color: peru; */
        
        /* max-width: 1080px; */
       
        
        


        .img-product {
            width: 100%;
            max-width: 340px;
            padding: 20px 15px;
            border: 1px solid #eee;
            background-color: whitesmoke;
            height: 480px;
            /* min-height: 300px; */
            margin-right: 80px;  
            display: flex;
            flex-direction: column;
            justify-content: center; 
            align-content: center;
           
        }

        .price-product {
            color: gray;
            max-width: 300px;
            padding: 10px 25px;
        }

    }


  
  

 

`