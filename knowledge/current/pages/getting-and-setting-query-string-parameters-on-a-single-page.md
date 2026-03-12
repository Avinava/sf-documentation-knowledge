---
title: "Getting and Setting Query String Parameters
on a Single         Page"
domain: pages
topic: getting-and-setting-query-string-parameters-on-a-single-page
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.029Z
estimatedTokens: 362
keywords: [Getting, Setting, Query, Having, seen, examples, how, two, actions, combined, produce, interesting, result]
---

# Getting and Setting Query String Parameters
on a Single         Page

> Having seen examples of both getting and setting query string parameters,
this example             shows how the two actions can be combined
on a single page to produce a more interesting             result.
Based on the example from Getting Query String Parameters, the following page makes the name

# Getting and Setting Query String Parameters on a Single Page

Having seen examples of both getting and setting query string parameters, this example shows how the two actions can be combined on a single page to produce a more interesting result. Based on the example from Getting Query String Parameters, the following page makes the name of each contact in the list a hyperlink that controls the context of the detail component below it.

This is possible by:

-   Wrapping the data table in an <apex:form\> tag
-   Turning each contact name into an <apex:commandLink\> that sets the cid parameter appropriately with an <apex:param\> tag

When used with a standard controller, command links always entirely refresh the current page with the new information added to the page—in this case, an updated cid that updates the contact detail component.

```

```

After saving this markup, refresh your browser with the id query string parameter but without the cid parameter in the URL For example,

```

```

Initially the contact detail page is not rendered, but when you click a contact name the page renders the appropriate detail view.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If you use the id parameter in a URL, it must refer to the same entity referred to in the standard controller.

#### See Also

-   [Controller Methods](atlas.en-us.pages.meta/pages/pages_controller_methods.htm)

## Code Examples

```
<apex:page standardController="Account">
    <apex:pageBlock title="Hello {!$User.FirstName}!">
        You are displaying contacts from the {!account.name} account. 
        Click a contact's name to view his or her details.
    </apex:pageBlock>
    <apex:pageBlock title="Contacts">
        <apex:form>
            <apex:dataTable value="{!account.Contacts}" var="contact" cellPadding="4" 
                               border="1">
              <apex:column>
               <apex:facet name="header">Name</apex:facet>
               <apex:commandLink>
                 {!contact.Name}
                 <apex:param name="cid" value="{!contact.id}"/>
               </apex:commandLink> 
              </apex:column>
              <apex:column>
               <apex:facet name="header">Phone</apex:facet>
               {!contact.Phone}
              </apex:column>
            </apex:dataTable>
        </apex:form>
    </apex:pageBlock>
    <apex:detail subject="{!$CurrentPage.parameters.cid}" relatedList="false" title="false"/>
</apex:page>
```

```
https://MyDomain_login_URL/apex/MyFirstPage?id=001D000000IRt53
```

## Related Topics

- Controller Methods (atlas.en-us.pages.meta/pages/pages_controller_methods.htm)
