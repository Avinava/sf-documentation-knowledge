---
title: "RevenueTransactionErrorLog"
domain: sfFieldRef
topic: revenuetransactionerrorlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.716Z
estimatedTokens: 528
keywords: [RevenueTransactionErrorLog, errors, occurred, processing, error, record, persists, until, another, category, primary, optionally, occurs, API, version]
---

# RevenueTransactionErrorLog

> Contains information about errors that occurred while processing a request.
         The error record persists until another error with the same category, primary record, and
         (optionally) related record occurs. This object is available in API version 55.0 and
      later.

# RevenueTransactionErrorLog

Contains information about errors that occurred while processing a request. The error record persists until another error with the same category, primary record, and (optionally) related record occurs. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [RevenueTransactionErrorLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_revenuetransactionerrorlog.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AsyncOperationTrackerId | Revenue Async Operation ID | reference |  | 18 |  |  |
| BillingScheduleGroupId | Billing Schedule Group ID | reference |  | 18 |  |  |
| Category | Category | picklist |  | 255 |  |  |
| ConfiguratorErrorMessage | Configurator Error Message | textarea |  | 131072 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorCode | Error Code | string |  | 255 |  |  |
| ErrorLogNumber | Error Log Number | string |  | 255 |  |  |
| ErrorMessage | Error Message | textarea |  | 2000 |  |  |
| Id | Revenue Transaction Error Log ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PrimaryRecord2Id | Primary Record 2 ID | reference |  | 18 |  |  |
| PrimaryRecordId | Primary Record ID | reference |  | 18 |  |  |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| Request | Request | textarea |  | 131072 |  |  |
| RequestIdentifier | Request Identifier | string |  | 255 |  |  |
| Severity | Severity | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
