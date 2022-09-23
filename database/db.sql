--  base de datos

CREATE DATABASE crudnodejsmysql;

use crudnodejsmysql;

CREATE TABLE vehiculo (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(30) NOT NULL,
    modelo VARCHAR(30) NOT NULL,
    year DATE,
    placa VARCHAR(12) NOT NULL,
    estado VARCHAR(20) NOT NULL
);

--tabla
show tables;

--descripcion del vehiculo
describe vehiculo;