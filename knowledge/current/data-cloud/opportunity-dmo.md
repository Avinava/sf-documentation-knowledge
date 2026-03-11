---
title: "Opportunity DMO"
domain: data-cloud
topic: opportunity-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:43.796Z
keywords: [Opportunity, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Opportunity DMO

# Opportunity DMO

The Opportunity DMO is a Data Cloud data model object (DMO) for deals or sales that are in progress and not yet completed.

## Object API Name

ssot\_\_Opportunity\_\_dlm

## Category

Other

## Primary Subject Area

Sales Order

## Primary Key

Opportunity ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Engagement Topic | Campaign | Many To One: N:1 | Opportunity | Opportunity Id |
| Lead | Converted To Opportunity | Many To One: N:1 | Opportunity | Opportunity Id |
| Opportunity | CustomerAccount | Many To One: N:1 | Account | Account Id |
| Opportunity | Partner Account | Many To One: N:1 | Account | Account Id |
| Opportunity | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type Id |
| Opportunity | Lead | Many To One: N:1 | Lead | Lead Id |
| Opportunity Product | Opportunity | Many To One: N:1 | Opportunity | Opportunity Id |
| Sales Order | Opportunity | Many To One: N:1 | Opportunity | Opportunity Id |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Close Date | ssot__CloseDate__c | The date when the opportunity was closed. | dateTime |
| Contract | ssot__ContractId__c | A reference ID to contract associated with order. | text |
| Created Date | ssot__CreatedDate__c | The date a record was created. | dateTime |
| Currency | ssot__CurrencyId__c | A reference ID to the currency of the sales opportunity. | text |
| Customer Account | ssot__CustomerAccountId__c | A reference ID to business or person that is prospective buyer of opportunity's product or service. | text |
| Data Source | ssot__DataSourceId__c | A reference ID to logical name for system that is source of records identified by External Record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to logical name of object where record originated, for example a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | A description of the opportunity. | text |
| Engagement Channel | ssot__EngagementChannelId__c | A reference ID to the business or company that serves as a provider for engagement channel type. | text |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID to method of message delivery, for example email, phone call, SMS message, or TV commercial. | text |
| Expected Revenue Amount | ssot__ExpectedRevenueAmount__c | The calculated revenue based on amount and probability fields. | number |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| Is Private | ssot__IsPrivate__c | An indicator if an opportunity can be shared with someone outside the opportunity team. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Lead | ssot__LeadId__c | A reference ID to person or company that shows interest in company's products. | text |
| Lead Source | ssot__LeadSourceId__c | A reference ID to source where lead was obtained. | text |
| Name | ssot__Name__c | The name of the opportunity. | text |
| Next Step | ssot__NextStep__c | A description of the next task needed to close an opportunity. | text |
| Opportunity Forecast Category | ssot__OpportunityForecastCategoryId__c | A reference ID to a revenue probability category within the sales cycle. | text |
| Opportunity Id | ssot__Id__c | A unique ID used as primary key for the Opportunity DMO. | text |
| Opportunity Name | ssot__OpportunityName__c | The name of the opportunity. | text |
| Opportunity Stage | ssot__OpportunityStageId__c | A reference ID to phase or step of opportunity, for example, new, won, or closed. | text |
| Opportunity Type | ssot__OpportunityTypeId__c | A reference ID to the type of opportunity, for example, new or existing business. | text |
| Partner Account | ssot__PartnerAccountId__c | A reference ID to external business supporting or participating in opportunity. | text |
| Price Book | ssot__PriceBookId__c | A reference ID to sets of prices tailored to different needs. Using price books, each product can have many different prices. | text |
| Probability | ssot__Probability__c | The probability of closing an opportunity. | number |
| Total Amount | ssot__TotalAmount__c | The estimated amount of the total sale. | number |
| Total Product Quantity | ssot__TotalProductQuantity__c | The total quantity value for all products, if the opportunity has products associated. | number |