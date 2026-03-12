---
title: "FieldRestrictionRule"
domain: metadata-api
topic: fieldrestrictionrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:39.842Z
estimatedTokens: 1078
keywords: [FieldRestrictionRule, Represents, field, visibility, rule, controls, whether, visible, user, based, field’s, inclusion, set., Enhanced, Personal, Information, Management, setting, enabled, before]
---

# FieldRestrictionRule

> Represents a field visibility rule that controls whether a
      field is visible to a user, based on the field’s inclusion in a field set. If Enhanced
      Personal Information Management setting was enabled before Spring ’22, field visibility is
      based on the field’s compliance categorization.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# FieldRestrictionRule

Represents a field visibility rule that controls whether a field is visible to a user, based on the field’s inclusion in a field set. If Enhanced Personal Information Management setting was enabled before Spring ’22, field visibility is based on the field’s compliance categorization. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

FieldRestrictionRule components have the suffix .rule and are stored in the fieldRestrictionRules folder.

## Version

FieldRestrictionRule components are available in API version 52.0 and later.

## Special Access Rules

-   To access this type, you must have the Manage Sharing permission.
-   To create and manage Employee field visibility rules, you must be assigned a Workplace Command Center permission set license and the Provides access to Workplace Command Center features system permission.
-   To create and manage User field visibility rules, you must enable Digital Experiences and the Enhanced Personal Information Management feature.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Indicates whether the rule is active (true) or not (false). The default value is false. |
| classification | string[] | Required. The data classification compliance categorization or field set that is targeted by the rule. The rule applies to fields that are marked with this categorization or included in this field set. If you enabled Enhanced Personal Information Management before Spring ‘22 (API version 54.0), you can use Salesforce's default compliance categorization values or values that you add yourself. If you enabled Enhanced Personal Information Management after Spring ‘22 (API version 54.0), use the PersonalInfo_EPIM field set or a field set that you add yourself. |
| classificationType | ClassificationType (enumeration of type string) | The type of classification method used in your org. If you enabled Enhanced Personal Information Management before Spring ‘22 (API version 54.0), use ComplianceCategory. If you enabled Enhanced Personal Information Management after Spring ‘22, use FieldSet.ComplianceCategory—FieldSet—The default value is ComplianceCategory. Available in API version 54.0 and later. |
| description | string | Required. The description of the rule. |
| enforcementType | EnforcementType (enumeration of type string) | Required. The type of rule. Possible values are:FieldRestrict—Field visibility rule. Only this value is valid.Restrict—Do not use.Scoping—Do not use. |
| masterLabel | string | Required. The name of the rule. |
| recordFilter | string | Required. The criteria that determine which fields are visible to the specified users. For example, the field can check if the logged-in user matches the Employee’s ID. |
| targetEntity | string | Required. The object for which you're creating the rule. Only the Employee and User objects are supported. |
| userCriteria | string | Required. The users that this rule applies to, such as all active users or users with a specified role or profile. |
| version | int | Required. The rule's version number. |

## Declarative Metadata Sample Definition

The following is an example of a FieldRestrictionRule component, which uses the ComplianceCategory classification type. The classification value is one of Salesforce's default compliance categorization values, but you can create a custom compliance categorization value to use instead.

```

```

The following is an example of a FieldRestrictionRule component, which uses the FieldSet classification type. The classification value is Salesforce's default field set for personal information, but you can create a field set to use instead.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<FieldRestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <classification>PII</classification>
    <classificationType>ComplianceCategory</classificationType>
    <description>Is Owner of Employee</description>
    <enforcementType>FieldRestrict</enforcementType>
    <masterLabel>Is Owner Field Restriction Rule</masterLabel>
    <recordFilter>OwnerId = $User.Id</recordFilter>
    <targetEntity>Employee</targetEntity>
    <userCriteria>$User.IsActive = true</userCriteria>
    <version>1</version>
</FieldRestrictionRule>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<FieldRestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <classification>PersonalInfo_EPIM</classification>
    <classificationType>FieldSet</classificationType>
    <description>Is Owner of Employee</description>
    <enforcementType>FieldRestrict</enforcementType>
    <masterLabel>Is Owner Field Restriction Rule</masterLabel>
    <recordFilter>OwnerId = $User.Id</recordFilter>
    <targetEntity>Employee</targetEntity>
    <userCriteria>$User.IsActive = true</userCriteria>
    <version>1</version>
</FieldRestrictionRule>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>FieldRestrictionRule</name>
    </types>
    <version>52.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
