---
title: "SurveyInvitationLinkShortener Interface"
domain: apex-reference
topic: surveyinvitationlinkshortener-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.145Z
estimatedTokens: 623
keywords: [SurveyInvitationLinkShortener, provide, factory, Salesforce, call, create, instances, custom, SurveyInvitationLinkShortener., Usage, Special, access, rules, getShortenedURL, var1, Example, Implementation]
---

# SurveyInvitationLinkShortener Interface

> Use this interface to provide a class factory that Salesforce can call
      to create instances of your custom SurveyInvitationLinkShortener.

# SurveyInvitationLinkShortener Interface

Use this interface to provide a class factory that Salesforce can call to create instances of your custom SurveyInvitationLinkShortener.

## Namespace

[sfdc\_surveys](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_surveys.htm "The sfdc_surveys namespace provides an interface for shortening survey invitations.")

## Usage

Implement an instance of the SurveyInvitationLinkShortener interface to shorten the survey invitation that can be distributed as short URLs over customer engaged channels, such as SMS, WhatsApp, or Facebook Messenger.

## Special access rules

To implement this interface, you must have the Salesforce Feedback Management license enabled in your Salesforce organization.

-   **[SurveyInvitationLinkShortener Methods](atlas.en-us.apexref.meta/apexref/apex_interface_sfdc_surveys_SurveyInvitationLinkShortener.htm#apex_sfdc_surveys_SurveyInvitationLinkShortener_methods)**

-   **[SurveyInvitationLinkShortener Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_sfdc_surveys_SurveyInvitationLinkShortener.htm#apex_interface_sfdc_surveys_SurveyInvitationLinkShortener_Example)**


## SurveyInvitationLinkShortener Methods

The following are methods for SurveyInvitationLinkShortener.

-   **[getShortenedURL(var1)](atlas.en-us.apexref.meta/apexref/apex_interface_sfdc_surveys_SurveyInvitationLinkShortener.htm#apex_sfdc_surveys_SurveyInvitationLinkShortener_getShortenedURL)**
    Returns a shortened URL for a given survey invitation.

### getShortenedURL(var1)

Returns a shortened URL for a given survey invitation.

#### Signature

public String getShortenedURL(String var1)

#### Parameters

var1

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## SurveyInvitationLinkShortener Example Implementation

This is an example implementation of the sfdc\_surveys.SurveyInvitationLinkShortener interface.

This sample code uses Named Credentials for authentication. For more information on Named Credentials, see [Named Credentials as Callout Endpoints](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "HTML (New Window)").

```

```

## Code Examples

```apex
public class SurveyInvitationLinkShortenerImpl implements sfdc_surveys.SurveyInvitationLinkShortener {
   public String getShortenedURL(String invitationURL) {
      return shortenUrlUsingBitlyService(invitationURL);
   }
   public String shortenUrlUsingBitlyService(String invitationURL) {
      HttpRequest request = new HttpRequest();
      request.setEndpoint('callout:bitly/v4/shorten');
      request.setMethod('POST');
      request.setHeader('Authorization', 'Bearer {!$Credential.Password}');
      request.setHeader('Accept', 'application/json');
      request.setHeader('Content-Type', 'application/json');
      request.setBody(JSON.serialize(new Map<String, Object>{
      'group_guid' => '{!$Credential.UserName}',
      'long_url' => invitationURL
      }));
      
      Http http = new Http();
      HttpResponse res = http.send(request);
      
      Object result = JSON.deserializeUntyped(res.getBody());
      if (result instanceof Map<String, Object>) {
         Map<String, Object> resultMap = (Map<String, Object>) result;
         Object shortenedLinkVal = resultMap.get('link');
         if(shortenedLinkVal != null && shortenedLinkVal instanceof String) {
            return (String) shortenedLinkVal;
         }
      }
      return invitationURL;
   }
}
```

## Related Topics

- sfdc_surveys (atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_surveys.htm)
- SurveyInvitationLinkShortener Methods (atlas.en-us.apexref.meta/apexref/apex_interface_sfdc_surveys_SurveyInvitationLinkShortener.htm)
- SurveyInvitationLinkShortener Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_sfdc_surveys_SurveyInvitationLinkShortener.htm)
- getShortenedURL(var1) (atlas.en-us.apexref.meta/apexref/apex_interface_sfdc_surveys_SurveyInvitationLinkShortener.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
