---
title: "ParticipantRole"
domain: metadata-api
topic: participantrole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.412Z
estimatedTokens: 601
keywords: [ParticipantRole, Represents, details, such, name, associated, default, access, level, role, participant, context, parent, record., Note, Parent, File, Suffix, Directory, Location]
---

# ParticipantRole

> Represents details, such as the name and associated default access level, for a role
    that a participant can have in the context of a parent record.

# ParticipantRole

Represents details, such as the name and associated default access level, for a role that a participant can have in the context of a parent record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ParticipantRole components have the suffix .participantRole and are stored in the participantRoles folder.

## Version

ParticipantRole components are available in API version 50.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| defaultAccessLevel | Field TypepicklistDescriptionRequired. The default sharing access granted to the participant role.Valid values are:Edit—Read/WriteNoneRead—Read Only |
| isActive | Field TypebooleanDescriptionIndicates whether the participant role is activated. |
| masterLabel | Field TypestringDescriptionRequired. The name for the participant role. |
| parentObject | Field TypestringDescriptionRequired. The parent object for the participant role.Valid values are:AccountBudgetAvailable in API version 59.0 and later.IndividualApplicationAvailable in API version 59.0 and later.InteractionAvailable in API version 52.0 and later.InteractionSummaryAvailable in API version 51.0 and later.FinancialDealAvailable in API version 52.0 and later.FundingAwardAvailable in API version 59.0 and later.FundingOpportunityOpportunityTeamAvailable in API version 58.0 and later.Custom objects |

## Declarative Metadata Sample Definition

The following is an example of a ParticipantRole component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ParticipantRole xmlns="http://soap.sforce.com/2006/04/metadata">
    <defaultAccessLevel>Read</defaultAccessLevel>
    <isActive>true</isActive>
    <masterLabel>Advisor</masterLabel>
    <parentObject>Account</parentObject>
</ParticipantRole>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ParticipantRole</name>
    </types>
    <version>50.0</version>
</Package>
```
