---
title: "QuestionReportAbuse"
domain: object-reference
topic: questionreportabuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.776Z
estimatedTokens: 221
keywords: [QuestionReportAbuse, user-reported, abuse, Question, Chatter, Answers, zone, API, version, 24.0, later, Calls, Usage]
---

# QuestionReportAbuse

> Represents a user-reported abuse
        on a Question in a Chatter Answers zone.
    This object is available in API version 24.0 and later.

# QuestionReportAbuse

Represents a user-reported abuse on a Question in a Chatter Answers zone. This object is available in API version 24.0 and later.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Question from which the user reported abuse. |
| QuestionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Question from which the user reported abuse. |
| Reason | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe reason the user reported abuse on the Question, such as Spam, Hateful, or Inappropriate. |

## Usage

Use this object to track user-reported abuse on questions created in a Chatter Answers zone.
