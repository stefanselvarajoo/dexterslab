-- phpMyAdmin SQL Dump
-- version 5.0.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2020 at 05:56 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `futurelab`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES
(1, 'test', '$2y$10$SfhYIDtn.iOuCW7zfoFLuuZHX6lja4lF4XA4JqNmpiH/.P3zB8JCa', 'stefan.selvarajoo@global.ntt'),
(2, 'test1', '$2y$10$M.PSjWjkRPUiJ/XY3F4wfu5W5n6vKdSVlk2YOR8Y.ExynxGTXe4cm', 'test@gmail.com'),
(3, 'test2', '$2y$10$2Y4a0DQHa3OYP5HOhbXrqOWxLhwjnQ6LzIdGazwiJ0rJpjHCVkX.S', 'test2@asd.com'),
(4, 'testing', '$2y$10$5FU5N7HwHO8JoAB9/KWMUOoYZ2j5ZKaNFVbBgzCv.surA0b01Zyj6', 'tesing@asd.com'),
(5, 'testing1', '$2y$10$Cn95F5xMNHR.KykfIumv8uCJozGM9mm2c6FUAWmwubLe5u0YeF.Om', 'testing@asd.com');

-- --------------------------------------------------------

--
-- Table structure for table `rack`
--

CREATE TABLE `rack` (
  `rackID` bigint(20) UNSIGNED NOT NULL,
  `slotID` bit(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rack`
--

INSERT INTO `rack` (`rackID`, `slotID`) VALUES
(1, b'0000000000000000000000001');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rack`
--
ALTER TABLE `rack`
  ADD UNIQUE KEY `rackID` (`rackID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `rack`
--
ALTER TABLE `rack`
  MODIFY `rackID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

