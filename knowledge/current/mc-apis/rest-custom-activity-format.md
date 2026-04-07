---
title: "REST (Custom) Activity Format"
domain: mc-apis
topic: rest-custom-activity-format
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:23.377Z
estimatedTokens: 887
keywords: [REST, Custom, Activity, extend, Journey, Builder, functionality, works, posting, bodies, external, endpoints, #journey-specification-format, Specification, Helpful]
---

# REST (Custom) Activity Format

> The REST activity can be used to extend Journey Builder functionality. It works by posting request bodies to external endpoints.

# REST (Custom) Activity Format

The REST activity can be used to extend Journey Builder functionality. It works by posting request bodies to external endpoints.

## [](#journey-specification-format)Journey Specification Format

The activity must be formatted as specified below. The following JSON object is included in the activities array of a journey, as defined in the Journey Specification.

## Helpful Hints

-   The outcome of this decision affects goal statistics.
-   If the useJwt property is set to true for any of the REST activity's methods, then a JWT for the account is generated, encoded, and sent as the POST body.
-   If the execute method timeout is greater than the maximum allowed for the account, then use the maximum timeout value as configured in the account settings.
-   The maximum timeout for the custom activity is 100,000 milliseconds. See [Custom Activity Configuration](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/custom-activity-config.htm) for more details.

## Compatibility Information

This information is provided for developers upgrading their activities from the legacy format to the Journey Specification.

| 0.5 SerializedObject | 1.0 Serialized Object |
| --- | --- |
| execute.uri | configurationArguments.url |
| execute.verb | configurationArguments.method |
| execute.body | arguments.execute-body |
| execute.format | not supported (default is JSON) |
| execute.useJwt | configurationArguments.useJwt |
| execute.timeout | configurationArguments.timeout |
| execute.inArguments | arguments.executeInArguments |
| execute.headers | arguments.header |

## Sample Activity

```js
{
    "key": "rest-1",
    "name": "My Rest Activity",
    "type": "Rest",
    "metaData": {
        "flowDisplayName":"myFlow" // Displayed in the UI
    },
    "outcomes": [
        {
            "key": "rest-1-outcome-1",
            "next": "<key of next activity>"
        }
    ],
    "configurationArguments": {
        "save": {
            "url": "https://www.example.com/endpoint",
            "useJwt": false,
            "timeout": 3000,
            "headers": "https://www.example.com/endpoint",
            "body":"Hello"
        },
        "validate": {
            "url": "https://www.example.com/endpoint",
            "useJwt": false,
            "timeout": 3000,
            "headers": "https://www.example.com/endpoint",
            "body":"Hello"
        },
        "publish": {
            "url": "https://www.example.com/endpoint",
            "useJwt": false,
            "timeout": 3000,
            "headers": "https://www.example.com/endpoint",
            "body":"Hello"
        }
    },
    "arguments": {
        "execute": {
            "url": "https://www.example.com/endpoint",
            "headers": "",
            "inArguments": [{
                 "myArgument":""
             }],
            "body":"Hello . This field kept for backward compatibility.", // notice the Data Binding
            "method": "POST",
            "useJwt": true,
            "timeout": 3000
        }
    }
}
```

## Related Items

-   [Custom Activities](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/creating-activities.htm)
-   [Encode Custom Activities Using a JWT](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/encode-custom-activities-using-jwt.htm)
-   [Journey Specification](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)

## Related Topics

- Journey Specification (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
