export const updateAlert = (type, item, message) => {
    document.getElementById('update-alert').innerHTML = `
        <div class='alert alert-${type} alert-dismissible fade show' role='alert'>
            ${type === 'success'
            ? '<i class="bi bi-check-circle-fill me-2"></i>'
            : '<i class="bi bi-exclamation-triangle-fill me-2"></i>'}
            <b>${item}</b> ${message}
            <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
        </div>
    `
}

export const userAlert = (type, message, user) => {
    document.getElementById('user-alert').innerHTML = `
        <div class='alert alert-${type} alert-dismissible fade show' role='alert'>
            ${type === 'success'
            ? '<i class="bi bi-check-circle-fill me-2"></i>'
            : type === 'info'
                ? '<i class="bi bi-info-circle-fill me-2"></i>'
                : type === 'warning'
                    ? '<i class="bi bi-info-circle-fill me-2"></i>'
                    : '<i class="bi bi-exclamation-triangle-fill me-2"></i>'
        }
            ${message} <b>${user}</b>
            <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
        </div>
    `
}