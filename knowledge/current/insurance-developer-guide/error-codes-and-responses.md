---
title: "Error Codes and Responses"
domain: insurance-developer-guide
topic: error-codes-and-responses
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.884Z
estimatedTokens: 442
keywords: [Error, Codes, Responses, Insurance, APIs, may, encounter, messages, under, certain, conditions, family, Policy, Administration, Quoting]
---

# Error Codes and Responses

> When using the Insurance APIs, you may encounter error codes and messages under certain
    conditions. For each family in Insurance, such as Insurance Policy Administration and Quoting,
    it lists the potential error codes that are related to a specific family and the associated
    error messages.

# Error Codes and Responses

When using the Insurance APIs, you may encounter error codes and messages under certain conditions. For each family in Insurance, such as Insurance Policy Administration and Quoting, it lists the potential error codes that are related to a specific family and the associated error messages.

Error codes are categorized by ranges to indicate their scope and applicability. Each error code follows the format SF-xxxx-yyyy, where:

-   SF identifies Salesforce error codes.
-   xxxx specifies the Insurance API family or scope.
-   yyyy is a unique four-digit identifier for the individual error.

Code ranges and their applicability:

-   SF-0001-xxxx—Common error codes applicable to all Insurance APIs across all Insurance families.
-   SF-0002-xxxx—Error codes specific to the Insurance Quoting APIs.
-   SF-0003-xxxx—Error codes specific to the Insurance Policy Administration APIs.

The following is a list of error code details for the Insurance APIs.

-   **[Common Error Codes](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/insurance_common_error_codes.htm)**
    Contains the error codes and error code messages that are applicable to all Insurance APIs across all Insurance families.
-   **[Insurance Policy Administration Error Codes](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/insurance_policy_admin_error_codes.htm)**
    Contains the error codes and error code messages that are applicable to the Insurance Policy Administration APIs.
-   **[Insurance Quoting Errors](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/insurance_quoting_error_codes.htm)**
    Contains the error codes and error code messages that are applicable to the Insurance Quoting APIs.

## Related Topics

- Common Error Codes (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/insurance_common_error_codes.htm)
- Insurance Policy Administration Error Codes (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/insurance_policy_admin_error_codes.htm)
- Insurance Quoting Errors (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/insurance_quoting_error_codes.htm)
