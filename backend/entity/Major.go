package entity

import "gorm.io/gorm"

type Major struct {
	gorm.Model
	Name string

	Seller []Seller `gorm:"foreignKey:YearID"`
	Member []Member `gorm:"foreignKey:YearID"`
}