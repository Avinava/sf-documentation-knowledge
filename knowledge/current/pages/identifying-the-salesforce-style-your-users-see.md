---
title: "Identifying the Salesforce Style Your Users See"
domain: pages
topic: identifying-the-salesforce-style-your-users-see
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.210Z
estimatedTokens: 590
keywords: [Identifying, Salesforce, Style, Users, you’re, creating, Visualforce, it’s, often, useful, know, look, feel, user, expects]
---

# Identifying the Salesforce Style Your Users See

> When you’re creating a Visualforce page, it’s often useful to know the Salesforce look
    and feel your user expects, in order to render a page that matches their style. For example,
    some users have the choice to customize their look and feel. You’ll need to design your
    Visualforce pages to take these differences into consideration.

# Identifying the Salesforce Style Your Users See

When you’re creating a Visualforce page, it’s often useful to know the Salesforce look and feel your user expects, in order to render a page that matches their style. For example, some users have the choice to customize their look and feel. You’ll need to design your Visualforce pages to take these differences into consideration.

There are two global variables that can help you identify which style a user sees: $User.UITheme and $User.UIThemeDisplayed. The difference between the two variables is that $User.UITheme returns the look and feel the user is supposed to see, while $User.UIThemeDisplayed returns the look and feel the user actually sees. For example, a user can have the preference and permissions to see the Lightning Experience look and feel, but if they’re using a browser that doesn’t support that look and feel, for example, older versions of Internet Explorer, $User.UIThemeDisplayed returns a different value.

Both variables return one of the following values:

-   Theme1—Obsolete Salesforce theme
-   Theme2—Salesforce Classic 2005 user interface theme
-   Theme3—Salesforce Classic 2010 user interface theme
-   Theme4d—Modern “Lightning Experience” Salesforce theme
-   Theme4t—Salesforce mobile app theme
-   Theme4u—Lightning Console theme
-   PortalDefault—Salesforce Customer Portal theme
-   Webstore—AppExchange theme

Suppose a developer has hard coded some CSS styles to resemble Salesforce. In order to preserve the same look and feel on the Visualforce page for new styles, the developer needs to select between several stylesheets to handle the preferences of the user. The following example shows one possible way of accomplishing this:

```

```

Notice in this example that:

-   Using the rendered attribute you can “toggle” which sections display.
-   Since the <apex:stylesheet\> tag doesn't have a rendered attribute, you’ll need to wrap it in a component that does.

Even if a new look and feel is enabled for your users, they may not be running the right browser or accessibility settings to see it. Here’s a code example that makes use of the $User.UITheme variable to present alternate information to the user:

```

```

Notice that although $User.UITheme equals Theme3, $User.UIThemeDisplayed doesn’t, and so the page won’t render to its full potential.

## Code Examples

```
<apex:page standardController="Account">
    <apex:variable var="newUI" value="newSkinOn" 
        rendered="{!$User.UIThemeDisplayed = 'Theme3'}">
        <apex:stylesheet value="{!URLFOR($Resource.myStyles, 'newStyles.css')}" />
    </apex:variable>
    <apex:variable var="oldUI" value="oldSkinOn" 
        rendered="{!$User.UIThemeDisplayed != 'Theme3'}">
        <apex:stylesheet value="{!URLFOR($Resource.myStyles, 'oldStyles.css')}" />
    </apex:variable>
    <!-- Continue page design -->
</apex:page>
```

```
<apex:page showHeader="true" tabstyle="Case">
    <apex:pageMessage severity="error" rendered="{!$User.UITheme = 'Theme3' && 
                                                    $User.UIThemeDisplayed != 'Theme3'}">
    We've noticed that the new look and feel is enabled for your organization. 
    However, you can't take advantage of its brilliance. Please check with 
    your administrator for possible reasons for this impediment.
    </apex:pageMessage>
    <apex:ListViews type="Case" rendered="{!$User.UITheme = 'Theme3' && 
                                           $User.UIThemeDisplayed = 'Theme3'}"/>
</apex:page>
```
