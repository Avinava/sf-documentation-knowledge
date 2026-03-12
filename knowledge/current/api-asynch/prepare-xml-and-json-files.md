---
title: "Prepare XML and JSON Files"
domain: api-asynch
topic: prepare-xml-and-json-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.458Z
estimatedTokens: 538
keywords: [Prepare, XML, JSON, Files, Bulk, API, processes, records, CSV, file, contain, multiple, constitutes, batch, record]
---

# Prepare XML and JSON Files

> The Bulk API processes records in XML, JSON, or CSV files. An XML or JSON file can
        contain multiple records and constitutes a batch. A record in an XML file is defined in an
            sObjects tag.

# Prepare XML and JSON Files

The Bulk API processes records in XML, JSON, or CSV files. An XML or JSON file can contain multiple records and constitutes a batch. A record in an XML file is defined in an sObjects tag.

All records in an XML or JSON file must be for the same object. You specify the object in the job associated with the batch. All batches associated with a job must contain records for the same object.

When processing XML or JSON files with the Bulk API:

-   You must include all required fields when you create a record. You can optionally include any other field for the object.
-   If you’re updating a record, fields not defined in the file are ignored during the update.
-   Files must be in UTF-8 format.

-   **[Relationship Fields in Records](atlas.en-us.api_asynch.meta/api_asynch/datafiles_xml_rel_fields.htm)**
    Some objects also have relationships to themselves. For example, the ReportsTo field for a contact is a reference to another contact.
-   **[Valid XML and JSON Records](atlas.en-us.api_asynch.meta/api_asynch/datafiles_xml_valid_records.htm)**
    A batch request in an XML or JSON file contains records for one object type. Each batch in an XML file uses this format, with each sObject tag representing a record.
-   **[Sample XML File](atlas.en-us.api_asynch.meta/api_asynch/datafiles_xml_sample_file.htm)**
    This XML sample includes two records for the Account object. Each record contains three fields. You can include any field for an object that you're processing. If you use this file to update existing accounts, any fields that aren't defined in the XML file are ignored during the update. You must include all required fields when you create a record.
-   **[Sample JSON File](atlas.en-us.api_asynch.meta/api_asynch/datafiles_json_sample_file.htm)**
    This JSON sample includes two records for the Account object. Each record contains three fields. You can include any field for an object that you’re processing. If you use this file to update existing accounts, fields not defined in the JSON file are ignored during the update. You must include all required fields when you create a record.

## Related Topics

- Relationship Fields in Records (atlas.en-us.api_asynch.meta/api_asynch/datafiles_xml_rel_fields.htm)
- Valid XML and JSON Records (atlas.en-us.api_asynch.meta/api_asynch/datafiles_xml_valid_records.htm)
- Sample XML File (atlas.en-us.api_asynch.meta/api_asynch/datafiles_xml_sample_file.htm)
- Sample JSON File (atlas.en-us.api_asynch.meta/api_asynch/datafiles_json_sample_file.htm)
