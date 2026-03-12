---
title: "Configure Components for Experience Builder"
domain: lightning
topic: configure-components-for-experience-builder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.146Z
estimatedTokens: 1063
keywords: [Configure, Components, Experience, Builder, custom, Aura, drag, Lightning, pane, Add, New, Component]
---

# Configure Components for Experience Builder

> Make your custom Aura components available to drag to the Lightning Components pane in
    Experience Builder.

# Configure Components for Experience Builder

Make your custom Aura components available to drag to the Lightning Components pane in Experience Builder.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

As of Spring ’21, you can build Experience Builder sites using two programming models: the Lightning Web Components model, and the original Aura Components model. The Marketing Website template is based on LWC and can only be used with Lightning web components, not Aura components. Other templates are based on the Aura Components model and can use both Lightning web components and Aura components. See the [Experience Builder Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.communities_dev.meta/communities_dev/) for more information.

## Add a New Interface to Your Component

To appear in Experience Builder, a component must implement the forceCommunity:availableForAllPageTypes interface.

Here’s the sample code for a simple “Hello World” component.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Mark your resources, such as a component, with access="global" to make the resource usable outside of your own org. For example, if you want a component to be usable in an installed package or by a Lightning App Builder user or a Experience Builder user in another org.

You can also create documentation for a component, event, or interface marked access="global". This documentation is automatically displayed in the Component Library of an org that uses or installs your package.

Next, add a design resource to your component bundle. A design resource describes the design-time behavior of an Aura component—information that visual tools need to allow adding the component to a page or app. It contains attributes that are available for administrators to edit in Experience Builder.

Adding this resource is similar to adding it for the Lightning App Builder. For more information, see [Configure Components for Lightning Pages and the Lightning App Builder](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm "There are a few steps to take before you can use your custom Aura components in either Lightning pages or the Lightning App Builder.").

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

When you add custom components to your Experience Builder site, they can bypass the object- and field-level security (FLS) you set for the guest user profile. Lightning components don’t automatically enforce [CRUD and FLS](https://developer.salesforce.com/page/Enforcing_CRUD_and_FLS) when referencing objects or retrieving the objects from an Apex controller. This means that the framework continues to display records and fields for which users don’t have CRUD permissions and FLS visibility. You must manually enforce CRUD and FLS in your Apex controllers. Alternatively, use a base component that implements [Lightning Data Service](atlas.en-us.lightning.meta/lightning/data_service.htm "Use Lightning Data Service to load, create, edit, or delete a record in your component without requiring Apex code. Lightning Data Service handles sharing rules and field-level security for you. In addition to simplifying access to Salesforce data, Lightning Data Service improves performance and user interface consistency.").

#### See Also

-   [Component Bundles](atlas.en-us.lightning.meta/lightning/components_bundle.htm "A component bundle contains a component or an app and all its related resources.")

-   [Standard Design Tokens for Experience Builder Sites](atlas.en-us.lightning.meta/lightning/tokens_standard_communities.htm "Use a subset of the standard design tokens to make your components compatible with the Theme panel in Experience Builder. The Theme panel enables administrators to quickly style an entire site using these properties. Each property in the Theme panel maps to one or more standard design tokens. When an administrator updates a property in the Theme panel, the system automatically updates any Lightning components that use the tokens associated with that branding property.")

## Code Examples

```apex
<aura:component implements="forceCommunity:availableForAllPageTypes" access="global">
    <aura:attribute name="greeting" type="String" default="Hello" access="global" />
    <aura:attribute name="subject" type="String" default="World" access="global" />

    <div style="box">
      <span class="greeting">{!v.greeting}</span>, {!v.subject}!
    </div>
</aura:component>
```

## Related Topics

- Configure Components for Lightning Pages and the Lightning App Builder (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm)
- Lightning Data
        Service (atlas.en-us.lightning.meta/lightning/data_service.htm)
- Component Bundles (atlas.en-us.lightning.meta/lightning/components_bundle.htm)
- Standard Design Tokens for Experience Builder Sites (atlas.en-us.lightning.meta/lightning/tokens_standard_communities.htm)
