---
title: "Cross-Site Request Forgery"
domain: packagingGuide
topic: cross-site-request-forgery
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.164Z
estimatedTokens: 663
keywords: [Cross-Site, Forgery, CSRF, attack, forces, end, user, execute, unwanted, actions, their, authenticated, web, application, session]
---

# Cross-Site Request Forgery

> A cross-site request forgery (CSRF) is an attack that forces an end user to execute
    unwanted actions during their authenticated web application session. To protect against CSRF,
    use confirmationTokenRequired, or trigger state changes
    with user actions.

# Cross-Site Request Forgery

A cross-site request forgery (CSRF) is an attack that forces an end user to execute unwanted actions during their authenticated web application session. To protect against CSRF, use confirmationTokenRequired, or trigger state changes with user actions.

All form requests made on the Salesforce Platform are protected. Insert, delete, update, and upsert state change operations triggered by user action, such as a button click, are also protected.

However, state change or data manipulation language (DML) operations triggered on page instantiation execute before the rest of the page loads, and they bypass the platform’s default CSRF protection. State change and DML operations in class constructors are vulnerable if they’re triggered from:

-   Visualforce pages
-   Lightning web components (LWC)
-   Aura
-   Any methods called from the action parameter of a Visualforce page

## Apex Example

This Visualforce page is vulnerable to CSRF because the !init action is triggered on page initialization.

```

```

A hacker can craft a URL containing parameters that alter database statements, allowing them to perform malicious actions of their choosing. When a user opens such a URL while logged in to your app, the code executes using the hacker’s chosen URL parameters. The unintended database actions execute from the context of the victim’s browser.

## Visualforce Page Protection

To protect against the CSRF vulnerability in a Visualforce page when state change or DML operations execute on page initialization, enable the confirmationTokenRequired boolean metadata field in the Visualforce page.

If confirmationTokenRequired is set to true, GET requests to the page require a CSRF token in the URL. If the token is omitted, the page is inaccessible.

The default setting is false, which removes Apex’s built-in CSRF token protection. You can configure this field by going to relevant Visualforce page settings in org setup.

For more info about confirmationTokenRequired, refer to [ApexPage](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_pages.htm "HTML (New Window)") in the Metadata API Developer Guide.

## Lightning and LWC CSRF Protection

Don’t perform any state change or DML operations in an Apex controller during instantiation of Lightning or LWC. Instead, trigger a state change with a user action, such as a button click. To learn more about CSRF and how to prevent it in your code, check out the [Secure Server-Side Development module](https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development "HTML (New Window)") on Trailhead.

## Code Examples

```apex
<apex:page controller="maincontroller" action="{!init}">

public pageReference init(){

   UserSetting__c accountToUpdate;
   pageReference p = page.mainview;
   // Retrieve the password and redirect query string parameters from the current page URL
   String password = ApexPages.currentPage().getParameters().get('password');
   String redirect =   ApexPages.currentPage().getParameters().get('redirect');
   if(string.isBlank(redirect)){
       p.getParameters().put('redirect', '/home/home.jsp');
       p.setRedirect(true);
   } else {
       p.getParameters().put('redirect', redirect);
   }
   if(string.isBlank(password)){
       p.getParameters().put('password', 'blank');
       p.setRedirect(true);
   } else {
       p.getParameters().put('password', password);
       accountToUpdate = [SELECT password__c FROM UserSetting__c LIMIT 1];
       accountToUpdate.password__C = password;
       update accountToUpdate;
   }
   if(p.getRedirect()== true){
      return p; 
   }
   else {
       return null;
   }
}
```
