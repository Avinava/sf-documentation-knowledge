---
title: "Upgrade Your Batch Mode Interface"
domain: dataLoader
topic: upgrade-your-batch-mode-interface
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.241Z
estimatedTokens: 380
keywords: [Upgrade, Batch, Mode, Data, Loader, versions, 8.0, later, aren’t, backward-compatible, earlier, you’re, version, run, processes]
---

# Upgrade Your Batch Mode Interface

> The batch mode interface in Data Loader versions 8.0 and later aren’t
  backward-compatible with earlier versions. If you’re using a version earlier than 8.0 to run batch
  processes, you have these options.

# Upgrade Your Batch Mode Interface

The batch mode interface in Data Loader versions 8.0 and later aren’t backward-compatible with earlier versions. If you’re using a version earlier than 8.0 to run batch processes, you have these options.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

-   Maintain the old version for batch use

    Do not uninstall your old version of Data Loader. Continue to use that version for batch processes. You can't take advantage of newer features such as database connectivity, but your integrations continue to work. Optionally, install the new version alongside the old version and dedicate the old version solely to batch processes.

-   Generate a new config.properties file from the new GUI

    If you originally generated your config.properties file from the graphical user interface, use the new version to set the same properties and generate a new file. Use this new file with the new batch mode interface.

-   Manually update your config.properties file

    If your old config.properties file was created manually, you must manually update it for the new version. For more information, see [Installed Directories and Files](atlas.en-us.dataLoader.meta/dataLoader/loader_directories.htm "In version 8.0 and later, installing the Data Loader adds several directories under the installation directory that are needed for automated batch processing.").

## Related Topics

- Installed Directories and Files (atlas.en-us.dataLoader.meta/dataLoader/loader_directories.htm)
