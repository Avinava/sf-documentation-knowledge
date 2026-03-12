---
title: "SignupRequest"
domain: object-reference
topic: signuprequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:17.185Z
estimatedTokens: 3123
keywords: [SignupRequest, new, sign-up, isn’t, sandbox, instances, result, error, API, version, 27.0, later, Calls, Usage, Codes]
---

# SignupRequest

> Represents a request for a new sign-up. SignupRequest isn’t
		supported in sandbox instances and will result in an error. This object is available in API
		version 27.0 and later.

# SignupRequest

Represents a request for a new sign-up. SignupRequest isn’t supported in sandbox instances and will result in an error. This object is available in API version 27.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You’re limited to 20 sign-ups per day. To make additional sign-ups, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com "HTML (New Window)"). For product, specify **Sales**. For topic, specify **AppExchange & Managed Packages**.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Fields

| Field Name | Details |
| --- | --- |
| AuthCode | TypestringPropertiesCreate, Filter, Group, SortDescriptionA one-time authorization code that can be exchanged for an OAuth access token and refresh token using standard Salesforce APIs. It’s used with ConnectedAppCallbackUrl and ConnectedAppConsumerKey when the specified connected app hasn’t been configured with an X.509 certificate. The system provides this read-only field after the sign-up request has been processed. This field is available in API version 29.0 and later. |
| Company | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe name of the company requesting the trial sign-up. |
| ConnectedAppCallbackUrl | TypestringPropertiesCreate, Filter, Group, SortDescriptionWhen used with ConnectedAppConsumerKey, specifies a connected app that’s approved automatically during the sign-up creation. This field is available in API version 28.0 and later. |
| ConnectedAppConsumerKey | TypestringPropertiesCreate, Filter, Group, SortDescriptionWhen used with ConnectedAppCallbackUrl, specifies a connected app that’s approved automatically during the sign-up creation. This field is available in API version 28.0 and later. |
| Country | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe default value is the country of the requesting org. To override the default, enter the two-character, uppercase ISO-3166 country code (Alpha-2 code). A complete list of the codes is located at https://www.iso.org/obp/ui/#search. The language of the trial org is auto-determined based on the value of this field. |
| CreatedOrgId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character org ID of the trial org created. The system provides this read-only field after the sign-up request has been processed. |
| CreatedOrgInstance | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe server instance of the new trial org, for example, “na8.” This field is available in API version 29.0 and later. |
| Edition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe Salesforce template that is used to create the trial org. Possible values are Partner Group, Professional, Partner Professional, Sales Enterprise, Professional TSO, Enterprise, Partner Enterprise, Service Professional, Enterprise TSO, Developer, and Partner Developer. This field is available in API version 35.0 and later. |
| ErrorCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe error code if the sign-up request isn’t successful. The system provides this read-only field for support purposes. |
| FirstName | TypestringPropertiesCreate, Filter, Nillable, SortDescriptionThe first name of the admin user for the trial sign-up. |
| LastName | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe last name of the admin user for the trial sign-up. |
| PreferredLanguage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the trial org being created. Specify the language using a language code listed under Fully Supported Languages in Supported Languages in Salesforce Help. For example, use zh_CN for simplified Chinese. The value you select overrides the language set by the locale. If you specify an invalid language, the org defaults to the default language of the country. Likewise, if you specify a language that isn’t supported by the Salesforce edition associated with your trial template, the trial org defaults to the default language of the country. This field is available in API version 35.0 and later. |
| ResolvedTemplateId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionPopulated during the sign-up request and for internal use by Salesforce. This field is available in API version 35.0 and later. |
| ShouldConnectToEnvHub | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionWhen set to true, the trial org is connected to the Environment Hub. The sign-up must take place in the hub main org or a spoke org. This field is available in API version 35.0 and later. |
| SignupEmail | TypeemailPropertiesCreate, Filter, Group, SortDescriptionThe email address of the admin user for the trial sign-up. |
| SignupSource | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionA user-specified description of the trial sign-up, up to 60 characters. This field is available in API version 36.0 and later. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionThe status of the request. Possible values are New, In Progress, Error, or Success. The default is New. |
| Subdomain | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe My Domain name for the new trial org used in the org’s login and application URLs. In Developer Edition orgs, your name must contain at least 3 characters and no more than 27 characters. In all other editions, it must be at least 3 characters and no more than 34 characters. It can include letters, numbers, and hyphens, but you can’t start the name with a hyphen.If you don’t choose a My Domain during sign-up, Salesforce assigns one for you based on your company name. If you don’t like the one we set, you can change it.For details, see My Domain in Salesforce Help. |
| SuppressSignupEmails | TypebooleanPropertiesFilter, Group, Nillable, SortDescriptionWhen set to true, no sign-up emails are sent when the trial org is created. This field is used for the Proxy Signup feature and is available in API version 29.0 and later. |
| TemplateId | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe 15-character ID of the Trialforce template that is the basis for the trial sign-up. Salesforce must approve the template. If you don’t specify an edition, a template ID is required. |
| TrialDays | TypeanyTypePropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionThe duration of the trial sign-up in days. Must be equal to or less than the trial days for the approved Trialforce template. If not provided, it defaults to the trial duration specified for the Trialforce template. |
| TrialSourceOrgId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character org ID of the Trialforce Source Organization (TSO) from which the Trialforce template was created. |
| Username | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe username of the admin user for the trial sign-up. It must follow the address convention specified in RFC822: www.w3.org/Protocols/rfc822/#z10. |

