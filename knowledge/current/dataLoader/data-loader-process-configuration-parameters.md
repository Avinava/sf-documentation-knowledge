---
title: "Data Loader Process Configuration Parameters"
domain: dataLoader
topic: data-loader-process-configuration-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.315Z
estimatedTokens: 3476
keywords: [Data, Loader, Process, Configuration, running, command, line, specify, process-conf.xml, file, cases, represented, Settings]
---

# Data Loader Process Configuration Parameters

> When running Data Loader from the command line, you can specify configuration parameters in
    the process-conf.xml file. In some cases, the parameter is also
    represented in the UI at Settings | Settings.

# Data Loader Process Configuration Parameters

When running Data Loader from the command line, you can specify configuration parameters in the process-conf.xml file. In some cases, the parameter is also represented in the UI at **Settings** | **Settings**.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=dataLoader)

#### Tip

A sample process-conf.xml file is in the \\samples directory that’s installed with Data Loader.

| Parameter Name | Data Type | Equivalent Option in Settings Dialog | Description |
| --- | --- | --- | --- |
| dataAccess.readUTF8 | boolean | Read all CSVs with UTF-8 encoding | Select this option to force files to open in UTF-8 encoding, even if they were saved in a different format.Sample value: true |
| dataAccess.writeUTF8 | boolean | Write all CSVs with UTF-8 encoding | Select this option to force files to be written in UTF-8 encoding.Sample value: true |
| dataAccess.name | string | Not applicable (N/A) | Name of the data source to use, such as a CSV file name. For databases, use the name of the database configuration in database-conf.xml.Sample value: c:\dataloader\data\extractLead.csv |
| dataAccess.readBatchSize | integer | N/A | Number of records read from the database at a time. The maximum value is 200.Sample value: 50 |
| dataAccess.type | string | N/A | Standard or custom data source type. Standard types are csvWrite, csvRead, databaseWrite, and databaseRead.Sample value: csvWrite |
| dataAccess.writeBatchSize | integer | N/A | Number of records written to the database at a time. The maximum value is 2,000. Note the implication for a large parameter value: if an error occurs, all records in the batch are rolled back. In contrast, if the value is set to 1, each record is processed individually (not in batch) and errors are specific to a given record. We recommend setting the value to 1 when you need to diagnose problems with writing to a database.Sample value: 500 |
| loader.csvComma | boolean | Allow comma as a CSV delimiter | Select this option if your CSV file uses commas to delimit records. |
| loader.csvTab | boolean | Allow tab as a CSV delimiter | Select this option if your CSV file uses tab characters to delimit records. |
| loader.csvOther | boolean | Allow other characters as CSV delimiters | Select this option if your CSV file uses a character other than a comma or tab to delimit records. |
| loader.csvOtherValue | string | Other delimiters (enter multiple values with no separator; for example, !+?) | The characters in this field are used only if the Allow other characters as CSV delimiters option is selected. For example, if you use the \| (pipe) character to delimit data records, enter that character in this field. |
| process.enableExtractStatusOutput | boolean | Generate status files for exports | Select this option to generate success and error files when exporting data.Sample value: true |
| process.enableLastRunOutput | boolean | N/A | When running Data Loader in batch mode, you can disable the generation of output files such as sendAccountsFile_lastRun.properties. Files of this type are saved by default to the conf directory. To stop the writing of these files, set this option to false.Alternatively, you can change the location of the directory where these files are saved, using process.lastRunOutputDirectory.Sample value: true |
| process.encryptionKeyFile | string (file name) | N/A | Name of the file that contains the encryption key. This parameter is required in Data Loader version 43.0 and later. See Encrypt from the Command Line.Sample value: c:\Users\{user}\.dataloader\dataloader.key |
| process.initialLastRunDate | date | N/A | The initial setting for the process.lastRunDate parameter, which can be used in a SQL string and is automatically updated when a process has run successfully. For an explanation of the date format syntax, see Date Formats.Format must be yyyy-MM-ddTHH:mm:ss.SSS+/-HHmm. For example: 2006-04-13T13:50:32.423-0700 |
| process.lastRunOutputDirectory | string (directory) | N/A | When running Data Loader in batch mode, you can change the location where output files such as sendAccountsFile_lastRun.properties are written. Files of this type are saved by default to the \conf directory. To change the location, change the value of this option to the full path where you want the output files written.Alternatively, you can stop the files from being written, using process.enableLastRunOutput. |
| process.loadRowToStartAt | number | Start at row | If your last operation failed, you can use this setting to begin where the last successful operation finished.Sample value: 1008 |
| process.mappingFile | string (file name) | N/A | Name of the field mapping file to use. See Map Columns.Sample value: c:\dataloader\conf\accountExtractMap.sdl |
| process.operation | string | N/A | The operation to perform. See Data Loader Command-Line Operations.Sample value: extract |
| process.statusOutputDirectory | string (directory) | N/A | The directory where “success” and “error” output files are saved. The file names are automatically generated for each operation unless you specify otherwise in process-conf.xml.Sample value: c:\dataloader\status |
| process.outputError | string (file name) | N/A | The name of the CSV file that stores error data from the last operation.Sample value: c:\dataloader\status\myProcessErrors.csv |
| process.outputSuccess | string (file name) | N/A | The name of the CSV file that stores success data from the last operation. See also process.enableExtractStatusOutput.Sample value: c:\dataloader\status\myProcessSuccesses.csv |
| process.useEuropeanDates | boolean | Use European date format | Select this option to support the date formats dd/MM/yyyy and dd/MM/yyyy HH:mm:ss.Sample value: true |
| sfdc.assignmentRule | string | Assignment rule | Specify the ID of the assignment rule to use for inserts, updates, and upserts. This option applies to inserts, updates, and upserts on cases and leads. The assignment rule overrides Owner values in your CSV file.Sample value: 03Mc00000026J7w |
| sfdc.bulkApiCheckStatusInterval | integer | N/A | The number of milliseconds to wait between successive checks to determine if the asynchronous Bulk API operation is complete or how many records have been processed. See also sfdc.useBulkApi. We recommend a value of 5000.Sample value: 5000 |
| sfdc.bulkApiSerialMode | boolean | Enable serial mode for Bulk API | To use serial processing instead of parallel processing for Bulk API, select this option. Processing in parallel can cause database contention. When contention is severe, the load can fail. Serial mode processes batches one at a time, however it can increase the processing time for a load. See also sfdc.useBulkApi.Sample value: false |
| sfdc.bulkApiZipContent | boolean | Upload Bulk API Batch as Zip File | Select this option to use Bulk API to upload zip files containing binary attachments, such as Attachment records or Salesforce CRM Content. See also sfdc.useBulkApi.Sample value: true |
| sfdc.connectionTimeoutSecs | integer | N/A | The number of seconds to wait for a connection during API calls.Sample value: 60 |
| sfdc.debugMessages | boolean | N/A | If true, enables SOAP message debugging. By default, messages are sent to STDOUT unless you specify an alternate location in sfdc.debugMessagesFile.Sample value: false |
| sfdc.debugMessagesFile | string (file name) | N/A | See process.enableExtractStatusOutput. Stores SOAP messages sent to or from Salesforce. As messages are sent or received, they are appended to the end of the file. As the file does not have a size limit, monitor your available disk storage appropriately.Sample value: \lexiloader\status\sfdcSoapTrace.log |
| sfdc.enableRetries | boolean | N/A | If true, enables repeated attempts to connect to Salesforce servers. See sfdc.maxRetries and sfdc.minRetrySleepSecs.Sample value: true |
| sfdc.endpoint | URL | Server host | Enter the URL of the Salesforce server with which you want to communicate. For example, if you are loading data into a sandbox, change the URL to https://MyDomainName--SandboxName.sandbox.my.salesforce.com or https://test.salesforce.com.Sample production values: https://MyDomainName.my.salesforce.com/services/Soap/u/53.0 and https://login.salesforce.com/services/Soap/u/53.0 |
| sfdc.entity | string | N/A | The Salesforce object used in the operation.Sample value: Lead |
| sfdc.externalIdField | string | N/A | Used in upsert operations; specifies the custom field with the “External ID” attribute that is used as a unique identifier for data matching.Sample value: LegacySKU__c |
| sfdc.extractionRequestSize | integer | Query request size | In a single export or query operation, records are returned from Salesforce in increments of this size. Larger values can improve performance but use more memory on the client.Sample value: 500 |
| sfdc.extractionSOQL | string | N/A | The SOQL query for the data export.Sample value: SELECT Id, LastName, FirstName, Rating, AnnualRevenue, OwnerId FROM Lead |
| sfdc.insertNulls | boolean | Insert null values | Select this option to insert blank mapped values as null values during data operations. When you are updating records, this option instructs Data Loader to overwrite existing data in mapped fields.Sample value: false |
| sfdc.loadBatchSize | integer | Batch size | In a single insert, update, upsert, or delete operation, records moving to or from Salesforce are processed in increments of this size. The maximum is 200 records. We recommend a value from 50 through 100.Sample value: 100 |
| sfdc.maxRetries | integer | N/A | The maximum number of repeated attempts to connect to Salesforce. See sfdc.enableRetries.Sample value: 3 |
| sfdc.minRetrySleepSecs | integer | N/A | The minimum number of seconds to wait between connection retries. The wait time increases with each try. See sfdc.enableRetries.Sample value: 2 |
| sfdc.noCompression | boolean | Compression | Compression enhances the performance of Data Loader and is turned on by default. If you want to disable compression when debugging the underlying SOAP messages, enable this option.Sample value: false |
| sfdc.password | encrypted string | N/A | An encrypted Salesforce password that corresponds to the username provided in sfdc.username. This parameter is required in Data Loader version 43.0 and later. See also Encrypt from the Command Line.Sample value: 4285b36161c65a22 |
| sfdc.proxyHost | URL | Proxy host | The host name of the proxy server, if applicable.Sample value: http://myproxy.internal.company.com |
| sfdc.proxyPassword | encrypted string | Proxy password | An encrypted password that corresponds to the proxy username provided in sfdc.proxyUsername. See also Encrypt from the Command Line.Sample value: 4285b36161c65a22 |
| sfdc.proxyPort | integer | Proxy port | The proxy server port.Sample value: 8000 |
| sfdc.proxyUsername | string | Proxy username | The username for proxy server authentication.Sample value: jane.doe |
| sfdc.resetUrlOnLogin | boolean | Reset URL on Login | By default, Salesforce resets the URL after login to the one specified in sfdc.endpoint. To turn off this automatic reset, disable this option by setting it to false.Valid values: true (default), false |
| sfdc.timeoutSecs | integer | Timeout | Specify how many seconds Data Loader waits to receive a response back from the server before returning an error for the request.Sample value: 540 |
| sfdc.timezone | string | Time Zone | If a date value does not include a time zone, this value is used.Valid values are any time zone identifier that can be passed to the Java getTimeZone(java.lang.String) method. The value can be a full name such as America/Los_Angeles, or a custom ID such as GMT-8:00.If no value is specified, the time zone of the computer where Data Loader is installed is used.If an incorrect value is entered, GMT is used as the time zone and this fact is noted in the Data Loader log.You can retrieve the default value by running the TimeZone.getDefault() method in Java. This value is the time zone on the computer where Data Loader is installed. |
| sfdc.truncateFields | boolean | Allow field truncation | Select this option to truncate data in the following types of fields when loading that data into Salesforce: Email, Multi-select Picklist, Phone, Picklist, Text, and Text (Encrypted).In Data Loader versions 14.0 and earlier, Data Loader truncates values for fields of those types if they are too large. In Data Loader version 15.0 and later, the load operation fails if a value is specified that is too large.Selecting this option allows you to specify that the previous behavior, truncation, be used instead of the new behavior in Data Loader versions 15.0 and later. This option is selected by default and has no effect in versions 14.0 and earlier.This option is not available if the Use Bulk API option is selected. In that case, the load operation fails for the row if a value is specified that is too large for the field.Sample value: true |
| sfdc.useBulkApi | boolean | Use Bulk API | Select this option to use Bulk API to insert, update, upsert, delete, and hard-delete records. Bulk API is optimized to load or delete many records asynchronously. It’s faster than the default SOAP-based API due to parallel processing and fewer network round-trips. See also sfdc.bulkApiSerialMode.Sample value: true |
| sfdc.username | string | N/A | Salesforce username. See sfdc.password.Sample value: jdoe@mycompany.com |

## Related Topics

- Encrypt from the Command Line (atlas.en-us.dataLoader.meta/dataLoader/loader_encryption.htm)
- Date
                  Formats (atlas.en-us.dataLoader.meta/dataLoader/supported_data_types.htm)
- Map Columns (atlas.en-us.dataLoader.meta/dataLoader/loader_columns.htm)
- Data Loader Command-Line Operations (atlas.en-us.dataLoader.meta/dataLoader/loader_operations.htm)
- Encrypt
                  from the Command Line (atlas.en-us.dataLoader.meta/dataLoader/loader_encryption.htm)
