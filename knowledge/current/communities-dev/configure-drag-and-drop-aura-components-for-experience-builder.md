---
title: "Configure Drag-and-Drop Aura Components for Experience Builder"
domain: communities-dev
topic: configure-drag-and-drop-aura-components-for-experience-builder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.527Z
estimatedTokens: 1025
keywords: [Configure, Drag-and-Drop, Aura, Components, Experience, Builder, custom, component, there, few, configuration, steps, take, Add, Design]
---

# Configure Drag-and-Drop Aura Components for Experience Builder

> Before you can use a custom Aura component in Experience Builder, there a few
    configuration steps to take.

# Configure Drag-and-Drop Aura Components for Experience Builder

Before you can use a custom Aura component in Experience Builder, there a few configuration steps to take.

## 1\. Add an Interface to Your Component

To appear as a drag-and-drop component in Experience Builder, a component must implement the forceCommunity:availableForAllPageTypes interface.

After you create the Aura component, it appears in the Components panel of all Aura sites in your org.

![Components panel](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fcomponents_panel.png&folder=communities_dev)

Here’s the sample code for a simple “Hello World” component. A component must be named componentName.cmp.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

To make a resource, such as a component, usable outside of your own org, mark it with access="global". For example, use access="global" if you want a component to be usable in an installed package or by a Experience Builder user in another org.

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=communities_dev)

#### Warning

When you add custom components to your site, they can bypass the object- and field-level security (FLS) you set for the guest user profile. Lightning components don’t automatically enforce [CRUD and FLS](https://developer.salesforce.com/page/Enforcing_CRUD_and_FLS) when referencing objects or retrieving the objects from an Apex controller. This means that the framework continues to display records and fields for which users don’t have CRUD permissions and FLS visibility. You must manually enforce CRUD and FLS in your Apex controllers.

## 2\. Add a Design Resource to Your Component Bundle

A [design resource](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_basics_designresource.htm#communities_dev_basics_designresource "You use a design resource to control which attributes are exposed in Experience Builder. A design resource lives in the same folder as your component. It describes the design-time behavior of the Aura component—information that visual tools need to display the component in a page or app.") controls which component attributes are exposed in Experience Builder. The design resource lives in the same folder as your .cmp resource, and describes the design-time behavior of the Aura component—information that visual tools need to display the component in a page or app.

For example, to set a default value for an attribute, or make a Aura component attribute available for administrators to edit in Experience Builder, your component bundle needs a design resource.

Here’s the design resource that goes in the bundle with the “Hello World” component. A design resource must be named componentName.design.

```

```

## Optional. Add an SVG Resource to Your Component Bundle

To define a custom icon for your component, add an SVG resource to the component bundle. The icon appears next to the component in the Experience Builder Components panel.

If you don’t include an SVG resource, the system uses a default icon (![Default component icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fcomponents_icon.png&folder=communities_dev)).

Here’s a simple red circle SVG resource to go with the “Hello World” component. An SVG resource must be named componentName.svg.

```

```

## Optional. Add a CSS Resource to Your Component Bundle

To style your custom component, add a CSS resource to the component bundle.

Here’s the CSS for a simple class to go with the “Hello World” component. A CSS resource must be named componentName.css.

```

```

After you create the class, apply it to your component.

```

```

#### See Also

-   [*Lightning Aura Components Developer Guide*: Browser Support for Aura Components](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/intro_browsers.htm "Lightning Aura Components Developer Guide: Browser Support for Aura
    Components - HTML (New Window)")

## Code Examples

```apex
<aura:component implements="forceCommunity:availableForAllPageTypes" access="global">
    <aura:attribute name="greeting" type="String" default="Hello" access="global" />
    <aura:attribute name="subject" type="String" default="World" access="global" />

    <div>{!v.greeting}, {!v.subject}!</div>
</aura:component>
```

```
<design:component label="Hello World">
    <design:attribute name="greeting" label="Greeting" />
    <design:attribute name="subject" label="Subject" description="Name of the person you want to greet" />
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

```
.THIS .greeting {
    color: #ffe4e1;
    font-size: 20px;
}
```

```apex
<aura:component implements="forceCommunity:availableForAllPageTypes" access="global">
    <aura:attribute name="greeting" type="String" default="Hello" access="global" />
    <aura:attribute name="subject" type="String" default="World" access="global" />

    <div class="greeting">{!v.greeting}, {!v.subject}!</div>
</aura:component>
```

## Related Topics

- design resource (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_basics_designresource.htm)
