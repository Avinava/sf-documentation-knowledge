---
title: "Navigation Issues"
domain: pages
topic: navigation-issues
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.542Z
estimatedTokens: 574
keywords: [Navigation, Issues, prevent, users, navigating, certain, pages, Salesforce, mobile, app]
---

# Navigation Issues

> These issues prevent users from navigating to certain pages in the Salesforce mobile
  app.

# Navigation Issues

These issues prevent users from navigating to certain pages in the Salesforce mobile app.

| Issue | Solution |
| --- | --- |
| Visualforce tabs load the landing page after a user navigates away. | Allow the page to fully load before switching apps or selecting another tab, or select the Visualforce page tab again. |
| Users may see a blank page when returning to a Canvas page after switching between apps. | Reload the Canvas app. |
| If a publisher action makes a navigation call to a file record with the sforce.one.navigateToSObject function, the file preview window may close before displaying the file. This issue happens because the publisher.close method fires before the navigation call to the file record. This issue is exclusive to Salesforce for iOS. | Do not use the publisher.close call before navigating to a file record. Users must manually close the publisher action window after they’re done working with the file record. |
| The record type selection page may appear incorrectly when the user force quits the app from the correct version of the record type selection page. This issue is exclusive to Salesforce for iOS. | Navigate back to the object home page and tap New again. If the issue persists, clear the app cache or log out to reset the behavior. |
| "Sorry to Interrupt" error appears when using custom Visualforce pages that navigate to object home pages on an iPad. After the error appears, no other navigation calls work on the page until the device cache is cleared. | Clear the cache. |
| Navigating to a note record by ID from a Visualforce page using the sforce.one navigation library and then tapping Cancel or Save causes looping. If this navigation method is called from a Visualforce action on a record detail page, then the Cancel, Save, and Back buttons might return to a blank record detail page. | There is no direct workaround. Force quit and relaunch the app. |
| The view state POST request is stored in the Salesforce mobile app navigation history. If a user submits a view state form, navigates to another Visualforce page, and then clicks the back button, the POST request is served again. This issue creates duplicate records in Salesforce for iOS and causes an error in the browser app. | There is no known workaround. |
