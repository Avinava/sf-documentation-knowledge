---
title: "Verifier Class"
domain: health-cloud-object-reference
topic: verifier-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.491Z
estimatedTokens: 833
keywords: [Verifier, input, representations, including, developerName, verificationState]
---

# Verifier Class

> Contains a list of input representations for verifier fields,
      including the optional and required fields.

# Verifier Class

Contains a list of input representations for verifier fields, including the optional and required fields.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[Verifier Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm#apex_id_verification_Verifier_constructors)**

-   **[Verifier Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm#apex_id_verification_Verifier_properties)**


## Verifier Constructors

The following are constructors for Verifier.

-   **[Verifier(developerName, verificationState)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm#apex_id_verification_Verifier_ctor)**
    Creates an instance of the [Verifier](#apex_class_id_verification_Verifier "Contains a list of input representations for verifier fields, including the optional and required fields.") class with the specified parameter values.
-   **[Verifier()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm#apex_id_verification_Verifier_ctor_2)**
    Creates an instance of the [Verifier](#apex_class_id_verification_Verifier "Contains a list of input representations for verifier fields, including the optional and required fields.") class.

### Verifier(developerName, verificationState)

Creates an instance of the [Verifier](#apex_class_id_verification_Verifier "Contains a list of input representations for verifier fields, including the optional and required fields.") class with the specified parameter values.

#### Signature

public Verifier(String developerName, String verificationState)

```

```

#### Parameters

developerName

Type: String

Specifies the developer name of the field.

verificationState

Type: String

Indicates the verification state on the field.

### Verifier()

Creates an instance of the [Verifier](#apex_class_id_verification_Verifier "Contains a list of input representations for verifier fields, including the optional and required fields.") class.

#### Signature

public Verifier()

```

```

## Verifier Properties

The following are properties for Verifier.

-   **[developerName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm#apex_id_verification_Verifier_developerName)**
    Specifies the developer name of the field.
-   **[verificationState](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm#apex_id_verification_Verifier_verificationState)**
    Indicates the verification state on the field.

### developerName

Specifies the developer name of the field.

#### Signature

public String developerName {get; set;}

```

```

#### Property Value

Type: String

### verificationState

Indicates the verification state on the field.

#### Signature

public String verificationState {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
id_verification.Verifier, newinstance, [String, String], id_verification.Verifier
```

```
id_verification.Verifier, newinstance, [], id_verification.Verifier
```

```
id_verification.Verifier, developerName
```

```
id_verification.Verifier, verificationState
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- Verifier Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm)
- Verifier Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm)
- Verifier(developerName, verificationState) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm)
- Verifier() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm)
- developerName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm)
- verificationState (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm)
