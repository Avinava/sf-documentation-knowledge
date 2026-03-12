---
title: "Tips and Considerations for Configuring Components for Lightning Pages and the Lightning
    App Builder"
domain: lightning
topic: tips-and-considerations-for-configuring-components-for-lightning-pages-and-the-l
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:48.139Z
estimatedTokens: 1194
keywords: [Tips, Considerations, Configuring, Components, Lightning, Pages, App, Builder, Keep, guidelines, mind, creating, component, bundles, Attributes]
---

# Tips and Considerations for Configuring Components for Lightning Pages and the Lightning
    App Builder

> Keep these guidelines in mind when creating components and component bundles for
    Lightning pages and the Lightning App Builder.

# Tips and Considerations for Configuring Components for Lightning Pages and the Lightning App Builder

Keep these guidelines in mind when creating components and component bundles for Lightning pages and the Lightning App Builder.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Mark your resources, such as a component, with access="global" to make the resource usable outside of your own org. For example, if you want a component to be usable in an installed package or by a Lightning App Builder user or a Experience Builder user in another org.

You can also create documentation for a component, event, or interface marked access="global". This documentation is automatically displayed in the Component Library of an org that uses or installs your package.

## Components

-   Set a friendly name for the component using the label attribute in the element in the design file, such as <design:component label="foo">.
-   Make your components fill 100% of the width (including margins) of the region that they display in.
-   Don’t set absolute width values on your components.
-   If components require interaction, they must provide an appropriate placeholder behavior in declarative tools.
-   A component must never display a blank box. Think of how other sites work. For example, Facebook displays an outline of the feed before the actual feed items come back from the server. The outline improves the user’s perception of UI responsiveness.
-   If the component depends on a fired event, then give it a default state that displays before the event fires.
-   Style components in a manner consistent with the styling of Lightning Experience and consistent with the Salesforce Design System.
-   The Lightning App Builder manages spacing between components automatically. Don't add margins to your component CSS, and avoid adding padding.
-   Don’t use float or position: absolute in your CSS properties. These properties break the component out of the page structure and, as a result, break the page.

## Attributes

-   Use the design file to control which attributes are exposed to the Lightning App Builder.
-   Make your attributes easy to use and understandable to an administrator. Don’t expose SOQL queries, JSON objects, or Apex class names.
-   Give your required attributes default values. When a component that has required attributes with no default values is added to the App Builder, it appears invalid, which is a poor user experience.
-   Use basic supported types (string, integer, boolean) for any exposed attributes.
-   Specify a min and max attribute for integer attributes in the <design:attribute> element to control the range of accepted values.
-   String attributes can provide a data source with a set of predefined values allowing the attribute to expose its configuration as a picklist.
-   Give all attributes a label with a friendly display name.
-   Provide descriptions to explain the expected data and any guidelines, such as data format or expected range of values. Description text appears as a tooltip in the Property Editor.
-   To delete a design attribute for a component that implements the flexipage:availableForAllPageTypes or forceCommunity:availableForAllPageTypes interface, first remove the interface from the component before deleting the design attribute. Then reimplement the interface. If the component is referenced in a Lightning page, you must remove the component from the page before you can change it.

## Limitations

-   The Lightning App Builder doesn’t support the Map, Object, or java:// complex types.
-   When you use the Lightning App Builder, there’s a known limitation when you edit a group page. Your changes appear when you visit the group from the Groups tab. Your changes don’t appear when you visit the group from the Recent Groups list on the Chatter tab.
-   Custom components that serve as containers, such as custom Tabs or Accordion components, aren’t supported in Lightning App Builder. They display on the canvas, but you can’t interact with them or put any components inside them.

#### See Also

-   [Configure Components for Lightning Pages and the Lightning App Builder](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm "There are a few steps to take before you can use your custom Aura components in either Lightning pages or the Lightning App Builder.")

-   [Configure Components for Lightning Experience Record Pages](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm "After your component is set up to work on Lightning pages and in the Lightning App Builder, use these guidelines to configure the component so it works on record pages in Lightning Experience.")

## Related Topics

- Configure Components for Lightning Pages and the Lightning App Builder (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm)
- Configure Components for Lightning Experience Record Pages (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm)
