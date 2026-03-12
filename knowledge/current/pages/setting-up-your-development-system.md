---
title: "Setting Up Your Development System"
domain: pages
topic: setting-up-your-development-system
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.832Z
estimatedTokens: 607
keywords: [Setting, Development, System, Salesforce, several, different, tools, ways, write, edit, view, code, Choosing, Editor, Viewing]
---

# Setting Up Your Development System

> Salesforce provides several different tools and ways to write, edit, and view your
  code.

# Setting Up Your Development System

Salesforce provides several different tools and ways to write, edit, and view your code.

## Choosing Your Editor

First set up the tool you’ll use to write code. The Developer Console, the Salesforce Extensions for Visual Studio Code, and the Setup editor all work when developing for the Salesforce app, Lightning Experience, and Salesforce Classic. The only exception is the Visualforce Development Mode footer, which is available in Salesforce Classic only.

## Viewing Your Visualforce Page

In Salesforce Classic, you can view your page using the https://yourInstance.salesforce.com/apex/PageName URL pattern. This method doesn’t work for viewing Salesforce app pages in Lightning Experience, because pages you view using direct URL access always display in Salesforce Classic.

To view your page in Lightning Experience, go to https://yourInstance.salesforce.com/lightning. The simplest way to get to a specific Visualforce page is to create a tab for it, and then navigate to that tab via the All Items section in the App Launcher.

For a more long-term approach, create an “In Development” app, and add and remove your Visualforce tabs to it as you work.

1.  From Setup, enter Apps in the **Quick Find** box, then select **App Manager**.
2.  Click **New Lightning App**, and then create a custom app for your pages in development.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    Consider restricting your app to only System Administrators, or a profile you’ve created for developers in your organization.

3.  From Setup, enter App Menu in the **Quick Find** box, then select **App Menu**.
4.  Make sure your In Development app is set to **Visible** in App Launcher.
5.  From Setup, enter Tabs in the **Quick Find** box, then select **Tabs**.
6.  Click **New** in the Visualforce Tabs section, and then create a custom tab for the page currently in development. Make the tab visible only to your development user profile, and add the tab only to your In Development app.
7.  Repeat the previous step for each page you want to add to your In Development app.

You can also add the following bookmarklet to your browser’s menu or toolbar to navigate directly to your page. This JavaScript fires the Lightning Experience navigateToURL event, and is the equivalent of entering in the classic /apex/PageName URL.

```

```

## Code Examples

```
javascript:(function(){ 
  var pageName = prompt('Visualforce page name:'); 
  $A.get("e.force:navigateToURL").setParams(
    {"url": "/apex/" + pageName}).fire();})();
```
