---
title: "DuplicateJobMatchingRuleDefinition"
domain: tooling-api
topic: duplicatejobmatchingruledefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.645Z
keywords: [DuplicateJobMatchingRuleDefinition, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# DuplicateJobMatchingRuleDefinition

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