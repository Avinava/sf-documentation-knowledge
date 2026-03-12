---
title: "Loyalty Program DMO"
domain: data-cloud
topic: loyalty-program-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.333Z
estimatedTokens: 740
keywords: [Loyalty, Program, DMO, Data, Cloud, data, model, strategy, designed, encourage, customers, continue, loyal, business, associated, program., API, Name, Category, Primary]
---

# Loyalty Program DMO

> The Loyalty Program DMO is a Data Cloud data model object (DMO) for a
      strategy designed to encourage customers to continue to be loyal to the business associated
      with the program.

# Loyalty Program DMO

The Loyalty Program DMO is a Data Cloud data model object (DMO) for a strategy designed to encourage customers to continue to be loyal to the business associated with the program.

## Object API Name

ssot\_\_LoyaltyProgram\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Program ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Benefit Type | Loyalty Program | Many To One: N:1 | Loyalty Program | Loyalty Program ID |
| Loyalty Program Currency | Loyalty Program | Many To One: N:1 | Loyalty Program | Loyalty Program ID |
| Loyalty Program Member | Loyalty Program | Many To One: N:1 | Loyalty Program | Loyalty Program ID |
| Loyalty Program Partner | Loyalty Program | Many To One: N:1 | Loyalty Program | Loyalty Program ID |
| Loyalty Tier Group | Loyalty Program | Many To One: N:1 | Loyalty Program | Loyalty Program ID |
| Loyalty Transaction Journal | Loyalty Program | Many To One: N:1 | Loyalty Program | Loyalty Program ID |
| Promotion | Loyalty Program | Many To One: N:1 | Loyalty Program | Loyalty Program ID |
| Voucher Definition | Loyalty Program | Many To One: N:1 | Loyalty Program | Loyalty Program ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| End Date | ssot__EndDate__c | The date when the loyalty program expires. | dateTime |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Program ID | ssot__Id__c | A unique ID used as primary key for the Loyalty Program DMO. | text |
| Loyalty Program Partner | ssot__LoyaltyProgramPartnerId__c | A reference ID to partner of loyalty program. | text |
| Name | ssot__Name__c | The loyalty program name. | text |
| Product | ssot__ProductId__c | A reference ID to the product associated with the loyalty program. | text |
| Start Date | ssot__StartDate__c | The date when loyalty program begins. | dateTime |
