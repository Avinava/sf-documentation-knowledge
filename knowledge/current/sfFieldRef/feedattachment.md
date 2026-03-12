---
title: "FeedAttachment"
domain: sfFieldRef
topic: feedattachment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.868Z
estimatedTokens: 271
keywords: [FeedAttachment, attachment, feed, item, file, link, add, various, attachments, API, version, 36.0, later]
---

# FeedAttachment

> Represents an attachment to a feed item, such as
				a file attachment or a link. Use FeedAttachment to add various attachments to one
				feed item.
		This object is available in API version 36.0 and
			later.

# FeedAttachment

Represents an attachment to a feed item, such as a file attachment or a link. Use FeedAttachment to add various attachments to one feed item. This object is available in API version 36.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FeedAttachment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_feedattachment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| FeedEntityId | Feed Entity ID | reference |  | 18 |  |  |
| Id | Feed Attachment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| RecordId | Attachment Record ID | reference |  | 18 |  |  |
| Title | Feed Attachment Title | string |  | 255 |  |  |
| Type | Feed Attachment Type | picklist |  | 40 |  |  |
| Value | Feed Attachment Value | string |  | 1000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
