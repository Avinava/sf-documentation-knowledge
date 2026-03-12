---
title: "RecordTranscriptsList Class"
domain: omnistudio
topic: recordtranscriptslist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.593Z
estimatedTokens: 610
namespace: DataRetrieval
keywords: [RecordTranscriptsList, Stores, transcripts, multiple, interaction, sessions, customers, agents, conversations, conversationsTokens]
---

# RecordTranscriptsList Class

> Stores the transcripts from multiple interaction sessions between customers and
    agents.

**Namespace:** `DataRetrieval`

# RecordTranscriptsList Class

Stores the transcripts from multiple interaction sessions between customers and agents.

## Namespace

[DataRetrieval](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_DataRetrieval.htm "The DataRetrieval namespace provides classes to store the record details and conversation transcripts between customers and agents.")

-   **[RecordTranscriptsList Constructors](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordTranscriptsList.htm#apex_DataRetrieval_RecordTranscriptsList_constructors)**
    The RecordTranscriptsList class includes these constructors.

## RecordTranscriptsList Constructors

The RecordTranscriptsList class includes these constructors.

-   **[RecordTranscriptsList(conversations, conversationsTokens)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordTranscriptsList.htm#apex_DataRetrieval_RecordTranscriptsList_ctor)**
    Creates an instance of the DataRetrieval.RecordTranscriptsList class by using specified parameters to store the transcripts associated with engagement records.
-   **[RecordTranscriptsList()](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordTranscriptsList.htm#apex_DataRetrieval_RecordTranscriptsList_ctor_2)**
    Creates an instance of the DataRetrieval.RecordTranscriptsList class.

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

### RecordTranscriptsList()

Creates an instance of the DataRetrieval.RecordTranscriptsList class.

#### Signature

public RecordTranscriptsList()

```

```

## Code Examples

```apex
DataRetrieval.RecordTranscriptsList, newinstance, [List<DataRetrieval.RecordTranscripts>, Integer], DataRetrieval.RecordTranscriptsList
```

```
DataRetrieval.RecordTranscriptsList, newinstance, [], DataRetrieval.RecordTranscriptsList
```

## Related Topics

- DataRetrieval (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_DataRetrieval.htm)
- RecordTranscriptsList Constructors (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordTranscriptsList.htm)
- RecordTranscriptsList(conversations, conversationsTokens) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordTranscriptsList.htm)
- RecordTranscriptsList() (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordTranscriptsList.htm)
- List<DataRetrieval.RecordTranscripts> (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordTranscripts.htm)
