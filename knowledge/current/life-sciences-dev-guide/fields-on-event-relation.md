---
title: "Fields on Event Relation"
domain: life-sciences-dev-guide
topic: fields-on-event-relation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.065Z
estimatedTokens: 334
keywords: [Event, Relation, Life, Sciences, Cloud, extend, standard, represent, person, user, lead, contact, resource, conference, room]
---

# Fields on Event Relation

> Life Sciences Cloud fields extend the standard Event Relation object to
         represent a person (a user, lead, or contact) or a resource (such as a conference room)
         invited to an event.

# Fields on Event Relation

Life Sciences Cloud fields extend the standard Event Relation object to represent a person (a user, lead, or contact) or a resource (such as a conference room) invited to an event.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EventId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionContains the ID of the event. This value can’t be changed after it’s been specified.This is a relationship field.Relationship NameEventRelationship TypeLookupRefers ToEvent |
| RelationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionContains the ID of the person (User, Contact, or Lead) or the resource invited to an event. When Shared Activities is enabled, RelationId can also contain the ID of an account, opportunity, or other object related to an event.This value can’t be changed after it’s been specified.This is a polymorphic relationship field.Relationship NameRelationRelationship TypeLookupRefers ToCalendar, Contact, Lead, User |

#### See Also

-   [*Object Reference for the Salesforce Platform*: EventRelation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventattendee.htm)
