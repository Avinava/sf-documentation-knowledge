---
title: "Create Components for Forecast Pages"
domain: lightning
topic: create-components-for-forecast-pages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.113Z
estimatedTokens: 766
keywords: [Components, Forecast, Pages, custom, Aura, add, Lightning, forecasts]
---

# Create Components for Forecast Pages

> Create custom Aura components that are available to add to Lightning forecasts
    pages.

# Create Components for Forecast Pages

Create custom Aura components that are available to add to Lightning forecasts pages.

To add a custom template to a Lightning forecasts page, implement the lightning:forecastingTemplate interface.

To allow the component access to a Lightning forecasts page, implement the lightning:availableForForecastingPage interface.

Upon initialization, the component attempts to populate the following attributes to provide some forecast context. The attributes include:

-   contextPeriodIds—The time period IDs from the user context.

    ```

    ```

-   currencyIsoCode—The ISO code of the unit of currency that the user views.

    ```

    ```

-   forecastingOwnerId—The forecast owner's user ID.

    ```

    ```

-   forecastingTerritoryId—The forecast territory's ID.

    ```

    ```

-   forecastingTypeId—The user’s selected forecast type.

    ```

    ```

-   scope—The supported scope type. If scope is undefined or null, a single territory or role page is loaded.

    ```

    ```

    ```

    ```


Lightning forecasts pages don’t support any standard or custom events published from custom components.

When the Lightning forecasts page changes, such as owner or forecast type, the page header publishes a Lightning message. You can subscribe to the lightning\_\_forecasting\_flexipageUpdated LightningMessageChannel to update your custom components based on Lightning forecasts page header changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

To ensure that custom components appear correctly, enable them to adjust to variable widths.

-   **[Sample Custom Components for Forecasts Pages](atlas.en-us.lightning.meta/lightning/components_custom_for_app_builder_forecasts_page.htm)**
    Review samples of custom Aura components that you can implement in Lightning forecasts pages. Lightning forecasts pages don’t support any standard or custom events published from custom components.

#### See Also

-   [Communicating Across the DOM with Lightning Message Service](atlas.en-us.lightning.meta/lightning/message_channel_intro.htm "Use Lightning message service to communicate across the DOM within a Lightning page. Communicate between Visualforce pages embedded in the same Lightning page, Aura components, and Lightning web components, including components in a utility bar and pop-out utilities. Choose whether a component subscribes to messages from the entire application, or from only the active area.")

-   [*Lightning Web Components Dev Guide*: Subscribe and Unsubscribe from a Message Channel](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_message_channel_subscribe "Lightning Web Components Dev Guide: Subscribe and
    Unsubscribe from a Message Channel - HTML (New Window)")

-   [*Aura Component Reference*: Message Channel](https://developer.salesforce.com/docs/component-library/bundle/lightning:messageChannel/documentation "Aura Component Reference: Message
    Channel - HTML (New Window)")

## Code Examples

```
<aura:attribute name="contextPeriodIds" type="String[]" />
```

```
<aura:attribute name="currencyIsoCode" type="String" />
```

```
<aura:attribute name="forecastingOwnerId" type="String" />
```

```
<aura:attribute name="forecastingTerritoryId" type="String" />
```

```
<aura:attribute name="forecastingTypeId" type="String" />
```

## Related Topics

- Sample Custom Components for Forecasts Pages (atlas.en-us.lightning.meta/lightning/components_custom_for_app_builder_forecasts_page.htm)
- Communicating Across the DOM with Lightning Message Service (atlas.en-us.lightning.meta/lightning/message_channel_intro.htm)
