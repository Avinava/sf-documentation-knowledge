---
title: "ConvAnalysisTopicEntry"
domain: object-reference
topic: convanalysistopicentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.370Z
estimatedTokens: 405
keywords: [ConvAnalysisTopicEntry, entry, under, ConvAnalysisTopic, segment, video, voice, call, associated, conversation, analysis, topic, API, version, 63.0]
---

# ConvAnalysisTopicEntry

> Represents a single entry under the ConvAnalysisTopic object. An entry
         represents a segment of a video or voice call that is associated with a conversation
         analysis topic. This object is available in API version 63.0 and later.

# ConvAnalysisTopicEntry

Represents a single entry under the ConvAnalysisTopic object. An entry represents a segment of a video or voice call that is associated with a conversation analysis topic. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Users need the Sales Signals permission set and the Sales Signals feature must be enabled.

## Fields

| Field | Details |
| --- | --- |
| BulletGenerationsIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe generation ID used to track the LLM-generated response for feedback purposes. |
| CallId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe unique identifier of the voice or video call that corresponds to the entry.This field is a polymorphic relationship field.Relationship NameCallRefers ToVideoCall, VoiceCall |
| ConvAnalysisTopicId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The conversation analysis topic associated with the entry.This field is a relationship field.Relationship NameConvAnalysisTopicRelationship TypeMaster-detailRefers ToConvAnalysisTopic (the parent object) |
| SnippetStartTime | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp when the call is associated with the current topic entry. |
| Summary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe LLM-generated call summary that corresponds to the parent topic. |
