import '@fortawesome/fontawesome-free/css/all.css';
import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import './css/style.css';
import Idea from '../../models/Idea';

new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaList();
