---
title: "WorkTypeStepLdTimeOvride"
domain: sfFieldRef
topic: worktypestepldtimeovride
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.798Z
estimatedTokens: 461
keywords: [WorkTypeStepLdTimeOvride, lead, time, that's, override, work, procedure, step, performed, service, territory, country, API, version, 59.0]
---

# WorkTypeStepLdTimeOvride

> Represents the lead time that's used to override the default lead time
         required for the work procedure, work type, or work type step that's performed at a service
         territory in a country. This object is available in API version 59.0 and later.

# WorkTypeStepLdTimeOvride

Represents the lead time that's used to override the default lead time required for the work procedure, work type, or work type step that's performed at a service territory in a country. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see WorkTypeStepLdTimeOvride in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CountryId | Geo Country ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Work Type Step Lead Time Override ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeadTime | Lead Time | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Priority | Priority | int | 9 |  |  |  |
| RelatedWorkTypeServiceTerritoryId | Related Work Type Service Territory ID | reference |  | 18 |  |  |
| ServiceTerritoryId | Work Procedure Service Territory ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WorkProcedureId | Work Procedure ID | reference |  | 18 |  |  |
| WorkTypeId | Work Type ID | reference |  | 18 |  |  |
| WorkTypeServiceTerritoryId | Work Type Service Territory ID | reference |  | 18 |  |  |
| WorkTypeStepId | Work Type Step ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
