---
title: "Hold Setup Input"
domain: edu-cloud-dev-guide
topic: hold-setup-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.813Z
estimatedTokens: 274
keywords: [Hold, Setup, Input, representation]
---

# Hold Setup Input

> Input representation of the request to create a hold.

# Hold Setup Input

Input representation of the request to create a hold.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| canResolve​Automatically | Boolean | Indicates whether the restriction can be auto-resolved (true) or requires manual resolution (false). | Optional | 64.0 |
| description | String | Description of the hold. | Optional | 64.0 |
| effectiveFrom | String | Date from which the hold is effective. | Optional | 64.0 |
| effectiveTo | String | Date till which the hold is effective. | Optional | 64.0 |
| name | String | Name of the hold. | Optional | 64.0 |
| reasons | String[] | Reasons for the hold. | Optional | 64.0 |
| regulatory​AuthorityId | String | Unique ID of the regulatory authority. | Required | 64.0 |
| resolution | Action Plan Template Input | Unique ID of the action plan template associated with the resolution of this hold. | Required | 64.0 |
| subject | String | Subject of the hold. | Optional | 64.0 |
| type | String | Type of the hold. | Optional | 64.0 |

## Code Examples

```
{
  "name": "RestrictionName",
  "subject": "string",
  "description": "Updated description for academic probation hold.",
  "regulatoryAuthorityId": "string",
  "reasons": [
    "0x6frr566",
    "0x5674432",
    "0x6frzz566"
  ],
  "resolution": {
    "actionPlanTemplateVersionId": "0x4467778"
  },
  "type": "Academic",
  "effectiveFrom": "2025-07-29",
  "effectiveTo": "2025-07-29",
  "canResolveAutomatically": true
}
```

## Related Topics

- Action Plan Template
                      Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_action_plan_template_inpu.htm)
