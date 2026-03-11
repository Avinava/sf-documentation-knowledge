---
title: "CustomOneTimePasswordDeliveryHandler Example Implementation"
domain: apex-reference
topic: customonetimepassworddeliveryhandler-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.605Z
keywords: [CustomOneTimePasswordDeliveryHandler, Example, Implementation]
---

# CustomOneTimePasswordDeliveryHandler Example Implementation

## CustomOneTimePasswordDeliveryHandler Example Implementation

This example implements the Auth.CustomOneTimePasswordDeliveryHandler interface. For a detailed explanation of this example, see [Example: Custom One-Time Password Delivery Handler](https://help.salesforce.com/s/articleView?id=xcloud.custom_otp_provider_example.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

global class TelesignMessaging implements Auth.CustomOneTimePasswordDeliveryHandler{ global Auth.CustomOneTimePasswordDeliveryResult sendOneTimePassword(Id userId, String phoneNumber, String oneTimePassword, String defaultText, Id networkId, String experienceId){ //Send the message from Telesign HttpRequest request = new HttpRequest(); //The commented-out code on the next line isn't necessary if you use named credentials //request.setEndpoint('https://rest-ww.telesign.com/v1/messaging'); request.setEndpoint('callout:Telesign\_SMS\_Named'); request.setMethod('POST'); String requestBody = 'is\_primary=true&phone\_number=' + phoneNumber + '&message='+'Custom OTP%20'+ oneTimePassword+'; '+defaultText+'&message\_type=OTP'; request.setHeader('accept', 'application/json'); request.setHeader('content-type', 'application/x-www-form-urlencoded'); //The commented-out code on the next line isn't necessary if you use named credentials //request.setHeader('authorization', 'Basic <Base64-encoded Telesign customer ID:API key>'); request.setBody(requestBody); HttpResponse response = new Http().send(request); // Handle the response as needed return Auth.CustomOneTimePasswordDeliveryResult.SUCCESS; } }