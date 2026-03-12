---
title: "EventRelation"
domain: object-reference
topic: eventrelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.813Z
estimatedTokens: 3074
keywords: [EventRelation, person, user, lead, contact, resource, conference, room, invited, event, lets, add, remove, invitees, API]
---

# EventRelation

> Represents a person (a user, lead,
                or contact) or a resource (such as a conference room) invited to an event. This
                object lets you add or remove invitees from an event and use the API to manage
                invitees’ responses to invitations. If Shared Activities is enabled,
                EventRelation can also represent other objects that are related to an event.
                EventRelation does not support triggers, workflow, or data validation
            rules.

# EventRelation

Represents a person (a user, lead, or contact) or a resource (such as a conference room) invited to an event. This object lets you add or remove invitees from an event and use the API to manage invitees’ responses to invitations. If Shared Activities is enabled, EventRelation can also represent other objects that are related to an event. EventRelation does not support triggers, workflow, or data validation rules.

EventRelation allows a variable number of relationships and handles deleted events differently, depending on whether Shared Activities is enabled.

A non-recurring event can have up to 1,000 invitees. A recurring event can have up to 100 invitees.

If Shared Activities Isn’t Enabled

-   EventRelation records only represent invitees (contacts, users, and resources).
-   An event can be related to one contact or lead.

If Shared Activities Is Enabled

-   EventRelation records can represent:
    -   Invitees (IsInvitee= is set to true)

        OR

    -   Related contacts or lead (IsParent is set to true)
-   An event can be related to up to 50 contacts or one lead. These people may or may not be invitees. The number of allowed invitees is not affected by the number of related contacts. If a contact or lead is also an invitee, there is one EventRelation record for that person with IsInvitee and IsParent are set to true.
-   An event can be related to a lead, contact, resource, account, or opportunity.
-   An event can be related to a custom object that has the HasActivities attribute set to true.
-   If you delete an event, then relations between the event and any specified contacts, leads, and other records are also deleted.
-   If you delete the EventRelation record representing a relation then the corresponding relation field may be cleared on the event.
-   If you delete the EventRelation record representing the WhoId on an event, then another Who, if any, from the event’s EventWhoIds field will be promoted to the WhoId.
-   If you restore a deleted event, relations between the event and any specified contacts, leads, and records are also restored. The WhoId, WhatId, and AccountId field values are recalculated using the field values on EventRelation.

Whether or not Shared Activities is enabled, an event can be related to one other kind of record, such as an account, an opportunity, or a custom object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

-   With API versions 26.0 and later, the EventRelation object replaces the EventAttendee object, and the EventAttendee object is no longer visible. You can still query the EventAttendee object using packages that support API versions 25.0 and earlier, or by using Apex.
-   An EventRelation object can’t be created for a child event.
-   EventRelation includes deactivated users.
-   In API versions 25.0 and earlier, you can’t use query(), delete(), or update() with events related to more than one contact.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionContains the Account ID of the relation. For information on IDs, see ID Field Type. AccountId is visible when Shared Activities is enabled. |
| EventId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionContains the ID of the event. This value can’t be changed after it’s been specified.This is a relationship field.Relationship NameEventRelationship TypeLookupRefers ToEvent |
| IsDeleted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsInvitee | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the relation is an invitee.IsInvitee is visible while Shared Activities is being enabled, after it has been enabled, and while it is being disabled.IsInvitee defaults to true while Shared Activities is being enabled, after it has been enabled, and while it is being disabled if IsInvitee, IsParent, and IsWhat are not set. This configuration ensures compatibility when Shared Activities isn’t enabled and EventRelation represents event invitees only.IsInvitee defaults to false when Shared Activities is enabled if IsParent is set to true. |
| IsParent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIsParent is visible only when Shared Activities is enabled. When false, indicates that the relation is an invitee (a contact, lead, or user). When true, indicates that the relation is a Who or What, as determined by IsWhat field. |
| IsWhat | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIsWhat is visible only when Shared Activities is enabled. The value is relevant only if IsParent is true. When IsWhat is true, the relation specified by RelationId is a What (an account, opportunity, custom object, etc.). When IsWhat is false, the relation specified by RelationId is a Who (a contact, lead, or user). |
| RelationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionContains the ID of the person (User, Contact, or Lead) or the resource invited to an event. When Shared Activities is enabled, RelationId can also contain the ID of an account, opportunity, or other object related to an event.This value can’t be changed after it’s been specified.This is a polymorphic relationship field.Relationship NameRelationRelationship TypeLookupRefers ToCalendar, Contact, Lead, User |
| RespondedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the most recent date and time when the invitee responded to an invitation to an event. |
| Response | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains optional text that the invitee can enter when responding to an invitation to an event. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the invitee status with one of the following values:New: Invitee has received the invitation but hasn’t yet responded. This value is the default.Declined: Invitee has declined the invitation.Accepted: Invitee has accepted the invitation.NoteUninvited and Maybe aren’t currently supported. |

