import styled from "styled-components"



export const Wrapper = styled.div`
  padding: 0 24px;
  width: 100%;
   
   @media ${props => props.theme.breakpoints.tablet2} {
    margin: 0 auto; 
  }
`

export const ContentWrapper = styled.div`
 
  max-width: 1280px;
   margin: 0 auto;

  @media (min-width: 992px) {
    display: flex;
  }
`

export const PageContent = styled.div`
  /* max-width: 1280px;
   margin: 0 auto; */
   /* padding: 2rem 24px; */

   /* padding: 2rem 24px 0 24px; */

  

`


export const Content = styled.div`
 
   

  /* padding: 2rem 24px; */

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

  .shop-details {
    width: 40%; 
    padding-bottom: 1rem; 
    padding-top: 2.5rem; 

    @media ${props => props.theme.breakpoints.tablet2} {
      width: 80%;
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

    
    
    h3 {
      font-family: "Libre Caslon Text", serif;
      font-size: 1.5rem;
    }

    
 

`