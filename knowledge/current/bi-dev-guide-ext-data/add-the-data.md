---
title: "Add the Data"
domain: bi-dev-guide-ext-data
topic: add-the-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.133Z
estimatedTokens: 299
keywords: [Add, Data, uploading, external, files, InsightsExternalDataPart, load, smaller, chunks]
---

# Add the Data

> When uploading external data files, you can use the InsightsExternalDataPart object to
        load the data in smaller chunks.

# Add the Data

When uploading external data files, you can use the InsightsExternalDataPart object to load the data in smaller chunks.

After inserting a row into the InsightsExternalData (header) object, split your data into 10-MB chunks and upload the chunks to InsightsExternalDataPart objects. You associate the part objects with the header object by setting the InsightsExternalDataId field on the part objects to the ID of the header object. The part objects contain the bytes of data and must be assigned part numbers in a contiguous sequence, starting with 1.

Ensure that the chunks of data are smaller than 10 MB. If the data is compressed, it must be compressed first and then split into 10-MB chunks. Only the gzip format is supported.

The following example splits a file into 10-MB chunks, and then uploads the chunks to InsightsExternalDataPart objects.

```

```

For detailed information about the InsightsExternalDataPart object, see [InsightsExternalDataPart](atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_object_externaldatapart.htm "The InsightsExternalDataPart object enables you to upload an external data file that has been split into parts.").

## Code Examples

```apex
List<File> fileParts = chunkBinary(dataFile); //Split the file

for(int i = 0;i<fileParts.size();i++)
{
    SObject sobj = new SObject();
    sobj.setType("InsightsExternalDataPart"); 
    sobj.setField("DataFile", FileUtils.readFileToByteArray(fileParts.get(i)));
    sobj.setField("InsightsExternalDataId", parentID);
    obj.setField("PartNumber",i+1); //Part numbers should start at 1    
    SaveResult[] results = partnerConnection.create(new SObject[] { sobj });
    for(SaveResult sv:results)
        if(sv.isSuccess())
            rowId = sv.getId();
}
```

## Related Topics

- InsightsExternalDataPart (atlas.en-us.bi_dev_guide_ext_data.meta/bi_dev_guide_ext_data/bi_ext_data_object_externaldatapart.htm)
