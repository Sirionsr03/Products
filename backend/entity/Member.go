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

	YearsID uint
	Years Years `gorm:"foreignKey:YearsID"`

	InstituteOfID uint
	InstituteOf InstituteOf `gorm:"foreignKey:InstituteOfID"`

}

// 
