const AnotherToast = {
    init() {
        if (document.getElementsByClassName('another-toast').length < 1) {
            const container = document.createElement('div');
            container.className = 'another-toast';
            document.body.appendChild(container);
        }
    },
    show(message, options = {}) {
        this.init();

        const defaultOptions = {
            type: 'info',
            position: 'top-right',
            duration: 3000
        };

        const settings = {...options, ...defaultOptions};

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
    },
    success(message, options = {}) {
        this.show(message, {...options, type: 'success'});
    },
    warning(message, options = {}) {
        this.show(message, {...options, type: 'warning'});
    },
    info(message, options = {}) {
        this.show(message, {...options, type: 'info'});
    },
    error(message, options = {}) {
        this.show(message, {...options, type: 'error'});
    }
};

window.AnotherToast = AnotherToast;