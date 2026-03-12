---
title: "QuickTextUsage"
domain: sfFieldRef
topic: quicktextusage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.041Z
estimatedTokens: 426
keywords: [QuickTextUsage, usage, quick, text, record, including, how, they, snippet, users, send, customer, API, version, 47.0]
---

# QuickTextUsage

> Represents the usage of quick text on a record, including which quick
			text was used, who used it, and how they used it. Quick text is a snippet of text
		that allows users to send a quick response to a customer. This object is available in API
		version 47.0 and later.

# QuickTextUsage

Represents the usage of quick text on a record, including which quick text was used, who used it, and how they used it. Quick text is a snippet of text that allows users to send a quick response to a customer. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [QuickTextUsage](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_quicktextusage.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppContext | App Context | picklist |  | 255 |  |  |
| Channel | Channel | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FolderId | Folder ID | reference |  | 18 |  |  |
| Id | Quick Text Usage ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LaunchSource | Launch Source | picklist |  | 255 |  |  |
| LoggedTime | Logged Time | datetime |  |  |  |  |
| Name | Quick Text Usage Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| QuickTextId | Quick Text ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
