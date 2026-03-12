---
title: "Hold Definition (POST)"
domain: edu-cloud-dev-guide
topic: hold-definition-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.930Z
estimatedTokens: 360
keywords: [Hold, Definition, POST, reasons, resolution, plan]
---

# Hold Definition (POST)

> Create a hold definition with hold reasons and a resolution plan.

# Hold Definition (POST)

Create a hold definition with hold reasons and a resolution plan.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Hold Setup](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_hold_setup_output.htm "Output representation of the response details to create a hold setup.")

## Code Examples

```
/connect/education/holds
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/education/holds
```

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
- Hold Setup (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_hold_setup_output.htm)
