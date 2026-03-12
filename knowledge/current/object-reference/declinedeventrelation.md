---
title: "DeclinedEventRelation"
domain: object-reference
topic: declinedeventrelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.124Z
estimatedTokens: 447
keywords: [DeclinedEventRelation, event, participants, invitees, attendees, status, Declined, API, versions, 29.0, later, Calls, Usage]
---

# DeclinedEventRelation

> Represents event participants (invitees or attendees) with the status Declined for a given
		event. This object is available in API versions 29.0 and later.

# DeclinedEventRelation

Represents event participants (invitees or attendees) with the status Declined for a given event. This object is available in API versions 29.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| EventId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the ID of the event.This is a relationship field.Relationship NameEventRelationship TypeLookupRefers ToEvent |
| RelationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the ID of the invitee.This is a polymorphic relationship field.Relationship NameRelationRelationship TypeLookupRefers ToCalendar, Contact, Lead, User |
| RespondedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates the most recent date and time when the invitee declined an invitation to the event. |
| Response | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIndicates the content of the response field. Label is Comment. |
| Type | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIndicates whether the invitee is a user, lead or contact, or resource. |

## Usage

Query invitees who have declined an invitation to an event

```

```

#### See Also

-   [AcceptedEventRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_acceptedeventrelation.htm "Represents event participants (invitees or attendees) with the status Accepted for a given event.")

-   [UndecidedEventRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_undecidedeventrelation.htm "Represents event participants (invitees or attendees) with the status Not Responded for a given event. This object is available in API versions 29.0 and later.")

## Code Examples

```
SELECT eventId, type, response FROM DeclinedEventRelation WHERE eventid='00UTD000000ZH5LA'
```

## Related Topics

- AcceptedEventRelation (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_acceptedeventrelation.htm)
- UndecidedEventRelation (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_undecidedeventrelation.htm)
