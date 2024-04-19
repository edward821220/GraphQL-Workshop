package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.45

import (
	"context"
	"fmt"
	"graphql-workshop/graph/model"
	"graphql-workshop/tools"
)

// UpdateEmployee is the resolver for the updateEmployee field.
func (r *mutationResolver) UpdateEmployee(ctx context.Context, companyID string, employeeID string) (*model.Employee, error) {
	fmt.Println("hi")
	panic(fmt.Errorf("not implemented: UpdateEmployee - updateEmployee"))
}

// Companies is the resolver for the companies field.
func (r *queryResolver) Companies(ctx context.Context) ([]*model.Company, error) {
	return tools.CompaniesData, nil
}

// Company is the resolver for the company field.
func (r *queryResolver) Company(ctx context.Context, id string) (*model.Company, error) {
	panic(fmt.Errorf("not implemented: Company - company"))
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }