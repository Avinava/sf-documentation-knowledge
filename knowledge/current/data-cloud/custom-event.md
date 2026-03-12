---
title: "Custom Event"
domain: data-cloud
topic: custom-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.189Z
estimatedTokens: 71
keywords: [Custom, Event, capture, user-defined, attributes, mobile, SDK, define, source, custom, event., then, map, fields, Schema, Mobile, naming, conventions., Example]
---

# Custom Event

> To capture user-defined attributes in the mobile SDK, define the source properties in a
        custom event. You can then map the fields to a Custom Event Schema using the Mobile Schema
        naming conventions.

# Custom Event

To capture user-defined attributes in the mobile SDK, define the source properties in a custom event. You can then map the fields to a Custom Event Schema using the Mobile Schema naming conventions.

## Custom Event Example

**iOS**

```

```

**Android**

```

```

## Code Examples

```
CustomEvent(
    name: "Custom Event",
    attributes: [
        "giftWrap" : true,
        "giftMessage" : "Happy Birthday",
        "giftWrapOptions": [
            "paperColor": "green",
            "ribbon": false
  ]
    ]
)
```

```
EventManager.customEvent(
    name = "Custom Event",
    attributes = mapOf(
        "gift" to mapOf(
            "message" to "Happy Birthday",
            "wrap" to true,
            "wrapOptions" to mapOf(
                "paper-color" to "green",
                "ribbon" to false
            )
        )
    )
)
```
