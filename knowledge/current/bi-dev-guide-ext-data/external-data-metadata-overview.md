---
title: "External Data Metadata Overview"
domain: bi-dev-guide-ext-data
topic: external-data-metadata-overview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:02.180Z
estimatedTokens: 932
keywords: [External, Data, Metadata, upload, CRM, Analytics, dataset, sure, prepared, files, CSV, JSON, Limits]
---

# External Data Metadata Overview

> To upload external data into a CRM Analytics dataset, make sure that you have prepared
        your data and metadata files.

# External Data Metadata Overview

To upload external data into a CRM Analytics dataset, make sure that you have prepared your data and metadata files.

You can load external data into a dataset by preparing two files.

-   A data file, which contains the external data, in comma-separated value (CSV) format
-   An optional metadata file, which describes the structure of the data file in JSON format

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_ext_data)

#### Note

Providing a metadata file is recommended. Otherwise, every field is treated as text.

The data and metadata files are used to populate a dataset with the external data.

## CSV Example

The following CSV example contains data that conforms to the .json metadata file that’s described next.

```

```

The first row in the CSV file lists the field names for your dataset. Each subsequent row corresponds to a record of data. A record consists of a series of fields delimited by commas. For information on creating valid field names, see [External Data Metadata Format Reference](atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_schema_reference.htm "The metadata describes the structure of external data files. The metadata file is in JSON format. The .json file consists of 3 main sections: file format, object information, and field information. Include all required fields when you create a record, but you can leave out optional fields.").

## JSON Example

The following JSON example represents a SalesData object with three fields: Name, Amount, and CloseDate. The example corresponds to the preceding CSV example.

```

```

## CSV Format

The External Data API uses a strict format for field values to optimize processing for large sets of data. Note the following when generating .csv files.

-   If a field value contains a control character or a new line the field value must be contained within double quotes (or your fieldsEscapedBy value). The default control characters (fieldsDelimitedBy, fieldsEnclosedBy, fieldsEscapedBy, or linesTerminatedBy) are comma and double quote. For example, "Director of Operations, Western Region".
-   If a field value contains a double quote, escape the double quote by preceding it with another double quote (or your fieldsEscapedBy value): for example, "This is the ""gold"" standard".
-   Field values aren’t trimmed. A space before or after a delimiting comma is included in the field value. A space before or after a double quote generates an error for the row. For example, John,Smith is valid. John, Smith is valid, but the second value is " Smith". "John", "Smith" isn’t valid.
-   The maximum numeric value is 36,028,797,018,963,967 and the minimum is -36,028,797,018,963,968.
-   Dates must conform to specific formats, and they must match the formats exactly. For more information, see [External Data Metadata Format Reference](atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_schema_reference.htm "The metadata describes the structure of external data files. The metadata file is in JSON format. The .json file consists of 3 main sections: file format, object information, and field information. Include all required fields when you create a record, but you can leave out optional fields.").
-   At least one column in the CSV file must contain dimension values.
-   If column headers are specified, the number of column headers must equal the number of columns in each record.

## External Data Limits

For more information on limits for all supported editions, see External Data Limits in [CRM Analytics Limits](https://help.salesforce.com/s/articleView?id=analytics.bi_limits.htm&type=5&language=en_US).

## Code Examples

```
Name,Amount,CloseDate
opportunityA,100.99,6/30/2014
opportunityB,99.01,1/31/2012
```

```
{
    "fileFormat": {
        "charsetName": "UTF-8",
        "fieldsDelimitedBy": ",",
        "fieldsEnclosedBy": """,
        "fieldsEscapedBy":""
        "linesTerminatedBy":"\r
"
        "numberOfLinesToIgnore": 1
    },
    "objects": [
        {
            "connector": "AcmeCSVConnector",
            "description": "",
            "fullyQualifiedName": "SalesData",
            "label": "Sales Data",
            "name": "SalesData",
            "fields": [
                {
                    "description": "",
                    "fullyQualifiedName": "SalesData.Name",
                    "label": "Account Name",
                    "name": "Name",
                    "isSystemField": false,
                    "isUniqueId": false,
                    "isMultiValue": false,
                    "type": "Text"
                },
                {
                    "description": "",
                    "fullyQualifiedName": "SalesData.Amount",
                    "label": "Opportunity Amount",
                    "name": "Amount",
                    "isSystemField": false,
                    "defaultValue": "0",
                    "isUniqueId": false,
                    "type": "Numeric",
                    "precision": 10,
                    "scale": 2,
                },
                {
                    "description": "",
                    "fullyQualifiedName": "SalesData.CloseDate",  
                    "label": "Opportunity Close Date",
                    "name": "CloseDate",	
                    "isSystemField": false,
                    "isUniqueId": false,
                    "type": "Date",
                    "format": "MM/dd/yyyy",
                    "fiscalMonthOffset": 0
                }
            ]
        }
    ]
}
```

## Related Topics

- External Data Metadata Format
                Reference (atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_schema_reference.htm)
- External Data Metadata Format
                    Reference (atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_schema_reference.htm)
