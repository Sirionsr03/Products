package controller

import (
	"Songthorsut/config"
	"Songthorsut/entity"
	"net/http"
	"github.com/gin-gonic/gin"
)

// GET /genders
func ListMajor(c *gin.Context) {
	var major []entity.Years

	db := config.DB()

	db.Find(&major)

	c.JSON(http.StatusOK, &major)
}