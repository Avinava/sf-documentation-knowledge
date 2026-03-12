---
title: "Duplicate Rule Filter Item"
domain: uiapi
topic: duplicate-rule-filter-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.789Z
estimatedTokens: 216
keywords: [Duplicate, Rule, Filter, Item, condition, specify, movies, were, produced, United, States]
---

# Duplicate Rule Filter Item

> A filter, or condition, for a duplicate rule. For example, a
      condition can specify that this rule applies only to movies that were produced in the United
      States.

# Duplicate Rule Filter Item

A filter, or condition, for a duplicate rule. For example, a condition can specify that this rule applies only to movies that were produced in the United States.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| field | String | The name of the field on which the condition is evaluated. | Small, 50.0 | 50.0 |
| operation | String | The condition operator. For example, equals or includes. | Small, 50.0 | 50.0 |
| sortOrder | Integer | Conditions are applied in the specified order. The order of the condition, starting with 1. | Small, 50.0 | 50.0 |
| value | String | The value of field that matches the condition. For example, to specify that a rule applies only to movies produced in the United States, set the value to United States. | Small, 50.0 | 50.0 |
