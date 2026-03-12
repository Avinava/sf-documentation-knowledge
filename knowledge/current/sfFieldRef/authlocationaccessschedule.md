---
title: "AuthLocationAccessSchedule"
domain: sfFieldRef
topic: authlocationaccessschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.185Z
estimatedTokens: 411
keywords: [AuthLocationAccessSchedule, operating, hours, period, authorization, place, API, version, 49.0, later]
---

# AuthLocationAccessSchedule

> Represents the operating hours during a specified period in which authorization
      is valid for a place. This object is available in API version 49.0 and later.

# AuthLocationAccessSchedule

Represents the operating hours during a specified period in which authorization is valid for a place. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AuthLocationAccessSchedule in the Emergency Response Management Object Reference and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthApplPlaceId | Authorization Application Place ID | reference |  | 18 |  |  |
| AuthEndDate | Authorization End Date | date |  |  |  |  |
| AuthStartDate | Authorization Start Date | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Authorization Location Access Schedule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WorkDay | Work Day | multipicklist |  | 4099 | 0 |  |
| WorkEndTime | Work End Time | time |  |  |  |  |
| WorkStartTime | Work Start Time | time |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
