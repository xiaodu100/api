const mssql = {
    user: "sa",
    password: "123",
    server: "localhost", // You can use 'localhost\\instance' to connect to named instance
    database: "api",
    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
};

module.exports = mssql;