---
title: "Verify the WSDL Environment (WSDL-Based
APIs)"
domain: salesforce-developer-environment-dotnet-tipsheet
topic: verify-the-wsdl-environment-wsdl-based-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.271Z
estimatedTokens: 777
keywords: [Verify, WSDL, Environment, WSDL-Based, APIs, developer, simple, test, application, Visual, Studio]
---

# Verify the WSDL Environment (WSDL-Based
APIs)

> You can verify your developer environment with a simple
C# test application in Visual Studio.

# Verify the WSDL Environment (WSDL-Based APIs)

You can verify your developer environment with a simple C# test application in Visual Studio.

You should have Visual Studio installed and have the WSDL files that you need to use available. You’ll need the Enterprise or Partner WSDL to follow the verification steps.

1.  Start Visual Studio.
2.  Click **File** | **New Project**.
3.  In the New Project window, navigate to **Installed** | **Templates** | **Visual C#** | **Windows**. Select **Console Application**.
4.  In the New Project window, under **Name**, name the project VerifyWSDLTest. Under **Solution name**, name the solution VerifyWSDLTest. Under **Location**, pick a file location that you’ll remember. Click **Ok**. A solution is created, and Program.cs is opened for editing.
5.  Click **Project** | **Add Service Reference**.
6.  In the Add Service Reference window, under **Address**, enter the file URL path to your Enterprise or Partner WSDL file. For example, if enterprise.wsdl is saved in c:\\wsdls, enter file://c:\\wsdls\\enterprise.wsdl. Click **Go**. The Services list is populated with an entry that is named SforceService.
7.  Select SforceService. Under **Namespace** enter sforce. Your Add Service Reference window should look something like the following image.![Add Service Reference window screenshot](/docs/resources/img/en-us/260.0?doc_id=tip_sheets%2Fsalesforce_developer_environment_tipsheet%2Fimages%2Fvisualstudio_add_service_reference.png&folder=salesforce_developer_environment_dotnet_tipsheet)Click **Ok**. The WSDL services are imported under the sforce namespace in your project.
8.  Replace the code in Program.cs as described in the following section.

Use the following simple login example code for your Program.cs contents. Replace YOUR DEVORG USERNAME with your developer organization username, and replace YOUR DEVORG PASSWORD AND SECURITY TOKEN with your developer organization password appended with your security token. If you did not set a security token in your organization, just provide your password. A GitHub Gist of this code is available here: [https://gist.github.com/anonymous/7d533cf2b4822fb29317](https://gist.github.com/anonymous/7d533cf2b4822fb29317 "HTML (New Window)").

```

```

The following example output shows a typical successful run of this code.

```

```

If the verification project runs and displays output that matches your organization, your developer environment is set up and you can start developing .NET applications that integrate with Salesforce. If you have additional WSDL files you can add them to your project via the Add Service Reference dialog as described in steps 5 and 6 above.

If you are using Microsoft Visual Studio 2010 or earlier, in step 5, Add Service Reference might be unavailable. Use Add Web Reference instead. Under **URL**, enter the file path to your WSDL, such as file://c:\\wsdls\\enterprise.wsdl. Name the web reference sforce, and click **Add Reference**. If you have to use a web reference, use an instance of SforceService to call SforceService.login() instead of SoapClient.login().

## Code Examples

```apex
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;
using VerifyWSDLTest.sforce;

namespace VerifyWSDLTest
{
    class Program
    {

        private static SoapClient client;
        private static LoginResult loginResult;

        private static bool login()
        {

            client = new SoapClient();

            string acctName = "YOUR DEVORG USERNAME";
            string acctPw = "YOUR DEVORG PASSWORD AND SECURITY TOKEN";
            try
            {
                loginResult = client.login(null, acctName, acctPw);
            }
            catch (Exception e)
            {
                Console.WriteLine("Unexpected login error: " + e.Message);
                Console.WriteLine(e.StackTrace);
                return false;
            }
            return true; // success
        }

        static void Main(string[] args)
        {
            if (login())
            {
                // display some current login settings
                Console.Write("Service endpoint: " + loginResult.serverUrl + "
");
                Console.Write("Username: " + loginResult.userInfo.userName + "
");
                Console.Write("SessionId: " + loginResult.sessionId + "
");
                Console.Write("Press any key to continue:
");
                Console.ReadKey();
            }
        }
    }
}
```

```
Service endpoint: https://yourInstance.salesforce.com/services/Soap/c/29.0/00DU0000000T5f0/0DFU00000008XpB
Username: myUser@my_devedition.com
SessionId: <SALESFORCE_ACCESS_TOKEN>
Press any key to continue:
```
