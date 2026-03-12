---
title: "Connect Resources"
domain: chatterapi
topic: connect-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.711Z
estimatedTokens: 387
keywords: [Connect, Resources, context, user’s, org, settings, Experience, Cloud, sites, user, member, Organization]
---

# Connect Resources

> Information about the context user’s org and
   settings, and information about the Experience Cloud sites the context user is a member
  of.

# Connect Resources

Information about the context user’s org and settings, and information about the Experience Cloud sites the context user is a member of.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

These resources have the base URL of /services/data/v66.0/connect, not /services/data/v66.0/chatter.

Available resources:

| Resource | Description |
| --- | --- |
| /connect | A directory of the org and Experience Cloud site resources available to the context user. |
| /connect/organization | Information about the context user’s org and settings. |
| /connect/communities | Get a list of all Experience Cloud sites available to the context user. Create an Experience Cloud site. |

## Connect

A directory of the org and Experience Cloud site resources available to the context user.

Resource

```

```

Available since version

24.0

HTTP methods

GET and HEAD

Response body

[Connect Directory](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_connect_dir.htm "Connect directory.")

## Organization

Information about the context user’s org and settings.

Resource

```

```

Available since version

24.0

HTTP methods

GET or HEAD

Response body

[Organization](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_organization.htm "An org.")

#### See Also

-   [News Feed Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_news.htm "A feed containing feed elements of interest to the context user. You can post feed items to the news feed.")

## Related Topics

- /connect/communities (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_list.htm)
- Connect Directory (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_connect_dir.htm)
- Organization (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_organization.htm)
- News Feed Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_news.htm)
