const AnotherToast = (function () {
    function init() {
        if (document.getElementsByClassName('another-toast-container').length < 1) {
            const container = document.createElement('div');
            container.className = 'another-toast-container';
            document.body.appendChild(container);
        }
    }

    function show(message, options = {}) {
        init();

        const defaultOptions = {
            position: 'top-right',
            duration: 30000
        };

        const settings = {...options, ...defaultOptions};
        if (settings.type === undefined || settings.type === null) {
            settings.type = 'info';
        }

        const toast = document.createElement('div');
        toast.className = `another-toast another-toast-${settings.type} another-toast-${settings.position}`;
        toast.textContent = message;

        const container = document.querySelector('.another-toast-container')
        container.appendChild(toast);

        // Animate display
        setTimeout(() => toast.classList.add('show'), 10);

        // Timeout
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, settings.duration);
    }

    return {
        success(message, options = {}) {
            show(message, {...options, type: 'success'});
        },
        warning(message, options = {}) {
            show(message, {...options, type: 'warning'});
        },
        info(message, options = {}) {
            show(message, {...options, type: 'info'});
        },
        error(message, options = {}) {
            show(message, {...options, type: 'error'});
        }
    }
})();

window.AnotherToast = AnotherToast;