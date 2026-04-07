---
title: "Internationalize Custom Events"
domain: mc-app-development
topic: internationalize-custom-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.161Z
estimatedTokens: 812
keywords: [Internationalize, Custom, Events, summary, array, defined, their, config.json, under, userInterfaces, collection, key-value, pairs, maps, labels]
---

# Internationalize Custom Events

> Custom events should have a summary array defined in their config.json under userInterfaces. The summary array is a collection of key-value pairs that maps to labels and values on the summary step of the event configuration modal and the event summary on the canvas.

# Internationalize Custom Events

Custom events should have a `summary` array defined in their config.json under `userInterfaces`. The summary array is a collection of key-value pairs that maps to labels and values on the summary step of the event configuration modal and the event summary on the canvas.

```json
"summary": [
    {
        "valuePath": "arguments.countryCode",
        "label": "countryCodeLabel"
    },
    {
        "valuePath": "arguments.firstName",
        "label": "firstNameLabel"
    },
    {
        "valuePath": "arguments.lastName",
        "label": "lastNameLabel"
    },
    {
        "valuePath": "arguments.favoriteFood",
        "label": "favoriteFoodLabel"
    }
]
```

Each `valuePath` maps to a value in the activity's JSON.

Each `label` corresponds to an i18n key in the config's `lang` object:

```json
"lang":{
    "en-US": {
        "name": " Contact Event (Workflow API v1.1)",
        "description": "An example Contact event using workflow API v1.1 format.",
        ...
        "countryCodeLabel": "Country Code",
        "firstNameLabel": "First Name",
        "lastNameLabel": "Last Name",
        "favoriteFoodLabel": "Favorite Food"
    }
}
```

These key-value pairs are displayed on the summary on the canvas, as well as the final step of the event selection wizard.

## Example config.json Schema

```json
{
    "fields":[
        {
            "name":"countryCode",
            "dataType":"text",
            "maxLength":"50",
            "isNullable":false,
            "defaultValue":""
        },
        {
            "name":"firstName",
            "dataType":"text",
            "maxLength":"100",
            "isNullable":false,
            "defaultValue":""
        },
        {
            "name":"lastName",
            "dataType":"text",
            "maxLength":"100",
            "isNullable":false,
            "defaultValue":""
        },
        {
            "name":"My Integer",
            "dataType":"number",
            "maxLength":"",
            "isNullable":false,
            "defaultValue":""
        },
        {
            "name":"My Date",
            "dataType":"date",
            "maxLength":"",
            "isNullable":false,
            "defaultValue":""
        },
        {
            "name":"My Bool",
            "dataType":"boolean",
            "maxLength":"",
            "isNullable":false,
            "defaultValue":"true"
        },
        {
            "name":"My Email",
            "dataType":"email",
            "maxLength":"",
            "isNullable":false,
            "defaultValue":""
        },
        {
            "name":"My Phone",
            "dataType":"phone",
            "maxLength":"",
            "isNullable":false,
            "defaultValue":""
        },
        {
            "name":"My Decimal",
            "dataType":"decimal",
            "maxLength":"18,0",
            "isNullable":false,
            "defaultValue":""
        },
        {
            "name":"My Locale",
            "dataType":"locale",
            "maxLength":"",
            "isNullable":false,
            "defaultValue":""
        }
    ],
    "sendableCustomObjectField": "My Email",
    "sendableSubscriberField": "_SubscriberKey"
}
```
