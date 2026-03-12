---
title: "apex:canvasApp
        Component"
domain: platform-connect
topic: apexcanvasapp-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.329Z
estimatedTokens: 1460
keywords: [apex, canvasApp, Component, display, canvas, app, Visualforce, below, attributes]
---

# apex:canvasApp
        Component

> Use this component to display a canvas app on a Visualforce page. The table below
        lists the component attributes.

# apex:canvasApp Component

Use this component to display a canvas app on a Visualforce page. The table below lists the component attributes.

Pass parameters that contain non-alphanumeric characters such as quotation marks, apostrophes, and so on, as JavaScript-safe objects. To do this, write an Apex class that uses the methods of the Apex [JSONGenerator](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_json_jsongenerator.htm) class to build the JSON string. Call the Apex class from the parameters value:

```

```

Alternatively, you can also [use the JSENCODE function to escape the strings](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_variables_functions.htm):

```

```

| Attribute | Type | Description |
| --- | --- | --- |
| applicationName | String | Name of the canvas app. Either applicationName or developerName is required. |
| border | String | Width of the canvas app border, in pixels. If not specified, defaults to 0 pixels. |
| canvasId | String | Unique ID of the canvas app window. Use this attribute when targeting events to the canvas app. |
| containerId | String | ID of the HTML element in which the canvas app is rendered. If not specified, defaults to null. The container specified by this attribute can’t appear after the <apex:canvasApp> component. These code examples show valid usage of the <div> container and the containerId attribute:<apex:page>     <div id="container1"></div>     <apex:canvasApp applicationName="myApp" containerId="container1"/> </apex:page>  <apex:page>     <div id="container1">         <apex:canvasApp applicationName="myApp" containerId="container1"/>     </div> </apex:page> This code example shows invalid usage of the <div> container and the containerId attribute:<apex:page>     <apex:canvasApp applicationName="myApp" containerId="container1"/>     <div id="container1">     </div> </apex:page> |
| developerName | String | Internal name of the canvas app.  You specify this value in the API Name field when you expose the canvas app by creating a connected app. Either developerName or applicationName is required. |
| entityFields | String | Specifies the fields returned in the signed request Record object when the component appears on a Visualforce page placed on an object. If this attribute isn’t specified or is blank, then only the Id field is returned. Valid attribute values include:Comma-separated list of field names. For example, to return the Account Phone and Fax fields, the attribute would look like: entityFields="Phone,Fax"Asterisk “*” to return all fields from the associated object. |
| height | String | Canvas app window height, in pixels. If not specified, defaults to 900 pixels. |
| id | String | Unique identifier that allows the <apex:canvasApp> component to be referenced by other components on the page. |
| maxHeight | String | The maximum height of the Canvas app window in pixels. Defaults to 2000 px; 'infinite' is also a valid value. |
| maxWidth | String | The maximum width of the Canvas app window in pixels. Defaults to 1000 px; 'infinite' is also a valid value. |
| namespacePrefix | String | Namespace value of the Developer Edition organization in which the canvas app was created. You can set a namespace only in a Developer Edition organization, so this is optional if the canvas app was created in a different type of organization. If not specified, defaults to null. |
| onCanvasAppError | String | Name of the JavaScript function to be called if the canvas app fails to render. |
| onCanvasAppLoad | String | Name of the JavaScript function to be called after the canvas app loads. |
| parameters | String | Object representation of parameters passed to the canvas app. Supply in JSON format or as an expression to a JavaScript JSON object literal. If not specified, defaults to null. |
| rendered | Boolean | Specifies whether the component is rendered on the page. If not specified, defaults to true. |
| scrolling | String | Specifies whether the canvas app window uses scroll bars. Valid values are:autonoyesIf not specified, defaults to no. If this attribute contains an invalid value, it’s treated the same as no to prevent browser errors. |
| width | String | Canvas app window width, in pixels. If not specified, defaults to 800 pixels. |

-   **[Returning Fields in the Record Object](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_record_fields.htm)**
    When you use the <apex:canvasApp> component to display a canvas app on a Visualforce page, and that page is associated with an object (placed on the page layout, for example), you can specify fields to be returned from the related object. To do this, use the entityFields attribute. You can use this attribute in one of the following ways.

#### See Also

-   [Canvas Apps and Visualforce Pages](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)

-   [Visualforce Developer's Guide](https://salesforce.com/us/developer/docs/pages/index_Left.htm#StartTopic=Content/pages_compref_canvasApp.htm "Visualforce Developer's Guide - HTML (New Window)")

-   [Visualforce Page Code Examples](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_code_example.htm "You can display a canvas app on a Visualforce page in a number of ways.")

-   [Returning Fields in the Record Object](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_record_fields.htm "When you use the <apex:canvasApp> component to display a canvas app on a Visualforce page, and that page is associated with an object (placed on the page layout, for example), you can specify fields to be returned from the related object. To do this, use the entityFields attribute. You can use this attribute in one of the following ways.")

## Code Examples

```
<apex:page controller="JSONGeneratorSample">
 <apex:canvasApp developerName="mycanvas" parameters="{!generateJSON}" />
</apex:page>
```

```
<apex:page standardController="Account">
 <apex:canvasApp developerName="mycanvas" parameters="{!JSENCODE(Account.Description)}" />
</apex:page>
```

```
<apex:page>
    <div id="container1"></div>
    <apex:canvasApp applicationName="myApp" containerId="container1"/>
</apex:page>

<apex:page>
    <div id="container1">
        <apex:canvasApp applicationName="myApp" containerId="container1"/>
    </div>
</apex:page>
```

```
<apex:page>
    <apex:canvasApp applicationName="myApp" containerId="container1"/>
    <div id="container1">
    </div>
</apex:page>
```

## Related Topics

- Returning Fields in the Record Object (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_record_fields.htm)
- Canvas Apps and Visualforce Pages (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)
- Visualforce Page Code Examples (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_code_example.htm)
