---
title: "RecordTranscriptsList(conversations,
    conversationsTokens)"
domain: omnistudio
topic: recordtranscriptslistconversations-conversationstokens
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.684Z
keywords: [RecordTranscriptsList, conversations, conversationsTokens, Creates, instance, DataRetrieval.RecordTranscriptsList, class, specified, parameters, store, transcripts, associated, engagement, records., Signature, Parameters]
---

# RecordTranscriptsList(conversations,
    conversationsTokens)

> Creates an instance of the DataRetrieval.RecordTranscriptsList class by using specified parameters to store the
    transcripts associated with engagement records.

### RecordTranscriptsList(conversations, conversationsTokens)

Creates an instance of the DataRetrieval.RecordTranscriptsList class by using specified parameters to store the transcripts associated with engagement records.

#### Signature

public RecordTranscriptsList(List<DataRetrieval.RecordTranscripts> conversations, Integer conversationsTokens)

```

```

#### Parameters

conversations

Type: [List<DataRetrieval.RecordTranscripts>](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordTranscripts.htm#apex_class_DataRetrieval_RecordTranscripts "Stores the transcripts of a single interaction session record, such as a messaging session or a voice call.")

List of transcripts from multiple interaction sessions between customers and agents.

conversationsTokens

Type: Integer

Number of tokens of conversation transcripts.