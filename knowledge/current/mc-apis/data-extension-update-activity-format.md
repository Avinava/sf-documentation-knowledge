---
title: "Data Extension Update Activity Format"
domain: mc-apis
topic: data-extension-update-activity-format
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:16.357Z
estimatedTokens: 380
keywords: [Extension, Activity, modify, contact, model, attribute, runtime, cannot, #journey-specification-format, Journey, Specification, Sample, Items]
---

> The data extension update activity is used to modify the contact model attribute and data extension values at runtime. This activity type cannot be used in a custom activity.

# Data Extension Update Activity Format

The data extension update activity is used to modify the contact model attribute and data extension values at runtime. This activity type cannot be used in a custom activity.

## [](#journey-specification-format)Journey Specification Format

The activity must be formatted as specified below. The following JSON object is included in the activities array of a journey, as defined in the Journey Specification.

## Sample Request

```js
{
    "key": "data-extension-update-1",
    "name": "My Data Extension Update 1",
    "type": "DataExtensionUpdate",
    "outcomes": [
        {
            "key": "dataUpdate-outcome-1",
            "next": "<key of next activity>"
        }
    ],
    "arguments": {
        "value": "some value"
    },
    "configurationArguments": {
        "dataExtensionId": "<data extension id>",
        "field": "<field id>"
    }
}
```

## Sample Response

```js
{
    "id": "<Marketing Cloud provided GUID>",
    "key": "data-extension-update-1",
    "name": "My Data Extension Update 1",
    "type": "DataExtensionUpdate",
    "outcomes": [
        {
            "key": "dataUpdate-outcome-1",
            "next": "<key of next activity>"
        }
    ],
    "arguments": {
        "value": "some value"
    },
    "configurationArguments": {
        "dataExtensionId": "<data extension id>",
        "field": "<field id>"
    }
}
```

## Related Items

[Journey Specification](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)

## Related Topics

- Journey Specification (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
