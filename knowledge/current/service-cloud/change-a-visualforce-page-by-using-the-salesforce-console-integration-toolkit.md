---
title: "Change a Visualforce Page by Using the Salesforce Console Integration Toolkit"
domain: service-cloud
topic: change-a-visualforce-page-by-using-the-salesforce-console-integration-toolkit
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:58.371Z
estimatedTokens: 613
keywords: [Change, Visualforce, Page, Salesforce, Console, Integration, Toolkit, implementation, look, different., example, shows, how, change, console, user, Toolkit., Note]
---

# Change a Visualforce Page by Using the Salesforce Console Integration Toolkit

> Each implementation of Salesforce Console Integration Toolkit can look different.
        This example shows how to change the Salesforce console user interface using the Salesforce
        Console Integration Toolkit.

# Change a Visualforce Page by Using the Salesforce Console Integration Toolkit

Each implementation of Salesforce Console Integration Toolkit can look different. This example shows how to change the Salesforce console user interface using the Salesforce Console Integration Toolkit.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Due to third-party cookie restrictions in modern web browsers, Visualforce pages can’t load in Salesforce Classic console apps when third-party cookies are disabled. See [Visualforce Limitations in Salesforce Classic When Third-Party Cookies are Blocked](https://help.salesforce.com/s/articleView?id=003786014&type=1&language=en_US "HTML (New Window)").

1.  Create a Visualforce page.
2.  Cut and paste the following sample code into your Visualforce page.

    This code demonstrates various functions of the Salesforce Console Integration Toolkit:

    ```

    ```

3.  Create a custom link for cases that use your Visualforce page.
4.  Edit the page layout for cases and add your custom link.
5.  Add any domains to the console’s allowlist.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

To see this example in action, click the custom link on a case. For more information, see [Define Custom Buttons and Links](https://help.salesforce.com/s/articleView?id=defining_custom_links.htm&language=en_US "HTML (New Window)") in Salesforce Help.

Here’s the sample Visualforce page loaded in the console.

![output of sample visualforce page with various functions of the service cloud console integration toolkit](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_console%2Fimages%2Fsample_console_vf_page.png&folder=api_console)

#### See Also

-   [*Visualforce Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/ "
    Visualforce Developer Guide
    - HTML (New Window)")

-   [*Salesforce Help*: Create and Edit Page Layouts](https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_layoutcreate.htm&language=en_US "Salesforce Help: Create and Edit Page Layouts - HTML (New Window)")

-   [*Salesforce Help*: Allow Domains for a Salesforce Console in Salesforce](https://help.salesforce.com/apex/HTViewHelpDoc?id=console2_allowed_domains.htm&language=en_US "Salesforce Help: Allow Domains for a Salesforce Console in
    Salesforce - HTML (New Window)")

## Code Examples

```
<apex:page standardController="Case">

 <apex:includeScript value="/support/console/66.0/integration.js"/>
 <script type="text/javascript">
        function openPrimaryTab() {
            sforce.console.openPrimaryTab(undefined, 
               'https://www.example.com', true, 'example');
        }
        
        //The callback function that openSubtab will call once it has the ID for its primary tab
        var callOpenSubtab=function callOpenSubtab(result) {
            sforce.console.openSubtab(result.id, 
               'https://www.example.com', true, 'example');
        };
        
        function openSubtab() {
            sforce.console.getEnclosingPrimaryTabId(callOpenSubtab);
        }

        //Sets the title of the current tab to "Example"
        function setTitle() {
            sforce.console.setTabTitle('Example');
        }
        
        //The callback function that closeTab will call once it has the ID for its tab
        var callCloseTab= function callCloseTab(result) {
            sforce.console.closeTab(result.id);
        }
        
        function closeTab() {
            sforce.console.getEnclosingTabId(callCloseTab);
        }
  </script>

   <A HREF="#" onClick="openPrimaryTab();return false">Open A Primary Tab</A> 
   <p/><A HREF="#" onClick="openSubtab();return false">Open A Subtab</A> 
   <p/><A HREF="#" onClick="setTitle();return false">Set Title to Example</A> 
   <p/><A HREF="#" onClick="closeTab();return false">Close This Tab</A> 

</apex:page>
```
