---
title: "Using the Development Mode Footer"
domain: pages
topic: using-the-development-mode-footer
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.254Z
estimatedTokens: 1793
keywords: [Development, Mode, Footer, enabled, view, edit, content, navigating, URL, named, HelloWorld, Salesforce, instance, MyDomain_login_URL, enter]
---

# Using the Development Mode Footer

> With development mode enabled, you can view and edit the content of a page by navigating to the
   URL of the page. For example, if a page is named HelloWorld, and your Salesforce instance is
    MyDomain_login_URL, enter
     https://MyDomain_login_URL/apex/HelloWorld
   in your browser's address b

# Using the Development Mode Footer

With development mode enabled, you can view and edit the content of a page by navigating to the URL of the page. For example, if a page is named HelloWorld, and your Salesforce instance is MyDomain\_login\_URL, enter https://MyDomain\_login\_URL/apex/HelloWorld in your browser's address bar. Development mode also provides you with a special development footer to edit your Visualforce pages and custom controllers, as well as monitor Visualforce performance.

After enabling development mode, all Visualforce pages display with the development mode footer at the bottom of the browser:

-   Click the tab with the name of the page to open the page editor to view and edit the associated Visualforce markup without having to return to the Setup area. Changes display immediately after you save the page.
-   If the page uses a custom controller, the name of the controller class is available as a tab. Click the tab to edit the associated Apex class.
-   If the page uses any controller extensions, the names of each extension are available as tabs. Clicking on the tab lets you edit the associated Apex class.
-   If enabled in Setup, the **View State** tab displays information about the items contributing to the view state of the Visualforce page.
-   Click **Save** (just above the edit pane) to save your changes and refresh the content of the page.
-   Click **Component Reference** to view the documentation for all supported Visualforce components.
-   Click **Where is this used?** to view a list of all items in Salesforce that reference the page, such as custom tabs, controllers, or other pages.
-   Click the Collapse button (![Collapse icon](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fcollapse.gif&folder=pages)) to collapse the development mode footer panel. Click the Expand button (![Expand icon](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fexpand.gif&folder=pages)) to toggle it back open.
-   Click the Disable Development Mode button (![Disable development mode icon](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_extend_code%2Fimages%2Fpages_disable_development_mode.gif&folder=pages)) to turn off development mode entirely. Development mode remains off until you enable it again from your personal information page in your personal settings.

## About the View State Tab

The view state of a web page is composed of all the data that's necessary to maintain the state of the controller during server requests (like sending or receiving data). Since the view state contributes to the overall size of your page, performance of a page can depend on efficiently managing the view state. The View State tab in the development mode footer provides information about the view state of your Visualforce page as it interacts with Salesforce.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The View State tab should be used by developers that understand the page request process. Familiarize yourself with the [order of execution in a Visualforce page](atlas.en-us.pages.meta/pages/pages_controller_lifecycle.htm#pages_controller_lifecycle) before using the tab.

To enable the View State tab:

1.  From your personal settings, enter Advanced User Details in the Quick Find box, then select **Advanced User Details**. No results? Enter Personal Information in the Quick Find box, then select **Personal Information**.
2.  Click **Edit**.
3.  Select the Development Mode checkbox if it isn't selected.
4.  Select the Show View State in Development Mode checkbox.
5.  Click **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Since the view state is linked to form data, the View State tab only appears if your page contains an <apex:form\> tag. In addition, the View State tab displays only on pages using [custom controllers or controller extensions](atlas.en-us.pages.meta/pages/pages_controller_def.htm#pages_controller_def).

The View State tab is composed of folder nodes. If you click any folder, a pie chart with a Content tab appears. This chart displays the folder's child Visualforce custom controllers, Apex objects, or fields. You can see which elements contribute to the parent's overall size by hovering over pieces of the graph. This is the same information as the individual text nodes. The chart requires Flash version 6 or greater enabled on your browser.

Salesforce allows Visualforce pages to have a maximum view state size of 170KB. The View State tab shows you which elements on your page are taking up that space. A smaller view state size generally means quicker load times. To minimize your pages' view state, you can optimize your Apex controller code and remove any superfluous Visualforce components used. For example:

-   If you notice that a large percentage of your view state comes from objects used in controllers or controller extensions, consider refining your SOQL calls to return only data that's relevant to the Visualforce page.
-   If your view state is affected by a large component tree, try reducing the number of components your page depends on.

The View State tab contains the following columns (in alphabetical order):

| Column | Description |
| --- | --- |
| % of Parent | The percent of the overall size that the custom controller, Apex object, or field contributes to the parent. |
| Name | The name of the custom controller, Apex object, or field. |
| Size | The view state size of the custom controller, Apex object, or field. |
| Type | The type of custom controller, Apex object, or field. |
| Value | The value of the field. |

The Name column contains nodes defining the various parts of your Visualforce page. They are (in alphabetical order):

| Node | Description |
| --- | --- |
| Component Tree | This represents the overall structure of your page. Its size is affected by the number of components you have on the page. Generally, fewer components means a smaller component tree, which could result in faster load times. You can see how much of your view state size is made up from the component tree by clicking the View State folder. |
| Internal | This represents the internal Salesforce data used by your Visualforce page. This can't be controlled by developers. You can see how much of your view state size is made up from internal elements by clicking the State folder. |
| Expressions | This represents the data used by formula expressions defined in your Visualforce page. |
| State | This folder contains all the Visualforce custom controllers, Apex objects, or fields. By expanding the child Controller and Controller Extension folders, you can see each object that's on the page, its fields, and the value of those fields. Generally, these are dependent on your Apex controller logic. |
| View State | This folder contains all the nodes. By clicking on it, you can find overall information about your Visualforce page's view state. The Capacity tab tells you how much of your allotted view state size is being used. If you exceed that amount, the graph will also tell you how many kilobytes you've gone over. |

## Related Topics

- order of execution in a Visualforce page (atlas.en-us.pages.meta/pages/pages_controller_lifecycle.htm)
- custom controllers or controller extensions (atlas.en-us.pages.meta/pages/pages_controller_def.htm)
