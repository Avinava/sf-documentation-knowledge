---
title: "ObjectDetailsRepresentation Class"
domain: psc-api
topic: objectdetailsrepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.486Z
estimatedTokens: 567
namespace: DataRetrieval
keywords: [ObjectDetailsRepresentation, Stores, associated, records, data, summarization]
---

# ObjectDetailsRepresentation Class

> Stores the details of an object and its associated records so that you can use the data
    for object summarization.

**Namespace:** `DataRetrieval`

# ObjectDetailsRepresentation Class

Stores the details of an object and its associated records so that you can use the data for object summarization.

## Namespace

[DataRetrieval](atlas.en-us.psc_api.meta/psc_api/apex_namespace_DataRetrieval.htm "The DataRetrieval namespace provides classes to store the record details and conversation transcripts between customers and agents.")

-   **[ObjectDetailsRepresentation Constructors](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_ObjectDetailsRepresentation.htm#apex_DataRetrieval_ObjectDetailsRepresentation_constructors)**
    The ObjectDetailsRepresentation class includes these constructors.

## ObjectDetailsRepresentation Constructors

The ObjectDetailsRepresentation class includes these constructors.

-   **[ObjectDetailsRepresentation(records)](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_ObjectDetailsRepresentation.htm#apex_DataRetrieval_ObjectDetailsRepresentation_ctor)**
    Creates an instance of the DataRetrieval.ObjectDetailsRepresentation class by using the specified parameters to store the details of the records associated with an object.
-   **[ObjectDetailsRepresentation()](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_ObjectDetailsRepresentation.htm#apex_DataRetrieval_ObjectDetailsRepresentation_ctor_2)**
    Creates an instance of the DataRetrieval.ObjectDetailsRepresentation class.

### ObjectDetailsRepresentation(records)

Creates an instance of the DataRetrieval.ObjectDetailsRepresentation class by using the specified parameters to store the details of the records associated with an object.

#### Signature

public ObjectDetailsRepresentation(List<DataRetrieval.RecordDetailsRepresentation> records)

```

```

#### Parameters

records

Type: [List<DataRetrieval.RecordDetailsRepresentation>](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_RecordDetailsRepresentation.htm#apex_class_DataRetrieval_RecordDetailsRepresentation "Stores the details of an individual record, including its associated field data.")

The record details associated with an object.

### ObjectDetailsRepresentation()

Creates an instance of the DataRetrieval.ObjectDetailsRepresentation class.

#### Signature

public ObjectDetailsRepresentation()

```

```

## Code Examples

```apex
DataRetrieval.ObjectDetailsRepresentation, newinstance, [List<DataRetrieval.RecordDetailsRepresentation>], DataRetrieval.ObjectDetailsRepresentation
```

```
DataRetrieval.ObjectDetailsRepresentation, newinstance, [], DataRetrieval.ObjectDetailsRepresentation
```

## Related Topics

- DataRetrieval (atlas.en-us.psc_api.meta/psc_api/apex_namespace_DataRetrieval.htm)
- ObjectDetailsRepresentation Constructors (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_ObjectDetailsRepresentation.htm)
- ObjectDetailsRepresentation(records) (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_ObjectDetailsRepresentation.htm)
- ObjectDetailsRepresentation() (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_ObjectDetailsRepresentation.htm)
- List<DataRetrieval.RecordDetailsRepresentation> (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_RecordDetailsRepresentation.htm)
