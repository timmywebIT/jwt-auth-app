import Swal from "sweetalert2";

export function showRegisterSuccess() {
    Swal.fire({
        title: 'Успешно!',
        text: 'Регистрация прошла успешно',
        icon: 'success',
        confirmButtonText: 'Ок',
        timer: 2000,
        showConfirmButton: false,
    })
}