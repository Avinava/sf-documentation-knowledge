---
title: "Prepare Data Files"
domain: bi-dev-guide-ext-data
topic: prepare-data-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.177Z
estimatedTokens: 209
keywords: [Prepare, Data, Files, upload, external, csv, dataset]
---

# Prepare Data Files

> To upload external data from .csv files into a dataset, first prepare your data
        files.

# Prepare Data Files

To upload external data from .csv files into a dataset, first prepare your data files.

External data can be loaded into a dataset by preparing two files.

-   A data file, which contains the external data, in comma-separated value (CSV) format
-   An optional metadata .json file, which describes the structure of the data file

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_ext_data)

#### Note

Providing a metadata file is recommended.

The data and metadata files are used to populate a dataset with the external data. For detailed information about formatting CSV data and JSON metadata, see the [External Data Metadata Overview](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_schema_overview).
