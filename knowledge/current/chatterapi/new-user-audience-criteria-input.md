---
title: "New User Audience Criteria Input"
domain: chatterapi
topic: new-user-audience-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.190Z
estimatedTokens: 189
keywords: [New, User, Audience, Criteria, Input, members, custom, recommendation]
---

# New User Audience Criteria Input

> Criteria for the new members type of custom recommendation
      audience.

# New User Audience Criteria Input

Criteria for the new members type of custom recommendation audience.

Root XML tag

<criteria>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| value | Double | The maximum number of days since a user became a site member. For example, if you specify 30, anyone who became a site member in the last 30 days is included in the new members audience. | Required | 36.0 |
| type | String | Value must be MaxDaysInCommunity. | Required | 36.0 |

#### See Also

-   [Custom Recommendation Audience Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_recommendation_audience_input.htm "A custom recommendation audience.")

## Code Examples

```
{
   "value":"30",
   "type":"MaxDaysInCommunity"
}
```

## Related Topics

- Custom Recommendation Audience Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_recommendation_audience_input.htm)
