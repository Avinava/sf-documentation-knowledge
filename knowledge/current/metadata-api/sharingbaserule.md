---
title: "SharingBaseRule"
domain: metadata-api
topic: sharingbaserule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.643Z
keywords: [SharingBaseRule, Note, Version, Fields, AccountSharingRuleSettings, Wildcard, Support, Manifest, File]
---

# SharingBaseRule

# SharingBaseRule

Represents sharing rule settings such as access level and to whom access is granted.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can’t create a [SharingBaseRule](#meta_sharingbaserule "Represents sharing rule settings such as access level and to whom access is granted.") component directly. Use the components under [SharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm "Represents the base container for sharing rules, which can be criteria-based, ownership-based, territory-based, or for guest user access. SharingRules enables you to share records with a set of users, using rules that specify the access level for the target user group.") instead.

## Version

[SharingBaseRule](#meta_sharingbaserule "Represents sharing rule settings such as access level and to whom access is granted.") replaces [BaseSharingRule](atlas.en-us.api_meta.meta/api_meta/meta_basesharingrule.htm "This component is removed as of API version 33.0 and is available in earlier versions only. Use SharingBaseRule instead. Represents the base container for criteria-based and owner-based sharing rules.") and is available in API version 33.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| accessLevel | string | Required. The access level that the sharing rule grants. |
| accountSettings | AccountSharingRuleSettings[] | The access level for the account’s children (case, contact, and opportunity). |
| description | string | Describes the sharing rule. Maximum of 1000 characters. |
| label | string | Required. Label for the sharing rule. |
| sharedTo | SharedTo | Required. Specifies who the record is shared with. |

## AccountSharingRuleSettings

Defines the access level for the case, contact, and opportunity associated with the account.

| Field | Field Type | Description |
| --- | --- | --- |
| caseAccessLevel | string | Required. The access level that the user or group has to cases associated with the account. Possible values are:NoneReadEdit |
| contactAccessLevel | string | Required. The access level that the user or group has to contacts associated with the account. Possible values are:NoneReadEdit |
| opportunityAccessLevel | string | Required. The access level that the user or group has to opportunities associated with the account. Possible values are:NoneReadEdit |

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").