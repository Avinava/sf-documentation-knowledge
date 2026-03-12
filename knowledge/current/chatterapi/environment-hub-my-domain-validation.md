---
title: "Environment Hub My Domain Validation"
domain: chatterapi
topic: environment-hub-my-domain-validation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.984Z
estimatedTokens: 257
keywords: [Environment, Hub, Domain, Validation, Validates, unique, determines, URLs, enable, sign-on, connect, organizations, Results, attempt, validate]
---

# Environment Hub My Domain Validation

> Validates that the specified My Domain name is available, valid, and
      unique. Your My Domain name determines the URLs used when you enable single sign-on or connect
      existing organizations to Environment Hub.

# Environment Hub My Domain Validation

Validates that the specified My Domain name is available, valid, and unique. Your My Domain name determines the URLs used when you enable single sign-on or connect existing organizations to Environment Hub.

Resource

```

```

myDomainName is the subdomain to use for My Domain.

Available version

36.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orgEdition | String | The edition of the org to validate. Possible values are:Personal EditionContact Manager EditionTeam Edition (for Group Edition)Professional EditionEnterprise EditionUnlimited EditionDeveloper Edition | Optional | 36.0 |

Response body for GET

[Environment Hub My Domain Validation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_environment_hub_my_domain_validation.htm#connect_responses_environment_hub_my_domain_validation "Results from an attempt to validate a My Domain value.")

## Code Examples

```
/connect/environment-hub/my-domain-validation/myDomainName
```

## Related Topics

- Environment Hub My Domain Validation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_environment_hub_my_domain_validation.htm)
- Environment Hub My Domain Validation (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_environment_hub_my_domain_validation.htm)
