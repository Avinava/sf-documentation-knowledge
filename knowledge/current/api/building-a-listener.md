---
title: "Building a Listener"
domain: api
topic: building-a-listener
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.785Z
estimatedTokens: 747
keywords: [Building, Listener, process, Web, service, tools, similar, Consult, documentation, tool]
---

# Building a Listener

> The process for other Web service tools is similar. Consult the
            documentation for your Web service tool.

# Building a Listener

After you’ve defined an outbound message and configured an outbound messaging endpoint, download the WSDL and create a listener:

1.  Right-click **Click for WSDL** and select Save As to save the WSDL to a local directory with an appropriate file name. For example, for an outbound message that deals with leads, you could name the WSDL file leads.wsdl.
2.  Unlike the enterprise or partner WSDLs, which describe the messages the client sends to Salesforce, this WSDL defines the messages that Salesforce sends to your client application.
3.  Most Web services tools generate stub listeners for you, in much the same way as they generate a client stub for the enterprise or partner WSDL. Look for a server-side stub option.

    For example, for .NET 2.0:

    1.  Run wsdl.exe /serverInterface leads.wsdl with .NET 2.0. This command generates NotificationServiceInterfaces.cs, which defines the notification interface.
    2.  Create a class that implements NotificationServiceInterfaces.cs.
    3.  You implement your listener by writing a class that implements this interface. There are a number of ways to do this. One simple way is to compile the interface to a DLL first (DLLs must be in the bin directory in ASP.NET).

        ```

        ```

        Now write an ASMX-based Web service that implements this interface. For example, in MyNotificationListener.asmx:

        ```

        ```

        This example is a simple implementation, actual implementations are more complex.
    4.  Deploy the service by creating a new virtual directory in IIS for the directory that contains the MyNotificationListener.asmx.
    5.  You can now test that the service is deployed by viewing the service page with a browser. For example, if you create a virtual directory salesforce, you'd go to http://localhost/salesforce/MyNotificationListener.asmx.

    The process for other Web service tools is similar. Consult the documentation for your Web service tool.


Your listener must meet these requirements:

-   Must be reachable from the public Internet.
-   For security reasons, Salesforce restricts the outbound ports you can specify to one of the following:
    -   80: This port only accepts HTTP connections.
    -   443: This port only accepts HTTPS connections.
    -   1024–66535 (inclusive): These ports accept HTTP or HTTPS connections.
-   To be valid, the common name (CN) of the certificate must match the domain name for your endpoint's server, and the certificate must be issued by a Certificate Authority trusted by Java 2 Platform, Standard Edition (J2SE) 5.0 (JDK 1.5).
-   If your certificate expires, message delivery fails.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=api)

#### Warning

To avoid an infinite loop of outbound messages that trigger changes that trigger more outbound messages, ensure that the user who updates the objects does **not** have the “Send Outbound Messages” permission.

## Code Examples

```
mkdir bin
csc /t:library /out:bin
si.dll NotificationServiceInterfaces.cs
```

```apex
<%@WebService class="MyNotificationListener" language="C#"%>
class MyNotificationListener : INotificationBinding
{            public notificationsResponse notifications(notifications n)
             {
                    notificationsResponse r = new notificationsResponse();
                    r.Ack = true;
                    return r;
             }
}
```
