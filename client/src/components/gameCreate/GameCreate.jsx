import { getAuthUser } from '../../helpers/functions';
import './GameCreate.scss';

const GameCreate = () => {
  const currentUser = getAuthUser();
  
  return (
    <div>GameCreate</div>
  )
}

export default GameCreate;