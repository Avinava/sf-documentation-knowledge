---
title: "ProcedurePlan Class"
domain: revenue-cloud
topic: procedureplan-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.358Z
estimatedTokens: 366
namespace: RevSignaling
keywords: [ProcedurePlan, instance, current, pricing, procedure, plan, you're, working, prevStepOutput]
---

# ProcedurePlan Class

> Represents the instance of the current pricing procedure plan that you're working
    on.

**Namespace:** `RevSignaling`

# ProcedurePlan Class

Represents the instance of the current pricing procedure plan that you're working on.

## Namespace

[RevSignaling](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSignaling.htm "The RevSignaling Namespace includes properties and methods to extend the standard procedure plan implementation through custom logic. Using this extension support, you can tailor implementations to your unique requirements.")

-   **[ProcedurePlan Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_ProcedurePlan.htm#apex_RevSignaling_ProcedurePlan_properties)**
    Learn more about the properties that are available with the ProcedurePlan class.

## ProcedurePlan Properties

Learn more about the properties that are available with the ProcedurePlan class.

The ProcedurePlan class includes these properties.

-   **[prevStepOutput](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_ProcedurePlan.htm#apex_RevSignaling_ProcedurePlan_prevStepOutput)**
    Output of the previous step that's executed and passed to the next step.

### prevStepOutput

Output of the previous step that's executed and passed to the next step.

#### Signature

public Map<String,ANY> prevStepOutput {get; set;}

```

```

#### Property Value

Type: Map<String,Object>

## Code Examples

```
RevSignaling.ProcedurePlan, prevStepOutput
```

## Related Topics

- RevSignaling (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSignaling.htm)
- ProcedurePlan Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_ProcedurePlan.htm)
- prevStepOutput (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_ProcedurePlan.htm)
