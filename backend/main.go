package main

import (
	"Songthorsut/config"
	"Songthorsut/controller"
	"net/http"

	"github.com/gin-gonic/gin"
)

const PORT = "8000"

func main() {
	config.ConnectionDB()
	config.SetupDatabase()

	r := gin.Default()
	r.Use(CORSMiddleware())
	router := r.Group("")
	{
		router.GET("/member/:id", controller.GetMember)
		router.GET("/member", controller.ListMember)
		router.POST("/member", controller.CreateMember)
		router.PATCH("/member/:id", controller.UpdateMember)
		router.DELETE("/member/:id", controller.DeleteMember)

		router.GET("/seller/:id", controller.GetSeller)
		router.POST("/seller", controller.CreateSeller)
		router.PATCH("/seller/:id", controller.UpdateSeller)
		router.DELETE("/seller/:id", controller.DeleteSeller)

		router.GET("/products/:id", controller.GetProduct)
		router.GET("/products", controller.ListProducts)
		router.POST("/products", controller.CreateProduct)
		router.PATCH("/products/:id", controller.UpdateProduct)
		router.DELETE("/products/:id", controller.DeleteProduct)
	}

	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "API RUNNING... PORT: %s", PORT)
	})
	r.Run("localhost:" + PORT)
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
