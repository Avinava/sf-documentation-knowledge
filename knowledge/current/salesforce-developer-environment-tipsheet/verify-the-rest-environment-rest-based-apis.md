---
title: "Verify the REST Environment (REST-Based
APIs)"
domain: salesforce-developer-environment-tipsheet
topic: verify-the-rest-environment-rest-based-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.302Z
estimatedTokens: 519
keywords: [Verify, REST, Environment, REST-Based, APIs, developer, simple, Java, test, application, Eclipse]
---

# Verify the REST Environment (REST-Based
APIs)

> You can verify your developer environment with a simple
Java test application in Eclipse.

# Verify the REST Environment (REST-Based APIs)

You can verify your developer environment with a simple Java test application in Eclipse.

You should have the JDK, Eclipse, and the HttpClient and JSON frameworks installed.

1.  Run Eclipse. Click **File** | **New** | **Java Project** and name the project “SF-REST-Test.”
2.  Click **Project** | **Properties** | **Java Build Path** | **Libraries** and click **Add External JARs**. Add the HttpClient .jar files: httpclient, httpcore, commons-codec, and commons-logging (the .jar files will have version information in the filenames). Add the JSON .jar file, which might also have a version number in the .jar filename.
3.  Add a new folder to the src folder by right-clicking src, then select **New** | **Folder** and use sfdc\_rest as the folder name.
4.  Create a new class by right-clicking sfdc\_rest and selecting **New** | **Class**. Name the class Main.
5.  Replace the code Eclipse generates for Main.java as described in the following section.

Use the following simple login example code for your Main.java class. Replace YOUR DEVORG USERNAME with your developer organization username, and replace YOUR DEVORG PASSWORD + SECURITY TOKEN with your developer organization password appended with your security token. If you did not set a security token in your organization, just provide your password. Replace YOUR OAUTH CONSUMER KEY with the consumer key from your development organization’s connected app. Replace YOUR OAUTH CONSUMER SECRET with the consumer secret from your development organization’s connected app. A GitHub Gist of this code is available here: [https://gist.github.com/anonymous/fcb1bc36ef50c0efbeb5](https://gist.github.com/anonymous/fcb1bc36ef50c0efbeb5 "HTML (New Window)").

```

```

The following example output shows a typical successful run of this code.

```

```

If the verification Java project runs and displays output that matches your organization, your developer environment is now set up and you can start developing Java applications that integrate with Salesforce REST APIs.

## Code Examples

```apex
package sfdc_rest;

import java.io.IOException;

import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.util.EntityUtils;
import org.apache.http.client.ClientProtocolException;

import org.json.JSONObject;
import org.json.JSONTokener;
import org.json.JSONException;

public class Main {

    static final String USERNAME     = "YOUR DEVORG USERNAME";
    static final String PASSWORD     = "YOUR DEVORG PASSWORD + SECURITY TOKEN";
    static final String LOGINURL     = "https://login.salesforce.com";
    static final String GRANTSERVICE = "/services/oauth2/token?grant_type=password";
    static final String CLIENTID     = "YOUR OAUTH CONSUMER KEY";
    static final String CLIENTSECRET = "YOUR OAUTH CONSUMER SECRET";

    public static void main(String[] args) {

        DefaultHttpClient httpclient = new DefaultHttpClient();

        // Assemble the login request URL
        String loginURL = LOGINURL + 
                          GRANTSERVICE + 
                          "&client_id=" + CLIENTID + 
                          "&client_secret=" + CLIENTSECRET +
                          "&username=" + USERNAME +
                          "&password=" + PASSWORD;

        // Login requests must be POSTs
        HttpPost httpPost = new HttpPost(loginURL);
        HttpResponse response = null;

        try {
            // Execute the login POST request
            response = httpclient.execute(httpPost);
        } catch (ClientProtocolException cpException) {
            // Handle protocol exception
        } catch (IOException ioException) {
            // Handle system IO exception
        }

        // verify response is HTTP OK
        final int statusCode = response.getStatusLine().getStatusCode();
        if (statusCode != HttpStatus.SC_OK) {
            System.out.println("Error authenticating to Force.com: "+statusCode);
            // Error is in EntityUtils.toString(response.getEntity()) 
            return;
        }

        String getResult = null;
        try {
            getResult = EntityUtils.toString(response.getEntity());
        } catch (IOException ioException) {
            // Handle system IO exception
        }
        JSONObject jsonObject = null;
        String loginAccessToken = null;
        String loginInstanceUrl = null;
        try {
            jsonObject = (JSONObject) new JSONTokener(getResult).nextValue();
            loginAccessToken = jsonObject.getString("access_token");
            loginInstanceUrl = jsonObject.getString("instance_url");
        } catch (JSONException jsonException) {
            // Handle JSON exception
        }
        System.out.println(response.getStatusLine());
        System.out.println("Successful login");
        System.out.println("  instance URL: "+loginInstanceUrl);
        System.out.println("  access token/session ID: "+loginAccessToken);

        // release connection
        httpPost.releaseConnection();
    }
}
```

```
HTTP/1.1 200 OK
Successful login
  instance URL: https://yourInstance.salesforce.com
  access token/session ID: 00DU0000000L5SPxa1XFi0rwB16YCQ.Xyv2nKiCT8iIN9_nkKQJ3UUf
```
