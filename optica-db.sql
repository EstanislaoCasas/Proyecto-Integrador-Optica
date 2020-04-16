-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: optica_db
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.10.1

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
-- Table structure for table `category`
--

DROP DATABASE IF EXISTS optica_db;
CREATE DATABASE optica_db;
USE optica_db;


DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Lentes de sol'),(2,'Armazones de receta'),(3,'Lentes de contacto');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorys`
--

DROP TABLE IF EXISTS `categorys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorys` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorys`
--

LOCK TABLES `categorys` WRITE;
/*!40000 ALTER TABLE `categorys` DISABLE KEYS */;
INSERT INTO `categorys` VALUES (1,'Lentes de sol'),(2,'Armazones de receta'),(3,'Lentes de contacto');
/*!40000 ALTER TABLE `categorys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marca` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'Ray Ban');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marcas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'Ray Ban'),(2,'Generico');
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `status` int(10) unsigned NOT NULL DEFAULT '0',
  `f_entrega` int(10) unsigned NOT NULL DEFAULT '0',
  `f_pago` int(10) unsigned NOT NULL DEFAULT '0',
  `c_items` int(10) unsigned NOT NULL DEFAULT '0',
  `precio_total` int(10) unsigned NOT NULL DEFAULT '0',
  `id_user` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,NULL,0,0,0,3,7768,6),(2,NULL,0,0,0,2,19193,6),(3,NULL,0,1,0,2,47592,7),(4,NULL,0,0,0,2,12649,10);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos_productos`
--

DROP TABLE IF EXISTS `pedidos_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos_productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `product_id` int(10) unsigned NOT NULL DEFAULT '0',
  `cantidad` int(10) unsigned NOT NULL DEFAULT '0',
  `pedido_id` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos_productos`
--

