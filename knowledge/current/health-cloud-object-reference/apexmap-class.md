---
title: "ApexMap Class"
domain: health-cloud-object-reference
topic: apexmap-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.241Z
estimatedTokens: 1031
keywords: [ApexMap, clone, convert, key-value, pairs, JSON, key, toString]
---

# ApexMap Class

> Create, clone, and convert string based key-value pairs to a JSON string
    format.

# ApexMap Class

Create, clone, and convert string based key-value pairs to a JSON string format.

## Namespace

[embeddedai](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_embeddedai.htm "The embeddedai namespace provides classes and methods to manage and represent records and data in Apex to support embedded AI features.")

-   **[ApexMap Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_constructors)**
    Learn more about the constructors available with the ApexMap class.
-   **[ApexMap Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_properties)**

-   **[ApexMap Methods](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_methods)**
    Create a copy of the ApexMap object and convert key-value pairs to string format.

## ApexMap Constructors

Learn more about the constructors available with the ApexMap class.

The ApexMap class includes these constructors.

-   **[ApexMap(key, value)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_ctor)**
    Initializes a new instance of the ApexMap class by assigning the specified key and value. This constructor creates a single key–value entry that can be included in an embedded AI Apex map for passing contextual data to embedded AI logic.
-   **[ApexMap()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_ctor_2)**
    Initializes the ApexMap class.

### ApexMap(key, value)

Initializes a new instance of the ApexMap class by assigning the specified key and value. This constructor creates a single key–value entry that can be included in an embedded AI Apex map for passing contextual data to embedded AI logic.

#### Signature

public ApexMap(String key, String value)

```

```

#### Parameters

key

Type: String

The unique identifier for an entry in the embedded AI Apex map. This key references and retrieves the associated value during embedded AI processing.

value

Type: String

The data associated with the specified key in the embedded AI Apex map. This value stores the contextual information consumed by embedded AI logic.

### ApexMap()

Initializes the ApexMap class.

#### Signature

public ApexMap()

```

```

## ApexMap Properties

These are the properties for ApexMap.

-   **[key](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_key)**
    Represents key of the key-value pair. This property is used to store the unique ID or name of the data.
-   **[value](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_value)**
    Represents value of the key-value pair. This property is used to store the data associated with the key.

### key

Represents key of the key-value pair. This property is used to store the unique ID or name of the data.

#### Signature

public String key {get; set;}

```

```

#### Property Value

Type: String

### value

Represents value of the key-value pair. This property is used to store the data associated with the key.

#### Signature

public String value {get; set;}

```

```

#### Property Value

Type: String

## ApexMap Methods

Create a copy of the ApexMap object and convert key-value pairs to string format.

These are the methods for ApexMap.

-   **[toString()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm#apex_embeddedai_ApexMap_toString)**
    Returns a string representation of the ApexMap object.

### toString()

Returns a string representation of the ApexMap object.

#### Signature

public String toString()

```

```

#### Return Value

Type: String

## Code Examples

```
embeddedai.ApexMap, newinstance, [String, String], embeddedai.ApexMap
```

```
embeddedai.ApexMap, newinstance, [], embeddedai.ApexMap
```

```
embeddedai.ApexMap, key
```

```
embeddedai.ApexMap, value
```

```
embeddedai.ApexMap, toString, [], String
```

## Related Topics

- embeddedai (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_embeddedai.htm)
- ApexMap Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm)
- ApexMap Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm)
- ApexMap Methods (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm)
- ApexMap(key, value) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm)
- ApexMap() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm)
- key (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm)
- value (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm)
- toString() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_embeddedai_ApexMap.htm)
