---
title: "Using the Ant Migration Tool"
domain: daas
topic: using-the-ant-migration-tool
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.043Z
estimatedTokens: 401
keywords: [Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t, updated, new, functionality]
---

# Using the Ant Migration Tool

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Using the Ant Migration Tool

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

The Ant Migration Tool is a Java/Ant-based command-line utility for moving metadata between a local directory and a Salesforce organization. You can use the Ant Migration Tool to retrieve components, create scripted deployment, and repeat deployment patterns.

The general procedure you will follow when using the Ant Migration Tool to copy metadata from one Salesforce organization to another is:

1.  [Enter credentials and connection information for source Salesforce organization in build.properties](atlas.en-us.daas.meta/daas/forcemigrationtool_connect.htm)
2.  [Create retrieve targets in build.xml](atlas.en-us.daas.meta/daas/forcemigrationtool_build.htm)
3.  [Construct a project manifest in package.xml](atlas.en-us.daas.meta/daas/daas_package.htm)
4.  [Run the Ant Migration Tool to retrieve metadata files from Salesforce](atlas.en-us.daas.meta/daas/forcemigrationtool_retrieve.htm)
5.  [Enter credentials and connection information for destination Salesforce organization in build.properties](atlas.en-us.daas.meta/daas/forcemigrationtool_connect.htm)
6.  [Run the Ant Migration Tool to deploy metadata files or deletions to Salesforce](atlas.en-us.daas.meta/daas/forcemigrationtool_deploy.htm)

## Related Topics

- Enter credentials and connection information for source Salesforce organization
in build.properties (atlas.en-us.daas.meta/daas/forcemigrationtool_connect.htm)
- Create retrieve targets in build.xml (atlas.en-us.daas.meta/daas/forcemigrationtool_build.htm)
- Construct a
project manifest in package.xml (atlas.en-us.daas.meta/daas/daas_package.htm)
- Run the Ant Migration Tool to retrieve metadata files from Salesforce (atlas.en-us.daas.meta/daas/forcemigrationtool_retrieve.htm)
- Enter credentials and connection information for destination Salesforce organization
in build.properties (atlas.en-us.daas.meta/daas/forcemigrationtool_connect.htm)
- Run the Ant Migration Tool to deploy metadata files or deletions to Salesforce (atlas.en-us.daas.meta/daas/forcemigrationtool_deploy.htm)
