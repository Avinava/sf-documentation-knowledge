---
title: "Personalization Experiment List"
domain: chatterapi
topic: personalization-experiment-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.242Z
estimatedTokens: 148
keywords: [Personalization, Experiment, specific]
---

# Personalization Experiment List

> Get information about a specific personalization experiment.

# Personalization Experiment List

Get information about a specific personalization experiment.

Resource

```

```

Available version

65.0

HTTP method

GET

Request parameters

| Parameter Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| IdOrName | String | The ID or API name of the experiment definition. | Required |

Response body

[Personalization Experiment](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_experiment.htm "Contains details of a personalization Experiment.")

## Example

Request:

```

```

Response:

```

```

## Code Examples

```
/personalization/abn-experiments/${IdOrName}
```

```
GET /personalization/abn-experiments/myDs_someExperimentApiName
```

```
{
	name: "myDs_someExperimentApiName",
	dataSpaceName: "dataSpaceApiName",
	cohorts: [
		{
	name: "myDs_someCohortApiName",
	description: "Cohort description",
	label: "My Cohort",
	isControl: true,
	allocationWeight: 10000
	attributeValues: [
		{
attributeEnum: "FlowPath",
value: "19o000000000001AAA" // InteractionExperimentPath
}
]
}
],
label: "My Experiment"
description: "Experiment description",
schemaEnum: "FlowPath",
source: "FlowBuilder",
state: "Created",
startedDate: null,
stoppedDate: null,
status: "Active"
}
```

## Related Topics

- Personalization Experiment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_experiment.htm)
