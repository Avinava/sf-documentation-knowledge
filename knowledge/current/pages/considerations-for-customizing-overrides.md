---
title: "Considerations for Customizing Overrides"
domain: pages
topic: considerations-for-customizing-overrides
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:23.273Z
estimatedTokens: 503
keywords: [Considerations, Customizing, Overrides, familiar, override, behavior, standard, button, tab, General, Specific]
---

# Considerations for Customizing Overrides

> Get familiar with these considerations before you override the
  behavior of a standard button or tab.

# Considerations for Customizing Overrides

Get familiar with these considerations before you override the behavior of a standard button or tab.

## General Considerations

When overriding buttons with a Visualforce page, use the standard controller for the object on which the button appears. For example, to use a page to override the Edit button on accounts, the page markup must include the standardController="Account" attribute on the <apex:page> tag.

```

```

When overriding tabs with a Visualforce page, you can select only Visualforce pages that use the standard list controller for that tab’s associated object, pages with a custom controller, or pages with no controller.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

Use a controller extension to add extra functionality to Visualforce page that you’re using as an override.

When overriding lists with a Visualforce page, you can select only Visualforce pages that use a standard list controller.

When overriding the New button with a Visualforce page, you can choose to skip the record type selection page. If you do, new records you create aren’t forwarded to the record type selection page. Salesforce assumes that your Visualforce page is already handling record types.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

When a Salesforce mobile app user clicks **New** to create a product, the user must select a record type even if the **Skip record type selection page** option is selected in Setup.

## Specific Override Considerations

When the ResetPassword action for an Experience site is set to a Visualforce page, the page’s action that triggers the password change must redirect to a different page to avoid an infinite password reset loop.

#### See Also

-   [*Salesforce Help*: Custom Buttons and Links](https://help.salesforce.com/s/articleView?id=platform.customize_enterprise.htm&type=5&language=en_US)

## Code Examples

```
<apex:page standardController="Account">
<!-- page content here -->
</apex:page>
```
