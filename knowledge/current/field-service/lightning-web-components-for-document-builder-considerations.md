---
title: "Lightning Web Components for Document Builder: Considerations"
domain: field-service
topic: lightning-web-components-for-document-builder-considerations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.222Z
keywords: [Lightning, Web, Components, Document, Builder, Considerations, Supported, Utilities, Base, Unsupported, Salesforce, APIs, HTML, Concepts, Pagination]
---

# Lightning Web Components for Document Builder: Considerations

# Lightning Web Components for Document Builder: Considerations

Considerations and limitations for building Lightning web components (LWCs) for the Document Builder feature, including a list of supported and unsupported utilities, HTML components, and APIs.

## Supported Utilities

Here are the supported utilities for building LWCs for Document Builder.

-   [Borders](https://www.lightningdesignsystem.com/utilities/borders/)
-   [Box](https://www.lightningdesignsystem.com/utilities/box/)
-   [Description List](https://www.lightningdesignsystem.com/utilities/description-list/)
-   [Grid](https://www.lightningdesignsystem.com/utilities/grid/)
-   [Horizontal List](https://www.lightningdesignsystem.com/utilities/horizontal-list/)
-   [Hyphenation](https://www.lightningdesignsystem.com/utilities/hyphenation/)
-   [Layout](https://www.lightningdesignsystem.com/utilities/layout/)
-   [Margin](https://www.lightningdesignsystem.com/utilities/margin/)
-   [Name Value List](https://www.lightningdesignsystem.com/utilities/name-value-list/)
-   [Padding](https://www.lightningdesignsystem.com/utilities/padding/)
-   [Print](https://www.lightningdesignsystem.com/utilities/print/)
-   [Text](https://www.lightningdesignsystem.com/utilities/text/)
-   [Themes](https://www.lightningdesignsystem.com/utilities/themes/)
-   [Vertical List](https://www.lightningdesignsystem.com/utilities/vertical-list/)

## Supported Base Components

Here are the supported base components for building LWCs for Document Builder.

-   [Combobox](https://developer.salesforce.com/docs/component-library/bundle/lightning-combobox/example)
-   [Formatted Date-Time](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-date-time/example)
-   [Formatted Location](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-location/example)
-   [Formatted Phone](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-phone/example)
-   [Formatted Time](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-time/example)
-   [Formatted URL](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-url/example)
-   [Relative Date-Time](https://developer.salesforce.com/docs/component-library/bundle/lightning-relative-date-time/example)
-   [Formatted Address](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-address/example)
    
    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=field_service_dev)
    
    #### Tip
    
    You can’t use showMapLink to show Google maps in an iframe
    
-   [Formatted Name](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-name/example)
-   [Formatted Number](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-number/example)
-   [Formatted Rich Text](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-rich-text/documentation)
-   [Formatted Text](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-text/example)
-   [Progress Indicator](https://developer.salesforce.com/docs/component-library/bundle/lightning-progress-indicator/example)
-   [Progress Ring](https://developer.salesforce.com/docs/component-library/bundle/lightning-progress-ring/example)
-   [Tile](https://developer.salesforce.com/docs/component-library/bundle/lightning-tile/example)

## Unsupported Salesforce APIs

For consistency between desktop, mobile, and print, don’t use [Form Factor GVP](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/create_client_form_factor) or [Width Aware](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/use_width_aware) Salesforce APIs.

## Unsupported HTML Concepts

You can’t use these HTML concepts when building LWCs for Document Builder.

-   Don’t use iframes.
    
    Iframes don’t work offline, and page numbers don’t show up properly.
    
-   Don’t use CSS Screen media queries.
    
    CSS Screen media queries cause discrepancies in how your custom component looks on desktop and mobile.
    
-   Don’t use CSS position:fixed.
    
    When content is printed, fixed positioning is irrelevant, and elements with position:fixed don’t behave as expected. If you want repeating elements, drag an object into the header or footer sections of the canvas.
    
-   Don’t use CSS to show objects side by side.
    
    To show objects side by side, use the standard grid component. Avoid CSS properties such as float, display: flex, display: inline, display: inline-block, display: inline-flex, display: grid, display: inline-grid, display: table, or display: table-row.
    
-   Don’t use :nth-of-\* CSS Selectors.
    
    When working with content that spans multiple pages, pseudo-selectors such as :nth-of-type or :nth-child typically don’t work. As a workaround, use lwc:if templates and application of classes to customize the style of your service document. Learn more about lwc:if in the [Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_conditional).
    

## Pagination Considerations

When creating LWCs for Document Builder, consider these pagination limitations.

-   Service documents are limited to 250 pages. Document Builder can’t process a document with more than 250 pages into a PDF.
-   Avoid CSS page declarations. Don’t declare @page on custom components. The ability to modify page formatting for print is built into Document Builder.
-   If an image is too large to fit onto the remainder of a page, it’s pushed to the next page. If an image, by itself on a page, is still too large to fit, it’s resized to fit on one page.
-   If the page number component is dragged onto the body section of the page, it shows the page number in which it shows up. We recommend that you use this component in header or footer regions.
-   The standard signature component isn’t split across pages.
-   If the field component spans pages, the field labels are inline and repeat.
-   Column headers repeat if related list content spans across pages.
-   Use the standard grid component for creating layouts because it provides comprehensive layout options. If you must use SLDS grid classes, don’t apply slds-col and slds-grid CSS classes to a single element. Instead, apply each layout class to its own element. Here’s an example.
    
    ```
    
    ```
    
    The simpler the grid, the better. Features such as column wrapping, reordering, gutters, and vertical grids aren’t supported.
-   PDF conversion doesn’t compress static resources. Don’t place large static resources (contentAssets) on the page. Resize and compress them before using them on a service document.