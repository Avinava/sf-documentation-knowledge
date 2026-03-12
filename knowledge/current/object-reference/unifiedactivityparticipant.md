---
title: "UnifiedActivityParticipant"
domain: object-reference
topic: unifiedactivityparticipant
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.434Z
estimatedTokens: 552
keywords: [UnifiedActivityParticipant, participant, activity, voice, call, someone, initiated, received, call.This, reports, dashboards, Winter, ’24, release, later]
---

# UnifiedActivityParticipant

> Represents a participant in an activity. For example, a participant
         in a voice call is someone who initiated the call or someone who received the
      call.This object is available for reports and dashboards in the Winter ’24 release and
      later.

# UnifiedActivityParticipant

Represents a participant in an activity. For example, a participant in a voice call is someone who initiated the call or someone who received the call.This object is available for reports and dashboards in the Winter ’24 release and later.

## Supported Calls

describeSObjects(), query(), retrieve()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is available only for reporting. It isn’t supported for SOQL queries and APIs.

## Special Access Rules

We’re retiring Einstein Activity Capture Activity 360 Reporting. Starting in Summer ’25, this object isn’t available with Einstein Activity Capture unless Activity 360 Reporting was enabled in your org in Spring ’25 or earlier. See Knowledge Article: [Einstein Activity Capture Activity 360 Reporting, Activity Metrics, Activities Dashboard Upcoming Retirement](https://help.salesforce.com/s/articleView?id=004633781&type=1&language=en_US)

## Fields

| Field | Details |
| --- | --- |
| ActivityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the activity that the person participated in.This field is a polymorphic relationship field.Relationship NameActivityRelationship TypeLookupRefers ToUnifiedActivity, UnifiedEmail, UnifiedMeeting, UnifiedTask, UnifiedVideoCall, UnifiedVoiceCall |
| ChannelAddress | TypestringPropertiesFilter, NillableDescriptionThe channel-specific address used to identify the participant in an external communication. For example, an email address in an email or a phone number in a voice call. The value is captured at the time of the communication; it doesn’t change if the contact’s email address or phone number is updated later. |
| ParticipantType | TypepicklistPropertiesFilter, Nillable, Restricted picklistDescriptionThe role of the participant in the activity.Possible values are:AssignedToAttendeeBCCCCFromOptionalAttendeeOrganizerTo |
| PersonId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the person who participated in the activity.This field is a polymorphic relationship field.Relationship NamePersonRelationship TypeLookupRefers ToContact, Lead, User |
