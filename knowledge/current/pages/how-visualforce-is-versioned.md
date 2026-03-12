---
title: "How Visualforce is
    Versioned"
domain: pages
topic: how-visualforce-is-versioned
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:23.702Z
estimatedTokens: 987
keywords: [How, Visualforce, Versioned, pages, components, component, version, number, functionality, older, elements, doesn’t, change, new, implementations]
---

# How Visualforce is
    Versioned

> Visualforce pages and components are versioned.
      When a page or component has a version number, the functionality of older Visualforce elements
      doesn’t change as new implementations are introduced. Visualforce versions start at 15.0.
    If you try to set the version of a Visualforce page to a version earlier than 15.0, it
    automatically changes to 15.0.

# How Visualforce is Versioned

Visualforce pages and components are versioned. When a page or component has a version number, the functionality of older Visualforce elements doesn’t change as new implementations are introduced. Visualforce versions start at 15.0. If you try to set the version of a Visualforce page to a version earlier than 15.0, it automatically changes to 15.0.

To aid backwards-compatibility, each Visualforce page and custom component is saved with version settings for the specified version of the API as well as the specific version of Visualforce. If the Visualforce page or component references installed managed packages, the version settings for each managed package referenced by the page or component is saved too. This ensures that as Visualforce, the API, and the components in managed packages evolve in subsequent versions, Visualforce pages and components are still bound to versions with specific, known behavior.

[Custom components](atlas.en-us.pages.meta/pages/pages_comp_cust.htm) that are referenced in Visualforce pages always perform under their own version number. Thus, if a custom component is set at version 15.0, it always exhibits behavior from Visualforce version 15.0, whether running in a version 15.0 or a 16.0 page.

The [release notes](https://help.salesforce.com/s/articleView?id=release-notes.rn_vf.htm&type=5&language=en_US "HTML (New Window)") list changes between Visualforce versions. The [component reference](atlas.en-us.pages.meta/pages/pages_compref.htm "This section provides a full list of standard Visualforce components.") also lists which Visualforce version a standard component was introduced in, as well as whether a component or attribute was deprecated in a version.

## How Visualforce Versions Relate to Salesforce API Versions

The version of a Visualforce page or component affects the version of the Salesforce API used by that page or component. A Visualforce page with a version of 16.0 uses Salesforce API version 16.0 internally, ensuring consistent behavior. However, this behavior is specific to the Visualforce framework and built-in components.

If your component makes use of *external* calls to Salesforce Platform APIs, such as the REST API, those calls are *not* versioned along with the component. The version of the call is embedded in the parameters of the call itself, usually the URL. It’s your responsibility to update the API used for external calls as needed.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

Visualforce internal behavior is **not** affected by the [Salesforce Platform API Versions 21.0 through 30.0 Retirement](https://help.salesforce.com/s/articleView?id=000389618&type=1&language=en_US). However, if your pages or components make external calls to the SOAP, REST, or Bulk API versions prior to API 31.0, they **are** affected by the retirement of those API versions. It’s your responsibility to update your pages and components to use supported API versions.

## Set the Version of a Visualforce Page or Component

To set the Salesforce API and Visualforce version for a Visualforce page or custom component:

1.  Edit a Visualforce page or component and click **Version Settings**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    You can only modify the version settings for a page or custom component on the Version Settings tab when editing the page or component in Setup.

2.  Select the Version of the Salesforce API. This is also the version of Visualforce used with the page or component.
3.  Click **Save**.

#### See Also

-   [Managing Version Settings for Custom Components](atlas.en-us.pages.meta/pages/pages_comp_cust_versioning_manage.htm)

-   [Managing Package Version Settings for Visualforce Pages and Components](atlas.en-us.pages.meta/pages/pages_packaging_manage_version.htm)

## Related Topics

- Custom components (atlas.en-us.pages.meta/pages/pages_comp_cust.htm)
- component reference (atlas.en-us.pages.meta/pages/pages_compref.htm)
- Managing Version Settings for Custom Components (atlas.en-us.pages.meta/pages/pages_comp_cust_versioning_manage.htm)
- Managing Package Version Settings for Visualforce Pages and Components (atlas.en-us.pages.meta/pages/pages_packaging_manage_version.htm)
