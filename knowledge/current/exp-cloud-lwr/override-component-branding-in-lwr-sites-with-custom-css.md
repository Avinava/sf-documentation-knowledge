---
title: "Override Component Branding in LWR Sites with Custom CSS"
domain: exp-cloud-lwr
topic: override-component-branding-in-lwr-sites-with-custom-css
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.610Z
estimatedTokens: 584
keywords: [Override, Component, Branding, LWR, Sites, Custom, CSS, Occasionally, styling, hooks, insufficient, style, way, want, situation]
---

# Override Component Branding in LWR Sites with Custom CSS

> Occasionally, styling hooks are insufficient to style a component exactly the way you
    want. In this situation, you can use CSS selectors to target and style preapproved “parts”
    within a component.

# Override Component Branding in LWR Sites with Custom CSS

Occasionally, styling hooks are insufficient to style a component exactly the way you want. In this situation, you can use CSS selectors to target and style preapproved “parts” within a component.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=exp_cloud_lwr)

#### Warning

Use custom CSS sparingly and avoid targeting DOM elements without a part attribute. Doing so is brittle because changes to the component’s internal DOM structure is likely to break hard-coded CSS selectors. Additionally, Salesforce Customer Support can’t help resolve any issues with custom CSS.

## Target Component Instances

Every component has a data-component-id attribute with a unique value per component instance. Using this value, you can easily target the component instance and override styling hooks or add new CSS altogether.

To determine the exact attribute value of a component, inspect the DOM of your app—for example, with Chrome DevTools.

Let’s say a section on the page has the HTML markup <community\_layout-section data-component-id="section-adfb">. This code sample uses the value to override the component’s default styling.

```

```

You can also specify a custom CSS class on a component’s property panel to target that component.

![Style tab showing the Custom CSS section](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_branding_custom_css.png&folder=exp_cloud_lwr)

## Target Parts Within a Component

Most components are made up of many DOM elements, which means that you can style a specific element or part within a component. Component parts are exposed by DXP with the following format:

```

```

You can expose parts from your custom components using the same format. For example, a custom hero component could look like this:

```

```

And you can target either button with a CSS attribute selector, as follows:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

In the previous code sample, you would avoid targeting the h1 or hero-background class because they don’t have a defined part.

If you want to target a part within a specific component instance, you can combine the part selector with a data-component-id selector, as follows:

```

```

## Code Examples

```
<style>
  [data-component-id="section-adfb"] {
    --dxp-g-warning: #ff9966;
    --dxp-g-warning-contrast: #fff;
    border: 2px dashed #000;
  }
</style>
```

```
<div part="dxp-[component]-[part]">Some element</div>
```

```
<template>
  <div class="hero-background">
    <h1>My hero text</h1>
    <button part="some-partner-hero-primary-button">Main button</button>
    <button part="some-partner-secondary-button">Secondary button</button>
  </div>
</template>
```

```
<style>
  [part="some-partner-hero-primary-button"] {
    --dxp-g-brand: red;
    --dxp-g-brand-contrast: white;
    transition: background-color 2s ease-in;
  }
</style>
```

```
<style>
  [data-component-id="custom-hero-cd0b"] [part="some-partner-hero-primary-button"] {
    --dxp-g-brand: red;
    --dxp-g-brand-contrast: white;
    transition: background-color 2s ease-in;
  }
</style>
```
