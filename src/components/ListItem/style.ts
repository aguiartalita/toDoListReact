import styled from "styled-components";

interface ContainerProps {
  done : boolean;
}

export const Container = styled.div(( {done} : ContainerProps) => (
  `
  align-items: center;
  background-color: #20212C;
  border-radius: 10px;
  display: flex;
  margin-top: 10px;
  margin-bottom : 10px;
  padding: 10px;
 
  input {
    height: 25px;
    margin-right: 5px;
    width: 25px;
  }

  label {
    color:#CCC;
    text-decoration : ${done ? 'line-through' : 'initial'}; 
  }
`
));