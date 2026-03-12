---
title: "Reply"
domain: object-reference
topic: reply
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.185Z
estimatedTokens: 582
keywords: [Reply, user, submitted, question, answers, zone, Calls, Usage]
---

# Reply

> Represents a reply that a user has submitted to a
    question in an answers zone.

# Reply

Represents a reply that a user has submitted to a question in an answers zone.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Body | TypetextareaPropertiesCreate, UpdateDescriptionBody of this reply. |
| CommunityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe zone ID associated with the question and its reply. This field is available in API version 27.0 and later. |
| CreatorFullPhotoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the user’s profile photo from the feed. Chatter Answers must be enabled to view this field. This field is available in API version 26.0 and later. |
| CreatorName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the user who posted the question or reply. Only the first name of internal users (agents) appears to portal users in the feed. Chatter Answers must be enabled to view this field. This field is available in API version 26.0 and later |
| CreatorSmallPhotoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the user’s thumbnail photo from the feed. Chatter Answers must be enabled to view this field. This field is available in API version 26.0 and later. |
| DownVotes | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of down votes for a reply. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionWhen creating a Reply, the Name field is automatically populated with a truncated, plain text version of the Reply Body field. |
| NumReportAbuses | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRepresents the number of reported abuses on the reply by users.This field is available in API version 24.0 and later. |
| QuestionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the Question to which this reply was made. |
| UpVotes | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of up votes for a reply. |
| VoteTotal | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total number of all votes for a reply, including up and down votes. |

## Usage

Use this object to track replies to a Question.
