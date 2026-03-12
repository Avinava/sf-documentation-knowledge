---
title: "SampleRequest"
domain: mfg-api-devguide
topic: samplerequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.245Z
estimatedTokens: 831
keywords: [SampleRequest, product, samples, including, customer, account, date, status, Calls]
---

# SampleRequest

> Represents a request for product samples, including customer account details,
      request date and status.

# SampleRequest

Represents a request for product samples, including customer account details, request date and status.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypetextPropertiesFilter, Group, idLookup, SortDescriptionName of the sample request. |
| Account | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe sample request to which the product is associated. |
| Contact | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe sample request to which the product is associated. |
| SalesRepresentative | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe sample request to which the product is associated. |
| Contact | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe sample request to which the product is associated. |
| Contact | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe sample request to which the product is associated. |
| Contact | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe sample request to which the product is associated. |
| SampleRequest | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe sample request to which the product is associated. |
| SampleItemReference | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the specific sample product which can be either a standard product or a custom product requirement. |
| Product | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the standard sample product requested in the sample request. |
| ProductRequirementSpecification | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique product specification required for the sample, if not a standard product. |
| ProductCategory | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe category of the sample product being requested. |
| Purpose | TypetextPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe reason for requesting this particular product or sample. |
| Quantity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe quantity of the product or sample requested. |
| UnitOfMeasure | TypestringPropertiesFilter, Group, SortDescriptionThe unit of measure for the requested sample. |
| BatchNumber | TypereferencePropertiesFilter, Group, SortDescriptionThe specific product batch associated with the requested sample product. |
| SalesPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sales price of the sample product. |
| CostPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe cost of the sample product. |
| AdditionalInfo | TypetextPropertiesFilter, Nillable, SortDescriptionThe additional details or special instructions for the sample product. |
| PriceBookEntry | TypereferencePropertiesFilter, Group, SortDescriptionThe price book entry defining the sample product's price. |
| CostBookEntry | TypereferencePropertiesFilter, Nillable, SortDescriptionThe cost book entry defining the sample product's cost. |
| ListPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionPrice of a product as specified in a price book. |
