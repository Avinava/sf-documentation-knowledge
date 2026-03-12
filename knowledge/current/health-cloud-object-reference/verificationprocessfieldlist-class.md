---
title: "VerificationProcessFieldList Class"
domain: health-cloud-object-reference
topic: verificationprocessfieldlist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.469Z
estimatedTokens: 1044
keywords: [VerificationProcessFieldList, search, verification, process, verificationProcessFields]
---

# VerificationProcessFieldList Class

> Contains information about the list of fields used for both search and
      the verification process.

# VerificationProcessFieldList Class

Contains information about the list of fields used for both search and the verification process.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[VerificationProcessFieldList Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm#apex_id_verification_VerificationProcessFieldList_constructors)**

-   **[VerificationProcessFieldList Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm#apex_id_verification_VerificationProcessFieldList_properties)**


## VerificationProcessFieldList Constructors

The following are constructors for VerificationProcessFieldList.

-   **[VerificationProcessFieldList(verificationProcessFields)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm#apex_id_verification_VerificationProcessFieldList_ctor)**
    Creates an instance of the [VerificationProcessFieldList](#apex_class_id_verification_VerificationProcessFieldList "Contains information about the list of fields used for both search and the verification process.") class with the specified parameter values.
-   **[VerificationProcessFieldList()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm#apex_id_verification_VerificationProcessFieldList_ctor_2)**
    Creates an instance of the [VerificationProcessFieldList](#apex_class_id_verification_VerificationProcessFieldList "Contains information about the list of fields used for both search and the verification process.") class.

### VerificationProcessFieldList(verificationProcessFields)

Creates an instance of the [VerificationProcessFieldList](#apex_class_id_verification_VerificationProcessFieldList "Contains information about the list of fields used for both search and the verification process.") class with the specified parameter values.

#### Signature

public VerificationProcessFieldList(List<id\_verification.VerificationProcessField> verificationProcessFields)

```

```

#### Parameters

verificationProcessFields

Type: List<[id\_verification.VerificationProcessField](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_class_id_verification_VerificationProcessField "Contains details of the fields used for both search and the verification process.")\>

Represents the list of fields used for verification.

### VerificationProcessFieldList()

Creates an instance of the [VerificationProcessFieldList](#apex_class_id_verification_VerificationProcessFieldList "Contains information about the list of fields used for both search and the verification process.") class.

#### Signature

public VerificationProcessFieldList()

```

```

## VerificationProcessFieldList Properties

The following are properties for VerificationProcessFieldList.

-   **[verificationProcessFields](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm#apex_id_verification_VerificationProcessFieldList_verificationProcessFields)**
    Represents the list of fields used for verification.

### verificationProcessFields

Represents the list of fields used for verification.

#### Signature

public List<id\_verification.VerificationProcessField> verificationProcessFields {get; set;}

```

```

#### Property Value

Type: List<[id\_verification.VerificationProcessField](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_class_id_verification_VerificationProcessField "Contains details of the fields used for both search and the verification process.")\>

## Code Examples

```apex
id_verification.VerificationProcessFieldList, newinstance, [List<id_verification.VerificationProcessField>], id_verification.VerificationProcessFieldList
```

```
id_verification.VerificationProcessFieldList, newinstance, [], id_verification.VerificationProcessFieldList
```

```
id_verification.VerificationProcessFieldList, verificationProcessFields
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- VerificationProcessFieldList Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm)
- VerificationProcessFieldList Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm)
- VerificationProcessFieldList(verificationProcessFields) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm)
- VerificationProcessFieldList() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm)
- id_verification.VerificationProcessField (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm)
- verificationProcessFields (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessFieldList.htm)
