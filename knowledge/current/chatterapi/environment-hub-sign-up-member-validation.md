---
title: "Environment Hub Sign-up Member Validation"
domain: chatterapi
topic: environment-hub-sign-up-member-validation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.974Z
estimatedTokens: 241
keywords: [Environment, Hub, Sign-up, Member, Validation, Validates, input, initiate, org, results]
---

# Environment Hub Sign-up Member Validation

> Validates the input parameters used to initiate an org sign-up in
      the Environment Hub.

# Environment Hub Sign-up Member Validation

Validates the input parameters used to initiate an org sign-up in the Environment Hub.

Resource

```

```

username is the admin username for the org being connected to the Environment Hub.

Available version

36.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| edition | String | The edition to validate. | Optional | 36.0 |
| templateId | String | The template ID to validate. | Optional | 36.0 |

You must specify at least one parameter when you make your request.

Response body for GET

[Environment Hub Sign-up Member Validation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_environment_hub_signup_member_validation.htm#connect_responses_environment_hub_signup_member_validation "The results from validation of the input parameters used to create an Environment Hub member org.")

## Code Examples

```
/connect/environment-hub/signup-member-validation/username
```

## Related Topics

- Environment Hub Sign-up Member
            Validation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_environment_hub_signup_member_validation.htm)
- Environment Hub Sign-up Member Validation (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_enviroment_hub_signup_member_validation.htm)
