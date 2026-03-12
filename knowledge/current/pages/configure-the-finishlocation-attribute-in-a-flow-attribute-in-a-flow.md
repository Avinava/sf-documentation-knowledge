---
title: "Configure the  finishLocation Attribute in a Flow Attribute in a Flow"
domain: pages
topic: configure-the-finishlocation-attribute-in-a-flow-attribute-in-a-flow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.611Z
estimatedTokens: 714
keywords: [Configure, finishLocation, Attribute, Flow, isn’t, users, click, Finish, start, new, interview, screen, shape, happens, user]
---

# Configure the  finishLocation Attribute in a Flow Attribute in a Flow

> If finishLocation isn’t specified, users
    who click Finish start a new interview and see the first screen of the
    flow. You can shape what happens when a user clicks Finish on the final
    screen by using the URLFOR function, the $Page variable, or a controller.

# Configure the finishLocation Attribute in a Flow Attribute in a Flow

If finishLocation isn’t specified, users who click **Finish** start a new interview and see the first screen of the flow. You can shape what happens when a user clicks **Finish** on the final screen by using the URLFOR function, the $Page variable, or a controller.

The following sections show the ways that you can configure the <flow:interview\> component’s finishLocation attribute.

-   [Set finishLocation with the URLFOR Function](#flow_onfinish_urlfor_title)
-   [Set finishLocation with the $Page Variable](#flow_onfinish_page_var)
-   [Set finishLocation with a Controller](#flow_onfinish_controller)

## Set finishLocation with the URLFOR Function

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

-   You can't redirect flow users to a URL that’s external to your Salesforce org.
-   Don’t call the Auth.SessionManagement.finishLoginFlow method and the finishLocation attribute in the same flow. Auth.SessionManagement.finishLoginFlow indicates the end of a Visualforce page login flow. If finishLocation is in the same flow, finishLocation executes when the flow starts, giving users full access to the session.

To route users to a relative URL or a specific record or detail page, using its ID, use the URLFOR function.

This example routes users to the Salesforce home page.

```

```

This example routes users to a detail page with an ID of 001D000000IpE9X.

```

```

For more information about URLFOR, see [Functions](atlas.en-us.pages.meta/pages/pages_variables_functions.htm "Use functions to transform data from records, perform calculations, or to provide values for Visualforce attributes.").

## Set finishLocation with the $Page Variable

To route users to another Visualforce page without using URLFOR, set finishLocation to the name of the destination page with the format {!$Page.pageName}.

```

```

For more information about $Page, see [Global Variables](atlas.en-us.pages.meta/pages/pages_variables_global.htm "Use global variables to reference general information about the current user and your organization on a page.").

## Set finishLocation with a Controller

You can set finishLocation in a few ways with a custom controller.

This sample controller configures a flow's finish behavior in three different ways.

```

```

Here’s a sample Visualforce page that references the controller and sets the flow finish behavior to the first option.

```

```

If you use a standard controller to display a record on the same page as the flow, users who click **Finish** start a new flow interview. They see the first screen of the flow, without the record, because the id query string parameter isn't preserved in the page URL. If needed, configure the finishLocation to route users back to the record.

## Code Examples

```
<apex:page>
    <flow:interview name="MyUniqueFlow" finishLocation="{!URLFOR('/home/home.jsp')}"/>
</apex:page>
```

```
<apex:page>
    <flow:interview name="MyUniqueFlow" finishLocation="{!URLFOR('/001D000000IpE9X')}"/>
</apex:page>
```

```
<apex:page>
    <flow:interview name="MyUniqueFlow" finishLocation="{!$Page.MyUniquePage}"/>
</apex:page>
```

```apex
public class myFlowController {
    
    public PageReference getPageA() {
        return new PageReference('/300');
    }
    
    public String getPageB() {
        return '/300';
    }
    
    public String getPageC() {
        return '/apex/my_finish_page';
    }
}
```

```
<apex:page controller="myFlowController">
    <h1>Congratulations!</h1> This is your new page.
    <flow:interview name="flowname" finishLocation="{!pageA}"/>
</apex:page>
```

## Related Topics

- Functions (atlas.en-us.pages.meta/pages/pages_variables_functions.htm)
- Global Variables (atlas.en-us.pages.meta/pages/pages_variables_global.htm)
