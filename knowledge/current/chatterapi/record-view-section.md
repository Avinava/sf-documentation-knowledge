---
title: "Record View Section"
domain: chatterapi
topic: record-view-section
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.854Z
estimatedTokens: 372
keywords: [Record, View, detail]
---

# Record View Section

> Section of record fields and values on a record detail.

# Record View Section

Section of record fields and values on a record detail.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| columnCount | Integer | Number of columns to use to lay out the fields in a record section. | Small, 29.0 | 29.0 |
| columnOrder | String | Order of the fields to use in the fields property to lay out the fields in a record section.LeftRight—Fields are rendered from left to right.TopDown—Fields are rendered from the top down. | Small, 29.0 | 29.0 |
| fields |  | Fields and values for the record contained in this section. A collection of these response bodies:Record FieldRecord Field: BlankRecord Field: CompoundRecord Field: CurrencyRecord Field: DateRecord Field: PercentRecord Field: PicklistRecord Field: ReferenceRecord Field: Reference with Date | Small, 29.0 | 29.0 |
| heading | String | Localized label to display when rendering this section of fields. | Small, 29.0 | 29.0 |
| isCollapsible | Boolean | Indicates whether the section can be collapsed to hide all the fields (true) or not (false). | Small, 29.0 | 29.0 |

#### See Also

-   [Record View](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordView.htm "A view of any record in the org, including a custom object record. This object is used if a specialized object, such as User or ChatterGroup, isn’t available for the record type. Contains data and metadata so you can render a record with one response.")

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
- Record View (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordView.htm)
