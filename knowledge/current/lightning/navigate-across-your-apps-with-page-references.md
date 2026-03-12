---
title: "Navigate Across Your Apps with Page References"
domain: lightning
topic: navigate-across-your-apps-with-page-references
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.319Z
estimatedTokens: 802
keywords: [Navigate, Across, Apps, References, pageReference, JavaScript, URL, instead, parsing, creating, directly, approach, helps, avoid, broken]
---

# Navigate Across Your Apps with Page References

> The pageReference JavaScript object represents
    a URL for a page. You can use a pageReference instead of
    parsing or creating a URL directly. This approach helps you avoid broken navigation if
    Salesforce changes URL formats in the future.

# Navigate Across Your Apps with Page References

The pageReference JavaScript object represents a URL for a page. You can use a pageReference instead of parsing or creating a URL directly. This approach helps you avoid broken navigation if Salesforce changes URL formats in the future.

These navigation resources are supported only in Lightning Experience, Experience Builder sites, and the Salesforce mobile app. They’re not supported in other containers, such as Lightning Components for Visualforce, or Lightning Out. This is true even if you access these containers inside Lightning Experience or the Salesforce mobile app.

-   **[Basic Navigation](atlas.en-us.lightning.meta/lightning/components_navigation_basic.htm)**
    The pageReference JavaScript object represents a URL for a page. You can use a pageReference instead of parsing or creating a URL directly. This approach helps you avoid broken navigation if Salesforce changes URL formats in the future.
-   **[Add Links to Lightning Pages from Your Custom Components](atlas.en-us.lightning.meta/lightning/components_navigation_add_links.htm)**
    To link to Lightning Experience pages, use lightning:formattedUrl in your custom component. The lightning:formattedUrl component displays a URL as a hyperlink.
-   **[Add Query Parameters](atlas.en-us.lightning.meta/lightning/components_navigate_add_params.htm)**
    To add query parameters to the URL, update the PageReference state property. The key-value pairs of the state property are serialized to URL query parameters. The query parameters describe the page and form a more specific URL that the user can save or bookmark.
-   **[Navigate to a Record Create Page with Default Field Values](atlas.en-us.lightning.meta/lightning/components_navigation_dfv.htm)**
    The lightning:pageReferenceUtils component provides utilities for encoding default field values into a string. Pass this string into the pageReference.state.defaultFieldValues attribute on standard\_\_objectPage page reference types.
-   **[Navigate to a Web Page](atlas.en-us.lightning.meta/lightning/components_navigation_web_page.htm)**
    The navigation service supports different kinds of pages in Lightning. Each page reference type supports a different set of attributes and state properties.
-   **[Migrate to lightning:isUrlAddressable from from force:navigateToComponent](atlas.en-us.lightning.meta/lightning/components_navigation_migrate_to_isUrlAddressable.htm)**
    The pageReference JavaScript object represents a URL for a page. You can use a pageReference instead of parsing or creating a URL directly. This approach helps you avoid broken navigation if Salesforce changes URL formats in the future.
-   **[pageReference Types Types](atlas.en-us.lightning.meta/lightning/components_navigation_page_definitions.htm)**
    To navigate in Lightning Experience, Experience Builder sites, or the Salesforce mobile app, define a PageReference object. The pageReference type generates a unique URL format and defines attributes that apply to all pages of that type. For Experience Builder sites, depending on the page type, the pageReference property requirements can differ between LWR sites and Aura sites.

## Related Topics

- Basic Navigation (atlas.en-us.lightning.meta/lightning/components_navigation_basic.htm)
- Add Links to Lightning Pages from Your Custom Components (atlas.en-us.lightning.meta/lightning/components_navigation_add_links.htm)
- Add Query Parameters (atlas.en-us.lightning.meta/lightning/components_navigate_add_params.htm)
- Navigate to a Record Create Page with Default Field Values (atlas.en-us.lightning.meta/lightning/components_navigation_dfv.htm)
- Navigate to a Web Page (atlas.en-us.lightning.meta/lightning/components_navigation_web_page.htm)
- Migrate to lightning:isUrlAddressable from from force:navigateToComponent (atlas.en-us.lightning.meta/lightning/components_navigation_migrate_to_isUrlAddressable.htm)
- pageReference Types Types (atlas.en-us.lightning.meta/lightning/components_navigation_page_definitions.htm)
