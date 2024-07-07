import '@fortawesome/fontawesome-free/css/all.css';
import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';
import './css/style.css';
import Idea from '../../models/Idea';

const modal = new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
