package entity

import "gorm.io/gorm"

type Seller struct {
	gorm.Model
	StudentID        string
	Major            string
	PictureStudentID string `gorm:"type:longtext"`

	MemberID uint       `gorm:"unique"`
	Products []Products `gorm:"foreignKey:SellerID"`

	YearsID uint
	Years Years `gorm:"foreignKey:YearsID"`

	InstituteOfID uint
	InstituteOf InstituteOf `gorm:"foreignKey:InstituteOfID"`
}
