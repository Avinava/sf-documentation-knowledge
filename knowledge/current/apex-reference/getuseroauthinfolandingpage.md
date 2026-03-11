---
title: "getUserOauthInfo(landingPage)"
domain: apex-reference
topic: getuseroauthinfolandingpage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.107Z
keywords: [getUserOauthInfo, landingPage, Get, information, whether, external, email, service, authorized, send, behalf, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getUserOauthInfo(landingPage)

> Get information about whether an external email service has been authorized to send email
    on behalf of a user.

### getUserOauthInfo(landingPage)

Get information about whether an external email service has been authorized to send email on behalf of a user.

#### API Version

37.0

#### Requires Chatter

No

#### Signature

public static getUserOauthInfo(String landingPage)

#### Parameters

landingPage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The landing page that the user starts on when they are finished with the OAuth authorization process.

#### Return Value

Type: [ConnectApi.UserOauthInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_oauth_user.htm "User OAuth information.")

#### See Also

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")