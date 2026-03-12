---
title: "BusinessHours"
domain: sfFieldRef
topic: businesshours
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.641Z
estimatedTokens: 498
keywords: [BusinessHours, business, hours, support, organization, Escalation, rules, run]
---

# BusinessHours

> Specifies the business hours of your support organization. Escalation
      rules are run only during these hours.

# BusinessHours

Specifies the business hours of your support organization. Escalation rules are run only during these hours.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [BusinessHours](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_businesshours.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FridayEndTime | Friday End | time |  |  |  |  |
| FridayStartTime | Friday Start | time |  |  |  |  |
| Id | Business Hours ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDefault | Default Business Hours | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MondayEndTime | Monday End | time |  |  |  |  |
| MondayStartTime | Monday Start | time |  |  |  |  |
| Name | Business Hours Name | string |  | 80 |  |  |
| SaturdayEndTime | Saturday End | time |  |  |  |  |
| SaturdayStartTime | Saturday Start | time |  |  |  |  |
| SundayEndTime | Sunday End | time |  |  |  |  |
| SundayStartTime | Sunday Start | time |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ThursdayEndTime | Thursday End | time |  |  |  |  |
| ThursdayStartTime | Thursday Start | time |  |  |  |  |
| TimeZoneSidKey | Time Zone | picklist |  | 40 |  |  |
| TuesdayEndTime | Tuesday End | time |  |  |  |  |
| TuesdayStartTime | Tuesday Start | time |  |  |  |  |
| WednesdayEndTime | Wednesday End | time |  |  |  |  |
| WednesdayStartTime | Wednesday Start | time |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
