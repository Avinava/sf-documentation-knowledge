---
title: "AccountRelationshipShareRule"
domain: metadata-api
topic: accountrelationshipsharerule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.521Z
estimatedTokens: 697
keywords: [AccountRelationshipShareRule, rule, determines, which, records, shared, how, they’re, account, relationship, shares, level, access, granted, records., Important, File, Suffix, Directory, Location]
---

# AccountRelationshipShareRule

> The rule that determines which object
      records are shared, how they’re shared, the account relationship type that shares the records,
      and the level of access granted to the records.

# AccountRelationshipShareRule

The rule that determines which object records are shared, how they’re shared, the account relationship type that shares the records, and the level of access granted to the records.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This type extends the [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.") metadata type and inherits its content and fullName fields.

## File Suffix and Directory Location

AccountRelationshipShareRule components have the suffix .accountRelationshipShareRule and are stored in the .accountRelationshipShareRules folder.

## Version

AccountRelationshipShareRule components are available in API version 45.0 and later.

## Special Access Rules

Access to the AccountRelationshipShareRule type requires orgs to enable the Account Relationships permission. The Manage Experiences permission is required for user access.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| accessLevel | string | Type of access granted by the share rule. Valid values are:ReadEdit |
| accountToCriteriaField | string | Criteria that must be met for the data to be shared. Valid values include any custom or standard lookup to Account or User on top-level objects.To get the full list for your org, do a Describe on the ARSR entity. |
| description | string | A meaningful explanation of the sharing rule. |
| entityType | string | The type of data shared by this share rule. Valid values are:AccountCampaignCaseContactCustom ObjectLeadOpportunityOrderQuoteAPI names of top-level custom objects in the org can also be used, for example, CustomObject__c. |
| masterLabel | string | The label assigned to the sharing rule to identify it. |
| staticFormulaCriteria | string | A way to further filter what data gets shared. This string must be a deterministic formula, and spanning isn’t allowed. |
| type | string | Match the type of an account relationship for data to be shared according to the accountToCriteriaField and the staticFormulaCriteria fields. |

## Declarative Metadata Sample Definition

The following is an example of an AccountRelationshipShareRule component.

```

```

The following is an example package.xml that references the previous definition.

```

```

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AccountRelationshipShareRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <accessLevel>Edit</accessLevel>
    <accountToCriteriaField>Account.OwnerId</accountToCriteriaField>
    <description>TestDescription</description>
    <entityType>Account</entityType>
    <masterLabel>TestName</masterLabel>
    <staticFormulaCriteria>YearStarted = &quot;1980&quot;</staticFormulaCriteria>
    <type>Dealer</type>
</AccountRelationshipShareRule>
```

```
<Package>
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>ArsrDevName</members>
        <name>AccountRelationshipShareRule</name>
    </types>
<version>45.0</version>
</Package>
```

## Related Topics

- MetadataWithContent (atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm)
