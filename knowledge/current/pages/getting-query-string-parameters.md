---
title: "Getting Query String Parameters"
domain: pages
topic: getting-query-string-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.025Z
estimatedTokens: 362
keywords: [Getting, Query, Visualforce, markup, $CurrentPage, variable, access, specifying, attribute, individual]
---

# Getting Query String Parameters

> You can reference query string parameters in Visualforce markup by using the $CurrentPage global variable. Using $CurrentPage, you can access the query string parameters for the page by specifying
the parameters attribute,
after which you can access each individual parameter:

# Getting Query String Parameters

You can reference query string parameters in Visualforce markup by using the $CurrentPage global variable. Using $CurrentPage, you can access the query string parameters for the page by specifying the parameters attribute, after which you can access each individual parameter:

```

```

For example, suppose you want to add detail information about a specific contact to an Account page. The account record ID is specified by the default id query string parameter, and the contact record ID is specified by the query string parameter named cid:

```

```

For this example to render properly, you must associate the Visualforce page with valid account and contact IDs in the URL. For example, if 001D000000IRt53 is the account ID and 003D000000Q0bIE is the contact ID, the resulting URL should be:

```

```

[Displaying Field Values with Visualforce](atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm) has more information about retrieving the ID of a record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If you use the id parameter in a URL, it must refer to the same entity referred to in the standard controller.

Using Query String Parameters in a Page ![A Visualforce page that uses query string parameters](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_query_string_params.png&folder=pages)

## Code Examples

```
$CurrentPage.parameters.parameter_name
```

```
<apex:page standardController="Account">
    <apex:pageBlock title="Hello {!$User.FirstName}!">
        You are displaying values from the {!account.name} account and a separate contact
        that is specified by a query string parameter.
    </apex:pageBlock>
    <apex:pageBlock title="Contacts">
        <apex:dataTable value="{!account.Contacts}" var="contact" cellPadding="4" border="1">
              <apex:column>
               <apex:facet name="header">Name</apex:facet>
                {!contact.Name}
              </apex:column>
              <apex:column>
               <apex:facet name="header">Phone</apex:facet>
              {!contact.Phone}
              </apex:column>
        </apex:dataTable>
    </apex:pageBlock>
    <apex:detail subject="{!$CurrentPage.parameters.cid}" relatedList="false" title="false"/> 
</apex:page>
```

```
https://MyDomain_login_URL/apex/MyFirstPage?id=001D000000IRt53&cid=003D000000Q0bIE
```

## Related Topics

- Displaying Field Values with Visualforce (atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm)
