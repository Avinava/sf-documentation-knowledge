---
title: "support:portalPublisher"
domain: pages
topic: supportportalpublisher
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.177Z
estimatedTokens: 591
keywords: [support, portalPublisher, Portal, publisher, lets, agents, Case, Feed, compose, post, messages, component, organizations, enabled, displays]
---

# support:portalPublisher

> The Portal publisher lets support agents who use Case Feed compose and post portal messages. This component can only be used in organizations that have Case Feed enabled.

# support:portalPublisher

The Portal publisher lets support agents who use Case Feed compose and post portal messages. This component can only be used in organizations that have Case Feed enabled.

## This example displays the Portal publisher.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| answerBody | String | The default text value of the answer body. |  | 25.0 |  |
| answerBodyHeight | String | The height of the answer body in ems (em). |  | 25.0 |  |
| autoCollapseBody | Boolean | A Boolean value that specifies whether the answer body will be collapsed to a small height when it is empty. |  | 25.0 |  |
| entityId | id | Entity ID of the record for which to display the portal publisher. In the current version, only Case record ids are supported. | Yes | 25.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| onSubmitFailure | String | The JavaScript invoked if the answer failed to be published to the portal. |  | 25.0 |  |
| onSubmitSuccess | String | The JavaScript invoked if the answer was successfully published to the portal. |  | 25.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| reRender | Object | The ID of one or more components that are redrawn when the answer was successfully published. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. |  | 25.0 |  |
| showSendEmailOption | Boolean | A Boolean value that specifies whether the option to send email notification should be displayed. |  | 25.0 |  |
| showSubmitButton | Boolean | A Boolean value that specifies whether the submit button should be displayed. |  | 25.0 |  |
| submitButtonName | String | The name of the submit button in the portal publisher. |  | 25.0 |  |
| submitFunctionName | String | The name of a function that can be called from JavaScript to publish the answer. |  | 25.0 |  |
| title | String | The title displayed in the portal publisher header. |  | 25.0 |  |
| width | String | The width of the portal publisher in pixels (px) or percentage (%). |  | 25.0 |  |

## Code Examples

```
<apex:page standardController="Case" showHeader="true">
                <support:portalPublisher id="myPortalPublisher"
                    entityId="{!case.id}" 
                    answerBodyHeight="10em"
                    width="500px"
                    answerBody="This is the default Answer"
                    autoCollapseBody="false"
                    showSendEmailOption="false"
                />               
            </apex:page>
```
