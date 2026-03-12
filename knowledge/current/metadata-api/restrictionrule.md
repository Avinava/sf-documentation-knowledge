---
title: "RestrictionRule"
domain: metadata-api
topic: restrictionrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.475Z
estimatedTokens: 730
keywords: [RestrictionRule, Represents, restriction, rule, scoping, rule., enforcementType, set, Restrict, controls, access, specified, users, designated, records., Scoping, default, records, without, restricting]
---

# RestrictionRule

> Represents a restriction rule or a scoping rule. A
      restriction rule has enforcementType set to Restrict and controls the access that specified users have to designated records.
      A scoping rule has enforcementType set to Scoping and controls the default records that your users see without restricting
      access. This type extends the Metadata metadata type and inherits its
                        fullName field.

# RestrictionRule

Represents a restriction rule or a scoping rule. A restriction rule has enforcementType set to Restrict and controls the access that specified users have to designated records. A scoping rule has enforcementType set to Scoping and controls the default records that your users see without restricting access. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

RestrictionRule components have the suffix .rule and are stored in the restrictionRules folder.

## Version

RestrictionRule components are available in API version 52.0 and later.

## Special Access Rules

Only users with the View Restriction and Scoping Rules permission can view restriction rules and scoping rules via the API. Only users with the Manage Sharing permission can view, create, update, and delete restriction rules and scoping rules.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Indicates whether the rule is active (true) or not (false). The default value is false. |
| description | string | Required. The description of the rule. |
| enforcementType | EnforcementType (enumeration of type string) | Required. The type of rule. Valid values are:FieldRestrict—Don’t use.Restrict—Restriction rule.Scoping—Scoping rule. |
| masterLabel | string | Required. The name of the rule. |
| recordFilter | string | Required. The criteria that determine which records are accessible via the rule. |
| targetEntity | string | Required. The object for which you're creating the rule. We recommend that you don’t edit this field after the rule is created.If enforcementType is set to Restrict, custom objects, external objects, and these objects are supported:ContractEventTaskTimeSheetTimeSheetEntryIf enforcementType is set to Scoping, custom objects and these objects are supported:AccountCaseContactEventLeadOpportunityTask |
| userCriteria | string | Required. The users that this rule applies to, such as all active users or users with a specified role or profile. |
| version | int | Required. The rule's version number. |

## Declarative Metadata Sample Definition

The following is an example of a RestrictionRule component representing a restriction rule.

```

```

The following is an example of a RestrictionRule component representing a scoping rule.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<RestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <description>Allows users with a specific profile to see only tasks that they own.</description>
    <enforcementType>Restrict</enforcementType>
    <masterLabel>Tasks You Own</masterLabel>
    <recordFilter>OwnerId = $User.Id</recordFilter>
    <targetEntity>Task</targetEntity>
    <userCriteria>$User.ProfileId = '00exxxxxxxxxxxx'</userCriteria>
    <version>1</version>
</RestrictionRule>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<RestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <description>View tasks contacts from Department A.</description>
    <enforcementType>Scoping</enforcementType>
    <masterLabel>SR for Department A contacts</masterLabel>
    <recordFilter>Department=$User.Department</recordFilter>
    <targetEntity>Contact</targetEntity>
    <userCriteria>$User.UserRoleId = '00Exxxxxxxxxxxx'</userCriteria>
    <version>1</version>
</RestrictionRule>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>RestrictionRule</name>
    </types>
    <version>55.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
