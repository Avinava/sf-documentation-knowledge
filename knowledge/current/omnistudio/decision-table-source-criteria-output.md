---
title: "Decision Table Source Criteria Output"
domain: omnistudio
topic: decision-table-source-criteria-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.037Z
estimatedTokens: 215
keywords: [Decision, Table, Source, Criteria, Output, representation, decision, table, source, criteria.]
---

# Decision Table Source Criteria Output

> Output representation of the decision table source
    criteria.

# Decision Table Source Criteria Output

Output representation of the decision table source criteria.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| operator | String | Operator used in the filter criteria. Possible values are:ContainsDoesNotContainEqualsGreaterThanGreaterThanOrEqualIsNotNullIsNullLessThanLessThanOrEqualNotEqual | Small, 58.0 | 58.0 |
| sequenceNumber | Integer | Sequence number of the filter criteria in the associated decision table source condition. | Small, 58.0 | 58.0 |
| sourceFieldName | String | Name of the field in the filter criteria. | Small, 58.0 | 58.0 |
| value | String | Expected value of the field. | Small, 58.0 | 58.0 |
| valueType | String | Type of filter value. Possible values are:FormulaLiteralLookupParameterPickList | Small, 58.0 | 58.0 |
