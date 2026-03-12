---
title: "Accessing ConnectApi Data in Experience Cloud
      Sites"
domain: apex-guide
topic: accessing-connectapi-data-in-experience-cloud-sites
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.891Z
estimatedTokens: 316
keywords: [Accessing, ConnectApi, Data, Experience, Cloud, Sites, work, context, site]
---

# Accessing ConnectApi Data in Experience Cloud
      Sites

> Many ConnectApi methods work within the context
      of a single Experience Cloud site.

# Accessing ConnectApi Data in Experience Cloud Sites

Many ConnectApi methods work within the context of a single Experience Cloud site.

Many ConnectApi methods include communityId as the first argument. If you don’t have digital experiences enabled, use internal or null for this argument.

If you have digital experiences enabled, the communityId argument specifies whether to execute a method in the context of the default Experience Cloud site (by specifying internal or null) or in the context of a specific site (by specifying an ID). Any entity, such as a comment or a feed item, referred to by other arguments in the method must be in the specified site. The ID is included in URLs returned in the output.

Some ConnectApi methods include siteId as an argument. Unlike communityId, if you don’t have digital experiences enabled, you can’t use these methods. The site ID is included in URLs returned in the output.

Most URLs returned in ConnectApi output objects are Connect REST API resources.

If you specify an ID, URLs returned in the output use the following format:

```

```

If you specify internal, URLs returned in the output use the same format:

```

```

If you specify null, URLs returned in the output use one of these formats:

```

```

## Code Examples

```
/connect/communities/communityId/resource
```

```
/connect/communities/internal/resource
```

```
/chatter/resource

/connect/resource
```
