---
title: "Influence Resource"
domain: chatterapi
topic: influence-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.594Z
estimatedTokens: 221
keywords: [Influence, Resource, percentile, thresholds, categorize, organization’s, users, their, Chatter]
---

# Influence Resource

> List of the percentile thresholds
used to categorize an organization’s users by their influence
in Chatter.

# Influence Resource

List of the percentile thresholds used to categorize an organization’s users by their influence in Chatter.

Users are ranked based on the number of posts and comments made, and comments and likes received. The percentile associated with a category represents the bottom threshold for that influencer category. For example: 0.25 defines the cutoff for the Active Influencer category, which means it includes users with an influence rank equal to or greater than the 25th percentile (25%) and less than the next highest category threshold.

## Influence Thresholds

Resource

```

```

```

```

Available since version

24.0

Requires Chatter

Yes

HTTP method

GET or HEAD

Response body

[Influence Thresholds](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_influence_thresholds.htm "Chatter influence thresholds.")

Example response body

```

```

## Code Examples

```
/chatter/influence/thresholds
```

```
/connect/communities/communityId/chatter/influence/thresholds
```

```
{"thresholds": [
   {
      "name": "Top Influencer",
      "threshold": "0.8",
   }
   {
      "name": "Active Influencer",
      "threshold": "0.25",
   }
   {
      "name": "Observer",
      "threshold": "0.0",
   }
]}
```

## Related Topics

- Influence
                  Thresholds (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_influence_thresholds.htm)
