---
title: "Retrieving Metadata from a Salesforce Organization"
domain: daas
topic: retrieving-metadata-from-a-salesforce-organization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.122Z
estimatedTokens: 514
keywords: [Retrieving, Metadata, Salesforce, Organization, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions]
---

# Retrieving Metadata from a Salesforce Organization

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Retrieving Metadata from a Salesforce Organization

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

To retrieve Lightning Platform components:

1.  Open a command prompt.
2.  Run Ant by specifying a target name in build.xml. If it’s the first time you’re running Ant, use ant retrieveUnpackaged to retrieve unpackaged components specified in package.xml.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

-   The sample build.xml contains some useful targets for various retrieve() and deploy() options that you can modify or use as is. To see a list of all your named targets in build.xml, enter ant -p at the command line.
-   You can deploy or retrieve up to 10,000 files at once. The maximum size of the deployed or retrieved .zip file is 39 MB. If the files are uncompressed in an unzipped folder, the size limit is 600 MB or 629,145,600 bytes. The size limit in bytes is calculated as 600 x 1024 x 1024. If you’re working with many components, use the [listMetadata](atlas.en-us.daas.meta/daas/forcemigrationtool_listmetadata.htm "The listMetadata target retrieves property information about your metadata components.This target is useful to identify individual components in package.xml for a retrieval or a high-level view of particular metadata types. For example, you can use this target to return a list of names of all your CustomObject or Layout components. Then use the information retrieve a subset of the components.") target to identify the subset of files that you want to retrieve. You can also retrieve batches of components as described in [Retrieving Components in Bulk](atlas.en-us.daas.meta/daas/forcemigrationtool_retrieve_bulk.htm#forcemigrationtool_retrieve_bulk).

## Related Topics

- listMetadata (atlas.en-us.daas.meta/daas/forcemigrationtool_listmetadata.htm)
- Retrieving Components in Bulk (atlas.en-us.daas.meta/daas/forcemigrationtool_retrieve_bulk.htm)
