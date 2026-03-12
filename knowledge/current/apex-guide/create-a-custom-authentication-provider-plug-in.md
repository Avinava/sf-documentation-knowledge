---
title: "Create a Custom Authentication Provider Plug-in"
domain: apex-guide
topic: create-a-custom-authentication-provider-plug-in
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.267Z
estimatedTokens: 583
keywords: [Custom, Authentication, Provider, Plug-in, Apex, OAuth-based, sign-on, SSO, Salesforce, Sample, Classes, Test]
---

# Create a Custom Authentication Provider Plug-in

> You can use Apex to create a custom OAuth-based authentication provider plug-in for
        single sign-on (SSO) to Salesforce.

# Create a Custom Authentication Provider Plug-in

You can use Apex to create a custom OAuth-based authentication provider plug-in for single sign-on (SSO) to Salesforce.

Out of the box, Salesforce supports several external authentication providers for single sign-on, including Facebook, Google, LinkedIn, and service providers that implement the OpenID Connect protocol. By creating a plug-in with Apex, you can add your own OAuth-based authentication provider. Your users can then use the SSO credentials they already use for non-Salesforce applications with your Salesforce orgs.

Before you create your Apex class, you create a custom metadata type record for your authentication provider. For details, see [Create a Custom External Authentication Provider](https://help.salesforce.com/HTViewHelpDoc?id=sso_provider_plugin_custom.htm&language=en_US "HTML (New Window)").

## Sample Classes

This example extends the abstract class Auth.AuthProviderPluginClass to configure an external authentication provider called Concur. Build the sample classes and sample test classes in the following order.

1.  Concur
2.  ConcurTestStaticVar
3.  MockHttpResponseGenerator
4.  ConcurTestClass

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The Auth.AuthProviderPluginClass class doesn't include a method for single logout. You can easily configure single logout in Setup. For steps, see [Configure OpenID Connect Single Logout with Salesforce as the Relying Party](https://help.salesforce.com/s/articleView?id=xcloud.security_auth_slo_oidc_rp_configuring.htm&language=en_US) in Salesforce Help. Alternatively, create custom methods for single logout.

```

```

## Sample Test Classes

The following example contains test classes for the Concur class.

```

```

#### See Also

-   [*Apex Reference Guide*: AuthProviderPlugin Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm "Apex Reference Guide: AuthProviderPlugin Interface - HTML (New Window)")

-   [Salesforce Help: Create a Custom External Authentication Provider](https://help.salesforce.com/HTViewHelpDoc?id=sso_provider_plugin_custom.htm&language=en_US "Salesforce Help: Create a Custom External Authentication Provider - HTML (New Window)")

## Code Examples

```apex
global class Concur extends Auth.AuthProviderPluginClass {
               
               public String redirectUrl; // use this URL for the endpoint that the authentication provider calls back to for configuration
               private String key;
               private String secret;
               private String authUrl;    // application redirection to the Concur website for authentication and authorization
               private String accessTokenUrl; // uri to get the new access token from concur  using the GET verb
               private String customMetadataTypeApiName; // api name for the custom metadata type created for this auth provider
               private String userAPIUrl; // api url to access the user in concur
               private String userAPIVersionUrl; // version of the user api url to access data from concur
               
       
               global String getCustomMetadataType() {
                   return customMetadataTypeApiName;
               }
       
               global PageReference initiate(Map<string,string> authProviderConfiguration, String stateToPropagate) {
                   authUrl = authProviderConfiguration.get('Auth_Url__c');
                   key = authProviderConfiguration.get('Key__c');
                   //Here the developer can build up a request of some sort
                   //Ultimately they’ll return a URL where we will redirect the user
                   String url = authUrl + '?client_id='+ key +'&scope=USER,EXPRPT,LIST&redirect_uri='+ redirectUrl + '&state=' + stateToPropagate;
                   return new PageReference(url);
                }
        
               global Auth.AuthProviderTokenResponse handleCallback(Map<string,string> authProviderConfiguration, Auth.AuthProviderCallbackState state ) {
                   //Here, the developer will get the callback with actual protocol.  
                   //Their responsibility is to return a new object called AuthProviderToken
                   //This will contain an optional accessToken and refreshToken
                   key = authProviderConfiguration.get('Key__c');
                   secret = authProviderConfiguration.get('Secret__c');
                   accessTokenUrl = authProviderConfiguration.get('Access_Token_Url__c');
                   
                   Map<String,String> queryParams = state.queryParameters;
                   String code = queryParams.get('code');
                   String sfdcState = queryParams.get('state');
                   
                   HttpRequest req = new HttpRequest();
                   String url = accessTokenUrl+'?code=' + code + '&client_id=' + key + '&client_secret=' + secret;
                   req.setEndpoint(url);
                   req.setHeader('Content-Type','application/xml');
                   req.setMethod('GET');
                   
                   Http http = new Http();
                   HTTPResponse res = http.send(req);
                   String responseBody = res.getBody();
                   String accessToken = getTokenValueFromResponse(responseBody, 'AccessToken', null);
                   //Parse access token value
                   String refreshToken = getTokenValueFromResponse(responseBody, 'RefreshToken', null);
                   //Parse refresh token value
                   
                   return new Auth.AuthProviderTokenResponse('Concur', accessToken, 'refreshToken', sfdcState);
                   //don’t hard-code the refresh token value!
                }
    
    
                 global Auth.UserData  getUserInfo(Map<string,string> authProviderConfiguration, Auth.AuthProviderTokenResponse response) { 
                     //Here the developer is responsible for constructing an Auth.UserData object
                     String token = response.oauthToken;
                     HttpRequest req = new HttpRequest();
                     userAPIUrl = authProviderConfiguration.get('API_User_Url__c');
                     userAPIVersionUrl = authProviderConfiguration.get('API_User_Version_Url__c');
                     req.setHeader('Authorization', 'OAuth ' + token);
                     req.setEndpoint(userAPIUrl);
                     req.setHeader('Content-Type','application/xml');
                     req.setMethod('GET');
                     
                     Http http = new Http();
                     HTTPResponse res = http.send(req);
                     String responseBody = res.getBody();
                     String id = getTokenValueFromResponse(responseBody, 'LoginId',userAPIVersionUrl);
                     String fname = getTokenValueFromResponse(responseBody, 'FirstName', userAPIVersionUrl);
                     String lname = getTokenValueFromResponse(responseBody, 'LastName', userAPIVersionUrl);
                     String flname = fname + ' ' + lname;
                     String uname = getTokenValueFromResponse(responseBody, 'EmailAddress', userAPIVersionUrl);
                     String locale = getTokenValueFromResponse(responseBody, 'LocaleName', userAPIVersionUrl);
                     Map<String,String> provMap = new Map<String,String>();
                     provMap.put('what1', 'noidea1');
                     provMap.put('what2', 'noidea2');
                     return new Auth.UserData(id, fname, lname, flname, uname,
                          'what', locale, null, 'Concur', null, provMap);
                }
                
                private String getTokenValueFromResponse(String response, String token, String ns) {
                    Dom.Document docx = new Dom.Document();
                    docx.load(response);
                    String ret = null;

                    dom.XmlNode xroot = docx.getrootelement() ;
                    if(xroot != null){
                       ret = xroot.getChildElement(token, ns).getText();
                    }
                    return ret;
                }  
    
}
```

```apex
@IsTest
public class ConcurTestClass {

    private static final String OAUTH_TOKEN = 'testToken';
    private static final String STATE = 'mocktestState';
    private static final String REFRESH_TOKEN = 'refreshToken';
    private static final String LOGIN_ID = 'testLoginId';
    private static final String USERNAME = 'testUsername';
    private static final String FIRST_NAME = 'testFirstName';
    private static final String LAST_NAME = 'testLastName';
    private static final String EMAIL_ADDRESS = 'testEmailAddress';
    private static final String LOCALE_NAME = 'testLocalName';
    private static final String FULL_NAME = FIRST_NAME + ' ' + LAST_NAME;
    private static final String PROVIDER = 'Concur';
    private static final String REDIRECT_URL = 'http://localhost/services/authcallback/orgId/Concur';
    private static final String KEY = 'testKey';
    private static final String SECRET = 'testSecret';
    private static final String STATE_TO_PROPOGATE  = 'testState';
    private static final String ACCESS_TOKEN_URL = 'http://www.dummyhost.com/accessTokenUri';
    private static final String API_USER_VERSION_URL = 'http://www.dummyhost.com/user/20/1';
    private static final String AUTH_URL = 'http://www.dummy.com/authurl';
    private static final String API_USER_URL = 'www.concursolutions.com/user/api';

    // in the real world scenario , the key and value would be read from the (custom fields in) custom metadata type record
    private static Map<String,String> setupAuthProviderConfig () {
            Map<String,String> authProviderConfiguration = new Map<String,String>();
           authProviderConfiguration.put('Key__c', KEY);
           authProviderConfiguration.put('Auth_Url__c', AUTH_URL);
           authProviderConfiguration.put('Secret__c', SECRET);
           authProviderConfiguration.put('Access_Token_Url__c', ACCESS_TOKEN_URL);
           authProviderConfiguration.put('API_User_Url__c',API_USER_URL);
           authProviderConfiguration.put('API_User_Version_Url__c',API_USER_VERSION_URL);
           authProviderConfiguration.put('Redirect_Url__c',REDIRECT_URL);
           return authProviderConfiguration;
          
    }

    static testMethod void testInitiateMethod() {
           String stateToPropogate = 'mocktestState';
           Map<String,String> authProviderConfiguration = setupAuthProviderConfig();
           Concur concurCls = new Concur();
           concurCls.redirectUrl = authProviderConfiguration.get('Redirect_Url__c');
           
           PageReference expectedUrl =  new PageReference(authProviderConfiguration.get('Auth_Url__c') + '?client_id='+ 
                                               authProviderConfiguration.get('Key__c') +'&scope=USER,EXPRPT,LIST&redirect_uri='+ 
                                               authProviderConfiguration.get('Redirect_Url__c') + '&state=' + 
                                               STATE_TO_PROPOGATE);
           PageReference actualUrl = concurCls.initiate(authProviderConfiguration, STATE_TO_PROPOGATE);
           System.assertEquals(expectedUrl.getUrl(), actualUrl.getUrl());
       }
    
    static testMethod void testHandleCallback() {
           Map<String,String> authProviderConfiguration = setupAuthProviderConfig();
           Concur concurCls = new Concur();
           concurCls.redirectUrl = authProviderConfiguration.get('Redirect_Url_c');

           Test.setMock(HttpCalloutMock.class, new ConcurMockHttpResponseGenerator());

           Map<String,String> queryParams = new Map<String,String>();
           queryParams.put('code','code');
           queryParams.put('state',authProviderConfiguration.get('State_c'));
           Auth.AuthProviderCallbackState cbState = new Auth.AuthProviderCallbackState(null,null,queryParams);
           Auth.AuthProviderTokenResponse actualAuthProvResponse = concurCls.handleCallback(authProviderConfiguration, cbState);
           Auth.AuthProviderTokenResponse expectedAuthProvResponse = new Auth.AuthProviderTokenResponse('Concur', OAUTH_TOKEN, REFRESH_TOKEN, null);
           
           System.assertEquals(expectedAuthProvResponse.provider, actualAuthProvResponse.provider);
           System.assertEquals(expectedAuthProvResponse.oauthToken, actualAuthProvResponse.oauthToken);
           System.assertEquals(expectedAuthProvResponse.oauthSecretOrRefreshToken, actualAuthProvResponse.oauthSecretOrRefreshToken);
           System.assertEquals(expectedAuthProvResponse.state, actualAuthProvResponse.state);
           

    }
    
    
    static testMethod void testGetUserInfo() {
           Map<String,String> authProviderConfiguration = setupAuthProviderConfig();
           Concur concurCls = new Concur();
                      
           Test.setMock(HttpCalloutMock.class, new ConcurMockHttpResponseGenerator());

           Auth.AuthProviderTokenResponse response = new Auth.AuthProviderTokenResponse(PROVIDER, OAUTH_TOKEN ,'sampleOauthSecret', STATE);
           Auth.UserData actualUserData = concurCls.getUserInfo(authProviderConfiguration, response) ;
           
           Map<String,String> provMap = new Map<String,String>();
           provMap.put('key1', 'value1');
           provMap.put('key2', 'value2');
                     
           Auth.UserData expectedUserData = new Auth.UserData(LOGIN_ID, FIRST_NAME, LAST_NAME, FULL_NAME, EMAIL_ADDRESS,
                          null, LOCALE_NAME, null, PROVIDER, null, provMap);
          
           System.assertNotEquals(expectedUserData,null);
           System.assertEquals(expectedUserData.firstName, actualUserData.firstName);
           System.assertEquals(expectedUserData.lastName, actualUserData.lastName);
           System.assertEquals(expectedUserData.fullName, actualUserData.fullName);
           System.assertEquals(expectedUserData.email, actualUserData.email);
           System.assertEquals(expectedUserData.username, actualUserData.username);
           System.assertEquals(expectedUserData.locale, actualUserData.locale);
           System.assertEquals(expectedUserData.provider, actualUserData.provider);
           System.assertEquals(expectedUserData.siteLoginUrl, actualUserData.siteLoginUrl);
    }
    
    
   // implementing a mock http response generator for concur 
   public  class ConcurMockHttpResponseGenerator implements HttpCalloutMock {
     public HTTPResponse respond(HTTPRequest req) {
        String namespace = API_USER_VERSION_URL;
        String prefix = 'mockPrefix';

        Dom.Document doc = new Dom.Document();
        Dom.XmlNode xmlNode =  doc.createRootElement('mockRootNodeName', namespace, prefix);
        xmlNode.addChildElement('LoginId', namespace, prefix).addTextNode(LOGIN_ID);
        xmlNode.addChildElement('FirstName', namespace, prefix).addTextNode(FIRST_NAME);
        xmlNode.addChildElement('LastName', namespace, prefix).addTextNode(LAST_NAME);
        xmlNode.addChildElement('EmailAddress', namespace, prefix).addTextNode(EMAIL_ADDRESS);
        xmlNode.addChildElement('LocaleName', namespace, prefix).addTextNode(LOCALE_NAME);            
        xmlNode.addChildElement('AccessToken', null, null).addTextNode(OAUTH_TOKEN);
        xmlNode.addChildElement('RefreshToken', null, null).addTextNode(REFRESH_TOKEN);
        System.debug(doc.toXmlString());
        // Create a fake response
        HttpResponse res = new HttpResponse();
        res.setHeader('Content-Type', 'application/xml');
        res.setBody(doc.toXmlString());
        res.setStatusCode(200);
        return res;
    }
   
  }
}
```
