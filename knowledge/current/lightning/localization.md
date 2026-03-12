---
title: "Localization"
domain: lightning
topic: localization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.299Z
estimatedTokens: 1395
keywords: [Localization, framework, client-side, support, input, output, components, Working, Locale, Language, Timezone, Address, Number, Formats, Date]
---

# Localization

> The framework provides client-side localization support on input and output
        components.

# Localization

The framework provides client-side localization support on input and output components.

You can use the global value provider, [$Locale](atlas.en-us.lightning.meta/lightning/expr_locale_value_provider.htm "The $Locale global value provider returns information about the current user’s preferred locale."), to obtain the locale information. The locale setting in your organization overrides the browser’s locale information. Lightning base components adapt automatically to the language, locale, and time zone settings of the Salesforce org they run in.

## Working with Locale, Language, and Timezone

In a single currency organization, Salesforce administrators set the currency locale, default language, default locale, and default time zone for their organizations. Users can set their individual language, locale, and time zone on their personal settings pages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Single language organizations cannot change their language, although they can change their locale.

If you’re working with Salesforce data, we recommend using the base components built on Lightning Data Service. For example, the lightning:recordForm and lightning:recordViewForm components can display a read-only value of your record data. See [Lightning Data Service](atlas.en-us.lightning.meta/lightning/data_service.htm "Use Lightning Data Service to load, create, edit, or delete a record in your component without requiring Apex code. Lightning Data Service handles sharing rules and field-level security for you. In addition to simplifying access to Salesforce data, Lightning Data Service improves performance and user interface consistency.").

Consider the lightning:formatted\* components only if the lightning:record\*Form components don’t meet your requirements.

Let’s take a look at the lightning:formattedDateTime component to display a date and time. Setting the time zone on the Language & Time Zone page to (GMT+02:00) returns the date and time like Sep 28, 2020, 11:13 AM when you run the following code.

```

```

Changing the user locale to French (France) returns the date and time like 28 sept. 2020 à 11:13. Running $A.get("$Locale.userLocaleCountry") returns the user’s locale, for example, FR.

For more information, see [Supported Locales and ICU Formats](https://help.salesforce.com/articleView?id=admin_locales_icu.htm&language=en_US).

To display a currency value, use lightning:formattedNumber. Setting the currency locale on the Company Information page to Japanese (Japan) - JPY returns ¥100,000 when you run the following code.

```

```

Similarly, running $A.get("$Locale.currency") returns "¥" when your org’s currency locale is set to Japanese (Japan) - JPY. For more information, see [Supported Locales and ICU Formats](https://help.salesforce.com/articleView?id=admin_locales_icu.htm&language=en_US)" in the Salesforce Help.

## Working with Address, Name, and Number Formats

The user’s locale determines the name and address formats. Numbers, including currency, decimal, and percentage are also formatted according to the user’s locale. See [Supported Locales and ICU Formats](https://help.salesforce.com/articleView?id=admin_locales_icu.htm&language=en_US).

To get user input for an address, use [lightning:inputAddress](https://developer.salesforce.com/docs/component-library/bundle/lightning:inputAddress "HTML (New Window)"). For a read-only output of an address, use [lightning:formattedAddress](https://developer.salesforce.com/docs/component-library/bundle/lightning:formattedAddress "HTML (New Window)"). The default output displays an address that links to Google Maps.

To get user input for a person’s name, use [lightning:inputName](https://developer.salesforce.com/docs/component-library/bundle/lightning:inputName "HTML (New Window)"). For a read-only output of a name, use [lightning:formattedName.](https://developer.salesforce.com/docs/component-library/bundle/lightning:formattedName "HTML (New Window)")

To get user input for a number, including currency, decimal, and percentage, use [lightning:input](https://developer.salesforce.com/docs/component-library/bundle/lightning:input "HTML (New Window)") with number type. For a read-only output of a number, use [lightning:formattedNumber.](https://developer.salesforce.com/docs/component-library/bundle/lightning:formattedNumber "HTML (New Window)")

## Working with Date and Time Formats

To get user input for a date and time, use [lightning:input](https://developer.salesforce.com/docs/component-library/bundle/lightning:input "HTML (New Window)") with type date, datetime, or time. To customize the date and time formats, we recommend using [lightning:formattedDateTime](https://developer.salesforce.com/docs/component-library/bundle/lightning:formattedDateTime) or [lightning:formattedTime](https://developer.salesforce.com/docs/component-library/bundle/lightning:formattedTime).

This example sets the date and time from a Date object using the init handler. The timeZone attribute is optional and is used to override the default timezone based on the user’s location.

```

```

```

```

This example renders the date in the format MMM DD, YYYY HH:MM:SS AM. Refer to the component reference for examples on how you can display the date in a different format.

#### See Also

-   [Formatting Dates in JavaScript](atlas.en-us.lightning.meta/lightning/js_cb_format_dates.htm "The AuraLocalizationService JavaScript API provides methods for formatting and localizing dates.")

## Code Examples

```
<lightning:formattedDateTime value="2020-09-28T18:13:41Z"
            year="numeric" month="short" day="2-digit"
            hour="2-digit"
            minute="2-digit"/>
```

```
<lightning:formattedNumber value="100000" style="currency" />
```

```
<aura:component>
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
    <aura:attribute name="datetime" type="DateTime"/>
    <lightning:formattedDateTime value="{!v.datetime}" timeZone="Europe/Berlin" 
        year="numeric" month="short" day="2-digit" hour="2-digit"
        minute="2-digit" second="2-digit"/>
 </aura:component>
```

```
({
    doInit : function(component, event, helper) {
        var date = new Date();
        component.set("v.datetime", date);
    }
})
```

## Related Topics

- $Locale (atlas.en-us.lightning.meta/lightning/expr_locale_value_provider.htm)
- Lightning Data Service (atlas.en-us.lightning.meta/lightning/data_service.htm)
- Formatting Dates in JavaScript (atlas.en-us.lightning.meta/lightning/js_cb_format_dates.htm)
