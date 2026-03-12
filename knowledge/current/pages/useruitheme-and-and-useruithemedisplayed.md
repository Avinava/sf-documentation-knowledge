---
title: "$User.UITheme and and $User.UIThemeDisplayed"
domain: pages
topic: useruitheme-and-and-useruithemedisplayed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.451Z
estimatedTokens: 337
keywords: [$User.UITheme, $User.UIThemeDisplayed, merge, identify, Salesforce, look, feel, user, sees, Web, Usage]
---

# $User.UITheme and and $User.UIThemeDisplayed

> These global merge fields identify the Salesforce look and feel a user sees on a given
    Web page.

# $User.UITheme and and $User.UIThemeDisplayed

These global merge fields identify the Salesforce look and feel a user sees on a given Web page.

The difference between the two variables is that $User.UITheme returns the look and feel the user is supposed to see, while $User.UIThemeDisplayed returns the look and feel the user actually sees. For example, a user can have the preference and permissions to see the Lightning Experience look and feel, but if they’re using a browser that doesn’t support that look and feel, for example, older versions of Internet Explorer, $User.UIThemeDisplayed returns a different value.

## Usage

Use these variables to identify the CSS used to render Salesforce web pages to a user. Both variables return one of the following values.

Valid values include:

-   Theme1—Obsolete Salesforce theme
-   Theme2—Salesforce Classic 2005 user interface theme
-   Theme3—Salesforce Classic 2010 user interface theme
-   Theme4d—Modern “Lightning Experience” Salesforce theme
-   Theme4t—Salesforce mobile app theme
-   Theme4u—Lightning Console theme
-   PortalDefault—Salesforce Customer Portal theme that applies to Customer Portals only and not to Experience Builder sites
-   Webstore—AppExchange theme

## Example

The following example shows how you can render different layouts based on a user’s theme:

```

```

## Code Examples

```
<apex:page>
    <apex:pageBlock title="My Content" rendered="{!$User.UITheme == 'Theme2'}">
        // this is the old theme...
    </apex:pageBlock>

    <apex:pageBlock title="My Content" rendered="{!$User.UITheme == 'Theme3'}">
       // this is the classic theme ...
    </apex:pageBlock>
</apex:page>
```
