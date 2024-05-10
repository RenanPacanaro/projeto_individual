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
	cor varchar(45),
	constraint chkcor check (cor in ('preto', 'branco', 'vermelho', 'azul', 'verde')),
    formato varchar(45),
	constraint chkformato check (formato in ('commander', 'modern', 'legacy', 'vintage', 'pauper')),
    nome varchar(45),
    fk_Usuario int not null,
	FOREIGN KEY (fk_Usuario) REFERENCES usuario (idUsuario)
);

create table resultado (
	idResultado INT AUTO_INCREMENT,
    derrotas int,
    vitorias int,
    fk_baralho int not null,
    primary key pkcomposta (idResultado, fk_baralho),
	FOREIGN KEY (fk_baralho) REFERENCES baralho (idBaralho));



insert into empresa (razao_social, cnpj) values ('Empresa 1', '00000000000000');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
    
    