---
title: "FieldDetailsRepresentation Class"
domain: omnistudio
topic: fielddetailsrepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.578Z
estimatedTokens: 546
namespace: DataRetrieval
keywords: [FieldDetailsRepresentation, Stores, their, associated, record, later, various, operations, data, processing, tasks, fieldName, fieldValue]
---

# FieldDetailsRepresentation Class

> Stores the field names and their values associated with a record, which can later be used
    for various operations or data processing tasks.

**Namespace:** `DataRetrieval`

# FieldDetailsRepresentation Class

Stores the field names and their values associated with a record, which can later be used for various operations or data processing tasks.

## Namespace

[DataRetrieval](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_DataRetrieval.htm "The DataRetrieval namespace provides classes to store the record details and conversation transcripts between customers and agents.")

-   **[FieldDetailsRepresentation Constructors](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_FieldDetailsRepresentation.htm#apex_DataRetrieval_FieldDetailsRepresentation_constructors)**
    The FieldDetailsRepresentation class includes these constructors.

## FieldDetailsRepresentation Constructors

The FieldDetailsRepresentation class includes these constructors.

-   **[FieldDetailsRepresentation(fieldName, fieldValue)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_FieldDetailsRepresentation.htm#apex_DataRetrieval_FieldDetailsRepresentation_ctor)**
    Creates an instance of the DataRetrieval.FieldDetailsRepresentation class by using the given key-value pairs to store field names and their corresponding values.
-   **[FieldDetailsRepresentation()](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_FieldDetailsRepresentation.htm#apex_DataRetrieval_FieldDetailsRepresentation_ctor_2)**
    Creates an instance of the DataRetrieval.FieldDetailsRepresentation class.

### FieldDetailsRepresentation(fieldName, fieldValue)

Creates an instance of the DataRetrieval.FieldDetailsRepresentation class by using the given key-value pairs to store field names and their corresponding values.

#### Signature

public FieldDetailsRepresentation(String fieldName, String fieldValue)

```

```

#### Parameters

fieldName

Type: String

Name of the field associated with a record.

fieldValue

Type: String

Value of the fieldName parameter associated with a record.

### FieldDetailsRepresentation()

Creates an instance of the DataRetrieval.FieldDetailsRepresentation class.

#### Signature

public FieldDetailsRepresentation()

```

```

## Code Examples

```
DataRetrieval.FieldDetailsRepresentation, newinstance, [String, String], DataRetrieval.FieldDetailsRepresentation
```

```
DataRetrieval.FieldDetailsRepresentation, newinstance, [], DataRetrieval.FieldDetailsRepresentation
```

## Related Topics

- DataRetrieval (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_DataRetrieval.htm)
- FieldDetailsRepresentation Constructors (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_FieldDetailsRepresentation.htm)
- FieldDetailsRepresentation(fieldName, fieldValue) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_FieldDetailsRepresentation.htm)
- FieldDetailsRepresentation() (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_FieldDetailsRepresentation.htm)
