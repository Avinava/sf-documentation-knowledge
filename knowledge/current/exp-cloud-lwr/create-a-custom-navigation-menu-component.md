---
title: "Create a Custom Navigation Menu Component"
domain: exp-cloud-lwr
topic: create-a-custom-navigation-menu-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.721Z
estimatedTokens: 1162
keywords: [Custom, Navigation, Menu, Component, Build, Own, LWR, template, includes, customize, desktop, mobile, versions, site, prefer]
---

# Create a Custom Navigation Menu Component

> The Build Your Own (LWR) template includes a Navigation Menu component that you can
    customize for the desktop and mobile versions of your site. If you prefer to create your own
    component, we recommend that you create a custom Lightning web component with an Apex controller
    to get the navigation items.

# Create a Custom Navigation Menu Component

The Build Your Own (LWR) template includes a Navigation Menu component that you can customize for the desktop and mobile versions of your site. If you prefer to create your own component, we recommend that you create a custom Lightning web component with an Apex controller to get the navigation items.

## Step 1: Configure a Navigation Menu

To create a custom navigation menu component in Experience Builder, go to **Settings** | **Navigation**, and click **Add Navigation Menu**. In the Menu Editor, you can add navigation items targeting specific sites pages.

![Menu Editor](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_navmenu.png&folder=exp_cloud_lwr)

Adding navigation items creates the [NavigationLinkSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_navigationlinkset.htm "HTML (New Window)") object and its corresponding [NavigationMenuItems](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_navigationmenuitem.htm "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

LWR templates (Build Your Own and Microsite) don’t include generic record pages. So if you create an object or global action type menu item that links to a Salesforce object, make sure that you also create the corresponding object pages. If you don't create the associated object pages, end users don’t see anything if they click the menu item.

## Step 2: Implement the Apex Controller

To fetch the navigation menu for your component, you can implement an Apex controller that uses the Connect API to get the NavigationMenuItems for the NavigationLinkSet you created in the Menu Editor.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

See an example of this Apex controller in lightningNavigation/force-app/main/default/classes in the [code sample files](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm#code_sample).

In the example, we pass in:

-   navigationLinkSetMasterLabel, or the menu name, to look up the NavigationLinkSet.DeveloperName for the nav menu of the current site
-   publishStatus to get the correct NavigationMenuItems for a published site or for a site in draft mode
-   addHomeMenuItem to determine whether the Home menu item must be included in the data
-   includeImageUrl to determine whether the data must include image URLs

## Step 3: Implement the Navigation Menu Component

To implement your Navigation Menu component, use the code samples provided.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

See an example of a Navigation Menu component in lightningNavigation/force-app/main/default/lwc/navigationMenu in the [code sample files](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm#code_sample).

Here are some pointers on how the sample component is set up.

-   JavaScript: To get data into the Lightning web component, we must [import the Apex controller using the wire annotation](https://developer.salesforce.com/docs/component-library/documentation/lwc/apex).
-   JavaScript: To get the publishedState for the Apex controller, we can import the CurrentPageReference from [lightning/navigation](https://developer.salesforce.com/docs/component-library/bundle/lightning-navigation/documentation) and check whether the menu is published.
-   XML: We can expose the Navigation Menu Name through the property in the targetConfig of the js-meta.xml file.
-   JavaScript: To navigate between pages, make sure to reference [lightning/navigation](https://developer.salesforce.com/docs/component-library/bundle/lightning-navigation/documentation) and the [various page types that are supported](https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.use_navigate_page_types).

#### See Also

-   [*Lightning Web Component Reference:* Navigation](https://developer.salesforce.com/docs/component-library/bundle/lightning-navigation/documentation "Lightning Web Component Reference: Navigation - HTML (New Window)")

-   [*Video:* Use lightning-navigation in LWR Sites](https://www.youtube.com/watch?v=ydoPcylavmM&list=PLgIMQe2PKPSJXw3x0cPTJhzNyLBgpZV5a&index=6 "Video: Use lightning-navigation in LWR Sites - HTML (New Window)")

-   [*Video*: Build Custom Navigation and Footers for LWR Sites](https://youtu.be/8WpdllWm__o "Video: Build Custom Navigation and Footers for LWR Sites - HTML (New Window)")

## Related Topics

- code
          sample files (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm)
- code sample files (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm)
