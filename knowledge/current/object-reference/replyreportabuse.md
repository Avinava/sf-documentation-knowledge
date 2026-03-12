---
title: "ReplyReportAbuse"
domain: object-reference
topic: replyreportabuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.198Z
estimatedTokens: 216
keywords: [ReplyReportAbuse, user-reported, abuse, Reply, Chatter, Answers, zone, API, version, 24.0, later, Calls, Usage]
---

# ReplyReportAbuse

> Represents a user-reported abuse
        on a Reply in a Chatter Answers zone.
    This object is available in API version 24.0 and later.

# ReplyReportAbuse

Represents a user-reported abuse on a Reply in a Chatter Answers zone. This object is available in API version 24.0 and later.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Reply from which the user reported abuse. |
| Reason | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe reason the user reported abuse on the Reply, such as Spam, Hateful, or Inappropriate. |
| ReplyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Reply from which the user reported abuse. |

## Usage

Use this object to track user-reported abuse on replies created in a Chatter Answers zone.
