---
title: "RecordFilterCriteriaFamily Class"
domain: apex-reference
topic: recordfiltercriteriafamily-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.531Z
estimatedTokens: 441
namespace: ConnectApi
keywords: [RecordFilterCriteriaFamily, Filter, records, recordset, criteria, evaluateRecordsetFilterCriteria, recordsetFilterCriteriaInput, API, Version, Requires, Chatter, Usage]
---

# RecordFilterCriteriaFamily Class

> Filter records on recordset filter criteria.

**Namespace:** `ConnectApi`

# RecordFilterCriteriaFamily Class

Filter records on recordset filter criteria.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## RecordFilterCriteriaFamily Methods

These methods are for RecordFilterCriteriaFamily. All methods are static.

-   **[evaluateRecordsetFilterCriteria(recordsetFilterCriteriaInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_RecordFilterCriteriaFamily_static_methods.htm#apex_ConnectAPI_RecordFilterCriteriaFamily_evaluateRecordsetFilterCriteria_1)**
    Filter records on recordset filter criteria.

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

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- evaluateRecordsetFilterCriteria(recordsetFilterCriteriaInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_RecordFilterCriteriaFamily_static_methods.htm)
- ConnectApi.RecordsetFilterCriteriaInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_recordset_filter_criteria.htm)
- ConnectApi.RecordsetFilterCriteriaCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordset_filter_criteria_collection.htm)
