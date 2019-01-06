-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema trihund
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema trihund
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trihund` DEFAULT CHARACTER SET utf8 ;
USE `trihund` ;

-- -----------------------------------------------------
-- Table `trihund`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trihund`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `user_name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user_name_UNIQUE` (`user_name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trihund`.`files`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trihund`.`files` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `file_names` VARCHAR(100) NULL,
  `users_id` INT NOT NULL,
  `file_location` VARCHAR(100) NULL,
  `document_type` VARCHAR(45) NOT NULL,
  `document_data` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_files_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_files_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `trihund`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO `files` (`id`,`file_names`,`users_id`,`file_location`,`document_type`,`document_data`) VALUES (20,NULL,19,NULL,'Aadhar','{name:Anshuman Upadhyay, age:25, number:203546567741}');
INSERT INTO `files` (`id`,`file_names`,`users_id`,`file_location`,`document_type`,`document_data`) VALUES (21,NULL,19,NULL,'Driving License','{name:Anshuman Upadhyay, age:25, number:DL5678, vehicleType:LMV}');
INSERT INTO `files` (`id`,`file_names`,`users_id`,`file_location`,`document_type`,`document_data`) VALUES (22,NULL,27,NULL,'Driving License','{name:Anuj Sharma, age:25, number:DL7899, vehicleType:LMV}');
INSERT INTO `files` (`id`,`file_names`,`users_id`,`file_location`,`document_type`,`document_data`) VALUES (23,NULL,19,NULL,'Passport','{name:Anshuman Upadhyay, age:25, number:RFC456, validity:2018-12-05}');

INSERT INTO `users` (`id`,`first_name`,`last_name`,`user_name`,`password`) VALUES (19,'Anshuman','Upadhyay','anshup7','tarushi99');
INSERT INTO `users` (`id`,`first_name`,`last_name`,`user_name`,`password`) VALUES (27,'Anuj','Sharma','anuj9196','9196');

