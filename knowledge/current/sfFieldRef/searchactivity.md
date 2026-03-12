---
title: "SearchActivity"
domain: sfFieldRef
topic: searchactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.156Z
estimatedTokens: 445
keywords: [SearchActivity, search, activity, Knowledge, article, known, KnowledgeSearchActivity, API, version, 38.0, later]
---

# SearchActivity

> Represents search activity on a Knowledge article. Also known as
         KnowledgeSearchActivity. This object is available in API version 38.0 and later.

# SearchActivity

Represents search activity on a Knowledge article. Also known as KnowledgeSearchActivity. This object is available in API version 38.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SearchActivity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_searchactivity.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AvgNumResults | Number of Results | double |  |  | 18 | 4 |
| ClickRank | Average Click Rank | double |  |  | 18 | 4 |
| ClickedRecordId | Clicked Article ID | reference |  | 18 |  |  |
| ClickedRecordName | Clicked Article Title | string |  | 255 |  |  |
| CountQueries | Number of Searches | int | 9 |  |  |  |
| CountUsers | Number of Users | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Search Activity ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| KbChannel | Channel | picklist |  | 255 |  |  |
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
