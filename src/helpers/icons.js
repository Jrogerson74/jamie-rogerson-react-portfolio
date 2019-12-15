import { 
  faTrash, 
  faSignOutAlt, 
  faEdit, 
  faMinusCircle,
  faSpinner,
  faBlog,
  faPhoneSquare,
  faEnvelope,
  faMapMarkerAlt
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
    faMapMarkerAlt
  );
};

export default Icons;