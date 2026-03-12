---
title: "Prepare Data Files"
domain: api-asynch
topic: prepare-data-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.438Z
estimatedTokens: 592
keywords: [Prepare, Data, Files, Bulk, API, processes, records, comma-separated, CSV, XML, JSON]
---

# Prepare Data Files

> The Bulk API processes records in comma-separated values (CSV) files, XML files, or JSON
  files.

# Prepare Data Files

The Bulk API processes records in comma-separated values (CSV) files, XML files, or JSON files.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

For best performance, Salesforce recommends the following order of preference for data files: CSV, JSON, XML.

For information about loading records containing binary attachments, see [Load Binary Attachments](atlas.en-us.api_asynch.meta/api_asynch/binary_intro.htm "The Bulk API can load binary attachments, which can be Attachment objects or Salesforce CRM Content.").

For information about loading data from third-party sources, see [Map Data Fields](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_mapping.htm "To use Bulk API to import data that was exported directly from Microsoft Outlook, Google Contacts, and other third-party sources, map data fields in any CSV import file to Salesforce data fields. It's not necessary for the CSV import file to be Bulk API-compatible.").

-   **[Find Field Names](atlas.en-us.api_asynch.meta/api_asynch/datafiles_field_names.htm)**
    After you set up your client, you can build client applications that use the Bulk API. Use the following sample to create a client application. Each section steps through part of the code. The complete sample is included at the end.
-   **[Valid Date Format in Records](atlas.en-us.api_asynch.meta/api_asynch/datafiles_date_format.htm)**
    Specify the right format for dateTime and date fields.
-   **[Prepare CSV Files](atlas.en-us.api_asynch.meta/api_asynch/datafiles_csv_preparing.htm)**
    The first row in a CSV file lists the field names for the object that you're processing. Each subsequent row corresponds to a record in Salesforce. A record consists of a series of fields that are delimited by commas. A CSV file can contain multiple records and constitutes a batch.
-   **[Prepare XML and JSON Files](atlas.en-us.api_asynch.meta/api_asynch/datafiles_xml_preparing.htm)**
    The Bulk API processes records in XML, JSON, or CSV files. An XML or JSON file can contain multiple records and constitutes a batch. A record in an XML file is defined in an sObjects tag.

#### See Also

-   [Data Loader Guide](https://resources.docs.salesforce.com/260/latest/en-us/sfdc/pdf/salesforce_data_loader.pdf "Data Loader Guide - Adobe Acrobat PDF (New Window)")

## Related Topics

- Load Binary Attachments (atlas.en-us.api_asynch.meta/api_asynch/binary_intro.htm)
- Map Data Fields (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_mapping.htm)
- Find Field Names (atlas.en-us.api_asynch.meta/api_asynch/datafiles_field_names.htm)
- Valid Date Format in Records (atlas.en-us.api_asynch.meta/api_asynch/datafiles_date_format.htm)
- Prepare CSV Files (atlas.en-us.api_asynch.meta/api_asynch/datafiles_csv_preparing.htm)
- Prepare XML and JSON Files (atlas.en-us.api_asynch.meta/api_asynch/datafiles_xml_preparing.htm)
