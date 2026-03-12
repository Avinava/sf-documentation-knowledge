---
title: "ContextParamMap"
domain: object-reference
topic: contextparammap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.273Z
estimatedTokens: 183
keywords: [ContextParamMap, context, data, Conversation, ConversationParticipant, API, version, 57.0, later, Calls]
---

# ContextParamMap

> Represents optional context data for a Conversation or a
         ConversationParticipant. This object is available in API version 57.0 and later.

# ContextParamMap

Represents optional context data for a Conversation or a ConversationParticipant. This object is available in API version 57.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ContextEntityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Conversation or ConversationParticipant record.This field is a polymorphic relationship field.Relationship TypeLookupRefers ToConversation, ConversationParticipant |
| MapKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe key for the context data. |
| MapValue | TypestringPropertiesFilter, Nillable, SortDescriptionThe value for the context data. |
