---
title: "Donor Options Details Input"
domain: nonprofit-cloud
topic: donor-options-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:20.509Z
estimatedTokens: 230
keywords: [Donor, Options, processing, includes, targeted, logic, donor-related, commitment, transaction]
---

> Input representation of the available donor processing options that includes targeted
    update logic for the donor-related components of the commitment transaction.

# Donor Options Details Input

Input representation of the available donor processing options that includes targeted update logic for the donor-related components of the commitment transaction.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| default​UpdateLogic | String | Default update value for the donor updates. Valid values are:update_all- If an existing donor is matched (whether by a record ID, external ID, or Duplicate Rules), any donor properties that are provided are updated on the matched donor's account, including any custom account field mappings.no_update- If an existing donor is matched (whether by a record ID, external ID, or Duplicate Rules), none of the donor properties that are provided are updated on the matched donor’s account, including any custom account field mappings. | Optional | 60.0 |

## Code Examples

```
"donorOptions": {
      "defaultUpdateLogic": "update_all"
    }
```
