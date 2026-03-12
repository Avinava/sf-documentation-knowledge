---
title: "Data Loader Command Line Introduction"
domain: dataLoader
topic: data-loader-command-line-introduction
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.177Z
estimatedTokens: 616
keywords: [Data, Loader, Command, Line, Introduction, addition, interactively, import, export, run, commands, automate]
---

# Data Loader Command Line Introduction

> In addition to using Data Loader interactively to import and export data, you can run
    it from the command line. You can use commands to automate the import and export of
    data.

# Data Loader Command Line Introduction

In addition to using Data Loader interactively to import and export data, you can run it from the command line. You can use commands to automate the import and export of data.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

This quick start shows you how to use the Data Loader command-line functionality to import data. Follow these steps.

-   [Step 1: Create the encryption key](atlas.en-us.dataLoader.meta/dataLoader/command_line_create_encryption_key.htm "When you use Data Loader from the command line, there's no user interface. Therefore, you provide the information that you enter in the user interface in a text file named process-conf.xml. For example, you add the username and password that Data Loader uses to log in to Salesforce.")
-   [Step 2: Create the encrypted password for your login username](atlas.en-us.dataLoader.meta/dataLoader/command_line_create_enc_password.htm "Create the encrypted password using the key file that you generated in the previous step. Skip this step if you're using OAuth for login authentication.")
-   [Step 3: Create the Field Mapping File](atlas.en-us.dataLoader.meta/dataLoader/command_line_create_mapping_file.htm "In this step, you create a mapping file with an .sdl file extension. In each line of the mapping file, pair a data source with its destination.")
-   [Step 4: Create a process-conf.xml file that contains the import configuration settings](atlas.en-us.dataLoader.meta/dataLoader/command_line_create_config_file.htm "The process-conf.xml file contains the information that Data Loader requires to process the data. Each <bean> in the process-conf.xml file refers to a single process such as an insert, upsert, or export. Therefore, this file can contain multiple processes.")
-   [Step 5: Run the process and import the data](atlas.en-us.dataLoader.meta/dataLoader/command_line_import_data.htm "Now that all the pieces are in place, you can run Data Loader from the command line and insert some new accounts.")

#### See Also

-   [Prerequisites](atlas.en-us.dataLoader.meta/dataLoader/command_line_prereqs.htm "Prerequisites for this quick start.")

## Related Topics

- Step 1: Create the encryption key (atlas.en-us.dataLoader.meta/dataLoader/command_line_create_encryption_key.htm)
- Step 2: Create the encrypted password for your login
            username (atlas.en-us.dataLoader.meta/dataLoader/command_line_create_enc_password.htm)
- Step 3: Create the Field Mapping File (atlas.en-us.dataLoader.meta/dataLoader/command_line_create_mapping_file.htm)
- Step 4: Create a process-conf.xml file
            that contains the import configuration settings (atlas.en-us.dataLoader.meta/dataLoader/command_line_create_config_file.htm)
- Step 5: Run the process and import the data (atlas.en-us.dataLoader.meta/dataLoader/command_line_import_data.htm)
- Prerequisites (atlas.en-us.dataLoader.meta/dataLoader/command_line_prereqs.htm)
