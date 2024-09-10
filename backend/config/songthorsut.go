package config

import (
	"fmt"

	"Songthorsut/entity"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func ConnectionDB() {
	database, err := gorm.Open(sqlite.Open("songthorsut.db?cache=shared"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	fmt.Println("connected database")
	db = database
}

func SetupDatabase() {

	db.AutoMigrate(
		&entity.Member{},
		&entity.Products{},
		&entity.Seller{},
	)

	
	// hashedPassword, _ := HashPassword("12345678")
	mamber := &entity.Member{
		Model:       gorm.Model{},
		Username:    "Sirion",
		Password:    "123456789",
		Email:       "sirion@gmail.com",
		FirstName:   "Sirion",
		LastName:    "Srimueang",
		PhoneNumber: "0651234567",
		Address:     "77 Bannamkliang",
		PicProfile:  "",
		// Seller:      entity.Seller{},
	}
	db.FirstOrCreate(mamber, &entity.Member{
		Email: "sirion@gmail.com",
	})

}