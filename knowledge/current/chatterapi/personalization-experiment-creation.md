---
title: "Personalization Experiment Creation"
domain: chatterapi
topic: personalization-experiment-creation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.235Z
estimatedTokens: 205
keywords: [Personalization, Experiment, Creation]
---

# Personalization Experiment Creation

> Create a personalization experiment.

# Personalization Experiment Creation

Create a personalization experiment.

Resource

```

```

Available version

65.0

HTTP method

POST

Request body

[Personalization Experiment Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_experiment_input.htm "Contains the details for creating a personalization experiment.")

Request parameters

| Parameter Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| action | Personalization Experiment Action Enum | Starts, stops, or archives the experiment. | Optional |

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
personalization/abn-experiments/?action=${action}
```

```
{
	"chanceToWinThreshold": 95,
    "cohorts": [
        {
            "allocationWeight": 5000,
            "attributeValues": [
                {
                    "attributeName": "Attr1",
                    "value": "1"
                }
            ],
            "isControl": true,
            "isFallThrough": false,
            "label": "Cohort 1 (Control)",
            "name": "cohort_1"
        },
        {
            "allocationWeight": 5000,
            "attributeValues": [
                {
                    "attributeName": "Attr1",
                    "value": "2"
                }
            ],
            "isControl": false,
            "isFallThrough": false,
            "label": "Cohort 2",
            "name": "cohort_2"
        }
    ],
    "dataSpaceName": "default",
    "description": null,
    "label": "testExp50",
    "maximumDurationInMinutes": 129600,
    "minimumDurationInMinutes": 20160,
    "minimumRequiredParticipants": 1000,
    "name": "testExp50",
    "parameters": [
        {
            "engagementSignalName": "Flow_Email_Click_3",
            "parameterName": "DeviceModel",
            "values": ["iPhone 16", "iPad Air", "iPad Mini"]
        },
        {
            "engagementSignalName": "Flow_Email_Click_3",
            "parameterName": "EmailsInFlowExp",
            "values": ["testEmail1", "testEmail1"]
        },
        {
            "engagementSignalName": "A_New_Flow_Email_Click_New",
            "parameterName": "EmailsInFlowExp2",
            "values": ["testEmail3", "testEmail3"]
        },
        {
            "engagementSignalName": "Flow_Email_Click_3",
            "parameterName": "OS",
            "values": ["iOS 26", "iOS 18"]
        }
    ],
    "primaryMetric": {
        "higherIsBetter": true,
        "metricName": "TwoCompound",
        "metricType": "EngagementSignalCompound"
    },
    "profileDataGraphName": "RTDG",
    "scheduleFrequencyInMinutes": 1440,
    "schemaName": "AResponseTemplate",
    "secondaryMetrics": [
        {
            "engagementSignalName": "Flow_Email_Click_3",
            "higherIsBetter": true,
            "metricName": "Count Indv_Flow_Email_Click_3",
            "metricType": "EngagementSignal"
        }
    ],
    "source": "FlowBuilder",
    "sourceRecordId": null,
    "winnerSelectionMode": "Manual"
}
```

```
{
	   "chanceToWinThreshold": 95,
    "cohorts": [
        {
            "allocationWeight": 5000,
            "attributeValues": [
                {
                    "attributeName": "Attr1",
                    "value": "1"
                }
            ],
            "isControl": true,
            "isFallThrough": false,
            "label": "Cohort 1 (Control)",
            "name": "cohort_1"
        },
        {
            "allocationWeight": 5000,
            "attributeValues": [
                {
                    "attributeName": "Attr1",
                    "value": "2"
                }
            ],
            "isControl": false,
            "isFallThrough": false,
            "label": "Cohort 2",
            "name": "cohort_2"
        }
    ],
    "dataSpaceName": "default",
    "description": null,
    "label": "testExp50",
    "maximumDurationInMinutes": 129600,
    "minimumDurationInMinutes": 20160,
    "minimumRequiredParticipants": 1000,
    "name": "testExp50",
    "parameters": [
        {
            "engagementSignalName": "Flow_Email_Click_3",
            "parameterName": "DeviceModel",
            "values": ["iPhone 16", "iPad Air", "iPad Mini"]
        },
        {
            "engagementSignalName": "Flow_Email_Click_3",
            "parameterName": "EmailsInFlowExp",
            "values": ["testEmail1", "testEmail1"]
        },
        {
            "engagementSignalName": "A_New_Flow_Email_Click_New",
            "parameterName": "EmailsInFlowExp2",
            "values": ["testEmail3", "testEmail3"]
        },
        {
            "engagementSignalName": "Flow_Email_Click_3",
            "parameterName": "OS",
            "values": ["iOS 26", "iOS 18"]
        }
    ],
    "primaryMetric": {
        "higherIsBetter": true,
        "metricName": "TwoCompound",
        "metricType": "EngagementSignalCompound"
    },
    "profileDataGraphName": "RTDG",
    "scheduleFrequencyInMinutes": 1440,
    "schemaName": "AResponseTemplate",
    "secondaryMetrics": [
        {
            "engagementSignalName": "Flow_Email_Click_3",
            "higherIsBetter": true,
            "metricName": "Count Indv_Flow_Email_Click_3",
            "metricType": "EngagementSignal"
        }
    ],
    "source": "FlowBuilder",
    "sourceRecordId": null,
    "winnerSelectionMode": "Manual",
state: "Created",
startedDate: null,
stoppedDate: null,
status: "Processing"
}
```

## Related Topics

- Personalization Experiment Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_experiment_input.htm)
- Personalization Experiment Action Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_action_enum.htm)
- Personalization Experiment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_experiment.htm)
