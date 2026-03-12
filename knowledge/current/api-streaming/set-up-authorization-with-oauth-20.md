---
title: "Set Up Authorization with OAuth 2.0"
domain: api-streaming
topic: set-up-authorization-with-oauth-20
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.187Z
estimatedTokens: 837
keywords: [Authorization, OAuth, 2.0, Setting, requires, configuration, user, locations, any, steps, unfamiliar, consult, REST, API, Developer]
---

# Set Up Authorization with OAuth 2.0

> Setting up OAuth 2.0 requires some configuration in the user interface and in other
                locations. If any of the steps are unfamiliar, you can consult the REST API Developer Guide or OAuth 2.0 documentation.

# Set Up Authorization with OAuth 2.0

Setting up OAuth 2.0 requires some configuration in the user interface and in other locations. If any of the steps are unfamiliar, you can consult the [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/quickstart_oauth.htm) or [OAuth 2.0 documentation](http://oauth.net/2/).

The sample Java code in this chapter uses the Apache HttpClient library, which can be downloaded from [http://hc.apache.org/httpcomponents-client-ga/](http://hc.apache.org/httpcomponents-client-ga/ "HTML (New Window)").

1.  In Salesforce Classic, from Setup, enter Apps in the Quick Find box, then select **Apps**. Or in Lightning Experience, enter App in the Quick Find box, then select **App Manager**. Click **New** in the Connected Apps related list to create a new connected app.

    The Callback URL you supply here is the same as your Web application's callback URL. If you work with Java, it’s usually a servlet. It must be secure: http:// doesn’t work, only https://. For development environments, the callback URL is similar to https://my-website/\_callback.

    When you save the connected app, its detail page is displayed. To view the consumer key and consumer secret, click **Manage Consumer Details**, and then verify your identity.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

    #### Note

    The OAuth 2.0 specification uses “client” instead of “consumer.” Salesforce supports OAuth 2.0.

    The values here correspond to the following values in the sample code in the rest of this procedure:

    -   client\_id is the Consumer Key
    -   client\_secret is the Consumer Secret
    -   redirect\_uri is the Callback URL.

    An additional value you must specify is: the grant\_type. For OAuth 2.0 callbacks, the value is authorization\_code as shown in the sample. For more information about these parameters, see [Authorize Apps with OAuth](https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm&language=en_US "HTML (New Window)") in *Salesforce Help*.

    If the value of client\_id (or consumer key) and client\_secret (or consumer secret) are valid, Salesforce sends a callback to the URI specified in redirect\_uri that contains a value for access\_token.

2.  From your Java or other client application, make a request to the authentication URL that passes in grant\_type, client\_id, client\_secret, username, and password. For example:

    ```

    ```

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_streaming)

    #### Important

    Use the username-password authorization flow only if you’re handling your own credentials. Review the recommendations and restrictions for this authorization flow in [OAuth 2.0 Username-Password Flow for Special Scenarios](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_oauth_username_password_flow.htm&type=5&language=en_US) in Salesforce Help.


## Example

This example gets the session ID (authenticates), and then follows a resource, https://MyDomainName.my.salesforce.com/id/***00Dxxxxxxxxxxxx/005xxxxxxxxxxxx*** contained in the first response to get more information about the user.

```

```

The output from this code resembles the following.

```

```

## Code Examples

```apex
HttpClient httpclient = new DefaultHttpClient();
HttpPost post = new HttpPost(baseURL);

List<BasicNameValuePair> parametersBody = new ArrayList<BasicNameValuePair>();

parametersBody.add(new BasicNameValuePair("grant_type", password));
parametersBody.add(new BasicNameValuePair("client_id", clientId));
parametersBody.add(new BasicNameValuePair("client_secret", client_secret));
parametersBody.add(new BasicNameValuePair("username", "auser@example.com"));
parametersBody.add(new BasicNameValuePair("password", "swordfish"));
```

```apex
public static void oAuthSessionProvider(String loginHost, String username,
        String password, String clientId, String secret)
        throws HttpException, IOException 
{
    // Set up an HTTP client that makes a connection to REST API.
    DefaultHttpClient client = new DefaultHttpClient();
    HttpParams params = client.getParams();
    HttpClientParams.setCookiePolicy(params, CookiePolicy.RFC_2109);
    params.setParameter(HttpConnectionParams.CONNECTION_TIMEOUT, 30000);

    // Set the SID.
    System.out.println("Logging in as " + username + " in environment " + loginHost);
    String baseUrl = loginHost + "/services/oauth2/token";
    // Send a post request to the OAuth URL.
    HttpPost oauthPost = new HttpPost(baseUrl);
    // The request body must contain these 5 values.
    List<BasicNameValuePair> parametersBody = new ArrayList<BasicNameValuePair>();
    parametersBody.add(new BasicNameValuePair("grant_type", "password"));
    parametersBody.add(new BasicNameValuePair("username", username));
    parametersBody.add(new BasicNameValuePair("password", password));
    parametersBody.add(new BasicNameValuePair("client_id", clientId));
    parametersBody.add(new BasicNameValuePair("client_secret", secret));
    oauthPost.setEntity(new UrlEncodedFormEntity(parametersBody, HTTP.UTF_8));

    // Execute the request.
    System.out.println("POST " + baseUrl + "...
");
    HttpResponse response = client.execute(oauthPost);
    int code = response.getStatusLine().getStatusCode();
    Map<String, String> oauthLoginResponse = (Map<String, String>)
        JSON.parse(EntityUtils.toString(response.getEntity()));
    System.out.println("OAuth login response");
    for (Map.Entry<String, String> entry : oauthLoginResponse.entrySet()) 
    {
        System.out.println(String.format("  %s = %s", entry.getKey(), entry.getValue()));
    }
    System.out.println("");

    // Get user info.
    String userIdEndpoint = oauthLoginResponse.get("id");
    String accessToken = oauthLoginResponse.get("access_token");
    List<BasicNameValuePair> qsList = new ArrayList<BasicNameValuePair>();
    qsList.add(new BasicNameValuePair("oauth_token", accessToken));
    String queryString = URLEncodedUtils.format(qsList, HTTP.UTF_8);
    HttpGet userInfoRequest = new HttpGet(userIdEndpoint + "?" + queryString);
    HttpResponse userInfoResponse = client.execute(userInfoRequest);
    Map<String, Object> userInfo = (Map<String, Object>)
        JSON.parse(EntityUtils.toString(userInfoResponse.getEntity()));
    System.out.println("User info response");
    for (Map.Entry<String, Object> entry : userInfo.entrySet()) 
    {
        System.out.println(String.format("  %s = %s", entry.getKey(), entry.getValue()));
    }
    System.out.println("");

    // Use the user info in interesting ways.
    System.out.println("Username is " + userInfo.get("username"));
    System.out.println("User's email is " + userInfo.get("email"));
    Map<String, String> urls = (Map<String, String>)userInfo.get("urls");
    System.out.println("REST API url is " + urls.get("rest").replace("{version}", "66.0"));
}
```

```
Logging in as auser@example.com in environment https://MyDomainName.my.salesforce.com
POST https://MyDomainName.my.salesforce.com/services/oauth2/token...

OAuth login response
  id = https://MyDomainName.my.salesforce.com/id/00D30000000ehjIEAQ/00530000003THy8AAG
  issued_at = 1334961666037
  instance_url = https://MyDomainName.my.salesforce.com
  access_token = <SALESFORCE_ACCESS_TOKEN>
  signature = 8M9VWBoaEk+Bs//yD+BfrUR/+5tkNLgXAIwal1PMwsY=

User info response
  user_type = STANDARD
  status = {created_date=2012-04-08T16:44:58.000+0000, body=Hello}
  urls = {sobjects=https://MyDomainName.my.salesforce.com/services/data/v{version}/sobjects/, feeds=https://MyDomainName.my.salesforce.com/services/data/v{version}/chatter/feeds, users=https://MyDomainName.my.salesforce.com/services/data/v{version}/chatter/users, query=https://MyDomainName.my.salesforce.com/services/data/v{version}/query/, enterprise=https://MyDomainName.my.salesforce.com/services/Soap/c/{version}/00D30000000ehjI, recent=https://MyDomainName.my.salesforce.com/services/data/v{version}/recent/, feed_items=https://MyDomainName.my.salesforce.com/services/data/v{version}/chatter/feed-items, search=https://MyDomainName.my.salesforce.com/services/data/v{version}/search/, partner=https://MyDomainName.my.salesforce.com/services/Soap/u/{version}/00D30000000ehjI, rest=https://MyDomainName.my.salesforce.com/services/data/v{version}/, groups=https://MyDomainName.my.salesforce.com/services/data/v{version}/chatter/groups, metadata=https://MyDomainName.my.salesforce.com/services/Soap/m/{version}/00D30000000ehjI, profile=https://MyDomainName.my.salesforce.com/00530000003THy8AAG}
  locale = en_US
  asserted_user = true
  id = https://login.salesforce.com/id/00D30000000ehjIEAQ/00530000003THy8AAG
  nick_name = SampleNickname
  photos = {picture=https://MyDomainName.file.force.com/profilephoto/005/F, thumbnail=https://MyDomainName.file.force.com/profilephoto/005/T}
  display_name = Sample User
  first_name = Admin
  last_modified_date = 2012-04-19T04:35:29.000+0000
  username = auser@example.com
  email = emailaddr@example.com
  organization_id = 00D30000000ehjIEAQ
  last_name = User
  utcOffset = -28800000
  active = true
  user_id = 00530000003THy8AAG
  language = en_US

Username is auser@example.com
User's email is emailaddr@example.com
REST API url is https://MyDomainName.my.salesforce.com/services/data/v66.0/
```
