---
title: "Configure the Upload"
domain: bi-dev-guide-ext-data
topic: configure-the-upload
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.136Z
estimatedTokens: 455
keywords: [Configure, Upload, external, data, inserting, row, InsightsExternalData, setting, configuration]
---

# Configure the Upload

> Configure the external data upload by inserting a row into the InsightsExternalData
    object and setting configuration values.

# Configure the Upload

Configure the external data upload by inserting a row into the InsightsExternalData object and setting configuration values.

After establishing a connection with Salesforce, insert a row into the InsightsExternalData object to configure and control the upload.

The InsightsExternalData object provides a “header” that contains information about the upload, such as the name of the dataset, the format of the data, and the operation to perform on the data. You can also provide the metadata file.

If you are uploading a CSV file without a header row, you must set the numberOfLinesToIgnore value to 0 in the metadata file. If you don’t set this value, the first row of every data part upload may be lost. For more information on the metadata file, see [External Data Metadata Overview](atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_schema_overview.htm "To upload external data into a CRM Analytics dataset, make sure that you have prepared your data and metadata files.").

The following example inserts a row into the InsightsExternalData object and sets configuration values.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_ext_data)

#### Note

The WSC converts the metadata .json file to a Base64-encoded string, but if you’re using REST API, you need to make this conversion yourself.

For detailed information about the InsightsExternalData object, see [The InsightsExternalData Object](atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_object_externaldata.htm "With the InsightsExternalData object, you can configure and control external data uploads. You can use it to provide metadata, trigger the start of the upload process, check status, and request cancellation and cleanup.").

## Code Examples

```
SObject sobj = new SObject();
sobj.setType("InsightsExternalData"); 
sobj.setField("Format","Csv");
sobj.setField("EdgemartAlias", DatasetName);
sobj.setField("MetadataJson",metadataJson);
sobj.setField("Operation","Overwrite");
sobj.setField("Action","None");

SaveResult[] results = partnerConnection.create(new SObject[] { sobj });

for(SaveResult sv:results)
    if(sv.isSuccess())
        parentID = sv.getId();
```

## Related Topics

- External Data Metadata Overview (atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_schema_overview.htm)
- The
                InsightsExternalData Object (atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_object_externaldata.htm)
