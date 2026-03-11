---
title: "ParticipantRole"
domain: metadata-api
topic: participantrole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.189Z
keywords: [ParticipantRole, Note, Parent, Type, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ParticipantRole

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