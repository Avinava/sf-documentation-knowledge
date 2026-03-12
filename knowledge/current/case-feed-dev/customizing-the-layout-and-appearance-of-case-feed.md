---
title: "Customizing the Layout and Appearance of Case Feed"
domain: case-feed-dev
topic: customizing-the-layout-and-appearance-of-case-feed
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.338Z
estimatedTokens: 985
keywords: [Customizing, Layout, Appearance, Case, Feed, Creating, customized, Visualforce, lets, control, overall, including, actions, tools, shown]
---

# Customizing the Layout and Appearance of Case Feed

> Creating a customized Case Feed page with Visualforce lets you control the overall
                layout and appearance, including which actions and tools are shown and where
                they’re located on the page. You can also include other standard and custom
                console componen

# Customizing the Layout and Appearance of Case Feed

Creating a customized Case Feed page with Visualforce lets you control the overall layout and appearance, including which actions and tools are shown and where they’re located on the page. You can also include other standard and custom console components to enhance the functionality of the page.

In addition to the four case-specific Visualforce components detailed in this guide, you can also use the chatter:feed component to customize Case Feed. The table below lists its attributes.

## chatter:feed Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| entityId | id | Entity ID of the record for which to display the feed; for example, Contact.Id | Yes | 25.0 |  |
| feedItemType | String | The feed item type on which the Entity or UserProfileFeed is filtered. See the Type field on the FeedItem object listing in the API Object Reference Guide for accepted values. |  | 25.0 |  |
| id | String | An identifier that allows the component to be referenced by other components on the page. |  | 20.0 | global |
| onComplete | String | The Javascript function to call after a post or comment is added to the feed |  | 25.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the additional fields defined in the action layout are displayed. |  | 20.0 | global |
| reRender | Object | The ID of one or more components that are redrawn when the result of the action method returns to the client. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. |  | 25.0 |  |
| showPublisher | Boolean | Displays the Chatter publisher. |  | 25.0 |  |

## Use Case

Acme Entertainment creates online games used by more than a million people on multiple platforms. Acme’s 1500 support agents use desktop computers, laptops, and tablets, and the company wanted to customize the Case Feed page to standardize its look and feel across different devices. They also wanted to make it easier for agents to track case activities using filters.

Acme used these steps to create a customized Case Feed page:

1.  Using the chatter:feed component, they positioned the feed in the sidebar so the publisher and other Case Feed tools are always in the center of the page.
2.  They repositioned the feed filter and auto-selected default filters depending on case origin:

    -   If the case origin is email,. the default filter is Emails.
    -   If the case origin is phone, the default filter is Call Logs.
    -   If the case origin is Web, the default filter is Portal Answers.

3.  In [apex:emailPublisher](atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_email_publisher.htm), [apex:logCallPublisher](atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_log_call_publisher.htm), and [support:portalPublisher](atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_portal_publisher.htm), they made the width percentage-based so the publisher expands and contracts as the size of the page changes, making its appearance more consistent across different screen sizes.
4.  They changed the orientation of the publisher action tabs from their standard left-side vertical arrangement to a horizontal arrangement at the top of the page.

![customized Case Feed page](/docs/resources/img/en-us/260.0?doc_id=images%2Fcase_feed_general_customization_example.png&folder=case_feed_dev)

## Code Sample

This code sample shows a Visualforce page with custom Email, Portal, Log a Call, and Case Details tabs.

```

```

The following sample shows an Apex class containing a controller extension to be used with the Visualforce page above.

```

```

This sample shows a Visualforce page with custom feed filters and Chatter feed for cases. You can use this page in the sidebar of a Salesforce console.

```

```

## Code Examples

