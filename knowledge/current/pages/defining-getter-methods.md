---
title: "Defining Getter Methods"
domain: pages
topic: defining-getter-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.945Z
estimatedTokens: 717
namespace: ApexPages
keywords: [Defining, Getter, primary, tasks, Visualforce, controller, give, developers, way, displaying, database, computed, markup, enable, functionality]
---

# Defining Getter Methods

> One of the primary tasks for a Visualforce controller class is to give developers a way of displaying database
and other computed values in page markup. Methods that enable this
type of functionality are called getter methods, and
are typically named getIdentifier, where Identifier is the name for t

**Namespace:** `ApexPages`

# Defining Getter Methods

One of the primary tasks for a Visualforce controller class is to give developers a way of displaying database and other computed values in page markup. Methods that enable this type of functionality are called getter methods, and are typically named getIdentifier, where Identifier is the name for the records or primitive values returned by the method.

For example, the following controller has a getter method for returning the name of the controller as a string:

```

```

To display the results of a getter method in a page, use the name of the getter method without the get prefix in an expression. For example, to display the result of the getName method in page markup, use {!name}:

```

```

In earlier examples that used the standard Account controller, the pages displayed values from an account record specified in the URL (with the id query string parameter) by using an {!account.<fieldName>} expression. This was possible because the Account standard controller includes a getter method named getAccount that returns the specified account record. We can mimic this functionality in a custom controller with the following code:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

For this example to render properly, you must associate the Visualforce page with a valid account record in the URL. For example, if 001D000000IRt53 is the account ID, the resulting URL should be:

```

```

The getAccount method uses an embedded SOQL query to return the account specified by the id parameter in the URL of the page. To access id, the getAccount method uses the ApexPages namespace:

-   First the currentPage method returns the PageReference instance for the current page. PageReference returns a reference to a Visualforce page, including its query string parameters.
-   Using the page reference, use the getParameters method to return a map of the specified query string parameter names and values.
-   Then a call to the get method specifying id returns the value of the id parameter itself.

A page that uses the MyController controller can display either the account name or id fields with an {!account.name} or {!account.id} expression, respectively. Only those fields are available to the page because those were the only fields returned by the SOQL query in the controller.

To more closely mimic the standard Account controller, we can add the tabStyle attribute to the <apex:page\> tag to give the page the same styling as other account pages. The markup for the page now looks like this:

```

```

Using a Custom Controller to Display Values on a Page ![The Visualforce Page Editor. A custom controller is displayed in the code.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_page_controller_getter.png&folder=pages)

## Code Examples

```apex
public class MyController {

    public String getName() {
        return 'MyController';
    }

}
```

```
<apex:page controller="MyController">
    <apex:pageBlock title="Hello {!$User.FirstName}!">
        This is your new page for the {!name} controller.
    </apex:pageBlock>
</apex:page>
```

```apex
public class MyController {

    public String getName() {
        return 'MyController';
    }

    public Account getAccount() {
        return [select id, name from Account 
                 where id = :ApexPages.currentPage().getParameters().get('id')]; 
    } 
}
```

```
https://MyDomain_login_URL/apex/MyFirstPage?id=001D000000IRt53
```

```
<apex:page controller="MyController" tabStyle="Account">
    <apex:pageBlock title="Hello {!$User.FirstName}!">
        This is your new page for the {!name} controller. <br/>
        You are viewing the {!account.name} account.
    </apex:pageBlock>
</apex:page>
```
