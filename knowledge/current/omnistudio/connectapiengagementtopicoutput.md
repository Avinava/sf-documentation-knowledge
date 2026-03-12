---
title: "ConnectApi.EngagementTopicOutput"
domain: omnistudio
topic: connectapiengagementtopicoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:47.774Z
estimatedTokens: 307
keywords: [ConnectApi.EngagementTopicOutput, Output, representation, create, engagement, topic, record.]
---

# ConnectApi.EngagementTopicOutput

> Output representation to create an engagement topic
    record.

# ConnectApi.EngagementTopicOutput

Output representation to create an engagement topic record.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| customFields | List<ConnectApi.EngagementCustomFieldsOutput> | The list of custom fields. | 56.0 |
| engagementInteractionId | String | The ID of the associated engagement interaction record. | 55.0 |
| id | String | The engagement topic record ID. | 55.0 |
| interactionSummary | String | The interaction summary of the EngagementTopic. | 56.0 |
| name | String | The engagement topic record name. | 55.0 |
| ownerId | String | The Salesforce ID of the person who owns the engagement topic record. | 55.0 |
| parentTopicId | String | The parent engagement topic record ID. | 55.0 |
| processFailureReason | String | The process failure reason. | 55.0 |
| processName | String | The name of the process executed during an engagement interaction. | 55.0 |
| processStatus | String | The process status. | 55.0 |
| processType | String | The process type. | 55.0 |
| relatedPersonId | String | The related person ID. | 55.0 |
| topicId | String | The engagement topic record ID that’s associated with the parent engagement topic record. | 55.0 |

## Related Topics

- ConnectApi.EngagementCustomFieldsOutput (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_custom_field_output.htm)
