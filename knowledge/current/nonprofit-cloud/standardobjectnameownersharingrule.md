---
title: "StandardObjectNameOwnerSharingRule"
domain: nonprofit-cloud
topic: standardobjectnameownersharingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.354Z
estimatedTokens: 787
keywords: [StandardObjectNameOwnerSharingRule, model, owner, sharing, rule, objects, associated, standard, represent, users, Calls, Special, Access, Rules]
---

# StandardObjectNameOwnerSharingRule

> StandardObjectNameOwnerSharingRule is the model
			for all owner sharing rule objects associated with standard objects. These objects
			represent a rule for sharing a standard object with users other than the
		owner.

# StandardObjectNameOwnerSharingRule

StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.

The object name is variable and uses StandardObjectNameOwnerSharingRule syntax. For example, ChannelProgramOwnerSharingRule is a rule for sharing a channel program with users other than the channel program owner. We list the available associated owner sharing rule objects at the end of this topic. For specific version information, see the standard object documentation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=nonprofit_cloud)

#### Note

To enable access to this object, contact Salesforce customer support. But we recommend that you use Metadata API to programmatically update owner sharing rules instead because it triggers automatic sharing rule recalculation. The [SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm) Metadata API type is enabled for all orgs.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

For specific special access rules, if any, see the documentation for the standard object. For example, for ChannelProgramOwnerSharingRule, see the special access rules for ChannelProgram.

## Fields

| Field Name | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDetermines the level of access users have to records. Values are:Read (read only)Edit (read/write) |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the sharing rule. Maximum length is 1000 characters. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package, and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance can slow while Salesforce generates one for each record. |
| GroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the source group. Records that are owned by users in the source group trigger the rule to give access. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionLabel of the sharing rule as it appears in the UI. Maximum length is 80 characters. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the user or group that you are granting access to. |
