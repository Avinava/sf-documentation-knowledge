---
title: "$Locale"
domain: lightning
topic: locale
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.983Z
estimatedTokens: 721
keywords: [$Locale, provider, current, user’s, preferred, locale, Number, Date, Formatting]
---

# $Locale

> The $Locale global value provider returns
        information about the current user’s
            preferred locale.

# $Locale

The $Locale global value provider returns information about the current user’s preferred locale.

| Attribute | Description | Sample Value |
| --- | --- | --- |
| country | The ISO 3166 representation of the country code based on the language locale. | "US", "DE", "GB" |
| currency | The currency symbol. | "$" |
| currencyCode | The ISO 4217 representation of the currency code. | "USD" |
| decimal | The decimal separator. | "." |
| firstDayOfWeek | The first day of the week, where 1 is Sunday. | 1 |
| grouping | The grouping separator. | "," |
| isEasternNameStyle | Specifies if a name is based on eastern style, for example, last name first name [middle] [suffix]. | false |
| labelForToday | The label for the Today link on the date picker. | “Today” |
| language | The language code based on the language locale. | "en", "de", "zh" |
| langLocale | The locale ID. | “en_US”, “en_GB” |
| nameOfMonths | The full and short names of the calendar months | { fullName: “January”, shortName: “Jan” } |
| nameOfWeekdays | The full and short names of the calendar weeks | { fullName: “Sunday”, shortName: “SUN” } |
| timezone | The time zone ID. | "America/Los_Angeles" |
| userLocaleCountry | The country based on the current user’s locale | “US” |
| userLocaleLang | The language based on the current user’s locale | “en” |
| variant | Deprecated. The variation for a language dialect. |  |

## Number and Date Formatting

| Attribute | Description | Sample Value |
| --- | --- | --- |
| currencyFormat | The currency format. | "¤#,##0.00;(¤#,##0.00)"¤ represents the currency sign, which is replaced by the currency symbol. |
| dateFormat | The date format. | "MMM d, yyyy" |
| datetimeFormat | The date time format. | "MMM d, yyyy h:mm:ss a" |
| longDateFormat | The long date format. | "MMMM d, yyyy" |
| numberFormat | The number format. | "#,##0.###"# represents a digit, the comma is a placeholder for the grouping separator, and the period is a placeholder for the decimal separator. Zero (0) replaces # to represent trailing zeros. |
| percentFormat | The percentage format. | "#,##0%" |
| shortDateFormat | The short date format. | "M/d/yyyy" |
| shortDatetimeFormat | The short date time format. | "M/d/yyyy h:mm a" |
| shortTimeFormat | The short time format. | "h:mm a" |
| showJapaneseCalendar | Specifies whether to show dates in the Japanese Imperial calendar format | false |
| timeFormat | The time format. | "h:mm:ss a" |
| zero | The character for the zero digit. | “0” |

## Example

This example shows how to retrieve different $Locale attributes.

**Component source**

```

```

Similarly, you can check locale information in JavaScript using $A.get().

```

```

#### See Also

-   [Localization](atlas.en-us.lightning.meta/lightning/components_l10n.htm "The framework provides client-side localization support on input and output components.")

## Code Examples

```
<aura:component>
    {!$Locale.language}
    {!$Locale.timezone}
    {!$Locale.numberFormat}
    {!$Locale.currencyFormat}
</aura:component>
```

```
({
    checkDevice: function(component) {
        var locale = $A.get("$Locale.language");
        alert("You are using " + locale);
    }
})
```

## Related Topics

- Localization (atlas.en-us.lightning.meta/lightning/components_l10n.htm)
