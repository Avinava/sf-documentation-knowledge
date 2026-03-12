---
title: "Benefits Verification Request"
domain: life-sciences-dev-guide
topic: benefits-verification-request
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.075Z
estimatedTokens: 388
keywords: [Benefits, Verification, Verify, looks]
---

# Benefits Verification Request

> This is what a Verify Benefits request looks like.

# Benefits Verification Request

This is what a Verify Benefits request looks like.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| encounterDate | String | Encounter Date |  | 53.0 |
| memberAccountId | String | Member Account Id |  | 53.0 |
| memberPlanId | String | Member Plan Id |  | 53.0 |
| providerNpi | String | Provider Npi |  | 53.0 |
| providerOrganizationName | String | Provider Organization Name |  | 53.0 |
| providerType | String | Provider Type |  | 53.0 |
| serviceTypeCodes | String[] | Service Type Codes |  | 53.0 |

#### See Also

-   [Benefits Verification (POST)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_resources_verify_benefits.htm "The Verify Benefits API call is the main resource for checking which health benefits are available to a patient.")

-   [Benefits Verification Input](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_benefits_verification_input.htm "This is the input structure of a Verify Benefits API call.")

-   [Benefits Verification Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_benefits_verification_output.htm "This is the content of the output from running the Verify Benefits API call.")

-   [Benefits Verification Response](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_benefits_verification_response.htm "This is the content of the response from a Verify Benefits API call.")

## Related Topics

- Benefits Verification (POST) (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_resources_verify_benefits.htm)
- Benefits Verification Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_benefits_verification_input.htm)
- Benefits Verification Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_benefits_verification_output.htm)
- Benefits Verification Response (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_benefits_verification_response.htm)
