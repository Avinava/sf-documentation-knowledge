---
title: "Folder"
domain: mc-apis
topic: folder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.896Z
estimatedTokens: 220
keywords: [Folder, deprecated, DataFolder, instead, Items]
---

# Folder

> The Folder object is deprecated. Use DataFolder instead.

# Folder

The Folder object is deprecated. Use DataFolder instead.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| Name | xsd:string | Name of the object or property. |
| ParentID | xsd:int | Specifies the ID number of the parent account for Lock and Publish, On Your Behalf, Enterprise, and Enterprise 2.0 account children and business units. |
| Value | xsd:string | Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two values. IN can handle multiple values. All other operators require only one value. isNull and isNotNull ignores any supplied values and don't return an error. |

## Related Items

[DataFolder Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/datafolder.htm)

## Related Topics

- DataFolder Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/datafolder.htm)
