---
title: "Decision Table Definition Output"
domain: omnistudio
topic: decision-table-definition-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:50.000Z
estimatedTokens: 576
keywords: [Decision, Table, Definition, Output, representation, decision, table, definition, associated, table.]
---

# Decision Table Definition Output

> Output representation of a decision table definition associated with a
      decision table.

# Decision Table Definition Output

Output representation of a decision table definition associated with a decision table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| collectOperator | String | Operator applied to outputs. Valid values are:CountMaximumMinimumNoneSum | Small, 58.0 | 58.0 |
| conditionCriteria | String | Custom logic for deciding how the input fields are processed. | Small, 58.0 | 58.0 |
| conditionType | String | Condition logic for input fields. Valid values are:AllAnyCustom | Small, 58.0 | 58.0 |
| decision​Result​Policy | String | Results policy to specify the result of the decision table. Valid values are:AnyValueCollectOperator—For internal use onlyFirstMatchOutputOrderPriority—For internal use onlyRuleOrder—For internal use onlyUniqueValues—For internal use only | Small, 58.0 | 58.0 |
| description | String | Description of the decision table. | Small, 58.0 | 58.0 |
| doesConsider​NullValue | Boolean | Indicates whether a column that has a null value is considered for lookup (true) or not (false). The default value is false. | Small, 60.0 | 60.0 |
| fullName | String | Unique name of the rule definition. | Small, 58.0 | 58.0 |
| id | String | ID of the decision table. | Small, 58.0 | 58.0 |
| parameters | Decision Table Parameter Output[] | Array of input fields defined for the decision table. | Small, 58.0 | 58.0 |
| setupName | String | Name of the decision table. | Small, 58.0 | 58.0 |
| sourceCriteria | Decision Table Source Criteria Output[] | Output array representation of source filters. | Small, 58.0 | 58.0 |
| sourceObject | String | Object containing business rules for the decision table to read. | Small, 58.0 | 58.0 |
| sourceType | String | Type of source used to obtain decision table data. Valid values are:CsvUploadMultipleSobjectsSingleSobject | Small, 58.0 | 58.0 |
| sourceconditionLogic | String | Custom logic for deciding how criteria on source is applied. | Small, 58.0 | 58.0 |
| status | String | Status of the decision table. Valid values are:ActivationInProgressActivationInProgressDraftInactive | Small, 58.0 | 58.0 |
| usageType | String | Process type that uses the decision table. Valid values are:PricingProductEligibility | Small, 58.0 | 58.0 |

## Related Topics

- Decision Table Parameter Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_parameter_output.htm)
- Decision Table Source Criteria Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_source_criteria_output.htm)
