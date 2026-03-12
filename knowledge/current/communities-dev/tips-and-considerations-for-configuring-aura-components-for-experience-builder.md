---
title: "Tips and Considerations for Configuring Aura Components for Experience Builder"
domain: communities-dev
topic: tips-and-considerations-for-configuring-aura-components-for-experience-builder
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:23.248Z
estimatedTokens: 1402
keywords: [Tips, Considerations, Configuring, Aura, Components, Experience, Builder, Keep, guidelines, mind, creating, component, bundles, sites, Attributes]
---

# Tips and Considerations for Configuring Aura Components for Experience Builder

> Keep these guidelines in mind when creating Aura components and component bundles for
    Aura sites.

# Tips and Considerations for Configuring Aura Components for Experience Builder

Keep these guidelines in mind when creating Aura components and component bundles for Aura sites.

## Components

-   Give the component a friendly name using the label attribute in the design file element, such as <design:component label="foo">.
-   Design your components to fill 100% of the width, including margins, of the region that they display in.
-   Make sure that the component provides an appropriate placeholder behavior in declarative tools if it requires interaction.
-   Never let a component display a blank box. Think of how other sites work. For example, Facebook displays an outline of the feed before the feed items come back from the server, which improves the user’s perception of UI responsiveness.
-   If the component depends on a fired event, give it a default state that displays before the event fires.
-   Style components using [standard design tokens](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/tokens_standard_communities.htm "HTML (New Window)") to make them consistent with the Salesforce Lightning Design System. (SLDS)
-   Keep in mind that [Lightning Locker](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_csp.htm#communities_dev_security_locker_csp "Aura and LWR sites in Experience Cloud use Content Security Policy (CSP) and either Lightning Web Security (LWS) or Lightning Locker to secure the site from malicious attacks and custom code vulnerabilities. Factor in the potential impact of these security features when you develop your own custom components, use third-party components, or add custom code in the head markup.") is enforced for all Aura components created in Summer ’17 (API version 40.0) and later when Lightning Locker is enabled in the org and the site. At the org level, Lightning Locker is in use if Lightning Web Security hasn’t been enabled. See [Develop Secure Sites: CSP, LWS, and Lightning Locker](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_csp.htm "Aura and LWR sites in Experience Cloud use Content Security Policy (CSP) and either Lightning Web Security (LWS) or Lightning Locker to secure the site from malicious attacks and custom code vulnerabilities. Factor in the potential impact of these security features when you develop your own custom components, use third-party components, or add custom code in the head markup.").
-   For a custom component, when you make a new property available for edit in Experience Builder, keep this consideration in mind for site translations: If the component is in use on a page in Experience Builder, delete the component from the page and replace it with the updated version. Otherwise, when you export the site content for translation, the property that you added is omitted for that component instance in the exported file. If the component contains content that’s already translated, export the site content first to preserve the existing translation. Then replace the component with the updated version.

## Attributes

-   Use the design file to control which attributes are exposed to Experience Builder.
-   Make your attributes easy to use and understandable to an administrator. Don’t expose SOQL queries, JSON objects, or Apex class names.
-   Give required attributes default values to avoid a poor user experience. When a component that has required attributes with no default values is added to Experience Builder, it appears invalid.
-   Use basic supported types (string, integer, boolean) for exposed attributes.
-   Specify a min and max for integer attributes in the <design:attribute> element to control the range of accepted values.
-   Be aware that string attributes can provide a data source with a set of predefined values, allowing the attribute to expose its configuration as a picklist.
-   Give attributes a label with a friendly display name.
-   Include a description to explain the expected data and provide guidelines, such as the data format or expected range of values. Description text appears as a tooltip in the property panel.![Property panel](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fproperties_panel.png&folder=communities_dev)
-   To delete a design attribute for a component that implements the forceCommunity:availableForAllPageTypes interface, first remove the interface from the component before deleting the design attribute. Then reimplement the interface. If the component is referenced in a site page, you must remove the component from the page before you can change it.

#### See Also

-   [*Lightning Aura Components Developer Guide*: Using the Salesforce Lightning Design System in Apps](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/apps_slds.htm "Lightning Aura Components Developer Guide: Using the Salesforce Lightning
    Design System in Apps - HTML (New Window)")

-   [*Lightning Aura Components Developer Guide*: Styling with Design Tokens](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/tokens_intro.htm "Lightning Aura Components Developer Guide: Styling with Design
    Tokens - HTML (New Window)")

-   [*Lightning Aura Components Developer Guide*: Aura Component Bundle Design Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/components_config_for_app_builder_design_files.htm "Lightning Aura Components Developer Guide: Aura Component Bundle Design
    Resources - HTML (New Window)")

## Related Topics

- Lightning Locker (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_csp.htm)
- Develop Secure Sites: CSP, LWS, and Lightning Locker (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_csp.htm)
