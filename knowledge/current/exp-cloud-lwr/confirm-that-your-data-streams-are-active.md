---
title: "Confirm That Your Data Streams Are Active"
domain: exp-cloud-lwr
topic: confirm-that-your-data-streams-are-active
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.622Z
estimatedTokens: 710
keywords: [Confirm, Data, Streams, Active, connect, Experience, Cloud, site, connection, automatically, installed, space, selected, setup, connector]
---

# Confirm That Your Data Streams Are Active

> If you connect your Experience Cloud site to Data Cloud, the connection and data streams
  are automatically installed in the data space that you selected during setup. Confirm that streams
  from your Experience Cloud connector are active.

# Confirm That Your Data Streams Are Active

If you connect your Experience Cloud site to Data Cloud, the connection and data streams are automatically installed in the data space that you selected during setup. Confirm that streams from your Experience Cloud connector are active.

| Available in: Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |
| Applies to: LWR sites |


| User Permissions Needed |
| --- |
| To create or edit a data stream: | One of these permission sets:Data Cloud AdminData Cloud Marketing AdminData Cloud Data Aware Specialist |

Before completing these steps, [connect your Experience Cloud site to Data Cloud](https://help.salesforce.com/s/articleView?id=experience.exp_cloud_data_cloud.htm&type=5&language=en_US "HTML (New Window)").

1.  From Data Cloud Setup, under External Integrations, select **Websites & Mobile Apps**.
2.  Confirm that **EC\_Engagement\_Connector** is listed and exit Data Cloud Setup.
3.  From Data Cloud, go to the Data Streams tab and change the list view to **All Data Streams**. Verify that your streams from the EC\_Engagement\_Connector are active.

    The names of these streams start with the prefix EC\_Engagement\_Connector-.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

By default, EC\_Engagement\_Connector data lake objects (DLO) have a filter applied on siteId. If you have multiple LWR sites with Data Cloud integrations, this filter makes the DLOs associated with each site visible only in the data space that you selected during setup.

To start capturing events to send to Data Cloud, [configure your user consent options](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_cloud_consent_management.htm "To start capturing events to send to Data Cloud, configure your user consent options. By default, Tag Manager doesn’t send data to its destination until the user explicitly opts in. Choose how to present consent options to the site visitor and whether to update the default behavior.").

#### See Also

-   [*Salesforce Help*: Connect Experience Cloud to Data Cloud](https://help.salesforce.com/s/articleView?id=experience.exp_cloud_data_cloud.htm&type=5&language=en_US "Salesforce Help: Connect Experience Cloud to Data Cloud - HTML (New Window)")

-   [*Salesforce Help*: Add Filters to a Data Lake Object](https://help.salesforce.com/s/articleView?id=data.c360_a_add_filters_to_a_data_object.htm&type=5&language=en_US "Salesforce Help: Add Filters to a Data Lake Object - HTML (New Window)")

-   [*Salesforce Help*: Manage Data Spaces](https://help.salesforce.com/s/articleView?id=data.c360_a_data_spaces.htm&type=5&language=en_US "Salesforce Help: Manage Data Spaces - HTML (New Window)")

## Related Topics

- configure your user consent options (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_cloud_consent_management.htm)