LOCK TABLES `pedidos_productos` WRITE;
/*!40000 ALTER TABLE `pedidos_productos` DISABLE KEYS */;
INSERT INTO `pedidos_productos` VALUES (1,NULL,4,1,1),(2,NULL,5,1,1),(3,NULL,6,1,1),(4,NULL,6,1,2),(5,NULL,5,6,2),(6,NULL,7,18,3),(7,NULL,4,3,3),(8,NULL,4,5,4),(9,NULL,7,1,4);
/*!40000 ALTER TABLE `pedidos_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(999) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `price` int(10) DEFAULT NULL,
  `img1` varchar(999) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `img2` varchar(999) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `img3` varchar(999) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `marca_id` int(10) unsigned NOT NULL DEFAULT '0',
  `category_id` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `products_category_id_foreign` (`category_id`),
  KEY `products_marca_id_foreign` (`marca_id`),
  CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categorys` (`id`),
  CONSTRAINT `products_marca_id_foreign` FOREIGN KEY (`marca_id`) REFERENCES `marcas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (4,NULL,' Anteojos Solaris 093075 C08 Polarizado ','Código de producto: 302296 Género: Unisex Color: Negro Color del Lente: Gris Material: Acetato  Estilo: Redondo Degrade Polarizado Medida del Lente: 50 mm Distancia entre Lente: 19 mm',2070,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/093075_C08_1060x1060.png','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/093075_C08_1_1094x1094.png','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/093075_C08_1_1094x1094.png',1,1),(5,NULL,' Anteojos Superdry MONTEGO/109 ','Código de producto: 302514 Género: Unisex Color: Marrón Color del Lente: Azul Estilo: Cuadrado',2699,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5e4d508b553fd_superdry-sds-montego-109_1024x533.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5e4d508b553fd_superdry-sds-montego-109_1024x533.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5e4d508b553fd_superdry-sds-montego-109_1024x533.jpg',1,1),(6,NULL,' Anteojos Vulk SEMON/MBLK SG58 Espejado ','Código de producto: 303739 Género: Hombre. Color: Negro. Color lentes: Az',2999,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5d97aee50fd6b_303739_1_900x442.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5d97aee50fd6b_303739_1_900x442.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5d97aee50fd6b_303739_1_900x442.jpg',1,1),(7,NULL,'Lentes de contacto Freshlook color blends formulados ','Lentes de contacto Acuvue Oasys para astigmatismo',2299,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5d4ae93cc2086_freshlook-2x1_589db591-768c-4217-a2dc-eedfeae4c255_2000x2000.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5d4ae93cc2086_freshlook-2x1_589db591-768c-4217-a2dc-eedfeae4c255_2000x2000.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5d4ae93cc2086_freshlook-2x1_589db591-768c-4217-a2dc-eedfeae4c255_2000x2000.jpg',1,3),(8,NULL,'Lentes de contacto Acuvue Oasys para astigmatismo ','Lentes de contacto Acuvue Oasys para astigmatismo  ',3299,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5c829d60e011f_acuve-oasys-astigmatism_695x695.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5c829d60e011f_acuve-oasys-astigmatism_695x695.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5c829d60e011f_acuve-oasys-astigmatism_695x695.jpg',1,3),(9,NULL,' Anteojos Rusty TV Show MBLK S10 ','Código de producto: 140295 Género: Hombre Color: MBLK S10 Negro Mate Color del Lente: Gris Material: Acetato Plástico Estilo: Sport  Medida del Lente 62 mm Distancia entre Lente 16 mm',2499,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/rusty-solaris-tvshow-mblk-s10-2_1_1008x1008.png','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/140295_2000x2000.png','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/rusty-solaris-tvshow-mblk-s10-3_2000x2000.png',2,1),(10,NULL,' Anteojos Rusty ANDNOW Mblk-S10 Polarizado ','Código de producto: 190331 Género: Hombre Color:Negro Color del Lente: Gris Material: Acetato Estilo: Envolvente Polarizado Medida del Lente: 42mm Distancia entre Lente: 17mm',2499,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5e2610c734888_and-now-mblk-s10_1_667x442.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5e2610c734888_and-now-mblk-s10_1_667x442.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5e2610c734888_and-now-mblk-s10_1_667x442.jpg',2,1),(11,NULL,' Anteojos Seen RCIM02 BB ','Código de producto: 302192 Género: Unisex Color: Negro  Color del Lente: Negro  Material: Acetato ',1599,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/Screenshot_1_1_86021d92-7de8-4050-a904-8b98416462ba_571x261.png','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/Screenshot_1_1_86021d92-7de8-4050-a904-8b98416462ba_571x261.png','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/Screenshot_1_1_86021d92-7de8-4050-a904-8b98416462ba_571x261.png',2,1),(12,NULL,' Anteojos Ray Ban 3025/9001A5 ','Código de producto: 302532 Género: Unisex Color lente: Marrón Diseño del Lente: Degrade Color del armazón: Dorado',7279,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/rban3025_5435fc49-e749-473e-9284-bba899d82fee_594x385.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/rban30252_1000x550.png','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/rban30253_638x423.jpg',1,1),(13,NULL,' Anteojos Ray Ban 3025/0024W ','Código de producto: 205984 Género: Unisex Color armazon: Negro Color lente: Rojo Material del armazón: Metal',5999,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5e4d6c6ab6a3d_gafas-rayban-aviator-large-rb3025-0024w-58-negro_850x850.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5e4d6c72dfa2b_gafas-rayban-aviator-large-rb3025-0024w-58-negro-1_850x850.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5e4d6c72dfa2b_gafas-rayban-aviator-large-rb3025-0024w-58-negro-1_850x850.jpg',1,1),(14,NULL,' Anteojos Mormaii Condor 05 ','Código de producto: 301666 Género: Hombre Color: Negro Color del Lente: Marrón Material: Acetato Plástico Estilo: Sport Envolvente ',4299,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5bc2bec249874_mormaii-solaris-condor-05-2_2000x2000.png','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5bc2bee89d70f_mormaii-solaris-condor-05_1024x1024.png','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5bc2bf18a0ec6_mormaii-solaris-condor-05-3_695x695.png',2,1),(15,NULL,'Anteojos Vulk 808 C2 ','Código de producto: 302103 Género: Unisex Color:Metal Color del Lente: Gris oscuro Material: Metal Estilo: Redondo Medida del Lente: 52mm Distancia entre Lente: 17mm',3119,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5cd648815b4a1_302103_1_753x753.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5cd6488821e8c_302103-2_1_1_2000x2000.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5cd6488821e8c_302103-2_1_1_2000x2000.jpg',2,1),(16,NULL,'Anteojos Solaris 51509 C5 ','Código de producto: 301628 Género: Unisex Color: Negro Verde Color del Lente: Verde Material: Acetato Plástico Estilo: Cuadrado ',2079,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/5dc054572716b_solaris-solaris-51509-c4-2_1_701x701.png','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/51509_C5_1_956x956.png','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/51509_C5_2_2000x2000.png',2,1),(17,NULL,' Anteojos Ray Ban 3025 L2823 ','Código de producto: 152270 Género: Unisex Color del Armazón: Negro Color y Tipo del Lente: Verde Uniforme Material: Metal Estilo: Aviador Medida del Lente: 55-14-135 mm',8799,'https://cdn.shopify.com/s/files/1/0231/8811/1438/products/anteojos-de-sol-ray-ban-aviator-classic-rb-3025-l2823-D_NQ_NP_823369-MLA32606032867_102019-F_867x422.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/anteojos-de-sol-ray-ban-aviator-classic-rb-3025-l2823-D_NQ_NP_823369-MLA32606032867_102019-F_867x422.jpg','https://cdn.shopify.com/s/files/1/0231/8811/1438/products/anteojos-de-sol-ray-ban-aviator-classic-rb-3025-l2823-D_NQ_NP_823369-MLA32606032867_102019-F_867x422.jpg',1,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `name` varchar(65) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(65) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(65) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(120) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `category` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'pompon3','pompon2','alejandro@pompon.com.ar','$2b$10$taUXKoZcD8tG0w.FGOrVWOfkV2hkqI4JFxJkfoQlsEpK89sb255Ty','default',2),(2,NULL,'ezequiel','romero','eze@mfti.comar','$2b$10$oB1THwdb1fDxwZF5JCPdeexrswotO30W9hr7YEiqDikwst3oYsaJO','avatar-1585527708397.jpg',1),(3,NULL,'test1','test1','test@test1.com','$2b$10$KvJP7npKVHtaCVYm4t6lc.tnT2DBe967QNb7LpmhXNOBgLL8wdOZC','default',1),(4,NULL,'Estanislao Martin','Casas','estanicasas@gmail.com','$2b$10$X9ppc1gzpk0YYaGNpfVK0.cM6ydRKWAMUOzbgVjFMmMr0yt4c1EBW','default.jpg',2),(5,NULL,'Claudio','Paccor','claupacco@yahoo.com.ar','$2b$10$wD56BrsTR0lsIlWj0.I5..mnfRwxs.jrehGTv4ro.dy7kH.6rBixS','default.jpg',2),(6,NULL,'admin','admin','admin@admin.com.ar','$2b$10$bJttXyJZbxKZxsgsrzVy.OxlldJsnCo/VcJtUUTH3xGgoonseqOgq','default.jpg',2),(7,NULL,'Estanislao','Casas','estanislaocasas@hotmail.com','$2b$10$9gL3iQ0OcXDmjrdHOBJSJuQr3G8TIuT5EIKaMSUo1fw/fSNdvR6E.','avatar-1585853222623.jpg',1),(8,NULL,'test2','test3','test@testee.com','$2b$10$a8yXT9E7AM5luTLDyCOEwuxbdTapgaLv/f.yPyrB0MS72z25Qtrgm','avatar-1585852997769.png',1),(9,NULL,'test3','test3','alejandro@mfti.com.ar','$2b$10$EuWvbOz4OCpn.6y5ojcYge3KDvUnDEA5nAa4PBr8DXAxWtWb0DE.i','avatar-1585853160658.png',1),(10,NULL,'estanislao','casas','estanislao@gmail.com','$2b$10$gYoRNXiKY.933MCm4S8hRugU3u1Qk4BMkLxhF7mCrB42TRf/hpckK','default.jpg',1),(11,NULL,'test@test.test','test@test.test','test@test.test','$2b$10$sEoPEoh6p2phN1R1yp7tau1VlRgu6PUvttPB2d4PPIUla2VPdISOi','default.jpg',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-15 20:59:13
