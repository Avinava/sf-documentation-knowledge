---
title: "Context"
domain: platform-connect
topic: context
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.501Z
estimatedTokens: 739
keywords: [Context, Salesforce, exclude, portions, data, don’t, control, amount, that’s, excluded, implement, own, Canvas.CanvasLifecycleHandler, Apex, provide]
---

# Context

> You can request Salesforce exclude portions of the context data that you don’t need.
                To control the amount of data that’s excluded, you must implement your own
                Canvas.CanvasLifecycleHandler in Apex and provide a list of excluded context
                sections in you

# Context

When you add your canvas app as a connected app in Salesforce, you can retrieve information about the current environment by using the Context object. The Context object provides information to your app about how and by whom it’s being consumed. You can use this information to make subsequent calls for information and code your app so that it appears completely integrated with the Salesforce user interface. This object is returned in JSON format and contains the following objects:

-   [Application](atlas.en-us.platform_connect.meta/platform_connect/application_object.htm)—Information about the canvas app, such as version, access method, URL, and so on.
-   [Environment](atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)—Information about the environment, such as location, UI theme, and so on.
-   [Links](atlas.en-us.platform_connect.meta/platform_connect/links_object.htm)—Links, such as the metadata URL, user URL, Chatter groups URL, and so on. You can use these links to make calls into Salesforce from your app.
-   [Organization](atlas.en-us.platform_connect.meta/platform_connect/organization_object.htm)—Information about the organization, such as name, ID, currency code, and so on.
-   [User](atlas.en-us.platform_connect.meta/platform_connect/user_object.htm)—Information about the currently logged-in user, such as locale, name, user ID, email, and so on.

The following code is an example of the Context object. The Context object is returned in the CanvasRequest object when you authenticate using signed request. You can also explicitly make a call to get this object.

```

```

You can request Salesforce exclude portions of the context data that you don’t need. To control the amount of data that’s excluded, you must implement your own Canvas.CanvasLifecycleHandler in Apex and provide a list of excluded context sections in your implementation of excludeContextTypes().

-   **[Application](atlas.en-us.platform_connect.meta/platform_connect/application_object.htm)**

-   **[Environment](atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)**

-   **[Links](atlas.en-us.platform_connect.meta/platform_connect/links_object.htm)**

-   **[Organization](atlas.en-us.platform_connect.meta/platform_connect/organization_object.htm)**

-   **[User](atlas.en-us.platform_connect.meta/platform_connect/user_object.htm)**


#### See Also

-   [Client](atlas.en-us.platform_connect.meta/platform_connect/client_object.htm)

-   [Getting Context in Your Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_getting_context_code_example.htm)

-   [Filtering CanvasRequest Context Data](atlas.en-us.platform_connect.meta/platform_connect/canvas_filtering_context_data.htm "To filter out parts of the CanvasRequest Context data that gets sent to your canvas app, you need to provide an implementation of Canvas.CanvasLifecycleHandler.excludeContextTypes().")

## Code Examples

```
"context":{ 
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
        "samlInitiationMethod": "None",
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
        "parameters":{}, 
        "dimensions":
        {
            "clientHeight": "50px", 
            "clientWidth": "70px", 
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
        "locationUrl":"http://MyDomainName.my.salesforce.com:8080/canvas_app_path",
        "subLocation":null,
        "uiTheme":"Theme3",
        "version":
        {
            "api":"66.0",
            "season":"SUMMER"
         }
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
        "restUrl":"/services/data/v66.0/", 
        "recentItemsUrl":"/services/data/v66.0/recent/", 
        "searchUrl":"/services/data/v66.0/search/", 
        "sobjectUrl":"/services/data/v66.0/sobjects/", 
        "userUrl":"/005x0000001SyyEAAS" 
    }
}
```

## Related Topics

- Application (atlas.en-us.platform_connect.meta/platform_connect/application_object.htm)
- Environment (atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)
- Links (atlas.en-us.platform_connect.meta/platform_connect/links_object.htm)
- Organization (atlas.en-us.platform_connect.meta/platform_connect/organization_object.htm)
- User (atlas.en-us.platform_connect.meta/platform_connect/user_object.htm)
- Client (atlas.en-us.platform_connect.meta/platform_connect/client_object.htm)
- Getting Context in Your Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_getting_context_code_example.htm)
- Filtering CanvasRequest Context Data (atlas.en-us.platform_connect.meta/platform_connect/canvas_filtering_context_data.htm)
