---
title: "Base Components with Built-In Navigation Actions"
domain: mobile-offline
topic: base-components-with-built-in-navigation-actions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.671Z
estimatedTokens: 706
keywords: [Base, Components, Built-In, Navigation, Actions, automatic]
---

# Base Components with Built-In Navigation Actions

> Use base components that have automatic or built-in navigation actions.

# Base Components with Built-In Navigation Actions

Use base components that have automatic or built-in navigation actions.

The following base components support adding navigation controls to your own components. These components provide ways to open another page, or otherwise perform URL-based actions. You supply the URL, or text containing linkable items, and the component takes care of the rest.

| Base Component | Details |
| --- | --- |
| lightning-breadcrumb | Behaves like a hyperlink if a URL is provided via the href attribute. |
| lightning-carousel-image | Behaves like a hyperlink if a URL is provided via the href attribute. |
| lightning-click-to-dial | Displays a formatted phone number as click-to-dial enabled or disabled for Open CTI and Voice. |
| lightning-formatted-address | Displays a formatted address with a link to the given location on Google Maps. |
| lightning-formatted-email | Displays an email as a hyperlink with the mailto: URL scheme. |
| lightning-formatted-phone | Displays a phone number as a hyperlink with the tel: URL scheme. |
| lightning-formatted-rich-text | Creates hyperlinks in rich text automatically for linkable text and email addresses. |
| lightning-formatted-text | URLs and email addresses are displayed as hyperlinks when you specify the linkify attribute. |
| lightning-formatted-url | Displays a URL as a hyperlink. |
| lightning-pill | Behaves like a hyperlink if a URL is provided via the href attribute. |
| lightning-vertical-navigation | Behaves like a hyperlink if a URL is provided via the href attribute. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Some of these components have limitations when used in an offline-enabled mobile app. See [Base Components Support](atlas.en-us.mobile_offline.meta/mobile_offline/considerations_base_components_support.htm "Base components are described in the Lightning Web Components Reference. All components are being reviewed for correct behavior in LWC Offline-enabled mobile apps.") for details.

There are additional base components that can have navigation actions attached to them, such as buttons and tabs. These components require you to add click handlers or other functionality in the form of JavaScript code. See [Programmatic Navigation Actions](atlas.en-us.mobile_offline.meta/mobile_offline/navigation_programmatic_actions.htm "Some features require more complicated navigation designs. For the most complete control of your user interface and navigation scheme, define navigation actions using JavaScript.").

#### See Also

-   [*Lightning Web Components Developer Guide:* Component Reference](https://developer.salesforce.com/docs/component-library/ "Lightning Web Components Developer Guide: Component Reference - HTML (New Window)")

## Related Topics

- Base Components Support (atlas.en-us.mobile_offline.meta/mobile_offline/considerations_base_components_support.htm)
- Programmatic Navigation Actions (atlas.en-us.mobile_offline.meta/mobile_offline/navigation_programmatic_actions.htm)
