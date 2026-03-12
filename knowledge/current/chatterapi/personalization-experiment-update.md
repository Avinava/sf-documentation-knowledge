---
title: "Personalization Experiment Update"
domain: chatterapi
topic: personalization-experiment-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.246Z
estimatedTokens: 225
keywords: [Personalization, Experiment]
---

# Personalization Experiment Update

> Update a personalization experiment.

# Personalization Experiment Update

Update a personalization experiment.

Resource

```

```

Available version

65.0

HTTP method

PATCH

Request body

[Personalization Experiment Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_experiment_input.htm "Contains the details for creating a personalization experiment.")

Request parameters

| Parameter Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| IdOrName | String | The ID or API name of the experiment definition. | Required |
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
/personalization/abn-experiments/${IdOrName}?action=${action}
```

```
{
    "label": "newExperimentLabel",
    "description": "new description"
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
                    "attributeEnum": null,
                    "attributeName": "Attr1",
                    "value": "1"
                }
            ],
            "createdById": "005SB000002HvvEYAS",
            "createdDate": "2025-04-01T14:23:03.000Z",
            "id": "1GcSB000000032j0AA",
            "isControl": true,
            "isFallThrough": false,
            "label": "Cohort 1 (Control)",
            "name": "cohort_1"
        },
        {
            "allocationWeight": 5000,
            "attributeValues": [
                {
                    "attributeEnum": null,
                    "attributeName": "Attr1",
                    "value": "2"
                }
            ],
            "createdById": "005SB000002HvvEYAS",
            "createdDate": "2025-04-01T14:23:03.000Z",
            "id": "1GcSB000000032k0AA",
            "isControl": false,
            "isFallThrough": false,
            "label": "Cohort 2",
            "name": "cohort_2"
        }
    ],
    "createdById": "005SB000002HvvEYAS",
    "createdDate": "2025-04-01T14:23:02.000Z",
    "dataSpaceName": "default",
    "description": "new description",
    "id": "1GaSB00000Cojr30AB",
    "isRemote": false,
    "label": "newExperimentLabel",
    "lastAnalyzed": null,
    "lastModifiedById": "005SB000002HsR5YAK",
    "lastModifiedDate": "2026-01-07T14:55:21.000Z",
    "maximumDurationInMinutes": 129600,
    "minimumDurationInMinutes": 20160,
    "minimumRequiredParticipants": 1000,
    "name": "testExp50",
    "parameters": [
        {
            "engagementSignalName": "Flow_Email_Click_3",
            "parameterName": "DeviceModel",
            "values": [
                "iPhone 16",
                "iPad Air",
                "iPad Mini"
            ]
        },
        {
            "engagementSignalName": "Flow_Email_Click_3",
            "parameterName": "EmailsInFlowExp",
            "values": [
                "testEmail1",
                "testEmail1"
            ]
        },
        {
            "engagementSignalName": "A_New_Flow_Email_Click_New",
            "parameterName": "EmailsInFlowExp2",
            "values": [
                "testEmail3",
                "testEmail3"
            ]
        },
        {
            "engagementSignalName": "Flow_Email_Click_3",
            "parameterName": "OS",
            "values": [
                "iOS 26",
                "iOS 18"
            ]
        }
    ],
    "primaryMetrics": [
        {
            "higherIsBetter": true,
            "metricName": "TwoCompound",
            "metricType": "EngagementSignalCompound",
            "overallScoreWeight": 10000
        }
    ],
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
    "startedDate": "2025-06-17T01:46:53.000Z",
    "state": "Started",
    "status": "Active",
    "stoppedDate": null,
    "url": "/services/data/v65.0/personalization/abn-experiments/1GaSB00000Cojr30AB",
    "winnerSelectionMode": "Manual"
}
```

## Related Topics

- Personalization Experiment Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_experiment_input.htm)
- Personalization Experiment Action Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_action_enum.htm)
- Personalization Experiment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_experiment.htm)
