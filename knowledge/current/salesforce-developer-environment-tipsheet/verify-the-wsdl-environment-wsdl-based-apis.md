---
title: "Verify the WSDL Environment (WSDL-Based
APIs)"
domain: salesforce-developer-environment-tipsheet
topic: verify-the-wsdl-environment-wsdl-based-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.306Z
estimatedTokens: 463
keywords: [Verify, WSDL, Environment, WSDL-Based, APIs, developer, simple, Java, test, application, Eclipse]
---

# Verify the WSDL Environment (WSDL-Based
APIs)

> You can verify your developer environment with a simple
Java test application in Eclipse.

# Verify the WSDL Environment (WSDL-Based APIs)

You can verify your developer environment with a simple Java test application in Eclipse.

You should have the JDK, Eclipse, and WSC installed, and have generated the Java stub .jar files for the WSDL files that you need to use. You’ll need the stub .jar file for either the Enterprise or Partner WSDL to follow the verification steps.

1.  Run Eclipse. Click **File** | **New** | **Java Project** and name the project SF-WSC-Test.
2.  Add the WSC and stub .jar files to your project. Click **Project** | **Properties** | **Java Build Path** | **Libraries**, click **Add External JARs**, select the WSC, and stub .jar files, and click **OK**.
3.  Add a new folder to the src folder by right-clicking src, then select **New** | **Folder** and use wsc as the folder name.
4.  Create a new class by right-clicking wsc and selecting **New** | **Class**. Name the class Main.
5.  Replace the code Eclipse generates for Main.java as described in the following section.

Use the following simple login example code for your Main.java class. Replace YOUR DEVORG USERNAME with your developer organization username, and replace YOUR DEVORG PASSWORD AND SECURITY TOKEN with your developer organization password appended with your security token. If you did not set a security token in your organization, just provide your password. A GitHub Gist of this code is available here: [https://gist.github.com/anonymous/78864d2c4ccfe4e983ef](https://gist.github.com/anonymous/78864d2c4ccfe4e983ef "HTML (New Window)").

```

```

The following example output shows a typical successful run of this code.

```

```

If the verification Java project runs and displays output that matches your organization, your developer environment is set up and you can start developing Java applications that integrate with Salesforce.

## Code Examples

```apex
package wsc;

import com.sforce.soap.enterprise.Connector;
import com.sforce.soap.enterprise.EnterpriseConnection;
import com.sforce.ws.ConnectionException;
import com.sforce.ws.ConnectorConfig;

public class Main {
    static final String USERNAME = "YOUR DEVORG USERNAME";
    static final String PASSWORD = "YOUR DEVORG PASSWORD AND SECURITY TOKEN";
    static EnterpriseConnection connection;

    public static void main(String[] args) {

        ConnectorConfig config = new ConnectorConfig();
        config.setUsername(USERNAME);
        config.setPassword(PASSWORD);

        try {

            connection = Connector.newConnection(config);

            // display some current settings
            System.out.println("Auth EndPoint: "+config.getAuthEndpoint());
            System.out.println("Service EndPoint: "+config.getServiceEndpoint());
            System.out.println("Username: "+config.getUsername());
            System.out.println("SessionId: "+config.getSessionId());

        } catch (ConnectionException e1) {
            e1.printStackTrace();
        } 
    }
}
```

```
Auth EndPoint: https://login.salesforce.com/services/Soap/c/27.0
Service EndPoint: https://yourInstance.salesforce.com/services/Soap/c/27.0/00DU0000000L5f0
Username: testuser@testorg.com
SessionId: <SALESFORCE_ACCESS_TOKEN>
```
