---
title: "Engagement Split Format"
domain: mc-apis
topic: engagement-split-format
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.802Z
estimatedTokens: 637
keywords: [Engagement, Split, activity, change, path, contact, how, they, did, interact, email, define, logical, flows, journey, clicks, opens, cannot, Helpful, Hints, #journey-specification-format, Specification, Sample, Items]
---

> The engagement split activity is used to change the path for a contact based on how they did or did not interact with an email. It allows you to define logical flows for your journey based on clicks and opens. This activity type cannot be used in a custom activity.

# Engagement Split Format

The engagement split activity is used to change the path for a contact based on how they did or did not interact with an email. It allows you to define logical flows for your journey based on clicks and opens. This activity type cannot be used in a custom activity.

## Helpful Hints

-   This activity works only with the send email types for splitting the journey path.
-   The outcome of this decision affects goal statistics.

## [](#journey-specification-format)Journey Specification Format

The activity must be formatted as specified below. The following JSON object is included in the activities array of a journey, as defined in the Journey Specification.

## Sample Request

```js
{
    "key": "ENGAGEMENTDECISION-1", // The UI adds an incremented number each time a new activity of this type is brought onto the stage.
    "name": "Engagement Decision", // "Last Modified Today"
    "description": "Description for this Activity",
    "type": "EngagementDecision",
    "outcomes": [
        {
            "next": "WAIT-[#]",
            "arguments": {
                "when": true
            }
        },
        {
            "next": "WAIT-[#]",
            "arguments": {
                "when": false
            }
        }
    ],
    "configurationArguments": {
        "refActivityCustomerKey": "EMAIL-1",
        "statsTypeId": 2, // 2 = Email opened, 3 = Email clicked, 6 = Email bounced
        "statusUrlId": "0"
    },
    "metaData": {
        "refActivityName": "<nameOfEmailForReference",
    }
}
```

## Sample Response

```js
{
    "id": "<guid>",
    "key": "ENGAGEMENTDECISION-1", // The UI adds an incremented number each time a new activity of this type is brought onto the stage.
    "name": "Engagement Decision", // "Last Modified Today"
    "description": "Description for this Activity",
    "type": "EngagementDecision",
    "outcomes": [
        {
            "key": "<guid>",
            "next": "WAIT-[#]",
            "arguments": {
                "when": true
            }
        },
        {
            "key": "<guid>",
            "next": "WAIT-[#]",
            "arguments": {
                "when": false
            }
        }
    ],
    "configurationArguments": {
        "refActivityCustomerKey": "EMAIL-1",
        "statsTypeId": 2,
        "statusUrlId": "0"
    },
    "metaData": {
        "refActivityName": "<nameOfEmailForReference",
    }
}
```

## Related Items

[Journey Specification](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)

## Related Topics

- Journey Specification (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
