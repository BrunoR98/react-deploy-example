import Swal from 'sweetalert2';

export function errorLoginAlert(mensaje) {
    Swal.fire({
        title: 'Login fail',
        text: `${mensaje}`,
        icon: 'error',
        timer: 5000,
        showConfirmButton: true,
        confirmButtonText: 'OK',
        timerProgressBar: true,
    })
}

export function errorRegisterAlert(mensaje) {
    Swal.fire({
        title: 'Registration fail',
        text: `${mensaje}`,
        icon: 'error',
        timer: 5000,
        showConfirmButton: true,
        confirmButtonText: 'OK',
        timerProgressBar: true,
    })
}