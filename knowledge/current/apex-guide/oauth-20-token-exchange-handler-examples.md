---
title: "OAuth 2.0 Token Exchange Handler Examples"
domain: apex-guide
topic: oauth-20-token-exchange-handler-examples
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.918Z
estimatedTokens: 4425
keywords: [OAuth, 2.0, Token, Exchange, Handler, Examples, Sometimes, want, integrate, Salesforce, complex, system, where, primary, app, central, identity, provider, multiple, apps]
---

# OAuth 2.0 Token Exchange Handler Examples

> Sometimes you want to integrate Salesforce into a complex system where you have a primary
        app, a central identity provider, and multiple other apps and microservices. In this model,
        users log in to the primary app via the identity provider and access data provided by the
        other apps and microservices. To fit Salesforce into this model as one of the apps providing
        data, use the OAuth 2.0 token exchange flow, which implements an Apex token exchange
        handler.

# OAuth 2.0 Token Exchange Handler Examples

Sometimes you want to integrate Salesforce into a complex system where you have a primary app, a central identity provider, and multiple other apps and microservices. In this model, users log in to the primary app via the identity provider and access data provided by the other apps and microservices. To fit Salesforce into this model as one of the apps providing data, use the OAuth 2.0 token exchange flow, which implements an Apex token exchange handler.

| Available in: Enterprise, Unlimited, Performance, and Developer Editions |
| --- |


During the OAuth 2.0 token exchange flow, when a user logs in to the primary app via the identity provider, the identity provider issues a token to the primary app. The primary app can’t use this token to directly access Salesforce data, but it can exchange the token for a Salesforce access token. To complete this exchange, the primary app uses an Apex token exchange handler. With the token exchange handler, Salesforce can issue its own access token by validating the identity provider’s token and mapping the token’s subject, which identifies the end user, to a Salesforce user.

To build an Apex token exchange handler, create a class that extends the Auth.Oauth2TokenExchangeHandler abstract class and customize its validation logic and subject mapping.

## Token Exchange Handler Abstract Class

The Auth.Oauth2TokenExchangeHandler abstract class contains two methods. Use the first method, validateIncomingToken, to validate the identity provider’s token. Use the second method, getUserForTokenSubject, to map the token’s subject to a Salesforce user.

