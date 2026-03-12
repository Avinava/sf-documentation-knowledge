---
title: "SalesAIScoreCycle"
domain: object-reference
topic: salesaiscorecycle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.425Z
estimatedTokens: 324
keywords: [SalesAIScoreCycle, cycle, score, records, API, version, 47.0, later, Calls, Special, Access, Rules]
---

# SalesAIScoreCycle

> Represents the cycle type and ID used to score records. This object is
    available in API version 47.0 and later.

# SalesAIScoreCycle

Represents the cycle type and ID used to score records. This object is available in API version 47.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

To see score cycle information, users need a Sales Cloud Einstein license with the View Scoring Model Factors permission enabled. The permission isn’t enabled by default. As of the Spring ’20 release, Pardot and Sales Engagement users no longer have access to this object.

## Fields

| Field | Details |
| --- | --- |
| CycleType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe cycle used to create scores on opportunity records can be one of two types.OpportunityScoreModeling—Provides model factors, which Sales Cloud Einstein uses to build a scoring model.OpportunityScoreScoring—Provides scores and key factors to individual records, which are based on Sales Cloud Einstein’s scoring model.NoteWhen the value OpportunityScoreModeling is returned, use the Sales AI Score Model Factor object to get information about the model factors. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the cycle. Currently, the name is a system-generated unique value. |
