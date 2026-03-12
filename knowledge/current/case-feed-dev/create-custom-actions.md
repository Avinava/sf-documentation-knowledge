---
title: "Create Custom Actions"
domain: case-feed-dev
topic: create-custom-actions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.311Z
estimatedTokens: 1220
keywords: [Custom, Actions, Visualforce, pages, Case, Feed, Map, Local, Search, action, lets, agents, look, customer’s, location]
---

# Create Custom Actions

> You can create Visualforce pages to use as custom actions in Case Feed. For example,
                you can create a Map and Local Search action that lets agents look up the customer’s
                location and find nearby service centers.

# Create Custom Actions

You can create Visualforce pages to use as custom actions in Case Feed. For example, you can create a Map and Local Search action that lets agents look up the customer’s location and find nearby service centers.

You can use any Visualforce page that uses the standard case controller as a custom action.

## Use Case

Viaggio Italiano is a boutique travel agency specializing in tours of Italy. The company tracks multiple details for each client, including flights, ground transportation specifics, dietary preferences, and itineraries. Viaggio Italiano’s agents needed the ability to create long case comments but were limited to 1000 characters for standard case notes. The company wanted a way to bypass this limit.

Viaggio Italiano used Visualforce to create a page that includes the ability to post a case comment, which can be up to 4000 characters long. The company then added the page as a custom action by editing the Case Feed page layout.

![Case Feed custom publisher example](/docs/resources/img/en-us/260.0?doc_id=images%2Fcase_feed_custom_publisher_example.png&folder=case_feed_dev)

## Code Samples

The following code sample shows a custom Post Case Comment action for an organization that doesn’t have actions in the publisher enabled, or that has actions in the publisher enabled but uses the Case Feed Settings page, not the page layout editor, to choose and configure the actions in the Case Feed publisher.

```

```

This is the code to use for the custom Post Case Comment action if your organization has actions in the publisher enabled and you’ve opted to use the page layout editor to choose and configure actions in the Case Feed publisher.

```

```

The following sample shows an Apex class containing a controller extension to be used with either version of the Visualforce page above.

```

```

## Additional Steps

After creating a Visualforce page, make it available to users.

First, give profiles access to the page:

1.  From Setup, enter Visualforce Pages in the Quick Find box, then select **Visualforce Pages**.
2.  Click **Security** next to the name of the page you created.
3.  Choose the profiles you want to be able to access the page.
4.  Click **Save**.

Then include the page as a custom action. If you’re using the Case Feed Settings page to choose and configure actions:

1.  From the object management settings for cases, go to Page Layouts.
2.  How you access the Case Feed Settings page depends on what kind of page layout you’re working with..
    -   For a layout in the Case Page Layouts section, click **Edit**, and then click **Feed View** in the page layout editor.
    -   For a layout in the Page Layouts for Case Feed Users section, click the down arrow and choose Edit feed view. (This section appears only for organizations created before Spring ’14.)
3.  In Custom Actions, click **\+ Add a Visualforce page**.
4.  Choose the page you want to add.
5.  Specify the height of the action. For the best appearance, we recommend a height of 200 pixels.
6.  In Select Actions, move the custom action from Available to Selected.
7.  Click **Save**.

If you’ve opted to use the page layout editor to choose and configure actions, you first need to create the custom action:

1.  From the object management settings for cases, go to Buttons, Links, and Actions.
2.  Click **New Action**.
3.  Select Custom Visualforce.
4.  Select the Visualforce page you created, then specify the height of the action window. (The width is fixed.)
5.  Type a label for the action. This is the text users will see for the action in the publisher.
6.  If necessary, change the name of the action.
7.  Type a description for the action. The description appears on the detail page for the action and in the list on the Buttons, Links, and Actions page. The description isn’t visible to your users.
8.  Optionally, click **Change Icon** to select a different icon for the action. This icon appears only when you use the action through the API.

Then add the action to a page layout:

1.  From the object management settings for cases, go to Page Layouts.
2.  How you access the page layout editor depends on what kind of page layout you’re working with.
    -   For a layout in the Case Page Layouts section, click **Edit**, and then click **Feed View** in the page layout editor.
    -   For a layout in the Page Layouts for Case Feed Users section, click the down arrow and choose Edit detail view. (This section appears only for organizations created before Spring ’14.)
3.  Click **Quick Actions** in the palette.
4.  Drag the action from the palette to the Quick Actions in the Salesforce Classic Publisher section.
5.  Click **Save**.

#### See Also

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US)

## Code Examples

```
<apex:page standardcontroller="Case"
    extensions="CaseCommentExtension" showHeader="false">
    <apex:includeScript value="/support/api/26.0/interaction.js"/>
    <div>
        <apex:form >
            <!-- Creates a case comment and on complete notifies the Case Feed page
               that a elated list and the feed have been updated -->
            <apex:actionFunction action="{!addComment}" name="addComment" rerender="out" 
            oncomplete="sforce.interaction.entityFeed.refreshObject('{!case.id}', 
            false, true, true);"/>   
            <apex:outputPanel id="out" >
                <apex:inputField value="{!comment.commentbody}" style="width:98%;
                height:160px;" />
            </apex:outputPanel>
        </apex:form><br />
        <button type="button" onclick="addComment();" style="position:fixed; bottom:0px; 
        right:2px; padding: 5px 10px; font-size:13px;" id="cpbutton" >Post Case Comment
        </button>
    </div>              
</apex:page>
```

```
<apex:page standardcontroller="Case"
    extensions="CaseCommentExtension" showHeader="false">
    <!-- Uses publisher.js rather than interaction.js -->
    <apex:includeScript value="/canvas/sdk/js/28.0/publisher.js"/>
    <div>
        <apex:form >
            <!-- Creates a case comment and on complete notifies the Case Feed page
                that a related list and the feed have been updated -->
            <apex:actionFunction action="{!addComment}" name="addComment" rerender="out" 
            <!-- Different oncomplete function using publisher.js -->
            oncomplete="Sfdc.canvas.publisher.publish(
            {name : 'publisher.refresh',  payload : 
            {feed: true, objectRelatedLists: {}}});"/>   
            <apex:outputPanel id="out" >
                <apex:inputField value="{!comment.commentbody}" style="width:98%;
                height:160px;" />
            </apex:outputPanel>
        </apex:form><br />
        <button type="button" onclick="addComment();" style="position:fixed; bottom:0px; 
        right:2px; padding: 5px 10px; font-size:13px;" id="cpbutton" >Post Case Comment
        </button>
    </div>              
</apex:page>
```

```apex
public with sharing class CaseCommentExtension {
    private final Case caseRec;
    public CaseComment comment {get; set;}

    public CaseCommentExtension(ApexPages.StandardController controller) {
        caseRec = (Case)controller.getRecord();
        comment = new CaseComment();
        comment.parentid = caseRec.id;
    }

    public PageReference addComment() {
        insert comment;
        comment = new CaseComment();
        comment.parentid = caseRec.id;
        return null;
    }   
}
```