## Usage

The Java class uses REST API to create a SignupRequest object. It authenticates to the Trialforce Management Organization (TMO) and then posts a request to the SignupRequest object.

Here are the variables to specify in this example.

-   SERVER—The name of the host server for the TMO, for example, yourInstance.salesforce.com.
-   USERNAME—The admin username for the TMO.
-   PASSWORD—The concatenation of the admin password and the security token for the TMO. To get an email with the security token, from your personal settings in Salesforce, select **Reset My Security Token** and click **Reset Security Token**.
-   CLIENT\_ID—From Setup in Salesforce, in the Quick Find box, enter Apps, and then select **Apps**. Under Connected Apps, click **New**. Enter values for the required fields (Callback URL is required, but you can initially set it to any valid URL because it’s not used). Grant full access for the OAuth scopes in the Selected OAuth Scopes selector, and click **Save**. Then copy the value of Consumer Key and use it for this variable.
-   CLIENT\_SECRET—On the same page, click **Click to reveal**. Then copy the value of Consumer Secret and use it for this variable.

```

```

## Error Codes

If the sign-up fails, the system generates an error code that can help you identify the cause. This table shows the most important error codes.

| Error Code | Description |
| --- | --- |
| C-1007 | Duplicate username. |
| C-1015 | Error while establishing the new org’s My Domain (subdomain) settings. Contact Salesforce support for assistance. |
| C-1016 | Error while configuring the OAuth connected app for Proxy Signup. Verify that your connected app has a valid consumer key, callback URL, and unexpired certificate (if applicable). |
| C-1018 | Invalid subdomain value provided during sign-up. |
| C-1019 | Subdomain in use. Choose a new subdomain value. |
| C-1020 | Template not found. Either the template doesn’t exist or it was deleted. |
| C-1033 | Template is the wrong version. |
| C-1034 | Can’t create the org. Contact Salesforce Customer Support for assistance. |
| C-9999 | Generic fatal error. Contact Salesforce Customer Support for assistance. |
| S-1006 | Invalid email address (not in a proper email address format). |
| S-1014 | Invalid or missing parameters during the sign-up process. Possible solutions include:Indicate a valid callback URL.If indicated, be sure to provide both a Consumer Key and callback URL. |
| S-1018 | Invalid My Domain (subdomain) name. Select a name that doesn’t:Contain double hyphensEnd in a hyphenInclude restricted wordsExceed 40 characters (33 for Developer Edition) |
| S-1019 | My Domain (subdomain) already in use. |
| S-1026 | Invalid namespace. A namespace must begin with a letter, can’t contain consecutive underscores, can’t be a restricted or reserved namespace, and must be 15 characters or fewer. |
| T-0001 | Template ID not valid (not in the format 0TTxxxxxxxxxxxx). |
| T-0002 | Template not found. Either the template doesn't exist or it was deleted. |
| T-0003 | Template not approved for use by Salesforce. Contact Salesforce Customer Support for assistance. |
| T-0004 | The Trialforce Source Organization (TSO) for the template doesn’t exist or has expired. |
| VR-0001 | Can’t create the scratch org. Try again later. |
| VR-0002 | Can’t create the scratch org. Check that the release value is valid. If no release value was specified, contact Salesforce Customer Support. |
| VR-0003 | Can’t create the scratch org. Check that the release value is valid. If no release value was specified, contact Salesforce Customer Support. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

