---
title: "Feeds Resource"
domain: chatterapi
topic: feeds-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.054Z
estimatedTokens: 145
keywords: [Feeds, Resource, context, user, able, view]
---

# Feeds Resource

> A list of all of the feeds the context user is able to
   view.

# Feeds Resource

A list of all of the feeds the context user is able to view.

Each user may have a different set of feeds. Use this resource to determine what feeds are available. In addition, the different feeds may have unique labels as well as URLs. Use the given labels returned in this resource and avoid hard-coding any of these values.

Resource

```

```

```

```

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET or HEAD

Response body

[Feed Directory](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_dir.htm "Feed directory.")

## Code Examples

```
/chatter/feeds/
```

```
/connect/communities/communityId/chatter/feeds/
```

## Related Topics

- Feed Directory (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_dir.htm)
