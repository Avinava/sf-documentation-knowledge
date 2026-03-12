---
title: "Create Custom Pages in an LWR Site"
domain: exp-cloud-lwr
topic: create-custom-pages-in-an-lwr-site
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.711Z
estimatedTokens: 836
keywords: [Custom, Pages, LWR, Site, templates, Experience, Cloud, provide, few, key, additional, particular, case, Standard, Login]
---

# Create Custom Pages in an LWR Site

> LWR templates in Experience Cloud provide only a few key default pages, so you can
    create additional custom pages for your particular use case.

# Create Custom Pages in an LWR Site

LWR templates in Experience Cloud provide only a few key default pages, so you can create additional custom pages for your particular use case.

To create a custom page, open the Pages menu on the top toolbar in Experience Builder. Click **New Page** at the bottom of the Pages menu. See [Create Custom Pages with Experience Builder](https://help.salesforce.com/articleView?id=community_builder_create_page.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Standard Pages

When creating custom pages, the Search standard page is available for the template and supports certain routes and URL parameters.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

Some preconfigured standard pages, such as Account Management, are unsupported.

## Object Pages

Because the [recommended solutions for record page components](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_custom_records.htm "The Build Your Own (LWR) template doesn’t include record components, but you can use the User Interface API to construct your own custom components.") use the User Interface API to retrieve data, create object pages only for [Supported Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm "HTML (New Window)") in the User Interface API Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

Unlike in Aura templates, there are no generic record pages. If you need record pages, you must create them for a specific object.

## Login Pages

To use the Login, Forgot Password, and Registration pages that come with the LWR templates, ensure that your site is published. In the Login & Registration tab of the Administration workspace, select **Experience Builder Page** for each page. Enter main for the Login page (1), Forgot Password for the Forgot Password page (2), and Register for the Registration page (3).

![Login page, Forgot Password Page, and Registration page selection.](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_loginpages.png&folder=exp_cloud_lwr)

## Page Access & Authentication

As is the case with Aura sites, we send page metadata to the client for all routes in the site, including for guest user sessions.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=exp_cloud_lwr)

#### Important

For LWR sites, URL parameter validation during navigation differs from Aura sites. For example, we don’t prevent a user from accessing a record route when they don’t have permission to access that object or that particular record. We also don’t validate that URL parameters correspond to valid existing data in the org.

It’s the responsibility of the components on the page and the APIs used to enforce correct user sharing rules when retrieving data. Therefore, don’t put sensitive information on a page unless the data comes from an API that implements user access rules.

#### See Also

-   [Pages and Components in LWR Templates](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_pages.htm "The Build Your Own (LWR) and the Microsite (LWR) templates in Experience Cloud provide only the most essential out-of-the-box pages and components.")

## Related Topics

- recommended solutions for record page components (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_custom_records.htm)
- Pages and Components in LWR Templates (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_pages.htm)