## Usage

-   Invitee related lists display slightly different content. In the Salesforce mobile app, the invitee related list includes invitees only, whereas in the full site, it also includes the event owner. To reproduce the full site functionality in the Salesforce mobile app, use the following API queries.

    If you use Shared Activities in your Salesforce org, use this query:

    ```

    ```

    where Event\_Id is the child event’s ID.

    If you don’t use Shared Activities, use this query:

    ```

    ```

    These queries get the main event’s relations and display them for the given child event. To further filter the results, add a WHERE clause.


Assigning resource attendance status

You can add a resource to an event only when the resource is available. The only attendance status that can be assigned to resources is Accepted. Events can’t be saved when resources you’ve added aren’t available.

Create an invitee if Shared Activities is enabled (or during the process of enabling it or rolling back)

If the invitee is already a contact or lead, update IsInvitee to true.

If the invitee is not already a contact or lead, create an EventRelation object for the invitee with IsInvitee set to true.

Create an invitee if Shared Activities is not enabled

Create an EventRelation object for the invitee.

Insert a contact or lead relation

```

```

Determine what events a given invitee is attending

To determine all the events that a particular person is attending during a given time period (for example, next week), you can have a client application query the Event object for a given date range, iterate through the results, and, for each event, query the EventRelation object to determine whether the particular person (RelationId) has accepted an invitation to that event.

Insert an invitee relation

If isParent, isWhat and IsInvitee are not set, and RelationId is a contact, lead, user, or calendar, IsInvitee defaults to true. This means if an EventRelation isn’t specifically inserted as a relation to a contact or lead, it’s treated as an Invitee relation by default.

```

```

Query relations to a contact or a lead

```

```

Query invitee relations

```

```

Update an invitee relation to a contact or lead invitee relation

```

```

Update a contact or lead relation to a contact or lead invitee relation

```

```

Reproduce invitee related list functionality in the Salesforce mobile app

Invitee related lists display slightly different content in the Salesforce mobile app and the full site. In the app, the invitee related list includes invitees only, whereas in the full site, it also includes the event owner.

If you use Shared Activities in your Salesforce org, use the following query to reproduce the full site functionality in the Salesforce mobile app:

```

```

where Event\_Id is the child event’s ID.

If you don’t use Shared Activities, use this query:

```

```

These queries get the main event’s relations and display them for the given child event. To further filter the results, add a WHERE clause.

Send email notifications

To send email notifications for a given event, query EventRelation for the event, iterate through the list, examine the status, and send email notifications to every person who accepted the invitation.

Syncing Events with Lightning Sync

Attendee statuses (Accepted or Maybe, Declined, or No Response) sync from Microsoft® Exchange or Google to Salesforce, but not from Salesforce to Exchange or Google. Be wary of creating API flows that update attendee status in Salesforce for users set up to sync both ways. Eventually the original Exchange or Google status overrides the update made in Salesforce.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EventRelationChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

#### See Also

-   [Event](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_event.htm "Represents an event in the calendar. In the user interface, event and task records are collectively referred to as activities.")

-   [EventWhoRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventwhorelation.htm "Represents the relationship between an event and a lead or contacts. This derived object is a filtered version of the EventRelation object; that is, IsParent is true and IsWhat is false. It doesn’t represent relationships to invitees or to accounts, opportunities, or other objects. This object is available in API versions 29.0 and later.")

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Code Examples

```
SELECT RelationId FROM EventRelation WHERE isInvitee = true AND eventId='[Event_Id]'
```

```
SELECT RelationId FROM EventRelation WHERE eventId='[Event_Id]'
```

```
EventRelation er = new EventRelation(EventId = '00UD0000005zijH', 
    RelationId = '003D000000Q8aeV', isParent = true, isInvitee = false);
insert er;
```

```
EventRelation er = new EventRelation(EventId = '00UD0000005zijH', 
    RelationId = '003D000000Q8adV');
insert er;
```

```apex
List<EventRelation> whoRelations = [SELECT Id, Relation.Name FROM 
    EventRelation WHERE EventId = '00UD0000005zijD' AND isParent = true AND isWhat = false];
```

## Related Topics

- ID Field Type (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
- EventRelationChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- Event (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_event.htm)
- EventWhoRelation (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventwhorelation.htm)
- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
