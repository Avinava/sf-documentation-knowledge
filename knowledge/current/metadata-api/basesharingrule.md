---
title: "BaseSharingRule"
domain: metadata-api
topic: basesharingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:37.149Z
estimatedTokens: 708
keywords: [BaseSharingRule, component, removed, API, version, 33.0, earlier, versions, only., SharingBaseRule, instead., Represents, base, container, criteria-based, owner-based, sharing, rules., Note, Version]
---

# BaseSharingRule

> This component is
                removed as of API version 33.0 and is available in earlier versions only. Use
            SharingBaseRule instead. Represents the base container for criteria-based and
            owner-based sharing rules.

# BaseSharingRule

This component is removed as of API version 33.0 and is available in earlier versions only. Use SharingBaseRule instead. Represents the base container for criteria-based and owner-based sharing rules.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can’t create a BaseSharingRule component directly. Use the components under the [CriteriaBasedSharingRule](atlas.en-us.api_meta.meta/api_meta/meta_cbsrule.htm#meta_cbsrules "This component is removed as of API version 33.0 and is available in earlier versions only. Use SharingRules instead. Represents a criteria-based sharing rule. CriteriaBasedSharingRule enables you to share records based on specific criteria.") or [OwnerSharingRule](atlas.en-us.api_meta.meta/api_meta/meta_ownersharingrule.htm#meta_ownersharingrule "Represents an ownership-based sharing rule. OwnerSharingRule enables you to share records owned by a set of users with another set, using rules that specify the access level of the target user group. This component is removed as of API version 33.0 and is available in earlier versions only.") metadata types instead.

## Version

[BaseSharingRule](#meta_basesharingrule "This component is removed as of API version 33.0 and is available in earlier versions only. Use SharingBaseRule instead. Represents the base container for criteria-based and owner-based sharing rules.") components are available in API version 24.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| sharedTo | SharedTo | Required. Specifies who the record is shared with. |
| fullName | string | The unique identifier for API access.The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_cbsrule.htm "CriteriaBasedSharingRule")

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- CriteriaBasedSharingRule (atlas.en-us.api_meta.meta/api_meta/meta_cbsrule.htm)
- OwnerSharingRule (atlas.en-us.api_meta.meta/api_meta/meta_ownersharingrule.htm)
- SharedTo (atlas.en-us.api_meta.meta/api_meta/meta_sharedto.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_cbsrule.htm)
