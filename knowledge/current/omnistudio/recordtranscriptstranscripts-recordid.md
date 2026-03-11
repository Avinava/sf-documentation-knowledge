---
title: "RecordTranscripts(transcripts, recordId)"
domain: omnistudio
topic: recordtranscriptstranscripts-recordid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.680Z
keywords: [RecordTranscripts, transcripts, recordId, Creates, instance, DataRetrieval.RecordTranscripts, class, specified, parameters, store, associated, engagement, record., Signature, Parameters]
---

# RecordTranscripts(transcripts, recordId)

> Creates an instance of the DataRetrieval.RecordTranscripts class by using the specified parameters to store the
    transcripts associated with an engagement record.

### RecordTranscripts(transcripts, recordId)

Creates an instance of the DataRetrieval.RecordTranscripts class by using the specified parameters to store the transcripts associated with an engagement record.

#### Signature

public RecordTranscripts(List<DataRetrieval.Transcript> transcripts, String recordId)

```

```

#### Parameters

transcripts

Type: [List<DataRetrieval.Transcript>](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Transcript.htm#apex_class_DataRetrieval_Transcript "Stores the conversation between customers and agents in written format, specifying the roles of the participants and their messages.")

The transcripts from a single interaction session between a customer and an agent.

recordId

Type: String

ID of the interaction session record, such as a messaging session or a voice call.