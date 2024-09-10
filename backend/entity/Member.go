package entity

import (
	"gorm.io/gorm"
)

type Member struct {
	gorm.Model
	Username    string
	Password    string
	Email       string
	FirstName   string
	LastName    string
	PhoneNumber string
	Address     string
	PicProfile  string `gorm:"type:longtext"`

	// SellerID uint
	Seller Seller `gorm:"foreignKey:MemberID"`
}

// 
