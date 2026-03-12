---
title: "DuplicateJobMatchingRuleDefinition"
domain: tooling-api
topic: duplicatejobmatchingruledefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.343Z
estimatedTokens: 157
keywords: [DuplicateJobMatchingRuleDefinition, Setup, specifying, MatchingRule, DuplicateJob, instances, share, DuplicateJobDefinition, Tooling, API, version, 42.0, later, SOAP, Calls]
---

# DuplicateJobMatchingRuleDefinition

> Setup object specifying a MatchingRule to
        use with DuplicateJob instances that share a DuplicateJobDefinition. Available in
            Tooling API version 42.0 and later.

# DuplicateJobMatchingRuleDefinition

Setup object specifying a MatchingRule to use with DuplicateJob instances that share a DuplicateJobDefinition. Available in Tooling API version 42.0 and later.

## Supported SOAP Calls

create(), query(), retrieve()

## Supported REST HTTP Methods

GET and POST

## Fields

| Field | Details |
| --- | --- |
| DuplicateJobDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the duplicate job definition. |
| MatchingRuleId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the matching rule specified for a duplicate job. |
