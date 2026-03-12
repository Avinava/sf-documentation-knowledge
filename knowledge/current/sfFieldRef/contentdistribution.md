---
title: "ContentDistribution"
domain: sfFieldRef
topic: contentdistribution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.060Z
estimatedTokens: 623
keywords: [ContentDistribution, sharing, document, externally, API, version, 32.0, later]
---

# ContentDistribution

> Represents information about sharing a document externally.
		This object is available in API version 32.0 and later.

# ContentDistribution

Represents information about sharing a document externally. This object is available in API version 32.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContentDistribution](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentdistribution.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContentDocumentId | Content Document ID | reference |  | 18 |  |  |
| ContentDownloadUrl | File Download Link | string |  | 256 |  |  |
| ContentVersionId | Content Version ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DistributionPublicUrl | External Link | string |  | 256 |  |  |
| ExpiryDate | Expiration Date | datetime |  |  |  |  |
| FirstViewDate | First Viewed | datetime |  |  |  |  |
| Id | Content Delivery ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastViewDate | Last Viewed | datetime |  |  |  |  |
| Name | Content Delivery Name | string |  | 100 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Password | Password | string |  | 36 |  |  |
| PdfDownloadUrl | PDF Download Link | string |  | 256 |  |  |
| PreferencesAllowOriginalDownload | Allow Download in Original Format | boolean |  |  |  |  |
| PreferencesAllowPDFDownload | Allow Download as PDF | boolean |  |  |  |  |
| PreferencesAllowViewInBrowser | Allow View in the Browser | boolean |  |  |  |  |
| PreferencesExpires | Content Delivery Expires | boolean |  |  |  |  |
| PreferencesLinkLatestVersion | Content Delivery Opens Latest Version | boolean |  |  |  |  |
| PreferencesNotifyOnVisit | Notify Me of First View or Download | boolean |  |  |  |  |
| PreferencesNotifyRndtnComplete | Email when Preview Images are Ready | boolean |  |  |  |  |
| PreferencesPasswordRequired | Require Password to Access Content | boolean |  |  |  |  |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ViewCount | View Count | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
