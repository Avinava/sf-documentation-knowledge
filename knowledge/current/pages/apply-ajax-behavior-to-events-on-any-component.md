---
title: "Apply Ajax Behavior to Events on Any Component"
domain: pages
topic: apply-ajax-behavior-to-events-on-any-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.919Z
estimatedTokens: 579
keywords: [Apply, Ajax, Behavior, Events, Any, Component, Implement, partial, command, links, buttons, user, hover, over, trigger]
---

# Apply Ajax Behavior to Events on Any Component

> Implement a partial page update without using command links or
        buttons. For example, a user can hover over a component to trigger the
        update.

# Apply Ajax Behavior to Events on Any Component

Implement a partial page update without using command links or buttons. For example, a user can hover over a component to trigger the update.

Refer to the contact list example in [Provide Status for Asynchronous Operations](atlas.en-us.pages.meta/pages/pages_quick_start_ajax_async_status.htm "Ajax behaviors, such as partial page updates, are asynchronous events that occur in the background while a user continues to work. With the <apex:actionStatus> component, you can display status messages that alert the user of any background activity currently in progress."). Remove the <apex:commandLink\> tag from the data table and wrap the contact name in an <apex:outputPanel\> tag instead. Within this output panel, add an <apex:actionSupport\> element as a sibling of the contact's name.

-   The <apex:outputPanel\> tag defines the area that contains the specialized behavior.
-   The <apex:actionSupport\> tag defines the partial page update that the command link previously implemented.
    -   The event attribute specifies the DOM event that triggers the update. Whereas <apex:commandLink\> only executes during the “onclick” event, <apex:actionSupport\> can execute on any valid event, such as “onclick”, “ondblclick”, and “onmouseover.”
    -   The reRender attribute specifies which part of the page refreshes.
    -   The <apex:param\> tag sets the value of the cid query string parameter when the specified event occurs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The reRender attribute isn’t required. If you don’t set it, the page doesn’t refresh upon the specified event, but <apex:param> still sets the name and value of cid.

The resulting markup is:

```

```

After saving the page, hover over any contact and notice that the detail area refreshes appropriately without clicking it.

#### See Also

-   [Using JavaScript in Visualforce Pages](atlas.en-us.pages.meta/pages/pages_javascript_intro.htm "Using JavaScript in Visualforce pages gives you access to a wide range of existing JavaScript functionality, such as JavaScript libraries, and other ways to customize the functionality of your pages. Action tags, such as <apex:actionFunction> and <apex:actionSupport>, support Ajax requests.")

## Code Examples

```
<apex:page standardController="Account">
    <apex:pageBlock title="Hello {!$User.FirstName}!">
        You are displaying contacts from the {!account.name} account. 
        Mouse over a contact's name to view his or her details.
    </apex:pageBlock>
    <apex:pageBlock title="Contacts">
        <apex:form>
            <apex:dataTable value="{!account.Contacts}" var="contact" cellPadding="4" 
                               border="1">
                  <apex:column>
                      <apex:outputPanel>
                          <apex:actionSupport event="onmouseover" rerender="detail" 
                                              status="detailStatus"> 
                              <apex:param name="cid" value="{!contact.id}"/>
                          </apex:actionSupport> 
                          {!contact.Name}
                      </apex:outputPanel> 
                  </apex:column>
            </apex:dataTable>
        </apex:form>
    </apex:pageBlock>
    <apex:outputPanel id="detail">
        <apex:actionStatus startText="Requesting..." id="detailStatus">
            <apex:facet name="stop">
                <apex:detail subject="{!$CurrentPage.parameters.cid}"
                                        relatedList="false" 
                                        title="false"/>
            </apex:facet>
        </apex:actionStatus>
    </apex:outputPanel>
</apex:page>
```

## Related Topics

- Provide Status for Asynchronous Operations (atlas.en-us.pages.meta/pages/pages_quick_start_ajax_async_status.htm)
- Using JavaScript in Visualforce Pages (atlas.en-us.pages.meta/pages/pages_javascript_intro.htm)
