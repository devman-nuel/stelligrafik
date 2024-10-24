export const IO = (item, options) => {
    return new Promise((resolve) => {
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    resolve(entry);  // Resolve with entry for more info
                    observer.disconnect();  // Disconnect to avoid memory leak
                }
            });
        }, options);
        observer.observe(item);
    });
};
