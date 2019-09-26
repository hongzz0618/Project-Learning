CREATE DATABASE  IF NOT EXISTS `academia` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `academia`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: academia
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.6-MariaDB

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
  `Usuario_idUsuario` int(11) DEFAULT NULL,
  `Publicacion_idPublicacion` int(11) NOT NULL,
  `comentario` text DEFAULT NULL,
  PRIMARY KEY (`idComentario`),
  KEY `fk_Comentario_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_Comentario_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (1,NULL,1,'hola'),(36,NULL,1,'adios'),(37,NULL,1,NULL),(38,NULL,1,NULL),(39,NULL,1,NULL),(40,NULL,1,''),(41,NULL,1,'dasda'),(42,NULL,1,'este curso no me ha gustado '),(43,NULL,1,'gg'),(44,NULL,5,'Es muy buen profesor, recomiendo el curso'),(45,NULL,5,'I really wanted to play the guitar, thanks for the lessons');
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likes` (
  `idLike` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario_idUsuario` int(11) DEFAULT NULL,
  `Publicacion_idPublicacion` int(11) NOT NULL,
  PRIMARY KEY (`idLike`),
  KEY `fk_Like_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_Like_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=178 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (1,NULL,1),(2,NULL,1),(3,NULL,1),(4,NULL,1),(5,NULL,1),(6,NULL,1),(7,NULL,1),(8,NULL,1),(9,NULL,1),(10,NULL,1),(11,NULL,1),(12,NULL,1),(13,NULL,1),(14,NULL,1),(15,NULL,1),(16,NULL,4),(17,NULL,1),(18,NULL,1),(19,NULL,1),(20,NULL,1),(21,NULL,1),(22,NULL,1),(23,NULL,1),(24,NULL,1),(25,NULL,1),(26,NULL,1),(27,NULL,1),(28,NULL,1),(29,NULL,16),(30,NULL,16),(31,NULL,16),(32,NULL,16),(33,NULL,16),(34,NULL,16),(35,NULL,16),(36,NULL,16),(37,NULL,16),(38,NULL,16),(39,NULL,16),(40,NULL,16),(41,NULL,16),(42,NULL,16),(43,NULL,16),(44,NULL,16),(45,NULL,16),(46,NULL,16),(47,NULL,16),(48,NULL,16),(49,NULL,16),(50,NULL,16),(51,NULL,16),(52,NULL,16),(53,NULL,16),(54,NULL,16),(55,NULL,16),(56,NULL,16),(57,NULL,16),(58,NULL,16),(59,NULL,16),(60,NULL,16),(61,NULL,16),(62,NULL,16),(63,NULL,16),(64,NULL,16),(65,NULL,16),(66,NULL,16),(67,NULL,16),(68,NULL,16),(69,NULL,16),(70,NULL,16),(71,NULL,16),(72,NULL,16),(73,NULL,16),(74,NULL,16),(75,NULL,16),(76,NULL,16),(77,NULL,16),(78,NULL,1),(79,NULL,1),(80,NULL,1),(81,NULL,1),(82,NULL,2),(83,NULL,2),(141,1,5),(158,1,4),(159,1,3),(162,1,5),(163,1,5),(166,1,6),(167,1,6),(168,1,23),(170,1,5),(171,1,7),(172,1,7),(173,1,7),(174,1,5),(175,1,2),(176,1,6),(177,1,1);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacion`
--

DROP TABLE IF EXISTS `publicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `publicacion` (
  `idPublicacion` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_ES` varchar(45) NOT NULL,
  `nombre_EN` varchar(45) NOT NULL,
  `nombre_CH` varchar(45) NOT NULL,
  `precio` varchar(45) DEFAULT NULL,
  `Usuario_idUsuario` int(11) DEFAULT NULL,
  `file` text DEFAULT NULL,
  `ubicacion_latitud` text DEFAULT NULL,
  `ubicacion_longitud` text DEFAULT NULL,
  `Info_ES` text DEFAULT NULL,
  `Info_EN` text DEFAULT NULL,
  `Info_CH` text DEFAULT NULL,
  PRIMARY KEY (`idPublicacion`),
  KEY `fk_Publicacion_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_Publicacion_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion`
--

LOCK TABLES `publicacion` WRITE;
/*!40000 ALTER TABLE `publicacion` DISABLE KEYS */;
INSERT INTO `publicacion` VALUES (1,'React JS gratuito','React JS','React JS','20€/h',1,'1568793780098-reactjs.png','0','0','En este curso aprenderás desde cero los conceptos más básicos de React hasta llegar a cubrir conocimientos avanzados. Tanto si ya conoces esta librería o es tu primera toma de contacto, tendrás la posibilidad de conocer a fondo como funciona mediante aplicaciones prácticas, ejercicios y autoevaluaciones.','In this course you will learn from scratch the most basic concepts of React to cover advanced knowledge. Whether you already know this library or it is your first contact, you will have the possibility to know in depth how it works through practical applications, exercises and self-assessments.\n','在本课程中，您将从头学习React的最基本概念，以涵盖高级知识。无论您是否已经知道这个图书馆，或者它是您的第一个联系人，您都可以通过实际应用，练习和自我评估深入了解它的工作原理。'),(2,'JavaScript','JavaScript','JavaScript','80€',1,'1569409135853-1200px-Unofficial_JavaScript_logo_2.svg.png','41.5325058307334','2.420128431708349','Curso completo, las horas y los dias lo decides tu. Este curso te hará comprender profundamente esta tecnología de programación, brindándote la base sólida que necesitas para entrar con paso firme a cualquier herramienta basada en JavaScript.','Full course, hours and days you decide. This course will make you deeply understand this programming technology, giving you the solid foundation you need to enter any JavaScript-based tool with firm step.','完整课程，您决定的时间和日期。本课程将使您深入理解这种编程技术，为您提供进入任何基于JavaScript的工具所需的坚实基础。'),(3,'Matemáticas','Maths','数学','Sin precio',1,'1568793824319-mates.jpg','41°28\'04.0\"N ','2°16\'30.0\"E','Somos el Instituto Público Thalassa. Damos clases para reforzar matemáticas de Bachillerato y para la ESO. Para más información contactanos.','We are the Thalassa Public Institute. We teach to reinforce high school mathematics and for ESO. For more information contact us.','我们是Thalassa公共研究所。我们教授加强高中数学和ESO。有关更多信息，请联系我们'),(4,'Clases de Bachillerato','High school lessons','高中班','15€/1:30h',1,'1568793856871-bachillerato.png','41°28\'31.1\"N','2°14\'58.7\"E','Doy clases de refuerzos para bachillerato, toco todas las asignaturas. Precio negociable, diponibilidad solo fines de semana.','I teach reinforcement for high school, I play all subjects. Price negotiable, available only on weekends.','我教高中加强，我发挥所有科目。价格面议，仅在周末提供。'),(5,'Clases de Guitarra','Guitarlessons','吉他课程','25€/1h',1,'1568793882147-guitarra.jpg','41°24\'10.7\"N','2°09\'22.8\"E','Empezaremos desde lo más básico hasta un nivel avanzado. Los horarios son flexibles.','We will start from the most basic to an advanced level. The schedules are flexible.','我们将从最基本到最高级别开始。时间表很灵活。'),(6,'Clases de canto','Singing lessons','唱歌课','10€/1h',1,'1568793899973-canto.jpg','41°24\'08.4\"N ','2°09\'16.1\"E','Somos un centro de música. El primer día es gratuito, te introduciré a poder cantar tus primeras notas, las siguientes clases se evaluarán. Horarios consultar en pagina web. ','We are a music center. The first day is free, I will introduce you to be able to sing your first notes, the following classes will be evaluated. Schedules consult on website.','我们是一个音乐中心。第一天是免费的，我将向您介绍能够唱出您的第一个音符，以下课程将进行评估。时间表在网站上咨询。'),(7,'Curso intensico .Net','.Net lessons','.Net课程','Gratuito',1,'1568794003369-Microsoft_.NET_logo.png','41°32\'00.6\"N','2°26\'27.0\"E','Ofrecemos formación como programador/a junior en tecnología .Net para la posterior inseción en el mercado laboral en el sector TIC.','We offer training as a junior programmer in .Net technology for the subsequent insertion in the labor market in the ICT sector','我们作为.Net技术的初级程序员提供培训，以便随后进入ICT行业的劳动力市场'),(23,'HTML y CSS','HTML and CSS','HTML和CSS','10€/h',1,'1568793976804-html1.png','41°26\'35.4\"N','2°09\'44.6\"E','Empezaremos con la estructura más básica, empleando el lenguaje HTML. Después, vamos a darle vida y color a nuestras páginas mediante CSS. Aprenderas a crear webs desde cero con HTML y CSS','We will start with the most basic structure, using the HTML language. Then, we will give life and color to our pages using CSS. You will learn to create websites from scratch with HTML and CSS','我们将从最基本的结构开始，使用HTML语言。然后，我们将使用CSS为我们的页面赋予生命和色彩。您将学习如何使用HTML和CSS从头开始创建网站');
/*!40000 ALTER TABLE `publicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `publicacionx`
--

DROP TABLE IF EXISTS `publicacionx`;
/*!50001 DROP VIEW IF EXISTS `publicacionx`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `publicacionx` AS SELECT 
 1 AS `idPublicacion`,
 1 AS `nombre_ES`,
 1 AS `nombre_EN`,
 1 AS `nombre_CH`,
 1 AS `precio`,
 1 AS `Usuario_idUsuario`,
 1 AS `file`,
 1 AS `ubicacion_latitud`,
 1 AS `ubicacion_longitud`,
 1 AS `Info_ES`,
 1 AS `Info_EN`,
 1 AS `Info_CH`,
 1 AS `numLikes`,
 1 AS `numComent`*/;
SET character_set_client = @saved_cs_client;

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
  `pwd` varchar(45) DEFAULT NULL,
  `tipo` int(1) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'hong',' h',' zhougg98@gmail.com','654324123','c/dajdsoad','jdiajod','dasdsa','dadsads','asdas','si',NULL,NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `publicacionx`
--

/*!50001 DROP VIEW IF EXISTS `publicacionx`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `publicacionx` AS select `p`.`idPublicacion` AS `idPublicacion`,`p`.`nombre_ES` AS `nombre_ES`,`p`.`nombre_EN` AS `nombre_EN`,`p`.`nombre_CH` AS `nombre_CH`,`p`.`precio` AS `precio`,`p`.`Usuario_idUsuario` AS `Usuario_idUsuario`,`p`.`file` AS `file`,`p`.`ubicacion_latitud` AS `ubicacion_latitud`,`p`.`ubicacion_longitud` AS `ubicacion_longitud`,`p`.`Info_ES` AS `Info_ES`,`p`.`Info_EN` AS `Info_EN`,`p`.`Info_CH` AS `Info_CH`,(select count(0) from `likes` where `likes`.`Publicacion_idPublicacion` = `p`.`idPublicacion`) AS `numLikes`,(select count(0) from `comentario` where `comentario`.`Publicacion_idPublicacion` = `p`.`idPublicacion`) AS `numComent` from `publicacion` `p` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-26 23:17:53
