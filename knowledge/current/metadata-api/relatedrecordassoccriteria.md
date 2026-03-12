---
title: "RelatedRecordAssocCriteria"
domain: metadata-api
topic: relatedrecordassoccriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.301Z
estimatedTokens: 961
keywords: [RelatedRecordAssocCriteria, Represents, criteria, automatically, linking, records, accounts, leads, opportunities, cases, branches, work, them., Important, Parent, File, Suffix, Directory, Location, Version]
---

# RelatedRecordAssocCriteria

> Represents criteria for automatically linking
			records like accounts, leads, opportunities, and cases with the branches that work with
			them.

# RelatedRecordAssocCriteria

Represents criteria for automatically linking records like accounts, leads, opportunities, and cases with the branches that work with them.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

RelatedRecordAssocCriteria components have the suffix .relatedRecordAssocCriteria and are stored in the relatedRecordAssocCriteria folder.

## Version

RelatedRecordAssocCriteria components are available in API version 52.0 and later.

## Special Access Rules

To use this object, you must have the Financial Services Cloud Extension permission set.

## Fields

| Field Name | Description |
| --- | --- |
| associationHandlerApexClass | Field TypestringDescriptionThe name of a custom Apex class that handles the creation of association records for specific association criteria. This class must:Apply to an object that the Record Association Builder doesn't directly supportImplement the fscwmgen.BranchManagement​AssociationHandler interfaceReturn a list of Branch Unit Related RecordsPopulate at least the minimum required fields in each Branch Unit Related Record:BranchUnitId: Represents the current branch unit of the user or contactBusinessUnitMemberId: The Banker ID of the user or contactRelatedRecordId: The ID of the custom object to be relatedThis field is a relationship field. |
| associationType | Field TypeAssociationType (enumeration of type string)DescriptionRequired.The association type. Values are:BranchManagement |
| description | Field TypestringDescriptionA description of the association criteria. |
| eventType | Field TypeAssociationEventType (enumeration of type string)DescriptionRequired.The type of reference object event that triggers creation of the association. Values are:CreateUpdate |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. The default value is false. |
| masterLabel | Field TypestringDescriptionRequired.The master label of the association criteria. This internal label doesn’t get translated. |
| preCondition | Field TypestringDescriptionRequired.A formula that, when true, causes a new association to be created. |
| referenceObject | Field TypestringDescriptionRequired.The reference object for the association criteria. |
| selectedOwnerField | Field TypestringDescriptionA field to use instead of the default Owner ID. |
| status | Field TypeAssociationStatusType (enumeration of type string)DescriptionRequired.The status of the association criteria. Values are:ActiveDraftInactive |

## Declarative Metadata Sample Definition

The following is an example of a RelatedRecordAssocCriteria component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<RelatedRecordAssocCriteria xmlns="http://soap.sforce.com/2006/04/metadata">
   <associationType>BranchManagement</associationType>
   <eventType>Create</eventType>
   <masterLabel>RevenueThreeMillion</masterLabel>
   <preCondition>[Account].AnnualRevenue > 3000000</preCondition>
   <referenceObject>Account</referenceObject>
   <status>Active</status>
</RelatedRecordAssocCriteria>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>RelatedRecordAssocCriteria</name>
    </types>
    <version>52.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
