---
title: "Retrieving Unpackaged Components"
domain: daas
topic: retrieving-unpackaged-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.133Z
estimatedTokens: 265
keywords: [Retrieving, Unpackaged, Components, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t]
---

# Retrieving Unpackaged Components

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Retrieving Unpackaged Components

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

The unpackaged package contains all of the standard objects, custom objects, Apex classes and other metadata components that exist natively in your organization, and not within a package. To retrieve unpackaged components, use a build.xml target that contains the unpackaged attribute that points to a package.xml file. For example:

```

```

The salesforce-ant.jar file contains Ant tasks for accessing the Metadata API. In the code above, sf:retrieve is an Ant task. The full list of metadata Ant tasks are described in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/ "HTML (New Window)").

## Code Examples

```
<target name="retrieveUnpackaged">
  <mkdir dir="projectFolder"/>
  <sf:retrieve 
      username="${sf.username}" 
      password="${sf.password}" 
      sessionId="${sf.sessionId}"
      serverurl="${sf.serverurl}" 
      retrieveTarget="projectFolder" 
      unpackaged="unpackaged/package.xml"/>
</target>
```
