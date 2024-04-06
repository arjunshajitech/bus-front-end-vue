import { useToast } from 'vue-toast-notification';
const toast = useToast();

const success = (text) => {
    toast.open({
        message: text,
        type: 'success',
        duration: 3000,
        position: 'bottom-right'
    })
}

const error = (text) => {
    toast.open({
        message: text,
        type: 'error',
        duration: 3000,
        position: 'bottom-right'
    })
}

const warning = (text) => {
    toast.open({
        message: text,
        type: 'warning',
        duration: 3000,
        position: 'bottom-right'
    })
}


export default { success, error, warning }