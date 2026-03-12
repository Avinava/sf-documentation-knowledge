---
title: "DataRetrieval Namespace"
domain: omnistudio
topic: dataretrieval-namespace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:46.906Z
estimatedTokens: 824
namespace: DataRetrieval
keywords: [DataRetrieval, classes, store, record, conversation, transcripts, customers, agents]
---

# DataRetrieval Namespace

> The DataRetrieval namespace provides classes to store
    the record details and conversation transcripts between customers and agents.

**Namespace:** `DataRetrieval`

# DataRetrieval Namespace

The DataRetrieval namespace provides classes to store the record details and conversation transcripts between customers and agents.

The DataRetrieval namespace includes these classes.

-   **[Engagement Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Engagement.htm#apex_class_DataRetrieval_Engagement)**
    Stores the object name and ID of an engagement record. An engagement record represents an engagement interaction, a messaging session, or a voice call between a customer and an agent.
-   **[Engagements Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Engagements.htm#apex_class_DataRetrieval_Engagements)**
    Stores the a list of DataRetrieval.Engagement records.
-   **[EngagementRecordDetails Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_EngagementRecordDetails.htm#apex_class_DataRetrieval_EngagementRecordDetails)**
    Stores the details of the conversation between a customer and an agent, including engagement record ID, start time, end time, and conversation identifier.
-   **[EngagementRecordDetailsList Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_EngagementRecordDetailsList.htm#apex_class_DataRetrieval_EngagementRecordDetailsList)**
    Stores the DataRetrieval.EngagementRecordDetails records.
-   **[ObjectDetailsRepresentation Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_ObjectDetailsRepresentation.htm#apex_class_DataRetrieval_ObjectDetailsRepresentation)**
    Stores the details of an object and its associated records so that you can use the data for object summarization.
-   **[RecordDetailsRepresentation Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordDetailsRepresentation.htm#apex_class_DataRetrieval_RecordDetailsRepresentation)**
    Stores the details of an individual record, including its associated field data.
-   **[FieldDetailsRepresentation Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_FieldDetailsRepresentation.htm#apex_class_DataRetrieval_FieldDetailsRepresentation)**
    Stores the field names and their values associated with a record, which can later be used for various operations or data processing tasks.
-   **[RecordTranscripts Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordTranscripts.htm#apex_class_DataRetrieval_RecordTranscripts)**
    Stores the transcripts of a single interaction session record, such as a messaging session or a voice call.
-   **[RecordTranscriptsList Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordTranscriptsList.htm#apex_class_DataRetrieval_RecordTranscriptsList)**
    Stores the transcripts from multiple interaction sessions between customers and agents.
-   **[Transcript Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Transcript.htm#apex_class_DataRetrieval_Transcript)**
    Stores the conversation between customers and agents in written format, specifying the roles of the participants and their messages.

## Related Topics

- Engagement Class (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Engagement.htm)
- Engagements Class (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Engagements.htm)
- EngagementRecordDetails Class (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_EngagementRecordDetails.htm)
- EngagementRecordDetailsList Class (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_EngagementRecordDetailsList.htm)
- ObjectDetailsRepresentation Class (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_ObjectDetailsRepresentation.htm)
- RecordDetailsRepresentation Class (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordDetailsRepresentation.htm)
- FieldDetailsRepresentation Class (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_FieldDetailsRepresentation.htm)
- RecordTranscripts Class (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordTranscripts.htm)
- RecordTranscriptsList Class (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordTranscriptsList.htm)
- Transcript Class (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Transcript.htm)
