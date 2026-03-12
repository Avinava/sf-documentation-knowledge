---
title: "Get Embedded Service Configuration"
domain: rest-api
topic: get-embedded-service-configuration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.538Z
estimatedTokens: 153
keywords: [Get, Embedded, Service, Configuration, values, deployment, configuration, including, branding, colors, font, site, URL., resource, REST, API, version, 45.0, later., Syntax]
---

# Get Embedded Service Configuration

> Get the values for your Embedded Service deployment configuration, including the
    branding colors, font, and site URL. This resource is available in REST API version 45.0 and
    later.

# Get Embedded Service Configuration

Get the values for your Embedded Service deployment configuration, including the branding colors, font, and site URL. This resource is available in REST API version 45.0 and later.

You must be logged in to the account that owns the EmbeddedServiceConfigDeveloperName you are querying.

## Syntax

URI

/services/data/vXX.X/support/embeddedservice/configuration/embeddedServiceConfigDeveloperName

Formats

JSON

HTTP method

GET

Authentication

Authorization: Bearer token

Request parameters

None

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/support/embeddedservice/configuration/TestOne -H "Authorization: Bearer token"
```

```
{
  "embeddedServiceConfig" : {
    "areGuestUsersAllowed" : false,
    "authMethod" : "CustomLogin",
    "embeddedServiceBranding" : {
      "contrastInvertedColor" : "#ffffff",
      "contrastPrimaryColor" : "#333333",
      "font" : "Salesforce Sans",
      "height" : 498,
      "navBarColor" : "#222222",
      "primaryColor" : "#222222",
      "secondaryColor" : "#005290",
      "width" : 320
    },
    "embeddedServiceLiveAgent" : {
      "avatarImg" : "",
      "embeddedServiceQuickActions" : [ {
        "order" : 1,
        "quickActionDefinition" : "Snapins_Case_OfflineCaseQuickAction_08hRM00000000cC",
        "quickActionType" : "OfflineCase"
      }, {
        "order" : 1,
        "quickActionDefinition" : "Snapins_Contact_PrechatQuickAction_08hRM00000000RC",
        "quickActionType" : "Prechat"
      }, {
        "order" : 2,
        "quickActionDefinition" : "Snapins_Case_PrechatQuickAction_08hRM00000000RC",
        "quickActionType" : "Prechat"
      } ],
      "enabled" : true,
      "fontSize" : "Medium",
      "headerBackgroundImg" : "https://google.com/img/headerBgImgUrl.png",
      "isOfflineCaseEnabled" : true,
      "isQueuePositionEnabled" : true,
      "liveChatButton" : "573RM0000004GGf",
      "liveChatDeployment" : "572RM0000004CDV",
      "offlineCaseBackgroundImg" : "https://google.com/img/offlineBgImgUrl.png",
      "prechatBackgroundImg" : "https://google.com/img/prechatBgImgUrl.png",
      "prechatEnabled" : true,
      "scenario" : "Service",
      "smallCompanyLogoImg" : "https://google.com/img/logoImgUrl.png",
      "waitingStateBackgroundImg" : "https://google.com/img/bgImgUrl.png"
      
    },
    "shouldHideAuthDialog" : false,
    "siteUrl" : "https://snapins-15f082fb956-15fbc261d27.stmfa.stm.force.com/napili2"
  }
}
```
