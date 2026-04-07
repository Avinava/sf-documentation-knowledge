---
title: "Wait Format"
domain: mc-apis
topic: wait-format
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:25.849Z
estimatedTokens: 1069
keywords: [Wait, activity, indicate, period, time, journey, pause, continuing, process, subsequent, outcome, cannot, custom, #journey-specification-format, Specification]
---

# Wait Format

> The wait activity is used to indicate a period of time that a journey should pause before continuing on to process the subsequent outcome activity. This activity type cannot be used in a custom activity.

# Wait Format

The wait activity is used to indicate a period of time that a journey should pause before continuing on to process the subsequent outcome activity. This activity type cannot be used in a custom activity.

## [](#journey-specification-format)Journey Specification Format

The activity must be formatted as specified below. The following JSON object is included in the activities array of a journey, as defined in the Journey Specification.

## Helpful Hints

-   Valid values for the configurationArguments.waitUnit property are minutes, days, hours, weeks, or months.

## Sample Request

```js
{
    "key": "wait-1",
    "name": "My Wait Activity",
    "type": "Wait",
    "outcomes": [{
            "key":"wait-1-outcome-1",
            "next":"key of next activity"
    }],
    "configurationArguments": {
         "waitDuration": "1",
         "waitUnit":"weeks",
         "specifiedTime": "00:00",
         "timeZoneId": "one of the valid timezones listed below"
    }
}
```

## Sample Response

```js
{
    "id": "Marketing Cloud provided GUID",
    "key": "wait-1",
    "name": "My Wait Activity",
    "type": "Wait",
    "outcomes": [{
            "key":"wait-1-outcome-1",
            "next":"key of next activity"
    }],
    "configurationArguments": {
         "waitDuration": "1",
         "waitUnit":"weeks",
    }
}
```

## Compatibility Information

This information is provided for developers upgrading their activities from the legacy format to the Journey Spec.

| 0.5 Value | 1.0 Value |
| --- | --- |
| duration | waitDuration |
| durationUnits | waitUnit |
| specifiedTime | specificTime |
| timeZone | timeZoneId |

## Valid Timezones for Use with Wait Activities

-   Afghanistan Standard Time
-   Alaskan Standard Time
-   Arab Standard Time
-   Arabian Standard Time
-   Arabic Standard Time
-   Argentina Standard Time
-   Atlantic Standard Time
-   AUS Central Standard Time
-   AUS Eastern Standard Time
-   Azerbaijan Standard Time
-   Azores Standard Time
-   Canada Central Standard Time
-   Cape Verde Standard Time
-   Caucasus Standard Time
-   Cen. Australia Standard Time
-   Central America Standard Time
-   Central Asia Standard Time
-   Central Brazilian Standard Time
-   Central Europe Standard Time
-   Central European Standard Time
-   Central Pacific Standard Time
-   Central Standard Time
-   Central Standard Time (Mexico)
-   China Standard Time
-   Dateline Standard Time
-   E. Africa Standard Time
-   E. Australia Standard Time
-   E. Europe Standard Time
-   E. South America Standard Time
-   Eastern Standard Time
-   Egypt Standard Time
-   Ekaterinburg Standard Time
-   Fiji Standard Time
-   FLE Standard Time
-   Georgian Standard Time
-   GMT Standard Time
-   Greenland Standard Time
-   Greenwich Standard Time
-   GTB Standard Time
-   Hawaiian Standard Time
-   India Standard Time
-   Iran Standard Time
-   Israel Standard Time
-   Jordan Standard Time
-   Korea Standard Time
-   Mauritius Standard Time
-   Mid-Atlantic Standard Time
-   Middle East Standard Time
-   Montevideo Standard Time
-   Morocco Standard Time
-   Mountain Standard Time
-   Mountain Standard Time (Mexico)
-   Myanmar Standard Time
-   N. Central Asia Standard Time
-   Namibia Standard Time
-   Nepal Standard Time
-   New Zealand Standard Time
-   Newfoundland Standard Time
-   North Asia East Standard Time
-   North Asia Standard Time
-   Pacific SA Standard Time
-   Pacific Standard Time
-   Pacific Standard Time (Mexico)
-   Pakistan Standard Time
-   Romance Standard Time
-   Russian Standard Time
-   SA Pacific Standard Time
-   SA Western Standard Time
-   Samoa Standard Time
-   SE Asia Standard Time
-   Singapore Standard Time
-   South Africa Standard Time
-   Sri Lanka Standard Time
-   Taipei Standard Time
-   Tasmania Standard Time
-   Tokyo Standard Time
-   Tonga Standard Time
-   US Eastern Standard Time
-   US Mountain Standard Time
-   Venezuela Standard Time
-   Vladivostok Standard Time
-   W. Australia Standard Time
-   W. Central Africa Standard Time
-   W. Europe Standard Time
-   West Asia Standard Time
-   West Pacific Standard Time
-   Yakutsk Standard Time

## Related Items

[Journey Specification](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)

## Related Topics

- Journey Specification (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
