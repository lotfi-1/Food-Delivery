// errorHandler.js (where you handle errors)

const errorHandler = (error) => {
    console.error('API Error:', error.message);
    // You can handle the error further, e.g., show an error toast, log to analytics, etc.
};

export default errorHandler;
