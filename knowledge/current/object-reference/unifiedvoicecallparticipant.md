---
title: "UnifiedVoiceCallParticipant"
domain: object-reference
topic: unifiedvoicecallparticipant
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.505Z
estimatedTokens: 537
keywords: [UnifiedVoiceCallParticipant, participant, voice, call, reports, dashboards, Winter, ’24, release, later, Calls, Special, Access, Rules]
---

# UnifiedVoiceCallParticipant

> Represents a participant in a voice call. This object is available for
      reports and dashboards in the Winter ’24 release and later.

# UnifiedVoiceCallParticipant

Represents a participant in a voice call. This object is available for reports and dashboards in the Winter ’24 release and later.

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
| ActivityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the voice call the person is participating in.This field is a relationship field.Relationship NameActivityRelationship TypeLookupRefers ToUnifiedVoiceCall |
| ChannelAddress | TypestringPropertiesFilter, NillableDescriptionThe phone number of the participant. The phone number is captured at the time of the communication; it doesn’t change if the contact’s phone number is updated later. |
| ListenRatio | TypedoublePropertiesFilter, NillableDescriptionRatio of time the participant was listening versus talking in the voice call. |
| ParticipantType | TypepicklistPropertiesFilter, Nillable, Restricted picklistDescriptionThe participant’s role in the activity.Possible values are:AssignedToAttendeeBCCCCFromOptionalAttendeeOrganizerTo |
| PersonId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the person participating in the voice call.This field is a polymorphic relationship field.Relationship NamePersonRelationship TypeLookupRefers ToContact, Lead, User |
| TalkRatio | TypedoublePropertiesFilter, NillableDescriptionRatio of time the participant was talking versus listening in the voice call. |
