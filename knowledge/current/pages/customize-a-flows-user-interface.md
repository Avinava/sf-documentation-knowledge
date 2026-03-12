---
title: "Customize a Flow’s User Interface"
domain: pages
topic: customize-a-flows-user-interface
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.605Z
estimatedTokens: 714
keywords: [Customize, Flow’s, User, you’ve, embedded, flow, Visualforce, looks, run, time, applying, custom, styles, CSS, combination]
---

# Customize a Flow’s User Interface

> After you’ve embedded a flow in a Visualforce page, you can customize what the flow looks like at run time by applying
custom styles using CSS. Using a combination of flow attributes and
CSS classes, you can customize the individual parts of a flow, such
as the button location, button style, background, and the look and
feel of the screen labels.

# Customize a Flow’s User Interface

After you’ve embedded a flow in a Visualforce page, you can customize what the flow looks like at run time by applying custom styles using CSS. Using a combination of flow attributes and CSS classes, you can customize the individual parts of a flow, such as the button location, button style, background, and the look and feel of the screen labels.

## Flow Button Attributes

Use these attributes to change how the **Next**, **Previous**, **Finish**, **Pause**, and **Don’t Pause** buttons appear in your flow.

| Attribute | Description |
| --- | --- |
| buttonLocation | Defines the location of the navigation buttons in the flow’s user interface. Available values are:topbottombothFor example:<apex:page> <flow:interview name="MyFlow" buttonLocation="bottom"/> </apex:page>NoteIf unspecified, the buttonLocation value defaults to both. |
| buttonStyle | Assigns a style to the flow navigation buttons as a set. Can only be used for inline styling, not for CSS classes.For example:<apex:page>   <flow:interview name="MyFlow" buttonStyle="color:#050; background-color:#fed; border:1px solid;"/>  </apex:page> |

## Flow-Specific CSS Classes

You can override these predefined flow style classes with your own CSS styles.

| Flow Style Class | Applies to... |
| --- | --- |
| FlowContainer | The <div> element containing the flow. |
| FlowPageBlockBtns | The <apex:pageBlockButtons> element containing the flow navigation buttons.NoteTo prevent your CSS styling for flow navigation buttons from being overwritten by button styling applied elsewhere in the system, we recommend you specify this flow style class each time you apply CSS styling to flow navigation buttons.For example, instead of .FlowPreviousBtn {}, enter .FlowPageBlockBtns .FlowPreviousBtn {}. |
| FlowCancelBtn | The Don’t Pause button. |
| FlowPauseBtn | The Pause button. |
| FlowPreviousBtn | The Previous button. |
| FlowNextBtn | The Next button. |
| FlowFinishBtn | The Finish button. |
| FlowText | A text field label. |
| FlowTextArea | A text area field label. |
| FlowNumber | A number field label. |
| FlowDate | A date field label. |
| FlowCurrency | A currency field label. |
| FlowPassword | A password field label. |
| FlowRadio | A radio button field label. |
| FlowDropdown | A picklist label. |

#### See Also

-   [Embed Flows in Visualforce Pages](atlas.en-us.pages.meta/pages/pages_flows_adding.htm "To customize a flow’s look and feel or enhance its functionality, embed it in a Visualforce page. If your org has flows enabled for sites and portals, use the Visualforce page to deliver the flow to your Salesforce site, portal, or Experience Cloud site.")

-   [Using Custom Styles](atlas.en-us.pages.meta/pages/pages_styling_custom.htm "Use the <apex:stylesheet> tag or static HTML to include your own style sheet or styles.")

## Code Examples

```
<apex:page>
<flow:interview name="MyFlow" buttonLocation="bottom"/>
</apex:page>
```

```
<apex:page>
  <flow:interview name="MyFlow" buttonStyle="color:#050; background-color:#fed; border:1px solid;"/> 
</apex:page>
```

## Related Topics

- Embed Flows in Visualforce Pages (atlas.en-us.pages.meta/pages/pages_flows_adding.htm)
- Using Custom Styles (atlas.en-us.pages.meta/pages/pages_styling_custom.htm)
