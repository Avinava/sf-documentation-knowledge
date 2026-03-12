---
title: "VerifiedResult Class"
domain: health-cloud-object-reference
topic: verifiedresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.482Z
estimatedTokens: 1296
keywords: [VerifiedResult, verification, result, includes, verifiers, status, requiredVerifiers, optionalVerifiers]
---

# VerifiedResult Class

> Contains information about the verification result that includes the
      required verifiers and optional verifiers and the verification status.

# VerifiedResult Class

Contains information about the verification result that includes the required verifiers and optional verifiers and the verification status.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[VerifiedResult Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm#apex_id_verification_VerifiedResult_constructors)**

-   **[VerifiedResult Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm#apex_id_verification_VerifiedResult_properties)**


## VerifiedResult Constructors

The following are constructors for VerifiedResult.

-   **[VerifiedResult(requiredVerifiers, optionalVerifiers)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm#apex_id_verification_VerifiedResult_ctor)**
    Creates an instance of the [VerifiedResult](#apex_class_id_verification_VerifiedResult "Contains information about the verification result that includes the required verifiers and optional verifiers and the verification status.") class with the specified parameter values.
-   **[VerifiedResult()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm#apex_id_verification_VerifiedResult_ctor_2)**
    Creates an instance of the [VerifiedResult](#apex_class_id_verification_VerifiedResult "Contains information about the verification result that includes the required verifiers and optional verifiers and the verification status.") class.

### VerifiedResult(requiredVerifiers, optionalVerifiers)

Creates an instance of the [VerifiedResult](#apex_class_id_verification_VerifiedResult "Contains information about the verification result that includes the required verifiers and optional verifiers and the verification status.") class with the specified parameter values.

#### Signature

public VerifiedResult(List<id\_verification.Verifier> requiredVerifiers, List<id\_verification.Verifier> optionalVerifiers)

```

```

#### Parameters

requiredVerifiers

Type: List<[id\_verification.Verifier](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm#apex_class_id_verification_Verifier "Contains a list of input representations for verifier fields, including the optional and required fields.")\>

Required. Represents the list of required input representations for verifier fields.

optionalVerifiers

Type: List<[id\_verification.Verifier](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm#apex_class_id_verification_Verifier "Contains a list of input representations for verifier fields, including the optional and required fields.")\>

Represents the list of optional input representations for verifier fields.

### VerifiedResult()

Creates an instance of the [VerifiedResult](#apex_class_id_verification_VerifiedResult "Contains information about the verification result that includes the required verifiers and optional verifiers and the verification status.") class.

#### Signature

public VerifiedResult()

```

```

## VerifiedResult Properties

The following are properties for VerifiedResult.

-   **[optionalVerifiers](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm#apex_id_verification_VerifiedResult_optionalVerifiers)**
    Represents the list of optional input representations for verifier fields.
-   **[requiredVerifiers](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm#apex_id_verification_VerifiedResult_requiredVerifiers)**
    Represents the list of required input representations for verifier fields.

### optionalVerifiers

Represents the list of optional input representations for verifier fields.

#### Signature

public List<id\_verification.Verifier> optionalVerifiers {get; set;}

```

```

#### Property Value

Type: List<[id\_verification.Verifier](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm#apex_class_id_verification_Verifier "Contains a list of input representations for verifier fields, including the optional and required fields.")\>

### requiredVerifiers

Represents the list of required input representations for verifier fields.

#### Signature

public List<id\_verification.Verifier> requiredVerifiers {get; set;}

```

```

#### Property Value

Type: List<[id\_verification.Verifier](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm#apex_class_id_verification_Verifier "Contains a list of input representations for verifier fields, including the optional and required fields.")\>

## Code Examples

```apex
id_verification.VerifiedResult, newinstance, [List<id_verification.Verifier>, List<id_verification.Verifier>], id_verification.VerifiedResult
```

```
id_verification.VerifiedResult, newinstance, [], id_verification.VerifiedResult
```

```
id_verification.VerifiedResult, optionalVerifiers
```

```
id_verification.VerifiedResult, requiredVerifiers
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- VerifiedResult Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm)
- VerifiedResult Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm)
- VerifiedResult(requiredVerifiers, optionalVerifiers) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm)
- VerifiedResult() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm)
- id_verification.Verifier (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_Verifier.htm)
- optionalVerifiers (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm)
- requiredVerifiers (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm)
