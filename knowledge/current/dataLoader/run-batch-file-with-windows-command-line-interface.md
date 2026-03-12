---
title: "Run Batch File With Windows Command-Line Interface"
domain: dataLoader
topic: run-batch-file-with-windows-command-line-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.356Z
estimatedTokens: 651
keywords: [Run, Batch, File, Windows, Command-Line, automated, operations, nightly, scheduled, loads, extractions, Data, Loader, Running, process.bat]
---

# Run Batch File With Windows Command-Line Interface

> For automated batch operations, such as nightly scheduled loads and extractions, run
    Data Loader from the Windows command-line.

# Run Batch File With Windows Command-Line Interface

For automated batch operations, such as nightly scheduled loads and extractions, run Data Loader from the Windows command-line.

To run Data Loader from a configured Windows batch file:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

1.  Include your encrypted password in the configuration file to run a batch operation. For more information, see [Data Loader Command Line Introduction](atlas.en-us.dataLoader.meta/dataLoader/command_line_intro.htm "In addition to using Data Loader interactively to import and export data, you can run it from the command line. You can use commands to automate the import and export of data.") and [Encrypt from the Command Line](atlas.en-us.dataLoader.meta/dataLoader/loader_encryption.htm#loader_encryption "Data Loader offers an encryption utility to secure passwords specified in configuration files. While Data Loader does not handle encryption directly, data in transit is encrypted when using a secure connection such as HTTPS.").
2.  Use the process-conf.xml file to configure batch file processing. Specify the name of the process in the ProcessRunner bean's id attribute.

    For example,

    ```

    ```

3.  Navigate to the Data Loader \\bin directory by entering this command. Replace the file path with the path from your system.

    C:\\Users\\{userName}\\dataloader\\version\\bin

4.  To run the batch file, use the correct command syntax for process.bat:

    ```

    ```

    where:

    -   <configdir> (mandatory) The absolute or relative path to the directory containing process-conf.xml. It must be the first parameter when running process.bat.
    -   <batch process bean id> (optional) The id of the batch process bean of class com.salesforce.dataloader.process.ProcessRunner defined in the process-conf.xmlfile. If not provided, then the value of the process.name property in the config.properties file is used.


## Running process.bat using both parameters

To execute Data Loader in batch mode, we’ll use the beans, their properties and attributes specified for a ProcessRunner bean with id="accountInsert" in the process-conf.xml file located in C:\\Users\\username\\dataloaderconfig directory.

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=dataLoader)

#### Tip

If you experience login issues in the command-line interface after upgrading Data Loader, try encrypting your password again to solve the problem.

## Code Examples

```
<bean id="accountInsert" class="com.salesforce.dataloader.process.ProcessRunner" scope="prototype">
```

```
process.bat <configdir> [<operation>]
```

```
process.bat "C:\Users\username\dataloaderconfig" accountInsert
```

## Related Topics

- Data Loader Command Line Introduction (atlas.en-us.dataLoader.meta/dataLoader/command_line_intro.htm)
- Encrypt from the
          Command Line (atlas.en-us.dataLoader.meta/dataLoader/loader_encryption.htm)
