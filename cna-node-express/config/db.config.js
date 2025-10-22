module.exports = {
    HOST     : process.env.DB_HOST,
    USER     : process.env.DB_USER,
    PASSWORD : process.env.DB_PASSWORD,
    DB       : process.env.DB_NAME,
    PORT     : process.env.DB_PORT,
    DIALECT  : process.env.DB_DIALECT,
    POOL     : {
        max     : process.env.DB_POOL_MAX      || 5,
        min     : process.env.DB_POOL_MIN      || 0,
        acquire : process.env.DB_POOL_ACQUIRE  || 30000,
        idle    : process.env.DB_POOL_IDLE     || 10000
    }
};
