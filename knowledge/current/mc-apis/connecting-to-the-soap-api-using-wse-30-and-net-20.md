---
title: "Connecting to the SOAP API Using WSE 3.0 and .NET 2.0"
domain: mc-apis
topic: connecting-to-the-soap-api-using-wse-30-and-net-20
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:15.781Z
estimatedTokens: 930
keywords: [Code, Connecting, SOAP, API, WSE, 3.0, NET, 2.0, development, environment, systems, Marketing, Cloud, standards, instructions, Visual, Studio, Express, connect, Why, How, Windows, Vista, 64-Bit, Users, Items]
---

> This page contains information on connecting your development environment or other systems to the Marketing Cloud SOAP API using the WSE 3.0 standards.
This information contains instructions for connecting using Visual Studio 2005 and Visual Studio 2005 Express. For Visual Studio 2008, connect using

# Connecting to the SOAP API Using WSE 3.0 and .NET 2.0

This page contains information on connecting your development environment or other systems to the Marketing Cloud SOAP API using the WSE 3.0 standards. This information contains instructions for connecting using Visual Studio 2005 and Visual Studio 2005 Express. For Visual Studio 2008, connect using WCF.

## Why Connect to the SOAP API using WSE 3.0/.NET 2.0

You can use the connection to the SOAP API to test your calls and perform various tasks, such as sending email and retrieving tracking information.

## How To Connect to the SOAP API using WSE 3.0/.NET 2.0

You must configure your development environment correctly in order to establish a connection with the SOAP API servers. The SOAP API uses WSS 1.0 message level security to secure communications with Marketing Cloud servers.

### Windows 7 and Vista 64-Bit Users

All users of Windows 7 and Vista 64-bit operating systems must complete these steps before proceeding to the steps in the next section.

1.  Locate the devenv.exe.config file for your Visual Studio 2005 or Visual Studio 2005 Express instance. You can typically find this file at C:\\Program Files (x86)\\Microsoft Visual Studio 8\\Common7\\IDE\\devenv.exe.config.
2.  Make a backup copy of the file and store it in a different location.
3.  Add the following configuration information to the file:

```
<configuration>
    <system.web>
        <webServices>
            <soapExtensionImporterTypes>
                <add type="Microsoft.Web.Services3.Description.WseExtensionImporter, Microsoft.Web.Services3, Version=3.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
            </soapExtensionImporterTypes>
        </webServices>
    </system.web>
</configuration>
```

### Visual Studio 2005

Follow these steps to connect your Visual Studio 2005 instance to the SOAP API:

1.  In Visual Studio 2005, create a new project.
2.  Right-click on that project and select **Add Web Reference**.
3.  Add the appropriate WSDL referencein the URL field.
4.  In the **Web Reference Name field**, enter the title **Marketing Cloud API**.
5.  Click **Add Reference**.
6.  Return to the project window and right-click your project.
7.  Select **WSE Settings 3.0**.
8.  Under the **General** tab, click **Enable This Project For Web Services Enhancements**.
9.  Update your web reference to your new reference object.
10.  Click **OK**.

If you wish to enable this feature on an existing project, right-click that project andselect **WSE 3.0 Settings** to get to a screen where you can enable WSE for the project. If you enable WSE after you've added a web reference to the Marketing Cloud API, you need to update the web reference.

### Visual Studio 2005 Express

Users of Visual Studio Express editions cannot take advantage of the Visual Studio.NET/WSE integration. However, you can usethe following steps to set up WSE with Visual Studio Express editions.

1.  Create your project.
2.  Close your project.
3.  Open project using the WSE client application.
4.  Click **Enable Web Service Enhancements**.
5.  Open your project.
6.  Create the web reference to the appropriate WSDL URL.
7.  Begin writing code.

## Code

The sample code below demonstrates how to connect and interact with the SOAP API.

```
PartnerAPIWse partnerAPI = new PartnerAPIWse();
UsernameTokenProvider utp = new UsernameTokenProvider(username, password);
partnerAPI.SetClientCredential<UsernameToken>(utp.GetToken());
Policy policy = new Policy(new UsernameOverTransportAssertion());
partnerAPI.SetPolicy(policy);
```

## Related Items

[Connect Using WCF](atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_web_service_api_using_wcf.htm)

## Related Topics

- Connect Using WCF (atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_web_service_api_using_wcf.htm)
