---
title: "UserCriteria"
domain: metadata-api
topic: usercriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.782Z
estimatedTokens: 609
keywords: [UserCriteria, member, criteria, Experience, Cloud, site, moderation, rules, extends, Metadata, inherits, fullName, File, Suffix, Directory]
---

# UserCriteria

> Represents the member criteria to use in Experience Cloud
      site moderation rules. This type extends the Metadata metadata type and inherits its
        fullName field..

# UserCriteria

Represents the member criteria to use in Experience Cloud site moderation rules. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field..

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

UserCriteria components have the suffix site\_name.user\_criteria\_developer\_name.userCriteria and are stored in the UserCriteria folder.

## Version

UserCriteria components are available in API version 39.0 and later.

## Special Access Rules

To view, create, edit, and delete moderation rules, you need the Manage Experiences or Create and Set Up Experiences permission. As of Spring ’20 and later, only users with permission to edit moderation rules can access this object.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| creationAgeInSeconds | int | If specified, includes only users that were created within a specific time frame. |
| description | string | The description of the user criteria. |
| lastChatterActivityAgeInSeconds | int | If specified, includes only members that have posted or commented in the Experience Cloud site within a specific time frame. |
| masterLabel | string | Name of the user criteria. |
| userTypes | NetworkUserType enumeration ( of type string) | The member type to use in moderation rules. Valid values are:InternalCustomerPartner |

## Declarative Metadata Sample Definition

The following is an example of a UserCriteria component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<UserCriteria xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>Customer and Partner Members</masterLabel>
    <description>Member criteria matches customer and partner member</description>
    <userTypes>Partner</userTypes>
    <userTypes>Customer</userTypes>
</UserCriteria>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