```
<apex:page standardController="Case">

    <!-- Repositions publisher tabs to a horizontal arrangement on top of the page -->
    <ul class="demoNav" style="list-style: none; overflow: hidden">
        <li style="float:left">
            <a id="custom_email_tab" class="selected" href="javascript:void(0);"
                onclick="getDemoSidebarMenu().selectMenuItem('custom_email_tab');">
                <span class="menuItem">Email Customer</span>
            </a>
        </li>
        <li style="float:left">
            <a id="custom_log_call_tab" href="javascript:void(0);"
                onclick="getDemoSidebarMenu().selectMenuItem('custom_log_call_tab');">
                <span class="menuItem">Log Call</span>
            </a>
        </li>
        <li style="float:left">
            <a id="custom_portal_tab" href="javascript:void(0);"
                onclick="getDemoSidebarMenu().selectMenuItem('custom_portal_tab');">
                <span class="menuItem">Portal Answer</span>
            </a>
         </li>
        <li style="float:left">
            <a id="custom_detail_tab" href="javascript:void(0);"
                onclick="getDemoSidebarMenu().selectMenuItem('custom_detail_tab');">
                <span class="menuItem">Case Details</span>
            </a>
        </li>
    </ul>

    <!-- Email action -->
    <div id="custom_email_pub_vf">
        <apex:emailPublisher entityId="{!case.id}"
             width="80%"
             emailBodyHeight="10em"
             showAdditionalFields="false" 
             enableQuickText="true"
             toAddresses="{!case.contact.email}"
             toVisibility="readOnly"
             fromAddresses="support@cirrus.com" 
             onSubmitSuccess="refreshFeed();" />
    </div>

    <!-- Log call action -->
    <div id="custom_log_call_vf" style="display:none">
        <apex:logCallPublisher entityId="{!case.id}"
            width="80%"
            logCallBodyHeight="10em" 
            reRender="demoFeed"
            onSubmitSuccess="refreshFeed();" />
    </div>

    <!-- Portal action -->
    <div id="custom_portal_vf" style="display:none">
        <support:portalPublisher entityId="{!case.id}"
            width="80%"
            answerBodyHeight="10em" 
            reRender="demoFeed" 
            answerBody="Dear {!Case.Contact.FirstName},
                

Here is the solution to your case.

Best regards,

Support"
            onSubmitSuccess="refreshFeed();" />
    </div>

    <!-- Case detail page -->
    <div id="custom_detail_vf" style="display:none">
        <apex:detail inlineEdit="true" relatedList="true" rerender="demoFeed" />
    </div>
    
    <!-- Include library for using service desk console API -->
    <apex:includeScript value="/support/console/25.0/integration.js"/>
    
    <!-- Javascript for switching publishers -->
    <script type="text/javascript">
        function DemoSidebarMenu() {
            var menus = {"custom_email_tab" : "custom_email_pub_vf",
                         "custom_log_call_tab" : "custom_log_call_vf",
                         "custom_portal_tab" : "custom_portal_vf",
                         "custom_detail_tab" : "custom_detail_vf"};

            this.selectMenuItem = function(tabId) {
                for (var index in menus) {
                    var tabEl = document.getElementById(index);
                    var vfEl = document.getElementById(menus[index]);

                    if (index == tabId) {
                        tabEl.className = "selected";
                        vfEl.style.display = "block";
                    } else {
                        tabEl.className = "";
                        vfEl.style.display = "none";
                    }
                }
             };
        }
        var demoSidebarMenu;
        var getDemoSidebarMenu = function() {
            if (!demoSidebarMenu) {
                demoSidebarMenu = new DemoSidebarMenu();
            }
            return demoSidebarMenu;
        };
    </script>

    <!-- Javascript for firing event to refresh feed in the sidebar -->
    <script type="text/javascript">
        function refreshFeed() {
            sforce.console.fireEvent
                ('Cirrus.samplePublisherVFPage.RefreshFeedEvent', null, null);
        }
    </script>
</apex:page>
```

```apex
public class MyCaseExtension {
    private final Case mycase;
    private String curFilter;
    
    public MyCaseExtension(ApexPages.StandardController stdController) {
        this.mycase = (Case)stdController.getRecord();
        
        // initialize feed filter based on case origin
        if (this.mycase.origin.equals('Email')) {
            curFilter = 'EmailMessageEvent';
        } else if (this.mycase.origin.equals('Phone')) {
            curFilter = 'CallLogPost';
        } else if (this.mycase.origin.equals('Web')) {
            curFilter = 'CaseCommentPost';
        }
    }
 
    public String getCurFilter() {
        return curFilter;
    }
    
    public void setCurFilter(String c) {
        if (c.equals('All')) {
            curFilter = null;
        } else {
            curFilter = c;
        }
    }
    
    public PageReference refreshFeed() {
        return null;
    }
}
```

```
<apex:page standardController="Case" extensions="MyCaseExtension">

    <!-- Feed filter -->
    <div>
        <span>Feed Filters:</span> 
        <select onchange="changeFilter(this.options[selectedIndex].value);"
            id="custom_filterSelect">
            <option value="All" id="custom_all_option">All</option>
            <option value="EmailMessageEvent"
                id="custom_email_option">Emails</option>
            <option value="CaseCommentPost"
                id="custom_web_option">Portal Answers</option>
            <option value="CallLogPost"
                id="custom_phone_option">Call Logs</option>
        </select>
    </div>
  
    <apex:form >
        <!-- actionFunction for refreshing feed when the feed filter is updated -->
        <apex:actionFunction action="{!refreshFeed}" name="changeFilter"
            reRender="custom_demoFeed" immediate="true" >
            <apex:param name="firstParam" assignTo="{!curFilter}" value="" />
        </apex:actionFunction>
    
        <!-- actionFunction for refreshing feed when there is an event fired for
            updating the feed -->
        <apex:actionFunction action="{!refreshFeed}" name="updateFeed"
            reRender="custom_demoFeed" immediate="true" />
    </apex:form>
  
    <!-- Chatter feed -->
    <chatter:feed entityId="{!case.id}" showPublisher="false"
        feedItemType="{!curFilter}" id="custom_demoFeed" />

    <!-- Include library for using service desk console API -->
    <apex:includeScript value="/support/console/25.0/integration.js"/>
  
    <!-- Javascript for adding event listener for refreshing feed -->
    <script type="text/javascript">

        var listener = function (result) {
            updateFeed();    
        };

        // add a listener for the 'Cirrus.samplePublisherVFPage.RefreshFeedEvent'
            event type 
        sforce.console.addEventListener('Cirrus.samplePublisherVFPage.RefreshFeedEvent',
            listener);
    </script>
    
    <!-- Javascript for initializing select option based on case origin -->
    <script type="text/javascript">     
        window.onload = function() {
            var caseOrigin = "{!case.origin}";
            if (!caseOrigin) {
                caseOrigin = "all";
            } else {
                caseOrigin = caseOrigin.toLowerCase();
            }
            var selectElem = document.getElementById('custom_' + caseOrigin + '_option');
            if (selectElem) {
                selectElem.selected = true;
            }
        }
    </script>

</apex:page>
```

## Related Topics

- apex:emailPublisher (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_email_publisher.htm)
- apex:logCallPublisher (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_log_call_publisher.htm)
- support:portalPublisher (atlas.en-us.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_portal_publisher.htm)
