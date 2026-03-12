---
title: "Idea"
domain: object-reference
topic: idea
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.115Z
estimatedTokens: 2056
keywords: [Idea, users, allowed, comment, vote, suggestion, enhancement, product, process, API, version, later, Calls, Usage]
---

# Idea

> Represents an idea on which users are allowed to
        comment and vote, for example, a suggestion for an enhancement to an existing product or
        process.
    This object is available in API version 12 and later.

# Idea

Represents an idea on which users are allowed to comment and vote, for example, a suggestion for an enhancement to an existing product or process. This object is available in API version 12 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

For other standard objects, the describeLayout() call returns the recordTypeMappings section that contains the layout ID and picklist values for each record type. However, the recordTypeMappings section and the fields it includes are not available for the Idea object.

When performing a SOSL search on Idea objects, IdeaComment objects are also searched.

## Fields

| Field | Details |
| --- | --- |
| AttachmentBody | Typebase64PropertiesCreate, Nillable, UpdateDescriptionFile data for the attachment. This field is available in API version 28.0 and later. |
| AttachmentContentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of the attachment. This field is available in API version 28.0 and later. |
| AttachmentLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionSize of the attachment in bytes. This field is available in API version 28.0 and later. |
| AttachmentName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the attachment. This field is available in API version 28.0 and later. |
| Body | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the Idea. |
| Categories | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionCustomizable multi-select picklist used to organize Ideas into logical groupings.NoteThis field is only available if your organization has the Categories field enabled. This field is enabled by default in organizations created after API version 14 was released. If the Categories field is enabled, API versions 13 and earlier do not have access to either the Categories or Category fields. |
| Category | TypepicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionCustomizable picklist of values used to organize Ideas into logical groupings.NoteThis field is not available if your organization has the multi-select Categories field enabled. |
| CommunityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe zone ID associated with the idea. Once you create an idea, you can’t change the zone ID associated with that idea.NoteAPI version 12 does not support zone ID. If you create an idea in version 12, your idea is automatically posted to the oldest zone that you have permission to access.This is a relationship field.Relationship NameCommunityRelationship TypeLookupRefers ToCommunity |
| CreatorFullPhotoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the user’s profile photo. This field is available in API version 28.0 and later. |
| CreatorName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the user who posted the idea or commented on the idea.This field is available in API version 28.0 and later. |
| CreatorSmallPhotoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the user’s thumbnail photo. This field is available in API version 28.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| IdeaThemeID | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the idea theme associated with the idea. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsHtml | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead-only. If this value is true, your organization has the Ideas HTML editor enabled, and the Idea Body may contain HTML. If this value is false, the HTML editor is disabled and the Idea Body only contains regular text. |
| IsMerged | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead only. Indicates whether the idea has been merged with a parent idea (true) or not (false). You can’t vote for or add comments to a merged idea.NoteIn API version 27, IsMerged replaces IsLocked. Existing formula fields that use IsLocked must be edited to use IsMerged. |
| LastCommentDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the last comment (child IdeaComment object) was added. |
| LastCommentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRead only. The ID of the last comment (child IdeaComment object).This is a relationship field.Relationship NameLastCommentRelationship TypeLookupRefers ToIdeaComment |
| LastReferencedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| NumComments | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe number of comments (child IdeaComment objects) that users have submitted for the given idea. |
| ParentIdeaId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID associated with this idea's parent idea. When multiple ideas are merged together, one idea becomes the parent (master) of the other ideas. The ParentIdeaId is automatically set when you merge ideas.This is a relationship field.Relationship NameParentIdeaRelationship TypeLookupRefers ToIdea |
| RecordTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the record type assigned to this object.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCustomizable picklist of values used to specify the status of an idea. |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe descriptive title of the idea. |
| VoteScore | TypedoublePropertiesFilter, Nillable, SortDescriptionThe internal score of the Idea, used to sort Ideas on the Popular tab in the application user interface. The internal algorithm that determines the score gives older votes less weight than newer votes, simulating exponential decay. The score itself does not display in the application user interface.NoteUnlike other fields of type double, you can't use a SOQL aggregate function with this field. |
| VoteTotal | TypedoublePropertiesFilter, Nillable, SortDescriptionAn Idea's total number of points. Each vote a user makes is worth ten points, therefore the value of this field is ten times the number of votes an idea has received.NoteUnlike other fields of type double, you can't use a SOQL aggregate function with this field. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If you are importing Idea data and need to set the value for an audit field, such as CreatedDate, contact Salesforce. Audit fields are automatically updated during API operations unless you request to set these fields yourself..

## Usage

Use this object to track ideas, which are written suggestions on which users can vote and comment.

#### See Also

-   [IdeaComment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ideacomment.htm "Represents a comment that a user has submitted in response to an idea.")

-   [Vote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_vote.htm "Represents a vote that a user has made on a Knowledge Article, Idea, or Reply.")

## Related Topics

- IdeaComment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ideacomment.htm)
- Vote (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_vote.htm)
