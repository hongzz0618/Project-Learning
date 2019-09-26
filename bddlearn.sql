-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: academia
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.38-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentario` (
  `idComentario` int(11) NOT NULL AUTO_INCREMENT,
  `comentario` varchar(45) DEFAULT NULL,
  `Usuario_idUsuario` int(11) DEFAULT NULL,
  `Publicacion_idPublicacion` int(11) NOT NULL,
  `Publicacion_Usuario_idUsuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`idComentario`),
  KEY `fk_Comentario_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_Comentario_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (1,'Muy buena publicacion',NULL,1,NULL),(2,'this.state.comentario',NULL,1,NULL),(3,'dasd',NULL,1,NULL),(4,'hola',NULL,1,NULL),(5,'hola',NULL,1,NULL),(6,'asdassad',NULL,1,NULL),(7,'asdsa',NULL,1,NULL),(8,'asdasadssadd',NULL,1,NULL),(9,'comentario9',NULL,1,NULL),(10,'hola',NULL,4,NULL),(11,'hhh',NULL,1,NULL),(12,'gg',NULL,4,NULL),(13,'dsdf',NULL,4,NULL),(14,'asd',NULL,1,NULL),(15,'15',NULL,1,NULL),(16,'dasdas',NULL,4,NULL),(17,'ddd',NULL,1,NULL),(18,'ffdsd',NULL,1,NULL),(19,'f',NULL,1,NULL),(20,'hdoashds',NULL,6,NULL),(21,'sadas',NULL,1,NULL);
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like`
--