global abstract class Oauth2TokenExchangeHandler { //First method called in the handler global virtual Auth.TokenValidationResult validateIncomingToken(String appDeveloperName, Auth.IntegratingAppType appType, String incomingToken, Auth.OAuth2TokenExchangeType tokenType) { //This method must be overridden by the extending class //Validate the identity provider’s token. Depending on your use case and token type, write validation logic that does these things: // Use the token to make a callout to the identity provider’s User Info endpoint // Use the token to make a callout to identity provider’s Introspection endpoint // Validate a SAML response // Validate a JWT locally // The appDeveloperName is the developer name of the Connected App or External Client App //The IntegratingAppType is an ENUM that is either a Connected App or External Client App // After you validate the token, return true or false return null; } //Second method called in the handler global virtual User getUserForTokenSubject(Id networkId, Auth.TokenValidationResult result, Boolean canCreateUser, String appDeveloperName, Auth.IntegratingAppType appType) { //This method must be overridden by the extending class //To map the subject of the token to a Salesforce user, write code that does these things: // Get data directly from the token, and query for the user in Salesforce // Get data from the identity provider’s User Info endpoint using the token and query for the user in Salesforce // Get data from the SAML assertion and query for the user in Salesforce // If the user is not in Salesforce, and canCreateUser is true, set up a User object // This includes external users, so it can include an account and contact // If the user Id is null, Salesforce automatically inserts the user(assuming that canCreateUser is true) return null; } }

The way you build your validation and subject mapping processes depends on your use case, identity provider, and token type. Use these examples to get started.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

These example implementations and code snippets are for demonstration only. Use them as a starting point, but make sure you evaluate, customize, and test them carefully.

## Token Exchange Handler Example Implementation

This example implementation extends the Auth.Oauth2TokenExchangeHandler abstract class.

In this example, the [OAuth2TokenExchangeType](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_Auth_OAuth2TokenExchangeType.htm) enum specifies that the token is a JSON Web Token (JWT). The first method, validateIncomingToken, uses a method in the [Auth.JWTUtil](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm#apex_Auth_JWTUtil_methods) class to validate the token by calling an endpoint on the external identity provider.

Validating the token returns an instance of the [Auth.TokenValidationResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm) class with information about the token and the user.

With the second method, getUserForTokenSubject, the handler gets information about the user from the token validation result. The example shows two ways to bundle the user data—either by creating a class with a custom data structure or by using the [Auth.UserData](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_UserData.htm) class.

After the handler gets the user data from the token, it looks for a Salesforce user matching the token subject. In this example, the handler doesn’t find a user, so it creates a User object. To finish creating the user, Salesforce automatically inserts the User object for you.

/\*Token Exchange Handler Implementation Example\*/ public class MyTokenExchangeClass extends Auth.Oauth2TokenExchangeHandler{ public override Auth.TokenValidationResult validateIncomingToken(String appDeveloperName, Auth.IntegratingAppType appType, String incomingToken, Auth.OAuth2TokenExchangeType tokenType) { //Depending on your incoming token, you validate it in different ways //If the incoming token is an opaque access token or refresh token, validate it with a callout to the identity provider //If it’s a SAML assertion, validate it by checking the XML //If it’s an ID Token or JWT, try using our JWT validation methods //This example assumes that the incoming token is a JWT and that there is a public keys endpoint on the identity provider //Be very careful with any logic in this method, and test carefully before using Boolean isValid = false; Auth.JWT jwt; //Custom data structure CustomStructuredUserData customData; //Standard user data structure Auth.UserData userData; if (tokenType == Auth.OAuth2TokenExchangeType.JWT || tokenType == Auth.OAuth2TokenExchangeType.ID\_TOKEN) { try { jwt = Auth.JWTUtil.validateJWTWithKeysEndpoint(incomingToken, 'https://your-idp.com/keys', true); isValid = true; //These values are sourced from the JWT or ID Token userData = new Auth.UserData('identifier', 'firstName', 'lastName', 'fullName', 'customer@email.com', 'link url', 'remote username', 'local', 'Provider (IDP Name)', '', new Map<String,String>()); //You can also pass data as generic object customData = new CustomStructuredUserData(); } catch (Exception e) { isValid = false; } } else if (tokenType == Auth.OAuth2TokenExchangeType.ACCESS\_TOKEN || tokenType == Auth.OAuth2TokenExchangeType.REFRESH\_TOKEN) { //Putlogic for validating an opaque access token or refresh token here //This validation typically involves a callout to the introspect or user info endpoints //If you call out to the user info endpoint, make sure to pass the data from the validation into the getUserForTokenSubject method using an Apex class or the user data class isValid = false; } else if (tokenType == Auth.OAuth2TokenExchangeType.SAML\_2) { //Put logic for validating a SAML assertion here //This validation involves XML parsing isValid = false; } else { //You can add new token types. If you don’t know how to validate the token, always check the type and return false isValid = false; } if(isValid){ return new Auth.TokenValidationResult(true, (object)customData, userData, incomingToken, tokenType, 'CustomErrorMessage'); } else { return new Auth.TokenValidationResult(isValid); } } public override User getUserForTokenSubject(Id networkId, Auth.TokenValidationResult result, Boolean canCreateUser, String appDeveloperName, Auth.IntegratingAppType appType) { //If you passed data from the validation method, grab it now. Remember to cast back for the custom data CustomStructuredUserData customData = (CustomStructuredUserData)result.data; Auth.UserData userData = result.userData; //If you don’t have any data from the token, you can perform a callout using the incoming token String userToken = result.token; //Now, search for a user User u; try { u = \[SELECT Id, IsActive FROM User WHERE email =: userData.email\]; } catch (Exception e) { //No user existed for this email address, or there were too many. Try looking harder } // If you didn’t find a user, check to see if you can create one if (canCreateUser && (u == null)) { u = new User(); u.firstName = userData.firstName; u.lastName = userData.lastName; //Finish setting user attributes. For external users, make sure you set up the contact/account/person account //If you assign permission sets, do it in a future method to avoid mixed DML //Returning the user from this method handles the insertion, so it’s not necessary to manually insert } return u; } //This class gives you a way to pass structured data between the validateIncomingToken and getUserForTokenSubject methods //This example is for demonstration only. Implement this class in a way that matches the data that you are passing private class CustomStructuredUserData { public String customAttribute1; public Integer customAttribute2; public Map<String,Object> customAttribute3; } }

## Examples for Validating Different Token Types

The custom logic for your implementation of the validateIncomingToken method depends on the token type. Here’s an overview of the options for different token types.

-   For JWTs and ID tokens, use methods in the [Auth.JWTUtil](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm) class.
-   For opaque tokens, such as opaque access and refresh tokens, call out to the identity provider’s introspection or user info endpoints.
-   For SAML assertions, write code to parse the XML from the assertion.

In this example, the handler validates a JWT from the identity provider. The handler determines the token type and uses the validateJWTWithKey method in the Auth.JWTUtil class to validate the JWT with a public key.

global override Auth.TokenValidationResult validateIncomingToken(String appDeveloperName, Auth.IntegratingAppType appType, String incomingToken, Auth.OAuth2TokenExchangeType tokenType) { if (tokenType == Auth.OAuth2TokenExchangeType.JWT) { // Validates the JWT with a public key, but we also provide methods to validate it with a certificate (Auth.JWTUtil.validateJWTWithCert) or with a keys endpoint (Auth.JWTUtil.validateJWTWithKeysEndpoint) Auth.JWT jwt = Auth.JWTUtil.validateJWTWithKey(incomingToken,'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMI...'); return new Auth.TokenValidationResult(true); } return new Auth.TokenValidationResult(false); // Returns a general 'Token handler validation failed' message that you can customize }

For opaque access tokens, which can’t be introspected locally on your app, call out to the introspection or user info endpoints on the external identity provider. In this example for validating an opaque token, the handler sends a POST request to the identity provider’s introspection endpoint and parses the identity provider’s JSON response so that Salesforce can understand it. It then validates the response using the validateIncomingToken method.

global override Auth.TokenValidationResult validateIncomingToken(String appDeveloperName, Auth.IntegratingAppType appType, String incomingToken, Auth.OAuth2TokenExchangeType tokenType) { if (tokenType == Auth.OAuth2TokenExchangeType.ACCESS\_TOKEN) { // Validate the token with a callout to the introspection endpoint String body = 'client\_id=3MVG9AOp4kbriZ...&client\_secret=71E147927AC...&token=00Dxx0000006H5T!AQEA...'; HttpRequest req = new HttpRequest(); req.setMethod('POST'); req.setEndpoint('https://<MyCompanyDomain>/services/oauth2/introspect'); req.setHeader('Content-Type', 'application/x-www-form-urlencoded'); req.setBody(body); Http http = new Http(); HttpResponse res = http.send(req); Boolean active; String username; Auth.UserData userData; if(res.getStatusCode() == 200) { System.JSONParser parser = System.JSON.createParser(res.getBody()); try { while((active == null || username == null) && parser.nextToken() != null) { if (parser.getCurrentToken() == JSONToken.FIELD\_NAME) { String fieldName = parser.getText(); if (fieldName == 'active') { parser.nextToken(); active = parser.getBooleanValue(); if (!active) { return new Auth.TokenValidationResult(false); } } if (fieldName == 'username') { parser.nextToken(); username = parser.getText(); } } } if (active != null && username != null) { userData = new Auth.UserData(null, null, null, null, null, null, username, null, null, null, null); } } catch(JSONException e) { return new Auth.TokenValidationResult(false); // Returns a general 'Token handler validation failed' message that you can customize } } else { return new Auth.TokenValidationResult(false); // Returns a general 'Token handler validation failed' message that you can customize } return new Auth.TokenValidationResult(true, null, userData, incomingToken, tokenType, null); } return new Auth.TokenValidationResult(false); // Returns a general 'Token handler validation failed' message that you can customize }

## Example for Finding and Creating a User

During subject mapping, your handler finds the subject (end user) of the incoming token and tries to link it to a Salesforce user. Optionally, you can configure your handler to help create a Salesforce user if it can’t find one. The handler doesn’t technically create the user—instead, it returns a User object. Salesforce then automatically inserts the new user into the User object for you. To create the User object, the isUserCreationAllowed field on your [OauthTokenExchangeHandler metadata definition](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_oauthtokenexchangehandler.htm) must be set to true. When you set this metadata field to true, the CanCreateUser parameter in the getUserForTokenSubject Apex method is also set to true.

If necessary, to get more information about the incoming subject, the handler can call out to the external identity provider or another external system.

In this example implementation, the handler gets information about the user from the identity provider’s token and looks for an existing Salesforce user. If no user exists, it creates a User object.

global class MyTokenExchangeHandler extends Auth.Oauth2TokenExchangeHandler { global override Auth.TokenValidationResult validateIncomingToken(String appDeveloperName, Auth.IntegratingAppType appType, String incomingToken, Auth.OAuth2TokenExchangeType tokenType) { // Validates the incoming token Auth.UserData userData = new Auth.UserData('someIdentifier', 'someFirstName', 'someLastName', 'someFullName', 'someEmail', 'someLink', 'someUsername@my.org', 'en\_US', 'someProvider', 'someSiteLoginUrl', null); return new Auth.TokenValidationResult(true, null, userData, incomingToken, tokenType, null); } global override User getUserForTokenSubject(Id networkId, Auth.TokenValidationResult result, Boolean canCreateUser, String appDeveloperName, Auth.IntegratingAppType appType) { String username = result.getUserData().username; List<User> existingUser = \[SELECT Id, Username, Email, FirstName, LastName, Alias, ProfileId FROM User WHERE Username=:username LIMIT 1\]; if (!existingUser.isEmpty()) { return existingUser\[0\]; } User u = new User(); u.Username = username; u.Email = 'some@email.com'; u.LastName = 'SomeLastName'; u.Alias = 'MyAlias'; u.TimeZoneSidKey = 'America/Los\_Angeles'; u.LocaleSidKey = 'en\_US'; u.EmailEncodingKey = 'UTF-8'; Profile p = \[SELECT Id FROM profile WHERE name='Standard User'\]; u.ProfileId = p.Id; u.LanguageLocaleKey = 'en\_US'; return u; } }

#### See Also

-   [*Salesforce Help:* OAuth 2.0 Token Exchange Flow](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_token_exchange_overview.htm&type=5&language=en_US "Salesforce Help: OAuth 2.0 Token Exchange Flow - HTML (New Window)")

-   [*Apex Reference Guide:* Oauth2TokenExchangeHandler Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_Oauth2TokenExchangeHandler.htm "Apex Reference Guide: Oauth2TokenExchangeHandler Class - HTML (New Window)")

-   [*Apex Reference Guide:* TokenValidationResult Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm "Apex Reference Guide: TokenValidationResult Class - HTML (New Window)")

-   [*Apex Reference Guide:* OAuth2TokenExchangeType Enum](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_Auth_OAuth2TokenExchangeType.htm "Apex Reference Guide: OAuth2TokenExchangeType Enum - HTML (New Window)")

-   [*Apex Reference Guide:* IntegratingAppType Enum](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_Auth_IntegratingAppType.htm "Apex Reference Guide: IntegratingAppType Enum - HTML (New Window)")

-   [*Apex Reference Guide:* JWTUtil Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm "Apex Reference Guide: JWTUtil Class - HTML (New Window)")
