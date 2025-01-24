-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/01/2025 às 08:04
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `lifeweb`
--

CREATE DATABASE lifeweb 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_general_ci;

-- --------------------------------------------------------
USE lifeweb;

--
-- Estrutura para tabela `funcao`
--

CREATE TABLE `funcao` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `funcao`
--

INSERT INTO `funcao` (`id`, `nome`) VALUES
(1, 'Motorista'),
(2, 'Gerente'),
(3, 'Supervisor'),
(4, 'Assistente Administrativo'),
(5, 'Técnico de Manutenção');

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcionario`
--

CREATE TABLE `funcionario` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `funcao_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `funcionario`
--

INSERT INTO `funcionario` (`id`, `nome`, `funcao_id`) VALUES
(1, 'Lucas Matheus Duarte de Oliveira', 1),
(2, 'Larissa Pereira Duarte', 2),
(3, 'Jesus Leonardo Mel', 3),
(4, 'Ana Paula Ribeiro', 4),
(5, 'Carlos Eduardo Santos', 5),
(6, 'Maria Clara Fernandes', 1),
(7, 'João Pedro Oliveira', 2),
(8, 'Beatriz Souza Lima', 3),
(9, 'Fernanda Rocha', 4),
(10, 'Roberto Almeida', 5),
(11, 'Claudia Martins', 1),
(12, 'Paulo Henrique Alves', 2),
(13, 'Juliana Gonçalves', 3),
(14, 'Ricardo Silva', 4),
(15, 'Carolina Mendes', 5),
(16, 'Felipe Augusto', 1),
(17, 'Camila Andrade', 2),
(18, 'Marcos Vinicius', 3),
(19, 'Gabriela Nunes', 4),
(20, 'Daniel Figueiredo', 5),
(21, 'Luana Santos', 1),
(22, 'Thiago Moreira', 2),
(23, 'Patrícia Costa', 3),
(24, 'Victor Hugo Lima', 4),
(25, 'Débora Araújo', 5),
(26, 'Rafael Gonçalves', 1),
(27, 'Adriana Ferreira', 2),
(28, 'André Matos', 3),
(29, 'Tatiane Almeida', 4),
(30, 'Bruno Lopes', 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `rastreamento`
--

CREATE TABLE `rastreamento` (
  `id` int(11) NOT NULL,
  `veiculo_id` int(11) NOT NULL,
  `funcionario_id` int(11) NOT NULL,
  `data_ocorrencia` datetime NOT NULL,
  `vel_registrada` decimal(5,2) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `rastreamento`
--

INSERT INTO `rastreamento` (`id`, `veiculo_id`, `funcionario_id`, `data_ocorrencia`, `vel_registrada`, `latitude`, `longitude`) VALUES
(26, 1, 1, '2025-01-01 08:00:00', 135.00, '-23.550520', '-46.633308'),
(27, 2, 2, '2025-01-02 09:15:00', 120.00, '34.052235', '-118.243683'),
(28, 3, 3, '2025-01-03 10:30:00', 150.00, '48.856613', '2.352222'),
(29, 4, 4, '2025-01-04 11:45:00', 180.00, '51.507351', '-0.127758'),
(30, 5, 5, '2025-01-05 12:00:00', 165.00, '35.689487', '139.691711'),
(31, 6, 6, '2025-01-06 08:30:00', 117.00, '-30.559482', '22.937506'),
(32, 7, 7, '2025-01-07 09:45:00', 117.00, '-34.603722', '-58.381592'),
(33, 8, 8, '2025-01-08 10:00:00', 117.00, '55.755825', '37.617298'),
(34, 9, 9, '2025-01-09 11:15:00', 143.00, '-33.868820', '151.209290'),
(35, 10, 10, '2025-01-10 12:30:00', 156.00, '-22.906847', '-43.172897'),
(36, 11, 11, '2025-01-11 08:45:00', 108.00, '40.712776', '-74.005974'),
(37, 12, 12, '2025-01-12 09:00:00', 168.00, '-15.794229', '-47.882166'),
(38, 13, 13, '2025-01-13 10:15:00', 156.00, '19.432608', '-99.133209'),
(39, 14, 14, '2025-01-14 11:30:00', 108.00, '37.774929', '-122.419418'),
(40, 15, 15, '2025-01-15 12:45:00', 96.00, '41.878113', '-87.629799'),
(41, 16, 16, '2025-01-16 08:15:00', 144.00, '-23.550520', '-46.633308'),
(42, 17, 17, '2025-01-17 09:30:00', 132.00, '34.052235', '-118.243683'),
(43, 18, 18, '2025-01-18 10:45:00', 168.00, '48.856613', '2.352222'),
(44, 19, 19, '2025-01-19 11:00:00', 108.00, '51.507351', '-0.127758'),
(45, 20, 20, '2025-01-20 12:15:00', 120.00, '35.689487', '139.691711'),
(46, 21, 21, '2025-01-01 08:00:00', 100.00, '-30.559482', '22.937506'),
(47, 22, 22, '2025-01-05 09:30:00', 135.00, '-34.603722', '-58.381592'),
(48, 23, 23, '2025-01-07 11:15:00', 115.00, '55.755825', '37.617298'),
(49, 24, 24, '2025-01-09 13:30:00', 140.00, '-33.868820', '151.209290'),
(50, 25, 25, '2025-01-11 15:45:00', 90.00, '-22.906847', '-43.172897'),
(51, 26, 26, '2025-01-13 08:15:00', 120.00, '40.712776', '-74.005974'),
(52, 27, 27, '2025-01-14 10:45:00', 160.00, '-15.794229', '-47.882166'),
(53, 28, 28, '2025-01-15 12:00:00', 110.00, '19.432608', '-99.133209'),
(54, 29, 29, '2025-01-18 13:15:00', 105.00, '37.774929', '-122.419418'),
(55, 30, 30, '2025-01-20 14:30:00', 130.00, '41.878113', '-87.629799');

-- --------------------------------------------------------

--
-- Estrutura para tabela `veiculo`
--

CREATE TABLE `veiculo` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `placa` varchar(7) NOT NULL,
  `vel_maxima` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `veiculo`
--

INSERT INTO `veiculo` (`id`, `nome`, `placa`, `vel_maxima`) VALUES
(1, 'Caminhão Volvo', 'ABC1234', 90),
(2, 'Ônibus Scania', 'DEF5678', 80),
(3, 'Van Sprinter', 'GHI9012', 100),
(4, 'Carro Gol', 'JKL3456', 120),
(5, 'Carro Onix', 'MNO7890', 110),
(6, 'Moto Honda', 'PQR1234', 140),
(7, 'Moto Yamaha', 'STU5678', 130),
(8, 'Caminhão Mercedes', 'VWX9012', 90),
(9, 'Carro Polo', 'YZA3456', 110),
(10, 'Carro Fiat', 'BCD7890', 120),
(11, 'Van Ducato', 'EFG1234', 100),
(12, 'Moto Suzuki', 'HIJ5678', 140),
(13, 'Carro Corolla', 'KLM9012', 130),
(14, 'Caminhão Iveco', 'NOP3456', 90),
(15, 'Ônibus Volvo', 'QRS7890', 80),
(16, 'Carro Civic', 'TUV1234', 120),
(17, 'Carro HB20', 'WXY5678', 110),
(18, 'Moto BMW', 'ZAB9012', 150),
(19, 'Caminhão Ford', 'CDE3456', 90),
(20, 'Van Transit', 'FGH7890', 100),
(21, 'Carro Cruze', 'IJK1234', 110),
(22, 'Carro Ranger', 'LMN5678', 120),
(23, 'Caminhão VW', 'OPQ9012', 90),
(24, 'Carro Compass', 'RST3456', 110),
(25, 'Carro Renegade', 'UVW7890', 120),
(26, 'Moto Triumph', 'XYZ1234', 160),
(27, 'Caminhão Scania', 'ABC5678', 90),
(28, 'Carro Spin', 'DEF9012', 120),
(29, 'Carro T-Cross', 'GHI3456', 110),
(30, 'Carro Ka', 'JKL7890', 100);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `funcao`
--
ALTER TABLE `funcao`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `funcionario`
--
ALTER TABLE `funcionario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `funcao_id` (`funcao_id`);

--
-- Índices de tabela `rastreamento`
--
ALTER TABLE `rastreamento`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `veiculo`
--
ALTER TABLE `veiculo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `placa` (`placa`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `funcao`
--
ALTER TABLE `funcao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `funcionario`
--
ALTER TABLE `funcionario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de tabela `rastreamento`
--
ALTER TABLE `rastreamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de tabela `veiculo`
--
ALTER TABLE `veiculo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `funcionario`
--
ALTER TABLE `funcionario`
  ADD CONSTRAINT `funcionario_ibfk_1` FOREIGN KEY (`funcao_id`) REFERENCES `funcao` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
