CREATE DATABASE  IF NOT EXISTS `academia` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `academia`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: academia
-- ------------------------------------------------------
-- Server version	5.7.21-log

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
  PRIMARY KEY (`idComentario`),
  KEY `fk_Comentario_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_Comentario_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (1,'Muy buena publicacion',NULL,1),(2,'this.state.comentario',NULL,1),(3,'dasd',NULL,1),(4,'hola',NULL,1),(5,'hola',NULL,1),(6,'asdassad',NULL,1),(7,'asdsa',NULL,1),(8,'asdasadssadd',NULL,1),(9,'comentario9',NULL,1),(10,'hola',NULL,4),(11,'hhh',NULL,1),(12,'gg',NULL,4),(13,'dsdf',NULL,4),(14,'asd',NULL,1),(15,'15',NULL,1),(16,'dasdas',NULL,4),(17,'ddd',NULL,1),(18,'ffdsd',NULL,1),(19,'f',NULL,1),(20,'hdoashds',NULL,6),(21,'sadas',NULL,1),(22,'segundo comentario',NULL,2),(23,'',NULL,2),(24,'hh',NULL,2),(25,'hh',NULL,2),(26,'hh',NULL,2),(27,'zz',NULL,1),(28,'soy hong',NULL,1),(29,'asdas',NULL,16),(30,'dsada',NULL,16),(31,'dsd',NULL,16),(32,'s',NULL,16),(33,'d',NULL,16),(34,'hector',NULL,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (1,NULL,1),(2,NULL,1),(3,NULL,1),(4,NULL,1),(5,NULL,1),(6,NULL,1),(7,NULL,1),(8,NULL,1),(9,NULL,1),(10,NULL,1),(11,NULL,1),(12,NULL,1),(13,NULL,1),(14,NULL,1),(15,NULL,1),(16,NULL,4),(17,NULL,1),(18,NULL,1),(19,NULL,1),(20,NULL,1),(21,NULL,1),(22,NULL,1),(23,NULL,1),(24,NULL,1),(25,NULL,1),(26,NULL,1),(27,NULL,1),(28,NULL,1),(29,NULL,16),(30,NULL,16),(31,NULL,16),(32,NULL,16),(33,NULL,16),(34,NULL,16),(35,NULL,16),(36,NULL,16),(37,NULL,16),(38,NULL,16),(39,NULL,16),(40,NULL,16),(41,NULL,16),(42,NULL,16),(43,NULL,16),(44,NULL,16),(45,NULL,16),(46,NULL,16),(47,NULL,16),(48,NULL,16),(49,NULL,16),(50,NULL,16),(51,NULL,16),(52,NULL,16),(53,NULL,16),(54,NULL,16),(55,NULL,16),(56,NULL,16),(57,NULL,16),(58,NULL,16),(59,NULL,16),(60,NULL,16),(61,NULL,16),(62,NULL,16),(63,NULL,16),(64,NULL,16),(65,NULL,16),(66,NULL,16),(67,NULL,16),(68,NULL,16),(69,NULL,16),(70,NULL,16),(71,NULL,16),(72,NULL,16),(73,NULL,16),(74,NULL,16),(75,NULL,16),(76,NULL,16),(77,NULL,16),(78,NULL,1),(79,NULL,1),(80,NULL,1),(81,NULL,1);
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
  `file` text,
  `ubicacion_latitud` text,
  `ubicacion_longitud` text,
  `Info_ES` text,
  `Info_EN` text,
  `Info_CH` text,
  PRIMARY KEY (`idPublicacion`),
  KEY `fk_Publicacion_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_Publicacion_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion`
--

LOCK TABLES `publicacion` WRITE;
/*!40000 ALTER TABLE `publicacion` DISABLE KEYS */;
INSERT INTO `publicacion` VALUES (1,'React JS','React JS','React JS','20€/h',1,'1568793780098-reactjs.png','0','0','En este curso aprenderás desde cero los conceptos más básicos de React hasta llegar a cubrir conocimientos avanzados. Tanto si ya conoces esta librería o es tu primera toma de contacto, tendrás la posibilidad de conocer a fondo como funciona mediante aplicaciones prácticas, ejercicios y autoevaluaciones.','In this course you will learn from scratch the most basic concepts of React to cover advanced knowledge. Whether you already know this library or it is your first contact, you will have the possibility to know in depth how it works through practical applications, exercises and self-assessments.\n','在本课程中，您将从头学习React的最基本概念，以涵盖高级知识。无论您是否已经知道这个图书馆，或者它是您的第一个联系人，您都可以通过实际应用，练习和自我评估深入了解它的工作原理。'),(2,'JavaScript','JavaScript','JavaScript','80€',1,'1568793800993-js.jpg','41°26\'26.4\"N','2°14\'42.9\"E','Curso completo, las horas y los dias lo decides tu. Este curso te hará comprender profundamente esta tecnología de programación, brindándote la base sólida que necesitas para entrar con paso firme a cualquier herramienta basada en JavaScript.','Full course, hours and days you decide. This course will make you deeply understand this programming technology, giving you the solid foundation you need to enter any JavaScript-based tool with firm step.','完整课程，您决定的时间和日期。本课程将使您深入理解这种编程技术，为您提供进入任何基于JavaScript的工具所需的坚实基础。'),(3,'Matemáticas','Maths','数学','Sin precio',1,'1568793824319-mates.jpg','41°28\'04.0\"N ','2°16\'30.0\"E','Somos el Instituto Público Thalassa. Damos clases para reforzar matemáticas de Bachillerato y para la ESO. Para más información contactanos.','We are the Thalassa Public Institute. We teach to reinforce high school mathematics and for ESO. For more information contact us.','我们是Thalassa公共研究所。我们教授加强高中数学和ESO。有关更多信息，请联系我们'),(4,'Clases de Bachillerato','High school lessons','高中班','15€/1:30h',1,'1568793856871-bachillerato.png','41°28\'31.1\"N','2°14\'58.7\"E','Doy clases de refuerzos para bachillerato, toco todas las asignaturas. Precio negociable, diponibilidad solo fines de semana.','I teach reinforcement for high school, I play all subjects. Price negotiable, available only on weekends.','我教高中加强，我发挥所有科目。价格面议，仅在周末提供。'),(5,'Clases de Guitarra','Guitarlessons','吉他课程','25€/1h',1,'1568793882147-guitarra.jpg','41°24\'10.7\"N','2°09\'22.8\"E','Empezaremos desde lo más básico hasta un nivel avanzado. Los horarios son flexibles.','We will start from the most basic to an advanced level. The schedules are flexible.','我们将从最基本到最高级别开始。时间表很灵活。'),(6,'Clases de canto','Singing lessons','唱歌课','10€/1h',1,'1568793899973-canto.jpg','41°24\'08.4\"N ','2°09\'16.1\"E','Somos un centro de música. El primer día es gratuito, te introduciré a poder cantar tus primeras notas, las siguientes clases se evaluarán. Horarios consultar en pagina web. ','We are a music center. The first day is free, I will introduce you to be able to sing your first notes, the following classes will be evaluated. Schedules consult on website.','我们是一个音乐中心。第一天是免费的，我将向您介绍能够唱出您的第一个音符，以下课程将进行评估。时间表在网站上咨询。'),(7,'Curso intensico .Net','.Net lessons','.Net课程','Gratuito',1,'1568794003369-Microsoft_.NET_logo.png','41°32\'00.6\"N','2°26\'27.0\"E','Ofrecemos formación como programador/a junior en tecnología .Net para la posterior inseción en el mercado laboral en el sector TIC.','We offer training as a junior programmer in .Net technology for the subsequent insertion in the labor market in the ICT sector','我们作为.Net技术的初级程序员提供培训，以便随后进入ICT行业的劳动力市场'),(23,'HTML y CSS','HTML and CSS','HTML和CSS','10€/h',1,'1568793976804-html1.png','41°26\'35.4\"N','2°09\'44.6\"E','Empezaremos con la estructura más básica, empleando el lenguaje HTML. Después, vamos a darle vida y color a nuestras páginas mediante CSS. Aprenderas a crear webs desde cero con HTML y CSS','We will start with the most basic structure, using the HTML language. Then, we will give life and color to our pages using CSS. You will learn to create websites from scratch with HTML and CSS','我们将从最基本的结构开始，使用HTML语言。然后，我们将使用CSS为我们的页面赋予生命和色彩。您将学习如何使用HTML和CSS从头开始创建网站');
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-18 12:10:18
