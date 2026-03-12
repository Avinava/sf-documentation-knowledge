---
title: "FileSearchActivity"
domain: sfFieldRef
topic: filesearchactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.979Z
estimatedTokens: 391
keywords: [FileSearchActivity, search, activity, file, API, version, 38.0, later]
---

# FileSearchActivity

> Represents search activity on a file. This object is available in API
      version 38.0 and later.

# FileSearchActivity

Represents search activity on a file. This object is available in API version 38.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FileSearchActivity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_filesearchactivity.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AvgNumResults | Average Number of Results | double |  |  | 18 | 1 |
| ClickRank | Average Click Rank | double |  |  | 18 | 1 |
| CountQueries | Number of Searches | int | 9 |  |  |  |
| CountUsers | Number of Users | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Search Activity Id | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Search Activity Name | string |  | 255 |  |  |
| Period | Duration | picklist |  | 255 |  |  |
| QueryDate | Search Date | date |  |  |  |  |
| QueryLanguage | Language | picklist |  | 255 |  |  |
| SearchTerm | Search Term | string |  | 100 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
