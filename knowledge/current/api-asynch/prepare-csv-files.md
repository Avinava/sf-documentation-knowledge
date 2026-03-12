---
title: "Prepare CSV Files"
domain: api-asynch
topic: prepare-csv-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.414Z
estimatedTokens: 870
keywords: [Prepare, CSV, Files, row, file, you're, processing, subsequent, corresponds, record, Salesforce, consists, series, delimited, commas, Setup]
---

# Prepare CSV Files

> The first row in a CSV file lists the field names for the object that you're processing.
  Each subsequent row corresponds to a record in Salesforce.

# Prepare CSV Files

The first row in a CSV file lists the field names for the object that you're processing. Each subsequent row corresponds to a record in Salesforce.

All the records in a CSV file must be for the same object. You specify this object in the job associated with the batch.

Note the following when working with CSV files with Bulk API 2.0:

-   You must include all the required fields when you create a record. You can optionally include any other field for the object.
-   Each field-name header in the file must be the same as the field’s Field Name (for standard fields) or API Name (for custom fields). Results only include columns that are a match.
-   If you're updating a record, any fields that aren't defined in the CSV file are ignored during the update.
-   Files must be in UTF-8 format. Files are converted to base64 when received by Salesforce. This conversion can increase the data size by approximately 50%. To account for the base64 conversion increase, upload data that doesn’t exceed 100 MB.
-   Bulk API 2.0 supports several field delimiter characters: back quote (\`), caret (^), comma, pipe (|), semicolon, and tab. The default delimiter is a comma. Specify the delimiter to use when you create your job, using the columnDelimiter request field.
-   When you create a Bulk API 2.0 job, specify a line ending that matches the line ending used to create the CSV file using the lineEnding request field. Bulk API 2.0 supports two line-ending formats: linefeed (LF), and carriage-return plus linefeed (CRLF). The default line ending, if not specified, is LF. Different operating systems use different characters to mark the end of a line:
    -   Unix / Linux / OS X uses LF (line feed, ' ', 0x0A)
    -   Windows / DOS uses CRLF (carriage return followed by line feed, '\\r ', 0x0D0A)It’s also possible that the text editor used to create the CSV file is configured for a specific line-ending format that supersedes the default operating system format.
-   Use double-quotes to escape characters in field values that would otherwise get interpreted as field delimiters or line endings. For example, if a field value includes a comma, and a comma is the current column delimiter for the job, you must wrap the field value in double-quotes in the CSV data, like “Director, Marketing”.
-   Field values aren't trimmed. A space before or after a delimiter is included in the field value. A space before or after a double quote generates an error for the row. For example, John,Smith is valid; John, Smith is valid, but the second value is " Smith"; ."John", "Smith" isn’t valid.
-   Empty field values are ignored when you update records. To set a field value to null, use a field value of #N/A.
-   Fields with a double data type can include fractional values. Values can be stored in scientific notation if the number is large enough (or, for negative numbers, small enough), as indicated by the [W3C XML Schema Part 2: Datatypes Second Edition specification](http://www.w3.org/TR/xmlschema-2/#double "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

The header row can contain up to 32,000 characters.

To find the name of a field, you can:

-   Use the [describeSObjects()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_describesobjects.htm "HTML (New Window)") call in the SOAP API Developer Guide, or the [sObject Describe](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_describe.htm "HTML (New Window)") resource in the REST API Developer Guide.
-   Use Salesforce Setup.
-   Look up the object in [Object Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm "HTML (New Window)"), which lists the field names, types, and descriptions by object.

## Use Salesforce Setup to Find Field names

To find an object’s field name in Salesforce Setup:

1.  From **Setup**, in the **Quick Find** box, enter Object Manager. Click **Object Manager**.
2.  Click on the object in the list.
3.  From the object’s management settings, click on **Fields & Relationships**.
4.  Click the field under Field Label to find the field name.

For a standard field, use the Field Name value as the field column header in your CSV file.

For a custom field, use the API Name value as the field column header in a CSV file or the field name identifier in an XML or JSON file. (To find the API Name, click the field name.)

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

## Related Topics

- Valid CSV Record Rows (atlas.en-us.api_asynch.meta/api_asynch/datafiles_csv_valid_record_rows.htm)
- Map Data Fields (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_mapping.htm)
- Relationship Fields in a Header Row (atlas.en-us.api_asynch.meta/api_asynch/datafiles_csv_rel_field_header_row.htm)
- Sample CSV File (atlas.en-us.api_asynch.meta/api_asynch/datafiles_csv_sample_file.htm)
