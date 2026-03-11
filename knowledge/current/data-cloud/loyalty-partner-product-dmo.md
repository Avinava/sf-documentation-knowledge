---
title: "Loyalty Partner Product DMO"
domain: data-cloud
topic: loyalty-partner-product-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.583Z
keywords: [Loyalty, Partner, Product, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Loyalty Partner Product DMO

# Loyalty Partner Product DMO

The Loyalty Partner Product DMO is a Data Cloud data model object (DMO) for a product offered by a loyalty program partner, such as a coupon from another company.

## Object API Name

ssot\_\_LoyaltyPartnerProduct\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Partner Product ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Partner Product | Product | Many To One: N:1 | Goods Product | Goods Product ID |
| Loyalty Partner Product | Product | Many To One: N:1 | Bundle Product | Bundle Product ID |
| Loyalty Partner Product | Product | Many To One: N:1 | Master Product | Master Product ID |
| Loyalty Partner Product | Loyalty Program Partner | Many To One: N:1 | Loyalty Program Partner | Loyalty Program Partner ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified record. | dateTime |
| Loyalty Partner Category | ssot__LoyaltyPartnerCategoryId__c | A reference ID to category designated for loyalty partner, for example, alliance or bilateral. | text |
| Loyalty Partner Status | ssot__LoyaltyPartnerStatusId__c | A reference ID to status of loyalty partner. | text |
| Loyalty Partner Type | ssot__LoyaltyPartnerTypeId__c | A reference ID to type of loyalty partner. | text |
| Loyalty Program | ssot__LoyaltyProgramId__c | A reference ID to marketing strategy designed to encourage customers to shop at or use the services of business associated with program. | text |
| Loyalty Partner Product Id | ssot__Id__c | A unique ID used as primary key for the Loyalty Partner Product DMO. | text |
| Partner Account | ssot__PartnerAccountId__c | A reference ID to account of partner to loyalty program. | text |
| Partner Industry | ssot__PartnerIndustryId__c | A reference ID to primary economic activity of partner, for example automotive or retail. | text |
| Partnership End Date | ssot__PartnershipEndDate__c | The date when a loyalty program partnership expires. | dateTime |
| Partnership Start Date | ssot__PartnershipStartDate__c | The date when a loyalty program partnership begins. | dateTime |
| Party | ssot__PartyId__c | A reference ID to the parent party, for example, an individual, business, or affiliation group. | text |