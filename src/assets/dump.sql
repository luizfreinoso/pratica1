DROP TABLE IF EXISTS entrevistas;
CREATE TABLE entrevistas (
    id                 INTEGER         PRIMARY KEY AUTOINCREMENT,
    localiza           STRING (255)    NOT NULL,
    nome               STRING (255)    NOT NULL,
    cpf                NUMERIC (12, 0),
    telefone           STRING (20),
    n_residentes       INTEGER         NOT NULL,
    endereco           STRING (255)    NOT NULL,
    numero             INTEGER         DEFAULT 0
                                       NOT NULL,
    dap                STRING (255),
    especie_v          BOOLEAN         NOT NULL,
    especies           STRING (255),
    especie1           STRING (100),
    especie2           STRING (100),
    especie3           STRING (100),
    especie4           STRING (100),
    especie5           STRING (100),
    sistema            STRING (255),
    interesse          BOOLEAN         NOT NULL,
    area_cultivo       NUMERIC (10, 3) NOT NULL,
    area_disp          NUMERIC (10, 3) NOT NULL,
    solo               STRING (255)    NOT NULL,
    compostagem        BOOLEAN         NOT NULL,
    compostagem_outro  STRING (100),
    agua               STRING (100)    NOT NULL,
    reservatorio_c     STRING (100)    NOT NULL,
    per_sis_irrigacao  BOOLEAN         NOT NULL,
    ponto_agua_quintal BOOLEAN         NOT NULL,
    per_reserva        BOOLEAN         NOT NULL,
    situacao           STRING (255),
    animais            BOOLEAN         NOT NULL,
    especie_animal1    STRING (100),
    especie_animal2    STRING (100),
    especie_animal3    STRING (100) 
);

INSERT INTO entrevistas (id, localiza, nome, cpf, telefone, n_residentes, endereco, numero, dap, especie_v, especies, especie1, especie2, especie3, especie4, especie5, sistema, interesse, area_cultivo, area_disp, solo, compostagem, compostagem_outro, agua, reservatorio_c, per_sis_irrigacao, ponto_agua_quintal, per_reserva, situacao, animais, especie_animal1, especie_animal2, especie_animal3) VALUES (1, 'São Francisco', 'Luiz Fernando Reinoso', 12345678910, 93920007526, 2, 'Travessa João XXIII', 56, 1234, 1, 'hortalicas', 'Alface', 'Abacaxi', NULL, NULL, NULL, 'canteiro terreo', 1, 200.4, 300.8, 'arenoso', 1, NULL, 'poco', 'caixa dagua suspensa', 1, 1, 1, NULL, 1, 'Galinha', NULL, NULL);