---
title: "Assessment Links Input"
domain: omnistudio
topic: assessment-links-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.043Z
keywords: [Assessment, Links, Input]
---

# Assessment Links Input

# Assessment Links Input

Associated assessments including id, category, reason and sequence.

Root XML tag

<assessmentLinks>

JSON example

```

```

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| category | String | The category that the supporting content belongs to. | No | 63.0 |
| id | String | The assessment used as the supporting content. | Yes | 55.0 |
| reason | String | The reason why the supporting content is required. | No | 63.0 |
| sequence | String | The sequence number of the content when multiple contents are available. | No | 63.0 |