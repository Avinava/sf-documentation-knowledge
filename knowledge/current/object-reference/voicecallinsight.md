---
title: "VoiceCallInsight"
domain: object-reference
topic: voicecallinsight
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.207Z
estimatedTokens: 979
keywords: [VoiceCallInsight, voice, call, insight, data, associated, record, specific, recording, transcript, API, version, 66.0, later, Calls]
---

# VoiceCallInsight

> Represents the voice call insight data associated with a voice call. Each
         record represents the call insight of a specific recording or transcript within a
         call. This object is available in API version 66.0 and later.

# VoiceCallInsight

Represents the voice call insight data associated with a voice call. Each record represents the call insight of a specific recording or transcript within a call. This object is available in API version 66.0 and later.

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
| InsightOccurrenceCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times a particular insight occurred in the transcript. |
| InsightSubject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe specific text, phrase, or subject identified in the voice call transcript that serves as the basis for the insight. |
| InsightText | TypetextareaPropertiesNillableDescriptionThe text content of the insight derived from the voice call transcript. |
| Name | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the insight type. |
| Scope | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The scope of the insight type.Possible values are:OrganizationUserThe default value is Organization. |
| VoiceCallId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. ID of the associated parent VoiceCall.This field is a relationship field.Relationship NameVoiceCallRelationship TypeMaster-detailRefers ToVoiceCall (the master object) |
| VoiceCallRecordingId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. ID of the associated parent VoiceCallRecording.This field is a relationship field.Relationship NameVoiceCallRecordingRefers ToVoiceCallRecording |
| VoiceCallTranscript | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRequired. ID of the voice call transcript record associated with this insight. |
