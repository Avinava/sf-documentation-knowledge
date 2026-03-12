---
title: "PermissionSetLicenseDefinition (Developer Preview)"
domain: metadata-api
topic: permissionsetlicensedefinition-developer-preview
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:41.174Z
estimatedTokens: 1143
namespace: BlockNamespaceAccess
keywords: [PermissionSetLicenseDefinition, Developer, Preview, definition, custom, permission, license, entitles, features, package, Parent, File, Suffix, Directory, Location]
---

# PermissionSetLicenseDefinition (Developer Preview)

> Represents the definition of a custom permission set
      license, which entitles specified features in a package.

**Namespace:** `BlockNamespaceAccess`

# PermissionSetLicenseDefinition (Developer Preview)

Represents the definition of a custom permission set license, which entitles specified features in a package.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

PermissionSetLicenseDefinition components have the suffix .permissionSetLicenseDefinition and are stored in the permissionSetLicenseDefinitions folder.

## Version

PermissionSetLicenseDefinition components are available in API version 54.0 and later.

## Special Access Rules

To access PermissionSetLicenseDefinition, you must have the Partner Licensing Platform developer preview enabled. To participate in this developer preview, submit a participation request via the [Partner Licensing Platform Developer Preview](https://partners.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F94V0000010zlV) Partner Community group.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The Partner Licensing Platform is available as a developer preview. The Partner Licensing Platform isn’t generally available unless or until Salesforce announces its general availability in documentation or in press releases or public statements. All commands, parameters, and other features are subject to change or deprecation at any time, with or without notice. Don't implement functionality developed with these commands or tools in your production package.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| customPermissions | PermissionSetLicenseDefinitionCustomPermission | An array of licensed custom permissions included in the permission set license definition. |
| isSupplementLicense | boolean | Indicates whether the custom permission set license is a supplement license (true) or a foundation license (false). The default value is false. This field is available in API version 55.0 and later. |
| label | string | Required. The name of the permission set license definition. |
| licenseExpirationPolicy | LicenseExpirationPolicy (enumeration of type string) | The license expiration policy of the custom permission set license. Valid values are:BlockNamespaceAccess—Package access is blocked for existing users when all custom permission set licenses expire. This is the default value.AllowNamespaceAccess—Package access isn’t blocked for existing users when all custom permission set licenses expire.This field is available in API version 55.0 and later. |
| userLicenseRestrictions | string | The user license categories that can be assigned the custom permission set license. If no user license categories are specified, all users can be assigned the license. Possible values include:${communities}${communitiesLogin}${customerCommunities}${customerCommunitiesLogin}${internal}${partnerCommunity}${partnerCommunityLogin}${platform}For more information, see User License Restriction Categories (Developer Preview). This field is available in API version 55.0 and later. |

## PermissionSetLicenseDefinitionCustomPermission

Represents a licensed custom permission included in the permission set license definition.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Label of the licensed custom permission. This field must be a reference to a CustomPermission that has the isLicensed field set to true. |

## Declarative Metadata Sample Definition

The following is an example of a PermissionSetLicenseDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

For more information, see the [Partner Licensing Platform Developer Guide (Developer Preview)](https://developer.salesforce.com/docs/atlas.en-us.260.0.plp_dev.meta/plp_dev/partner_licensing_platform_intro.htm).

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PermissionSetLicenseDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <customPermissions>>
        <name>AccessReportsPerm</name>
    </customPermissions>
    <isSupplementLicense>false</isSupplementLicense>
    <licenseExpirationPolicy>BlockNamespaceAccess</licenseExpirationPolicy>
    <label>ExampleFeatureLicenseDefinition</label>
    <userLicenseRestrictions>${internal}</userLicenseRestrictions>
</PermissionSetLicenseDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>PermissionSetLicenseDefinition</name>
    </types>
    <version>54.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- CustomPermission (atlas.en-us.api_meta.meta/api_meta/meta_custompermission.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
