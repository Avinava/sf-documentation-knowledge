---
title: "Prepare Data to Ingest"
domain: api-asynch
topic: prepare-data-to-ingest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.452Z
estimatedTokens: 366
keywords: [Prepare, Data, Ingest, organize, CSV, files, upload]
---

# Prepare Data to Ingest

> Format and organize your CSV files for upload.

# Prepare Data to Ingest

Format and organize your CSV files for upload.

-   **[Prepare CSV Files](atlas.en-us.api_asynch.meta/api_asynch/datafiles_prepare_csv.htm)**
    The first row in a CSV file lists the field names for the object that you're processing. Each subsequent row corresponds to a record in Salesforce.
-   **[Sample CSV Files](atlas.en-us.api_asynch.meta/api_asynch/datafiles_csv_samples.htm)**
    These examples demonstrate different ways to use CSV data with Bulk API 2.0.
-   **[Valid Date Format in Records (2.0)](atlas.en-us.api_asynch.meta/api_asynch/valid_date_format_in_records__2_0.htm)**
    Specify the right format for dateTime and date fields.
-   **[Relationship Fields in a Header Row (2.0)](atlas.en-us.api_asynch.meta/api_asynch/relationship_fields_in_a_header_row__2_0.htm)**
    Many objects in Salesforce are related to other objects. For example, Account is a parent of Contact. You can add a reference to a related object in a CSV file by representing the relationship in a column header. When you're processing records in the Bulk API, you use RelationshipName.IndexedFieldName syntax in a CSV column header to describe the relationship between an object and its parent, where RelationshipName is the relationship name of the field and IndexedFieldName is the indexed field name that uniquely identifies the parent record. Use the describeSObjects() call in the API to get the relationshipName property value for a field.

## Related Topics

- Prepare CSV Files (atlas.en-us.api_asynch.meta/api_asynch/datafiles_prepare_csv.htm)
- Sample CSV Files (atlas.en-us.api_asynch.meta/api_asynch/datafiles_csv_samples.htm)
- Valid Date Format in Records (2.0) (atlas.en-us.api_asynch.meta/api_asynch/valid_date_format_in_records__2_0.htm)
- Relationship Fields in a Header Row (2.0) (atlas.en-us.api_asynch.meta/api_asynch/relationship_fields_in_a_header_row__2_0.htm)
