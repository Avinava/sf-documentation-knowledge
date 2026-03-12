---
title: "Basic Navigation"
domain: lightning
topic: basic-navigation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.331Z
estimatedTokens: 988
keywords: [Basic, Navigation, pageReference, JavaScript, URL, instead, parsing, creating, directly, approach, helps, avoid, broken, Salesforce, changes]
---

# Basic Navigation

> The pageReference JavaScript object represents
    a URL for a page. You can use a pageReference instead of
    parsing or creating a URL directly. This approach helps you avoid broken navigation if
    Salesforce changes URL formats in the future.

# Basic Navigation

The pageReference JavaScript object represents a URL for a page. You can use a pageReference instead of parsing or creating a URL directly. This approach helps you avoid broken navigation if Salesforce changes URL formats in the future.

Use the following resources to simplify navigation across your apps. URLs for components using these resources are case-sensitive. For examples, see the [Component Library](atlas.en-us.lightning.meta/lightning/component_library.htm "The Lightning Component Library is your hub for component reference information, including the Component Reference with live examples, and tools for Lightning Web Security and Lightning Locker.").

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Navigation isn’t supported for inactive pages. A page is considered inactive if it’s not currently visible in the DOM, such as a minimized page.

lightning:navigation

To navigate to a page or component, use the navigate(pageReference, replace) method from lightning:navigation. This approach is a substitute for a navigateTo\* event, and both are supported.

When you navigate to a page reference from a modal, such as from a component that’s enabled for quick actions, the modal isn’t automatically closed by default. To automatically close the modal when navigating to another page reference, set replace to true.

To generate a URL in your component, use the generateUrl() method in lightning:navigation to resolve the URL.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

generateUrl() returns a promise, which calls back with the resulting URL.

lightning:isUrlAddressable

To enable a component to navigate directly via a URL, add the lightning:isUrlAddressable interface to your component.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=lightning)

#### Tip

pageReference and lightning:isUrlAddressable replace the force:navigateToComponent event for navigating directly to a component. Unlike the force:navigateToComponent event information-mapping protocol, the only attribute populated through the navigation dispatching system is the pageReference attribute. Information is passed to the addressed component through the state properties on the target page reference. lightning:isUrlAddressable doesn’t automatically set attributes on the target component. Get parameters from v.pageReference.state and manually set them using the target component’s init handler.

pageReference provides a well-defined structure that describes the page type and its corresponding attributes. pageReference supports the following properties.

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| type | String | The API name of the pageReference type, for example, standard__objectPage. | Y |
| attributes | Object | Values for each attribute specified by the page definition, for example, objectAPIName or actionName. | Y |
| state | Object | Parameters that are tied to the query string of the URL in Lightning Experience, such as filterName. The routing framework doesn’t depend on state to render a page. Some page reference types support a standard set of state properties. You can also pass non-standard properties into state as long as they’re namespaced.NoteExperience Builder sites don’t support the state property. |  |

#### See Also

-   [pageReference Types Types](atlas.en-us.lightning.meta/lightning/components_navigation_page_definitions.htm "To navigate in Lightning Experience, Experience Builder sites, or the Salesforce mobile app, define a PageReference object. The pageReference type generates a unique URL format and defines attributes that apply to all pages of that type. For Experience Builder sites, depending on the page type, the pageReference property requirements can differ between LWR sites and Aura sites.")

## Related Topics

- Component Library (atlas.en-us.lightning.meta/lightning/component_library.htm)
- pageReference Types Types (atlas.en-us.lightning.meta/lightning/components_navigation_page_definitions.htm)
