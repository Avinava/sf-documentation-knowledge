---
title: "Formatting Dates in JavaScript"
domain: lightning
topic: formatting-dates-in-javascript
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.083Z
estimatedTokens: 782
keywords: [Formatting, Dates, JavaScript, AuraLocalizationService, API, localizing]
---

# Formatting Dates in JavaScript

> The AuraLocalizationService JavaScript API
  provides methods for formatting and localizing dates.

# Formatting Dates in JavaScript

The AuraLocalizationService JavaScript API provides methods for formatting and localizing dates.

For example, the formatDate() method formats a date based on the formatString parameter set as the second argument.

```

```

The date parameter can be a String, Number, or most typically a JavaScript Date. If you provide a String value, use [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html "HTML (New Window)") format to avoid parsing warnings.

The formatString parameter contains tokens to format a date and time. For example, "YYYY-MM-DD" formats 15th January, 2017 as "2017-01-15". The default format string comes from the $Locale value provider.

This table shows the list of tokens supported in formatString.

| Description | Token | Output |
| --- | --- | --- |
| Day of month | d | 1 … 31 |
| Day of month | dd | 01 … 31 |
| Day of month. Deprecated. Use dd, which is identical. | DD | 01 … 31 |
| Day of week (number) | E | 0 … 6 |
| Day of week (short name) | EEE | Sun … Sat |
| Day of week (long name) | EEEE | Sunday … Saturday |
| Month | M | 1 ... 12 |
| Month | MM | 01 … 12 |
| Month (short name) | MMM | Jan … Dec |
| Month (full name) | MMMM | January … December |
| Year (two digits) | yy | 17 |
| Year (four digits) | yyyy | 2017 |
| Year. Deprecated. Use yyyy, which is identical. | y | 2017 |
| Year. Deprecated. Use yyyy, which is identical. | Y | 2017 |
| Year. Deprecated. Use yy, which is identical. | YY | 17 |
| Year. Deprecated. Use yyyy, which is identical. | YYYY | 2017 |
| Hour of day (1-12) | h | 1 … 12 |
| Hour of day (0-23) | H | 0 … 23 |
| Hour of day (00-23) | HH | 00 … 23 |
| Hour of day (1-24) | k | 1 … 24 |
| Hour of day (01-24) | kk | 01 … 24 |
| Minute | m | 0 … 59 |
| Minute | mm | 00 … 59 |
| Second | s | 0 … 59 |
| Second | ss | 00 … 59 |
| Fraction of second | SSS | 000 … 999 |
| AM or PM | a | AM or PM |
| AM or PM. Deprecated. Use a, which is identical. | A | AM or PM |
| Zone offset from UTC | Z | -12:00 … +14:00 |
| Quarter of year | Q | 1 … 4 |
| Week of year | w | 1 … 53 |
| Week of year | ww | 01 … 53 |

There are similar methods that differ in their default output values.

-   formatDateTime()—The default formatString outputs datetime instead of date.
-   formatDateTimeUTC()—Formats a datetime in UTC standard time.
-   formatDateUTC()—Formats a date in UTC standard time.

For more information on all the methods in AuraLocalizationService, see [JavaScript API](atlas.en-us.lightning.meta/lightning/ref_jsapi_intro.htm "The JavaScript API lists the publicly accessible methods for each object that you can use in JavaScript code, such as a controller or helper. The $A namespace is the entry point for using the framework in JavaScript code.").

## Example

This example converts a selected date on a date field using the given format, yyyy-MM-dd. The converted date is displayed below the date field.

```

```

```

```

#### See Also

-   [Localization](atlas.en-us.lightning.meta/lightning/components_l10n.htm "The framework provides client-side localization support on input and output components.")

## Code Examples

```
formatDate (String | Number | Date date, String formatString)
```

```
<aura:component implements="flexipage:availableForRecordHome">
    <aura:attribute name="formatDate" type="String"/>
    <lightning:input
        type="date"
        value="{!v.formatDate}"
        onchange="{!c.convertDate}">
    </lightning:input>
    {!v.formatDate}
</aura:component>
```

```
({
    convertDate: function (cmp, event) {
        var date = event.getParam("value");
        var formatted = $A.localizationService.formatDate(date, "yyyy-MM-dd");
        cmp.set("v.formatDate", formatted);
    },
})
```

## Related Topics

- JavaScript API (atlas.en-us.lightning.meta/lightning/ref_jsapi_intro.htm)
- Localization (atlas.en-us.lightning.meta/lightning/components_l10n.htm)
