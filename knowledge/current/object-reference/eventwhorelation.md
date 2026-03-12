---
title: "EventWhoRelation"
domain: object-reference
topic: eventwhorelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.814Z
estimatedTokens: 638
keywords: [EventWhoRelation, relationship, event, lead, contacts, derived, filtered, version, EventRelation, IsParent, IsWhat, doesn’t, represent, relationships, invitees]
---

# EventWhoRelation

> Represents the relationship between
    an event and a lead or contacts. This derived object is a filtered version of the EventRelation object; that is, IsParent is true and IsWhat is
     false. It doesn’t represent relationships to invitees or to
    accounts, opportunities, or other objects.
  This object is available in API versions 29.0 and later.

# EventWhoRelation

Represents the relationship between an event and a lead or contacts. This derived object is a filtered version of the [EventRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventattendee.htm "Represents a person (a user, lead, or contact) or a resource (such as a conference room) invited to an event. This object lets you add or remove invitees from an event and use the API to manage invitees’ responses to invitations. If Shared Activities is enabled, EventRelation can also represent other objects that are related to an event. EventRelation does not support triggers, workflow, or data validation rules.") object; that is, IsParent is true and IsWhat is false. It doesn’t represent relationships to invitees or to accounts, opportunities, or other objects. This object is available in API versions 29.0 and later.

EventWhoRelation allows a variable number of relationships: one lead or up to 50 contacts. Available only if you’ve enabled Shared Activities for your organization.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

EventWhoRelation objects aren’t created for child events.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| EventId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the ID of the event. |
| RelationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the ID of the contacts or lead related to the event. |
| Type | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIndicates whether the person related to the event is a contact or lead. |

## Usage

Apex example that queries relations to a contact or lead

```

```

#### See Also

-   [Event](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_event.htm "Represents an event in the calendar. In the user interface, event and task records are collectively referred to as activities.")

-   [EventRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventattendee.htm "Represents a person (a user, lead, or contact) or a resource (such as a conference room) invited to an event. This object lets you add or remove invitees from an event and use the API to manage invitees’ responses to invitations. If Shared Activities is enabled, EventRelation can also represent other objects that are related to an event. EventRelation does not support triggers, workflow, or data validation rules.")

## Code Examples

```apex
List<EventWhoRelation> whoRelations = [SELECT Id, Relation.Name FROM 
EventWhoRelation WHERE EventId = '00UD0000005zijD'];
```

## Related Topics

- EventRelation (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventattendee.htm)
- Event (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_event.htm)
