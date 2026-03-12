---
title: "VideoCallInsight"
domain: object-reference
topic: videocallinsight
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.108Z
estimatedTokens: 993
keywords: [VideoCallInsight, video, call, insight, data, associated, record, specific, recording, transcript, API, version, 66.0, later, Calls]
---

# VideoCallInsight

> Represents the video call insight data associated with a video call. Each
         record represents the call insight of a specific recording or transcript within a
         call. This object is available in API version 66.0 and later.

# VideoCallInsight

Represents the video call insight data associated with a video call. Each record represents the call insight of a specific recording or transcript within a call. This object is available in API version 66.0 and later.

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
| EngagementInsightType | TypestringPropertiesFilter, Group, SortDescriptionRequired. The unique identifier of the platform setup entity that defines the configuration for this engagement insight type. |
| GenerationDateTime | TypedateTimePropertiesFilter, SortDescriptionRequired. The timestamp when the call insight was generated. |
| InsightConfigName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the insight configuration, or category, used to classify the insight. |
| InsightLanguage | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionRequired. The language associated with the insight type. Each insight type is currently limited to a single language. If the same insight type is mapped to a different language, a new insight type is created. |
| InsightModel | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The category of the insight type.Possible values are:GENERATIVE—GenerativeKEYWORD—KeywordSITUATIONAL—SituationalTIME_BASED—Time-BasedThe default value is KEYWORD. |
| InsightOccurenceCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times a particular insight occurred in the transcript. |
| InsightSubject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe specific text, phrase, or subject identified in the video call transcript that serves as the basis for the insight. |
| InsightText | TypetextareaPropertiesNillableDescriptionThe text content of the insight derived from the video call transcript. |
| Name | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe display name of the insight type. |
| Scope | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The scope of the insight type.Possible values are:OrganizationUserThe default value is Organization. |
| VideoCallId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. ID of the associated parent VideoCall.This field is a relationship field.Relationship NameVideoCallRelationship TypeMaster-detailRefers ToVideoCall (the master object) |
| VideoCallRecordingId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. ID of the associated parent VideoCallRecording.This field is a relationship field.Relationship NameVideoCallRecordingRefers ToVideoCallRecording |
| VideoCallTranscriptId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. ID of the associated VideoCallTranscript record.Relationship NameVideoCallTranscriptRefers ToVideoCallTranscript |
