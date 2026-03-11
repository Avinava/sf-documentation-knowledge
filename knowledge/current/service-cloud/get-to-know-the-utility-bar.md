---
title: "Get to Know the Utility Bar"
domain: service-cloud
topic: get-to-know-the-utility-bar
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.124Z
keywords: [Get, Know, Utility, Bar, See]
---

# Get to Know the Utility Bar

# Get to Know the Utility Bar

The utility bar is a specialized type of Lightning page that gives your users quick access to common productivity tools. Utility bars are supported in Lightning Experience for desktop only.

A utility is broadly defined as a single-column Lightning page. Salesforce provides you with several ready-to-use utilities, such as Recent Items, History, and Notes. You can also make your own, and customize the utility bar in Setup. From Setup, enter App Manager in the Quick Find box, then select **App Manager**. Either click **New Lightning App** to create an app, or click **Edit** next to an existing Lightning app to add a utility bar or edit the existing one. The utility bar API includes a set of methods for working with utilities and the utility bar.

To add a utility bar, add at least one utility item that isn’t a background utility item. To remove a utility bar, remove all non-background utility items from your app.

![A guided tour of the utility bar.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_console%2Fimages%2Fapi_console_utility_bar.png&folder=api_console)

1.  The utility bar. This utility bar includes four utilities: Chatter Feed, Quip, History, and Notes. Each utility has an icon and label.
2.  The selected utility. The selected utility opens in a panel.
3.  The panel header, showing the panel icon and label.

#### See Also

-   [*Salesforce Help*: Add a Utility Bar to Lightning Apps](https://help.salesforce.com/articleView?id=apps_lightning_utilities.htm&language=en_US "Salesforce Help: Add a Utility Bar to Lightning Apps  - HTML (New Window)")
    
-   [Methods for the Utility Bar in Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_lightning_utilityBarAPI.htm "The utility bar houses Aura components and Lightning web components, providing users quick access to tools they use often. The utility bar is available in Lightning Experience only. Both Lightning Web Components (LWC) and Aura Components support the utility bar methods, with usage differences noted on each method.")
    
-   [Using Background Utility Items](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_background_utility_item.htm "Implement the lightning:backgroundUtilityItem interface to create a component that fires and responds to events without rendering in the utility bar.")