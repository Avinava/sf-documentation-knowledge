---
title: "Editing Records with List Controllers"
domain: pages
topic: editing-records-with-list-controllers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.377Z
estimatedTokens: 347
keywords: [Editing, Records, Controllers, Command, buttons, links, associated, save, quicksave, edit, actions, controller, rendered, user, appropriate]
---

# Editing Records with List Controllers

> Command buttons and links that are associated with save, quicksave, or edit actions in a list controller are not rendered if the user does not
have the appropriate permissions. Likewise if no particular record
is associated with a page, command buttons and links associated with
the edit actions are 

# Editing Records with List Controllers

You can edit a set of records using list controllers, too. For example, if you create a page with the following markup:

```

```

you see a page that allows you to update and save the Stage and Close Date on your opportunities, like the following:For more information, see [Mass Updating Records with a Custom List Controller](atlas.en-us.pages.meta/pages/pages_quick_start_massupdate.htm#pages_quick_start_massupdate).

![An Apex page containing a list of opportunities and edit fields for the stage and close date of those opportunities](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fcustom_sosc_edit_page2.jpg&folder=pages)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Command buttons and links that are associated with save, quicksave, or edit actions in a list controller are not rendered if the user does not have the appropriate permissions. Likewise if no particular record is associated with a page, command buttons and links associated with the edit actions are not rendered.

#### See Also

-   [StandardSetController Class](atlas.en-us.pages.meta/pages/apex_pages_standardsetcontroller.htm "StandardSetController objects allow you to create list controllers similar to, or as extensions of, the pre-built Visualforce list controllers provided by Salesforce.")

## Code Examples

```
<apex:page standardController="Opportunity" recordSetVar="opportunities" tabStyle="Opportunity" sidebar="false">
    <apex:form >
        <apex:pageBlock >
            <apex:pageMessages />
            <apex:pageBlockButtons >
                <apex:commandButton value="Save" action="{!save}"/>
            </apex:pageBlockButtons>
            <apex:pageBlockTable value="{!opportunities}" var="opp">
                <apex:column value="{!opp.name}"/>
                <apex:column headerValue="Stage">
                    <apex:inputField value="{!opp.stageName}"/>
                </apex:column>
                <apex:column headerValue="Close Date">
                    <apex:inputField value="{!opp.closeDate}"/>
                </apex:column>
            </apex:pageBlockTable>      
        </apex:pageBlock>
    </apex:form>
</apex:page>
```

## Related Topics

- Mass Updating Records with a Custom List Controller (atlas.en-us.pages.meta/pages/pages_quick_start_massupdate.htm)
- StandardSetController Class (atlas.en-us.pages.meta/pages/apex_pages_standardsetcontroller.htm)
