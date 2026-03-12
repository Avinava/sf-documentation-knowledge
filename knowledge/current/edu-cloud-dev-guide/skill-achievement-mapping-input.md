---
title: "Skill Achievement Mapping Input"
domain: edu-cloud-dev-guide
topic: skill-achievement-mapping-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.851Z
estimatedTokens: 152
keywords: [Skill, Achievement, Mapping, Input, representation, that’s, associated, created, learning]
---

# Skill Achievement Mapping Input

> Input representation of a mapping that’s associated with an existing skill or must be
    created as a learning achievement.

# Skill Achievement Mapping Input

Input representation of a mapping that’s associated with an existing skill or must be created as a learning achievement.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the skill and the learning achievement. | Optional | 62.0 |
| learning​AchievementId | String | ID of the learning achievement that fulfills this skill achievement. | Optional | 62.0 |
| name | String | Name of the skill and the learning achievement. | Required | 62.0 |

## Code Examples

```
{
  "name": "Advanced Java Programming",
  "description": "Technical Skill in Java",
  "learningAchievementId": "0u9SG0000001mCdYAI"
}
```
