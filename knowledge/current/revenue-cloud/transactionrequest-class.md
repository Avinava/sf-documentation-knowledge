---
title: "TransactionRequest Class"
domain: revenue-cloud
topic: transactionrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.259Z
estimatedTokens: 921
namespace: RevSignaling
keywords: [TransactionRequest, Represents, transaction, request, signaling, Apex, processor., procedurePlanInstance, ctxInstanceId]
---

# TransactionRequest Class

> Represents the transaction request to the signaling Apex processor.

**Namespace:** `RevSignaling`

# TransactionRequest Class

Represents the transaction request to the signaling Apex processor.

## Namespace

[RevSignaling](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSignaling.htm "The RevSignaling Namespace includes properties and methods to extend the standard procedure plan implementation through custom logic. Using this extension support, you can tailor implementations to your unique requirements.")

-   **[TransactionRequest Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm#apex_RevSignaling_TransactionRequest_constructors)**
    Learn more about the available constructors with the TransactionRequest class.
-   **[TransactionRequest Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm#apex_RevSignaling_TransactionRequest_properties)**
    Learn more about the properties that are available with the TransactionRequest class.

## TransactionRequest Constructors

Learn more about the available constructors with the TransactionRequest class.

The TransactionRequest class includes these constructors.

-   **[TransactionRequest(procedurePlanInstance, ctxInstanceId)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm#apex_RevSignaling_TransactionRequest_ctor)**
    Creates an instance of the TransactionRequest class to specify the procedure plan and context instance ID.

### TransactionRequest(procedurePlanInstance, ctxInstanceId)

Creates an instance of the TransactionRequest class to specify the procedure plan and context instance ID.

#### Signature

public TransactionRequest(RevSignaling.ProcedurePlan procedurePlan, String ctxInstanceId)

```

```

#### Parameters

procedurePlan

Type: [RevSignaling.ProcedurePlan](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_ProcedurePlan.htm#apex_class_RevSignaling_ProcedurePlan "Represents the instance of the current pricing procedure plan that you're working on.")

Instance of the procedure plan.

ctxInstanceId

Type: String

ID of the context.

## TransactionRequest Properties

Learn more about the properties that are available with the TransactionRequest class.

The TransactionRequest class includes these properties.

-   **[ctxInstanceId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm#apex_RevSignaling_TransactionRequest_ctxInstanceId)**
    Set the context ID.
-   **[procedurePlanInstance](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm#apex_RevSignaling_TransactionRequest_procedurePlanInstance)**
    Set the instance of the procedure plan.

### ctxInstanceId

Set the context ID.

#### Signature

public String ctxInstanceId {get; set;}

```

```

#### Property Value

Type: String

### procedurePlanInstance

Set the instance of the procedure plan.

#### Signature

public RevSignaling.ProcedurePlan procedurePlanInstance {get; set;}

```

```

#### Property Value

Type: [RevSignaling.ProcedurePlan](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_ProcedurePlan.htm#apex_class_RevSignaling_ProcedurePlan "Represents the instance of the current pricing procedure plan that you're working on.")

## Code Examples

```
RevSignaling.TransactionRequest, newinstance, [RevSignaling.ProcedurePlan, String], RevSignaling.TransactionRequest
```

```
RevSignaling.TransactionRequest, ctxInstanceId
```

```
RevSignaling.TransactionRequest, procedurePlanInstance
```

## Related Topics

- RevSignaling (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSignaling.htm)
- TransactionRequest Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm)
- TransactionRequest Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm)
- TransactionRequest(procedurePlanInstance, ctxInstanceId) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm)
- RevSignaling.ProcedurePlan (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_ProcedurePlan.htm)
- ctxInstanceId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm)
- procedurePlanInstance (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm)
