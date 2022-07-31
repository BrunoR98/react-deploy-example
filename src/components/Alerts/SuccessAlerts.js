import Swal from 'sweetalert2';

export function successLoginAlert(username) {
    Swal.fire({
        title: 'Login successful',
        text: `Welcome, ${username}!`,
        icon: 'success',
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
    })
}

export function successRegisterAlert() {
    Swal.fire({
        title: 'Registration successful',
        text: 'Please LogIn to see all posts.',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
    })
}

export function postCreatedAlert() {
    Swal.fire({
        title: 'Post created successfully.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
    })
}

export function logOutAlert(username) {
    Swal.fire({
        title: `See you soon, ${username}.`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
      })
}