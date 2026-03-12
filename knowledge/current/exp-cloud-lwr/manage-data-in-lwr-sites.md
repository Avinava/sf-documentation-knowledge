---
title: "Manage Data in LWR
        Sites"
domain: exp-cloud-lwr
topic: manage-data-in-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.632Z
estimatedTokens: 830
keywords: [Manage, Data, LWR, Sites, understand, how, visitor, engagement, sent, Cloud, best, tailor, tools, specific, needs]
---

# Manage Data in LWR
        Sites

> Use this guide to understand how visitor engagement from your LWR sites can be sent to
        Data Cloud and how you can best tailor our tools to your specific needs. Data is a powerful
        tool in the world of site management and analytics. Understanding how your users interact
        with your sites helps you build detailed user profiles, create enhanced analytics, and
        personalize your site for the best user experience.

# Manage Data in LWR Sites

Use this guide to understand how visitor engagement from your LWR sites can be sent to Data Cloud and how you can best tailor our tools to your specific needs. Data is a powerful tool in the world of site management and analytics. Understanding how your users interact with your sites helps you build detailed user profiles, create enhanced analytics, and personalize your site for the best user experience.

## Familiarize Yourself with Data Cloud

If you’re unfamiliar with Data Cloud, take some time to explore [Data Cloud Help](https://help.salesforce.com/s/articleView?id=data.c360_a_data_cloud.htm&type=5&language=en_US).

## Turn On Data Cloud for Your Site

The Experience Cloud integration with Data Cloud automatically performs most of the setup needed for you to get started. Before you get started, perform the tasks described in [Connect Data Cloud to Your LWR Sites](https://help.salesforce.com/s/articleView?id=experience.exp_cloud_data_cloud.htm&type=5&language=en_US) in Salesforce Help.

## Learn About the Experience Data Layer

A data layer contains all the information captured when a user interacts with your website. The data layer is embedded as JSON in the HTML of your website. It provides a central location for user data so it can be sent to other applications and processed. The Experience Data Layer contains information about the page, the user, and behavioral data from your Experience Cloud sites. All of that data provides valuable information about how your customers interact with your site and can be sent along to other apps like Data Cloud and Google Analytics, or power products like Marketing Cloud.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

Use the Experience Data Layer Object Lightning web component to populate the data layer.

## Experience Data Layer Code with Embedded JSON

```

```

-   **[Confirm That Your Data Streams Are Active](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_cloud_setup.htm)**
    If you connect your Experience Cloud site to Data Cloud, the connection and data streams are automatically installed in the data space that you selected during setup. Confirm that streams from your Experience Cloud connector are active.
-   **[Capture and Integrate Engagement Data](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_capture.htm)**
    Experience Tag Manager is a JavaScript library that captures user-interaction events from the Experience Cloud data layer and combines them with site data to generate web events. These events are sent to other applications, such as Data Cloud or Google Analytics. Tag Manager is installed automatically when you connect your enhanced LWR sites to Data Cloud with the built-in Data Cloud integration. You can then use information you gather with Tag Manager to build behavior profiles for web visitors, audience segmentation, site personalization, or Salesforce integrations.
-   **[Tag Manager Event Reference](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_event_reference.htm)**
    This guide includes the event specifications for Experience Tag Manager. Use the examples and reference to understand the structure of Experience Cloud interaction events that are mapped to the Website Engagement DMO in Data Cloud.

## Code Examples

```
<html>
    <head>
    </head>
    <body>
        <web-runtime-app>
            <experience-data-layer-object>
                <script type="application/json" data-provider-type="site">
                    {
                        "siteId": "site-12345"
                    }
                </script>
            </experience-data-layer-object>
            <experience-data-layer-object>
                <script type="application/json" data-provider-type="page">
                    {
                        "url": "https://www.datacloud.salesforce.com",
                        "urlReferrer": "https://www.root.salesforce.com"
                    }
                </script>
            </experience-data-layer-object>
            <experience-data-layer-object>
                <script type="application/json" data-provider-type="user">
                    {
                        "guestUuid": "guest-uuid-12345",
                        "crmId": "user-id-12345"
                    }
                </script>
            </experience-data-layer-object>
            <commerce-product-list-component>
                <commerce-product-list-data-provider>
                    <experience-data-layer-object>
                        <script type="application/json" data-provider-type="catalog">
                            [
                                {
                                    "id": "product-id-12345",
                                    "type": "Product",
                                    "attributes": {
                                        "color": "blue"
                                    }
                                },
                                {
                                    "id": "product-id-54321",
                                    "type": "Product",
                                    "attributes": {
                                        "color": "orange"
                                    }
                                }
                            ]
                        </script>
                    </experience-data-layer-object>
                </commerce-product-list-data-provider>
                    <div>
                        <p>Product-1</p>
                    </div>
                <commerce-individual-product-component>
                </commerce-individual-product-component>
                    <div>
                        <p>Product-2</p>
                    </div>
                <commerce-individual-product-component>
                </commerce-individual-product-component>
            </commerce-product-list-component>
        </web-runtime-app>
    </body>
</html>
```

## Related Topics

- Confirm That Your Data Streams Are Active (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_cloud_setup.htm)
- Capture and Integrate Engagement Data (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_capture.htm)
- Tag Manager Event Reference (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_event_reference.htm)
