---
title: "Attributes"
domain: platform-connect
topic: attributes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.216Z
estimatedTokens: 220
keywords: [Attributes, JSON-formatted, canvas, app, appears]
---

# Attributes

> The Attributes object is a JSON-formatted object that contains information about the
                object on which the canvas app appears.

# Attributes

The Attributes object is a JSON-formatted object that contains information about the object on which the canvas app appears.

| Field | Description |
| --- | --- |
| type | The object that the canvas app is associated with. This value could be a standard object like Account or a custom object like Warehouse__c.If the canvas app appears in the publisher, then the type is the name of the associated object. For example, CollaborationGroup or Account. If the canvas app appears in a user feed or the feed associated with an object, then the type is FeedItem. |
| url | The URL of the associated object. The format of the URL is the same as the REST API resource for the given record. |

The following code snippet shows an example of the Attributes object.

```

```

#### See Also

-   [Record](atlas.en-us.platform_connect.meta/platform_connect/record_object.htm)

## Code Examples

```
"record":{
    "attributes":{
        "type":"Account",
        "url":"/services/data/v66.0/sobjects/Account/001xx000003DGWiAAO"
    },
    "Id":"001xx000003DGWiAAO"
}
```

## Related Topics

- Record (atlas.en-us.platform_connect.meta/platform_connect/record_object.htm)
