import styled from 'styled-components';

export const Wrapper = styled.header`
  background: ${props => props.theme.colors.dark1};
  height: 140px;
  border-bottom: 1px solid #e7e7e7;
  position: fixed;
  width: 100%;
  z-index: 10000;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  /* max-width: 1180px; */
  margin: 0 auto;
  padding: 0 20px;

  .bhna-branding {
    display: flex;
    
    justify-content: center; 
    align-items: center;
  }

  img {
    width: 160px;
    margin: 0;
    /* padding: 12px 0 0 0; */
  }

  .sm-line {
    /* margin: 1px 0; */
    height: 96px;
    width: 1px;
    background-color: white;
    margin: 0 12px;
  }

  .bhna-register {
    color: #ffff;
    font-family: "Lusitana", sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 0.775rem;
    letter-spacing: 0.8px;
    align-self: center;
    justify-content: center;
    
  }

  .register {
    align-self: center;
    justify-content: center;
  }
`;

