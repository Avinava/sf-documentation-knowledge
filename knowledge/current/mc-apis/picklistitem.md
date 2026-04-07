---
title: "PicklistItem"
domain: mc-apis
topic: picklistitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:18.152Z
estimatedTokens: 163
keywords: [PicklistItem, item, restricted]
---

> The PicklistItem object defines values for a property. The object represents a single item in a restricted list.

# PicklistItem

The PicklistItem object defines values for a property. The object represents a single item in a restricted list.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| IsDefaultValue | xsd:boolean | Indicates whether an item is the default value in a list. |
| Label | xsd:string | Name or text that is displayed next to the field. |
| Value | xsd:string | Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignores any supplied values and don't return an error. |
