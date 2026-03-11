---
title: "ConnectApi.LabeledRecordField"
domain: apex-reference
topic: connectapilabeledrecordfield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.023Z
keywords: [ConnectApi.LabeledRecordField, Important]
---

# ConnectApi.LabeledRecordField

# ConnectApi.LabeledRecordField

Record field containing a label and a text value.

This class is abstract.

Subclass of [ConnectApi.AbstractRecordField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstractRecordField.htm "A field on a record.").

Superclass of:

-   [ConnectApi.CompoundRecordField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_compoundRecordField.htm "Record field that is a composite of subfields.")
-   [ConnectApi.CurrencyRecordField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_currencyRecordField.htm "Record field containing a currency value.")
-   [ConnectApi.DateRecordField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_dateRecordField.htm "Record field containing a date.")
-   [ConnectApi.PercentRecordField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_percentRecordField.htm "Record field containing a percentage value.")
-   [ConnectApi.PicklistRecordField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_picklistRecordField.htm "Record field containing an enumerated value.")
-   [ConnectApi.RecordField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordField.htm "Generic record field containing a label and text value.")
-   [ConnectApi.ReferenceField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_referenceRecordField.htm "Record field with a label and text value.")
-   [ConnectApi.ReferenceWithDateRecordField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_referenceWithDateRecordField.htm "Record field containing a referenced object that acted at a specific time, for example, “Created By...”.")

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

The composition of a feed can change between releases. Write your code to handle instances of unknown subclasses.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| label | String | Localized string describing the record field. | 29.0 |
| text | String | Text value of the record field. All record fields have a text value. To ensure that all clients can consume new content, inspect the record field’s type property. If it isn’t recognized, render the text value as the default case. | 29.0 |