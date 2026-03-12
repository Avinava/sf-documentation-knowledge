---
title: "AuthRequestHandler Interface"
domain: apex-reference
topic: authrequesthandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.894Z
estimatedTokens: 606
namespace: RichMessaging
keywords: [AuthRequestHandler, handle, authorization, request, responses., Usage, handleAuthRequest, var1, Example, Implementation]
---

# AuthRequestHandler Interface

> Use this interface to handle authorization request responses.

**Namespace:** `RichMessaging`

# AuthRequestHandler Interface

Use this interface to handle authorization request responses.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

## Usage

When using this interface, the following limits are overridden. See [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm) in the Apex Developer Guide.

| Limit Name | Overridden Value |
| --- | --- |
| Total number of SOQL queries issued | 2 |
| Total number of records retrieved by a single SOSL query | 2 |
| Total number of DML statements issued | 1 |
| Total number of records processed as a result of DML statements | 1 |
| Total number of callouts (HTTP requests or web services calls) in a transaction | 2 |

-   **[AuthRequestHandler Methods](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_AuthRequestHandler.htm#apex_RichMessaging_AuthRequestHandler_methods)**

-   **[AuthRequestHandler Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_AuthRequestHandler.htm#apex_interface_RichMessaging_AuthRequestHandler_Example)**


## AuthRequestHandler Methods

The following are methods for AuthRequestHandler.

-   **[handleAuthRequest(var1)](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_AuthRequestHandler.htm#apex_RichMessaging_AuthRequestHandler_handleAuthRequest)**
    Handles authorization request response.

### handleAuthRequest(var1)

Handles authorization request response.

#### Signature

public RichMessaging.AuthRequestResult handleAuthRequest(RichMessaging.AuthRequestResponse var1)

#### Parameters

var1

Type: [RichMessaging.AuthRequestResponse](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_class_RichMessaging_AuthRequestResponse "This class contains authorization request response data.")

The authorization response.

#### Return Value

Type: [RichMessaging.AuthRequestResult](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm#apex_class_RichMessaging_AuthRequestResult "This class contains the result from handling the authorization request response.")

## AuthRequestHandler Example Implementation

This is an example implementation of the RichMessaging.AuthRequestHandler interface.

```

```

## Code Examples

```apex
global class SampleAuthRequestHandler implements RichMessaging.AuthRequestHandler {

    global RichMessaging.AuthRequestResult handleAuthRequest(RichMessaging.AuthRequestResponse authReqResponse) {

        // Get contact email from messaging session
        String sessionId = authReqResponse.getContextRecordId();
        String contactEmail = [select MessagingSession.EndUserContact.Email from MessagingSession where id = :sessionId].EndUserContact.Email;

        RichMessaging.AuthRequestResultStatus authRequestStatus = RichMessaging.AuthRequestResultStatus.DECLINED;
        DateTime dt = DateTime.now();
        
        // Get user info if there's a valid contact email
        if (!String.isBlank(contactEmail)) {
            String userInfoUrl = 'https://api.MY_AUTH_DOMAIN.com/v1/';

            HttpRequest req = new HttpRequest(); 

            req.setEndpoint(userInfoUrl); 
            req.setHeader('Content-Type','application/json'); 
            req.setMethod('GET'); 
            req.setHeader('Authorization', 'Bearer '+authReqResponse.getAccessToken());
            Http http = new Http(); 
            HTTPResponse res = http.send(req); 

            String responseBody = res.getBody();

            UserWrapper userInfo = (UserWrapper)System.JSON.deserialize(responseBody, UserWrapper.class);

            if (userInfo.email == contactEmail) {
                authRequestStatus = RichMessaging.AuthRequestResultStatus.AUTHENTICATED;
                dt = dt.addHours(6);
            }
         }
 
        return new RichMessaging.AuthRequestResult(
            null,
            authRequestStatus,
            dt);
    }
 
    public class UserWrapper{  
        public String href;  
        public String display_name; 
        public String type;  
        public String country; 
        public String product;
        public String email;  
    }
}
```

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- AuthRequestHandler Methods (atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_AuthRequestHandler.htm)
- AuthRequestHandler Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_AuthRequestHandler.htm)
- handleAuthRequest(var1) (atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_AuthRequestHandler.htm)
- RichMessaging.AuthRequestResponse (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm)
- RichMessaging.AuthRequestResult (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm)
