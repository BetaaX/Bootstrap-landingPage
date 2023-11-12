function loadScript(src, integrity, crossorigin) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;

        if (integrity) {
            script.integrity = integrity;
        }
        if (crossorigin) {
            script.crossOrigin = crossorigin;
        }

        script.async = true;
        script.defer = true;

        script.onload = resolve;
        script.onerror = reject;

        document.head.appendChild(script);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    loadScript('https://code.jquery.com/jquery-3.7.1.min.js', 'sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=', 'anonymous')
        .then(() => {
            return Promise.all([
                loadScript('./JS/jquery.mask.min.js'),
                loadScript('./JS/jquery.validate.min.js'),
                loadScript('./JS/messages_pt_BR.min.js'),
                loadScript('./JS/landingPage.js'),
                loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL', 'anonymous')
            ]);
        })
        .then(() => {
            console.log('Scripts carregados com sucesso!');
        })
        .catch((error) => {
            console.error('Erro ao carregar scripts:', error);
        });
});
