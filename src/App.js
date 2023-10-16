import { library } from "@fortawesome/fontawesome-svg-core";
import Routes from "./Routes/Routes";
import { faCodeCompare, faHeart} from '@fortawesome/free-solid-svg-icons';
library.add(faHeart, faCodeCompare);
function App() {
 return <Routes />
}
export default App;
