---
title: "Implement Partial Page Updates with Command Links and Buttons"
domain: pages
topic: implement-partial-page-updates-with-command-links-and-buttons
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.924Z
estimatedTokens: 466
keywords: [Implement, Partial, Updates, Command, Links, Buttons, widely, Ajax, behaviors, specific, portion, user, action, rather, reload]
---

# Implement Partial Page Updates with Command Links and Buttons

> One of the most widely used Ajax behaviors is a partial page
        update, in which only a specific portion of a page updates following
        some user action, rather than a reload of the entire page. The simplest
        way to implement a partial page update is to use the reRender attribute on an <apex:commandLink> or <apex:commandButton> tag. When a
        user clicks the button or link, only the identified component and all of
        its child components refresh.

# Implement Partial Page Updates with Command Links and Buttons

One of the most widely used Ajax behaviors is a partial page update, in which only a specific portion of a page updates following some user action, rather than a reload of the entire page. The simplest way to implement a partial page update is to use the reRender attribute on an <apex:commandLink\> or <apex:commandButton\> tag. When a user clicks the button or link, only the identified component and all of its child components refresh.

For example, consider the contact list example shown in [Getting and Setting Query String Parameters on a Single Page](atlas.en-us.pages.meta/pages/pages_quick_start_query_params_getting_setting.htm). In that example, when a user clicks the name of a contact in the list to view the details for that contact, the entire page is refreshed as a result of this action. With just two modifications to that markup, you can change the behavior of the page so that only the area below the list refreshes.

1.  Create or identify the portion of the page to rerender. Wrap the <apex:detail\> tag in an <apex:outputPanel\> tag, and give the output panel an id parameter. The value of id is the name that you can use elsewhere in the page to refer to this area. It must be unique in the page.
2.  Next, indicate the point of invocation (the command link) to perform a partial page update of the area that you just defined. Add a reRender attribute to the <apex:commandLink\> tag, and give it the same value that was assigned to the output panel's id.

The final markup is:

```

```

After saving the page, click any contact and notice how the detail component displays without a complete page refresh.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

You cannot use the reRender attribute to update content in a table.

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
                      <apex:commandLink rerender="detail"> 
                          {!contact.Name}
                          <apex:param name="cid" value="{!contact.id}"/>
                      </apex:commandLink>
                  </apex:column>
            </apex:dataTable>
        </apex:form>
    </apex:pageBlock>
    <apex:outputPanel id="detail"> 
        <apex:detail subject="{!$CurrentPage.parameters.cid}" relatedList="false" 
                        title="false"/>
    </apex:outputPanel> 
</apex:page>
```

## Related Topics

- Getting and Setting Query String Parameters on a Single Page (atlas.en-us.pages.meta/pages/pages_quick_start_query_params_getting_setting.htm)
