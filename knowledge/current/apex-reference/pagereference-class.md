---
title: "PageReference Class"
domain: apex-reference
topic: pagereference-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.894Z
estimatedTokens: 1865
namespace: ApexPages
keywords: [PageReference, reference, instantiation, page., Among, attributes, PageReferences, consist, URL, set, query, names, values., Instantiation, Request, Headers, Example, Retrieving, Query, Note]
---

# PageReference Class

> A PageReference is a reference to an instantiation of a page. Among other attributes,
        PageReferences consist of a URL and a set of query parameter names and values.

**Namespace:** `ApexPages`

# PageReference Class

A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

Use a PageReference object:

-   To view or set query string parameters and values for a page
-   To send the user to a different page as the result of an action method

## Instantiation

In a custom controller or controller extension, you can refer to or instantiate a PageReference in one of these ways.

-   ```

    ```

    Refers to a PageReference for a Visualforce page that has already been saved in your organization. By referring to a page in this way, the platform recognizes that this controller or controller extension is dependent on the existence of the specified page and will prevent the page from being deleted while the controller or extension exists.

-   ```

    ```

    Creates a PageReference to any page that is hosted on the Lightning platform. For example, setting 'partialURL' to '/apex/HelloWorld' refers to the Visualforce page located at http://mySalesforceInstance/apex/HelloWorld. Likewise, setting 'partialURL' to '/' + 'recordID' refers to the detail page for the specified record.

    This syntax is less preferable for referencing other Visualforce pages than Page.existingPageName because the PageReference is constructed at runtime, rather than referenced at compile time. Runtime references are not available to the referential integrity system. Consequently, the platform doesn't recognize that this controller or controller extension is dependent on the existence of the specified page and won't issue an error message to prevent user deletion of the page.

-   ```

    ```

    Creates a PageReference for an external URL. For example:

    ```

    ```


You can also instantiate a PageReference object for the current page with the currentPage ApexPages method. For example:

```

```

## Request Headers

Here’s a non-exhaustive list of headers that are set on requests.

| Header | Description |
| --- | --- |
| Host | The host name requested in the request URL. This header is always set on Lightning Platform Site requests and My Domain requests. This header is optional on other requests when HTTP/1.0 is used instead of HTTP/1.1. |
| Referer | The URL that is either included or linked to the current request's URL. This header is optional. |
| User-Agent | The name, version, and extension support of the program that initiated this request, such as a web browser. This header is optional and can be overridden in most browsers to be a different value. Therefore, this header can’t be relied upon. |
| CipherSuite | If this header exists and has a non-blank value, this means that the request is using HTTPS. Otherwise, the request is using HTTP. The contents of a non-blank value are not defined by this API, and can be changed without notice. |
| X-Salesforce-SIP | The source IP address of the request. This header is always set on HTTP and HTTPS requests that are initiated outside of Salesforce's data centers.NoteIf a request passes through a content delivery network (CDN) or proxy server, the source IP address might be altered, and no longer the original client IP address. |
| X-Salesforce-Forwarded-To | The fully qualified domain name of the Salesforce instance that is handling this request. This header is always set on HTTP and HTTPS requests that are initiated outside of Salesforce's data centers. |

## Example: Retrieving Query String Parameters

This example shows how to use a PageReference object to retrieve a query string parameter in the current page URL. In this example, the getAccount method references the id query string parameter.

```

```

This page markup calls the getAccount method from that controller.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

For this example to render properly, you must associate the Visualforce page with a valid account record in the URL. For example, if 001D000000IRt53 is the account ID, the resulting URL should be:

```

```

Replace Visualforce\_URL with the Visualforce URL for your org. For production, this URL is in the format MyDomainName\--PackageName.vf.force.com, and if your installed package is unmanaged, the package name is c. For more information on the format of the URLs that Salesforce serves for your org, see [My Domain Login and Application URL Formats](https://help.salesforce.com/s/articleView?id=products.domain_name_url_formats.htm&type=5&language=en_US) and [Partitioned Domains](https://help.salesforce.com/s/articleView?id=products.domain_name_partitioned_domains.htm&type=5&language=en_US) in Salesforce Help.

The getAccount method uses an embedded SOQL query to return the account specified by the id parameter in the URL of the page. To access id, the getAccount method uses the ApexPages namespace.

-   First the currentPage method returns the PageReference instance for the current page. PageReference returns a reference to a Visualforce page, including its query string parameters.
-   Using the page reference, use the getParameters method to return a map of the specified query string parameter names and values.
-   Then a call to the get method specifying id returns the value of the id parameter itself.

## Example: Navigating to a New Page as the Result of an Action Method

Any action method in a custom controller or controller extension can return a PageReference object as the result of the method. If the redirect attribute on the PageReference is set to true, the user navigates to the URL specified by the PageReference.

This example shows how this can be implemented with a save method. In this example, the PageReference returned by the save method redirects the user to the detail page for the account record that was just saved.

```

```

This page markup calls the save method from that controller. When a user clicks **Save**, he or she is redirected to the detail page for the account just created:

```

```

## Example: Redirect Users to a Replacement Experience Cloud Site

This example shows how to redirect a user attempting to access a retired feedback site to a self-service help site. If the redirect attribute is set to true on the PageReference for the feedback site, the user navigates to the URL specified by the PageReference. The redirectCode attribute defines the redirection type for search engine optimization in public Experience Cloud sites.

```

```

This example shows how to call the RedirectController class from the retired site page.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

To redirect a page that’s served by a third-party CDN, configure that CDN to pass the origin IP address via the true-client-ip HTTP header on the page. For more information, see [Prerequisites for a Custom Domain That Uses a Third-Party Service or CDN](https://help.salesforce.com/s/articleView?id=platform.domain_mgmt_enable_https.htm&language=en_US) in Salesforce Help.

-   **[PageReference Constructors](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_constructors.htm)**

-   **[PageReference Methods](atlas.en-us.apexref.meta/apexref/apex_System_PageReference_methods.htm)**

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
PageReference pageRef = ApexPages.currentPage();
```

```apex
public with sharing class MyController {
   public Account getAccount() {
        return [SELECT Id, Name FROM Account WITH USER_MODE
                WHERE Id = :ApexPages.currentPage().getParameters().get('Id')];
    }
}
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- PageReference Constructors (atlas.en-us.apexref.meta/apexref/apex_System_PageReference_constructors.htm)
- PageReference Methods (atlas.en-us.apexref.meta/apexref/apex_System_PageReference_methods.htm)
