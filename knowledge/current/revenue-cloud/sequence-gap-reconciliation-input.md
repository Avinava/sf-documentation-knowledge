---
title: "Sequence Gap Reconciliation Input"
domain: revenue-cloud
topic: sequence-gap-reconciliation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.474Z
estimatedTokens: 247
keywords: [Sequence, Gap, Reconciliation, Input, representation, details, used, identify, reconcile, gaps, sequence, values, based, policy, target, object.]
---

# Sequence Gap Reconciliation Input

> Input representation of the details that are used to identify and reconcile gaps in
    sequence values based on the sequence policy or target object.

# Sequence Gap Reconciliation Input

Input representation of the details that are used to identify and reconcile gaps in sequence values based on the sequence policy or target object.

JSON example

This example shows a sample request that specifies the list of sequence policies for gap reconciliation.

```

```

This example shows a sample request that specifies the target invoice object for gap reconciliation.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sequence​PolicyIds | String[] | List of IDs of the sequence policies. | Required if the targetObjects property isn't specified. You must not specify both properties. | 65.0 |
| target​Objects | String[] | List of objects to which the policies are applied. Valid values are:InvoiceCreditMemo—Available in API version 66.0 and later. | Required if the sequencePolicyIds property isn't specified. You must not specify both properties. | 65.0 |

## Code Examples

```
{
  "sequencePolicyIds": [
    "1vdxx0000000abc",
    "1vdxx0000000def"
  ]
}
```

```
{
  "targetObjects": [
    "Invoice"
  ]
}
```
