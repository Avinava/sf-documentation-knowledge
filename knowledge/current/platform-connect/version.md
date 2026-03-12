---
title: "Version"
domain: platform-connect
topic: version
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.647Z
estimatedTokens: 118
keywords: [Version, JSON-formatted, containing, context, Salesforce, running, server]
---

# Version

> The Version object is a JSON-formatted object containing context information about
                the version of Salesforce running on the server.

# Version

The Version object is a JSON-formatted object containing context information about the version of Salesforce running on the server.

| Field | Description |
| --- | --- |
| api | The API version of the server. |
| season | The season of the release running on the server. |

The following code snippet shows an example of the Version object.

```

```

#### See Also

-   [Environment](atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)

## Code Examples

```
"version": 
{ 
    "api": "66.0", 
    "season": "WINTER" 
}
```

## Related Topics

- Environment (atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)
