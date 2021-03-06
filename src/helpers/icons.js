import { 
  faTrash, 
  faSignOutAlt, 
  faEdit, 
  faMinusCircle,
  faSpinner,
  faBlog,
  faPhoneSquare,
  faEnvelope,
  faMapMarkerAlt,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faMinusCircle, 
    faSpinner, 
    faBlog, 
    faPhoneSquare,
    faEnvelope,
    faMapMarkerAlt,
    faLock
  );
};

export default Icons;