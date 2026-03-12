---
title: "Record"
domain: platform-connect
topic: record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.627Z
estimatedTokens: 632
keywords: [Record, JSON-formatted, canvas, app, appears, standard, Account, custom, Warehouse__c, doesn’t, appear, pub]
---

# Record

> The Record object is a JSON-formatted object that contains information about the
                object on which the canvas app appears. This could be a standard object like Account or a custom object like Warehouse__c. If the canvas app doesn’t
                appear on an object page or in the pub

# Record

The Record object is a JSON-formatted object that contains information about the object on which the canvas app appears. This could be a standard object like Account or a custom object like Warehouse\_\_c. If the canvas app doesn’t appear on an object page or in the publisher or feed associated with an object, then the Record object is empty.

This object contains the [Attributes](atlas.en-us.platform_connect.meta/platform_connect/attributes_object.htm) object.

| Field | Description |
| --- | --- |
| Id | The ID of the related object. For example, if the canvas app appears on an Account page, this field contains the AccountId. |

If the canvas app appears on a Visualforce page through use of the <apex:canvasApp> component, and that Visualforce page is associated with an object (placed on the page layout, for example), you can use the entityFields attribute on the component to return specific fields or all fields from the related object.

The following code snippet shows an example of the Record object returned from a canvas app that appears on an Account page. In this example, the Phone, Fax, and BillingCity fields were specified in the entityFields attribute.

```

```

-   **[Attributes](atlas.en-us.platform_connect.meta/platform_connect/attributes_object.htm)**

-   **[Record Object Examples](atlas.en-us.platform_connect.meta/platform_connect/record_object_examples.htm)**
    These code examples demonstrate how the Record object contains different information depending on whether your canvas app appears in the publisher or the feed.

#### See Also

-   [Environment](atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)

-   [Attributes](atlas.en-us.platform_connect.meta/platform_connect/attributes_object.htm)

-   [Record Object Examples](atlas.en-us.platform_connect.meta/platform_connect/record_object_examples.htm "These code examples demonstrate how the Record object contains different information depending on whether your canvas app appears in the publisher or the feed.")

-   [Returning Fields in the Record Object](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_record_fields.htm "When you use the <apex:canvasApp> component to display a canvas app on a Visualforce page, and that page is associated with an object (placed on the page layout, for example), you can specify fields to be returned from the related object. To do this, use the entityFields attribute. You can use this attribute in one of the following ways.")

## Code Examples

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

## Related Topics

- Attributes (atlas.en-us.platform_connect.meta/platform_connect/attributes_object.htm)
- Record Object Examples (atlas.en-us.platform_connect.meta/platform_connect/record_object_examples.htm)
- Environment (atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)
- Returning Fields in the Record Object (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_record_fields.htm)
