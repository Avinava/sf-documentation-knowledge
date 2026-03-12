---
title: "Examples Using the Partner WSDL"
domain: api
topic: examples-using-the-partner-wsdl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.823Z
estimatedTokens: 581
keywords: [Examples, Partner, WSDL, generate, proxy, client, code, development, environment, start, writing, application, needs, log, Salesforce]
---

# Examples Using the Partner WSDL

> After you generate the proxy client code and set up your development environment, you can
            start writing your client application. First, your application needs to log into the
            Salesforce service using the partner authentication endpoint. After a successful login,
            y

# Examples Using the Partner WSDL

This section includes examples in Java and C# for making API calls using the partner WSDL. Before running these samples, perform the following steps in the quick start tutorial to get the partner WSDL file and generate the proxy client code for your development environment.

-   [Step 2: Generate or Obtain the Web Service WSDL](atlas.en-us.api.meta/api/sforce_api_quickstart_steps_generate_wsdl.htm "To access the Lightning Platform Web service, you need a Web Service Description Language (WSDL) file. The WSDL file defines the Web service that is available to you.")
-   [Step 3: Import the WSDL File Into Your Development Platform](atlas.en-us.api.meta/api/sforce_api_quickstart_steps_import_wsdl.htm)

After you generate the proxy client code and set up your development environment, you can start writing your client application. First, your application needs to log into the Salesforce service using the partner authentication endpoint. After a successful login, you can execute the sample methods.

For your convenience, template classes are provided, one in Java and one in C#, that make a login call. You can use them to execute the sample methods provided later in this section.

**Sample template class for Java:** This sample prompts the user to enter the username, password, and authentication endpoint. Next, it logs the user in. For the authentication endpoint URL, pass in the endpoint found in the partner WSDL file.

```

```

**Sample template class for C#:** This sample prompts the user to enter the username and password. Next, it logs the user in. The project name for this sample is assumed to be TemplatePartner and the Web reference name sforce. If these values are different for your project, make sure to change the using directive to appropriate values for your project: using your\_project\_name.web\_reference\_name;.

```

```

This partner WSDL samples are:

-   [Sample query and queryMore Calls](atlas.en-us.api.meta/api/sample_query_calls.htm)
-   [Sample search Call](atlas.en-us.api.meta/api/sample_search_call.htm)
-   [Sample create Call](atlas.en-us.api.meta/api/sample_create_call.htm)
-   [Sample update Call](atlas.en-us.api.meta/api/sample_update_call.htm "These Java and C# examples show how to use the update() call for the Partner WSDL.")

## Code Examples

```apex
import com.sforce.soap.partner.PartnerConnection;
import com.sforce.soap.partner.sobject.*;
import com.sforce.soap.partner.*;
import com.sforce.ws.ConnectorConfig;
import com.sforce.ws.ConnectionException;
import com.sforce.soap.partner.Error;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.util.*;

public class PartnerSamples {
    PartnerConnection partnerConnection = null;
    private static BufferedReader reader =
        new BufferedReader(new InputStreamReader(System.in));
    
    public static void main(String[] args) {
        PartnerSamples samples = new PartnerSamples();
        if (samples.login()) {
            // Add calls to the methods in this class.
            // For example:
            // samples.querySample();
        }
    } 
    
    private String getUserInput(String prompt) {
        String result = "";
        try {
          System.out.print(prompt);
          result = reader.readLine();
        } catch (IOException ioe) {
          ioe.printStackTrace();
        }
        return result;
    }
    
    private boolean login() {
        boolean success = false;
        String username = getUserInput("Enter username: ");
        String password = getUserInput("Enter password: ");
        String authEndPoint = getUserInput("Enter auth end point: ");

        try {
          ConnectorConfig config = new ConnectorConfig();
          config.setUsername(username);
          config.setPassword(password);
          
          config.setAuthEndpoint(authEndPoint);
          config.setTraceFile("traceLogs.txt");
          config.setTraceMessage(true);
          config.setPrettyPrintXml(true);

          partnerConnection = new PartnerConnection(config);          

          success = true;
        } catch (ConnectionException ce) {
          ce.printStackTrace();
        } catch (FileNotFoundException fnfe) {
          fnfe.printStackTrace();
        }

        return success;
      }

    // 
    // Add your methods here.
    //
}
```

```apex
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Services.Protocols;
using System.Collections;
using TemplatePartner.sforce;

namespace TemplatePartner
{
    class PartnerSamples
    {
        private SforceService binding;

        static void Main(string[] args)
        {
            PartnerSamples samples = new PartnerSamples();
            if (samples.login())
            {
            // Add calls to the methods in this class.
            // For example:
            // samples.querySample();
            }
        }

        private bool login()
        {
            Console.Write("Enter username: ");
            string username = Console.ReadLine();
            Console.Write("Enter password: ");
            string password = Console.ReadLine();

            // Create a service object 
            binding = new SforceService();

            // Timeout after a minute 
            binding.Timeout = 60000;

            // Try logging in   
            LoginResult lr;
            try
            {

                Console.WriteLine("
Logging in...
");
                lr = binding.login(username, password);
            }

            // ApiFault is a proxy stub generated from the WSDL contract when     
            // the web service was imported 
            catch (SoapException e)
            {
                // Write the fault code to the console 
                Console.WriteLine(e.Code);

                // Write the fault message to the console 
                Console.WriteLine("An unexpected error has occurred: " + e.Message);

                // Write the stack trace to the console 
                Console.WriteLine(e.StackTrace);

                // Return False to indicate that the login was not successful 
                return false;
            }

            // Check if the password has expired 
            if (lr.passwordExpired)
            {
                Console.WriteLine("An error has occurred. Your password has expired.");
                return false;
            }

            // Set the returned service endpoint URL
            binding.Url = lr.serverUrl;

            // Set the SOAP header with the session ID returned by
            // the login result. This will be included in all
            // API calls.
            binding.SessionHeaderValue = new SessionHeader();
            binding.SessionHeaderValue.sessionId = lr.sessionId;            

            // Return true to indicate that we are logged in, pointed  
            // at the right URL and have our security token in place.     
            return true;
        }

    // 
    // Add your methods here.
    //
}
```

## Related Topics

- Step 2: Generate or Obtain
                        the Web Service WSDL (atlas.en-us.api.meta/api/sforce_api_quickstart_steps_generate_wsdl.htm)
- Step 3: Import the WSDL File
                        Into Your Development Platform (atlas.en-us.api.meta/api/sforce_api_quickstart_steps_import_wsdl.htm)
- Sample query and queryMore Calls (atlas.en-us.api.meta/api/sample_query_calls.htm)
- Sample search Call (atlas.en-us.api.meta/api/sample_search_call.htm)
- Sample create Call (atlas.en-us.api.meta/api/sample_create_call.htm)
- Sample update Call (atlas.en-us.api.meta/api/sample_update_call.htm)
