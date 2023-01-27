export const handleError = (err) => {
    // The requested Builder content could not be found.
    if (err.response.status === 404) {
        return { data: null };
    }
    throw err;
};