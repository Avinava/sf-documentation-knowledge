---
title: "RecordType"
domain: metadata-api
topic: recordtype
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:42.266Z
estimatedTokens: 1409
keywords: [RecordType, Represents, metadata, associated, record, type., Record, types, let, offer, different, business, processes, picklist, values, page, layouts, users., create, update]
---

# RecordType

> Represents the metadata associated with a record type. 
        Record types let you offer different business processes, picklist values, and page layouts to different users. 
        Use this metadata type to create, update, or delete record type definitions for a custom object.

# RecordType

Represents the metadata associated with a record type. Record types let you offer different business processes, picklist values, and page layouts to different users. Use this metadata type to create, update, or delete record type definitions for a custom object.

For more information, see Tailor Busines Processes to Different Record Types Users in Salesforce Help. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Don’t use record types as an access control mechanism. Profile assignment governs create and edit access for an object but doesn’t govern read access. For example, a user assigned to a profile that isn't enabled for a particular record type can't create records with that record type, but can access records associated with that record type.

Users with access to an object can read all record type information for that object. We strongly recommend against storing sensitive information in the record type description, name, or label. Instead, store sensitive information in a separate object or fields to which you’ve applied appropriate access controls.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Retrieving a component of this metadata type in a project makes the component appear in any Profile and PermissionSet components that are retrieved in the same package.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Metadata API doesn’t retrieve custom picklist values on person account record types, if the picklist exists on a contact. In this case, Metadata API retrieves standard picklist values only.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Metadata API doesn't retrieve specific picklist fields that are associated with a record type.

## Version

Record types are available in API version 12.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| active | boolean | Required. Indicates whether the record type is active. |
| businessProcess | string | The fullName of the business process associated with the record type. This field is required in record types for lead, opportunity, solution, and case, and not allowed otherwise. See BusinessProcess.This field is available in API version 17.0 and later. |
| compactLayoutAssignment | string | Represents the compact layout that is assigned to the record type.This field is available in API version 29.0 and later. |
| description | string | Record type description. Maximum of 255 characters. |
| fullName | string | Record type name. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. If this field contained characters before version 14.0 that are no longer allowed, the characters were stripped out of this field, and the previous value of the field was saved in the label field.Inherited from the Metadata component, this field isn’t defined in the WSDL for this component. It must be specified when creating, updating, or deleting. See create() to see an example of this field specified for a call.This value can't be null. |
| label | string | Required. Descriptive label for the record type. The list of characters allowed in the fullName field has been reduced for versions 14.0 and later. This field contains the value contained in the fullName field before version 14.0. |
| picklistValues | RecordTypePicklistValue[] | Represents a set of values for a picklist. |

## RecordTypePicklistValue

RecordTypePicklistValue represents the combination of picklists and valid values that define a record type:

| Field Name | Field Type | Description |
| --- | --- | --- |
| picklist | string | Required. The name of the picklist. |
| values | PicklistValue | One or more of the picklist values in the picklist. Each value defined is available in the record type that contains this component. |

## Java Sample

The following sample uses two record types. For the complete sample that includes profiles and picklists, see [Profile](atlas.en-us.api_meta.meta/api_meta/meta_profile.htm "Represents a user profile. A profile defines a user’s permission to perform different functions within Salesforce. This type extends the Metadata metadata type and inherits its fullName field.").

```

```

## Declarative Metadata Sample Definition

The definition of a record type in a custom object is shown in this code block.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_profilesearchlayouts.htm "ProfileSearchLayouts")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_searchlayouts.htm "SearchLayouts")

## Code Examples

```apex
public void recordTypeSample() {
  try {
    // Employees and managers have different access
    // to the state of the expense sheet
    RecordType edit = new RecordType();
    edit.setFullName("ExpenseReport__c.Edit");
    edit.setLabel("ExpenseReport__c.Label");
    PicklistValue unsubmitted = new PicklistValue();
    unsubmitted.setFullName("Unsubmitted");
    PicklistValue submitted = new PicklistValue();
    submitted.setFullName("Submitted");
    RecordTypePicklistValue editStatuses = 
        new RecordTypePicklistValue();
    editStatuses.setPicklist("ExpenseStatus__c");
    editStatuses.setValues(
        new PicklistValue[] {unsubmitted, submitted});
    edit.setPicklistValues(
        new RecordTypePicklistValue[] {editStatuses});
    AsyncResult[] arsEdit =
        metadataConnection.create(new Metadata[] {edit});
    
    RecordType approve = new RecordType();
    approve.setFullName("ExpenseReport__c.Approve");
    PicklistValue approved = new PicklistValue();
    approved.setFullName("Approved");
    PicklistValue rejected = new PicklistValue();
    rejected.setFullName("Rejected");
    RecordTypePicklistValue approveStatuses = 
        new RecordTypePicklistValue();
    approveStatuses.setPicklist("ExpenseStatus__c");
    approveStatuses.setValues(
        new PicklistValue[] {approved, rejected});
    approve.setPicklistValues(
        new RecordTypePicklistValue[] {approveStatuses});
    AsyncResult[] arsApprove =
      metadataConnection.create(new Metadata[] {approve});
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

```
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
. . .
   <recordTypes>
        <fullName>My First Recordtype</fullName>
    </recordTypes>
 . . .
</CustomObject>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- BusinessProcess (atlas.en-us.api_meta.meta/api_meta/meta_businessprocess.htm)
- create() (atlas.en-us.api_meta.meta/api_meta/meta_create.htm)
- PicklistValue (atlas.en-us.api_meta.meta/api_meta/meta_globalpicklistvalue.htm)
- Profile (atlas.en-us.api_meta.meta/api_meta/meta_profile.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- ← Previous (atlas.en-us.api_meta.meta/api_meta/meta_profilesearchlayouts.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_searchlayouts.htm)
