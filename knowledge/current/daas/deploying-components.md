---
title: "Deploying Components"
domain: daas
topic: deploying-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.083Z
estimatedTokens: 162
keywords: [Deploying, Components, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t, updated]
---

# Deploying Components

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Deploying Components

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

You can deploy any set of components as a package or into your organization directly in the unpackaged package. The package used is not determined by the build.xml target, but by the project manifest (package.xml). A sample deployment target follows:

```

```

## Code Examples

```
<target name="deployUnpackaged">
  <sf:deploy 
      username="${sf.username}" 
      password="${sf.password}" 
      sessionId="${sf.sessionId}"
      serverurl="${sf.serverurl}" 
      deployroot="projectFolder"/>
</target>
```
