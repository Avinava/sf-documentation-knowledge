---
title: "List View Record"
domain: chatterapi
topic: list-view-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.339Z
estimatedTokens: 306
keywords: [View, Record]
---

# List View Record

> The list view of a record.

# List View Record

The list view of a record.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fields |  | The fields and values for the record displayed in this list. A collection of any of these:Record FieldRecord Field: BlankRecord Field: CompoundRecord Field: CurrencyRecord Field: DateRecord Field: PercentRecord Field: PicklistRecord Field: ReferenceRecord Field: Reference with Date | Medium, 30.0 | 30.0 |
| id | String | 18-character ID of the object | Small, 29.0 | 23.0 |
| motif | Motif | Small, medium, and large icons indicating the type of the object. The motif can also contain the object’s base color.The icon is not a preview of the file. | Small, 29.0 | 27.0 |
| mySubscription | Reference | If the context user is following this file, this contains information about the subscription; otherwise returns null. | Medium, 29.0 | 23.0 |
| name | String | The localized name of this record. | Small, 29.0 | 23.0 |
| type | String | A fixed type name for this object. Check this value to determine the shape of a response body. | Small, 29.0 | 23.0 |
| url | String | The Connect REST API URL resource for this object. | Small, 29.0 | 23.0 |

## Related Topics

- Record Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordField.htm)
- Record Field: Blank (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldBlank.htm)
- Record Field: Compound (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldCompound.htm)
- Record Field: Currency (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldCurrency.htm)
- Record Field: Date (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldDate.htm)
- Record Field: Percent (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldPercent.htm)
- Record Field: Picklist (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldPicklist.htm)
- Record Field: Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldReference.htm)
- Record Field: Reference with
          Date (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldReferenceWithDate.htm)
- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
