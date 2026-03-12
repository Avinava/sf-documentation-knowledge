---
title: "Configure Data Loader"
domain: dataLoader
topic: configure-data-loader
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.194Z
estimatedTokens: 2098
keywords: [Configure, Data, Loader, Settings, menu, change, operation]
---

# Configure Data Loader

> Use the Settings menu to change the Data Loader default operation settings.

# Configure Data Loader

Use the Settings menu to change the Data Loader default operation settings.

Connect to Salesforce using OAuth 2.0. See [Create a Secure Connection with an External Client App](https://developer.salesforce.com/docs/atlas.en-us.260.0.dataLoader.meta/dataLoader/loader_eca_oauth_pkce.htm).

1.  To start Data Loader, double-click the Data Loader icon on your Desktop or in your Applications folder.
2.  Select **Settings** | **Settings**.
3.  Edit the fields as needed.

    | Field | Description |
    | --- | --- |
    | Import batch size | The maximum import batch size is 200 records for SOAP API and 10000 records for Bulk API. If the Use SOAP API option is selected, then both Import Batch Size and Export Batch Size are used. If the Use Bulk API option is selected, then only Import Batch Size is used. If the Use Bulk API 2.0 option is selected, then neither batch size is used because Bulk API 2.0 handles batch size automatically.For more information about working with Bulk API batches, see General Guidelines for Data Loads in the Bulk API 2.0 and Bulk API Developer Guide. |
    | Insert null values | Select this option to insert blank mapped values as null values during data operations. When you’re updating records, this option instructs Data Loader to overwrite existing data in mapped fields.This option isn’t available if either the Use Bulk API or the Use Bulk Api 2.0 option is selected. Empty field values are ignored when you update records using either API. To set a field value to null when either API option is selected, use a field value of #N/A in the import CSV file. |
    | Assignment rule | Specify the ID of the assignment rule to use for inserts, updates, and upserts. This option applies to inserts, updates, and upserts on cases and leads. The assignment rule overrides Owner values in your CSV file. |
    | Server host | Enter the URL of the Salesforce server with which you want to communicate. For example, if you’re loading data into a sandbox, change the URL to https://MyDomainName--SandboxName.sandbox.my.salesforce.com. |
    | Reset URL on Login | By default, Salesforce resets the URL after login to the one specified in Server host. To turn off this automatic reset, disable this option. |
    | Compression | Compression enhances the performance of Data Loader and is turned on by default. Disabling compression is helpful when debugging the underlying SOAP messages. To turn off compression, enable this option. |
    | Timeout | Specify how many seconds Data Loader waits to receive a response back from the server before returning an error for the request. |
    | Export Batch Size | For a single SOAP export or SOAP query operation (if the Use SOAP API option is selected), records are returned from Salesforce in batches of this size. Larger values can improve performance but use more memory on the client.The default is 500; the minimum is 200, and the maximum is 2,000. There’s no guarantee that the requested batch size requested is the actual batch size; changes are sometimes made to maximize performance. |
    | Generate status files for exports | Select this option to generate success and error files when exporting data. |
    | Read all CSVs with UTF-8 encoding | Select this option to force files to open in UTF-8 encoding, even if they were saved in a different format. |
    | Write all CSVs with UTF-8 encoding | Select this option to force files to be written in UTF-8 encoding. |
    | Use European date format | Select this option to support the date formats dd/MM/yyyy and dd/MM/yyyy HH:mm:ss. |
    | Allow field truncation | Select this option to truncate data in the following types of fields when loading that data into Salesforce: Email, Multi-select Picklist, Phone, Picklist, Text, and Text (Encrypted).In Data Loader versions 14.0 and earlier, Data Loader truncates values for fields of those types if they’re too large. In Data Loader version 15.0 and later, the load operation fails if a value is specified that is too large.Selecting this option allows you to specify that the previous behavior, truncation, be used instead of the new behavior in Data Loader versions 15.0 and later. This option is selected by default and has no effect in versions 14.0 and earlier.This option isn’t available if either the Use Bulk API or the Use Bulk Api 2.0 option is selected. In that case, the load operation fails for the row if a value is specified that is too large for the field. |
    | Allow comma as a CSV delimiter | Select this option if your CSV file uses commas to delimit records. |
    | Allow tab as a CSV delimiter | Select this option if your CSV file uses tab characters to delimit records. |
    | Allow other characters as CSV delimiters | Select this option if your CSV file uses a character other than a comma or tab to delimit records. |
    | Other delimiters (enter multiple values with no separator; for example, !+?) | The characters in this field are used only if the Allow other characters as CSV delimiters option is selected. For example, if you use the \| (pipe) character to delimit data records, enter that character in this field. |
    | Use Bulk API | Select this option to use Bulk API to insert, update, upsert, delete, and hard-delete records. Bulk API is optimized to load or delete many records asynchronously. It’s faster than the default SOAP-based API due to parallel processing and fewer network round-trips.You can hard delete records when you configure Data Loader to Use Bulk API. Keep in mind that hard-deleted records are immediately deleted and can’t be recovered from the Recycle Bin. |
    | Enable serial mode for Bulk API | If Use Bulk API is selected, you can use serial processing instead of parallel processing. Processing in parallel can cause database contention. When contention is severe, the load can fail. Serial mode processes batches one at a time, and can be a solution to database contention (locking). However, it can increase the processing time for a load.This option is only available if the Use Bulk API option is selected. |
    | Upload Bulk API Batch as Zip File | If Use Bulk API is selected, you can use Bulk API to upload zip files containing binary attachments, such as Attachment records or Salesforce CRM Content. |
    | Use Bulk API 2.0 | Select this option to use Bulk API 2.0 to insert, update, upsert, delete, and hard-delete records. Bulk API 2.0 is optimized to load or delete many records asynchronously. It’s faster than the default SOAP-based API due to parallel processing and fewer network round-trips. Supports all OAuth 2.0 flows supported by other Salesforce REST APIs. Bulk API 2.0's design is more consistent and better integrated with other Salesforce APIs. Bulk API 2.0 also has the advantage of future innovation.You can hard-delete records when you configure Data Loader to Use Bulk API 2.0. Keep in mind that hard-deleted records are immediately deleted and can’t be recovered from the Recycle Bin. |
    | Time Zone | Select this option to specify a default time zone.If a date value doesn’t include a time zone, this value is used.Valid values are any time zone identifier that can be passed to the Java getTimeZone(java.lang.String) method. The value can be a full name such as America/Los_Angeles, or a custom ID such as GMT-8:00.If no value is specified, the time zone of the computer where Data Loader is installed is used.If an incorrect value is entered, GMT is used as the time zone and this fact is noted in the Data Loader log. |
    | Proxy host | The host name of the proxy server, if applicable. |
    | Proxy port | The proxy server port. |
    | Proxy username | The username for proxy server authentication. |
    | Proxy password | The password for proxy server authentication. |
    | Proxy NTLM domain | The name of the Windows domain used for NTLM authentication. |
    | Start at row | If your last operation failed, you can use this setting to begin where the last successful operation finished. |

4.  Click **OK** to save your settings.

Data Loader settings are saved in the properties.csv file. To find the path to the settings file, select **Settings** from the **Settings** menu, then click **Help** in the upper right of the Settings window. The path to the settings file is shown at the bottom of the Help window. Click the file name to view its contents.
