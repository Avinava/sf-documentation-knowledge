---
title: "Create Responsive Layouts"
domain: mobile-offline
topic: create-responsive-layouts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:57.209Z
estimatedTokens: 1379
keywords: [Responsive, Layouts, mobile-first, app, grid, system, Component, Lightning, Custom, Tab]
---

# Create Responsive Layouts

> For a responsive, mobile-first app, create layouts using the grid system.

# Create Responsive Layouts

For a responsive, mobile-first app, create layouts using the grid system.

Responsive design enables your app page or website to scale elegantly across screen sizes. It uses fluid grids and media queries to display the right layout for different screens. Responsive design improves app maintainability and reliability, while future proofing for different browsers and platforms.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

To vary functionality across devices, or to create a mobile version of a large existing site, consider creating a separate mobile site or app. In these cases, creating something new may be easier that creating a responsive layout.

The first step in creating a responsive layout is to implement a fluid grid. The [SLDS grid utility](https://lightningdesignsystem.com/utilities/grid/ "HTML (New Window)") provides a mobile-first layout system with granular column control. To implement the grid system in a Lightning web component, use the lightning-layout and lightning-layout-item base components. When implementing fluid grids, the layout starts to break down at specific breakpoints. To resolve this layout issue, media queries determine how the layout should look at each breakpoint. These responsive breakpoints are built into lightning-layout-item, enabling you to define how each column adjusts to the screen size.

Let’s start with a one-column grid. Despite being simple visually, in this example there are three separate levels of containment. The lightning-card base component defines a container with rounded corners around the content. The lightning-layout base component creates a wrapper around the content using the slds-grid class. The lightning-layout-item component creates columns using the slds-col class.

```

```

![Mobile page showing a grid with one column](/docs/resources/img/en-us/260.0?doc_id=images%2Fmobile_responsive1.png&folder=mobile_offline)

To increase the number of columns, add another lightning-layout-item with some content.

```

```

![Mobile page showing a grid with two columns](/docs/resources/img/en-us/260.0?doc_id=images%2Fmobile_responsive2.png&folder=mobile_offline)

Let’s make some adjustments so that the content is more readable on mobile. To make each column full width, add size="12". The 12-column grid is the most frequently used SLDS grid. On this grid, the size attribute for lightning-layout-item accepts a value from 1 to 12.

The multiple-rows attribute on lightning-layout adds a slds-wrap class to the container, which wraps your column to a new row.

```

```

![Mobile page showing a grid with two columns in multiple rows](/docs/resources/img/en-us/260.0?doc_id=images%2Fmobile_responsive3.png&folder=mobile_offline)

When we view the page on a tablet or desktop, the sidebar column should align horizontally with the main content column. Specify the width of the main content such that it takes up 75% of the container width using small-device-size="9". See [lightning-layout-item](https://developer.salesforce.com/docs/component-library/bundle/lightning-layout-item "HTML (New Window)").

Using *just markup,* you can provide size details for both desktop/tablet and phone/small mobile. It’s ratio-based and enables the device to effectively pick the right layout based on its own screen size.

```

```

![Mobile page showing responsive content in desktop and mobile devices](/docs/resources/img/en-us/260.0?doc_id=images%2Fmobile_responsive4.png&folder=mobile_offline)

## Use Your Component on a Lightning Page

We walked through creating a Lightning web component with a responsive layout. What if you want to make your component available in Lightning Experience or the Salesforce mobile app? You can surface your Lightning web component via a Lightning page or custom tab.

Lightning pages in your org support desktop and mobile form factors by default. Therefore, it’s important that your components follow a responsive design so they work seamlessly across devices.

We recommend that you use the Lightning App Builder to build Lightning pages. In Lightning App Builder, you can select a template with the layout you want and drag your custom components onto the page. The template you choose controls how the page displays on a device. The structure of a Lightning page adapts for the device it’s viewed on. See [Lightning Pages](https://help.salesforce.com/articleView?id=lightning_page_overview.htm&language=en_US "HTML (New Window)") in Salesforce Help.

If you don’t find a template you want, create a custom template using an Aura component. See [Create a Custom Lightning Page Template Component](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/components_config_for_app_builder_template_component.htm "HTML (New Window)"). Creating a custom template using a Lightning web component isn’t supported.

## Use Your Component on a Custom Tab

Alternatively, you can surface your Lightning web component via a custom tab instead of a Lightning page. If you use a custom tab, the tab content and layout can’t be edited or configured in Lightning App Builder. Also, custom tabs don’t automatically adapt for different devices and screen sizes. So make sure that your component follows responsive design guidelines before you make the custom tab available. See [Custom Tabs](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-custom-tab-intro.html "HTML (New Window)").

## Code Examples

```
<!-- Page header here -->
<!-- Start page content -->
<lightning-card>
    <lightning-layout>
        <lightning-layout-item padding="around-small">
            <p>Main Content Goes Here</p>
        </lightning-layout-item>
   </lightning-layout>
</lightning-card>
<!-- End page content -->
```

```
<lightning-card>
   <lightning-layout>
      <lightning-layout-item padding="around-small">
        <p>Main Content Goes Here</p>
      </lightning-layout-item>
      <lightning-layout-item padding="around-small">
          <p>Sidebar Content Goes Here</p>
      </lightning-layout-item>
  </lightning-layout>
</lightning-card>
```

```
<lightning-card>
   <lightning-layout multiple-rows>
    <lightning-layout-item size="12" padding="around-small">
      <p>Main Content Goes here</p>
     </lightning-layout-item>
     <lightning-layout-item size="12" padding="around-small">
       <p>Sidebar Content Goes Here</p>
    </lightning-layout-item>
  </lightning-layout>
</lightning-card>
```

```
<lightning-card>
  <lightning-layout multiple-rows>
     <lightning-layout-item size="12" 
          small-device-size="9"
          padding="around-small">
          <p>Main Content Goes Here</p>
      </lightning-layout-item>
      <lightning-layout-item size="12"
          small-device-size="3"
          padding="around-small">
          <p>Sidebar Content Goes Here</p>
      </lightning-layout-item>
  </lightning-layout>
</lightning-card>
```
