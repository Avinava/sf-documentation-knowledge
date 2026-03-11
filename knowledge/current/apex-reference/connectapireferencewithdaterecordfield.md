---
title: "ConnectApi.ReferenceWithDateRecordField"
domain: apex-reference
topic: connectapireferencewithdaterecordfield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.906Z
keywords: [ConnectApi.ReferenceWithDateRecordField]
---

# ConnectApi.ReferenceWithDateRecordField

# ConnectApi.ReferenceWithDateRecordField

Record field containing a referenced object that acted at a specific time, for example, “Created By...”.

Subclass of [ConnectApi.LabeledRecordField](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_labeledRecordField.htm "Record field containing a label and a text value.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| dateValue | Datetime | Time at which the referenced object acted. | 29.0 |
| reference | ConnectApi.​RecordSummary | Object referenced by the record field. | 29.0 |