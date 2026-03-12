---
title: "Channel Menu Reordering"
domain: snapins-web-dev
topic: channel-menu-reordering
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.267Z
estimatedTokens: 1026
keywords: [Channel, Menu, Reordering, Show, hide, reorder, selections, customers, browse, website, dynamic, experience, Change, floating, action]
---

# Channel Menu Reordering

> Show, hide, or reorder your Channel Menu selections as customers browse your
                website for a more dynamic experience. Change the floating action button and channel
                options offered, depending on the user’s page location or how long they’re on the
                page.

# Channel Menu Reordering

Show, hide, or reorder your Channel Menu selections as customers browse your website for a more dynamic experience. Change the floating action button and channel options offered, depending on the user’s page location or how long they’re on the page.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

![A screenshot of a custom action button and a dynamic Channel Menu.](/docs/resources/img/en-us/260.0?doc_id=images%2Fembedded_service_reorder_menu.png&folder=snapins_web_dev)

This API can reorder any channels configured in setup (EmbeddedServiceMenuItem), and hide/show items as needed based on the user’s interaction on the web page.

To create a dynamic deployment:

1.  Create a New Deployment or use an existing deployment on your Channel Menu Setup page. Decide which menu items to initially display on page load and which menu items to dynamically surface after a particular user action on your website.
2.  In Menu Setup, uncheck the Show this menu item box under Default Display for items to appear later. Write down the menu item names.
3.  At runtime, you invoke the Reordering API by calling embedded\_svc.menu.reorder with a list of your menu item names. The items are listed in order on the same web page as the Channel Menu code snippet.

    embedded\_svc.menu.reorder(\["YourMenuItemName"\]);

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

    #### Note

    If you leave a menu item’s name out of the array, the menu item will not be displayed after reordering.

4.  A menu item array example (replace with your exact menu item names):

    var newOrder = \["ServiceChat", "PriorityPhoneCall", "CallCenter"\];


For example, if you decide to show only a priority-channel phone number when an expensive item is added to the shopping cart. You call embedded\_svc.menu.reorder(\["PriorityPhoneCall"\]); inside your addToCart JavaScript logic for the item price or other criteria met. Now, adding an expensive item to the cart triggers a channel menu reorder and surface a priority channel to the end user.

**Access List of Original Channel Menu Items from Setup**

Once the reorder is called, the menu displays the new order from the API. If you want to return the user to all original channels defined in Channel Menu Setup, access the value: embedded\_svc.menu.menuConfig.menuItems.

If you want to return the user to the channels defined in Channel Menu Setup configured for their operating system, access the value: embedded\_svc.menu.menuConfig.configuredChannels.

**API Considerations:**

-   The API is fully client-side. No additional server calls are made.
-   The API updates a single item action button to a menu with multiple channel items configured.
-   This API does not dynamically update branding, labels, or other generic menu settings at runtime.
-   If you pass in an empty array (i.e. embedded\_svc.menu.reorder(\[\]);), this action hides the current Channel Menu. You can also call embedded\_svc.menu.hideButtonAndMenu() to do the same.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=snapins_web_dev)

#### Tip

If you don’t see an expected channel displayed, set \`embedded\_svc.menu.settings.devMode = true;’ in the code snippet. You can see the console logs which menu items are reordered or hidden. Validation errors show up even if devMode is false.
