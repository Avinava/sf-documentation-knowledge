---
title: "ContentNotification"
domain: sfFieldRef
topic: contentnotification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.152Z
estimatedTokens: 251
keywords: [ContentNotification, notification, file, API, version, 42.0, later]
---

# ContentNotification

> Represents a notification for a file. This object is available in
    API version 42.0 and later.

# ContentNotification

Represents a notification for a file. This object is available in API version 42.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContentNotification](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentnotification.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EntityIdentifierId | Entity ID | reference |  | 18 |  |  |
| EntityType | Entity Type | string |  | 20 |  |  |
| Id | ContentNotification ID | id |  | 18 |  |  |
| Nature | Nature | string |  | 20 |  |  |
| Subject | Subject | textarea |  | 333 |  |  |
| Text | Text | textarea |  | 666 |  |  |
| UsersId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
