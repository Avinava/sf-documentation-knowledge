---
title: "Embed Flows in Visualforce Pages"
domain: pages
topic: embed-flows-in-visualforce-pages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.591Z
estimatedTokens: 1072
keywords: [Embed, Flows, Visualforce, Pages, customize, flow’s, look, feel, enhance, functionality, org, enabled, sites, portals, deliver]
---

# Embed Flows in Visualforce Pages

> To customize a flow’s look and feel or enhance its functionality, embed it in a
        Visualforce page. If your org has flows enabled for sites and portals, use the Visualforce
        page to deliver the flow to your Salesforce site, portal, or Experience Cloud
        site.

# Embed Flows in Visualforce Pages

To customize a flow’s look and feel or enhance its functionality, embed it in a Visualforce page. If your org has flows enabled for sites and portals, use the Visualforce page to deliver the flow to your Salesforce site, portal, or Experience Cloud site.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Users can run only flows that have an active version. If the flow you embed doesn't have an active version, users see an error message. If the flow you embed includes a Subflow element, the flow that is referenced and called by the Subflow element must have an active version.

To add a flow to a Visualforce page, embed it using the <flow:interview\> component:

1.  Find the flow's API name.
    1.  From Setup, enter Flows in the Quick Find box, then select **Flows**.
    2.  Click the name of the flow that you want to embed.
2.  Define a new Visualforce page or open one that you want to edit.
3.  Add the <flow:interview\> component, somewhere between the <apex:page\> tags.
4.  Set the name attribute to the unique name of the flow. For example:

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    If the flow is from a managed package, the name attribute must be in this format: namespace.flowuniquename.

5.  Restrict which users can run the flow by setting the page security for the Visualforce page that contains it.

    To run the flow, external users (such as on an Experience Cloud site) need access to the Visualforce page. To run the flow, internal users need access to the Visualforce page and either:

    -   The "Run Flows" permission
    -   The Flow User field enabled on their user detail page
    -   If **Override default behavior and restrict access to enabled profiles or permission sets** is selected for an individual flow, access to that flow is given to users by profile or permission set


## Setting Variable Values in a Flow

In this example, we'll build a simple flow to allow customer support agents to troubleshoot modem issues by creating a case. You can set the value of variables when starting a flow through the <apex:param\> component. For our example, to set the case number variable called vaCaseNumber with the initial value 01212212 when the flow loads, use the following markup:

```

```

You can also set variables by using standard Visualforce controllers. For example, if the Visualforce page is using the standardCase controller, you can enhance the page to pass in the data from the standard controller.

```

```

For more examples of setting variable values, see [Set Flow Variable Values from a Visualforce Page](atlas.en-us.pages.meta/pages/pages_flows_setting_values.htm "After you embed your flow in a Visualforce page, set the initial values of variables, record variables, collection variables, and record collection variables through the <apex:param> component."). For information about getting variable values from a flow to display in a Visualforce page, see [Get Flow Variable Values to a Visualforce Page](atlas.en-us.pages.meta/pages/pages_flows_getting_values.htm "Flow variable values can be displayed in a Visualforce page. Once you’ve embedded your flow in a Visualforce page, you can use Visualforce markup to get values for variables or record variables. To display values for a collection variable or a record collection variable, you can use Visualforce markup to get the individual values contained in the collection.").

## Setting the finishLocation Attribute

Building on our modem troubleshooting example, we'll also set the finishLocation attribute to redirect the user to the Salesforce home page when they click on the **Finish** button at the end of the flow.

```

```

For more examples of setting finishLocation, see [Configure the finishLocation Attribute in a Flow Attribute in a Flow](atlas.en-us.pages.meta/pages/pages_flows_finishlocation.htm#pages_flows_finishlocation "If finishLocation isn’t specified, users who click Finish start a new interview and see the first screen of the flow. You can shape what happens when a user clicks Finish on the final screen by using the URLFOR function, the $Page variable, or a controller.").

## Code Examples

```
<apex:page>
<flow:interview name="flowAPIName"/>
</apex:page>
```

```
<apex:page>
    <flow:interview name="ModemTroubleShooting">
        <apex:param name="vaCaseNumber" value="01212212"/>
    </flow:interview>
</apex:page>
```

```
<apex:page standardController="Case" tabStyle="Case" >
    <flow:interview name="ModemTroubleShooting">
        <apex:param name="vaCaseNumber" value="{!Case.CaseNumber}"/>
    </flow:interview>
</apex:page>
```

```
<apex:page standardController="Case" tabStyle="Case" >
    <flow:interview name="ModemTroubleShooting" finishLocation="{!URLFOR('/home/home.jsp')}">
        <apex:param name="vaCaseNumber" value="{!case.CaseNumber}"/>
    </flow:interview>
</apex:page>
```

## Related Topics

- Set Flow Variable Values from a Visualforce Page (atlas.en-us.pages.meta/pages/pages_flows_setting_values.htm)
- Get Flow Variable Values to a Visualforce Page (atlas.en-us.pages.meta/pages/pages_flows_getting_values.htm)
- Configure the finishLocation Attribute in a Flow Attribute in a Flow (atlas.en-us.pages.meta/pages/pages_flows_finishlocation.htm)
