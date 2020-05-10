import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const options = {
    autoClose: 1500,
    position: toast.POSITION.BOTTOM_RIGHT,
    pauseOnHover: true,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
};

export default function ToastNotification(condition, content) {
    switch(condition) {
        case 'success' : 
            toast.success(content, options); 
            break;
        case 'error' : 
            toast.error(content, options); 
            break;
        case 'info' : 
            toast.info(content, options); 
            break;
        case 'warn' : 
            toast.warn(content, options); 
            break;
        default : 
            toast(content, options); 
            break;
    }
}