package tools

import "graphql-workshop/graph/model"

var CompaniesData = []*model.Company{
	{
		ID:                "1",
		Name:              "LINE BANK",
		StockPrice:        180.24,
		OutstandingShares: 16069000000,
		Founded:           1975,
		Headquarters:      "New York, NY",
		Industry:          "Technology",
		Employees: []*model.Employee{
			{ID: "1", Name: "Riva", Updated: false},
		},
	},
	{
		ID:                "2",
		Name:              "HTC",
		StockPrice:        288.49,
		OutstandingShares: 7524000000,
		Employees: []*model.Employee{
			{ID: "1", Name: "Claire", Updated: false},
			{ID: "2", Name: "AFU", Updated: false},
			{ID: "3", Name: "KK", Updated: false},
		},
		Founded:      1988,
		Headquarters: "San Francisco, CA",
		Industry:     "Retail",
	},
	{
		ID:                "3",
		Name:              "AppWorks School",
		StockPrice:        3367.24,
		OutstandingShares: 503000000,
		Employees: []*model.Employee{
			{ID: "1", Name: "Tzu Hua", Updated: false},
		},
		Founded:      1962,
		Headquarters: "Los Angeles, CA",
		Industry:     "Manufacturing",
	},
	{
		ID:                "4",
		Name:              "MEXC",
		StockPrice:        2293.37,
		OutstandingShares: 611000000,
		Employees: []*model.Employee{
			{ID: "1", Name: "Evan", Updated: false},
		},
		Founded:      1939,
		Headquarters: "Gotham City",
		Industry:     "Conglomerate",
	},
	{
		ID:                "5",
		Name:              "Winbond Electronics Crop.",
		StockPrice:        1011.35,
		OutstandingShares: 973000000,
		Employees: []*model.Employee{
			{ID: "1", Name: "Mika", Updated: false},
		},
		Founded:      2002,
		Headquarters: "Boston, MA",
		Industry:     "Science & Technology",
	},
	{
		ID:                "6",
		Name:              "Galaxy Software Services",
		StockPrice:        229.97,
		OutstandingShares: 2496000000,
		Employees: []*model.Employee{
			{ID: "1", Name: "Luka", Updated: false},
		},
		Founded:      1964,
		Headquarters: "Buckinghamshire, England",
		Industry:     "Food & Beverage",
	},
}
