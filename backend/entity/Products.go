package entity

import (
	"gorm.io/gorm"
)

type Products struct {
	gorm.Model
	Title           string
	Description     string
	Price           float32
	Category        string
	PictureProduct string `gorm:"type:longtext"`
	Condition       string
	Weight          float32
	Status          string

	SellerID uint
	Seller   Seller `gorm:"foreignKey:SellerID"`
}
