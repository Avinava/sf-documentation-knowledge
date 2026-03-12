---
title: "Returning Fields in the Record Object"
domain: platform-connect
topic: returning-fields-in-the-record-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.321Z
estimatedTokens: 489
keywords: [Returning, Record, <apex, canvasApp>, component, display, canvas, app, Visualforce, associated, placed, layout, specify, entityFields, attribute]
---

# Returning Fields in the Record Object

> When you use the <apex:canvasApp> component
        to display a canvas app on a Visualforce page, and that page is associated with an object
        (placed on the page layout, for example), you can specify fields to be returned from the
        related object. To do this, use the entityFields
        attribute. You can use this attribute in one of the following ways.

# Returning Fields in the Record Object

When you use the <apex:canvasApp> component to display a canvas app on a Visualforce page, and that page is associated with an object (placed on the page layout, for example), you can specify fields to be returned from the related object. To do this, use the entityFields attribute. You can use this attribute in one of the following ways.

## Return Specific Object Fields

You can return specific object fields in the Record object by setting the entityFields attribute to a comma-separated list of field names. If there’s an invalid field name in the list, then that field name is ignored and the valid fields are returned in the Record object.

```

```

returns a Record object that looks like this:

```

```

## Return All Object Fields

You can return all object fields in the Record object by setting the entityFields attribute to the wildcard "\*".

```

```

returns a Record object that looks like this:

```

```

## Return the Id Field

If the <apex:canvasApp> component doesn’t have the entityFields attribute or if the attribute is blank, then only the Id field is returned in the Record object.

```

```

returns a Record object that looks like this:

```

```

#### See Also

-   [apex:canvasApp Component](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm "Use this component to display a canvas app on a Visualforce page. The table below lists the component attributes.")

-   [Record](atlas.en-us.platform_connect.meta/platform_connect/record_object.htm)

-   [Controlling Canvas App Behavior](atlas.en-us.platform_connect.meta/platform_connect/canvas_controlling_app_behavior.htm "To modify the default behavior of the signed request, you need to provide an Apex class that implements Canvas.CanvasLifecycleHandler.onRender() and associate this class with your canvas app. In your onRender() implementation, you can control app behavior with custom code.")

## Code Examples

```
<apex:canvasApp applicationName="MyApp" entityFields="Phone,Fax,BillingCity" containerId="canvasAppDiv"/>
```

```
"record":{
    "attributes":{
        "type":"Account",
        "url":"/services/data/v66.0/sobjects/Account/001xx000003DGWiAAO"
        },
    "Id":"001xx000003DGWiAAO",
    "Phone":"(555) 555-5555",
    "Fax":"(555) 555-5555",
    "BillingCity":"Seattle"
    }
```

```
<apex:canvasApp applicationName="MyApp" entityFields="*" containerId="canvasAppDiv"/>
```

```
"record":{
    "attributes":{
        "type":"Account",
        "url":"/services/data/v66.0/sobjects/Account/001xx000003DGWiAAO"
        },
    "Id":"001xx000003DGWiAAO",
    "IsDeleted":false,
    "MasterRecordId":null,
    "Name":"Edge Communications",
    "Type":"Customer - Channel",
    "ParentId":null,
    "BillingStreet":"123 Main Street",
    "BillingCity":"Seattle",
    "BillingState":"WA",
    "BillingPostalCode":"98121",
    "BillingCountry":"USA",
...
    }
```

```
<apex:canvasApp applicationName="MyApp" containerId="canvasAppDiv"/>
```

## Related Topics

- apex:canvasApp Component (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm)
- Record (atlas.en-us.platform_connect.meta/platform_connect/record_object.htm)
- Controlling Canvas App Behavior (atlas.en-us.platform_connect.meta/platform_connect/canvas_controlling_app_behavior.htm)
