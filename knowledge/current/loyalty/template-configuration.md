---
title: "Template Configuration"
domain: loyalty
topic: template-configuration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.676Z
estimatedTokens: 275
keywords: [Template, Configuration, Output, representation]
---

# Template Configuration

> Output representation of the template configuration.

# Template Configuration

Output representation of the template configuration.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| eventConfiguration | List<Map<String, Object>> | Criteria that decides when customers are eligible for the rewards of the promotion rule. | Small, 60.0 | 60.0 |
| journalSubType | String | Journal sub-type of the rule in the promotion. | Small, 60.0 | 60.0 |
| journalSubTypeName | String | Journal sub-type name of the rule in the promotion. | Small, 64.0 | 64.0 |
| journalType | String | Journal type of the rule in the promotion. | Small, 60.0 | 60.0 |
| priority | Integer | Priority number of the rule in the promotion. | Small, 60.0 | 60.0 |
| rewardConfiguration | List<Map<String, Object>> | Rewards that members get when their activity is meet rule's eligibility criteria. | Small, 60.0 | 60.0 |
| ruleName | String | Name of the promotion rule. | Small, 60.0 | 60.0 |
| templateName | String | Name of the unified promotion template that's used in a promotion rule. | Small, 60.0 | 60.0 |
