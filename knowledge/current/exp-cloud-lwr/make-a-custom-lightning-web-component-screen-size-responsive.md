---
title: "Make a Custom Lightning Web Component Screen-Size Responsive"
domain: exp-cloud-lwr
topic: make-a-custom-lightning-web-component-screen-size-responsive
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.728Z
estimatedTokens: 856
keywords: [Custom, Lightning, Web, Component, Screen-Size, Responsive, enhanced, LWR, sites, assign, separate, desktop, mobile, tablet, versions]
---

# Make a Custom Lightning Web Component Screen-Size Responsive

> For enhanced LWR sites, you can assign separate values for the desktop, mobile, and
        tablet versions of certain properties in custom Lightning web components. With
        screen-responsive properties, the component uses the correct property value based on the end
        user’s screen size.

# Make a Custom Lightning Web Component Screen-Size Responsive

For enhanced LWR sites, you can assign separate values for the desktop, mobile, and tablet versions of certain properties in custom Lightning web components. With screen-responsive properties, the component uses the correct property value based on the end user’s screen size.

To make your custom Lightning web component screen responsive, follow these general steps.

## 1\. Declare a Property as Screen-Size Responsive

In the component’s configuration file, componentName.js-meta.xml, declare an integer, string, or both properties as screen-size responsive by using the screenResponsive attribute with a value of true, and the exposedTo attribute with a value of css.

For example, here’s the code for the maximum height of a custom button component.

```

```

Here’s the code for the alignment of a child component of a custom banner component.

```

```

## 2\. Use CSS Variables to Define Media Queries

In the component’s .css file, use the CSS variable \--dxp-c-*screensize*\-*property* to define a media query, where

*screensize* can be l (for desktop), m (for tablet), or s (for mobile).

*property* is the property name in kebab case.

For example, here’s the code for the maximum height (property maxHeight) of a custom button component.

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=exp_cloud_lwr)

#### Important

The screen-responsive property applies only to style properties, not expressions. Expressions (such as JavaScript or data-binding expressions) set at CSS values aren’t resolved at runtime.

Here’s the code for the alignment (property bannerAlignment) of a custom banner component.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

Enhanced LWR sites use the same breakpoints as shown in this example to distinguish between each view mode. To give your users the best experience, use these breakpoints when you define media queries.

## 3\. Specify the Property Values for Each Screen Size

After you declare a component property as screen responsive, specify the values for each screen size in Experience Builder. In the component’s property panel, an icon indicates screen-responsive properties.

![Section property panel, showing screen-responsive icon](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_get_started_screen_responsive_icon.png&folder=exp_cloud_lwr)

By default, smaller screen sizes inherit the property values that you specify for larger screen sizes. To set a property value for a particular screen size, use the dropdown menu in the navigation bar to switch between view modes.

## 4\. Publish the Site

After you specify a property’s values for different screen sizes, publish the site. When you publish, the CSS custom variables are added in the host class of the generated component.

For example, here’s the code for the maximum height of a custom button component.

```

```

In this example, the component maximum height property is assigned a value of 100 pixels for desktop, 80 pixels for tablet, and 60 pixels for mobile.

#### See Also

-   [*Experience Cloud Help:* Assign Different Values for Desktop, Tablet, and Mobile Properties in Custom LWR Components](https://help.salesforce.com/s/articleView?id=experience.networks_lwr_screen_responsive.htm&type=5&language=en_US)

## Code Examples

```
<targetConfig targets="lightningCommunity_Default">
    <property name="test" type="String" default="Button"/>
    <property name="url" type="String"/>
    <property name="maxHeight" type="Integer" min="0" max="20" default="0" screenResponsive="true" exposedTo="css"/></targetConfig>
```

```
<targetConfig targets="lightningCommunity_Default">
    <property type="Color" name="borderColor" default="" />
    <property name="url" type="String"/>
    <property type="String" name="bannerAlignment" default="center" screenResponsive="true" exposedTo="css"/>
</targetConfig>
```

```
/* Desktop */
div {
    max-height: calc(var(--dxp-c-l-max-height)*1px);
}

/* Tablet */
@media only screen and (max-width: 64em) {
    div {
        max-height: calc(var(--dxp-c-m-max-height)*1px);
    }
}
/* Mobile */
@media only screen and (max-width: 47.9375em) {
    div {
        max-height: calc(var(--dxp-c-s-max-height)*1px);
    }
}
```

```
/* Desktop */
div {
justify-content: var(--dxp-c-l-banner-alignment, center);
}

/* Tablet */
@media only screen and (max-width: 64em){
    div {
        justify-content: var(--dxp-c-m-banner-alignment);
    }
}

/* Mobile */
@media only screen and (max-width: 47.9375em) {
    div {
        justify-content: var(--dxp-c-s-banner-alignment);
    }
}
```

```
<dxp_base-button data-component-id="button-0b67" slot="column"
                 style="--dxp-c-l-max-height:100; --dxp-c-m-max-height:80; --dxp-c-s-max-height:60;">
...
```
