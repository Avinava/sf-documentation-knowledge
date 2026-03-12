---
title: "RecordDetailsRepresentation Class"
domain: omnistudio
topic: recorddetailsrepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.586Z
estimatedTokens: 606
namespace: DataRetrieval
keywords: [RecordDetailsRepresentation, Stores, individual, record, including, associated, data]
---

# RecordDetailsRepresentation Class

> Stores the details of an individual record, including its associated field
    data.

**Namespace:** `DataRetrieval`

# RecordDetailsRepresentation Class

Stores the details of an individual record, including its associated field data.

## Namespace

[DataRetrieval](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_DataRetrieval.htm "The DataRetrieval namespace provides classes to store the record details and conversation transcripts between customers and agents.")

-   **[RecordDetailsRepresentation Constructors](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordDetailsRepresentation.htm#apex_DataRetrieval_RecordDetailsRepresentation_constructors)**
    The RecordDetailsRepresentation class includes these constructors.

## RecordDetailsRepresentation Constructors

The RecordDetailsRepresentation class includes these constructors.

-   **[RecordDetailsRepresentation(fields)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordDetailsRepresentation.htm#apex_DataRetrieval_RecordDetailsRepresentation_ctor)**
    Creates an instance of the DataRetrieval.RecordDetailsRepresentation class by using specified parameters to store the data of the fields associated with a record.
-   **[RecordDetailsRepresentation()](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordDetailsRepresentation.htm#apex_DataRetrieval_RecordDetailsRepresentation_ctor_2)**
    Creates an instance of the DataRetrieval.RecordDetailsRepresentation class.

### RecordDetailsRepresentation(fields)

Creates an instance of the DataRetrieval.RecordDetailsRepresentation class by using specified parameters to store the data of the fields associated with a record.

#### Signature

public RecordDetailsRepresentation(List<DataRetrieval.FieldDetailsRepresentation> fields)

```

```

#### Parameters

fields

Type: List<[DataRetrieval.FieldDetailsRepresentation](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_FieldDetailsRepresentation.htm#apex_class_DataRetrieval_FieldDetailsRepresentation "Stores the field names and their values associated with a record, which can later be used for various operations or data processing tasks.")\>

List of field names and their corresponding values in key-value pairs.

### RecordDetailsRepresentation()

Creates an instance of the DataRetrieval.RecordDetailsRepresentation class.

#### Signature

public RecordDetailsRepresentation()

```

```

## Code Examples

```apex
DataRetrieval.RecordDetailsRepresentation, newinstance, [List<DataRetrieval.FieldDetailsRepresentation>], DataRetrieval.RecordDetailsRepresentation
```

```
DataRetrieval.RecordDetailsRepresentation, newinstance, [], DataRetrieval.RecordDetailsRepresentation
```

## Related Topics

- DataRetrieval (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_DataRetrieval.htm)
- RecordDetailsRepresentation Constructors (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordDetailsRepresentation.htm)
- RecordDetailsRepresentation(fields) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordDetailsRepresentation.htm)
- RecordDetailsRepresentation() (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_RecordDetailsRepresentation.htm)
- DataRetrieval.FieldDetailsRepresentation (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_FieldDetailsRepresentation.htm)
