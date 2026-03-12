---
title: "Define Custom Buttons and Links to Visualforce Pages"
domain: pages
topic: define-custom-buttons-and-links-to-visualforce-pages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.286Z
estimatedTokens: 1115
keywords: [Define, Custom, Buttons, Links, Visualforce, Pages, button, link, opens]
---

# Define Custom Buttons and Links to Visualforce Pages

> Create a custom button or link on an object that opens a Visualforce
        page.

# Define Custom Buttons and Links to Visualforce Pages

Create a custom button or link on an object that opens a Visualforce page.

Before creating a custom button or link, determine what action you want to occur when a user clicks it.

1.  From the management settings for the appropriate object, go to **Buttons, Links, and Actions**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    Custom buttons aren’t available on the User object or custom home pages.

    Custom buttons and links are available for activities under the individual object management settings for tasks and events. To override a standard button that applies to both tasks and events, go to the object management settings for activities.

2.  Click **New Button or Link**.
3.  Enter these attributes.

    | Attribute Name | Description |
    | --- | --- |
    | Label | Text that displays on user pages for the custom button or link. |
    | Name | The unique name for the button or link used when referenced from a merge field. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
    | Namespace Prefix | In a packaging context, a namespace prefix is a one to 15-character alphanumeric identifier that distinguishes your package and its contents from packages of other developers on AppExchange. Namespace prefixes are case-insensitive. For example, ABC and abc aren’t recognized as unique. Your namespace prefix must be globally unique across all Salesforce organizations. It keeps your managed package under your control exclusively. |
    | Protected Component | Protected components can’t be linked to or referenced by components created in a subscriber org. A developer can delete a protected component in a future release without worrying about failing installations. However, after a component is marked as unprotected and is released globally, the developer can’t delete it. |
    | Description | Text that distinguishes the button or link and is displayed when an administrator is setting up buttons and links. |
    | Display Type | Determines where the button or link is available on page layouts.Detail Page LinkAdds the link to the Custom Links section of your page layouts.Detail Page ButtonAdds the custom button to a record’s detail page. You can add detail page buttons only to the Button section of a page layout.List ButtonAdds the custom button to a list view, search result layout, or related list. You can add list buttons only to the Related List section of a page layout or the List View and Search Result layouts.For list buttons, Salesforce automatically selects a Display Checkboxes (for Multi-Record Selection) option that includes a checkbox next to each record in the list, allowing users to select the records they want applied to the action on the list button. Deselect this option if your custom button doesn’t require the user to select records, such as a button that navigates to another page. |
    | Behavior | Choose the outcome of clicking the button or link.When applicable, some settings have default values. For example, if you choose Display in new window, the default height of a new window is 600 pixels. |
    | Content Source | Choose a Visualforce page as the content of the button or link. Visualforce pages can’t be used as custom links on the home page. |

4.  When you’re finished, click **Save**.

    Alternatively, to save and continue editing, click **Quick Save**, or to quit without saving your content, click **Cancel**.

5.  To display the new button or link, edit the page layout for the appropriate tab or search layout.

    If you add a custom link for users, the link is automatically added to the Custom Links section of the user detail page. Detail page buttons can be added only to the Button section of a page layout.

6.  Optionally, set the window properties to open the button or link using settings other than the user’s default browser settings.

#### See Also

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US)

-   [*Salesforce Help*: Define Custom Buttons and Links](https://help.salesforce.com/s/articleView?id=platform.defining_custom_links.htm&type=5&language=en_US)
