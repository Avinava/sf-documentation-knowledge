---
title: "Index"
domain: metadata-api
topic: index
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:40.010Z
estimatedTokens: 775
keywords: [Index, defined, custom, big, metadata, define, composite, primary, key, extends, inherits, fullName, File, Suffix, Directory]
---

# Index

> Represents an index defined within a custom big
        object. Use this metadata type to define the composite primary key (index) for a
      custom big object. This type extends the Metadata metadata type and inherits its
        fullName field.

# Index

Represents an index defined within a custom [big object](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object.htm). Use this metadata type to define the composite primary key (index) for a custom big object. This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

Indexes are user-defined and are part of the custom object definition for big objects. See [CustomObject](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/customobject.htm) for more information.

## Version

The Index type is available in API version 41.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| fields | IndexField[] | The definition of the fields in the index. |
| label | string | Required. This name is used to refer to the big object in the user interface. Available in API version 41.0 and later. |

## IndexField

Defines which fields make up the index, their order, and sort direction. The order in which the fields are defined determines the order fields are listed in the index.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Required. The API name for the field that’s part of the index. This value must match the fullName value for the corresponding field in the fields section and be marked as required.WarningWhen querying a big object record via SOQL and passing the results as arguments to the delete API, if any index field name has a leading or trailing white space, you can't delete the big object record. |
| sortDirection | string | Required. The sort direction of the field in the index. Valid values are ASC for ascending order and DESC for descending order. |

## Declarative Metadata Sample Definition

The following is an example of an index contained within the definition of a custom big object, Customer\_Interactions\_\_b.object.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_historyretentionpolicy.htm "HistoryRetentionPolicy")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_listview.htm "ListView")

#### See Also

-   [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.")

-   [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">

    <deploymentStatus>Deployed</deploymentStatus>

// Define the fields within the big object
    <fields>
        <fullName>Purchase__c</fullName>
        <label>Purchase</label>
        <length>16</length>
        <required>false</required>
        <type>Text</type>
        <unique>false</unique>
    </fields>
    
    <fields>
        <fullName>Order_Number__c</fullName>
        <label>Order Number</label>
        <length>16</length>
        <required>false</required>
        <type>Text</type>
        <unique>true</unique>
    </fields>
    
    <fields>
        <fullName>Platform__c</fullName>
        <label>Platform</label>
        <length>16</length>
        <required>true</required>
        <type>Text</type>
        <unique>false</unique>
    </fields>

    <fields>
        <fullName>Account__c</fullName>
        <label>User Account</label>
        <referenceTo>Account</referenceTo>
        <relationshipName>User_Account</relationshipName>
        <required>true</required>
        <type>Lookup</type>
    </fields>

    <fields>
        <fullName>Order_Date__c</fullName>
        <label>Order Date</label>
        <required>true</required>
        <type>DateTime</type>
    </fields>

// Define the index
    <indexes>
        <fullName>CustomerInteractionsIndex</fullName>
        <label>Customer Interactions Index</label>
        <fields>
            <name>Account__c</name>
            <sortDirection>DESC</sortDirection>
        </fields>
        <fields>
            <name>Platform__c</name>
            <sortDirection>ASC</sortDirection>
        </fields>
        <fields>
            <name>Order_Date__c</name>
            <sortDirection>DESC</sortDirection>
        </fields>
    </indexes>
    
    <label>Customer Interaction</label>
    <pluralLabel>Customer Interactions</pluralLabel>
</CustomObject>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- ← Previous (atlas.en-us.api_meta.meta/api_meta/meta_historyretentionpolicy.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_listview.htm)
- CustomObject (atlas.en-us.api_meta.meta/api_meta/customobject.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
