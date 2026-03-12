---
title: "Additional Fields Field Set Input"
domain: insurance-developer-guide
topic: additional-fields-field-set-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.657Z
estimatedTokens: 208
keywords: [Additional, Input, representation, IDs, asset, coverage, participant, policy, objects]
---

# Additional Fields Field Set Input

> Input representation for the list of the field set IDs for asset, coverage, participant,
    and policy objects.

# Additional Fields Field Set Input

Input representation for the list of the field set IDs for asset, coverage, participant, and policy objects.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assetField​SetId | String | ID of the field set to get the fields that are associated with the asset object. | Optional | 65.0 |
| coverageField​SetId | String | ID of the field set to get the fields that are associated with the coverage object. | Optional | 65.0 |
| participant​FieldSetId | String | ID of the field set to get the fields that are associated with the participant object. | Optional | 65.0 |
| policy​FieldSetId | String | ID of the field set to get the fields that are associated with the policy object. | Optional | 65.0 |

## Code Examples

```
{
    "policyFieldSetId": "0IXxx0000004CYqGAM",
    "assetFieldSetId": "0IXxx0000004CaSGAU",
    "participantFieldSetId": "0IXxx0000004CdgGAE",
    "coverageFieldSetId": "0IXxx0000004Cc4GAE"
  }
```
