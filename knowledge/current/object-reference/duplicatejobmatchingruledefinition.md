---
title: "DuplicateJobMatchingRuleDefinition"
domain: object-reference
topic: duplicatejobmatchingruledefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.275Z
estimatedTokens: 273
keywords: [DuplicateJobMatchingRuleDefinition, Setup, specifying, MatchingRule, DuplicateJob, instances, share, DuplicateJobDefinition, Calls, Special, Access, Rules]
---

# DuplicateJobMatchingRuleDefinition

> Setup object specifying a MatchingRule to use with DuplicateJob
   instances that share a DuplicateJobDefinition.

# DuplicateJobMatchingRuleDefinition

Setup object specifying a MatchingRule to use with DuplicateJob instances that share a DuplicateJobDefinition.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This object is available in API versions 42.0 and later.

## Supported Calls

describeSObjects(), query(), search()

## Special Access Rules

As of Summer ’20 and later, only users with the View Setup and Configuration permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| DuplicateJobDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionID of DuplicateJobDefinition (master) for this DuplicateJobMatchingRuleDefinition (detail). |
| MatchingRuleId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the MatchingRule to be used with this DuplicateJobMatchingRuleDefinition. |
