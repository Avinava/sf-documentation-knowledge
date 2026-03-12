---
title: "Displaying Field Values with Visualforce"
domain: pages
topic: displaying-field-values-with-visualforce
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.976Z
estimatedTokens: 1067
keywords: [Displaying, Visualforce, pages, expression, language, formulas—that, anything, inside, evaluated, access, records, currently, context, display]
---

# Displaying Field Values with Visualforce

> Visualforce pages use the same
                expression language as formulas—that is, anything inside
                    {! } is evaluated
                as an expression that can access values from records that are
                currently in context. For example, you can display the
         

# Displaying Field Values with Visualforce

Visualforce pages use the same expression language as formulas—that is, anything inside {! } is evaluated as an expression that can access values from records that are currently in context. For example, you can display the current user's first name by adding the {!$User.FirstName} expression to a page:

```

```

$User is a global variable that always represents the current user record. All global variables are referenced with a $ symbol. For a list of global variables that you can use in Visualforce, see [Global Variables](atlas.en-us.pages.meta/pages/pages_variables_global.htm "Use global variables to reference general information about the current user and your organization on a page.").

To access fields from a record that is not globally available, like a specific account, contact, or custom object record, you need to associate your page with a controller. Controllers provide pages with the data and business logic that make your application run, including the logic that specifies how to access a particular object's records. While you can define a custom controller for any page with Apex, Salesforce includes standard controllers for every standard and custom object.

For example, to use the standard controller for accounts, add the standardController attribute to the <apex:page\> tag, and assign it the name of the account object:

```

```

After you save your page, the Accounts tab is highlighted for the page, and the look-and-feel for the components on the page match the Accounts tab. Additionally, you can now access fields on the account record currently in context by using {!account.<fieldName>} expression syntax.

For example, to display an account's name on a page, use {!account.name} in the page markup:

```

```

The {!account.name} expression makes a call to the getAccount() method in the standard Account controller to return the record ID of the account currently in context. It then uses dot notation to access the name field for that record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

When you save a page, the value attribute of all input components—<apex:inputField\>, <apex:inputText\>, and so on—is validated to ensure it’s a single expression, with no literal text or white space, and is a valid reference to a single controller method or object property. An error will prevent saving the page.

To bring an account record into the current context, you must add a query parameter to the page URL that specifies the ID of the record. To do this:

1.  Find the ID of an account by any means you wish. One easy way is to view the detail page of an account record and copy the character code at the end of the URL. For example, if you navigate to an account detail page with the following URL:

    ```

    ```

    Then 001D000000IRt53 is the ID for the account.

2.  Back on your page, add the account ID as a query string parameter to the URL in your browser's address bar. For example, if your page is located at:

    ```

    ```

    Add ?id=001D000000IRt53 to the end of the URL:

    ```

    ```


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If you use the id parameter in a URL, it must refer to the same entity referred to in the standard controller.

Once an account ID is specified in the URL, the page displays the appropriate account name, as shown in the following figure.

Displaying Account Data in a Visualforce Page ![The Apex Page Editor, displaying "standardController="Account"" in the code window. The page view displays values for the Global Media account.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_page_account_data.png&folder=pages)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Field-level help for Visualforce pages is only available in Salesforce Classic with the page's showHeader attribute set to true. Otherwise, the help text doesn’t render when the user hovers over the help icon. See [Field-Level Help](https://help.salesforce.com/s/articleView?id=platform.customhelp_getting_started_flh.htm&type=5&language=en_US) in Salesforce Help.

## Code Examples

```
<apex:page>
    Hello {!$User.FirstName}!
</apex:page>
```

```
<apex:page standardController="Account">
    Hello {!$User.FirstName}!
</apex:page>
```

```
<apex:page standardController="Account">
    Hello {!$User.FirstName}!
    <p>You are viewing the {!account.name} account.</p>
</apex:page>
```

```
https://MyDomain_login_URL/001D000000IRt53
```

```
https://MyDomain_login_URL/apex/HelloWorld2
```

## Related Topics

- Global Variables (atlas.en-us.pages.meta/pages/pages_variables_global.htm)
