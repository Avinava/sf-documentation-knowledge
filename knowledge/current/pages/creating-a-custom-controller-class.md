---
title: "Creating a Custom Controller Class"
domain: pages
topic: creating-a-custom-controller-class
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.960Z
estimatedTokens: 427
keywords: [Creating, Custom, Controller, simply, Apex, code, though, ineffective]
---

# Creating a Custom Controller Class

> A custom controller is simply an Apex class. For example, the following code is a valid,
            though ineffective, controller class:

# Creating a Custom Controller Class

A custom controller is simply an Apex class. For example, the following code is a valid, though ineffective, controller class:

```

```

You can create a controller class and add it to your page in two different ways:

-   Add the controller attribute to your page and use a “quick fix” to create the controller class on the fly:
    1.  In the page editor, add the controller attribute to the <apex:page\> tag. For example:

        ```

        ```

    2.  Use the quick fix option to automatically create a new Apex class named MyController.
-   Create and save the controller class in the Apex editor of your choice, and then reference it in your page:
    1.  In the application, from Setup, enter “Apex Classes” in the Quick Find box, then select **Apex Classes** and click **New** to create a new class.
    2.  Return to your page and add the controller attribute to the <apex:page\> tag as described in the example above.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

A page can only reference one controller at a time. You can’t use both the standardController attribute and the controller attribute in an <apex:page\> tag.

As soon as you save a page that references a valid custom controller, a second Controller editor tab is available next to the Page Editor. This editor allows you to toggle back and forth between your page markup and the Apex that defines the page’s logic.

The Custom Controller Editor ![A Visualforce page displaying a callout to the Controller Editor](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_page_controller_editor.png&folder=pages)

## Code Examples

```apex
public class MyController {

}
```

```
<apex:page controller="MyController">
    <apex:pageBlock title="Hello {!$User.FirstName}!">
        This is your new page.
    </apex:pageBlock>
</apex:page>
```
