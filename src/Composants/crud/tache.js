import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function Taches({ text, delF, toggleTodo, editTache }) {
  const textStyle = {
    textDecoration: text.completed ? 'line-through' : 'none',
  };

  const modifierTache = () => {
    const updatedName = prompt("Entrez le nouveau nom de la tâche :", text.nom);
    if (updatedName !== null) {
      editTache(text.id, updatedName);
    }
  };

  return (
    <tr>
      <td><span style={textStyle}>{text.nom}</span></td>
      <td><button className="custom-button" onClick={delF}><FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} /></button></td>
      <td><button className="custom-button" onClick={toggleTodo}><FontAwesomeIcon icon={faCheck} style={{ color: '#2bc48a'}} /></button></td>
      <td><button className="custom-button" onClick={modifierTache}><FontAwesomeIcon icon={faEdit} style={{ color: '#ffcb61'}} /></button></td>
    </tr>
  );
}
