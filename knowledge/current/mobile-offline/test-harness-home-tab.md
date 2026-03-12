---
title: "Test Harness Home Tab"
domain: mobile-offline
topic: test-harness-home-tab
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.515Z
estimatedTokens: 721
keywords: [Test, Harness, Home, Tab, app, base, tool, daily, development, activities, screen, start, log, Salesforce, direct]
---

# Test Harness Home Tab

> The Home tab of the Test Harness app is your home base for using the tool in your daily
    development activities. This screen is where you start from after you log into Salesforce with
    the app. It provides direct access to the most essential tools in Test Harness.

# Test Harness Home Tab

The Home tab of the Test Harness app is your home base for using the tool in your daily development activities. This screen is where you start from after you log into Salesforce with the app. It provides direct access to the most essential tools in Test Harness.

The Home tab is organized as a series of cards. Scroll to the card with the feature or tool you want to use. Some cards offer controls right on the card itself, while others lead you to secondary screens when you tap on them.

Test Harness comes with a predefined set of cards on the **Home** tab. Cards, such as **My Offline Records**, have a static user interface. Others, such as **Global Actions**, are controlled by metadata, and can be configured in Setup in your org.

## My Offline Records

The **My Offline Records** card matches the same card in the Offline App in Salesforce Mobile App Plus.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Your organization must purchase and license Salesforce Mobile App Plus in order to use the enhanced features. Contact your Salesforce sales rep for more information.

**My Offline Records** allows you to inspect the records that are primed by the Offline Briefcase assigned to your user. You can navigate into the list of objects that are included in the briefcase, and further into specific records.

The record view available in **My Offline Records** matches what your users see when using the Salesforce Mobile app in offline mode. That is, the view is driven by your org’s metadata for page layouts, the way non-developers see them. For example, you see only the record-specific quick actions that are added to the page layout for the object, and each quick action has the icon you’ve defined for it. In contrast, when you view records in the developer-centric **SObjects** tab, **all** LWC-based quick actions defined for the object are displayed in a list, without icons.

## Global Actions

This card displays quick actions that you’ve added to a global publisher layout in your org. This makes it quick and easy to test global actions you’re working on. See [Add Actions to Global Publisher Layouts](https://help.salesforce.com/s/articleView?id=platform.customizing_global_publisher_layouts.htm&type=5&language=en_US) in the Salesforce Help for details of how to add your global actions to a publisher layout.

## Recently Viewed Records

The **Home** tab displays the most recently accessed Account records in this card. The list is driven by activity, real record views in Salesforce—not viewing them in Test Harness. If you don’t see the records you expect to see, view Salesforce in your desktop browser, and visit records of the appropriate type there. Then return to the Test Harness app, where you can pull-to-refresh to see an updated list of recently viewed records.
