---
title: "QueueSobject"
domain: object-reference
topic: queuesobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.804Z
estimatedTokens: 418
keywords: [QueueSobject, mapping, queue, Group, associated, including, custom, objects, Calls, Special, Access, Rules, Usage]
---

# QueueSobject

> Represents the mapping between a queue Group and the  types associated
      with the queue, including custom objects.

# QueueSobject

Represents the mapping between a queue Group and the types associated with the queue, including custom objects.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this object.

A queue is a Group whose Type is Queue. To create a Group, you must have the Manage Users permission.

## Fields

| Field | Details |
| --- | --- |
| QueueId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of a queue.This field is a relationship field.Relationship NameQueueRelationship TypeLookupRefers ToGroup |
| SobjectType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionA list of object types that can be associated with the queue specified by the QueueId. |

## Usage

Use this object to associate a queue with the sObject that can be associated with the queue, including custom objects.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=object_reference)

#### Warning

You can't update or insert more than 18 queues at once when using the Bulk API.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
