---
title: "User Interface Issues"
domain: pages
topic: user-interface-issues
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.548Z
estimatedTokens: 656
keywords: [User, Issues, affect, Salesforce, mobile, app’s]
---

# User Interface Issues

> These issues affect the Salesforce mobile app’s user interface.

# User Interface Issues

These issues affect the Salesforce mobile app’s user interface.

| Issue | Solution |
| --- | --- |
| The Salesforce mobile app standard back navigation button responds only if tapped twice. This issue occurs when programmatic calls like window.history.back() and sforce.one.back() are first used to navigate back one page and then the user attempts to use the standard back button to go back another page. This issue is exclusive to Salesforce for iOS. | If your implementation has several pages, design it to use only the standard back button or only programmatic calls. |
| When a user clicks back from a Visualforce page embedded in a record detail page, the page doesn’t scroll. | Wait several seconds after clicking back, navigate away from the record and back, or rotate the device from landscape to portrait. |
| Certain CSS elements cause the Cancel, Post, or Save buttons, or other parts of the user interface, to become unresponsive. | Remove these CSS elements that affect scrolling:overflow-x: hidden;overflow-y: scroll;-webkit-overflow-scrolling: touch; |
| Users can’t scroll on standard record Create and Edit pages in Salesforce for iOS. Users typically only encounter this issue when the Visualforce page that links to the Create or Edit page has content that extends beyond the device’s screen. This issue is exclusive to Salesforce for iOS. | Reduce the amount of content on the Visualforce page containing the Create or Edit links so user doesn’t need to scroll on the custom page |
| Embedded Visualforce pages in an object’s page layout don’t follow the user-defined height. This issue is exclusive to Salesforce for iOS. | Deselect the Show scrollbars option on the embedded Visualforce page from the page layout editor. |
| When scrolling in Safari on Visualforce pages, the page moves, but doesn’t reveal any new text. This issue is an Apple bug with the UIWebView. This issue is exclusive to Salesforce for iOS. | Refresh the page. |
| Experience Cloud site users see the standard new button for objects, even if the page is hidden by a Visualforce action override and marked as unavailable for mobile. This issue is exclusive to Salesforce for iOS. | There is no known solution. Use the browser-based version of Salesforce in Safari on iOS. |
| A view override for an object using Lightning Components disables scrolling for the entire page when accessed through a parent object's related list. This issue is exclusive to Salesforce for iOS. | There is no known solution. Access the records via the object home tab or by other means, such as programmatic navigation. |
