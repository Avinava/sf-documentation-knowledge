---
title: "apex:logCallPublisher"
domain: pages
topic: apexlogcallpublisher
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.736Z
estimatedTokens: 606
keywords: [apex, logCallPublisher, Log, Call, publisher, lets, support, agents, Case, Feed, logs, customer, calls, component, organizations]
---

# apex:logCallPublisher

> The Log a Call publisher lets support agents who use Case Feed create logs for customer calls. This component can only be used in organizations that have Case Feed, Chatter, and  feed tracking on cases enabled.

# apex:logCallPublisher

The Log a Call publisher lets support agents who use Case Feed create logs for customer calls. This component can only be used in organizations that have Case Feed, Chatter, and feed tracking on cases enabled.

## This example displays the Log a Call publisher.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| autoCollapseBody | Boolean | A Boolean value that specifies whether the Log a Call body will be collapsed to a small height when it is empty. |  | 25.0 |  |
| entityId | id | Entity ID of the record for which to display the Log a Call publisher. In the current version, only Case record ids are supported. | Yes | 25.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| logCallBody | String | The initial text value of the Log a Call body when the publisher is rendered. |  | 25.0 |  |
| logCallBodyHeight | String | The height of the Log a Call body in em. |  | 25.0 |  |
| onSubmitFailure | String | The JavaScript invoked if the call failed to be logged. |  | 25.0 |  |
| onSubmitSuccess | String | The JavaScript invoked if the call was successfully logged. |  | 25.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| reRender | Object | The ID of one or more components that are redrawn when the call was successfully logged. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. |  | 25.0 |  |
| showAdditionalFields | Boolean | A Boolean value that specifies whether the additional fields defined in the publisher layout should be displayed. |  | 25.0 |  |
| showSubmitButton | Boolean | A Boolean value that specifies whether the submit button should be displayed. |  | 25.0 |  |
| submitButtonName | String | The name of the submit button in the Log a Call publisher. |  | 25.0 |  |
| submitFunctionName | String | The name of a function that can be called from JavaScript to publish the call log. |  | 25.0 |  |
| title | String | The title displayed in the Log a Call publisher header. |  | 25.0 |  |
| width | String | The width of the publisher in pixels (px) or percentage (%). |  | 25.0 |  |

## Code Examples

```
<apex:page standardController="Case" showHeader="true">
                <apex:logCallPublisher id="myLogCalllPublisher" 
                    entityId="{!case.id}"          
                    title="Log a Call"
                    width="500px"
                    autoCollapseBody="false"
                />  
            </apex:page>
```
