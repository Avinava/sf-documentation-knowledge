---
title: "Input Issues"
domain: pages
topic: input-issues
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.531Z
estimatedTokens: 319
keywords: [Input, Issues, affect, how, users, enter, selectors, Salesforce, mobile, app]
---

# Input Issues

> Input issues affect how users enter information using input fields and selectors in the
  Salesforce mobile app.

# Input Issues

Input issues affect how users enter information using input fields and selectors in the Salesforce mobile app.

| Issue | Solution |
| --- | --- |
| A Visualforce page accessed by a list button using a URL content source displays improper styling for input selectors. For example, input date fields display a calendar with white-on-white dates. This issue is exclusive to Salesforce for Android. | Convert the list view URL button to a list view button with a Visualforce page content source, a Visualforce tab, or a Visualforce action. |
| The iOS native input controls remain on the screen if a user taps into an input field then the header back arrow with those controls still activated. The input controls can also reappear unexpectedly when navigating to other pages. This issue is exclusive to Salesforce for iOS. | Ensure that input controls are closed before navigating in the Salesforce mobile app. |
| Visualforce input field freezes or doesn’t allow input after a long press in the field. A user could long press to copy and paste, make a selection, or change cursor position. This issue is exclusive to Salesforce for iOS. | Add the following line of JavaScript to the bottom of the Visualforce page: window.onkeydown=function(){window.focus();} |
