---
title: "EngagementRecordDetails Class"
domain: psc-api
topic: engagementrecorddetails-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.471Z
estimatedTokens: 697
namespace: DataRetrieval
keywords: [EngagementRecordDetails, Stores, conversation, customer, agent, including, engagement, record, start, time, end, identifier, recordId, conversationIdentifier, startDateTime]
---

# EngagementRecordDetails Class

> Stores the details of the conversation between a customer and an agent, including
    engagement record ID, start time, end time, and conversation identifier.

**Namespace:** `DataRetrieval`

# EngagementRecordDetails Class

Stores the details of the conversation between a customer and an agent, including engagement record ID, start time, end time, and conversation identifier.

## Namespace

[DataRetrieval](atlas.en-us.psc_api.meta/psc_api/apex_namespace_DataRetrieval.htm "The DataRetrieval namespace provides classes to store the record details and conversation transcripts between customers and agents.")

-   **[EngagementRecordDetails Constructors](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetails.htm#apex_DataRetrieval_EngagementRecordDetails_constructors)**
    Use the EngagementRecordDetails constructor to initialize the EngagementRecordDetails class that stores the details of the conversation between a customer and an agent.

## EngagementRecordDetails Constructors

Use the EngagementRecordDetails constructor to initialize the EngagementRecordDetails class that stores the details of the conversation between a customer and an agent.

The EngagementRecordDetails class includes these constructors.

-   **[EngagementRecordDetails(recordId, conversationIdentifier, startDateTime, endDateTime)](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetails.htm#apex_DataRetrieval_EngagementRecordDetails_ctor)**
    Creates an instance of the DataRetrieval.EngagementRecordDetails class to store the ID of the engagement record, conversation ID, start date, and end date associated with a conversation between a customer and an agent.
-   **[EngagementRecordDetails()](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetails.htm#apex_DataRetrieval_EngagementRecordDetails_ctor_2)**
    Creates an instance of the DataRetrieval.EngagementRecordDetails class.

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

### EngagementRecordDetails()

Creates an instance of the DataRetrieval.EngagementRecordDetails class.

#### Signature

public EngagementRecordDetails()

```

```

## Code Examples

```
DataRetrieval.EngagementRecordDetails, newinstance, [String, String, Datetime, Datetime], DataRetrieval.EngagementRecordDetails
```

```
DataRetrieval.EngagementRecordDetails, newinstance, [], DataRetrieval.EngagementRecordDetails
```

## Related Topics

- DataRetrieval (atlas.en-us.psc_api.meta/psc_api/apex_namespace_DataRetrieval.htm)
- EngagementRecordDetails Constructors (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetails.htm)
- EngagementRecordDetails(recordId, conversationIdentifier, startDateTime, endDateTime) (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetails.htm)
- EngagementRecordDetails() (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetails.htm)
