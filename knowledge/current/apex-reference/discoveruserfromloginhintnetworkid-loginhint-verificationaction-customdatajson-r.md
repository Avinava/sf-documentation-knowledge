---
title: "discoverUserFromLoginHint(networkId, loginHint, verificationAction,
      customDataJson, requestAttributes)"
domain: apex-reference
topic: discoveruserfromloginhintnetworkid-loginhint-verificationaction-customdatajson-r
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.618Z
keywords: [discoverUserFromLoginHint, networkId, loginHint, verificationAction, customDataJson, requestAttributes, Finds, user's, Salesforce, account, based, user, information, such, their, email, address, phone, number, data]
---

# discoverUserFromLoginHint(networkId, loginHint, verificationAction,
      customDataJson, requestAttributes)

> Finds a user's Salesforce account based on user information, such as their email address,
    phone number, or other data, that's passed to a Salesforce endpoint during headless login,
    passwordless login, and forgot password flows.

### discoverUserFromLoginHint(networkId, loginHint, verificationAction, customDataJson, requestAttributes)

Finds a user's Salesforce account based on user information, such as their email address, phone number, or other data, that's passed to a Salesforce endpoint during headless login, passwordless login, and forgot password flows.

#### Signature

public Auth.HeadlessUserDiscoveryResponse discoverUserFromLoginHint(Id networkId, String loginHint, Auth.VerificationAction verificationAction, String customDataJson, Map<String,String> requestAttributes)

#### Parameters

networkId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the Experience Cloud site where your headless app sends requests.

loginHint

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Information about the user that Salesforce can use to find their associated account, such as their email address or phone number.

verificationAction

Type: [Auth.VerificationAction](atlas.en-us.apexref.meta/apexref/apex_enum_Auth_VerificationAction.htm "Indicates the method that you use to send a one-time password (OTP) to a user during the headless passwordless login flow.")

The verification method that's used to log the user in, either email or SMS.

customDataJson

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Custom user data, such as first name, that you collect when the user logs in to your headless app.

requestAtttibutes

Type: [Map](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map)<[String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string),[String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string)\>

Information about the login request that's based on the user’s browser state when accessing the login page. requestAttributes passes in the CommunityUrl, IpAddress, UserAgent, Platform, Application, City, Country, and Subdivision values. The City, Country, and Subdivision values come from IP geolocation.

#### Return Value

Type: [Auth.HeadlessUserDiscoveryResponse](atlas.en-us.apexref.meta/apexref/apex_class_Auth_HeadlessUserDiscoveryResponse.htm#apex_class_Auth_HeadlessUserDiscoveryResponse "Contains methods to describe the result of headless user discovery using a handler that implements the Auth.HeadlessUserDiscoveryHandler interface during headless login, passwordless login, and forgot password flows.")

If the handler finds a user, it returns a user ID. If not, it returns an error message.