---
title: "BusinessProcess"
domain: metadata-api
topic: businessprocess
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:37.463Z
estimatedTokens: 1098
keywords: [BusinessProcess, metadata, enables, display, different, picklist, values, users, based, their, profile., Important, Declarative, Metadata, File, Suffix, Directory, Location, Version, Special]
---

# BusinessProcess

> The BusinessProcess metadata type enables you to
            display different picklist values for users based on their profile.

# BusinessProcess

The BusinessProcess metadata type enables you to display different picklist values for users based on their profile.

Multiple business processes allow you to track separate sales, support, and lead lifecycles. A sales, support, lead, or solution process is assigned to a record type. The record type determines the user profiles that are associated with the business process.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Don’t use business processes as an access control mechanism. Profile assignment governs create and edit access for business process but doesn’t govern read access. For example, a user assigned to a profile that isn't enabled for a particular business process can't create or edit it, but they can read the business process record.

Users with access to a business process can read all information it stores. Don’t store sensitive information in the business process description, name, or picklist values. Instead, store sensitive information in a separate object or fields to which you’ve applied appropriate access controls.

## Declarative Metadata File Suffix and Directory Location

Business processes are defined as part of the custom object or standard object definition. See [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.") for more information.

## Version

[BusinessProcess](#meta_businessprocess "The BusinessProcess metadata type enables you to display different picklist values for users based on their profile.") components are available in API version 17.0 and later.

## Special Access Rules

Access to this object requires the View Setup and Configuration permission.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | Description for the business process. |
| fullName | string | Required. The name used as a unique identifier for API access. This field is inherited from the Metadata component, but the string it contains is created differently than the fullName strings for other types. For a fullName string BusinessProcess, the fullName is created combining the Entity Name and Business Process Name. For example, for a business process called “Bulk Orders” for opportunities, the fullName would be Opportunity.Bulk Orders. |
| isActive | boolean | Indicates if the business process is active (true) or not (false). |
| namespacePrefix | string | The namespace of the developer organization where the package was created. |
| values | PicklistValue[] | A list of picklist values associated with this business process. |

## Declarative Metadata Sample Definition

The following is a sample XML definition of a lead business process.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file only when a [RecordType](atlas.en-us.api_meta.meta/api_meta/meta_recordtype.htm#meta_recordtype "Represents the metadata associated with a record type. Record types let you offer different business processes, picklist values, and page layouts to different users. Use this metadata type to create, update, or delete record type definitions for a custom object.") is specified. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/actionoverride.htm "ActionOverride")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_compactlayout.htm "CompactLayout")

#### See Also

-   [*Salesforce DX Developer Guide*: BusinessProcessGroup](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_packageable_components.htm#mdc_business_process_group)

-   [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
....
    <businessProcesses>
        <fullName>HardwareLeadProcess</fullName>
        <description>Lead Process for hardware division</description>
        <isActive>true</isActive>
        <values>
            <fullName>Closed - Converted</fullName>
            <default>false</default>
        </values>
        <values>
            <fullName>CustomLeadStep1</fullName>
            <default>false</default>
        </values>
        <values>
            <fullName>CustomLeadStep2</fullName>
            <default>false</default>
        </values>
        <values>
            <fullName>Open - Not Contacted</fullName>
            <default>false</default>
        </values>
        <values>
            <fullName>Working - Contacted</fullName>
            <default>true</default>
        </values>
    </businessProcesses>
....
</CustomObject>
```

## Related Topics

- CustomObject (atlas.en-us.api_meta.meta/api_meta/customobject.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- PicklistValue (atlas.en-us.api_meta.meta/api_meta/meta_globalpicklistvalue.htm)
- RecordType (atlas.en-us.api_meta.meta/api_meta/meta_recordtype.htm)
- Deploying and Retrieving Metadata with the Zip
                    File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- ← Previous (atlas.en-us.api_meta.meta/api_meta/actionoverride.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_compactlayout.htm)
