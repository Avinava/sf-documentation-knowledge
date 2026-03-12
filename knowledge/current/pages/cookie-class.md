---
title: "Cookie Class"
domain: pages
topic: cookie-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.735Z
estimatedTokens: 633
namespace: System
keywords: [Cookie, lets, access, cookies, Salesforce, site, Apex, Usage]
---

# Cookie Class

> The Cookie class lets you access cookies for
        your Salesforce site using Apex.

**Namespace:** `System`

# Cookie Class

The Cookie class lets you access cookies for your Salesforce site using Apex.

## Namespace

System

## Usage

Use the setCookies method of the [PageReference Class](atlas.en-us.pages.meta/pages/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.") to attach cookies to a page.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

-   Cookie names and values set in Apex are URL encoded, that is, characters such as @ are replaced with a percent sign and their hexadecimal representation.
-   The setCookies method adds the prefix “apex\_\_” to the cookie names.
-   Setting a cookie's value to null sends a cookie with an empty string value instead of setting an expired attribute.
-   After you create a cookie, the properties of the cookie can't be changed.
-   Be careful when storing sensitive information in cookies. Pages are cached regardless of a cookie value. If you use a cookie value to generate dynamic content, you should disable page caching. For more information, see [Configure Site Caching](https://help.salesforce.com/articleView?id=sf.sites_caching.htm&language=en_US) in Salesforce Help.

Consider the following limitations when using the Cookie class:

-   The Cookie class can only be accessed using Apex that is saved using the Salesforce API version 19 and above.
-   The maximum number of cookies that can be set per Salesforce Sites domain depends on your browser. Newer browsers have higher limits than older ones.
-   Cookies must be less than 4K, including name and attributes.
-   The maximum header size of a Visualforce page, including cookies, is 8,192 bytes.

For more information on sites, see “Salesforce Sites” in the Salesforce online help.

## Example

The following example creates a class, CookieController, which is used with a Visualforce page (see markup below) to update a counter each time a user displays a page. The number of times a user goes to the page is stored in a cookie.

```

```

```

```

The following is the Visualforce page that uses the CookieController Apex controller above. The action {!count} calls the getCount method in the controller above.

```

```

-   **[Cookie Constructors](atlas.en-us.pages.meta/pages/apex_System_Cookie_constructors.htm)**

-   **[Cookie Methods](atlas.en-us.pages.meta/pages/apex_System_Cookie_methods.htm)**

## Code Examples

```apex
// A Visualforce controller class that creates a cookie
// used to keep track of how often a user displays a page
public class CookieController {

    public CookieController() {
        Cookie counter = ApexPages.currentPage().getCookies().get('counter');
    
        // If this is the first time the user is accessing the page, 
        // create a new cookie with name 'counter', an initial value of '1', 
        // path 'null', maxAge '-1', and isSecure 'true'. 
        if (counter == null) {
            counter = new Cookie('counter','1',null,-1,true);
        } else {
        // If this isn't the first time the user is accessing the page
        // create a new cookie, incrementing the value of the original count by 1
            Integer count = Integer.valueOf(counter.getValue());
            counter = new Cookie('counter', String.valueOf(count+1),null,-1,true);
        }
    
        // Set the new cookie for the page
        ApexPages.currentPage().setCookies(new Cookie[]{counter});
    }

    // This method is used by the Visualforce action {!count} to display the current 
    // value of the number of times a user had displayed a page. 
    // This value is stored in the cookie.
    public String getCount() {
        Cookie counter = ApexPages.currentPage().getCookies().get('counter');
        if(counter == null) {
            return '0';
        }
        return counter.getValue();
    }
}
```

```apex
// Test class for the Visualforce controller
@isTest
private class CookieControllerTest {
  // Test method for verifying the positive test case
  static testMethod void testCounter() {
    //first page view
    CookieController controller = new CookieController();
    System.assert(controller.getCount() == '1');

    //second page view       
    controller = new CookieController();
    System.assert(controller.getCount() == '2');
  }
}
```

```
<apex:page controller="CookieController">
You have seen this page {!count} times
</apex:page>
```

## Related Topics

- PageReference Class (atlas.en-us.pages.meta/pages/apex_system_pagereference.htm)
- Cookie Constructors (atlas.en-us.pages.meta/pages/apex_System_Cookie_constructors.htm)
- Cookie Methods (atlas.en-us.pages.meta/pages/apex_System_Cookie_methods.htm)
