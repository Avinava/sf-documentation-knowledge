---
title: "TransactionResponse Class"
domain: revenue-cloud
topic: transactionresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.368Z
estimatedTokens: 523
namespace: RevSignaling
keywords: [TransactionResponse, transaction, signaling, Apex, processor, message, status]
---

# TransactionResponse Class

> Represents the transaction response from the signaling Apex processor.

**Namespace:** `RevSignaling`

# TransactionResponse Class

Represents the transaction response from the signaling Apex processor.

## Namespace

[RevSignaling](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSignaling.htm "The RevSignaling Namespace includes properties and methods to extend the standard procedure plan implementation through custom logic. Using this extension support, you can tailor implementations to your unique requirements.")

-   **[TransactionResponse Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionResponse.htm#apex_RevSignaling_TransactionResponse_properties)**
    Learn more about the properties that are available with the TransactionResponse class.

## TransactionResponse Properties

Learn more about the properties that are available with the TransactionResponse class.

The TransactionResponse class includes these properties.

-   **[message](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionResponse.htm#apex_RevSignaling_TransactionResponse_message)**
    Get the message from the transaction response.
-   **[status](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionResponse.htm#apex_RevSignaling_TransactionResponse_status)**
    Get the status of the request from the transaction response.

### message

Get the message from the transaction response.

#### Signature

public String message {get; set;}

```

```

#### Property Value

Type: String

### status

Get the status of the request from the transaction response.

#### Signature

public RevSignaling.TransactionStatus status {get; set;}

```

```

#### Property Value

Type: [RevSignaling.TransactionStatus](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSignaling_TransactionStatus.htm "Specifies the status of the transaction request.")

## Code Examples

```
RevSignaling.TransactionResponse, message
```

```
RevSignaling.TransactionResponse, status
```

## Related Topics

- RevSignaling (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSignaling.htm)
- TransactionResponse Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionResponse.htm)
- message (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionResponse.htm)
- status (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionResponse.htm)
- RevSignaling.TransactionStatus (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSignaling_TransactionStatus.htm)
