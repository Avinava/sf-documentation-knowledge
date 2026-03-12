---
title: "CanvasRequest"
domain: platform-connect
topic: canvasrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.475Z
estimatedTokens: 301
keywords: [CanvasRequest, signed, authentication, canvas, app, receive, initial, POST, message, Salesforce, Context, Client, objects]
---

# CanvasRequest

> When you use a signed request for authentication in your canvas app, you receive a
                CanvasRequest object in the initial POST message from Salesforce. This object
                contains fields related to the request, and also contains the Context and Client objects. The
             

# CanvasRequest

When you use a signed request for authentication in your canvas app, you receive a CanvasRequest object in the initial POST message from Salesforce. This object contains fields related to the request, and also contains the [Context](atlas.en-us.platform_connect.meta/platform_connect/context_object.htm) and [Client](atlas.en-us.platform_connect.meta/platform_connect/client_object.htm) objects. The CanvasRequest object is returned in JSON format and contains the following fields.

| Field | Description |
| --- | --- |
| algorithm | The algorithm used to sign the request. |
| issuedAt | For internal use only. |
| userId | The context user’s ID. |

The following code snippet shows an example of the CanvasRequest object.

```

```

-   **[Client](atlas.en-us.platform_connect.meta/platform_connect/client_object.htm)**

-   **[Context](atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)**


#### See Also

-   [Objects](atlas.en-us.platform_connect.meta/platform_connect/objects_intro.htm)

-   [Client](atlas.en-us.platform_connect.meta/platform_connect/client_object.htm)

-   [Context](atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)

## Code Examples

```
{
    "context":
    {
        "application": 
        {
            "applicationId":"06Px000000003ed", 
            "authType":"SIGNED_REQUEST", 
            "canvasUrl":"http://MyDomainName.my.salesforce.com:8080
                /canvas_app_path/canvas_app.jsp", 
            "developerName":"my_java_app",
            "isInstalledPersonalApp": false, 
            "name":"My Java App", 
            "namespace":"org_namespace", 
            "options":[],
            "referenceId":"09HD00000000AUM", 
            "samlInitiationMethod":"None",
            "version":"1.0.0"
        },
        "user":
        {
            "accessibilityModeEnabled":false, 
            "currencyISOCode":"USD", 
            "email":"admin@6457617734813492.com", 
            "firstName":"Sean", 
            "fullName":"Sean Forbes", 
            "isDefaultNetwork":false, 
            "language":"en_US", 
            "lastName":"Forbes", 
            "locale":"en_US", 
            "networkId":"0DBxx000000001r", 
            "profileId":"00ex0000000jzpt", 
            "profilePhotoUrl":"/profilephoto/005/F", 
            "profileThumbnailUrl":"/profilephoto/005/T", 
            "roleId":null, 
            "siteUrl":"https://MyDomainName.my.site.com/", 
            "siteUrlPrefix":"/mySite", 
            "timeZone":"America/Los_Angeles", 
            "userId":"005x0000001SyyEAAS", 
            "userName":"admin@6457617734813492.com", 
            "userType":"STANDARD"
        }, 
        "environment": 
        { 
            "parameters":
            {
                "complex":
                {
                    "key1":"value1",
                    "key2":"value2"
                },
                "integer":10,
                "simple":"This is a simple string.",
                "boolean":true
            },
            "dimensions": 
            { 
                "clientHeight":"50px", 
                "clientWidth":"70px", 
                "height":"900px", 
                "width":"800px", 
                "maxHeight":"2000px",
                "maxWidth":"1000px"

            }, 
            "record": 
            {
                "attributes": 
                {
                    "type":"Account",
                    "url":"/services/data/v66.0/sobjects/Account/001xx000003DGWiAAO"
                },
                "Id":"001xx000003DGWiAAO",
                "Phone":"(555) 555-5555",
                "Fax":"(555) 555-5555",
                "BillingCity":"Seattle"
            },
            "displayLocation":"Chatter",
            "locationUrl":"https://salesforce.com/some/path/index.html", 
            "subLocation":null,
            "uiTheme":"Theme3",
            "version": 
            { 
                "api":"66.0", 
                "season":"SUMMER" 
            }, 
        }, 
        "organization":
        {
            "currencyIsoCode":"USD", 
            "multicurrencyEnabled":true, 
            "name":"Edge Communications", 
            "namespacePrefix":"org_namespace", 
            "organizationId":"00Dx00000001hxyEAA"
        },
        "links":
        {
            "chatterFeedItemsUrl":"/services/data/v66.0/chatter/feed-items", 
            "chatterFeedsUrl":"/services/data/v66.0/chatter/feeds", 
            "chatterGroupsUrl":"/services/data/v66.0/chatter/groups", 
            "chatterUsersUrl":"/services/data/v66.0/chatter/users", 
            "enterpriseUrl":"/services/Soap/c/66.0/00Dx00000001hxy", 
            "loginUrl":"http://MyDomainName.my.salesforce.com",
            "metadataUrl":"/services/Soap/m/66.0/00Dx00000001hxy", 
            "partnerUrl":"/services/Soap/u/66.0/00Dx00000001hxy", 
            "queryUrl":"/services/data/v66.0/query/", 
            "recentItemsUrl":"/services/data/v66.0/recent/", 
            "restUrl":"/services/data/v66.0/", 
            "searchUrl":"/services/data/v66.0/search/", 
            "sobjectUrl":"/services/data/v66.0/sobjects/", 
            "userUrl":"/005x0000001SyyEAAS" 
        }
    },
    "client":
    {
        "instanceId":"06Px000000002JZ", 
        "instanceUrl":"http://MyDomainName.my.salesforce.com:8080", 
        "oauthToken":"<SALESFORCE_ACCESS_TOKEN>", 
        "refreshToken":"<SALESFORCE_ACCESS_TOKEN>", 
        "targetOrigin":"http://MyDomainName.my.salesforce.com:8080"
    }, 
"algorithm":"HMACSHA256", 
"userId":"005x0000001SyyEAAS", 
"issuedAt":null
}
```

## Related Topics

- Context (atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)
- Client (atlas.en-us.platform_connect.meta/platform_connect/client_object.htm)
- Objects (atlas.en-us.platform_connect.meta/platform_connect/objects_intro.htm)
