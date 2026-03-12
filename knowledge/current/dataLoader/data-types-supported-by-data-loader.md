---
title: "Data Types Supported by Data Loader"
domain: dataLoader
topic: data-types-supported-by-data-loader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.352Z
estimatedTokens: 848
keywords: [Data, Loader, supports]
---

# Data Types Supported by Data Loader

> Data Loader supports these data types.

# Data Types Supported by Data Loader

Data Loader supports these data types.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


-   Base64

    String path to file (converts the file to a base64–encoded array). Base64 fields are only used to insert or update attachments and Salesforce CRM Content. For more information, see [Upload Attachments](atlas.en-us.dataLoader.meta/dataLoader/loader_attachments.htm#loader_attachments "Use Data Loader to upload attachments to Salesforce.") and [Upload Content with the Data Loader](atlas.en-us.dataLoader.meta/dataLoader/loader_content.htm#loader_content "Use Data Loader to bulk upload files and links into Salesforce.").

-   Boolean
    -   True values (case insensitive) = yes, y, true, on, 1
    -   False values (case insensitive) = no, n, false, off, 0
-   Date Formats

    We recommend you specify dates in the format yyyy-MM-ddTHH:mm:ss.SSS+/-HHmm.

    -   yyyy is the four-digit year
    -   MM is the two-digit month (01-12)
    -   dd is the two-digit day (01-31)
    -   HH is the two-digit hour (00-23)
    -   mm is the two-digit minute (00-59)
    -   ss is the two-digit seconds (00-59)
    -   SSS is the three-digit milliseconds (000-999)
    -   +/-HHmm is the Zulu (UTC) time zone offset

    The following date formats are also supported:

    -   yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
    -   yyyy-MM-dd'T'HH:mm:ss.SSS Pacific Standard Time
    -   yyyy-MM-dd'T'HH:mm:ss.SSSPacific Standard Time
    -   yyyy-MM-dd'T'HH:mm:ss.SSS PST
    -   yyyy-MM-dd'T'HH:mm:ss.SSSPST
    -   yyyy-MM-dd'T'HH:mm:ss.SSS GMT-08:00
    -   yyyy-MM-dd'T'HH:mm:ss.SSSGMT-08:00
    -   yyyy-MM-dd'T'HH:mm:ss.SSS -800
    -   yyyy-MM-dd'T'HH:mm:ss.SSS-800
    -   yyyy-MM-dd'T'HH:mm:ss
    -   yyyy-MM-dd HH:mm:ss
    -   yyyyMMdd'T'HH:mm:ss
    -   yyyy-MM-dd
    -   MM/dd/yyyy HH:mm:ss
    -   MM/dd/yyyy
    -   yyyyMMdd

    Note these tips for date formats.

    -   To enable date formats that begin with the day rather than the month, select the Use European date format box in the Settings dialog. European date formats are dd/MM/yyyy and dd/MM/yyyy HH:mm:ss.
    -   If your computer's locale is east of Greenwich Mean Time (GMT), we recommend that you change your computer setting to GMT in order to avoid date adjustments when inserting or updating records.

    -   Only dates within a certain range are valid. The earliest valid date is 1700-01-01T00:00:00Z GMT, or just after midnight on January 1, 1700. The latest valid date is 4000-12-31T00:00:00Z GMT, or just after midnight on December 31, 4000. These values are offset by your time zone. For example, in the Pacific time zone, the earliest valid date is 1699-12-31T16:00:00, or 4:00 PM on December 31, 1699.
-   Double

    Standard double string

-   ID

    A Salesforce ID is a case-sensitive 15-character or case–insensitive 18-character alphanumeric string that uniquely identifies a particular record.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=dataLoader)

    #### Tip

    To ensure data quality, make sure that all Salesforce IDs you enter in Data Loader are in the correct case.

-   Integer

    Standard integer string

-   String

    All valid XML strings; invalid XML characters are removed.

## Related Topics

- Upload Attachments (atlas.en-us.dataLoader.meta/dataLoader/loader_attachments.htm)
- Upload Content with
              the Data Loader (atlas.en-us.dataLoader.meta/dataLoader/loader_content.htm)
