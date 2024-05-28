drop database magitech;
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
idCor int auto_increment,
cores varchar(45),
fk_baralho int,
primary key pkcomposta (idCor, fk_baralho),
	FOREIGN KEY (fk_baralho) REFERENCES baralho (idBaralho));

create table resultado (
	idResultado INT AUTO_INCREMENT,
    vitorias int,
    derrotas int,
    empates int,
    fk_baralho int not null,
    primary key pkcomposta (idResultado, fk_baralho),
	FOREIGN KEY (fk_baralho) REFERENCES baralho (idBaralho));

insert into usuario values
(default, 'r', 'r@gmail.com', 12345);
select * from usuario;
select * from baralho;
select * from cor;
select * from resultado;
select idBaralho, max(vitorias) as vitorias, max(derrotas) as derrotas, max(empates) as empates from resultado join baralho on resultado.fk_baralho = baralho.idBaralho 
    WHERE baralho.fk_Usuario = 1 group by idBaralho;