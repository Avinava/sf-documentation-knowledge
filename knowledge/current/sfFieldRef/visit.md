---
title: "Visit"
domain: sfFieldRef
topic: visit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.706Z
estimatedTokens: 643
keywords: [Visit, inspect, assess, compliance, applicant’s, ability, license, permit, API, version, 47.0, later]
---

# Visit

> Represents a visit to inspect, assess compliance, or assess an applicant’s
      ability to get a license or permit or inspect. This object is available in API version
    47.0 and later.

# Visit

Represents a visit to inspect, assess compliance, or assess an applicant’s ability to get a license or permit or inspect. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Visit in the Automotive Cloud Developer Guide, Consumer Goods Cloud Developer Guide, Emergency Response Management Object Reference, Emergency Response Management for Public Health Developer Guide, Life Sciences Cloud Developer Guide, Manufacturing Cloud Developer Guide, Public Sector Solutions Developer Guide, and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActualVisitEndTime | Actual End Time | datetime |  |  |  |  |
| ActualVisitStartTime | Actual Start Time | datetime |  |  |  |  |
| AddressId | Address ID | reference |  | 18 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| ContextId | Context ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Visit ID | id |  | 18 |  |  |
| InstructionDescription | Special Instruction | textarea |  | 1000 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocationId | Location ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentVisitId | Visit ID | reference |  | 18 |  |  |
| PlaceId | Place ID | reference |  | 18 |  |  |
| PlannedVisitEndTime | Planned End Time | datetime |  |  |  |  |
| PlannedVisitStartTime | Planned Start Time | datetime |  |  |  |  |
| ServiceResourceId | Resource ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StatusRemarks | Status Remark | textarea |  | 1000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| VisitPriority | Visit Priority | picklist |  | 40 |  |  |
| VisitTypeId | Visit Type ID | reference |  | 18 |  |  |
| VisitorId | Visitor ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
