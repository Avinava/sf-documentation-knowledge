---
title: "External Data"
domain: bi-dev-guide-ext-data
topic: external-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.175Z
estimatedTokens: 407
keywords: [External, Data, integrate, CRM, Analytics, queries, lenses, designer]
---

# External Data

> You can integrate external data into CRM Analytics to make the data available for
    queries from lenses and designer.

# External Data

You can integrate external data into CRM Analytics to make the data available for queries from lenses and designer.

![Diagram of the process for uploading external data to CRM Analytics](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_connect_data_external_detail_diagram.png&folder=bi_dev_guide_ext_data)

The External Data API enables you to upload external data files to CRM Analytics. The External Data API can upload .csv files, and you can optionally specify the structure of your data by defining metadata in JSON format.

The External Data API is available in API version 31 and later.

The high-level steps for uploading external data by using the API are:

1.  Prepare your data in CSV format, and then create a metadata file to specify the structure of the data.
2.  Connect programmatically to your Salesforce organization.
3.  Configure the upload by inserting a row into the InsightsExternalData object, and then set input values such as the name of the dataset, the format of the data, and the operation to perform on the data.
4.  Split your data into 10-MB chunks, and then upload the chunks to InsightsExternalDataPart objects.
5.  Start the upload by updating the Action field in the InsightsExternalData object.
6.  Monitor the InsightsExternalData object for status updates, and then verify that the file upload was successful.

-   **[External Data Metadata Overview](atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_schema_overview.htm)**
    To upload external data into a CRM Analytics dataset, make sure that you have prepared your data and metadata files.

## Related Topics

- External Data Metadata Overview (atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_schema_overview.htm)
