---
title: "ExternalEmailServices Class"
domain: apex-reference
topic: externalemailservices-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.179Z
estimatedTokens: 456
namespace: ConnectApi
keywords: [ExternalEmailServices, Access, information, integration, external, email, services, such, sending, within, Salesforce, through, account., getUserOauthInfo, landingPage, API, Version, Requires, Chatter]
---

# ExternalEmailServices Class

> Access information about integration with external email services, such as sending email
  within Salesforce through an
  external email account.

**Namespace:** `ConnectApi`

# ExternalEmailServices Class

Access information about integration with external email services, such as sending email within Salesforce through an external email account.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ExternalEmailServices Methods

These methods are for ExternalEmailService. All methods are static.

-   **[getUserOauthInfo(landingPage)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalEmailService_static_methods.htm#apex_ConnectAPI_ExternalEmailService_getUserOauthInfo_1)**
    Get information about whether an external email service has been authorized to send email on behalf of a user.

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

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getUserOauthInfo(landingPage) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalEmailService_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.UserOauthInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_oauth_user.htm)
