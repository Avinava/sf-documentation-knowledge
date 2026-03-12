---
title: "apex:canvasApp"
domain: pages
topic: apexcanvasapp
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.189Z
estimatedTokens: 1386
keywords: [apex, canvasApp, Renders, canvas, app, identified, developerName, namespacePrefix, applicationName, pair, attribute, precedence, developer, organization, doesn't]
---

# apex:canvasApp

> Renders a canvas app identified by the given developerName/namespacePrefix or applicationName/namespacePrefix value pair. The developerName attribute takes precedence if both developerName and applicationName are set.

# apex:canvasApp

Renders a canvas app identified by the given developerName/namespacePrefix or applicationName/namespacePrefix value pair. The developerName attribute takes precedence if both developerName and applicationName are set.

**Requirements:**

-   Force.com Canvas should be enabled in the organization.

**Keep the following considerations in mind when using the <apex:canvasApp\> component:**

-   A development organization is an organization in which a canvas app is developed and packaged.
-   An installation organization is an organization in which a packaged canvas app is installed.
-   The <apex:canvasApp\> component usage in a Visualforce page isn't updated if a canvas app's application name or developer name is changed.
-   A canvas app can be deleted even if there's a Visualforce page referencing it via <apex:canvasApp\> .

## This example renders a canvas app by using only the developer name. If your organization doesn't have a namespace prefix, then the namespacePrefix attribute shouldn't be used.

```

```

## This example renders a canvas app by using only the application name.

```

```

## This example renders a canvas app by using the developer name and namespace prefix from the organization in which the canvas app was created.

```

```

## This example renders a canvas app by using the application name and namespace prefix from the organization in which the canvas app was created.

```

```

## This example renders a canvas app in a specific output panel.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| applicationName | String | Name of the canvas app. Either applicationName or developerName is required. |  | 43.0 |  |
| border | String | Width of the canvas app border, in pixels. If not specified, defaults to 0 px. |  | 43.0 |  |
| canvasId | String | Unique ID of the canvas app window. Use this attribute when targeting events to the canvas app. |  | 43.0 |  |
| containerId | String | An HTML element ID in which the canvas app is rendered. If not specified, defaults to null. The container specified by this can't appear after the <apex:canvasApp> component. |  | 43.0 |  |
| developerName | String | Developer name of the canvas app. This name is defined when the canvas app is created and can be viewed in the Canvas App Previewer. Either developerName or applicationName is required. |  | 43.0 |  |
| entityFields | String | Specifies the fields returned in the signed request Entity object when the component appears on a Visualforce page placed on an object. If this attribute isn’t specified or is blank, then only Id and type information is provided. Valid attribute values include:Comma-separated list of field names. For example, to return the Account Phone and Fax fields, the attribute would look like: entityFields="Phone,Fax"Asterisk “*” to return all fields from the associated object. |  | 43.0 |  |
| height | String | Canvas app window height, in pixels. If not specified, defaults to 900 px. |  | 43.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| maxHeight | String | The maximum height of the Canvas app window in pixels. Defaults to 2000 px; 'infinite' is also a valid value |  | 43.0 |  |
| maxWidth | String | The maximum width of the Canvas app window in pixels. Defaults to 1000 px; 'infinite' is also a valid value |  | 43.0 |  |
| namespacePrefix | String | Namespace value of the Developer Edition organization in which the canvas app was created. Optional if the canvas app wasn’t created in a Developer Edition organization. If not specified, defaults to null. |  | 43.0 |  |
| onCanvasAppError | String | Name of the JavaScript function to be called if the canvas app fails to render. |  | 43.0 |  |
| onCanvasAppLoad | String | Name of the JavaScript function to be called after the canvas app loads. |  | 43.0 |  |
| parameters | String | Object representation of parameters passed to the canvas app. This should be supplied in JSON format or as a JavaScript object literal. Here’s an example of parameters in a JavaScript object literal:{param1:'value1',param2:'value2'}If not specified, defaults to null.NoteIf the value of parameters exceeds approximately 8KB, your Canvas app may fail to load in Chromium-based browsers. This is due to an internal response header size limit. The redirect used by Canvas passes parameters via the Location: header, which has a maximum size. If exceeded, an HTTP 500 error is returned.To avoid this issue, keep parameters small or use a token-based approach where large data is fetched server-side by the Canvas app after loading. |  | 43.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| scrolling | String | Specifies whether the canvas app window should use scroll bars. Valid values are auto\|yes\|no. If not specified or set to an invalid value, it will default to no. |  | 43.0 |  |
| width | String | Canvas app window width, in pixels. If not specified, defaults to 800 px. |  | 43.0 |  |

#### See Also

-   [*Canvas Developer Guide*: Canvas Apps and Visualforce Pages](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm "Canvas Developer Guide: Canvas Apps and Visualforce
    Pages - html (New Window)")

## Code Examples

```
Note: The canvas app is rendered within a div element, the div element id can be retrieved by {!$Component.genContainer}.
    <apex:page showHeader="false">
      <apex:canvasApp developerName="canvasAppDeveloperName"/>
    </apex:page>
```

```
<apex:page showHeader="false">
      <apex:canvasApp applicationName="canvasAppName"/>
    </apex:page>
```

```
<apex:page showHeader="false">
      <apex:canvasApp developerName="canvasAppDeveloperName" namespacePrefix="fromDevOrgNamespacePrefix"/>
    </apex:page>
```

```
<apex:page showHeader="false">
      <apex:canvasApp applicationName="canvasAppName" namespacePrefix="fromDevOrgNamespacePrefix"/>
    </apex:page>
```

```
<apex:page showHeader="false">
      <apex:outputPanel layout="block" id="myContainer">
        <apex:canvasApp developerName="canvasAppName" namespacePrefix="fromDevOrgNamespacePrefix" containerId="{!$Component.myContainer}"/>
      </apex:outputPanel>
    </apex:page>
```
