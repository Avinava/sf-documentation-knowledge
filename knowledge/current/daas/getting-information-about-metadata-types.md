---
title: "Getting Information About Metadata Types"
domain: daas
topic: getting-information-about-metadata-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.103Z
estimatedTokens: 238
keywords: [Getting, Metadata, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t, updated]
---

# Getting Information About Metadata Types

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Getting Information About Metadata Types

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

You sometimes need to experiment with the composition of your package.xml manifest file before you settle on the final version that retrieves or deploys the metadata that you want. There are a couple of helper targets, <sf:describeMetadata\> and <sf:listMetadata\>, that are useful for gathering the relevant information during this experimentation period. The build.xml file specifies a series of commands to be executed by Ant. Within the build.xml file are named targets that process a series of commands when you run Ant with a target name.
