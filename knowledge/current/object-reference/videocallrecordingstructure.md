---
title: "VideoCallRecordingStructure"
domain: object-reference
topic: videocallrecordingstructure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.144Z
estimatedTokens: 692
keywords: [VideoCallRecordingStructure, structure, video, call, recording, having, relation, participant, speaking, order, start, offset, end, API, version]
---

# VideoCallRecordingStructure

> Represents the structure of a video call recording, having relation to a
         video call participant, speaking order, start offset, and end offset. This object is
      available in API version 65.0 and later.

# VideoCallRecordingStructure

Represents the structure of a video call recording, having relation to a video call participant, speaking order, start offset, and end offset. This object is available in API version 65.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is available for Einstein Conversation Insights customers whose data is stored natively on the Salesforce Platform. If you turned on Einstein Conversation Insights for the first time starting in Spring ’26, this object is available to query and access using Salesforce tools. For existing ECI customers, data migration and access to related Salesforce Platform objects is scheduled to begin in Summer ’26.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Einstein Conversation Insight must be enabled and the user requires the Conversation Insights for Sales permission set.

## Fields

| Field | Details |
| --- | --- |
| ListenRatio | TypedoublePropertiesFilter, SortDescriptionThe ratio of the time the speaker spent listening versus talking on the call. |
| Name | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the video call recording. |
| ParticipantSpeakingOrder | TypeintPropertiesFilter, Group, SortDescriptionThe sequence in which participants first spoke during the call. Only the initial speaking turn of each participant is captured. |
| TalkRatio | TypedoublePropertiesFilter, SortDescriptionThe ratio of the time that the speaker spent talking versus listening on the call. |
| TalkSegment | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe transcript of specific segments that the participant was speaking. |
| VideoCallId | TypereferencePropertiesFilter, Group, SortDescriptionID of the associated VideoCall.This field is a relationship field.Relationship NameVideoCallRelationship TypeMaster-detailRefers ToVideoCall (the master object) |
| VideoCallParticipantId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the associated VideoCallParticipant.This field is a relationship field.Relationship NameVideoCallParticipantRefers ToVideoCallParticipant |
| VideoCallRecordingId | TypereferencePropertiesFilter, Group, SortDescriptionID of the associated VideoCallRecording.This field is a relationship field.Relationship NameVideoCallRecordingRefers ToVideoCallRecording |
