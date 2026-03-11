---
title: "Engagement Topic Create Input"
domain: omnistudio
topic: engagement-topic-create-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.244Z
keywords: [Engagement, Topic, Create, Input]
---

# Engagement Topic Create Input

# Engagement Topic Create Input

Input representation to create an engagement topic record.

Root XML tag

<engagementTopic>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| customFieldsList | Engagement Custom Fields Input[] | The custom fields and their values for engagement topics. | Optional | 56.0 |
| engagementInteractionId | String | The ID of the engagement interaction record associated with an engagement topic record. | Required | 55.0 |
| id | String | The ID of an engagement topic record. | Required | 55.0 |
| interactionSummary | String | The summary of the engagement interaction. | Optional | 55.0 |
| name | String | The name of the engagement topic record. | Required | 55.0 |
| ownerId | String | The Salesforce ID of the person who owns this engagement topic record. | Required | 55.0 |
| parentTopicId | String | The parent engagement topic record that’s associated with this engagement topic. | Optional | 55.0 |
| processFailureReason | String | The reason a process failed during an engagement interaction. | Optional | 55.0 |
| processName | String | The name of the process executed during an engagement interaction. | Optional | 55.0 |
| processStatus | String | The current status of a process that’s executed during the engagement interaction. Possible values are:CanceledCompletedFailedInitiated | Optional | 55.0 |
| processType | String | The type of the process executed during the engagement interaction. | Optional | 55.0 |
| relatedPersonId | String | The person for whom an engagement interaction was initiated. | Optional | 55.0 |
| topicId | String | The engagement topic record that’s associated with the parent engagement topic. | Optional | 55.0 |