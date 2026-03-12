---
title: "VerificationContext Class"
domain: health-cloud-object-reference
topic: verificationcontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.450Z
estimatedTokens: 2636
keywords: [VerificationContext, verification, context, including, process, definition, selected, search, result, verified, processDefinition, selectedSearchResult, selectedVerifiedResult, verifiedResult, message]
---

# VerificationContext Class

> Contains information about the verification context, including the
      process definition, selected search result, selected verified result, and verified
      result.

# VerificationContext Class

Contains information about the verification context, including the process definition, selected search result, selected verified result, and verified result.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[VerificationContext Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_id_verification_VerificationContext_constructors)**

-   **[VerificationContext Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_id_verification_VerificationContext_properties)**


## VerificationContext Constructors

The following are constructors for VerificationContext.

-   **[VerificationContext(processDefinition, selectedSearchResult, selectedVerifiedResult, verifiedResult, message, isSuccess)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_id_verification_VerificationContext_ctor)**
    Creates an instance of the [VerificationContext](#apex_class_id_verification_VerificationContext "Contains information about the verification context, including the process definition, selected search result, selected verified result, and verified result.") class with the specified parameter values.
-   **[VerificationContext(processDefinition)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_id_verification_VerificationContext_ctor_2)**
    Creates an instance of the [VerificationContext](#apex_class_id_verification_VerificationContext "Contains information about the verification context, including the process definition, selected search result, selected verified result, and verified result.") class with the specified parameter values.
-   **[VerificationContext()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_id_verification_VerificationContext_ctor_3)**
    Creates an instance of the [VerificationContext](#apex_class_id_verification_VerificationContext "Contains information about the verification context, including the process definition, selected search result, selected verified result, and verified result.") class.

### VerificationContext(processDefinition, selectedSearchResult, selectedVerifiedResult, verifiedResult, message, isSuccess)

Creates an instance of the [VerificationContext](#apex_class_id_verification_VerificationContext "Contains information about the verification context, including the process definition, selected search result, selected verified result, and verified result.") class with the specified parameter values.

#### Signature

public VerificationContext(id\_verification.ProcessDefinition processDefinition, id\_verification.SelectedSearchResult selectedSearchResult, id\_verification.SelectedVerifiedResult selectedVerifiedResult, id\_verification.VerifiedResult verifiedResult, String message, Boolean isSuccess)

```

```

#### Parameters

processDefinition

Type: [id\_verification.ProcessDefinition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm#apex_class_id_verification_ProcessDefinition "Contains the verification process definition, including the list of process details.")

Required. Represents the identity verification process definition.

selectedSearchResult

Type: [id\_verification.SelectedSearchResult](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm#apex_class_id_verification_SelectedSearchResult "Contains the details of the record that has been selected for verification.")

Required. Represents the details of the object and fields to appear in the search result.

selectedVerifiedResult

Type: [id\_verification.SelectedVerifiedResult](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedVerifiedResult.htm#apex_class_id_verification_SelectedVerifiedResult "Contains information about the verified object that is used for the secondary search.")

Represents the data from primary search, which is used for secondary search.

verifiedResult

Type: [id\_verification.VerifiedResult](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm#apex_class_id_verification_VerifiedResult "Contains information about the verification result that includes the required verifiers and optional verifiers and the verification status.")

Represents the verified result.

message

Type: String

Indicates the request response message.

isSuccess

Type: Boolean

Indicates whether the verification result is successful or not.

### VerificationContext(processDefinition)

Creates an instance of the [VerificationContext](#apex_class_id_verification_VerificationContext "Contains information about the verification context, including the process definition, selected search result, selected verified result, and verified result.") class with the specified parameter values.

#### Signature

public VerificationContext(id\_verification.ProcessDefinition processDefinition)

```

```

#### Parameters

processDefinition

Type: [id\_verification.ProcessDefinition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm#apex_class_id_verification_ProcessDefinition "Contains the verification process definition, including the list of process details.")

Required. Represents the identity verification process definition.

### VerificationContext()

Creates an instance of the [VerificationContext](#apex_class_id_verification_VerificationContext "Contains information about the verification context, including the process definition, selected search result, selected verified result, and verified result.") class.

#### Signature

public VerificationContext()

```

```

## VerificationContext Properties

The following are properties for VerificationContext.

-   **[isSuccess](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_id_verification_VerificationContext_isSuccess)**
    Indicates whether the verification result is successful or not.
-   **[message](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_id_verification_VerificationContext_message)**
    Indicates the request response message.
-   **[processDefinition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_id_verification_VerificationContext_processDefinition)**
    Represents the identity verification process definition.
-   **[selectedSearchResult](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_id_verification_VerificationContext_selectedSearchResult)**
    Represents the details of the object and fields to appear in the search result.
-   **[selectedVerifiedResult](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_id_verification_VerificationContext_selectedVerifiedResult)**
    Represents the data from primary search, which is used for secondary search.
-   **[verifiedResult](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_id_verification_VerificationContext_verifiedResult)**
    Represents the verified result.

### isSuccess

Indicates whether the verification result is successful or not.

#### Signature

public Boolean isSuccess {get; set;}

```

```

#### Property Value

Type: Boolean

### message

Indicates the request response message.

#### Signature

public String message {get; set;}

```

```

#### Property Value

Type: String

### processDefinition

Represents the identity verification process definition.

#### Signature

public id\_verification.ProcessDefinition processDefinition {get; set;}

```

```

#### Property Value

Type: [id\_verification.ProcessDefinition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm#apex_class_id_verification_ProcessDefinition "Contains the verification process definition, including the list of process details.")

### selectedSearchResult

Represents the details of the object and fields to appear in the search result.

#### Signature

public id\_verification.SelectedSearchResult selectedSearchResult {get; set;}

```

```

#### Property Value

Type: [id\_verification.SelectedSearchResult](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm#apex_class_id_verification_SelectedSearchResult "Contains the details of the record that has been selected for verification.")

### selectedVerifiedResult

Represents the data from primary search, which is used for secondary search.

#### Signature

public id\_verification.SelectedVerifiedResult selectedVerifiedResult {get; set;}

```

```

#### Property Value

Type: [id\_verification.SelectedVerifiedResult](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedVerifiedResult.htm#apex_class_id_verification_SelectedVerifiedResult "Contains information about the verified object that is used for the secondary search.")

### verifiedResult

Represents the verified result.

#### Signature

public id\_verification.VerifiedResult verifiedResult {get; set;}

```

```

#### Property Value

Type: [id\_verification.VerifiedResult](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm#apex_class_id_verification_VerifiedResult "Contains information about the verification result that includes the required verifiers and optional verifiers and the verification status.")

## Code Examples

```
id_verification.VerificationContext, newinstance, [id_verification.ProcessDefinition, id_verification.SelectedSearchResult, id_verification.SelectedVerifiedResult, id_verification.VerifiedResult, String, Boolean], id_verification.VerificationContext
```

```
id_verification.VerificationContext, newinstance, [id_verification.ProcessDefinition], id_verification.VerificationContext
```

```
id_verification.VerificationContext, newinstance, [], id_verification.VerificationContext
```

```
id_verification.VerificationContext, isSuccess
```

```
id_verification.VerificationContext, message
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- VerificationContext Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm)
- VerificationContext Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm)
- VerificationContext(processDefinition, selectedSearchResult, selectedVerifiedResult, verifiedResult, message, isSuccess) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm)
- VerificationContext(processDefinition) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm)
- VerificationContext() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm)
- id_verification.ProcessDefinition (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm)
- id_verification.SelectedSearchResult (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm)
- id_verification.SelectedVerifiedResult (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedVerifiedResult.htm)
- id_verification.VerifiedResult (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedResult.htm)
