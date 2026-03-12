---
title: "ChatterAnswersReputationLevel"
domain: object-reference
topic: chatteranswersreputationlevel
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.495Z
estimatedTokens: 315
keywords: [ChatterAnswersReputationLevel, reputation, level, Chatter, Answers, zone, API, version, 26.0, later, Calls, Usage]
---

# ChatterAnswersReputationLevel

> Represents a reputation level
            within a Chatter Answers zone. 
      This object is available in API version 26.0 and later.

# ChatterAnswersReputationLevel

Represents a reputation level within a Chatter Answers zone. This object is available in API version 26.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but support and updates are scheduled to end. We recommend transitioning to Chatter Questions. For more information, see [End of Support for Chatter Answers in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18 "HTML (New Window)").

## Supported Calls

create(), delete(), query(), retrieve(), update()

## Fields

| Field | Details |
| --- | --- |
| CommunityID | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the zone for which you’re creating the reputation level. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the reputation level. |
| Value | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionMinimum number of points for this level. |

## Usage

Use to create or edit reputation levels for the zone.
