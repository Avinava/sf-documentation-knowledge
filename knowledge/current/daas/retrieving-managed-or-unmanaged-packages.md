---
title: "Retrieving Managed or Unmanaged Packages"
domain: daas
topic: retrieving-managed-or-unmanaged-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.131Z
estimatedTokens: 210
keywords: [Retrieving, Managed, Unmanaged, Packages, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions]
---

# Retrieving Managed or Unmanaged Packages

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Retrieving Managed or Unmanaged Packages

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

Packages are useful for distributing related bundles of metadata across multiple instances or organizations, via Lightning Platform AppExchange. However, you can use the Ant Migration Tool to freely retrieve and deploy packaged metadata without using AppExchange. You retrieve both managed and unmanaged packages in the same way.

To retrieve a package, specify a packageNames parameter in the build.xml file. For example:

```

```

## Code Examples

```
<target name="retrieveNamedPackage">
  <sf:retrieve 
      username="${sf.username}" 
      password="${sf.password}"
      sessionId="${sf.sessionId}" 
      serverurl="${sf.serverurl}" 
      retrieveTarget="projectFolder" 
      packageNames="mySourcePackage"/>
</target>
```
