---
title: "CustomOneTimePasswordDeliveryHandler Interface"
domain: apex-reference
topic: customonetimepassworddeliveryhandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.835Z
estimatedTokens: 1349
namespace: Auth
keywords: [CustomOneTimePasswordDeliveryHandler, custom, SMS, provider, send, one-time, passwords, OTPs, Experience, Cloud, identity, verification, implements, sendOneTimePassword, userId]
---

# CustomOneTimePasswordDeliveryHandler Interface

> To use a custom SMS provider to send one-time passwords (OTPs) for Experience Cloud
    identity verification, create a class that implements the Auth.CustomOneTimePasswordDeliveryHandler interface.

**Namespace:** `Auth`

# CustomOneTimePasswordDeliveryHandler Interface

To use a custom SMS provider to send one-time passwords (OTPs) for Experience Cloud identity verification, create a class that implements the Auth.CustomOneTimePasswordDeliveryHandler interface.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

-   **[CustomOneTimePasswordDeliveryHandler Methods](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_CustomOneTimePasswordDeliveryHandler.htm#apex_Auth_CustomOneTimePasswordDeliveryHandler_methods)**

-   **[CustomOneTimePasswordDeliveryHandler Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_CustomOneTimePasswordDeliveryHandler.htm#apex_interface_Auth_CustomOneTimePasswordDeliveryHandler_Example)**


## CustomOneTimePasswordDeliveryHandler Methods

The following are methods for CustomOneTimePasswordDeliveryHandler.

-   **[sendOneTimePassword(userId, phoneNumber, oneTimePassword, networkId, defaultText, expId)](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_CustomOneTimePasswordDeliveryHandler.htm#apex_Auth_CustomOneTimePasswordDeliveryHandler_sendOneTimePassword)**
    Calls out to an external SMS messaging provider to send a Salesforce one-time password to an external user for identity verification. Returns an Auth.CustomOneTimePasswordDeliveryResult indicating whether the provider sent the message.

### sendOneTimePassword(userId, phoneNumber, oneTimePassword, networkId, defaultText, expId)

Calls out to an external SMS messaging provider to send a Salesforce one-time password to an external user for identity verification. Returns an Auth.CustomOneTimePasswordDeliveryResult indicating whether the provider sent the message.

#### Signature

public Auth.CustomOneTimePasswordDeliveryResult sendOneTimePassword(Id userId, String phoneNumber, String oneTimePassword, String defaultText, Id networkId, String experienceId)

#### Parameters

userId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

ID of the external user.

phoneNumber

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The user’s phone number. The phone number isn't necessarily verified by Salesforce.

oneTimePassword

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The OTP that the user receives.

networkId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

defaultText

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The content of the default SMS message that the user receives. You can create custom messages instead of sending the default. For example, write code to send custom messages based on the Experience Cloud site ID.

expId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A custom value that determines what the user experiences.

#### Return Value

Type: [Auth.CustomOneTimePasswordDeliveryResult](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_CustomOneTimePasswordDeliveryResult.htm "Indicates the status of an attempt to send a one-time password (OTP) to an external user via a custom messaging provider.")

## CustomOneTimePasswordDeliveryHandler Example Implementation

This example implements the Auth.CustomOneTimePasswordDeliveryHandler interface. For a detailed explanation of this example, see [Example: Custom One-Time Password Delivery Handler](https://help.salesforce.com/s/articleView?id=xcloud.custom_otp_provider_example.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

global class TelesignMessaging implements Auth.CustomOneTimePasswordDeliveryHandler{ global Auth.CustomOneTimePasswordDeliveryResult sendOneTimePassword(Id userId, String phoneNumber, String oneTimePassword, String defaultText, Id networkId, String experienceId){ //Send the message from Telesign HttpRequest request = new HttpRequest(); //The commented-out code on the next line isn't necessary if you use named credentials //request.setEndpoint('https://rest-ww.telesign.com/v1/messaging'); request.setEndpoint('callout:Telesign\_SMS\_Named'); request.setMethod('POST'); String requestBody = 'is\_primary=true&phone\_number=' + phoneNumber + '&message='+'Custom OTP%20'+ oneTimePassword+'; '+defaultText+'&message\_type=OTP'; request.setHeader('accept', 'application/json'); request.setHeader('content-type', 'application/x-www-form-urlencoded'); //The commented-out code on the next line isn't necessary if you use named credentials //request.setHeader('authorization', 'Basic <Base64-encoded Telesign customer ID:API key>'); request.setBody(requestBody); HttpResponse response = new Http().send(request); // Handle the response as needed return Auth.CustomOneTimePasswordDeliveryResult.SUCCESS; } }

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- CustomOneTimePasswordDeliveryHandler Methods (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_CustomOneTimePasswordDeliveryHandler.htm)
- CustomOneTimePasswordDeliveryHandler Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_CustomOneTimePasswordDeliveryHandler.htm)
- sendOneTimePassword(userId, phoneNumber, oneTimePassword, networkId, defaultText, expId) (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_CustomOneTimePasswordDeliveryHandler.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Auth.CustomOneTimePasswordDeliveryResult (atlas.en-us.apexref.meta/apexref/apex_enum_Auth_CustomOneTimePasswordDeliveryResult.htm)
