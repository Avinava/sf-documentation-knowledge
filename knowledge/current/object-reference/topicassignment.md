---
title: "TopicAssignment"
domain: object-reference
topic: topicassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.244Z
estimatedTokens: 1010
keywords: [TopicAssignment, assignment, topic, specific, feed, item, record, file, API, version, 28.0, later, Calls, Usage]
---

# TopicAssignment

> Represents the assignment of a topic to a specific feed item, record,
   or file. This object is available in API version
   28.0 and later.

# TopicAssignment

Represents the assignment of a topic to a specific feed item, record, or file. This object is available in API version 28.0 and later.

Administrators must enable topics for objects before users can add topics to records of that object type. Topics for most objects are available in API version 30.0 and later. Topics for ContentDocument are available in API version 37.0 and later.

## Supported Calls

create(), describeSObjects(), delete(), getDeleted(), getUpdate(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| EntityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionIdentifier of the feed item, record, or file.This is a polymorphic relationship field.Relationship NameEntityRelationship TypeLookupRefers ToAccount, Asset, Campaign, Case, Contact, ContentDocument, Contract, Event, FeedItem, Lead, Opportunity, Order, ProductItem, ProductItemTransaction, ProductRequest, ProductRequestLineItem, ProductRequired, ProductTransfer, ResourceAbsence, ResourcePreference, ReturnOrder, ReturnOrderLineItem, ServiceAppointment, ServiceResource, ServiceResourceSkill, ServiceTerritory, ServiceTerritoryMember, Shift, Shipment, Solution, Task, WorkOrder, WorkOrderLineItem |
| EntityKeyPrefix | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe first three digits of the EntityID field, which identify the object type (account, opportunity, etc). This read-only field is available in API version 32.0 and later.Interface label is “Record Key Prefix,” which appears only in reports. |
| EntityType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe standard name for the object type (account, opportunity, etc). This read-only field is available in API version 33.0 and later.NoteQuerying topic assignments for the ManagedContentVersion entity type isn’t supported.Interface label is “Object Type,” which appears only in reports.TipIn most cases, you should use this field rather than EntityKeyPrefix, which exists primarily to support older reports. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIdentifier of the community to which the TopicAssignment belongs. This field is available only if digital experiences is enabled in your org. |
| TopicId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionIdentifier of the topic.This is a relationship field.Relationship NameTopicRelationship TypeLookupRefers ToTopic |

## Usage

Use this object to query the assignments of topics to feed items, records, or files. To assign or remove topics, you must have the “Assign Topics” permission.

In SOQL SELECT syntax, this object supports nested semi-joins, allowing queries on Knowledge articles assigned to specific topics. For example:

```

```

There is no SOQL limit if the logged-in user has the “View All Data” permission. If they do have that permission, do one of the following:

-   Specify a LIMIT clause of 1,100 records or fewer.
-   Filter on Id or Entity when using a WHERE clause with "=".

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Deleting this object's records removes all its data. This action is irreversible.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When you create a report type on the TopicAssignment object, all queries are generated in SQL, which does not enforce the 1,100 record limit clause.

#### See Also

-   [Topic](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_topic.htm "Represents a topic on a Chatter post or record. This object is available in API version 28.0 and later.")

-   [FeedItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feeditem.htm "FeedItem represents an entry in the feed, such as changes in a record feed, including text posts, link posts, and content posts. This object is available in API version 21.0 and later. This object replaces FeedPost.")

## Code Examples

```
SELECT parentId FROM KnowledgeArticleViewStat
    WHERE parentId in (SELECT KnowledgeArticleId FROM KnowledgeArticleVersion
    WHERE publishStatus = 'Online' AND language = 'en_US'
    AND  Id in (select EntityId from TopicAssignment where TopicId ='0T0xx0000000xxx'))
```

## Related Topics

- Topic (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_topic.htm)
- FeedItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feeditem.htm)