-   [SignupRequestFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")–Feed tracking is available for the object.
-   [SignupRequestHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")–History is available for tracked fields of the object.
-   [SignupRequestOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")–Sharing rules are available for the object
-   [SignupRequestShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")–Sharing is available for the object.

## Code Examples

```apex
public class IsvSignupDriver {
    private static final String SERVER = server_name:port;
    private static final String USERNAME = tmo_username;
    private static final String PASSWORD = tmo_passwordsecurity_token;
    private static final String CLIENT_ID = consumer_key;
    private static final String CLIENT_SECRET = consumer_secret;

    private static SignupRequestInfo signupRequest = null;
    
    public static String createSignupRequest (SignupRequestInfo sr)
      throws JSONException, IOException {
    	  JSONObject createResponse = null;
    	  signupRequest = sr;
    	  JSONObject loginResponse = login(SERVER, USERNAME, PASSWORD);
    	  String instanceUrl = loginResponse.getString("instance_url");
    	  String accessToken = loginResponse.getString("access_token");
    	  createResponse = create(instanceUrl, accessToken);
    	  System.out.println("Created SignupRequest object: " + createResponse + "
"); 
    	  return createResponse.toString();
    }

    /* Authenticates to the TMO using the required credentials */

    private static JSONObject login(String server, String username, String password)
      throws ClientProtocolException, IOException, JSONException {
        String authEndPoint = server + "/services/oauth2/token";
        HttpClient httpclient = new DefaultHttpClient();
        try {
            HttpPost post = new HttpPost(authEndPoint);

            List<NameValuePair> params = new ArrayList<NameValuePair>();
            params.add(new BasicNameValuePair("grant_type", "password"));
            params.add(new BasicNameValuePair("client_id", CLIENT_ID));
            params.add(new BasicNameValuePair("client_secret", CLIENT_SECRET));
            params.add(new BasicNameValuePair("username", username));
            params.add(new BasicNameValuePair("password", password));
            post.setEntity(new UrlEncodedFormEntity(params, Consts.UTF_8));

            BasicResponseHandler handler = new BasicResponseHandler();
            String response = httpclient.execute(post, handler);
            return new JSONObject(response);
        } finally {
            httpclient.getConnectionManager().shutdown();
        }
    }
    /* Posts a request to the SignupRequest object */

    private static JSONObject create(String instanceUrl, String accessToken)
      throws ClientProtocolException, IOException, JSONException {
        HttpClient httpClient = new DefaultHttpClient();
        try {
            HttpPost post = new HttpPost(instanceUrl +
              "/services/data/v27.0/sobjects/SignupRequest/");
                post.setHeader("Authorization", "Bearer " + accessToken);
                post.setHeader("Content-Type", "application/json");
            
                JSONObject requestBody = new JSONObject();
                requestBody.put("TemplateId", signupRequest.getTemplateID());
                requestBody.put("SignupEmail", signupRequest.getEmail());
                requestBody.put("username", signupRequest.getUsername());
                requestBody.put("Country", "US");
                requestBody.put("Company", signupRequest.getCompanyName());
                requestBody.put("lastName", signupRequest.getLastName());        

                StringEntity entity = new StringEntity(requestBody.toString());
                post.setEntity(entity);
                BasicResponseHandler handler = new BasicResponseHandler();
                String response = httpClient.execute(post, handler);
                return new JSONObject(response);
        } finally {
            httpClient.getConnectionManager().shutdown();
        }
    }
}
```

## Related Topics

- SignupRequestFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- SignupRequestHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- SignupRequestOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- SignupRequestShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
