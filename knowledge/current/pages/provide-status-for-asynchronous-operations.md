---
title: "Provide Status for Asynchronous Operations"
domain: pages
topic: provide-status-for-asynchronous-operations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.914Z
estimatedTokens: 426
keywords: [Provide, Status, Asynchronous, Operations, Ajax, behaviors, partial, updates, events, occur, background, user, continues, work, <apex]
---

# Provide Status for Asynchronous Operations

> Ajax behaviors, such as partial page updates, are asynchronous
        events that occur in the background while a user continues to work. With
        the <apex:actionStatus>
        component, you can display status messages that alert the user of any
        background activity currently in progress.

# Provide Status for Asynchronous Operations

Ajax behaviors, such as partial page updates, are asynchronous events that occur in the background while a user continues to work. With the <apex:actionStatus> component, you can display status messages that alert the user of any background activity currently in progress.

The <apex:actionStatus> component displays a status message at the beginning or end of a background event with the startText or stopText attributes. It can also display an image or other component.

## Example

The example Visualforce page shows a list of an account’s contacts. After a user clicks a contact’s name, the detail area displays the status message “Requesting...” until the contact’s details render.

The <apex:actionStatus> component’s startText attribute is set to the text displayed at the start of the Ajax request.

The id attribute allows other components to reference the <apex:actionStatus> component. Because the <apex:commandLink> component initiates the Ajax request, its status attribute is set to the <apex:actionStatus> component’s id.

<apex:actionStatus> supports the <apex:facet> component. The <apex:facet> component’s name attribute is set to stop, which indicates that the status message displays until the component nested inside the facet component renders. In this example, that component is <apex:detail>, which shows the chosen contact’s details.

```

```

When you visit this page, include an account id as part of the URL, for example https://MyDomainName\--c.vf.force.com/apex/ajaxAsyncStatus?id=001x000xxx3Jsxb.

#### See Also

-   [Best Practices for Using Component Facets](atlas.en-us.pages.meta/pages/pages_compref_additional_facet.htm)

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
                      <apex:commandLink rerender="detail" status="detailStatus">
                          {!contact.Name}
                          <apex:param name="cid" value="{!contact.id}"/>
                      </apex:commandLink>
                  </apex:column>
            </apex:dataTable>
        </apex:form>
    </apex:pageBlock>
    <apex:outputPanel id="detail">
        <apex:actionStatus startText="Requesting..." id="detailStatus">
            <apex:facet name="stop"> 
                <apex:detail subject="{!$CurrentPage.parameters.cid}" 
                             relatedList="false" title="false"/>
            </apex:facet>
        </apex:actionStatus> 
    </apex:outputPanel>
</apex:page>
```

## Related Topics

- Best Practices for Using Component Facets (atlas.en-us.pages.meta/pages/pages_compref_additional_facet.htm)
