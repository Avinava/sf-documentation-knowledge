---
title: "PortalDelegablePermissionSet"
domain: metadata-api
topic: portaldelegablepermissionset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:41.269Z
estimatedTokens: 504
keywords: [PortalDelegablePermissionSet, org-level, permission, assigned, particular, profile, external, users, shoppers, store, enabling, Delegable, Administration, perm, Parent]
---

# PortalDelegablePermissionSet

> Represents the org-level permission sets that can
      be assigned to a particular profile for external users or shoppers in a store after enabling
      the Delegable Administration perm.

# PortalDelegablePermissionSet

Represents the org-level permission sets that can be assigned to a particular profile for external users or shoppers in a store after enabling the Delegable Administration perm.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

PortalDelegablePermissionSet components have the suffix .portaldelegablepermissionset and are stored in the portaldelegablepermissionsets folder.

## Version

PortalDelegablePermissionSet components are available in API version 56.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. |
| masterLabel | Field TypestringDescriptionRequired. The label for the service that appears to users. |
| permissionSet | Field TypestringDescriptionRequired. Foreign key to the permissionSet entity. |
| profile | Field TypestringDescriptionRequired. Foreign key to the profile entity. |

## Declarative Metadata Sample Definition

The following is the definition of the PortalDelegablePermissionSet entity.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

## Code Examples

```
<xsd:complexType name="PortalDelegablePermissionSet">
    <xsd:complexContent>
     <xsd:extension base="tns:Metadata">
      <xsd:sequence>
       <xsd:element name="isProtected" minOccurs="0" type="xsd:boolean"/>
       <xsd:element name="masterLabel" type="xsd:string"/>
       <xsd:element name="permissionSet" type="xsd:string"/>
       <xsd:element name="profile" type="xsd:string"/>
      </xsd:sequence>
     </xsd:extension>
    </xsd:complexContent>
   </xsd:complexType>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>PortalDelegablePermissionSet</name>
    </types>
    <types>
        <members>*</members>
        <name>Profile</name>
    </types>
    <types>
        <members>*</members>
        <name>PermissionSet</name>
    </types>
<version>56.0</version>
</Package>
```

## Related Topics

- permissionSet (atlas.en-us.api_meta.meta/api_meta/meta_permissionset.htm)
- profile (atlas.en-us.api_meta.meta/api_meta/meta_profile.htm)
