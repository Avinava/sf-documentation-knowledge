---
title: "Step 2: Import the WSDL Files Into Your
Development Platform"
domain: metadata-api
topic: step-2-import-the-wsdl-files-into-your-development-platform
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:41.506Z
estimatedTokens: 448
keywords: [Step, Import, WSDL, Files, Development, Platform, Once, environment, generate, necessary, objects, building, client, Web, service]
---

# Step 2: Import the WSDL Files Into Your
Development Platform

> Once you have the WSDL files, import them into your development
platform so that your development environment can generate the necessary
objects for use in building client Web service applications. This
section provides sample instructions for WSC. For instructions about
other development platforms,

# Step 2: Import the WSDL Files Into Your Development Platform

Once you have the WSDL files, import them into your development platform so that your development environment can generate the necessary objects for use in building client Web service applications. This section provides sample instructions for WSC. For instructions about other development platforms, see your platform’s product documentation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The process for importing WSDL files is identical for the metadata and enterprise WSDL files.

## Instructions for Java Environments (WSC)

Java environments access the API through Java objects that serve as proxies for their server-side counterparts. Before using the API, you must first generate these objects from your organization's WSDL file.

Each SOAP client has its own tool for this process. For WSC, use the wsdlc utility.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Before you run wsdlc, you must have the WSC JAR file installed on your system and referenced in your classpath. You can download the latest force-wsc JAR file and its dependencies (dependencies are listed on the page when you select a version) from [mvnrepository.com/artifact/com.force.api/force-wsc/](http://mvnrepository.com/artifact/com.force.api/force-wsc/ "HTML (New Window)").

The basic syntax for wsdlc is:

```

```

For example, on Windows:

```

```

On Mac OS X and Unix, use a colon instead of a semicolon in between items in the classpath:

```

```

wsdlc generates a JAR file and Java source code and bytecode files for use in creating client applications. Repeat this process for the enterprise WSDL to create an enterprise.JAR file.

## Code Examples

```
java -classpath pathToWsc;pathToWscDependencies com.sforce.ws.tools.wsdlc pathToWsdl/WsdlFilename pathToOutputJar/OutputJarFilename
```

```
java –classpath force-wsc-30.0.0.jar;ST4-4.0.7.jar;antlr-runtime-3.5.jar com.sforce.ws.tools.wsdlc metadata.wsdl metadata.jar
```

```
java –classpath force-wsc-30.0.0.jar:ST4-4.0.7.jar:antlr-runtime-3.5.jar com.sforce.ws.tools.wsdlc metadata.wsdl metadata.jar
```
