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
		&entity.Years{},
		&entity.InstituteOf{},
		&entity.Major{},
	)

	FirstYear := entity.Years{Name: "1"}
	SecondYear := entity.Years{Name: "2"}
	ThirdYear := entity.Years{Name: "3"}
	FourthYear := entity.Years{Name: "4"}

	InstituteOfA := entity.InstituteOf{NameInstituteOf: "สำนักวิชาวิทยาศาสตร์"}
	InstituteOfB := entity.InstituteOf{NameInstituteOf: "สำนักวิชาเทคโนโลยีสังคม"}
	InstituteOfC := entity.InstituteOf{NameInstituteOf: "สำนักวิชาเทคโนโลยีการเกษตร"}
	InstituteOfD := entity.InstituteOf{NameInstituteOf: "สำนักวิชาวิศวกรรมศาสตร์"}
	InstituteOfE := entity.InstituteOf{NameInstituteOf: "สำนักวิชาแพทยศาสตร์"}
	InstituteOfF := entity.InstituteOf{NameInstituteOf: "สำนักวิชาพยาบาลศาสตร์"}
	InstituteOfG := entity.InstituteOf{NameInstituteOf: "สำนักวิชาทันตแพทยศาสตร์"}
	InstituteOfH := entity.InstituteOf{NameInstituteOf: "สำนักวิชาสาธารณสุขศาสตร์"}
	InstituteOfI := entity.InstituteOf{NameInstituteOf: "สำนักวิชาศาสตร์และศิลป์ดิจิทัล"}


	db.FirstOrCreate(&FirstYear, &entity.Years{Name: "1"})
	db.FirstOrCreate(&SecondYear, &entity.Years{Name: "2"})
	db.FirstOrCreate(&ThirdYear, &entity.Years{Name: "3"})
	db.FirstOrCreate(&FourthYear, &entity.Years{Name: "4"})
	
	db.FirstOrCreate(&InstituteOfA, &entity.InstituteOf{NameInstituteOf: "สำนักวิชาวิทยาศาสตร์"})
	db.FirstOrCreate(&InstituteOfB, &entity.InstituteOf{NameInstituteOf: "สำนักวิชาเทคโนโลยีสังคม"})
	db.FirstOrCreate(&InstituteOfC, &entity.InstituteOf{NameInstituteOf: "สำนักวิชาเทคโนโลยีการเกษตร"})
	db.FirstOrCreate(&InstituteOfD, &entity.InstituteOf{NameInstituteOf: "สำนักวิชาวิศวกรรมศาสตร์"})
	db.FirstOrCreate(&InstituteOfE, &entity.InstituteOf{NameInstituteOf: "สำนักวิชาแพทยศาสตร์"})
	db.FirstOrCreate(&InstituteOfF, &entity.InstituteOf{NameInstituteOf: "สำนักวิชาพยาบาลศาสตร์"})
	db.FirstOrCreate(&InstituteOfG, &entity.InstituteOf{NameInstituteOf: "สำนักวิชาทันตแพทยศาสตร์"})
	db.FirstOrCreate(&InstituteOfH, &entity.InstituteOf{NameInstituteOf: "สำนักวิชาสาธารณสุขศาสตร์"})
	db.FirstOrCreate(&InstituteOfI, &entity.InstituteOf{NameInstituteOf: "สำนักวิชาศาสตร์และศิลป์ดิจิทัล"})


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