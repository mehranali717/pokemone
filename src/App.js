import { library } from "@fortawesome/fontawesome-svg-core";
import Routes from "./Routes/Routes";
import { faCodeCompare, faHeart, faXmark} from '@fortawesome/free-solid-svg-icons';
import "../src/Style.css"
library.add(faHeart, faCodeCompare, faXmark);
function App() {
 return <Routes />
}
export default App;
