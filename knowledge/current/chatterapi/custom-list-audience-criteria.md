---
title: "Custom List Audience Criteria"
domain: chatterapi
topic: custom-list-audience-criteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.164Z
estimatedTokens: 166
keywords: [Custom, Audience, Criteria, recommendation]
---

# Custom List Audience Criteria

> The criteria for the custom list type of recommendation
    audience.

# Custom List Audience Criteria

The criteria for the custom list type of recommendation audience.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| memberCount | Integer | Total number of members in the custom recommendation audience. | Small, 36.0 | 36.0 |
| members | User Reference Collection | Members of the custom recommendation audience. | Big, 36.0 | 36.0 |
| type | String | CustomList | Small, 36.0 | 36.0 |

#### See Also

-   [Custom Recommendation Audience](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_audience.htm "A custom recommendation audience.")

## Related Topics

- User Reference Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_reference_collection.htm)
- Custom Recommendation Audience (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_audience.htm)
