---
title: "Voucher Definition DMO"
domain: data-cloud
topic: voucher-definition-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.040Z
estimatedTokens: 955
keywords: [Voucher, Definition, DMO, Data, Cloud, data, model, details, voucher, definition, associated, loyalty, program., API, Name, Category, Primary, Subject, Area, Key]
---

# Voucher Definition DMO

> The Voucher Definition DMO is a Data Cloud data model object (DMO) for
      details about a voucher definition associated with a loyalty program.

# Voucher Definition DMO

The Voucher Definition DMO is a Data Cloud data model object (DMO) for details about a voucher definition associated with a loyalty program.

## Object API Name

ssot\_\_VoucherDefinition\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Voucher Definition ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Voucher Definition | Partner Account | Many To One: N:1 | Account | Account ID |
| Voucher Definition | Voucher Expiration Type | Many To One: N:1 | Voucher Definition | Voucher Definition ID |
| Promotion | Default Voucher Definition | Many To One: N:1 | Voucher Definition | Voucher Definition ID |
| Voucher Definition | Loyalty Program | Many To One: N:1 | Loyalty Program | Loyalty Program ID |
| Voucher | Voucher Definition | Many To One: N:1 | Voucher Definition | Voucher Definition ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to logical name of object where record originated, for example a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The description of the voucher. | text |
| Discount Percent | ssot__DiscountPercent__c | The reduction in price that a voucher holder is entitled to, typically shown as a fraction of original price. | number |
| Effective Date | ssot__EffectiveDate__c | The date when voucher goes into effect. | dateTime |
| Expiration Date | ssot__ExpirationDate__c | The date when voucher expires. | dateTime |
| Expiration Period | ssot__ExpirationPeriodnumber__c | The quantity of time units defined by Expiration Period UOM. | number |
| Expiration Period UOM | ssot__ExpirationPeriodUOM__c | A reference ID to unit of time used to define expiration period of voucher, for example days, weeks, or months. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Face Value Amount | ssot__FaceValueAmount__c | The value amount of a voucher. | number |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| Is Active | ssot__IsActive__c | An indicator if the voucher is active. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Program | ssot__LoyaltyProgramId__c | A reference ID to marketing strategy designed to encourage customers to continue shopping at or use services of a business associated with the program. | text |
| Name | ssot__Name__c | The name of the voucher. | text |
| Partner Account | ssot__PartnerAccountId__c | A reference ID to account of organization that partners in offering voucher. | text |
| Voucher Definition ID | ssot__Id__c | A unique ID used as primary key for the Voucher Definition DMO. | text |
| Voucher Expiration Type | ssot__VoucherExpirationTypeId__c | A reference ID to the expiration type. | text |
| Voucher Status | ssot__VoucherStatusId__c | A reference ID to status of voucher, for example, issued, expired, or redeemed. | text |
| Voucher Type | ssot__VoucherTypeId__c | A reference ID to type of voucher, for example accrual or redemption. | text |
