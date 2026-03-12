---
title: "FeedTrackedChange"
domain: sfFieldRef
topic: feedtrackedchange
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.911Z
estimatedTokens: 272
keywords: [FeedTrackedChange, individual, change, changes, child, record, feed, AccountFeed, API, version, 18.0, later]
---

# FeedTrackedChange

> Represents an individual field change or set of
    field changes. A FeedTrackedChange is a child object of a record feed, such as AccountFeed.
  This object is available in API version 18.0 and later.

# FeedTrackedChange

Represents an individual field change or set of field changes. A FeedTrackedChange is a child object of a record feed, such as AccountFeed. This object is available in API version 18.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FeedTrackedChange](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_feedtrackedchange.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FeedItemId | Feed Item ID | reference |  | 18 |  |  |
| FieldName | Field | string |  | 120 |  |  |
| Id | Feed Tracked Change ID | id |  | 18 |  |  |
| NewValue | New Value | anyType |  | 255 |  |  |
| OldCurrencyIsoCode | Old Currency ISO Code | string |  | 3 |  |  |
| OldValue | Old Value | anyType |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
