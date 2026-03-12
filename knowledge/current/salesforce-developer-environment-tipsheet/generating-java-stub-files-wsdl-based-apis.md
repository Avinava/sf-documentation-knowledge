---
title: "Generating Java Stub Files (WSDL-Based
APIs)"
domain: salesforce-developer-environment-tipsheet
topic: generating-java-stub-files-wsdl-based-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.288Z
estimatedTokens: 398
keywords: [Generating, Java, Stub, Files, WSDL-Based, APIs, Salesforce, generate, jar, projects]
---

# Generating Java Stub Files (WSDL-Based
APIs)

> To use WSDL-based Salesforce APIs
with Java, you need to generate .jar stub files that you can use in
your Java projects.

# Generating Java Stub Files (WSDL-Based APIs)

To use WSDL-based Salesforce APIs with Java, you need to generate .jar stub files that you can use in your Java projects.

You’ll need the WSC .jar file to generate stub files. You’ll also need the appropriate WSDL files for the API you plan to use.

1.  Open a command prompt window and navigate to the location where your WSDL and WSC .jar files are.
2.  Generate the Java stub for the WSDL by using the following command in a command prompt window: java –classpath path to WSC jar/WSC jar filename com.sforce.ws.tools.wsdlc path to WSDL/WSDL filename path to output stub jar and filename. You might need to also include additional .jar files that WSC needs, such as Rhino or StringTemplate, in the classpath list, separated by semi-colons (on Windows) or colons (on Mac/Linux). See [Install the Web Services Connector (WSDL-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_wsc.htm "The Lightning Platform Web Services Connector (WSC) is a high-performance runtime framework that makes using WSDL-based Salesforce APIs easier. To install the WSC, download the prebuilt .jar file from the Force MVN repository.") for more information on Rhino and StringTemplate.

An example Windows command for generating the stub .jar file “enterprise\_stub.jar” using the API version 29.0 WSC and the Enterprise WSDL might look something like this:

```

```

Note that this example includes the Rhino and StringTemplate dependent .jar files in the classpath.

## Code Examples

```
java -classpath \testWorkspace\wsc\force-wsc-29.0.0.jar;
\testWorkspace\rhino1_7R4\js.jar;
\testWorkspace\stringTemplate\ST-4.0.7.jar;
\jdk\jdk1.7.0_17\lib\tools.jar 
  com.sforce.ws.tools.wsdlc
  \testWorkspace\wsdl\enterprise.wsdl
  \testWorkspace\stub\enterprise_stub.jar
```

## Related Topics

- Install the Web Services Connector (WSDL-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_wsc.htm)
