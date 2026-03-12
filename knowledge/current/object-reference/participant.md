---
title: "Participant"
domain: object-reference
topic: participant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.275Z
estimatedTokens: 341
keywords: [Participant, ConversationParticipant, new, referenced, time, created, API, version, 57.0, later, Calls]
---

# Participant

> Represents a participant in a ConversationParticipant. An existing or
         new Participant is referenced each time a new ConversationParticipant is created. This
      object is available in API version 57.0 and later.

# Participant

Represents a participant in a ConversationParticipant. An existing or new Participant is referenced each time a new ConversationParticipant is created. This object is available in API version 57.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is available for Einstein Conversation Insights customers whose data is stored natively on the Salesforce Platform. If you turned on Einstein Conversation Insights for the first time starting in Spring ’26, this object is available to query and access using Salesforce tools. For existing ECI customers, data migration and access to related Salesforce Platform objects is scheduled to begin in Summer ’26.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ParticipantAppType | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe type of app used by the participant, such as messaging, chatbot, live_message, agent. |
| ParticipantRole | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe role of this participant in the conversation, such as System, Agent, Chatbot, EndUser, Supervisor, or Router. |
| ParticipantSubject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe subject of this participant in the conversation. |
