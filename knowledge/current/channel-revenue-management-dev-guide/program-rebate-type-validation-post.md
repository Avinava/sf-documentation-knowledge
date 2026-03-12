---
title: "Program Rebate Type Validation (POST)"
domain: channel-revenue-management-dev-guide
topic: program-rebate-type-validation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.891Z
estimatedTokens: 220
keywords: [Program, Rebate, Validation, POST, Validates, setup, configuration, applicable, rules, specific]
---

# Program Rebate Type Validation (POST)

> Validates the setup, configuration, and applicable rules of a specific program rebate
    type.

# Program Rebate Type Validation (POST)

Validates the setup, configuration, and applicable rules of a specific program rebate type.

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
| programRebateTypeId | String | The ID of the program rebate type for which the setup issue is to be validated. | Required. | 65.0 |

Response body for POST

[Program Rebate Type Validation Response](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/connect_responses_program_rebate_type_validation_response.htm "The result of validating a program rebate type. It includes validation status, messages, and any identified configuration issues.")

## Code Examples

```
/connect/rebates/rebate-configuration-check
```

```
https://yourInstance.salesforce.com/services/data/v65.0/connect/rebates/rebate-configuration-check
```

```
{
  "programRebateTypeId": "0hvLT0000000GCtYAM"
}
```

## Related Topics

- Program Rebate Type Validation Response (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/connect_responses_program_rebate_type_validation_response.htm)
