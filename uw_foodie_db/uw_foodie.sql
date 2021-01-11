drop database if EXISTS uw_foodie;
create uw_foodie;

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
INSERT INTO `COMMENT` VALUES (10, 'yan', 1, 'jhjkhkhk', 5, 1000, '2020-3-25 0:11:55');
INSERT INTO `COMMENT` VALUES (11, 'yan', 2, 'jhkggsdhavd', 5, 1000, '2020-3-25 0:12:06');
INSERT INTO `COMMENT` VALUES (12, 'yan', 2, 'nioce', 5, 1000, '2020-3-25 0:12:11');
INSERT INTO `COMMENT` VALUES (13, 'yan', 1, 'yummy', 5, 1000, '2020-3-25 9:06:25');
INSERT INTO `COMMENT` VALUES (14, 'yan', 3, 'good', 5, 1000, '2020-3-25 9:06:39');

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
INSERT INTO `USER` VALUES (6, 'yan', '123123', NULL, NULL, 1, '2020-3-25 0:10:08');
INSERT INTO `USER` VALUES (7, 'admin1', 'admin', NULL, NULL, 0, '2020-3-25 9:07:32');

SET FOREIGN_KEY_CHECKS = 1;
