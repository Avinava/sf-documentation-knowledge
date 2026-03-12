---
title: "Pardot Business Unit Context Resource"
domain: chatterapi
topic: pardot-business-unit-context-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.083Z
estimatedTokens: 244
keywords: [Pardot, Business, Unit, Context, Resource, units, user, access]
---

# Pardot Business Unit Context Resource

> Get the Pardot business units the context user has access
    to.

# Pardot Business Unit Context Resource

Get the Pardot business units the context user has access to.

Resource

```

```

Available version

55.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isCurrent | Boolean | Specifies whether to return only the business unit that’s selected as the context user's current business unit context in the business unit switcher of the Pardot Lightning app (true) or to return only the business units that aren’t selected as the context user's current business unit context (false). If unspecified, all the business units the user has access to, including current and non-current business units, are returned. | Optional | 55.0 |

Response body for GET

[Pardot Business Unit Context Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pardot_business_unit_context_output.htm "Pardot business unit context.")

## Code Examples

```
/connect/pardot/business-unit-context
```

## Related Topics

- Pardot Business Unit Context Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pardot_business_unit_context_output.htm)
