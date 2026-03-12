---
title: "Installed Directories and Files"
domain: dataLoader
topic: installed-directories-and-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.265Z
estimatedTokens: 572
keywords: [Installed, Directories, Files, version, 8.0, later, installing, Data, Loader, adds, several, under, installation, directory, needed]
---

# Installed Directories and Files

> In version 8.0 and later, installing the Data Loader adds several directories under the
    installation directory that are needed for automated batch processing.

# Installed Directories and Files

In version 8.0 and later, installing the Data Loader adds several directories under the installation directory that are needed for automated batch processing.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

-   bin—Contains the batch files encrypt.bat for [encrypting passwords](atlas.en-us.dataLoader.meta/dataLoader/loader_encryption.htm "Data Loader offers an encryption utility to secure passwords specified in configuration files. While Data Loader does not handle encryption directly, data in transit is encrypted when using a secure connection such as HTTPS.") and process.bat for [running batch processes](atlas.en-us.dataLoader.meta/dataLoader/loader_runprocess.htm "You can run one batch process at a time.").

    For information on running Data Loader from the command-line, see [Run Batch File With Windows Command-Line Interface](atlas.en-us.dataLoader.meta/dataLoader/using_the_command_line_interface.htm "For automated batch operations, such as nightly scheduled loads and extractions, run Data Loader from the Windows command-line.").

-   configs—The default configuration directory. Contains the configuration files config.properties, Loader.class, and log-conf.xml.

    The config.properties file that is generated when you modify the Settings dialog in the graphical user interface is in C:\\Users\\{userName}\\dataloader\\version\\configs.

    Data Loader runs the operation, file, or map listed in the configuration file that you specify. If you don’t specify a configuration directory, the current directory is used.

-   samples—Contains subdirectories of sample files for reference.

## File Path Convention

The file paths provided in these topics start one level below the installation directory. For example, \\configs means C:\\Users\\{userName}\\dataloader\\version\\configs, provided you accepted the default installation directory. If you installed the program in a different location, use that directory path.

## Related Topics

- encrypting passwords (atlas.en-us.dataLoader.meta/dataLoader/loader_encryption.htm)
- running batch processes (atlas.en-us.dataLoader.meta/dataLoader/loader_runprocess.htm)
- Run Batch File With Windows Command-Line
              Interface (atlas.en-us.dataLoader.meta/dataLoader/using_the_command_line_interface.htm)
