---
title: "UnifiedTaskParticipant"
domain: object-reference
topic: unifiedtaskparticipant
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.479Z
estimatedTokens: 487
keywords: [UnifiedTaskParticipant, participant, task, reports, dashboards, Winter, ’24, release, later, Calls, Special, Access, Rules]
---

# UnifiedTaskParticipant

> Represents a participant in a task. This object is available for
      reports and dashboards in the Winter ’24 release and later.

# UnifiedTaskParticipant

Represents a participant in a task. This object is available for reports and dashboards in the Winter ’24 release and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Starting in Summer ’25, this object isn’t available unless Activity 360 Reporting was enabled in your org in Spring ’25 or earlier. See Knowledge Article: [Einstein Activity Capture Activity 360 Reporting, Activity Metrics, Activities Dashboard Upcoming Retirement](https://help.salesforce.com/s/articleView?id=004633781&type=1&language=en_US)

## Supported Calls

describeSObjects(), query(), retrieve()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is available only for reporting. It isn’t supported for SOQL queries and APIs.

## Special Access Rules

Einstein Activity Capture and Activity 360 Reporting must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ActivityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the activity the person is participating in.This field is a relationship field.Relationship NameActivityRelationship TypeLookupRefers ToUnifiedTask |
| ChannelAddress | TypestringPropertiesFilter, NillableDescriptionUsername of the participant. The username is captured at the time of the communication; it doesn’t change if the contact’s username is updated later. |
| ParticipantType | TypepicklistPropertiesFilter, Nillable, Restricted picklistDescriptionThe participant’s role in the activity.Possible values are:AssignedToAttendeeBCCCCFromOptionalAttendeeOrganizerTo |
| PersonId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the contact, lead, or user participating in the activity.This field is a polymorphic relationship field.Relationship NamePersonRelationship TypeLookupRefers ToContact, Lead, User |
