import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const sweetAlert = (title, icon, message) => MySwal.fire({
  title,
  icon,
  text: message
});

export default sweetAlert;