---
title: "Record Field: Compound"
domain: chatterapi
topic: record-field-compound
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.827Z
estimatedTokens: 239
keywords: [Record, Compound, composite, subfields]
---

# Record Field: Compound

> Record field that is a composite of subfields.

# Record Field: Compound

Record field that is a composite of subfields.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fields |  | Collection of subfields that make up the compound field. A collection of these response bodies:Record FieldRecord Field: BlankRecord Field: CompoundRecord Field: CurrencyRecord Field: DateRecord Field: PercentRecord Field: PicklistRecord Field: ReferenceRecord Field: Reference with Date | Big, 29.0 | 29.0 |
| label | String | Localized string describing the record field. | Small, 29.0 | 29.0 |
| text | String | Text value of the record field. All record fields have a text value. To ensure that all clients can consume new content, inspect the record field’s type property. If it isn’t recognized, render the text value as the default case. | Small, 29.0 | 29.0 |
| type | String | Valid values are:AddressCompoundLocationName | Small, 29.0 | 29.0 |

## Related Topics

- Record Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordField.htm)
- Record Field: Blank (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldBlank.htm)
- Record Field: Currency (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldCurrency.htm)
- Record Field: Date (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldDate.htm)
- Record Field: Percent (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldPercent.htm)
- Record Field: Picklist (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldPicklist.htm)
- Record Field: Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldReference.htm)
- Record Field: Reference with
                    Date (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordFieldReferenceWithDate.htm)
