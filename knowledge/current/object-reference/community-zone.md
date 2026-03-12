---
title: "Community (Zone)"
domain: object-reference
topic: community-zone
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.721Z
estimatedTokens: 491
keywords: [Community, Zone, Idea, Question, objects, Calls, Usage]
---

# Community (Zone)

> Represents a zone that contains Idea or Question
    objects.

# Community (Zone)

Represents a zone that contains Idea or Question objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Starting with the Summer ’13 release, Chatter Answers and Ideas communities were renamed to zones. In API version 28, the API object label has changed to Zone, but the API type is still Community.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CanCreateCase | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether users can ask private questions in the zone using Chatter Answers. |
| DataCategoryName | TypestringPropertiesFilter, Nillable, Group, SortDescriptionThe data category associated with the zone. |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionText description of the zone. |
| HasChatterService | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether Chatter Answers is available in the zone. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the zone is active or inactive. An idea or question can only be posted to an active zone. |
| IsPublished | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the zone is available in portals. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the zone. |
| NetworkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the Experience Cloud site that this zone is associated with. This field is available only if digital experiences is enabled in your org. This field is available in API version 66.0 and later. |

## Usage

Use this object to create a zone in Ideas, Chatter Answers, or Answers. Zones help organize ideas and questions into logical groups and are shared by the Ideas, Answers, and Chatter Answers.
