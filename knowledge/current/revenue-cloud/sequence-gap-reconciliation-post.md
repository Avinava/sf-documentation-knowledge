---
title: "Sequence Gap Reconciliation (POST)"
domain: revenue-cloud
topic: sequence-gap-reconciliation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.962Z
estimatedTokens: 382
keywords: [Sequence, Gap, Reconciliation, POST, Restore, missing, identified, API, gapless-enabled, sequences, later, subsequent, policy, numbering, ensuring]
---

# Sequence Gap Reconciliation (POST)

> Restore a missing sequence value identified by using this API in
      gapless-enabled sequences. This sequence value can be used later in the subsequent sequence
      policy numbering, ensuring there are no gaps.

# Sequence Gap Reconciliation (POST)

Restore a missing sequence value identified by using this API in gapless-enabled sequences. This sequence value can be used later in the subsequent sequence policy numbering, ensuring there are no gaps.

## Special Access Rules

You need the Billing Admin permission set to use this API.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Sequence Gap Reconciliation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_sequence_gap_reconciliation_output.htm "Output representation of the details of the sequence gap reconciliation.")

## Code Examples

```
/connect/sequences/gap-reconciliation
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/sequences/gap-reconciliation
```

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

## Related Topics

- Sequence Gap Reconciliation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_sequence_gap_reconciliation_output.htm)
