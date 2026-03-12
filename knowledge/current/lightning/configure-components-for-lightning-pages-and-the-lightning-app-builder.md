---
title: "Configure Components for Lightning Pages and the Lightning App Builder"
domain: lightning
topic: configure-components-for-lightning-pages-and-the-lightning-app-builder
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.083Z
estimatedTokens: 1218
keywords: [Configure, Components, Lightning, Pages, App, Builder, There, few, steps, take, custom, Aura, either, Add, New]
---

# Configure Components for Lightning Pages and the Lightning App Builder

> There are a few steps to take before you can use your custom Aura components in either
    Lightning pages or the Lightning App Builder.

# Configure Components for Lightning Pages and the Lightning App Builder

There are a few steps to take before you can use your custom Aura components in either Lightning pages or the Lightning App Builder.

## 1\. Add a New Interface to Your Component

To appear in the Lightning App Builder or on a Lightning page, a component must implement one of these interfaces.

| Interface | Description |
| --- | --- |
| flexipage:availableForAllPageTypes | Makes your component available for record pages and any other type of page, including a Lightning app’s utility bar. |
| flexipage:availableForRecordHome | If your component is designed for record pages only, implement this interface instead of flexipage:availableForAllPageTypes. |
| clients:availableForMailAppAppPage | Enables your component to appear on a Mail App Lightning page in the Lightning App Builder and in the Outlook and Gmail integrations. |
| lightning:availableForForecastingPage | Makes your component available for the forecasts page in Lightning. |

Here’s the sample code for a simple “Hello World” component.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Mark your resources, such as a component, with access="global" to make the resource usable outside of your own org. For example, if you want a component to be usable in an installed package or by a Lightning App Builder user or an Experience Builder user in another org.

## 2\. Add a Design Resource to Your Component Bundle

Use a design resource to control which attributes are exposed to builder tools like the Lightning App Builder, Experience Builder, or Flow Builder. A design resource lives in the same folder as your .cmp resource, and describes the design-time behavior of the Aura component—information that visual tools need to display the component in a page or app.

For example, if you want to restrict a component to one or more objects, set a default value on an attribute, or make an Aura component attribute available for administrators to edit in the Lightning App Builder, you need a design resource in your component bundle.

Here’s the design resource that goes in the bundle with the “Hello World” component.

```

```

Design resources must be named componentName.design.

## Optional: Add an SVG Resource to Your Component Bundle

You can use an SVG resource to define a custom icon for your component when it appears in the Lightning App Builder’s component pane. Include it in the component bundle.

Here’s a simple red circle SVG resource to go with the “Hello World” component.

```

```

SVG resources must be named componentName.svg.

## Optional: Add an AI Component Description to the Design Resource

Add an AI-related description to your component to make it accessible to Setup with Agentforce. The Setup agent can analyze and recommend custom components when creating a new Lightning page as a result of a user utterance. For the Setup agent to analyze if your custom component fits the requirements outlined in the user’s utterance, the component must contain an AI-related description of what it does as well as AI descriptions of its attributes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Setup with Agentforce is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this pilot or beta service is at the Customer's sole discretion.

See [Aura Component Bundle Design Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/components_config_for_app_builder_design_files.htm) for more information.

#### See Also

-   [Aura Component Bundle Design Resources](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_design_files.htm "Use a design resource to control which attributes are exposed to builder tools like the Lightning App Builder, Experience Builder, or Flow Builder. A design resource lives in the same folder as your .cmp resource, and describes the design-time behavior of the Aura component—information that visual tools need to display the component in a page or app.")

-   [Tips and Considerations for Configuring Components for Lightning Pages and the Lightning App Builder](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_tips.htm "Keep these guidelines in mind when creating components and component bundles for Lightning pages and the Lightning App Builder.")

-   [Component Bundles](atlas.en-us.lightning.meta/lightning/components_bundle.htm "A component bundle contains a component or an app and all its related resources.")

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global">
    <aura:attribute name="greeting" type="String" default="Hello" access="global" />
    <aura:attribute name="subject" type="String" default="World" access="global" />

    <div style="box">
      <span class="greeting">{!v.greeting}</span>, {!v.subject}!
    </div>
</aura:component>
```

```
<design:component label="Hello World">
    <design:attribute name="subject" label="Subject" description="Name of the person you want to greet" />
    <design:attribute name="greeting" label="Greeting" />
</design:component>
```

```
<?xml version="1.0"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
 
<svg xmlns="http://www.w3.org/2000/svg"
     width="400" height="400">
  <circle cx="100" cy="100" r="50" stroke="black"
    stroke-width="5" fill="red" />
</svg>
```

## Related Topics

- Aura Component Bundle Design Resources (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_design_files.htm)
- Tips and Considerations for Configuring Components for Lightning Pages and the Lightning App Builder (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_tips.htm)
- Component Bundles (atlas.en-us.lightning.meta/lightning/components_bundle.htm)
