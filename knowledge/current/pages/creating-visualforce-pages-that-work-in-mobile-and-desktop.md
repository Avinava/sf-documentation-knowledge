---
title: "Creating Visualforce Pages That Work in Mobile and
        Desktop"
domain: pages
topic: creating-visualforce-pages-that-work-in-mobile-and-desktop
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.570Z
estimatedTokens: 638
keywords: [Creating, Visualforce, Pages, Work, Mobile, Desktop, well, Salesforce, app, full, site, writing, code, adapts, context]
---

# Creating Visualforce Pages That Work in Mobile and
        Desktop

> Create Visualforce pages that work well in both the Salesforce mobile app and the
        full Salesforce site by writing code that adapts to the context it’s running in.

# Creating Visualforce Pages That Work in Mobile and Desktop

Create Visualforce pages that work well in both the Salesforce mobile app and the full Salesforce site by writing code that adapts to the context it’s running in.

The Salesforce mobile app provides a framework for handling various navigation controls and events. That framework isn’t available to Visualforce pages when they run on the full Salesforce site, because the sforce object is injected onto pages only inside the app. This means that, for pages shared between the Salesforce mobile app and the full Salesforce site, you’ll want to write code that uses the sforce object when it’s available, and standard Visualforce navigation when it’s not.

For example, here is a bit of JavaScript that runs after a JavaScript remoting request successfully returns from the @RemoteAction method that creates a quick order. This code is from a Visualforce page that’s used as a custom action, which adds it to the action bar in the Salesforce mobile app and the publisher menu in the full Salesforce site. It needs to work in both places. The intent of the code is to navigate to the detail page for the account for whom the order was placed:

```

```

The if statement checks to see if the sforce object is available and usable. This is only true if the page is running inside the app. If sforce is available, the mobile navigation management system is used to go to the account’s detail page.

If the sforce object isn’t available, trying to use it to navigate anywhere results in a JavaScript error, and no navigation. So, instead, the code sets the window’s URL using a Visualforce expression that returns the URL for the account’s detail page. You don’t want to do this in the app because the navigation event will be lost by the framework, but it’s required in normal Visualforce.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

It’s a best practice to factor out common tests like this one into their own helper function. You could add something like the following to a JavaScript static resource, and then just call ForceUI.isSalesforce1() in your if conditions. Then, if the detection logic changes, you only have to update it in one place.

```

```

#### See Also

-   [$Action](atlas.en-us.pages.meta/pages/pages_variables_global_action.htm "A global merge field type to use when referencing standard Salesforce actions, such as displaying the Accounts tab home page, creating accounts, editing accounts, and deleting accounts.")

## Code Examples

```
// Go back to the Account detail page
if( (typeof sforce != 'undefined') && sforce && (!!sforce.one) ) {
    // Salesforce app navigation
    sforce.one.navigateToSObject(aId);
}
else {
    // Set the window's URL using a Visualforce expression
    window.location.href = 
        '{!URLFOR($Action.Account.View, account.Id)}';
}
```

```
(function(myContext){
    myContext.ForceUI = myContext.ForceUI || {};

    myContext.ForceUI.isSalesforce1 = function() {
        return((typeof sforce != 'undefined') && sforce && (!!sforce.one));
    }
})(this);
```

## Related Topics

- $Action (atlas.en-us.pages.meta/pages/pages_variables_global_action.htm)
