---
title: "CustodyChainEntry"
domain: sfFieldRef
topic: custodychainentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.188Z
estimatedTokens: 546
keywords: [CustodyChainEntry, entry, event, chain, custody, API, version, 59.0, later]
---

# CustodyChainEntry

> Represents information about an entry or event in the chain of custody.
      This object is available in API version 59.0 and later.

# CustodyChainEntry

Represents information about an entry or event in the chain of custody. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CustodyChainEntry in the Life Sciences Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssessmentTaskId | Assessment Task ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustodianId | Custodian ID | reference |  | 18 |  |  |
| CustodyItemId | Custody Item ID | reference |  | 18 |  |  |
| Description | Description | textarea |  | 255 |  |  |
| EndDateTime | End Date | datetime |  |  |  |  |
| EnrolleeWorkOrderId | Care Program Enrollee Work Order ID | reference |  | 18 |  |  |
| EnrolleeWorkOrderStepId | Care Program Enrollee Work Order Step ID | reference |  | 18 |  |  |
| Id | Custody Chain Entry ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| ItemCustodySiteId | ItemCustodySite ID | reference |  | 18 |  |  |
| ItemVerificationType | Item Verification Type | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| RecordUpdateInformation | Record Update Information | textarea |  | 32000 |  |  |
| ReferenceObjectApiName | Reference Object API Name | picklist |  | 255 |  |  |
| ReferenceRecordId | ReferenceRecord ID | reference |  | 18 |  |  |
| StartDateTime | Start Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCategory | Status Category | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VerificationProcessType | Verification Process Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
