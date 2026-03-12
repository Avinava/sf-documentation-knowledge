---
title: "Sequence Assignment (POST)"
domain: revenue-cloud
topic: sequence-assignment-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:07.200Z
estimatedTokens: 277
keywords: [Sequence, Assignment, POST, Assign, sequence, pattern, values, objects, based, configured, policy., Special, Access, Rules]
---

# Sequence Assignment (POST)

> Assign sequence pattern values to objects based on the configured
      sequence policy.

# Sequence Assignment (POST)

Assign sequence pattern values to objects based on the configured sequence policy.

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

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sequence​PolicyId | String | ID of the sequence policy. | Optional | 65.0 |
| shouldPublish​Platform​Event | Boolean | Indicates whether to publish a platform event when a sequence is assigned to a target record (true) or not (false). | Optional | 65.0 |
| target​ObjectIds | String[] | List of records to which the sequence pattern values are assigned. | Required | 65.0 |

Response body for POST

[Sequences Assignment](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_sequences_assignment_output.htm "Output representation with the status of the assigned sequence pattern values.")

## Code Examples

```
/connect/sequences/actions/assign
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/sequences/actions/assign
```

```
{
  "targetObjectIds": [
    "3ttxx00000005nhAAA",
    "3ttxx00000006bhAAA"
  ],
  "sequencePolicyId": "1Vdxx0000004CFU"
}
```

## Related Topics

- Sequences Assignment (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_sequences_assignment_output.htm)
