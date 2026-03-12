---
title: "Defining Navigation Methods"
domain: pages
topic: defining-navigation-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.951Z
estimatedTokens: 827
keywords: [Defining, Navigation, addition, performing, database, updates, computations, custom, controller, action, navigate, users, different, returning, PageReference]
---

# Defining Navigation Methods

> In addition to performing database updates and other computations,
custom controller  action methods can navigate users to a different
page by returning a PageReference object.

# Defining Navigation Methods

In addition to performing database updates and other computations, custom controller action methods can navigate users to a different page by returning a PageReference object.

A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.

In a custom controller or controller extension, you can refer to or instantiate a PageReference in one of the following ways:

-   ```

    ```

    Refers to a PageReference for a Visualforce page that has already been saved in your organization. By referring to a page in this way, the platform recognizes that this controller or controller extension is dependent on the existence of the specified page and will prevent the page from being deleted while the controller or extension exists.

-   ```

    ```

    Creates a PageReference to any page that is hosted on the Lightning platform. For example, setting 'partialURL' to '/apex/HelloWorld' refers to the Visualforce page located at http://MyDomainName\--PackageName.vf.force.com/apex/HelloWorld. Likewise, setting 'partialURL' to '/' + 'recordID' refers to the detail page for the specified record.

    This syntax is less preferable for referencing other Visualforce pages than Page.existingPageName because the PageReference is constructed at runtime, rather than referenced at compile time. Runtime references are not available to the referential integrity system. Consequently, the platform doesn't recognize that this controller or controller extension is dependent on the existence of the specified page and won't issue an error message to prevent user deletion of the page.

-   ```

    ```

    Creates a PageReference for an external URL. For example:

    ```

    ```


For this example, suppose you want to redirect a user to another page with a new URL after he or she clicks **Save**. To do this, first create a second page named mySecondPage by navigating to the following URL and using the quick fix:

```

```

Then add the following markup to mySecondPage. For simplicity, just use the following standard-controller-based page that was defined earlier in the tutorial:

```

```

Now return to the original page that you built in [Defining Action Methods](atlas.en-us.pages.meta/pages/pages_quick_start_controller_setter_methods.htm) and make sure that you have specified an account id query parameter in the URL. Edit the save method in the controller so that it returns a PageReference to the new page you just created, “mySecondPage”:

```

```

Notice in the code above that the redirect attribute for the PageReference is set to true. If this attribute is not set, the PageReference is returned to the browser, but no navigation occurs—the URL for the original page remains the same. If you want to change the URL as a result of navigation, you have to set the redirect attribute.

If you test the page now, clicking **Save New Account Name** navigates to mySecondPage, but the data context is lost—that is, no value is available for {!account.name}. The reason for this is that when a redirect occurs the controller clears the context state. Consequently we need to reset the id query string parameter in the PageReference's parameter map:

```

```

## Code Examples

```
PageReference pageRef = new PageReference('partialURL');
```

```
PageReference pageRef = new PageReference('fullURL');
```

```
PageReference pageRef = new PageReference('http://www.google.com');
```

```
https://MyDomainName--PackageName.vf.force.com/apex/mySecondPage
```

```
<apex:page standardController="Account">
    Hello {!$User.FirstName}!
    <p>You are viewing the {!account.name} account.</p>
</apex:page>
```

## Related Topics

- Defining Action Methods (atlas.en-us.pages.meta/pages/pages_quick_start_controller_setter_methods.htm)
