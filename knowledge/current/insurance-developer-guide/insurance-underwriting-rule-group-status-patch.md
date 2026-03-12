---
title: "Insurance Underwriting Rule Group Status (PATCH)"
domain: insurance-developer-guide
topic: insurance-underwriting-rule-group-status-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.252Z
estimatedTokens: 188
keywords: [Insurance, Underwriting, Rule, Group, Status, PATCH]
---

# Insurance Underwriting Rule Group Status (PATCH)

> Update the status of an underwriting rule group.

# Insurance Underwriting Rule Group Status (PATCH)

Update the status of an underwriting rule group.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

PATCH

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | The status of the underwriting rule group. | Required | 63.0 |

Response body for PATCH

[Insurance Underwriting Rule Group Update Status](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_underwriting_rule_group_update_status_output.htm "Output representation of insurance underwriting rule group update status request.")

## Code Examples

```
/connect/insurance/underwriting-rule-group-status/uwrGroupId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/underwriting-rule-group-status/uwrGroupId
```

```
{
"status": "Active"
}
```

## Related Topics

- Insurance Underwriting Rule Group Update Status (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_underwriting_rule_group_update_status_output.htm)
