---
title: "Step 3: Import the WSDL File Into Your Development Platform"
domain: api
topic: step-3-import-the-wsdl-file-into-your-development-platform
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.857Z
estimatedTokens: 1595
keywords: [Step, Import, WSDL, File, Development, Platform, environment, generate, necessary, objects, building, client, Web, service, applications]
---

# Step 3: Import the WSDL File Into Your Development Platform

> After you have the WSDL file, import it into your development platform so that your
			development environment can generate the necessary objects for use in building client
			Web service applications in that environment. This section provides sample instructions
			for WSC and Microsoft Visual Stud

# Step 3: Import the WSDL File Into Your Development Platform

After you have the WSDL file, import it into your development platform so that your development environment can generate the necessary objects for use in building client Web service applications in that environment. This section provides sample instructions for WSC and Microsoft Visual Studio. For instructions about other development platforms, see your platform's product documentation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

The process for importing WSDL files is identical for the enterprise and partner WSDL files.

## Instructions for Java Environments (WSC)

Java environments access the API through Java objects that serve as proxies for their server-side counterparts. Before using the API, you must first generate these objects from your organization's WSDL file.

Each SOAP client has its own tool for this process. For WSC, use the wsdlc utility.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Before you run wsdlc, you must have the WSC JAR file installed on your system and referenced in your classpath.

The basic syntax for wsdlc is:

```

```

This command generates an output jar file based on the specified WSDL file. After the output jar file is created, reference it along with the WSC .jar file (for example, force-wsc-57.0.0-uber.jar) in your Java program to create a client application.

## Instructions for Microsoft Visual Studio

Visual Studio languages access the API through objects that serve as proxies for their server-side counterparts. Before using the API, you must first generate these objects from your organization's WSDL file.

After you have the proxy classes for the server-side objects, ensure that you specify whether you have set any values on non-string fields. For more information, see [Implementation Considerations](atlas.en-us.api.meta/api/implementation_considerations.htm#sforce_api_concepts_dotnet_string_caveat).

Visual Studio provides two approaches for importing your WSDL file and generating an XML Web service client: an IDE-based approach and a command-line approach. This walkthrough describes how to import your WSDL file through the IDE.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Before you begin, the first step is to create an application or open an existing application in Visual Studio. In addition, you need the generated WSDL file, as described in [Generating the WSDL File for Your Organization](atlas.en-us.api.meta/api/sforce_api_quickstart_steps_generate_wsdl.htm "To access the Lightning Platform Web service, you need a Web Service Description Language (WSDL) file. The WSDL file defines the Web service that is available to you.").

An XML Web service client is any component or application that references and uses an XML Web service. It isn’t necessarily a client-based application. In fact, in many cases, your XML Web service clients can be other Web applications, such as Web Forms or even other XML Web services. When accessing XML Web services in managed code, a proxy class and the .NET Framework handle all of the infrastructure coding.

To access an XML Web service from managed code:

1.  Name your project Walkthrough or change the using directive in the following sample to your\_project\_name.web\_reference\_name. Then, add a Web reference to your project for the XML Web service that you want to access. The Web reference creates a proxy class with methods that serve as proxies for each exposed method of the XML Web service.
2.  Add the namespace for the Web reference.
3.  Create an instance of the proxy class and then access the methods of that class as you would the methods of any other class.

You can add either a .NET 2.0 style Web reference or a .NET 3.0 style Service reference, depending on your version of Visual Studio and preferred developer environment. A .NET 3.0 style reference uses services like SoapClient instead of SforceService.

To add a Web reference:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

These steps are different depending on the version of Visual Studio that you're using. For more information, see Adding and Removing Web References in the Visual Studio documentation.

1.  In the Project menu, select **Add Service Reference**, select **Advanced**, and then select **Add Web Reference**.
2.  In the URL box of the Add Web Reference dialog box, type the URL to obtain the service description of the XML Web service you want to access, such as:

    C:\\WSDLFiles\\enterprise.wsdl

3.  To retrieve information about the XML Web service, click **Go**.
4.  In the Web reference name box, rename the Web reference to sforce, which is the name you use for this Web reference.
5.  To add a Web reference for the target XML Web service, click **Add Reference**.
6.  Visual Studio retrieves the service description and generates a proxy class to interface between your application and the XML Web service.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

If you’re using Visual Basic .Net 1.1 and the enterprise WSDL, modify the generated Web service client to overcome a bug in Visual Studio's client generation utility. The API exposes two objects ( [Case](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_case.htm "HTML (New Window)") and [Event](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_event.htm "HTML (New Window)")) whose names conflict with Visual Basic keywords. When the classes that represent these objects are created, Visual Studio wraps the class names with brackets (\[Case\] and \[Event\]). This is the method by which you can reuse keywords.

Unfortunately, in the definition of the SObject class, Visual Studio doesn’t wrap Case and Event to class references in the System.Xml.Serialization.XmlIncludeAttribute that are part of the SObject definition. To work around this problem in Visual Studio, edit the XmlIncludeAttribute settings for Case and Event, as shown in the example. These edits don’t apply to C# and only apply when using the enterprise version of the WSDL.

```

```

## Code Examples

```
java -classpath pathToJAR/force-wsc-XX.X.X-uber.jar com.sforce.ws.tools.wsdlc pathToWsdl/WsdlFilename​ pathToOutputJar/OutputJarFilename
```

```apex
System.Xml.Serialization.XmlIncludeAttribute(GetType([Event])), _

     System.Xml.Serialization.XmlIncludeAttribute(GetType([Case])), _
```

## Related Topics

- Implementation
					Considerations (atlas.en-us.api.meta/api/implementation_considerations.htm)
- Generating the WSDL File for Your
					Organization (atlas.en-us.api.meta/api/sforce_api_quickstart_steps_generate_wsdl.htm)
