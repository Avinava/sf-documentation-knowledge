---
title: "IdeaComment"
domain: object-reference
topic: ideacomment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.128Z
estimatedTokens: 769
keywords: [IdeaComment, comment, user, submitted, idea, Calls, Usage]
---

# IdeaComment

> Represents a comment that a user has submitted
    in response to an idea.

# IdeaComment

Represents a comment that a user has submitted in response to an idea.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When performing a SOSL search on IdeaComment objects, Idea objects are also searched.

## Fields

| Field | Field Type |
| --- | --- |
| CommentBody | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBody of the submitted comment. |
| CommunityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe zone ID associated with the idea. Once you create an idea, you can’t change the zone ID associated with that idea.NoteAPI version 12 does not support zone ID. If you create an idea in version 12, your idea is automatically posted to the oldest zone that you have permission to access. |
| CreatorFullPhotoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the user’s profile photo. This field is available in API version 28.0 and later. |
| CreatorName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the user who posted the idea or commented on the idea. This field is available in API version 28.0 and later. |
| CreatorSmallPhotoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the user’s thumbnail photo. This field is available in API version 28.0 and later. |
| IdeaId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the idea on which this comment was made.This is a relationship field.Relationship NameIdeaRelationship TypeLookupRefers ToIdea |
| IsHtml | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead-only. If this value is true, your organization has the Ideas HTML editor enabled, and the CommentBody field may contain HTML. If this value is false, the HTML editor is disabled and the CommentBody field only contains regular text. |
| UpVotes | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of up votes for the question. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If you import these records, and need to set the value for an audit field, such as CreatedDate, contact Salesforce. Audit fields are automatically updated during API operations unless you request to set these fields yourself.

## Usage

Use this object to track comments on ideas, which are users' text responses to ideas.

#### See Also

-   [Idea](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_idea.htm "Represents an idea on which users are allowed to comment and vote, for example, a suggestion for an enhancement to an existing product or process. This object is available in API version 12 and later.")

-   [Vote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_vote.htm "Represents a vote that a user has made on a Knowledge Article, Idea, or Reply.")

## Related Topics

- Idea (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_idea.htm)
- Vote (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_vote.htm)