DROP TABLE IF EXISTS `like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `like` (
  `idLike` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario_idUsuario` int(11) DEFAULT NULL,
  `Publicacion_idPublicacion` int(11) NOT NULL,
  `Publicacion_Usuario_idUsuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`idLike`),
  KEY `fk_Like_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_Like_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like`
--

LOCK TABLES `like` WRITE;
/*!40000 ALTER TABLE `like` DISABLE KEYS */;
INSERT INTO `like` VALUES (1,NULL,1,NULL),(2,NULL,1,NULL),(3,NULL,1,NULL),(4,NULL,1,NULL),(5,NULL,1,NULL),(6,NULL,1,NULL),(7,NULL,1,NULL),(8,NULL,1,NULL),(9,NULL,1,NULL),(10,NULL,1,NULL),(11,NULL,1,NULL),(12,NULL,1,NULL),(13,NULL,1,NULL),(14,NULL,1,NULL),(15,NULL,1,NULL),(16,NULL,4,NULL),(17,NULL,1,NULL),(18,NULL,1,NULL),(19,NULL,1,NULL),(20,NULL,1,NULL),(21,NULL,1,NULL),(22,NULL,1,NULL),(23,NULL,1,NULL),(24,NULL,1,NULL),(25,NULL,1,NULL),(26,NULL,1,NULL),(27,NULL,1,NULL),(28,NULL,1,NULL);
/*!40000 ALTER TABLE `like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacion`
--

DROP TABLE IF EXISTS `publicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `publicacion` (
  `idPublicacion` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `precio` varchar(45) DEFAULT NULL,
  `info` text,
  `Usuario_idUsuario` int(11) DEFAULT NULL,
  `img` text,
  `ubicacion_latitud` varchar(45) DEFAULT NULL,
  `ubicacion_longitud` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPublicacion`),
  KEY `fk_Publicacion_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_Publicacion_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion`
--

LOCK TABLES `publicacion` WRITE;
/*!40000 ALTER TABLE `publicacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `publicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puntuacion`
--

DROP TABLE IF EXISTS `puntuacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `puntuacion` (
  `idPuntuacion` int(11) NOT NULL,
  `estrellas` float DEFAULT NULL,
  `Usuario_idUsuario` int(11) NOT NULL,
  `Publicacion_idPublicacion` int(11) NOT NULL,
  `Publicacion_Usuario_idUsuario` int(11) NOT NULL,
  PRIMARY KEY (`idPuntuacion`),
  KEY `fk_Puntuacion_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_Puntuacion_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puntuacion`
--

LOCK TABLES `puntuacion` WRITE;
/*!40000 ALTER TABLE `puntuacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `puntuacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tokens` (
  `idtokens` int(11) NOT NULL,
  `token` varchar(45) DEFAULT NULL,
  `hores` varchar(45) DEFAULT NULL,
  `iduser` int(11) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idtokens`),
  KEY `tokens_idx` (`iduser`,`nombre`),
  CONSTRAINT `tokens` FOREIGN KEY (`iduser`, `nombre`) REFERENCES `usuario` (`idUsuario`, `email`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `foto` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `tel` varchar(45) NOT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `facebook` varchar(45) DEFAULT NULL,
  `whatsapp` varchar(45) DEFAULT NULL,
  `instagram` varchar(45) DEFAULT NULL,
  `skype` varchar(45) DEFAULT NULL,
  `disponibilidad` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `tipo` int(1) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`,`email`),
  KEY `nom_idx` (`nombre`,`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (5,'Jorge',NULL,'tesoswag13@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'cacatua13',NULL),(6,'Jorge',NULL,'basicsma@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$FORV3zONLLCRxR3j4rO75.eHLl3rryfnudzcic',NULL),(7,'Caca',NULL,'cacatua@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$ghodqC4jisTH51Kh7iimhuJtAZzN6odvjbIgoL',NULL),(8,'Caca',NULL,'cacatua@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$uUdLbMEiYvGyEYh6.p5MLOyVlKKItaeY2nWYPV',NULL),(9,'Jorge',NULL,'111@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$ugXxn5KSBH1kdgChJhXAH.3FuZA5MVBasfK8Nb',NULL),(10,'ffff',NULL,'jorgesanchezbusiness@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$ypqPcXhgHxffamqibSCJZ.3MoRGTTeJ4GCmSSA',NULL),(11,'Camiseta roja',NULL,'jsanchezpc@hotmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$p1nSXnIvw5UIS76yys9ka.q.6ltIUmgpyu1fsJ',NULL),(12,'eee',NULL,'1234@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$nmWCpA4drsQUsl4vrckM8.rIroRZ5/VyWAl8z0',NULL),(13,'harry potter',NULL,'harry@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$XmLgzVeNrhYs/2FVdDFYLev7IJT2fXmpQ3Lc7U',NULL),(14,'Jorge',NULL,'jeje@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$EYjP8hbN6hUoYQfSi.X2sOCq3t8UiAYtAFq8u4',NULL),(15,'react',NULL,'react@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$WsityA5rog5Pij9b2Z596ueuty04mCAkmpkH29',NULL),(16,'RICHI',NULL,'richi@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$rUm2JArSiO0aABgJ1rkhJuMapxRWCmXOAgaK2c',NULL),(17,'Jorge',NULL,'rixard@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$8HXYC4h554wv7u/C7Ozss.dkVJDnBjE8Ch52dt',NULL),(18,'tete',NULL,'quehase@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$D43Z0MwlMZrqOuDugaBW5Om1Hy.rdT4wPJ9FO0',NULL),(19,'ss',NULL,'ss@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$6LPGClNtLsmoRxiOGUZ4meUn0q/YvEAwsoKdt8',NULL),(20,'qe',NULL,'qe@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$1AH6C1CWfCbyBq0evBbPqOhlxb3EV2UAfwwPxQ',NULL),(21,'ww',NULL,'ww@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$Qz37MxIjmnVNeh2FEWlWPOoxAbsAPUW9M6V0YH',NULL),(22,'holacaracola',NULL,'caracola@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$XcoggD5hjKAJ8WQHQkNdoeKcYhy/Bxz2AUcORC',NULL),(23,'cvb',NULL,'cvb@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$is1d74Wr1BYD11UNps.BK.lWLMdo0y8G2018aw',NULL),(24,'jorgito',NULL,'jorgito@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$EHO4WWZ4UUt2d.iLEr0xWu4gvrnjsWkqL97/8J',NULL),(25,'itsok',NULL,'itok@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$tjzcZi0jZQgGaCv8qfR8mu70iZHZ0vJnJVVdHT',NULL),(26,'Jorge',NULL,'sanchez@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$eGMRViKMRkjshxMLhbTUFup3fVsd/fpTrco4h0',NULL),(27,'jorge',NULL,'popo@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$SZCi4TUBXSOHm26.TK/o2urO3ywjblncEUJS97',NULL),(28,'Jorge',NULL,'mimi@gmail.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$rZKAfNuMuUaK/gvXkdcKpu0DmYtqkI8oOhtovmp5IAmzac9a9gxzq',NULL),(29,'ricard',NULL,'ricard@xxx.com','',NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$ZQdublNU4ZXy9WSNXz.bweWde1I2VPvSpaRC9o1UPBTig/7SCpdBe',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-26  9:30:34
