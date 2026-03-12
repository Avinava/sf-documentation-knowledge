---
title: "Account Manual Alignment"
domain: life-sciences-dev-guide
topic: account-manual-alignment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.536Z
estimatedTokens: 188
keywords: [Account, Manual, Alignment, Manually, align, territory, Life, Sciences, package, Provider, Info, record]
---

# Account Manual Alignment

> Manually align an account to a territory in the Life Sciences package to create a
        Provider Account Territory Info record.

# Account Manual Alignment

Manually align an account to a territory in the Life Sciences package to create a Provider Account Territory Info record.

Resource

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

```

```

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| account​Id | String | Account to be aligned to the territory. | Required |
| territory​Id | String | ID of the territory to which account is aligned. | Required |

Response body for POST

[Account Manual ​Alignment Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_customer_manual_alignment_output_representation.htm "Represents the output for the request to align customer account manually.")

## Code Examples

```
/connect/life-sciences/commercial/customer-manual-alignment
```

```
{
  "territoryId": "territoryId",
  "accountId": "accountId"
}
```

## Related Topics

- Account Manual ​Alignment Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_customer_manual_alignment_output_representation.htm)
