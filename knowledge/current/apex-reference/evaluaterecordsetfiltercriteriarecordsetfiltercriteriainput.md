---
title: "evaluateRecordsetFilterCriteria(recordsetFilterCriteriaInput)"
domain: apex-reference
topic: evaluaterecordsetfiltercriteriarecordsetfiltercriteriainput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.705Z
keywords: [evaluateRecordsetFilterCriteria, recordsetFilterCriteriaInput, Filter, records, recordset, filter, criteria., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# evaluateRecordsetFilterCriteria(recordsetFilterCriteriaInput)

> Filter records on recordset filter criteria.

### evaluateRecordsetFilterCriteria(recordsetFilterCriteriaInput)

Filter records on recordset filter criteria.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RecordsetFilterCriteriaCollection evaluateRecordsetFilterCriteria(ConnectApi.RecordsetFilterCriteriaInput recordsetFilterCriteriaInput)

#### Parameters

recordsetFilterCriteriaInput

Type: [ConnectApi.RecordsetFilterCriteriaInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_recordset_filter_criteria.htm "A set of recordset filter criteria applied to records, such as service appointment records.")

ConnectApi.RecordsetFilterCriteriaInput object providing a set of recordset filter criteria and records.

#### Return Value

Type: [ConnectApi.RecordsetFilterCriteriaCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordset_filter_criteria_collection.htm "List of the recordset filters and records.")

#### Usage

Field service must be enabled.