---
title: "flow:interview"
domain: pages
topic: flowinterview
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.440Z
estimatedTokens: 646
keywords: [flow, interview, component, embeds, Attributes]
---

# flow:interview

> This component embeds a Flow interview in the page.

# flow:interview

This component embeds a Flow interview in the page.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| allowShowPause | Boolean | A Boolean value that allows the flow to display the Pause button. The Pause button appears on a flow screen only if this attribute is set to true for the <flow:interview> component, the 'Let Users Pause Flows' setting is enabled for your organization, and the currently displayed screen has been configured to show the Pause button. |  | 33.0 |  |
| buttonLocation | String | The area of the page block where the navigation buttons should be rendered. Possible values include 'top', 'bottom', or 'both'. If not specified, this value defaults to 'both'. |  | 21.0 |  |
| buttonStyle | String | Optional style applied to the command buttons. Can only be used for in-line styling, not for CSS classes. |  | 21.0 |  |
| finishLocation | ApexPages.PageReference | A PageReference that can be used to determine where the flow navigates when it finishes. |  | 21.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| interview | Flow.Interview | An object that can be used to represent the FlowInterview. |  | 21.0 |  |
| name | String | The unique name of the flow. | Yes | 21.0 |  |
| pausedInterviewId | String | Id of a paused interview to resume. |  | 33.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| rerender | Object | The ID of one or more components that are redrawn when the result of the action method returns to the client. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. |  | 21.0 |  |
| showHelp | Boolean | Should the help link be displayed. |  | 21.0 |  |

#### See Also

-   [An Advanced Example of Using <flow:interview>](atlas.en-us.pages.meta/pages/pages_flows_advanced.htm "The <flow:interview> component is designed to make it easy to develop complex Visualforce interactions. You can access additional features in your flow by creating a custom controller. With custom controllers, you can build a page with multiple components that can interact with each other. Any flow within your organization can be individually referenced by its own Apex type, and the variables in the flow can be accessed as member variables.")

## Code Examples

```apex
<!-- Page: -->
<apex:page controller="exampleCon">
<!-- embed a simple flow -->
	<flow:interview name="my_flow" interview="{!my_interview}"></flow:interview>
	<!-- get a variable from the embedded flow using my_interview.my_variable -->
	<apex:outputText value="here is my_variable : {!my_interview.my_variable}"/>
</apex:page>

/*** Controller ***/
public class exampleCon {
    Flow.Interview.my_flow my_interview {get; set;}
}
```

## Related Topics

- An Advanced Example of Using <flow:interview> (atlas.en-us.pages.meta/pages/pages_flows_advanced.htm)
