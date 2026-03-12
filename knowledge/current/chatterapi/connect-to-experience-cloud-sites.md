---
title: "Connect to Experience Cloud Sites"
domain: chatterapi
topic: connect-to-experience-cloud-sites
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.944Z
estimatedTokens: 263
keywords: [Connect, Experience, Cloud, Sites, OAuth, site, full, path, URL]
---

# Connect to Experience Cloud Sites

> To use OAuth to connect to an Experience Cloud site, use the full path to the site
            URL.

# Connect to Experience Cloud Sites

To use OAuth to connect to an Experience Cloud site, use the full path to the site URL.

To authenticate a user using the authorize URL, replace the MyDomainName.my.salesforce.com host name with the full path to the site URL. This URL example is the non-site URL.

```

```

This URL example is the site URL.

```

```

When implemented successfully, this URL directs users to your app’s branded login page. After they authorize the app, set a user access token and a refresh token for future authentication. In requests for the token endpoint, replace the host with the site.

```

```

To request a Connect REST API resource, use the site URL and specify the site ID.

```

```

Alternately, you can replace the host name with the full path to the site URL.

```

```

-   [← Previous](atlas.en-us.chatterapi.meta/chatterapi/quickstart_connecting.htm "Step Three: Connect to Connect REST API Using OAuth")
-   [Next →](atlas.en-us.chatterapi.meta/chatterapi/quickstart_postman.htm "Send a Request with Postman")

## Code Examples

```
https://MyDomainName.my.salesforce.com/services/oauth2/authorize?
response_type=token&client_id=your_app_id&redirect_uri=your_redirect_uris
```

```
https://MyDomainName.my.site.com/services/oauth2/authorize?
response_type=token&client_id=your_app_id&redirect_uri=your_redirect_uri
```

```
https://MyDomainName.my.site.com/services/oauth2/token
```

```
https://MyDomainName.my.site.com/services/data/v29.0/connect
/communities/communityId/chatter/feeds/news/me/feed-elements
```

```
https://MyDomainName.my.site.com/sitepath/services/data/v29.0/connect
/communities/communityId/chatter/feeds/news/me/feed-elements
```

## Related Topics

- ← Previous (atlas.en-us.chatterapi.meta/chatterapi/quickstart_connecting.htm)
- Next → (atlas.en-us.chatterapi.meta/chatterapi/quickstart_postman.htm)
