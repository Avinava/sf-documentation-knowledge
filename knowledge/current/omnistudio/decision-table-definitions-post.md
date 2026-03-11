---
title: "Decision Table Definitions (POST)"
domain: omnistudio
topic: decision-table-definitions-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.763Z
keywords: [Decision, Table, Definitions, POST]
---

# Decision Table Definitions (POST)

# Decision Table Definitions (POST)

Create a decision table definition. A decision table definition contains all the details required to create a decision table.

Resource

```

```

Resource Example

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

POST

JSON example for a single object source

```

```

JSON example for a multi-object source

```

```

Request body for POST

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| collectOperator | String | Operator to apply a filter to outputs. Valid values are:CountMaximumMinimumNoneSum | Optional | 58.0 |
| condition​Criteria | String | Custom logic applied on the decision table columns to decide how the input fields are processed. | OptionalRequired when the condition type is Custom. | 58.0 |
| conditionType | String | Condition logic for input fields. Valid values are:AllAnyCustom | Optional | 58.0 |
| description | String | Description of the decision table. | Optional | 58.0 |
| decision​Result​Policy | String | Results policy to filter results of the decision table. Valid values are:AnyValueCollectOperator—For internal use onlyFirstMatchOutputOrderPriority—For internal use onlyRuleOrder—For internal use onlyUniqueValues—For internal use only | Optional | 58.0 |
| doesConsider​NullValue | Boolean | Indicates whether a column that has a null value is considered for lookup (true) or not (false). The default value is false. | Optional | 60.0 |
| fullName | String | Unique name of the rule definition. | Required | 58.0 |
| isSet​Collect​Operator | Boolean | For internal use only.Indicates whether the collectOperator is enabled (true) or not (false). | Optional | 58.0 |
| isSet​Condition​Criteria | Boolean | For internal use only.Indicates whether the conditionCriteria field is enabled (true) or not (false). | Optional | 58.0 |
| isSet​Condition​Type | Boolean | For internal use only.Indicates whether the conditionType field is enabled (true) or not (false). | Optional | 58.0 |
| isSet​Description | Boolean | For internal use only.Indicates whether the description field is enabled (true) or not (false). | Optional | 58.0 |
| isSet​Decision​ResultPolicy | Boolean | For internal use only.Indicates whether the DecisionResultPolicy field is enabled (true) or not (false). | Optional | 58.0 |
| isSetFullName | Boolean | For internal use only.Indicates whether the FullName field is enabled (true) or not (false). | Optional | 58.0 |
| isSetParameters | Boolean | For internal use only. Indicates whether the parameters field is enabled (true) or not (false). | Optional | 58.0 |
| isSetSetupName | Boolean | For internal use only.Indicates whether the setupName field is enabled (true) or not (false). | Optional | 58.0 |
| isSet​Source​conditionLogic | Boolean | For internal use only.Indicates whether the sourceConditionLogic field is enabled (true) or not (false). | Optional | 58.0 |
| isSet​Source​Criteria | Boolean | For internal use only.Indicates whether the sourceCriteria field is enabled (true) or not (false). | Optional | 58.0 |
| isSet​Source​Object | Boolean | For internal use only.Indicates whether the sourceObject field is enabled (true) or not (false). | Optional | 58.0 |
| isSet​Source​Type | Boolean | For internal use only.Indicates whether the sourceType is enabled (true) or not (false). | Optional | 58.0 |
| isSetType | Boolean | For internal use only.Indicates whether the type field is enabled (true) or not (false). | Optional | 58.0 |
| isSetUsageType | Boolean | For internal use only.Indicates whether the UsageType field is enabled (true) or not (false). | Optional | 58.0 |
| parameters | Decision Table Parameter Input[] | Array of input and output fields for the decision table. | Optional | 58.0 |
| setupName | String | Name of the decision table. | Required | 58.0 |
| source​condition​Logic | String | Custom logic to filter the decision table rows. | Optional | 58.0 |
| sourceCriteria | Decision Table Source Criteria Input[] | Output array representation of source filters for the decision table rows, such as, fieldName, operators, valueType, and more. | Optional | 58.0 |
| sourceObject | String | Object containing business rules for the decision table to read. | Required | 58.0 |
| sourceType | String | Type of source to obtain decision table data. Valid values are:CsvUploadMultipleSobjectsSingleSobject | Required | 58.0 |
| status | String | Status of the decision table. Valid values are:ActivationInProgressActivationInProgressDraftInactive | Required | 58.0 |
| type | String | Type of the decision table. Valid values are:HighVolumeLowVolume | Optional | 58.0 |
| usageType | String | Process type that uses the decision table. Valid values are:PricingProductEligibility | Optional | 58.0 |

Response body for POST

[Decision Table Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_output.htm "Output representation of the decision table details.")