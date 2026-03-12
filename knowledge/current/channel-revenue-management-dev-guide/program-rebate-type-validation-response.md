---
title: "Program Rebate Type Validation Response"
domain: channel-revenue-management-dev-guide
topic: program-rebate-type-validation-response
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.907Z
estimatedTokens: 207
keywords: [Program, Rebate, Validation, result, validating, includes, status, messages, any, identified, configuration, issues]
---

# Program Rebate Type Validation Response

> The result of validating a program rebate type. It includes validation status, messages, and any identified configuration issues.

# Program Rebate Type Validation Response

The result of validating a program rebate type. It includes validation status, messages, and any identified configuration issues.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Program Rebate Type Validation Error Response[] | Collection of errors found during validation. | Big, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the program rebate type validation was successful. | Big, 65.0 | 65.0 |
| isValid | Boolean | Indicates the status of the program rebate type setup based on validation rules. | Big, 65.0 | 65.0 |
| results | Program Rebate Type Validation Results Response[] | Collection of setup-related validation errors. | Big, 65.0 | 65.0 |

## Code Examples

```
{
    "isSuccess": true,
    "errors": [],
    "isValid": false,
    "results": ["{ResourceName} defined in eligibity criteria is not available in the data sources in DPE definition : {DPE definition name}"]
}
```

## Related Topics

- Program Rebate Type Validation Error Response (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/connect_responses_program_rebate_type_validation_error_response.htm)
- Program Rebate Type Validation Results
                Response (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/connect_responses_program_rebate_type_validation_results_response.htm)
