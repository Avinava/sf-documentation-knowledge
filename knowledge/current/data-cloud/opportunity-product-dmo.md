---
title: "Opportunity Product DMO"
domain: data-cloud
topic: opportunity-product-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.342Z
estimatedTokens: 867
keywords: [Opportunity, Product, DMO, Data, Cloud, model, connecting, allowing, many-to-many, relationship, API, Category, Primary, Subject, Area]
---

# Opportunity Product DMO

> The Opportunity Product DMO is a Data Cloud data model object (DMO) for
      connecting an opportunity to the product that it represents, allowing for a many-to-many
      relationship.

# Opportunity Product DMO

The Opportunity Product DMO is a Data Cloud data model object (DMO) for connecting an opportunity to the product that it represents, allowing for a many-to-many relationship.

## Object API Name

ssot\_\_OpportunityProduct\_\_dlm

## Category

Other

## Primary Subject Area

Sales Product

## Primary Key

Opportunity Product ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Opportunity Product | Product | Many To One: N:1 | Bundle Product | Bundle Product Id |
| Opportunity Product | Product | Many To One: N:1 | Goods Product | Goods Product Id |
| Opportunity Product | Product | Many To One: N:1 | Master Product | Master Product Id |
| Opportunity Product | Product | Many To One: N:1 | Opportunity | Opportunity Id |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Close Date | ssot__CloseDate__c | The date when a record was closed. | dateTime |
| Created Date | ssot__CreatedDate__c | The date when a record was created. | dateTime |
| Currency | ssot__CurrencyId__c | A reference ID to the currency of the sales opportunity. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The description of an opportunity. | text |
| Discount Percentage | ssot__DiscountPercentage__c | The discount for a product as a percentage. | number |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified a record. | dateTime |
| List Price Amount | ssot__ListPriceAmount__c | The price of a product. | number |
| Name | ssot__Name__c | A short description of the opportunity’s product. | text |
| Opportunity | ssot__OpportunityId__c | A reference ID to a deal or sale that is in progress and isn’t yet completed. | text |
| Opportunity Product ID | ssot__Id__c | A unique ID used as primary key for the Opportunity Product DMO. | text |
| Pricebook Entry | ssot__PricebookEntryId__c | A reference ID to list of products and their prices. | text |
| Product | ssot__ProductId__c | A reference ID to what's intended to be sold, for example, goods or services. | text |
| Product Quantity | ssot__ProductQuantity__c | The number of product units in an opportunity. | number |
| Quote Product | ssot__QuoteProductId__c | A reference ID to item on a quote for prospective purchase of goods and services. | text |
| Service Date | ssot__ServiceDate__c | The planned date when the to-be purchased product is in service. | dateTime |
| Subtotal Amount | ssot__SubtotalAmount__c |  | number |
| Total Price Amount | ssot__TotalPriceAmount__c | The sum of all the product amounts for the opportunity’s product. | number |
