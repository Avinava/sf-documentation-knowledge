---
title: "SharingReason"
domain: metadata-api
topic: sharingreason
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.917Z
estimatedTokens: 557
keywords: [SharingReason, Represents, Apex, sharing, reason, which, used, indicate, why, implemented, custom, object., managed, allows, developers, programmatically, share, objects., only, users]
---

# SharingReason

> Represents an Apex sharing reason, which is used to
            indicate why sharing was implemented for a custom object. Apex managed sharing
        allows developers to use Apex to programmatically share custom objects. When you use Apex
        managed sharing to share a custom object, only users with the “Modify All
        Data” permission can add or change the sharing on the custom object's record, and the
        sharing access is maintained across record owner changes.

# SharingReason

Represents an Apex sharing reason, which is used to indicate why sharing was implemented for a custom object. Apex managed sharing allows developers to use Apex to programmatically share custom objects. When you use Apex managed sharing to share a custom object, only users with the “Modify All Data” permission can add or change the sharing on the custom object's record, and the sharing access is maintained across record owner changes.

Use SharingReason to create, update, or delete sharing reason definitions for a custom object. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Version

Sharing reasons are available in API version 14.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| fullName | string | Required. Sharing reason name. The __c suffix is appended to custom sharing reasons.Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call. |
| label | string | Required. Descriptive label for the sharing reason. Maximum of 40 characters. |

## Declarative Metadata Sample Definition

The definition of a sharing reason in a custom object:

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_searchlayouts.htm "SearchLayouts")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_apexsharingrecalculation.htm "SharingRecalculation")

## Code Examples

```
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
. . .
    <sharingReasons>
        <fullName>recruiter__c</fullName>
        <label>Recruiter</label>
    </sharingReasons>
 . . .
</CustomObject>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- fullName (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- ← Previous (atlas.en-us.api_meta.meta/api_meta/meta_searchlayouts.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_apexsharingrecalculation.htm)
