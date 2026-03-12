---
title: "Vote"
domain: object-reference
topic: vote
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.317Z
estimatedTokens: 913
keywords: [Vote, user, made, Knowledge, Article, Idea, Reply, Calls, Special, Access, Rules, Usage]
---

# Vote

> Represents a vote that a user has made on a Knowledge
    Article, Idea, or Reply.

# Vote

Represents a vote that a user has made on a Knowledge Article, Idea, or Reply.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

In API version 16.0 and earlier, SOQL queries on the Vote object only return votes for the Idea object. Starting in API version 17.0, SOQL queries return votes for both Idea and Reply.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this object.

Voting on Knowledge articles is available only when Knowledge is enabled.

## Fields

| Field | Details |
| --- | --- |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| LastModifiedById | TypereferencePropertiesDefaulted on create, Filter, Group, SortDescriptionID of the user most recently associated with this vote. |
| LastModifiedDate | TypedateTimePropertiesDefaulted on create, Filter, SortDescriptionThe datetime when this vote was last modified. |
| ParentId | TypereferencePropertiesGroup, Sort, Create, FilterDescriptionID of the Knowledge Article, Idea, or Reply associated with this vote.This is a polymorphic relationship field.Relationship NameParentRelationship TypeLookupRefers ToIdea, IdeaComment, KnowledgeArticle, Solution |
| Type | TypepicklistPropertiesGroup, Sort, Create, Filter, Restricted picklist, UpdateDescriptionPicklist that indicates the type of vote. The value Up indicates that the vote is a user's positive endorsement of the associated idea or reply. The value Down indicates that the vote is a user's negative endorsement of the associated idea or reply. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If you are importing Vote data into Salesforce and need to set the value for an audit field, such as CreatedDate, contact Salesforce. Audit fields are automatically updated during API operations unless you request to set these fields yourself..

## Usage

For Knowledge Articles, one vote record is inserted per user per Knowledge Article. Voting for another article version overrides the vote for the previous version.

In version 12.0 and later, use this object to track the votes that users made on ideas. For more information on ideas, see “Understand and Work with Ideas” in the Salesforce Help .

In version 17.0 and later, you must filter using the following syntax when querying this object in a SOQL query: ParentId = single ID, Parent.Type = single Type, Id = single ID, or Id IN (list of IDs). See Comparison Operators in the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)") for a sample query.

A SOQL query must filter using one of the following Parent or Id clauses.

-   ParentId = \[single ID\]
-   Parent.Type = \[single type\]
-   Id = \[single ID\]
-   Id IN = \[list of IDs\]

#### See Also

-   [Idea](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_idea.htm "Represents an idea on which users are allowed to comment and vote, for example, a suggestion for an enhancement to an existing product or process. This object is available in API version 12 and later.")

-   [IdeaComment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ideacomment.htm "Represents a comment that a user has submitted in response to an idea.")

## Related Topics

- Idea (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_idea.htm)
- IdeaComment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ideacomment.htm)
