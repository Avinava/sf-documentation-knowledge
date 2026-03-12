---
title: "RecordApexRepresentation Class"
domain: apex-reference
topic: recordapexrepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.506Z
estimatedTokens: 2003
keywords: [RecordApexRepresentation, Contains, create, serializable, representation, record, its, associated, data, service, integration, processing., objectType, recordData, relatedRecordData, toRecordApexRep, jsonString, toString]
---

# RecordApexRepresentation Class

> Contains properties and a method to create a serializable representation of a record and
    its associated data for AI service integration and data processing.

# RecordApexRepresentation Class

Contains properties and a method to create a serializable representation of a record and its associated data for AI service integration and data processing.

## Namespace

[embeddedai](atlas.en-us.apexref.meta/apexref/apex_namespace_embeddedai.htm "The embeddedai namespace provides classes and methods to manage and represent records and data in Apex to support embedded AI features.")

-   **[RecordApexRepresentation Constructors](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm#apex_embeddedai_RecordApexRepresentation_constructors)**
    Learn more about the constructors available with the RecordApexRepresentation class.
-   **[RecordApexRepresentation Properties](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm#apex_embeddedai_RecordApexRepresentation_properties)**

-   **[RecordApexRepresentation Methods](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm#apex_embeddedai_RecordApexRepresentation_methods)**
    Create detailed, hierarchical record objects and convert them to a custom JSON string for structured AI input.

## RecordApexRepresentation Constructors

Learn more about the constructors available with the RecordApexRepresentation class.

The RecordApexRepresentation class includes these constructors.

-   **[RecordApexRepresentation(objectType, recordData, relatedRecordData)](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm#apex_embeddedai_RecordApexRepresentation_ctor)**
    Initializes a new instance of the RecordApexRepresentation class with the specified object type, primary record data, and related record data. This constructor represents a structured record and its relationships for consumption by embedded AI logic.
-   **[RecordApexRepresentation()](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm#apex_embeddedai_RecordApexRepresentation_ctor_2)**
    Initializes the RecordApexRepresentation class.

### RecordApexRepresentation(objectType, recordData, relatedRecordData)

Initializes a new instance of the RecordApexRepresentation class with the specified object type, primary record data, and related record data. This constructor represents a structured record and its relationships for consumption by embedded AI logic.

#### Signature

public RecordApexRepresentation(String objectType, List<embeddedai.ApexMap> recordData, List<embeddedai.RecordApexRepresentation> relatedRecordData)

#### Parameters

objectType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The object type represented by this record (for example, Account, Case, or a custom object). This value defines the context in which the record data is interpreted by embedded AI processing.

recordData

Type: List<[embeddedai.ApexMap](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_ApexMap.htm#apex_class_embeddedai_ApexMap "Create, clone, and convert string based key-value pairs to a JSON string format.")\>

The field-level data for the primary record as a collection of key–value pairs. Each ApexMap entry corresponds to a field name and its associated value used to construct the record context.

relatedRecordData

Type: List<[embeddedai.RecordApexRepresentation](#apex_class_embeddedai_RecordApexRepresentation "Contains properties and a method to create a serializable representation of a record and its associated data for AI service integration and data processing.")\>

Related records associated with the primary record. Each entry represents a related object and its data, enabling hierarchical or relational record context to be passed to embedded AI logic.

### RecordApexRepresentation()

Initializes the RecordApexRepresentation class.

#### Signature

public RecordApexRepresentation()

## RecordApexRepresentation Properties

The following are properties for RecordApexRepresentation.

-   **[objectType](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm#apex_embeddedai_RecordApexRepresentation_objectType)**
    Stores the type of the object.
-   **[recordData](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm#apex_embeddedai_RecordApexRepresentation_recordData)**
    Stores a list of objects, where each object holds a key-value pair.
-   **[relatedRecordData](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm#apex_embeddedai_RecordApexRepresentation_relatedRecordData)**
    Stores a list that contains a child or related records associated with the record data.

### objectType

Stores the type of the object.

#### Signature

public String objectType {get; set;}

```

```

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### recordData

Stores a list of objects, where each object holds a key-value pair.

#### Signature

public List<embeddedai.ApexMap> recordData {get; set;}

```

```

#### Property Value

Type: [List<embeddedai.ApexMap>](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_ApexMap.htm#apex_class_embeddedai_ApexMap "Create, clone, and convert string based key-value pairs to a JSON string format.")

### relatedRecordData

Stores a list that contains a child or related records associated with the record data.

#### Signature

public List<embeddedai.RecordApexRepresentation> relatedRecordData {get; set;}

```

```

#### Property Value

Type: [List<embeddedai.RecordApexRepresentation>](#apex_class_embeddedai_RecordApexRepresentation "Contains properties and a method to create a serializable representation of a record and its associated data for AI service integration and data processing.")

## RecordApexRepresentation Methods

Create detailed, hierarchical record objects and convert them to a custom JSON string for structured AI input.

The following are methods for RecordApexRepresentation.

-   **[toRecordApexRep(jsonString)](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm#apex_embeddedai_RecordApexRepresentation_toRecordApexRep)**
    Converts a JSON-formatted string into a RecordApexRepresentation instance. This method parses the provided JSON and constructs a structured record representation that can be used by embedded AI logic.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm#apex_embeddedai_RecordApexRepresentation_toString)**
    Returns a structured JSON string representation of the RecordApexRepresentation object and its nested related records.

### toRecordApexRep(jsonString)

Converts a JSON-formatted string into a RecordApexRepresentation instance. This method parses the provided JSON and constructs a structured record representation that can be used by embedded AI logic.

#### Signature

public static embeddedai.RecordApexRepresentation toRecordApexRep(String jsonString)

#### Parameters

jsonString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The JSON-formatted string containing record data and related record information to be converted into a RecordApexRepresentation object.

#### Return Value

Type: embeddedai.RecordApexRepresentation

Returns a RecordApexRepresentation instance populated with the data parsed from the provided JSON string.

### toString()

Returns a structured JSON string representation of the RecordApexRepresentation object and its nested related records.

#### Signature

public String toString()

```

```

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```
embeddedai.RecordApexRepresentation, objectType
```

```
embeddedai.RecordApexRepresentation, recordData
```

```
embeddedai.RecordApexRepresentation, relatedRecordData
```

```
embeddedai.RecordApexRepresentation, toString, [], String
```

## Related Topics

- embeddedai (atlas.en-us.apexref.meta/apexref/apex_namespace_embeddedai.htm)
- RecordApexRepresentation Constructors (atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm)
- RecordApexRepresentation Properties (atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm)
- RecordApexRepresentation Methods (atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm)
- RecordApexRepresentation(objectType, recordData, relatedRecordData) (atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm)
- RecordApexRepresentation() (atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- embeddedai.ApexMap (atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_ApexMap.htm)
- objectType (atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm)
- recordData (atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_RecordApexRepresentation.htm)
