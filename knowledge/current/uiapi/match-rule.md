---
title: "Match Rule"
domain: uiapi
topic: match-rule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.964Z
estimatedTokens: 233
keywords: [Match, Rule, how, duplicate, records, identified, rules, jobs, including, rule's, checks]
---

# Match Rule

> A match rule defines how duplicate records are identified in
      duplicate rules and duplicate jobs. Learn about one of the match rules for the specified
      object, including the match rule's name and the fields that the match rule checks.

# Match Rule

A match rule defines how duplicate records are identified in duplicate rules and duplicate jobs. Learn about one of the match rules for the specified object, including the match rule's name and the fields that the match rule checks.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| matchEngine | String | The type of matching used by the match rule. Possible values are:ExactMatchEngine—use exact matching rules to decide if the field values match.FuzzyMatchEngine—use fuzzy matching rules to decide if the field values match. | Small, 50.0 | 50.0 |
| matchFields | String[] | Fields that the match rule uses when checking for matching records. | Small, 50.0 | 50.0 |
| name | String | The name of the match rule. | Small, 50.0 | 50.0 |
| objectApiName | String | The API name of the object to which the match rule belongs. | Small, 50.0 | 50.0 |
