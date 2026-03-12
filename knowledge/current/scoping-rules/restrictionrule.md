---
title: "RestrictionRule"
domain: scoping-rules
topic: restrictionrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.261Z
estimatedTokens: 690
keywords: [RestrictionRule, restriction, rule, scoping, enforcementType, Restrict, access, users, designated, records, restricting, extends, Metadata, inherits, fullName, EnforcementType, SOAP, API, Calls, REST]
---

# RestrictionRule

> Represents a restriction rule or a scoping rule. A restriction rule has
            EnforcementType set to Restrict and controls the access that specified users have to designated
         records. A scoping rule has EnforcementType set to Scoping and controls the default records that your users
         see without restricting access.

# RestrictionRule

Represents a restriction rule or a scoping rule. A restriction rule has EnforcementType set to Restrict and controls the access that specified users have to designated records. A scoping rule has EnforcementType set to Scoping and controls the default records that your users see without restricting access.

This object is available in API version 52.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Only users with the View Restriction and Scoping Rules permission can view restriction rules and scoping rules via the API. Only users with the Manage Sharing permission can view, create, update, and delete restriction rules and scoping rules.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionRequired. The description of the rule. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for the RestrictionRule object.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EnforcementType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The type of rule.Possible values are:FieldRestrict—Don’t use.Restrict—Restriction rule.Scoping—Scoping rule. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionRequired. The full name of the associated RestrictionRule in Metadata API. The full name can include a namespaceprefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the rule is active (true) or not (false). The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the rule. The value for this field is the language value of the org. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the rule. |
| Metadata | Typemns:RestrictionRulePropertiesCreate, Nillable, UpdateDescriptionThe restriction rule’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| RecordFilter | TypetextareaPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The criteria that determine which records are accessible via the rule. |
| TargetEntity | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The object for which you're creating the rule. We recommend that you don’t edit this field after the rule is created.If EnforcementType is set to Restrict, custom objects, external objects, and these objects are supported:ContractEventQuoteTaskTimeSheetTimeSheetEntryIf EnforcementType is set to Scoping, custom objects and these objects are supported:AccountCaseContactEventLeadOpportunityTask |
| UserCriteria | TypetextareaPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The users that this rule applies to, such as all active users or users with a specified role or profile. |
| Version | TypeintPropertiesFilter, Group, SortDescriptionRequired. The rule's version number. |

## Usage

The following is an example of a RestrictionRule representing a restriction rule.

```

```

The following is an example of a RestrictionRule representing a scoping rule.

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

```
{
    "FullName":"restriction_rule_tasks_you_own",
    "Metadata": {
        "active":true,
        "description":"Allows users of a specific profile to see only tasks that they own.",
        "enforcementType":"Restrict",
        "masterLabel":"Tasks You Own",
        "recordFilter":"OwnerId = $User.Id",
        "targetEntity":"Task",
        "userCriteria":"$User.ProfileId = '00exxxxxxxxxxxx'",
        "version":1
    }
}
```

```
{
    "FullName":"Department A contact scoping rule",
    "Metadata": {
         "active":true,
         "description":"View contacts from Department A.",
         "enforcementType":"Scoping",
         "masterLabel":"SR for Department A",
         "recordFilter":"Department=$User.Department",
         "targetEntity":"Contact",
         "userCriteria":"$User.UserRoleId = '00Exxxxxxxxxxxx'",
         "version":1
    }
}
```
