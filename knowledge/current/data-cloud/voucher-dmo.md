---
title: "Voucher DMO"
domain: data-cloud
topic: voucher-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.050Z
estimatedTokens: 1151
keywords: [Voucher, DMO, Data, Cloud, data, model, loyalty, program’s, voucher., API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Voucher DMO

> The Voucher DMO is a Data Cloud data model object (DMO) for a loyalty
      program’s voucher.

# Voucher DMO

The Voucher DMO is a Data Cloud data model object (DMO) for a loyalty program’s voucher.

## Object API Name

ssot\_\_Voucher\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Voucher ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Account | Auto Payment Method | Many To One: N:1 | Voucher | Voucher ID |
| Loyalty Transaction Journal | Payment Method | Many To One: N:1 | Voucher | Voucher ID |
| Voucher | Party | Many To One: N:1 | Individual | Individual ID |
| Voucher | Loyalty Benefit | Many To One: N:1 | Loyalty Benefit | Loyalty Benefit ID |
| Voucher | Loyalty Journal Subtype | Many To One: N:1 | Loyalty Journal Subtype | Loyalty Journal Subtype ID |
| Voucher | Loyalty Transaction Journal | Many To One: N:1 | Loyalty Transaction Journal | Loyalty Transaction Journal ID |
| Voucher | Promotion | Many To One: N:1 | Promotion | Promotion ID |
| Voucher | Account | Many To One: N:1 | Account | Account ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Account | ssot__AccountID__c | A reference ID to the account where this voucher is associated with. | text |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to logical name of object where record originated, for example a cloud storage file or another connector’s external object. | text |
| Discount Percent | ssot__DiscountPercent__c | The reduction in price that the voucher holder is entitled to use, typically a fraction of the original price. | number |
| Effective Date | ssot__EffectiveDate__c | The date when voucher goes into effect. | dateTime |
| Expiration Date | ssot__ExpirationDate__c | The date when voucher expires. | dateTime |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Face Value Amount | ssot__FaceValueAmount__c | The value amount of a voucher. | number |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Benefit | ssot__LoyaltyBenefitId__c | A reference ID to perk or betterment available to loyalty program members. Examples include waived airline baggage fees, complimentary hotel stays, or rental car upgrades. | text |
| Loyalty Journal Subtype | ssot__LoyaltyJournalSubtypeId__c | A reference ID to subtype of the loyalty journal type entry, for example, a watched video or a product review. | text |
| Loyalty Program Member | ssot__LoyaltyProgramMemberId__c | A reference ID to person who joined loyalty program. | text |
| Loyalty Transaction Journal | ssot__LoyaltyTransactionJournalId__c | A reference ID to all transactions related to loyalty program. | text |
| Name | ssot__Name__c | The name of the voucher. | text |
| Notes | ssot__Notestext__c | The reason why voucher was issued. | text |
| Party | ssot__PartyId__c | A reference ID to the parent party, for example, an individual, business, or affiliation group. | text |
| Payment Method Status | ssot__PaymentMethodStatus__c | The status of the payment method related to the voucher. | text |
| Payment Method Type | ssot__PaymentMethodTypeId__c | A reference ID to the type of voucher payment method. | text |
| Promotion | ssot__PromotionId__c | A reference ID to campaign that provides discounts or other reasons for adjusting an order. | text |
| Used Date | ssot__UsedDate__c | The date when the voucher was used. | dateTime |
| Voucher Definition | ssot__VoucherDefinitionId__c | A reference ID to main voucher from which instance vouchers awarded to individual people are derived. | text |
| Voucher ID | ssot__Id__c | A unique ID used as primary key for the Voucher DMO. | text |
| Voucher Status | ssot__VoucherStatusId__c | A reference ID to status of voucher, for example, issued or expired. | text |
| Voucher Type | ssot__VoucherTypeId__c | A reference ID to type of voucher, for example, accrual or manual action. | text |
