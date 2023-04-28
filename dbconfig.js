/*const config = {
    user : 'Pizzas',
    password: 'Pizzas',
    server : 'A-PHZ2-AMI-012',
    database: 'BD.Pizzas',
    options : {
        trustServerCertificate : true,
        trustedConnection : true
    }
}
export default config;*/

import "dotenv/config"

const config = {
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options : {
        trustServerCertificate: true,
        trustedConnection: true,
    }
}

export default config;