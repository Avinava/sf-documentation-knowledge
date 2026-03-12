---
title: "Step Five: Import the Data"
domain: dataLoader
topic: step-five-import-the-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.173Z
estimatedTokens: 582
keywords: [Step, Five, Import, Data, Now, pieces, place, run, Loader, command, line, insert, new, accounts]
---

# Step Five: Import the Data

> Now that all the pieces are in place, you can run Data Loader from the command line and
  insert some new accounts.

# Step Five: Import the Data

Now that all the pieces are in place, you can run Data Loader from the command line and insert some new accounts.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.


| User Permissions Needed |
| --- |
| To insert records: | Create on the record |
| To update records: | Edit on the record |
| To upsert records: | Create or Edit on the record |
| To delete records: | Delete on the record |
| To hard delete records: | Delete on the record |

1.  Copy the following data to a file named accountInsert.csv. It’s account data that you import into your organization.

    ```

    ```

2.  In the command prompt window, enter the following command:

    process.bat "<file path to process-conf.xml>" <process name>

    -   Replace <file path to process-conf.xml> with the path to the directory containing process-conf.xml.
    -   Replace <process name> with the process specified in process-conf.xml.

    Your command looks something like this:

    process.bat "C:\\DLTest\\Command Line\\Config" accountInsert

    After the process runs, the command prompt window displays success and error messages. You can also check the log files: insertAccounts\_success.csv and insertAccounts\_error.csv. After the process runs successfully, the insertAccounts\_success.csv file contains the records that you imported, along with the ID and status of each record. For more information about the status files, see [Review Data Loader Output Files](atlas.en-us.dataLoader.meta/dataLoader/reviewing_output_files.htm "After an import or export, Data Loader generates two CSV output files that contain the results of the operation. One file name begins with success, and the other starts with error. Both files have the extension .csv. Use the Data Loader CSV file viewer to open the files. Specify the folder containing success and error CSV files in the Finish step of an operation.").


#### See Also

-   [Data Loader Command Line Introduction](atlas.en-us.dataLoader.meta/dataLoader/command_line_intro.htm "In addition to using Data Loader interactively to import and export data, you can run it from the command line. You can use commands to automate the import and export of data.")

## Code Examples

```
Name,Industry,NumberOfEmployees
 Dickenson plc,Consulting,120
 GenePoint,Biotechnology,265
 Express Logistics and Transport,Transportation,12300
 Grand Hotels & Resorts Ltd,Hospitality,5600
```

## Related Topics

- Review Data
       Loader Output Files (atlas.en-us.dataLoader.meta/dataLoader/reviewing_output_files.htm)
- Data Loader Command Line Introduction (atlas.en-us.dataLoader.meta/dataLoader/command_line_intro.htm)
