---
title: "MessagingLink"
domain: sfFieldRef
topic: messaginglink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.229Z
estimatedTokens: 344
keywords: [MessagingLink, link, Messaging, Channel, it's, shared, API, version, 47.0, later]
---

# MessagingLink

> Represents the link between a Messaging Channel and where it's shared.
    This object is available in API version 47.0 and later.

# MessagingLink

Represents the link between a Messaging Channel and where it's shared. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MessagingLink](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_messaginglink.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EntityType | Custom Object Definition ID | picklist |  | 255 |  |  |
| Id | Messaging Link ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MessagingChannelId | Messaging Channel ID | reference |  | 18 |  |  |
| RecordTypeId | Record Type ID | reference |  | 18 |  |  |
| ShouldAttemptAutoLink | Attempt to auto-link record | boolean |  |  |  |  |
| ShouldPromptCreate | Prompt to manually create link | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
