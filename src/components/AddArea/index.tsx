import * as C from './styles'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const AddArea = () => {
  return (
    <C.Container>
      <div className='icon'>
        <FontAwesomeIcon 
        icon={faPlusCircle}
        font-size={'2rem'}
         /> 
      </div>
      <input 
      type="text"
      placeholder='Adicione uma tarefa'
      />
    </C.Container>
  )
}