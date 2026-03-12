---
title: "Verify the REST Environment (REST-Based
APIs)"
domain: salesforce-developer-environment-dotnet-tipsheet
topic: verify-the-rest-environment-rest-based-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.265Z
estimatedTokens: 513
keywords: [Verify, REST, Environment, REST-Based, APIs, developer, simple, test, application, Visual, Studio]
---

# Verify the REST Environment (REST-Based
APIs)

> You can verify your developer environment with a simple
C# test application in Visual Studio.

# Verify the REST Environment (REST-Based APIs)

You can verify your developer environment with a simple C# test application in Visual Studio.

You must have Visual Studio installed to create a C# test application.

1.  Start Visual Studio.
2.  Click **File** | **New Project**.
3.  In the New Project window, navigate to **Installed** | **Templates** | **Visual C#** | **Windows**. Select **Console Application**.
4.  In the New Project window, under **Name**, name the project VerifyRESTTest. Under **Solution name**, name the solution VerifyRESTTest. Under **Location**, pick a file location that you’ll remember. Click **Ok**. A solution is created, and Program.cs is opened for editing.
5.  Click **Project** | **Add Reference**.
6.  In the Reference Manager window, navigate to **Assemblies** | **Framework**. Select **System.Runtime.Serialization**. Ensure that the checkbox is selected, and click **Ok**.
7.  Replace the code in Program.cs as described in the following section.

Use the following simple login example code for your Program.cs file. Replace YOUR DEVORG USERNAME with your developer organization username, and replace YOUR DEVORG PASSWORD + SECURITY TOKEN with your developer organization password appended with your security token. If you did not set a security token in your organization, just provide your password. Replace YOUR OAUTH CONSUMER KEY with the consumer key from your development organization’s connected app. Replace YOUR OAUTH CONSUMER SECRET with the consumer secret from your development organization’s connected app. A GitHub Gist of this code is available here: [https://gist.github.com/anonymous/db367194e6e24faa081b](https://gist.github.com/anonymous/db367194e6e24faa081b "HTML (New Window)").

```

```

The following example output shows a typical successful run of this code.

```

```

If the verification C# project runs and displays output that matches your organization, your developer environment is set up and you can start developing .NET applications that integrate with Salesforce REST APIs.

## Code Examples

```apex
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net; 
using System.Runtime.Serialization; 
using System.Runtime.Serialization.Json; 

namespace VerifyRESTTest
{
    class Program
    {
        // Class used for serializing the OAuth JSON response
        [DataContract]
        public class OAuthUsernamePasswordResponse
        {
            [DataMember]
            public string access_token { get; set; }
            [DataMember]
            public string id { get; set; }
            [DataMember]
            public string instance_url { get; set; }
            [DataMember]
            public string issued_at { get; set; }
            [DataMember]
            public string signature { get; set; }
        }

        private static string accessToken = "";
        private static string instanceUrl = "";

        private static void login()
        {
            string acctName = "YOUR DEVORG USERNAME";
            string acctPw = "YOUR DEVORG PASSWORD AND SECURITY TOKEN";
            string consumerKey = "YOUR OAUTH CONSUMER KEY";
            string consumerSecret = "YOUR OAUTH CONSUMER SECRET";

            // Just for testing the developer environment, we use the simple username-password OAuth flow.
            // In production environments, make sure to use a stronger OAuth flow, such as User-Agent
            string strContent = "grant_type=password" + 
                "&client_id=" + consumerKey + 
                "&client_secret=" + consumerSecret + 
                "&username=" + acctName + 
                "&password=" + acctPw;

            string urlStr = "https://login.salesforce.com/services/oauth2/token?" + strContent;

            HttpWebRequest request = WebRequest.Create(urlStr) as HttpWebRequest;
            request.Method = "POST";

            try
            {
                using (HttpWebResponse response = request.GetResponse() as HttpWebResponse)
                {
                    if (response.StatusCode != HttpStatusCode.OK)
                        throw new Exception(String.Format(
                            "Server error (HTTP {0}: {1}).",
                            response.StatusCode,
                            response.StatusDescription));

                    // Parse the JSON response and extract the access token and instance URL
                    DataContractJsonSerializer jsonSerializer = new DataContractJsonSerializer(typeof(OAuthUsernamePasswordResponse));
                    OAuthUsernamePasswordResponse objResponse = jsonSerializer.ReadObject(response.GetResponseStream()) as OAuthUsernamePasswordResponse;
                    accessToken = objResponse.access_token;
                    instanceUrl = objResponse.instance_url;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("
Exception Caught!");
                Console.WriteLine("Message :{0} ", e.Message);
            }
        }

        static void Main(string[] args)
        {
            login(); 
            if (accessToken != "") 
            {
                // display some current login settings
                Console.Write("Instance URL: " + instanceUrl + "
");
                Console.Write("Access Token: " + accessToken + "
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
Instance URL: https://yourInstance.salesforce.com
Access Token: <SALESFORCE_ACCESS_TOKEN>
Press any key to continue:
```
