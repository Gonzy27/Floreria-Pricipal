-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2017 a las 17:07:08
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `floreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `nombre` varchar(30) NOT NULL,
  `apellido_paterno` varchar(30) NOT NULL,
  `apellido_materno` varchar(30) NOT NULL,
  `rut` varchar(9) NOT NULL,
  `telefono` int(11) DEFAULT NULL,
  `celular` int(11) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `pass` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`nombre`, `apellido_paterno`, `apellido_materno`, `rut`, `telefono`, `celular`, `correo`, `pass`) VALUES
('Remigio', 'Fernandez', 'Monje', '187895375', 42554831, 987654321, 'remi@live.cl', 'aszasz123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprobantepago`
--

CREATE TABLE `comprobantepago` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `apellido` varchar(20) DEFAULT NULL,
  `rut` varchar(9) DEFAULT NULL,
  `direccion` varchar(40) DEFAULT NULL,
  `comuna` varchar(20) DEFAULT NULL,
  `formaPago` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `destinatario`
--

CREATE TABLE `destinatario` (
  `rut` varchar(9) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `apellido` varchar(30) DEFAULT NULL,
  `comuna` varchar(20) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `flor`
--

CREATE TABLE `flor` (
  `id` int(11) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `precio` int(11) NOT NULL,
  `Stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `flor`
--

INSERT INTO `flor` (`id`, `nombre`, `precio`, `Stock`) VALUES
(1, 'rosa blanca', 2000, 100),
(2, 'rosa roja', 2000, 100),
(3, 'rosa azul', 2500, 100),
(4, 'clavel amarillo', 1500, 100),
(5, 'margarita', 2300, 100),
(6, 'tulipan', 3000, 100),
(7, 'dalia roja', 2800, 100),
(8, 'dalia amarilla', 2600, 100),
(9, 'flor de manzana', 2000, 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `remitente`
--

CREATE TABLE `remitente` (
  `rut` varchar(9) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `apellido` varchar(20) DEFAULT NULL,
  `telefonofijo` int(11) DEFAULT NULL,
  `celular` int(11) DEFAULT NULL,
  `correo` varchar(30) DEFAULT NULL,
  `genero` char(1) DEFAULT NULL,
  `fechanac` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesion`
--

CREATE TABLE `sesion` (
  `correo` varchar(30) NOT NULL,
  `pass` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`rut`);

--
-- Indices de la tabla `comprobantepago`
--
ALTER TABLE `comprobantepago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `destinatario`
--
ALTER TABLE `destinatario`
  ADD PRIMARY KEY (`rut`);

--
-- Indices de la tabla `flor`
--
ALTER TABLE `flor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `remitente`
--
ALTER TABLE `remitente`
  ADD PRIMARY KEY (`rut`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
