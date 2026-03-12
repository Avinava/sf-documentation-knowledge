---
title: "Lightning Navigation"
domain: exp-cloud-lwr
topic: lightning-navigation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.695Z
estimatedTokens: 656
keywords: [Lightning, Navigation, API, navigate, different, pages, site, generate, URLs, routes, current, pageReference, Limitations]
---

# Lightning Navigation

> Use the lightning/navigation API to navigate
    to different pages within your site, generate URLs to different routes, and get the current
      pageReference object.

# Lightning Navigation

Use the lightning/navigation API to navigate to different pages within your site, generate URLs to different routes, and get the current pageReference object.

See [PageReference Types](https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.reference_page_reference_type) in the Lightning Web Components Developer Guide.

Aura templates support comm\_\_namedPage schemas that use the name attribute (added in Spring ’20) and the pageName attribute (deprecated in Spring ’20). In LWR templates, only the name attribute is supported. The name of a page is its API name, which is configurable during page creation and visible on the page properties.

URLs for record detail pages behave a little differently in LWR sites than in Aura sites.

-   For pages of type standard\_\_recordPage, the URLs that are generated using the lightning/navigation API include detail as the recordName in the URL path. The proper record name is used when the user actually visits the page through a canonical URL redirect.
-   If the current user visits a record detail page but doesn’t have access to the current record, there’s no canonical URL redirect and the record name can’t be resolved.
-   There’s no support for pageReference type standard\_\_namedPage. Use comm\_\_namedPage instead.
-   When URL slugs are enabled for LWR Commerce stores, in pages of type standard\_\_recordPage, urlPath is supported for Category object pages, and urlName is supported for Product object pages. Include the urlName attribute for Product and urlPath attribute for Category in the standard\_\_recordPage pageReference attributes along with the recordId.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

When you develop custom Lightning web components that contain links, use the lightning/navigation API to generate URLs for the href values as an SEO best practice. See [Basic Navigation](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_navigate_basic) in the Lightning Web Components Developer Guide.

## Limitations

-   The comm\_\_loginPage pageReference type isn’t supported. Instead, navigate to the login page as a regular comm\_\_namedPage.
-   The objectApiName attribute is required when navigating to pages of type standard\_\_recordPage or standard\_\_recordRelationshipPage.
-   The actionName attribute isn’t enforced as required when navigating to pages of type standard\_\_recordPage or standard\_\_recordRelationshipPage. However, including actionName remains a recommended best practice.
