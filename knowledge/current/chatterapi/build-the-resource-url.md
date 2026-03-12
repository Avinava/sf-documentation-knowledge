---
title: "Build the Resource URL"
domain: chatterapi
topic: build-the-resource-url
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.771Z
estimatedTokens: 451
keywords: [Build, Resource, URL, Access, Connect, REST, API, resources, URI, company's, instance, combined, version, Experience, Cloud]
---

# Build the Resource URL

> Access Connect REST API resources by using the URI for your company's instance,
      combined with version and Experience Cloud site information, and the URI for the
      resource.

# Build the Resource URL

Access Connect REST API resources by using the URI for your company's instance, combined with version and Experience Cloud site information, and the URI for the resource.

For example, building a URL without Experience Cloud sites, your instance is:

```

```

And the version information is:

```

```

And the resource is:

```

```

Put together, the full URL is:

```

```

To access resources that are part of an Experience Cloud site, use this path after the version information and before the resource:

```

```

For example, the following full URL accesses a news feed resource in a site:

```

```

To access resources in the default Experience Cloud site, use the internal shortcut as the site ID:

```

```

You can use the internal shortcut even if digital experiences isn’t enabled. For example, if you’re developing an application for multiple orgs, not all of which use Experience Cloud sites, you can use this shortcut.

The response bodies include URLs with /connect/communities/internal. This format enables you to perform string interpolation when referencing Experience Cloud sites.

To access resources in the default Experience Cloud site, you can also use the /chatter resources directly (without /connect/communities/internal). The response bodies don’t include URLs with /connect/communities/internal.

In addition, you can use your org’s URL for an Experience Cloud site to access resources in it. For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

To query resources from your Salesforce org where Experience Cloud sites have same-named objects, such as Groups, you must make the request from your Experience Cloud site. My Domain name or site-specific resources are returned.

## Code Examples

```
https://instance_name
```

```
/services/data/v66.0
```

```
/chatter/feeds/news/me/feed-elements
```

```
https://instance_name/services/data/v66.0/chatter/
feeds/news/me/feed-elements
```

```
/connect/communities/communityId
```
