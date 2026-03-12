---
title: "Loyalty Program Partner DMO"
domain: data-cloud
topic: loyalty-program-partner-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.359Z
estimatedTokens: 874
keywords: [Loyalty, Program, Partner, DMO, Data, Cloud, data, model, companies, loyalty, program, offerings., API, Name, Category, Primary, Subject, Area, Key, Relationships]
---

# Loyalty Program Partner DMO

> The Loyalty Program Partner DMO is a Data Cloud data model object (DMO)
      for companies with loyalty program offerings.

# Loyalty Program Partner DMO

The Loyalty Program Partner DMO is a Data Cloud data model object (DMO) for companies with loyalty program offerings.

## Object API Name

ssot\_\_LoyaltyProgramPartner\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Program Partner ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Partner Product | Loyalty Program Partner | Many To One: N:1 | Loyalty Program Partner | Loyalty Program Partner ID |
| Loyalty Transaction Journal | Loyalty Program Partner | Many To One: N:1 | Loyalty Program Partner | Loyalty Program Partner ID |
| Loyalty Program Partner | Partner Account | Many To One: N:1 | Account | Account ID |
| Loyalty Program Partner | Loyalty Program | Many To One: N:1 | Loyalty Program | Loyalty Program ID |
| Promotion Loyalty Partner Product | Loyalty Partner Product | Many To One: N:1 | Loyalty Program Partner | Loyalty Program Partner ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Partner Category | ssot__LoyaltyPartnerCategoryId__c | A reference ID to category designated for loyalty partner, for example, alliance or bilateral. | text |
| Loyalty Partner Status | ssot__LoyaltyPartnerStatusId__c | A reference ID to status of loyalty partner. | text |
| Loyalty Partner Type | ssot__LoyaltyPartnerTypeId__c | A reference ID to type of loyalty partner. | text |
| Loyalty Program | ssot__LoyaltyProgramId__c | A reference ID to marketing strategy designed to encourage customers to shop at or use the services of business associated with program. | text |
| Loyalty Program Partner ID | ssot__Id__c | A unique ID used as primary key for the Loyalty Program Partner DMO. | text |
| Partner Account | ssot__PartnerAccountId__c | A reference ID to account of partner to loyalty program. | text |
| Partner Industry | ssot__PartnerIndustryId__c | A reference ID to primary economic activity of partner, for example automotive or retail. | text |
| Partnership End Date | ssot__PartnershipEndDate__c | The date when partnership participation in loyalty program ends. | dateTime |
| Partnership Start Date | ssot__PartnershipStartDate__c | The date when partnership participation in loyalty program begins. | dateTime |
| Party | ssot__PartyId__c | A reference ID to person or organization that is partner in loyalty program. | text |
