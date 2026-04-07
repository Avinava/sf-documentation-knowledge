---
title: "POST /ott/v1/registration"
domain: mc-apis
topic: post-ottv1registration
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:15.001Z
estimatedTokens: 1534
keywords: [POST, ott, registration, Register, specific, platform, try, Messenger, LINE, Channel, resource, already, exists, Marketing, Cloud, payload, override, **Overview**, Success, Error, Possible, Errors]
---

> Register a property for a specific OTT platform. If you try to register a Messenger Page ID or LINE Channel ID  resource that already exists in Marketing Cloud, the details in the request payload override the details in Marketing Cloud.

# POST /ott/v1/registration

## **Overview**

Register a property for a specific OTT platform. If you try to register a Messenger Page ID or LINE Channel ID resource that already exists in Marketing Cloud, the details in the request payload override the details in Marketing Cloud.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| ottPlatformName | string | Required | Indicate the name of the OTT network the resource is being registered with values: line, messenger. |
| ottPlatformAttributes | object | Required | Object containing OTT platform attributes. |
| ottPlatformAttributes.applicationId | string |  | Facebook Application Id. Required for registering Messenger resource. |
| ottPlatformAttributes.applicationSecret | string |  | Facebook Application Secret. Required for registering Messenger resource. |
| ottPlatformAttributes.pageId | string |  | Facebook Page Id. Required for registering Messenger resource. |
| ottPlatformAttributes.pageName | string |  | Facebook Page Name. Required for registering Messenger resource. |
| ottPlatformAttributes.pageAccessToken | string |  | Access Token required to authenticate send messages requests to OTT networks. |
| ottPlatformAttributes.endpointUrl | string |  | Send API url of the OTT network. |
| ottPlatformAttributes.callbackVerifyToken | string |  | Facebook Verify Token need to verify callback events. |
| ottPlatformAttributes.isActive | integer |  | Indicate if the OTT resource is active with values: 0 (Inactive), 1 (Active). |
| ottPlatformAttributes.channelId | string |  | LINE channel Id. Required for registering LINE resource. |
| ottPlatformAttributes.channelName | string |  | LINE channel name. Required for registering LINE resource |
| ottPlatformAttributes.channelSecret | string |  | LINE channel secret. Required for registering LINE resource. |
| ottPlatformAttributes.customerConnectSecret | string |  | LINE Customer Connect Secret needed for validating LINE inbound events when using Switcher API. |
| ottPlatformAttributes.isTransactional | integer |  | Indicate if LINE channel is Transactional or Reseller with values: 0 (Reseller), 1 (Transactional). |
| ottPlatformAttributes.isTestChannel | integer |  | Indicate if LINE channel is a Test channel with values: 0 (Not a test channel), 1 (test channel). |

## Usage

### Example Request: Register a Messenger Resource

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/registration
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ottPlatformName" : "messenger",
    "ottPlatformAttributes" : {
        "applicationId" : "1093076390764037",
        "applicationSecret" : "03d537gg656gvkbe9b430f002e9c4517",
        "pageId" : "1732555047025799",
        "pageName" : "SFMC Engineers",
        "pageAccessToken" : "someaccesstoken4fasdcruib213123knubkdnfisdubnu12312ub3pijnb",
        "endpointUrl" : "https://graph.facebook.com/v2.6/me/messages",
        "callbackVerifyToken" : "this_is_the_verify_token",
        "isActive": true
    }
}
```

### Example Request: Register a LINE Resource

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/registration
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ottPlatformName" : "line",
    "ottPlatformAttributes" : {
        "channelId" : "23493453984234345",
        "channelName" : "SFMC Engineers",
        "channelSecret" : "03d537gg656gvkbe9b430f002e9c4517",
        "customerConnectSecret" : "31234arajcauoherbasuhb213ijqjohbjhb123",
        "endpointUrl" : "https://example.com/1732555047025799",
        "isTransactional" : true,
        "isTestChannel": false,
        "isActive": true
    }
}
```

### Example Success Response

```
HTTP/1.1 201 Created
```

### Example Error Response

```
HTTP/1.1 400 Bad Request

{
    "message": "Please fix the following errors",
    "errorcode": 10006,
    "documentation": "",
    "validationErrors": [
        {
            "message": "EndpointUrl must be provided",
            "errorcode": 10002,
            "documentation": ""
        },
        {
            "message": "OttPlatformName must be provided",
            "errorcode": 10002,
            "documentation": ""
        }
    ]
}
```

#### Possible Errors

| Message | Details |
| --- | --- |
| OttPlatformName is invalid | The ottPlatformName is invalid in the request payload. The only supported values are line and messenger. |
| OttPlatformAttributes is invalid | The ottPlatformAttribute object is empty or missing in the request payload. |
| EndpointUrl must be provided | endpointUrl is empty or missing in the registration request payload. |
| IsActive must be provided | isActive is empty or missing in the registration request payload. |
| ApplicationId must be provided | MESSENGER only: applicationId is empty or missing in the registration request payload. |
| ApplicationSecret must be provided | MESSENGER only: applicationSecret is empty or missing in the registration request payload. |
| PageId must be provided | MESSENGER only: pageId is empty or missing in the registration request payload. |
| PageName must be provided | MESSENGER only: pageName is empty or missing in the registration request payload. |
| PageAccessToken must be provided | MESSENGER only: pageAccessToken is empty or missing in the registration request payload. |
| CallbackVerifyToken must be provided | MESSENGER only: callbackVerifyToken is empty or missing in the registration request payload. |
| ChannelId must be provided | LINE only: channelId is empty or missing in the registration request payload. |
| ChannelName must be provided | LINE only: channelName is empty or missing in the registration request payload. |
| ChannelSecret must be provided | LINE only: channelSecret is empty or missing in the registration request payload. |
| isTransactional must be provided | LINE only: isTransactional is empty or missing in the registration request payload. |
| isTestChannel must be provided | LINE only: isTestChannel is empty or missing in the registration request payload. |

Last Updated: Jun 8, 2021
