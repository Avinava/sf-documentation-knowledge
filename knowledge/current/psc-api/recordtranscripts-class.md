---
title: "RecordTranscripts Class"
domain: psc-api
topic: recordtranscripts-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.493Z
estimatedTokens: 559
namespace: DataRetrieval
keywords: [RecordTranscripts, Stores, transcripts, interaction, session, record, messaging, voice, call, recordId]
---

# RecordTranscripts Class

> Stores the transcripts of a single interaction session record, such as a messaging
    session or a voice call.

**Namespace:** `DataRetrieval`

# RecordTranscripts Class

Stores the transcripts of a single interaction session record, such as a messaging session or a voice call.

## Namespace

[DataRetrieval](atlas.en-us.psc_api.meta/psc_api/apex_namespace_DataRetrieval.htm "The DataRetrieval namespace provides classes to store the record details and conversation transcripts between customers and agents.")

-   **[RecordTranscripts Constructors](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_RecordTranscripts.htm#apex_DataRetrieval_RecordTranscripts_constructors)**
    The RecordTranscripts class includes these constructors.

## RecordTranscripts Constructors

The RecordTranscripts class includes these constructors.

-   **[RecordTranscripts(transcripts, recordId)](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_RecordTranscripts.htm#apex_DataRetrieval_RecordTranscripts_ctor)**
    Creates an instance of the DataRetrieval.RecordTranscripts class by using the specified parameters to store the transcripts associated with an engagement record.
-   **[RecordTranscripts()](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_RecordTranscripts.htm#apex_DataRetrieval_RecordTranscripts_ctor_2)**
    Creates an instance of the DataRetrieval.RecordTranscripts class.

### RecordTranscripts(transcripts, recordId)

Creates an instance of the DataRetrieval.RecordTranscripts class by using the specified parameters to store the transcripts associated with an engagement record.

#### Signature

public RecordTranscripts(List<DataRetrieval.Transcript> transcripts, String recordId)

```

```

#### Parameters

transcripts

Type: [List<DataRetrieval.Transcript>](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_Transcript.htm#apex_class_DataRetrieval_Transcript "Stores the conversation between customers and agents in written format, specifying the roles of the participants and their messages.")

The transcripts from a single interaction session between a customer and an agent.

recordId

Type: String

ID of the interaction session record, such as a messaging session or a voice call.

### RecordTranscripts()

Creates an instance of the DataRetrieval.RecordTranscripts class.

#### Signature

public RecordTranscripts()

```

```

## Code Examples

```apex
DataRetrieval.RecordTranscripts, newinstance, [List<DataRetrieval.Transcript>, String], DataRetrieval.RecordTranscripts
```

```
DataRetrieval.RecordTranscripts, newinstance, [], DataRetrieval.RecordTranscripts
```

## Related Topics

- DataRetrieval (atlas.en-us.psc_api.meta/psc_api/apex_namespace_DataRetrieval.htm)
- RecordTranscripts Constructors (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_RecordTranscripts.htm)
- RecordTranscripts(transcripts, recordId) (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_RecordTranscripts.htm)
- RecordTranscripts() (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_RecordTranscripts.htm)
- List<DataRetrieval.Transcript> (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_Transcript.htm)
