---
title: "FieldValue Class"
domain: health-cloud-object-reference
topic: fieldvalue-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.364Z
estimatedTokens: 933
keywords: [FieldValue, key-value, pair, represented, developer, search, results, verification, developerName]
---

# FieldValue Class

> Contains a key-value pair represented by the developer name and value
      of the field. The key-value pair is used for both search results and
    verification.

# FieldValue Class

Contains a key-value pair represented by the developer name and value of the field. The key-value pair is used for both search results and verification.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[FieldValue Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm#apex_id_verification_FieldValue_constructors)**

-   **[FieldValue Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm#apex_id_verification_FieldValue_properties)**


## FieldValue Constructors

The following are constructors for FieldValue.

-   **[FieldValue(developerName, value)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm#apex_id_verification_FieldValue_ctor)**
    Creates an instance of the [FieldValue](#apex_class_id_verification_FieldValue "Contains a key-value pair represented by the developer name and value of the field. The key-value pair is used for both search results and verification.") class with the specified parameter values.
-   **[FieldValue()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm#apex_id_verification_FieldValue_ctor_2)**
    Creates an instance of the [FieldValue](#apex_class_id_verification_FieldValue "Contains a key-value pair represented by the developer name and value of the field. The key-value pair is used for both search results and verification.") class.

### FieldValue(developerName, value)

Creates an instance of the [FieldValue](#apex_class_id_verification_FieldValue "Contains a key-value pair represented by the developer name and value of the field. The key-value pair is used for both search results and verification.") class with the specified parameter values.

#### Signature

public FieldValue(String developerName, String value)

```

```

#### Parameters

developerName

Type: String

The developer name of the field that is used for search results and verification.

value

Type: String

The value of the field that is used for search results and verification.

### FieldValue()

Creates an instance of the [FieldValue](#apex_class_id_verification_FieldValue "Contains a key-value pair represented by the developer name and value of the field. The key-value pair is used for both search results and verification.") class.

#### Signature

public FieldValue()

```

```

## FieldValue Properties

The following are properties for FieldValue.

-   **[developerName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm#apex_id_verification_FieldValue_developerName)**
    The developer name of the field that is used for search results and verification.
-   **[value](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm#apex_id_verification_FieldValue_value)**
    The value of the field that is used for search results and verification.

### developerName

The developer name of the field that is used for search results and verification.

#### Signature

public String developerName {get; set;}

```

```

#### Property Value

Type: String

### value

The value of the field that is used for search results and verification.

#### Signature

public String value {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
id_verification.FieldValue, newinstance, [String, String], id_verification.FieldValue
```

```
id_verification.FieldValue, newinstance, [], id_verification.FieldValue
```

```
id_verification.FieldValue, developerName
```

```
id_verification.FieldValue, value
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- FieldValue Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm)
- FieldValue Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm)
- FieldValue(developerName, value) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm)
- FieldValue() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm)
- developerName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm)
- value (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm)
