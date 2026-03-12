---
title: "SharingSet"
domain: metadata-api
topic: sharingset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:42.864Z
estimatedTokens: 1173
keywords: [SharingSet, Represents, sharing, set., set, defines, access, mapping, grants, portal, community, users, objects, associated, their, accounts, contacts., File, Suffix, Directory]
---

# SharingSet

> Represents a sharing set. A sharing set
      defines an access mapping that grants portal or community users access to objects that are
      associated with their accounts or contacts.

# SharingSet

Represents a sharing set. A sharing set defines an access mapping that grants portal or community users access to objects that are associated with their accounts or contacts.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

For example, you can grant portal or community users access to all cases related to their account record. Similarly, you can grant portal or community users access to all cases related to a parent account that is identified on the user’s account record.

## File Suffix and Directory Location

SharingSet components have the suffix .sharingSet and are stored in the sharingSets folder.

## Version

SharingSet components are available in API version 30.0 and later.

## Special Access Rules

As of Spring ’20 and later, only users with the View Setup and Configuration permission can access this object, and only users with the Manage Sharing permission can edit this object. To create or update sharing sets, you need the Customize Application permission.

Sharing sets are available with these licenses.

-   Authenticated Website
-   Customer Community Login
-   Customer Community Plus
-   Partner Community
-   Customer Community User
-   High Volume Customer Portal
-   High Volume Portal
-   Overage Authenticated Website User
-   Overage High Volume Customer Portal User

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| accessMappings | AccessMapping[] | A list of access mappings on a sharing set. |
| description | string | The sharing set description. Limit: 255 characters. |
| name | string | Required. The unique identifier for API access. Corresponds to Sharing Set Name on the user interface. |
| profiles | string[] | The profiles of users that are granted access to the target objects. Profiles must be associated with a license that can use sharing sets. See Special Access Rules for more information. |

## AccessMapping

AccessMapping represents an access mapping in the sharing set, which grants access to a target object by looking up to an account or contact associated with the user.

You can grant portal users access to a target object, or to both a target object and its associated objects, such as an account and its contacts and cases.

| Field Name | Field Type | Description |
| --- | --- | --- |
| accessLevel | string | Required. The target object access level granted to the portal user. Valid values are:ReadEdit |
| objectField | string | Required. A lookup to the target object, which supports standard or custom fields, or an ID. For accounts or cases associated with entitlements, use Entitlement.Account or Entitlement.Case. |
| object | string | Required. The target object to which the portal user is gaining access, and refers to one of the following:AccountCampaignContactCaseCustom Objects (for example, ObjA__c)OpportunityOrderServiceContractUserWorkOrderPortal users gain access to all order entitlements and order items under an account to which they have access. |
| userField | string | Required. The user’s lookup to an account, contact, or a standard or custom field derived from an account or contact. Either the user or the user’s manager can be used in the lookup. Valid values are:AccountAccount.FieldContactContact.FieldContact.RelatedAccountManager.AccountManager.ContactField refers to a standard or custom field based on an account or contact. |

## Declarative Metadata Sample Definition

The following is an example of a SharingSet component that grants users access to all contacts whose ReportsTo fields match the users’ contacts.

```

```

The following is an example of a SharingSet component that grants users access to all cases that are related to an entitlement, which is associated with the user’s account.

```

```

The following is an example of a SharingSet component with a list of access mappings.

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
<SharingSet xmlns="http://soap.sforce.com/2006/04/metadata">
  <accessMappings>
    <accessLevel>Read</accessLevel>
    <objectField>ReportsTo</objectField>
    <object>Contact</object>
    <userField>Contact</userField>
  </accessMappings>
  <description>User Access Mapping</description>
  <name>User</name>
  <profiles>customer community user</profiles>
</SharingSet>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<SharingSet xmlns="http://soap.sforce.com/2006/04/metadata">
  <name>Case</name>
   <accessMappings>
    <accessLevel>Edit</accessLevel>
    <objectField>Entitlement.Account</objectField>
    <object>Case</object>
    <userField>Account</userField>
  </accessMappings>
</SharingSet>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<SharingSet xmlns="http://soap.sforce.com/2006/04/metadata">
  <description>This is a basic sharing set with several access mappings.</description>
  <name>Basic</name>
  <profiles>customer community user</profiles>
  <accessMappings>
    <accessLevel>Read</accessLevel>
    <objectField>Id</objectField>
    <object>Account</object>
    <userField>Account</userField>
  </accessMappings>
  <accessMappings>
    <accessLevel>Edit</accessLevel>
    <objectField>Account</objectField>
    <object>Contact</object>
    <userField>Account</userField>
  </accessMappings>
  <accessMappings>
    <accessLevel>Edit</accessLevel>
    <objectField>Contact</objectField>
    <object>Case</object>
    <userField>Contact</userField>
  </accessMappings>
  <accessMappings>
    <accessLevel>Read</accessLevel>
    <objectField>AccountLookup__c</objectField>
    <object>HVPUAccessible__c</object>
    <userField>Account</userField>
  </accessMappings>
</SharingSet>
```

```
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <fullName>SharingSetBasic</fullName>
  <types>
    <members>HVPUAccessible__c.AccountLookup__c</members>
    <members>HVPUAccessible__c.ContactLookup__c</members>
    <name>CustomField</name>
  </types>
  <types>
    <members>HVPUAccessible__c</members>
    <name>CustomObject</name>
  </types>
  <types>
    <members>Basic</members>
    <name>SharingSet</name>
  </types>
  <version>30.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
