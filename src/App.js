import { library } from "@fortawesome/fontawesome-svg-core";
import Routes from "./Routes/Routes";
import { faBackward, faCodeCompare, faForward, faHeart, faXmark} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faHeart, faCodeCompare, faXmark, faBackward, faForward);
function App() {
 return <Routes />
}
export default App;
