---
title: "Decision Table Source Criteria Input"
domain: omnistudio
topic: decision-table-source-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.214Z
keywords: [Decision, Table, Source, Criteria, Input]
---

# Decision Table Source Criteria Input

# Decision Table Source Criteria Input

Input representation of source criteria for the decision table.

Root XML tag

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| operator | String | Operator used in the filter criteria. Possible values are:ContainsDoesNotContainEqualsGreaterThanGreaterThanOrEqualIsNotNullIsNullLessThanLessThanOrEqualNotEqual | Required | 58.0 |
| sequenceNumber | Integer | Sequence number of the filter criteria in the associated decision table source condition. | Optional | 58.0 |
| sourceFieldName | String | Name of the field in the filter criteria. | Required | 58.0 |
| value | String | Expected value of the field. | Optional | 58.0 |
| valueType | String | Type of a filter value. Possible values are:FormulaLiteralLookupParameterPickList | Required | 58.0 |