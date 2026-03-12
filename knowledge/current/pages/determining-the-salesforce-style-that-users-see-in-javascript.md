---
title: "Determining the Salesforce Style That Users See in JavaScript"
domain: pages
topic: determining-the-salesforce-style-that-users-see-in-javascript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.204Z
estimatedTokens: 391
keywords: [Determining, Salesforce, Style, Users, JavaScript, lot, pages, apps, identifying, theme, user, sees, code, current, experience]
---

# Determining the Salesforce Style That Users See in JavaScript

> If you use a lot of JavaScript in your pages and apps, identifying the Salesforce theme
  that a user sees in JavaScript code is important. Identifying the current user experience context
  allows you to correctly manage navigation in your JavaScript code.

# Determining the Salesforce Style That Users See in JavaScript

If you use a lot of JavaScript in your pages and apps, identifying the Salesforce theme that a user sees in JavaScript code is important. Identifying the current user experience context allows you to correctly manage navigation in your JavaScript code.

The UITheme.getUITheme() JavaScript function returns a string containing one of the following values to identify the current user interface theme.

-   Theme1—Obsolete Salesforce theme
-   Theme2—Salesforce Classic 2005 user interface theme
-   Theme3—Salesforce Classic 2010 user interface theme
-   Theme4d—Modern “Lightning Experience” Salesforce theme
-   Theme4t—Salesforce mobile app theme
-   Theme4u—Lightning Console theme
-   PortalDefault—Salesforce Customer Portal theme
-   Webstore—AppExchange theme

The string values returned are the same values returned by the Visualforce $User.UITheme and $User.UIThemeDisplayed global variables.

The following markup checks if the current user experience context is the Lightning Experience theme.

```

```

#### See Also

-   [Identifying the Salesforce Style Your Users See](atlas.en-us.pages.meta/pages/pages_styling_salesforce_identifying_theme.htm "When you’re creating a Visualforce page, it’s often useful to know the Salesforce look and feel your user expects, in order to render a page that matches their style. For example, some users have the choice to customize their look and feel. You’ll need to design your Visualforce pages to take these differences into consideration.")

## Code Examples

```
function isLightningDesktop() {
  return UITheme.getUITheme === "Theme4d";
}
```

## Related Topics

- Identifying the Salesforce Style Your Users See (atlas.en-us.pages.meta/pages/pages_styling_salesforce_identifying_theme.htm)
