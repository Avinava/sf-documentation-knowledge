---
title: "Install the Ant Migration Tool"
domain: daas
topic: install-the-ant-migration-tool
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.107Z
estimatedTokens: 657
keywords: [Install, Ant, Migration, Tool, Follow, steps, download]
---

# Install the Ant Migration Tool

> Follow these steps to download and install the Ant Migration Tool.

# Install the Ant Migration Tool

Follow these steps to download and install the Ant Migration Tool.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

If you don’t have Ant installed, see [Prerequisites for Using the Ant Migration Tool](atlas.en-us.daas.meta/daas/forcemigrationtool_prereq.htm).

1.  [Download the .zip file of the Winter ’24 Ant Migration Tool](https://gs0.salesforce.com/dwnld/SfdcAnt/salesforce_ant_59.0.zip). The download link doesn’t require authentication to Salesforce. If you’re logged in to Salesforce, we recommend that you log out before accessing the link in your browser.
2.  Save the .zip file locally, and extract the contents to the directory of your choice.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool uses the ant-salesforce.jar file that’s in the distribution .zip file. If you installed a previous version of the tool and copied ant-salesforce.jar to the Ant lib directory, delete the previous jar file. The lib directory is located in the root folder of your Ant installation. It’s not necessary to copy the new jar file to the Ant lib directory.

If you plan to run the tool from a directory other than its installation directory, modify the build.xml file to indicate the location of the ant-salesforce.jar file. Update the location attribute on <pathelement> in build.xml to point to ant-salesforce.jar in the installation directory.

When you extract the Ant Migration Tool .zip files, these folders and files are written to the location that you specified.

-   A Readme.html file that explains how to use the tools
-   A Jar file containing the ant task: ant-salesforce.jar
-   A sample folder containing:
    -   A codepkg\\classes folder that contains SampleDeployClass.cls and SampleFailingTestClass.cls
    -   A codepkg\\triggers folder that contains SampleAccountTrigger.trigger
    -   A mypkg\\objects folder that contains the custom objects used in the examples
    -   A removecodepkg folder that contains XML files for removing the examples from your organization
    -   A sample build.properties file that you must edit, specifying your credentials, in order to run the sample ant tasks in build.xml
    -   A sample build.xml file that exercises the deploy and retrieve API calls

## Related Topics

- Prerequisites for Using the Ant Migration Tool (atlas.en-us.daas.meta/daas/forcemigrationtool_prereq.htm)
