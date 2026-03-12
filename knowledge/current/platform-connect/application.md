---
title: "Application"
domain: platform-connect
topic: application
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.212Z
estimatedTokens: 469
keywords: [Application, JSON-formatted, signed, Context, specific, canvas, app, obtained, you’ve, added, connected, Salesforce, Setup]
---

# Application

> The Application object is a JSON-formatted object returned by
                the signed request in the Context object. The
                Application object contains specific canvas app information obtained after
                you’ve added your app as a connected app in Salesforce from Setup by 

# Application

The Application object is a JSON-formatted object returned by the signed request in the [Context](atlas.en-us.platform_connect.meta/platform_connect/context_object.htm) object. The Application object contains specific canvas app information obtained after you’ve added your app as a connected app in Salesforce from Setup by entering Connected Apps in the Quick Find box, then selecting **Connected Apps**.

| Field | Description |
| --- | --- |
| applicationId | The ID of the canvas app. |
| authType | The access method of the canvas app. You specify this value when you expose the canvas app by creating a connected app. |
| canvasUrl | The URL of the canvas app, for example: http://instance.salesforce.com:8080/canvas_app_path/canvas_app.jsp. |
| developerName | The internal name of the canvas app. You specify this value in the API Name field when you expose the canvas app by creating a connected app. |
| name | The name of the canvas app. |
| namespace | The Salesforce namespace prefix associated with the canvas app. |
| options | An array that can contain one, two, or three of these values:HideHeader—Hides the publisher header which contains the “What are you working on?” text. This value is only used when the canvas app appears in the publisher.HideShare—Hides the publisher Share button. This value is only used when the canvas app appears in the publisher.PersonalEnabled—Enables the canvas app to be installed by users as a canvas personal app. |
| referenceId | The unique ID of the canvas app definition. Used internally. |
| version | The version of the canvas app. This value changes after you update and re-publish a canvas app in an organization. |

The following code snippet shows an example of the Application object.

```

```

#### See Also

-   [Context](atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)

## Code Examples

```
"application": 
{
    "applicationId":"06Px000000003ed", 
    "authType":"SIGNED_REQUEST", 
    "canvasUrl":"http://instance.salesforce.com:8080/canvas_app_path/canvas_app.jsp", 
    "developerName":"my_java_app",    
    "isInstalledPersonalApp": false, 
    "name":"My Java App", 
    "namespace":"org_namespace", 
    "options":["HideShare", "HideHeader"],
    "referenceId":"09HD00000000AUM", 
    "samlInitiationMethod":"None",
    "version":"1.0.0"
}
```

## Related Topics

- Context (atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)
