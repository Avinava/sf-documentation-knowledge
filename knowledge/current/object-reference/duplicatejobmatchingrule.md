---
title: "DuplicateJobMatchingRule"
domain: object-reference
topic: duplicatejobmatchingrule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.270Z
estimatedTokens: 310
keywords: [DuplicateJobMatchingRule, MatchingRule, DuplicateJob, sharing, corresponding, DuplicateJobMatchingRuleDefinition, Calls, Special, Access, Rules]
---

# DuplicateJobMatchingRule

> Represents a MatchingRule to be used with a DuplicateJob sharing the
   corresponding DuplicateJobMatchingRuleDefinition.

# DuplicateJobMatchingRule

Represents a MatchingRule to be used with a DuplicateJob sharing the corresponding DuplicateJobMatchingRuleDefinition.

This object is available in API versions 42.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

As of Summer ’20 and later, only users with the View Setup and Configuration permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| DuplicateJobId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the corresponding DuplicateJob. |
| DuplicateJobMatchRuleDefId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the matching rule defined for the corresponding DuplicateJobMatchingRuleDefinition. |
| MatchingRuleBooleanFilter | TypetextareaPropertiesFilter, SortDescriptionBoolean logic of the MatchingRule for this DuplicateJobMatchingRule. |
| MatchingRuleDescription | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionDescription of the matching rule for this DuplicateJobMatchingRule. |
| MatchingRuleName | TypestringPropertiesFilter, Group, SortDescriptionThe name of the matching rule defined for this particular DuplicateJob invocation. |
