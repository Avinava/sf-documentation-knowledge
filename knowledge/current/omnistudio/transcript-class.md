---
title: "Transcript Class"
domain: omnistudio
topic: transcript-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.563Z
estimatedTokens: 468
namespace: DataRetrieval
keywords: [Transcript, Stores, conversation, between, customers, agents, written, format, specifying, roles, participants, their, messages., role, message]
---

# Transcript Class

> Stores the conversation between customers and agents in written format, specifying the
    roles of the participants and their messages.

**Namespace:** `DataRetrieval`

# Transcript Class

Stores the conversation between customers and agents in written format, specifying the roles of the participants and their messages.

## Namespace

[DataRetrieval](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_DataRetrieval.htm "The DataRetrieval namespace provides classes to store the record details and conversation transcripts between customers and agents.")

-   **[Transcript Constructors](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Transcript.htm#apex_DataRetrieval_Transcript_constructors)**
    The Transcript class includes these constructors.

## Transcript Constructors

The Transcript class includes these constructors.

-   **[Transcript(role, message)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Transcript.htm#apex_DataRetrieval_Transcript_ctor_2)**
    Creates an instance of the DataRetrieval.Transcript class by using specified parameters to store the role and message of the participants associated with a transcript.
-   **[Transcript()](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Transcript.htm#apex_DataRetrieval_Transcript_ctor)**
    Creates an instance of the DataRetrieval.Transcript class.

### Transcript(role, message)

Creates an instance of the DataRetrieval.Transcript class by using specified parameters to store the role and message of the participants associated with a transcript.

#### Signature

public Transcript(String role, String message)

```

```

#### Parameters

role

Type: String

Role of the participant in the conversation.

message

Type: String

Message exchanged during the conversation between a customer and an agent.

### Transcript()

Creates an instance of the DataRetrieval.Transcript class.

#### Signature

public Transcript()

```

```

## Code Examples

```
DataRetrieval.Transcript, newinstance, [String, String], DataRetrieval.Transcript
```

```
DataRetrieval.Transcript, newinstance, [], DataRetrieval.Transcript
```

## Related Topics

- DataRetrieval (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_DataRetrieval.htm)
- Transcript Constructors (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Transcript.htm)
- Transcript(role, message) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Transcript.htm)
- Transcript() (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Transcript.htm)
