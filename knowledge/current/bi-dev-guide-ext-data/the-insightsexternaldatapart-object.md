---
title: "The InsightsExternalDataPart Object"
domain: bi-dev-guide-ext-data
topic: the-insightsexternaldatapart-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.170Z
estimatedTokens: 515
keywords: [InsightsExternalDataPart, upload, external, data, file, split, parts, Calls]
---

# The InsightsExternalDataPart Object

> The InsightsExternalDataPart object enables you to upload an external data file that has
  been split into parts.

# The InsightsExternalDataPart Object

The InsightsExternalDataPart object enables you to upload an external data file that has been split into parts.

The InsightsExternalDataPart object works with the InsightsExternalData object. After you insert a row into the InsightsExternalData object, you can create part objects to split up your data into parts. If your initial data file is larger than 10 MB, split your file into parts that are smaller than 10 MB.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_ext_data)

#### Note

The standard system fields (CreatedById, CreatedDate, LastModifiedById, LastModifiedDate, and SystemModstamp) are documented in [System Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/system_fields.htm) in the Salesforce Object Reference.

The InsightsExternalDataPart object is available in API version 31 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CompressedDataLength | TypeIntPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe length of the compressed data. This field is overwritten when data is uploaded. |
| DataFile | TypeBlob (Base64-encoded string)PropertiesCreate, Nillable, UpdateDescriptionThe data bytes. Parts are required to be smaller than 10 MB. For data greater than 10 MB, compress the file and then split it into parts. Only the gzip format is supported. |
| DataLength | TypeIntPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe length of the data. This field is overwritten when data is uploaded. |
| InsightsExternalDataId | TypeStringPropertiesCreate, Filter, Group, SortDescriptionThe ID of the InsightsExternalData object that this part belongs to. |
| PartNumber | TypeIntPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe part number. Part numbers are required to be in a contiguous sequence, starting with 1. (For example, 1, 2, 3, etc.) |
