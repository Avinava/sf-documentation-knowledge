---
title: "Make a Request in an Experience Cloud Site"
domain: chatterapi
topic: make-a-request-in-an-experience-cloud-site
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.886Z
estimatedTokens: 245
keywords: [Experience, Cloud, Site]
---

# Make a Request in an Experience Cloud Site

> Make a request in an Experience Cloud site.

# Make a Request in an Experience Cloud Site

Make a request in an Experience Cloud site.

Resource

A resource supports Experience Cloud sites unless the documentation states that it doesn’t.

HTTP method

Various

Example

To make a request to a specific site, prefix the resource with /connect/communities/communityId. For example, this resource gets the feed items from a news feed in a specific site:

/connect/communities/communityId​/chatter/feeds/news/me/feed-elements

For more information, see [Build the Resource URL](atlas.en-us.chatterapi.meta/chatterapi/intro_building_url.htm "Access Connect REST API resources by using the URI for your company's instance, combined with version and Experience Cloud site information, and the URI for the resource.") and [Connect to Experience Cloud Sites](atlas.en-us.chatterapi.meta/chatterapi/quickstart_communities.htm "To use OAuth to connect to an Experience Cloud site, use the full path to the site URL.").

Returns

Various

## Related Topics

- Build the Resource URL (atlas.en-us.chatterapi.meta/chatterapi/intro_building_url.htm)
- Connect to Experience Cloud
                Sites (atlas.en-us.chatterapi.meta/chatterapi/quickstart_communities.htm)
