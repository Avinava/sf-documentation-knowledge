---
title: "ContentDistributionView"
domain: sfFieldRef
topic: contentdistributionview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.065Z
estimatedTokens: 290
keywords: [ContentDistributionView, views, shared, document, read-only, API, version, 32.0, later]
---

# ContentDistributionView

> Represents information about views of a shared document. This
		read-only object is available in API version 32.0 and later.

# ContentDistributionView

Represents information about views of a shared document. This read-only object is available in API version 32.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContentDistributionView](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentdistributionview.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | View Date | datetime |  |  |  |  |
| DistributionId | Content Delivery ID | reference |  | 18 |  |  |
| Id | Content Delivery View ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDownload | File Downloaded | boolean |  |  |  |  |
| IsInternal | Internal View | boolean |  |  |  |  |
| ParentViewId | Content Delivery View ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
