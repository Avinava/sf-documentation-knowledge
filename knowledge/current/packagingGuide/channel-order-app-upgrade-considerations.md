---
title: "Channel Order App Upgrade Considerations"
domain: packagingGuide
topic: channel-order-app-upgrade-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:20.743Z
estimatedTokens: 606
keywords: [Channel, Order, App, Upgrade, Considerations, install, new, version, COA, understand, what’s, changed, how, changes, affect]
---

# Channel Order App Upgrade Considerations

> Before you install a new version of the Channel Order App (COA), understand what’s
    changed in the app and how the changes can affect your customizations.

# Channel Order App Upgrade Considerations

Before you install a new version of the Channel Order App (COA), understand what’s changed in the app and how the changes can affect your customizations.

## Upgrades from v1.39 or Earlier to v2

If you’re using COA v1.39 or earlier, these considerations apply when upgrading to v2 or later.

## Replaced Service Order Credentials Page

In v2 and later, the COA Setup page replaces the Service Order Credentials page. After you upgrade, go to the setup page and refresh your connection to Salesforce. If the connection isn’t refreshed, Salesforce can’t receive your orders.

## New Permission Sets for Accessing the COA

In v1.39 and earlier, a custom profile controls access to the COA. In v2 and later, you control access with permission sets. After you upgrade, assign a permission set to the people on your team who use the COA, including those people who accessed the app using the custom profile. Without a permission set, your users can’t access the COA.

## New Customers Tab

In v2 and later, the new Customers tab shows you customer information, including order history and related products. After you upgrade, you must create this tab and configure it to display in the app.

## Replaced Orders Tab

In v2 and later, the Service Orders tab replaces the Orders tab. After you upgrade, remove the Orders tab from the app and configure the Service Orders tab.

## Updated Page Layouts

In v2 and later, the customer, service order, partner contract terms, and partner product catalog objects have updated page layouts. After you upgrade, assign the updated layouts to each object.

## Replaced Partner Order Submit API

In v2 and later, the Channel Order API replaces the Partner Order Submit API. When you upgrade, you can still submit orders using the Partner Order Submit API, and your existing integrations continue to function. However, the Partner Order Submit API doesn’t include features introduced in the Channel Order Apex API, such as the ability to edit, recall, and clone orders.

## Other Changes to the API

We changed how the API sets the status of submitted orders. In v1.39 and earlier, the Partner Order API automatically updated the Service\_Order\_Status\_\_c field of a submitted order. In v2 and later, the Channel Order API provides a response that reports if the submit operation succeeded, but doesn’t update Service\_Order\_Status\_\_c field.
