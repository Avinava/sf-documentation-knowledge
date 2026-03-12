---
title: "ProcessDefinition Class"
domain: health-cloud-object-reference
topic: processdefinition-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.371Z
estimatedTokens: 1030
keywords: [ProcessDefinition, verification, process, definition, including, layoutType, processDetail]
---

# ProcessDefinition Class

> Contains the verification process definition, including the list of
      process details.

# ProcessDefinition Class

Contains the verification process definition, including the list of process details.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[ProcessDefinition Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm#apex_id_verification_ProcessDefinition_constructors)**

-   **[ProcessDefinition Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm#apex_id_verification_ProcessDefinition_properties)**


## ProcessDefinition Constructors

The following are constructors for ProcessDefinition.

-   **[ProcessDefinition(layoutType, processDetail)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm#apex_id_verification_ProcessDefinition_ctor)**
    Creates an instance of the [ProcessDefinition](#apex_class_id_verification_ProcessDefinition "Contains the verification process definition, including the list of process details.") class with the specified parameter values.
-   **[ProcessDefinition()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm#apex_id_verification_ProcessDefinition_ctor_2)**
    Creates an instance of the [ProcessDefinition](#apex_class_id_verification_ProcessDefinition "Contains the verification process definition, including the list of process details.") class.

### ProcessDefinition(layoutType, processDetail)

Creates an instance of the [ProcessDefinition](#apex_class_id_verification_ProcessDefinition "Contains the verification process definition, including the list of process details.") class with the specified parameter values.

#### Signature

public ProcessDefinition(String layoutType, List<id\_verification.ProcessDetail> processDetail)

```

```

#### Parameters

layoutType

Type: String

Specifies the display layout of the search component is tab or stacked.

processDetail

Type: List<[id\_verification.ProcessDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_class_id_verification_ProcessDetail "Contains the verification process details.")\>

Required. Represents the details of verification processes.

### ProcessDefinition()

Creates an instance of the [ProcessDefinition](#apex_class_id_verification_ProcessDefinition "Contains the verification process definition, including the list of process details.") class.

#### Signature

public ProcessDefinition()

```

```

## ProcessDefinition Properties

The following are properties for ProcessDefinition.

-   **[layoutType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm#apex_id_verification_ProcessDefinition_layoutType)**
    Specifies the display layout of the search component is tab or stacked.
-   **[processDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm#apex_id_verification_ProcessDefinition_processDetail)**
    Represents the details of verification processes.

### layoutType

Specifies the display layout of the search component is tab or stacked.

#### Signature

public String layoutType {get; set;}

```

```

#### Property Value

Type: String

### processDetail

Represents the details of verification processes.

#### Signature

public List<id\_verification.ProcessDetail> processDetail {get; set;}

```

```

#### Property Value

Type: List<[id\_verification.ProcessDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm#apex_class_id_verification_ProcessDetail "Contains the verification process details.")\>

## Code Examples

```apex
id_verification.ProcessDefinition, newinstance, [String, List<id_verification.ProcessDetail>], id_verification.ProcessDefinition
```

```
id_verification.ProcessDefinition, newinstance, [], id_verification.ProcessDefinition
```

```
id_verification.ProcessDefinition, layoutType
```

```
id_verification.ProcessDefinition, processDetail
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- ProcessDefinition Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm)
- ProcessDefinition Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm)
- ProcessDefinition(layoutType, processDetail) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm)
- ProcessDefinition() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm)
- id_verification.ProcessDetail (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDetail.htm)
- layoutType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm)
- processDetail (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_ProcessDefinition.htm)
