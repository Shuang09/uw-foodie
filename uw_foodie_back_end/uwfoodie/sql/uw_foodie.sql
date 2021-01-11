/*
 Navicat Premium Data Transfer

 Source Server         : 腾讯云数据库
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : 122.51.64.134:3308
 Source Schema         : shopcomment

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 25/03/2020 09:23:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for COMMENT
-- ----------------------------
DROP TABLE IF EXISTS `COMMENT`;
CREATE TABLE `COMMENT`  (
  `commentId` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `outletID` int(11) NULL DEFAULT NULL,
  `comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `score` int(11) NULL DEFAULT 5,
  `like` int(11) NULL DEFAULT 1000,
  `createtime` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`commentId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of COMMENT
-- ----------------------------
INSERT INTO `COMMENT` VALUES (10, 'xt', 1, '的嘎嘎法国擦', 5, 1000, '2020-3-25 0:11:55');
INSERT INTO `COMMENT` VALUES (11, 'xt', 2, '发发达到发疯的', 5, 1000, '2020-3-25 0:12:06');
INSERT INTO `COMMENT` VALUES (12, 'xt', 2, '发的发发发', 5, 1000, '2020-3-25 0:12:11');
INSERT INTO `COMMENT` VALUES (13, 'xt', 1, '这家店很好', 5, 1000, '2020-3-25 9:06:25');
INSERT INTO `COMMENT` VALUES (14, 'xt', 3, '三号店很不错', 5, 1000, '2020-3-25 9:06:39');

-- ----------------------------
-- Table structure for USER
-- ----------------------------
DROP TABLE IF EXISTS `USER`;
CREATE TABLE `USER`  (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usertype` int(11) NULL DEFAULT NULL,
  `createtime` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`userId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of USER
-- ----------------------------
INSERT INTO `USER` VALUES (6, 'xt', '123123', NULL, NULL, 1, '2020-3-25 0:10:08');
INSERT INTO `USER` VALUES (7, 'admin1', 'admin', NULL, NULL, 0, '2020-3-25 9:07:32');

SET FOREIGN_KEY_CHECKS = 1;
