---
title: "describeValueType()"
domain: metadata-api
topic: describevaluetype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:38.482Z
estimatedTokens: 541
namespace: DescribeValueTypeResult
keywords: [describeValueType, Retrieves, metadata, describing, Arguments, Permissions, Sample, Code—Java]
---

# describeValueType()

> Retrieves the metadata describing a given metadata type (value type).

**Namespace:** `DescribeValueTypeResult`

# describeValueType()

Retrieves the metadata describing a given metadata type (value type).

describeValueType() accepts a namespace and a type name, and returns a DescribeValueTypeResult object. This call is available in API version 33.0 and later.

## Syntax

```

```

## Example

Describe Apex class metadata in the Metadata namespace:

```

```

Describe Apex class metadata in the Tooling namespace:

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| type | string | The name of the metadata type for which you want metadata; for example, ApexClass. Include the namespace. |

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

## Sample Code—Java

The following example describes several metadata types by specifying the Metadata namespace. Each metadata type is described using the helper method, doDescribe(), which calls the describeValueType() Metadata API call. The sample retrieves information from the returned DescribeValueTypeResult: a property, the parent field (if any), and the fields. Next, the sample iterates through the fields and outputs information about each field.

```

```

To run the previous example with the Tooling WSDL, replace the namespace with the Tooling namespace in the helper function call as follows. Also, use the Tooling connection instead of the Metadata connection to make the describeValueType() call.

```

```

After you run the sample, the output looks similar to the following.

```

```

## Response

[DescribeValueTypeResult](atlas.en-us.api_meta.meta/api_meta/meta_describeValueTypeResult.htm "Contains information about a value type that’s useful for developers working with declarative metadata.")

## Code Examples

```
DescribeValueTypeResult = connection.describeValueType("{namespace}type_name");
```

```
DescribeValueTypeResult = metadataConnection.describeValueType("{http://soap.sforce.com/2006/04/metadata}ApexClass");
```

```
DescribeValueTypeResult = toolingConnection.describeValueType("{urn:metadata.tooling.soap.sforce.com}ApexClass");
```

```apex
public void describeValueType() throws ConnectionException {
    doDescribe("{http://soap.sforce.com/2006/04/metadata}CustomObject");
    doDescribe("{http://soap.sforce.com/2006/04/metadata}CustomField");
    doDescribe("{http://soap.sforce.com/2006/04/metadata}EmailTemplate");
}

public void doDescribe(String type) throws ConnectionException {
    DescribeValueTypeResult result = metadataConnection.describeValueType(type);
    StringBuffer sb = new StringBuffer();

    sb.append("Describing " + type + " ...
");

    if (result.getApiCreatable() == true) {
        sb.append("Is API creatable.
");
    } else {
        sb.append("Is not API creatable.
");
    }

    ValueTypeField parentField = result.getParentField();
    if (parentField != null) {
        sb.append("** Parent type fields **
");
        if (parentField.getIsForeignKey()) {
            sb.append("This field is a foreign key.
");
            for (String fkDomain : parentField.getForeignKeyDomain()) { 
                sb.append("Foreign key domain: " + fkDomain + "
");
            }
        }              
    }

    sb.append("** Value type fields **
");
    for(ValueTypeField field : result.getValueTypeFields()) {
        sb.append("***************************************************
");
        sb.append("Name: " + field.getName() + "
");
        sb.append("SoapType: " + field.getSoapType() + "
");
        if (field.getIsForeignKey()) {
            sb.append("This field is a foreign key.
");
            for (String fkDomain : field.getForeignKeyDomain()) { 
                sb.append("Foreign key domain: " + fkDomain + "
");
            }
        }
        sb.append("***************************************************
");
    }
    System.out.println(sb.toString());
}
```

```
doDescribe("{urn:metadata.tooling.soap.sforce.com}CustomObject");
    doDescribe("{urn:metadata.tooling.soap.sforce.com}CustomField");
    doDescribe("{urn:metadata.tooling.soap.sforce.com}EmailTemplate");
```

## Related Topics

- Modify
                    Metadata Through Metadata API Functions (atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm)
- DescribeValueTypeResult (atlas.en-us.api_meta.meta/api_meta/meta_describeValueTypeResult.htm)
