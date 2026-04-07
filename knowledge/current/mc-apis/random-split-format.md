---
title: "Random Split Format"
domain: mc-apis
topic: random-split-format
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:18.431Z
estimatedTokens: 381
keywords: [Random, Split, activity, marketer, multiple, outcomes, contacts, randomly, siphoned, journey, cannot, Helpful, Hints, #journey-specification-format, Specification, Sample, Items]
---

> The random split activity allows a marketer to create a multiple outcomes that contacts are randomly siphoned within a journey. This activity type cannot be used in a custom activity.

# Random Split Format

The random split activity allows a marketer to create a multiple outcomes that contacts are randomly siphoned within a journey. This activity type cannot be used in a custom activity.

## Helpful Hints

-   The percentages must add up to 100 and are represented as only positive integers greater than zero and less than 100.
-   The outcome of this decision affects goal statistics.

## [](#journey-specification-format)Journey Specification Format

The activity must be formatted as specified below. The following JSON object is included in the activities array of a journey, as defined in the Journey Specification.

## Sample Request

```js
{
    "key":"Random-Split-1",
    "type":"randomSplit",
    "outcomes":[
        {
            "next":"send-sms",
            "arguments":{
                     "percentage":90
            }
        },
        {
            "next":null,
            "arguments":{
                     "percentage":10
            }
        }
    ]
}
```

## Sample Response

```js
{
    "id": "<Marketing Cloud provided GUID>",
    "key":"Random-Split-1",
    "type":"randomSplit",
    "outcomes":[
        {
            "next":"send-sms",
            "arguments":{
                     "percentage":90
            }
        },
        {
            "next":null,
            "arguments":{
                     "percentage":10
            }
        }
    ]
}
```

## Related Items

[Journey Specification](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)

## Related Topics

- Journey Specification (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
