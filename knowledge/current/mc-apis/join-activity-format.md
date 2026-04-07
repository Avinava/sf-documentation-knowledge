---
title: "Join Activity Format"
domain: mc-apis
topic: join-activity-format
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:17.705Z
estimatedTokens: 366
keywords: [Join, Activity, actually, Joins, convention, outcomes, represented, journey, activities, easier, edit, Multiple, pointing, constitutes, marketers, easily, branches, #journey-specification-format, Specification, Sample, Items]
---

> Join is not actually an activity. Joins are a convention of outcomes, but are represented in the journey as activities to make them easier to edit. Multiple outcomes with the same next value, pointing to the same activity, constitutes a join. Joins are used by marketers to to easily join branches ba

# Join Activity Format

Join is not actually an activity. Joins are a convention of outcomes, but are represented in the journey as activities to make them easier to edit. Multiple outcomes with the same next value, pointing to the same activity, constitutes a join. Joins are used by marketers to to easily join branches back together. This activity type cannot be used in a custom activity.

## [](#journey-specification-format)Journey Specification Format

The activity must be formatted as specified below. The following JSON object is included in the activities array of a journey, as defined in the Journey Specification.

## Sample Request

```js
{
    "key": "Wait4",
    "type": "Wait",
    "configurationArguments": {
        "waitDuration": 2,
        "waitUnit": "DAYS"
    },
    "outcomes": [
        {
            "next": "Email6"
        }
    ]
},
{
    "key": "Email5",
    "type": "EMAILV2",
    "outcomes": [
        {
            "next": "Email6"
        }
    ]
}
```

## Sample Response

```js
{
    "key": "Wait4",
    "type": "Wait",
    "configurationArguments": {
        "waitDuration": 2,
        "waitUnit": "DAYS"
    },
    "outcomes": [
        {
            "next": "Email6"
        }
    ]
},
{
    "key": "Email5",
    "type": "EMAILV2",
    "outcomes": [
        {
            "next": "Email6"
        }
    ]
}
```

## Related Items

[Journey Specification](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)

## Related Topics

- Journey Specification (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
