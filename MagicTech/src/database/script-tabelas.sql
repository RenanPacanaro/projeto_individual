CREATE DATABASE magitech;

USE magitech;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table baralho (
	idBaralho INT PRIMARY KEY AUTO_INCREMENT,
	nome varchar(45),
    formato varchar(45),
    fk_Usuario int not null,
	FOREIGN KEY (fk_Usuario) REFERENCES usuario (idUsuario)
);
create table cor (
idCor int,
cores varchar(45),
primary key pkcomposta (idCor, fk_baralho),
	FOREIGN KEY (fk_baralho) REFERENCES baralho (idBaralho));

create table resultado (
	idResultado INT AUTO_INCREMENT,
    derrotas int,
    vitorias int,
    fk_baralho int not null,
    primary key pkcomposta (idResultado, fk_baralho),
	FOREIGN KEY (fk_baralho) REFERENCES baralho (idBaralho));
select * from usuario;
select * from baralho;