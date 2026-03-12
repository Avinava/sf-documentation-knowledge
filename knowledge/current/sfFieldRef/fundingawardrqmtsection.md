---
title: "FundingAwardRqmtSection"
domain: sfFieldRef
topic: fundingawardrqmtsection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.063Z
estimatedTokens: 474
keywords: [FundingAwardRqmtSection, part, funding, award, requirement, completed, reviewed, API, version, 62.0, later]
---

# FundingAwardRqmtSection

> Represents a part of a funding award requirement to be completed or
         reviewed. This object is available in API version 62.0 and later.

# FundingAwardRqmtSection

Represents a part of a funding award requirement to be completed or reviewed. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FundingAwardRqmtSection in the Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicationStageDefinitionId | Application Stage Definition ID | reference |  | 18 |  |  |
| AssignedUserId | Assigned User ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| DisplayOrder | Display Order | int | 9 |  |  |  |
| DueDate | Due Date | date |  |  |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| FundingAwardRequirementId | Funding Award Requirement ID | reference |  | 18 |  |  |
| Id | Funding Award Requirement Section ID | id |  | 18 |  |  |
| IsAssignedToMe | Assigned To Me | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRequired | Required | boolean |  |  |  |  |
| IsSubmitted | Submitted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
