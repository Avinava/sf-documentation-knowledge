---
title: "VoiceCallInsightReason"
domain: object-reference
topic: voicecallinsightreason
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.218Z
estimatedTokens: 537
keywords: [VoiceCallInsightReason, voice, call, insight, reason, keyword, moments, associated, number, occurrences, API, version, 66.0, later, Calls]
---

# VoiceCallInsightReason

> Represents the voice call insight reason that contains the insight keyword,
         insight moments associated with a keyword, and the number of keyword occurrences. This
      object is available in API version 66.0 and later.

# VoiceCallInsightReason

Represents the voice call insight reason that contains the insight keyword, insight moments associated with a keyword, and the number of keyword occurrences. This object is available in API version 66.0 and later.

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
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the insight reason. |
| OccurrenceInfo | TypestringPropertiesFilter, Nillable, SortDescriptionThe number of times the given keyword was mentioned in the call. |
| OccurrenceSnippet | TypetextareaPropertiesNillableDescriptionThe specific excerpt from the voice call transcript that helped generate the insight. Reserved for future use. |
| VoiceCallInsightId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. ID of the VoiceCallInsight data associated with a voice call. Each record represents the call insight of a specific recording or transcript within a call.This field is a relationship field.Relationship NameVoiceCallInsightRelationship TypeMaster-detailRefers ToVoiceCallInsight (the master object) |
