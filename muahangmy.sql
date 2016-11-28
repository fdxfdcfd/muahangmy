/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50633
Source Host           : localhost:3306
Source Database       : muahangmy

Target Server Type    : MYSQL
Target Server Version : 50633
File Encoding         : 65001

Date: 2016-11-28 17:26:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cate_product
-- ----------------------------
DROP TABLE IF EXISTS `cate_product`;
CREATE TABLE `cate_product` (
  `id` int(5) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sex` int(1) NOT NULL,
  `detail` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of cate_product
-- ----------------------------
INSERT INTO `cate_product` VALUES ('1', 'Shirt Women', '1', 'Shirt Women', '1472925059004', '1472925059004', '1');
INSERT INTO `cate_product` VALUES ('2', 'Skirt Women', '1', 'Skirt Women', '1472925059004', '1472925059004', '1');
INSERT INTO `cate_product` VALUES ('3', 'Dress Women', '1', 'Dress Women', '1472925059004', '1472925059004', '1');
INSERT INTO `cate_product` VALUES ('4', 'Pants Women', '1', 'Pants Women', '1472925059004', '1472925059004', '1');
INSERT INTO `cate_product` VALUES ('5', 'Shoes Women', '1', 'Shoes Women', '1472925059004', '1472925059004', '1');
INSERT INTO `cate_product` VALUES ('6', 'Shirt Men', '0', 'Shirt Men', '1472925059004', '1472925059004', '1');
INSERT INTO `cate_product` VALUES ('7', 'T-Shirt Men', '0', 'T-Shirt Men', '1472925059004', '1472925059004', '1');
INSERT INTO `cate_product` VALUES ('8', 'Pants Men', '0', 'Pants Men', '1472925059004', '1472925059004', '1');
INSERT INTO `cate_product` VALUES ('9', 'Shoes Men', '0', 'Shoes Men', '1472925059004', '1472925059004', '1');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(5) NOT NULL,
  `content` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `product_id` int(5) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', 'Good Product 01', 'khachhang01@gmail.com', 'khachhang01', '1', '1472925059004', '1472925059004', '1');
INSERT INTO `comment` VALUES ('2', 'Good Product 02', 'khachhang02@gmail.com', 'khachhang02', '1', '1472925059004', '1472925059004', '1');
INSERT INTO `comment` VALUES ('3', 'Good Product 03', 'khachhang02@gmail.com', 'khachhang02', '1', '1472925059004', '1472925059004', '1');

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `id` int(5) NOT NULL,
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password_salt` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `sex` int(1) NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` bigint(15) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('1', 'khachhang01', '123456', '123456', 'khachhang01@gmail.co', '123 xyz, q1, tp HCM', '0901234567', 'A', 'Nguyen', '1', 'images/avatar.png', '1472925059004', '1472925059004', '1472925059004', '1');
INSERT INTO `customer` VALUES ('2', 'khachhang02', '123456', '123456', 'khachhang02@gmail.co', '123 xyz, q1, tp HCM', '0901234765', 'B', 'Nguyen', '1', 'images/avatar.png', '1472925059004', '1472925059004', '1472925059004', '1');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', '1', '1472925059004', '1472925059004', '1');
INSERT INTO `order` VALUES ('2', '2', '1472925059004', '1472925059004', '1');

-- ----------------------------
-- Table structure for order_detail
-- ----------------------------
DROP TABLE IF EXISTS `order_detail`;
CREATE TABLE `order_detail` (
  `id` int(5) NOT NULL,
  `order_id` int(5) NOT NULL,
  `product_id` int(5) NOT NULL,
  `quantity` int(5) NOT NULL,
  `price` int(5) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of order_detail
-- ----------------------------
INSERT INTO `order_detail` VALUES ('1', '1', '1', '1', '280', '1472925059004', '1472925059004', '1');
INSERT INTO `order_detail` VALUES ('2', '1', '2', '1', '280', '1472925059004', '1472925059004', '1');
INSERT INTO `order_detail` VALUES ('3', '2', '1', '1', '280', '1472925059004', '1472925059004', '1');

-- ----------------------------
-- Table structure for partner
-- ----------------------------
DROP TABLE IF EXISTS `partner`;
CREATE TABLE `partner` (
  `id` int(5) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `detail` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of partner
-- ----------------------------
INSERT INTO `partner` VALUES ('1', 'H&M', 'images/h&m.jpg', 'Hennes & Mauritz AB (H&M) là một công ty đa quốc gia bán lẻ quần áo của Thụy Điển, được biết đến với các sản phẩm thời trang dành cho mọi đối tượng từ đàn ông, phụ nữ, thanh thiếu niên đến trẻ em.', '1475539959004', '1475539959004', '1');
INSERT INTO `partner` VALUES ('2', 'Gucci', 'images/gucci.jpg', 'The House of Gucci là một biểu tượng thời trang sở hữu bởi Italia và Pháp, một nhãn hiệu đồ da nổi tiếng. Gucci được coi là một trong những nhãn hiệu thời trang nổi tiếng, danh giá và được thừa nhận b', '1475539959004', '1475539959004', '1');
INSERT INTO `partner` VALUES ('3', 'Zara', 'images/zara.jpg', 'Zara là thương hiệu bình dân nổi tiếng của Tây Ban Nha được thành lập năm 1975. Thế mạnh của Zara nằm ở tốc độ tung ra mẫu mã mới và chất liệu đẹp.', '1475539959004', '1475539959004', '1');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(5) NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `brief` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `detail` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `product_cate_id` int(5) NOT NULL,
  `partner_id` int(5) NOT NULL,
  `inventory` int(5) NOT NULL,
  `views` int(10) DEFAULT NULL,
  `reviews` text COLLATE utf8_unicode_ci NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `product_type` int(11) NOT NULL DEFAULT '0',
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', 'tivi', '500', 'images/feature-pic1.jpg', 'mô tả ngắn', 'mô tả dài', '1', '0', '1', '0', 'đây là review', '1479168000', '1479168000', '1', '1');
INSERT INTO `product` VALUES ('2', 'Loa', '500', 'images/feature-pic2.jpg', 'mô tả ngắn', 'mô tả dài', '1', '1', '1', '1', 'đây là review', '1479168000', '1479168000', '1', '1');
INSERT INTO `product` VALUES ('3', 'Máy ản', '500', 'images/feature-pic3.jpg', 'mô tả ngắn', 'mô tả dài', '1', '1', '1', '1', 'đây là review', '1479168000', '1479168000', '1', '1');
INSERT INTO `product` VALUES ('4', 'tivi2', '3000', 'images/feature-pic4.jpg', 'mô tả ngắn', 'mô tả dài', '1', '1', '1', '0', 'đây là review', '1479168000', '1479168000', '1', '1');
INSERT INTO `product` VALUES ('5', 'máy ảnh', '500', 'images/feature-pic1.jpg', 'mô tả ngắn', 'mô tả dài', '1', '0', '1', '0', 'đây là review', '1479168000', '1479168000', '2', '1');
INSERT INTO `product` VALUES ('6', 'Loaloa', '500', 'images/feature-pic2.jpg', 'mô tả ngắn', 'mô tả dài', '1', '1', '1', '1', 'đây là review', '1479168000', '1479168000', '2', '1');
INSERT INTO `product` VALUES ('7', 'tivi 3', '500', 'images/feature-pic3.jpg', 'mô tả ngắn', 'mô tả dài', '1', '1', '1', '1', 'đây là review', '1479168000', '1479168000', '2', '1');
INSERT INTO `product` VALUES ('8', 'loa loa 2', '3000', 'images/feature-pic4.jpg', 'mô tả ngắn', 'mô tả dài', '1', '1', '1', '0', 'đây là review', '1479168000', '1479168000', '2', '1');

-- ----------------------------
-- Table structure for slide_banner
-- ----------------------------
DROP TABLE IF EXISTS `slide_banner`;
CREATE TABLE `slide_banner` (
  `id` int(5) NOT NULL,
  `title` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `state` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of slide_banner
-- ----------------------------
INSERT INTO `slide_banner` VALUES ('1', 'Smart But Casual', 'Start your shopping here...', 'inactive', '1475539959004', '1475539959004', '1');
INSERT INTO `slide_banner` VALUES ('2', 'Shop Online', 'Start your shopping here...', 'right', '1475539959004', '1475539959004', '1');
INSERT INTO `slide_banner` VALUES ('3', 'Pack your Bag', 'Start your shopping here...', 'left', '1475539959004', '1475539959004', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(5) NOT NULL,
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password_salt` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `level` int(1) NOT NULL,
  `last_login` bigint(15) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'hanguyen', '123456', '123456', 'hanguyen@gmail.com', 'Ha', 'Nguyen', 'images/avatar.png', '1', '1476910059004', '1476910059004', '1476910059004', '1');
INSERT INTO `user` VALUES ('2', 'hienpham', '123456', '123456', 'hienpham@gmail.com', 'Hien', 'Pham', 'images/avatar.png', '1', '1476910059004', '1476910059004', '1476910059004', '1');
INSERT INTO `user` VALUES ('3', 'kieunguyen', '123456', '123456', 'kieunguyen@gmail.com', 'Kieu', 'Nguyen', 'images/avatar.png', '1', '1476910059004', '1476910059004', '1476910059004', '1');
SET FOREIGN_KEY_CHECKS=1;
