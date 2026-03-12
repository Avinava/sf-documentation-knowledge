---
title: "ConnectApi.RecordViewSection"
domain: apex-reference
topic: connectapirecordviewsection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.861Z
estimatedTokens: 289
keywords: [ConnectApi.RecordViewSection, record, detail]
---

# ConnectApi.RecordViewSection

> Section of record fields and values on a record detail.

# ConnectApi.RecordViewSection

Section of record fields and values on a record detail.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| columnCount | Integer | Number of columns to use to lay out the fields in a record section. | 29.0 |
| columnOrder | ConnectApi.​RecordColumnOrder Enum | Order of the fields to use in the fields property to lay out the fields in a record section.LeftRight—Fields are rendered from left to right.TopDown—Fields are rendered from the top down. | 29.0 |
| fields | ConnectApi.​​Abstract​RecordField | Fields and values for the record contained in this section. | 29.0 |
| heading | String | Localized label to display when rendering this section of fields. | 29.0 |
| isCollapsible | Boolean | Indicates whether the section can be collapsed to hide all the fields (true) or not (false). | 29.0 |

#### See Also

-   [ConnectApi.RecordView](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordView.htm "A view of any record in the org, including a custom object record. This object is used if a specialized object, such as User or ChatterGroup, isn’t available for the record type.")

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​​Abstract​RecordField (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstractRecordField.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.RecordView (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordView.htm)
