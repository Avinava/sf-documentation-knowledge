---
title: "EngagementRecordDetails(recordId, conversationIdentifier, startDateTime, endDateTime)"
domain: omnistudio
topic: engagementrecorddetailsrecordid-conversationidentifier-startdatetime-enddatetime
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.661Z
keywords: [EngagementRecordDetails, recordId, conversationIdentifier, startDateTime, endDateTime, Creates, instance, DataRetrieval.EngagementRecordDetails, class, store, engagement, record, conversation, start, date, end, associated, between, customer, agent.]
---

# EngagementRecordDetails(recordId, conversationIdentifier, startDateTime, endDateTime)

> Creates an instance of the DataRetrieval.EngagementRecordDetails class to store the ID of the engagement
    record, conversation ID, start date, and end date associated with a conversation between a
    customer and an agent.

### EngagementRecordDetails(recordId, conversationIdentifier, startDateTime, endDateTime)

Creates an instance of the DataRetrieval.EngagementRecordDetails class to store the ID of the engagement record, conversation ID, start date, and end date associated with a conversation between a customer and an agent.

#### Signature

public EngagementRecordDetails(String recordId, String conversationIdentifier, Datetime startDateTime, Datetime endDateTime)

```

```

#### Parameters

recordId

Type: String

ID of the engagement record that's associated with the interaction between a customer and an agent.

conversationIdentifier

Type: String

Unique identifier of a conversation session between a customer and an agent.

startDateTime

Type: Datetime

Date and time the conversation started.

endDateTime

Type: Datetime

Date and time the conversation ended.