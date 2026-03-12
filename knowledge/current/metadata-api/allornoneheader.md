---
title: "AllOrNoneHeader"
domain: metadata-api
topic: allornoneheader
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:36.777Z
estimatedTokens: 496
keywords: [AllOrNoneHeader, Indicates, whether, roll, back, metadata, changes, records, call, result, failures., Version, Supported, Calls, Usage, Fields, Sample, Code—Java]
---

# AllOrNoneHeader

> Indicates whether to roll back all metadata changes when some of the records in a call
        result in failures.

# AllOrNoneHeader

Indicates whether to roll back all metadata changes when some of the records in a call result in failures.

## Version

This header is available in API version 34.0 and later.

## Supported Calls

[createMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm "Adds one or more new metadata components to your organization synchronously."), [updateMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_updateMetadata.htm "Updates one or more metadata components in your organization synchronously."), [upsertMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_upsertMetadata.htm "Creates or updates one or more metadata components in your organization synchronously."), [deleteMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm "Deletes one or more metadata components from your organization synchronously.")

## Usage

If this header isn’t used in API version 34.0 and later, by default a call can save a partial set of records (equivalent to AllOrNoneHeader=false)—the records that are processed successfully are saved and records that have failures aren’t saved.

## Fields

| Field Name | Type | Description |
| --- | --- | --- |
| allOrNone | boolean | Set to true to cause all metadata changes to be rolled back if any records in the call cause failures. Set to false to enable saving only the records that are processed successfully when other records in the call cause failures. |

## Sample Code—Java

Add the AllOrNoneHeader to the metadata connection before you perform a call as follows:

```

```

This next example shows how to use the AllOrNoneHeader when creating two custom objects. Because the second custom object doesn’t have the required Name field, the create() call can’t create this custom object and rolls back the first custom object. The output is shown after this code sample.

```

```

This is the output that the sample returns. The first record is rolled back and the second has a failure.

```

```

## Code Examples

```
metadataConnection.setAllOrNoneHeader(true);
```

```apex
import com.sforce.soap.metadata.*;
import com.sforce.soap.metadata.Error;
import com.sforce.ws.ConnectionException;

public class CallWithHeader {
	
    MetadataConnection metadataConnection = null;
    
    public static void main(String[] args) throws ConnectionException {
    	CallWithHeader samples = new CallWithHeader();
        samples.createWithHeader();
    }

    public CallWithHeader() throws ConnectionException {
        metadataConnection = MetadataLoginUtil.login();
    }
    
    public void createWithHeader() throws ConnectionException {
        // Define two custom objects to be inserted.
        CustomObject co1 = new CustomObject();
        String name1 = "MyCustomObject1";
        co1.setFullName(name1 + "__c");
        co1.setDeploymentStatus(DeploymentStatus.Deployed);
        co1.setDescription("Created by the Metadata API");
        co1.setEnableActivities(true);
        co1.setLabel(name1 + " Object");
        co1.setPluralLabel(co1.getLabel() + "s");
        co1.setSharingModel(SharingModel.ReadWrite);

        CustomField nf = new CustomField();
        nf.setType(FieldType.Text);
        nf.setLabel(co1.getFullName() + " Name");
        co1.setNameField(nf);
        
        // The second custom object doesn't have a Name field
        CustomObject co2 = new CustomObject();
        String name2 = "MyCustomObject2";
        co2.setFullName(name2 + "__c");
        co2.setDeploymentStatus(DeploymentStatus.Deployed);
        co2.setDescription("Created by the Metadata API");
        co2.setEnableActivities(true);
        co2.setLabel(name2 + " Object");
        co2.setPluralLabel(co2.getLabel() + "s");
        co2.setSharingModel(SharingModel.ReadWrite);

        
        // Setting the allOrNone header to true to cause
        //  the call to not commit any record if one or more 
        //  records in this call have failures.
        metadataConnection.setAllOrNoneHeader(true);

        // Now that the header has been set, make the create call.
        SaveResult[] results = metadataConnection
                .createMetadata(new Metadata[] { co1, co2 });

        // Iterate through the call results
        for (SaveResult r : results) {
            if (r.isSuccess()) {
                System.out.println("Created component: " + r.getFullName());
            } else {
                System.out
                        .println("Errors were encountered while creating "
                                + r.getFullName());
                for (Error e : r.getErrors()) {
                    System.out.println("Error message: " + e.getMessage());
                    System.out.println("Status code: " + e.getStatusCode());
                }
            }
        }
    }

}
```

```
Errors were encountered while creating MyCustomObject1__c
Error message: Record rolled back because not all records were valid and the request was using AllOrNone header
Status code: ALL_OR_NONE_OPERATION_ROLLED_BACK
Errors were encountered while creating MyCustomObject2__c
Error message: Must specify a nameField of type Text or AutoNumber
Status code: FIELD_INTEGRITY_EXCEPTION
```

## Related Topics

- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- updateMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_updateMetadata.htm)
- upsertMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_upsertMetadata.htm)
- deleteMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm)
