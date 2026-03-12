---
title: "Question"
domain: object-reference
topic: question
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.767Z
estimatedTokens: 1302
keywords: [Question, zone, users, view, reply, Calls, Special, Access, Rules, Usage]
---

# Question

> Represents a question in a zone that users can
    view and reply to.

# Question

Represents a question in a zone that users can view and reply to.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is only available if the Answers permission and AnswersEnabled preference or PortalFeed permission and PortalFeedEnabled preference are enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| BestReplyId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the reply that has been identified as the best answer to the question. Use the user interface to identify the best answer for a question. |
| BestReplySelectedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who selected the best answer to the question.This field is available in API version 24.0 and later. In API version 24.0 through version 29.0, you must update this field using the UI. In API version 30.0 and later, you can update this field using the API. |
| Body | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the question. |
| CommunityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe zone ID associated with the question. After you create a question, you can’t change the zone ID associated with that question. |
| CreatorFullPhotoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the user’s profile photo from the feed. Chatter Answers must be enabled to view this field. This field is available in API version 26.0 and later. |
| CreatorName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the user who posted the question or reply. Only the first name of internal users (agents) appears to portal users in the feed. Chatter Answers must be enabled to view this field. This field is available in API version 26.0 and later. |
| CreatorSmallPhotoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the user’s thumbnail photo from the feed. Chatter Answers must be enabled to view this field. This field is available in API version 26.0 and later. |
| HasSingleFieldForContent | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the content of a Chatter Answers question is:Included in only one field: Title if the content is unformatted and less than 255 characters; or Body if the content is formatted or more than 255 characters (true)Included in two fields: Title and Body (false)This field also determines if content displays in one or two fields in Chatter Answers question feeds.This field is available in API version 25.0 and later. |
| LastReferencedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastReplyDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the last reply (child Reply object) was posted. |
| LastReplyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRead only. The ID of the last reply (child Reply object) posted to the question. |
| LastViewedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MostReportAbusesOnReply | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe most number of user-reported abuses on a Reply associated with the question.This field is available in API version 24.0 and later. |
| NumReplies | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of replies (child Reply object) that users have submitted for the question. |
| NumReportAbuses | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRepresents the number of user-reported abuses on the question.This field is available in API version 24.0 and later. |
| NumSubscriptions | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRepresents the number of users following the question.This field is available in API version 24.0 and later. |
| Origin | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source of the question, such as Chatter Answers.This field is available in API version 24.0 and later. |
| Title | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe descriptive title of the question. |
| UpVotes | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of up votes for the question. |
| VoteScore | TypedoublePropertiesFilter, Nillable, SortDescriptionThe internal score of the question, used to sort questions and articles on the Popular tab in the application user interface. The internal algorithm that determines the score gives older votes less weight than newer votes, simulating exponential decay. The score itself doesn’t display in the application user interface.NoteUnlike other fields of type double, you can't use a SOQL aggregate function with this field. |

## Usage

Use this object to track questions in a zone.
