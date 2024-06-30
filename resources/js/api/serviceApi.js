const serviceApi = {

    headerContent: {
        'Content-Type': 'application/json; charset=utf-8',
    },

    mediaHeaderContent: {
        "Content-Type": "multipart/form-data",
    },

    /*ERROR HANDLER*/
    ErrorHandler(error) {
        Object.entries(error).forEach(([i, v]) => {
            const inputElement = document.querySelector(`[name="${i}"]`);
            const errorReport = inputElement?.closest('.form-group')?.querySelector('.error-report');
            if ( errorReport ) errorReport.textContent = v;
        });
    },

    /*CLEAR ERROR HANDLER*/
    ClearErrorHandler() {
        const elements = document.querySelectorAll('.error-report');
        elements.forEach((e) => {
            e.textContent = '';
        });
    },

}

export default serviceApi;
