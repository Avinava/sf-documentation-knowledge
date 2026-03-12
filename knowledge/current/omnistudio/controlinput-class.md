---
title: "ControlInput Class"
domain: omnistudio
topic: controlinput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.518Z
estimatedTokens: 425
namespace: ComplianceMgmt
keywords: [ControlInput, control, input, that's, evaluation, compliance, includes, two, main, parameterName, parameterType]
---

# ControlInput Class

> Represents a control input that's used in the evaluation of compliance. It includes two
        main properties: parameterName and parameterType.

**Namespace:** `ComplianceMgmt`

# ControlInput Class

Represents a control input that's used in the evaluation of compliance. It includes two main properties: parameterName and parameterType.

## Namespace

[ComplianceMgmt](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_ComplianceMgmt.htm "The ComplianceMgmt namespace provides classes and methods to implement rule processors for compliance control.")

## Example

```

```

-   **[ControlInput Constructors](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlInput.htm#apex_ComplianceMgmt_ControlInput_constructors)**
    Learn more about the constructors available with the ControlInput class.

## ControlInput Constructors

Learn more about the constructors available with the ControlInput class.

The ControlInput class includes this constructor.

-   **[ControlInput(parameterName, parameterType)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlInput.htm#apex_ComplianceMgmt_ControlInput_ctor)**
    Initializes the ControlInput object.

### ControlInput(parameterName, parameterType)

Initializes the ControlInput object.

#### Signature

public ControlInput(String parameterName, ComplianceMgmt.ControlInputType parameterType)

```

```

#### Parameters

parameterName

Type: String

Name of the business context parameter that’s used to evaluate compliance.

parameterType

Type: [ComplianceMgmt.ControlInputType](atlas.en-us.industries_reference.meta/industries_reference/apex_enum_ComplianceMgmt_ControlInputType.htm "The type of the control input parameter that’s business context.")

The type of the business context parameter. Only RecordId is supported.

## Code Examples

```apex
@VisibleApiVersion(minApiVersion='256')
 global class ControlInput {
    String parameterName; // Name of the parameter
    ControlInputType parameterType; // Type of the parameter

    global ControlInput(String parameterName, ControlInputType parameterType) {
        this.parameterName = parameterName;
        this.parameterType = parameterType;
    }

    public Boolean equals(Object obj) {
        if (obj instanceof ControlInput) {
            ControlInput p = (ControlInput)obj;
            return ((parameterName==p.parameterName) && (parameterType==p.parameterType));
        }
        return false;
    }

    public Integer hashCode() {
        return (31 * parameterName.hashCode()) ^ parameterType.hashCode();
    }
 }
```

```
ComplianceMgmt.ControlInput, newinstance, [String, ComplianceMgmt.ControlInputType], ComplianceMgmt.ControlInput
```

## Related Topics

- ComplianceMgmt (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_ComplianceMgmt.htm)
- ControlInput Constructors (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlInput.htm)
- ControlInput(parameterName, parameterType) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_ComplianceMgmt_ControlInput.htm)
- ComplianceMgmt.ControlInputType (atlas.en-us.industries_reference.meta/industries_reference/apex_enum_ComplianceMgmt_ControlInputType.htm)
