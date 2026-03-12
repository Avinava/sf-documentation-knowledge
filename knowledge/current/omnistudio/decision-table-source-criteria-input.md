---
title: "Decision Table Source Criteria Input"
domain: omnistudio
topic: decision-table-source-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.307Z
estimatedTokens: 216
keywords: [Decision, Source, Criteria, Input, representation]
---

# Decision Table Source Criteria Input

> Input representation of source criteria for the decision
    table.

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
