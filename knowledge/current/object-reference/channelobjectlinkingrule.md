---
title: "ChannelObjectLinkingRule"
domain: object-reference
topic: channelobjectlinkingrule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.451Z
estimatedTokens: 897
keywords: [ChannelObjectLinkingRule, rule, linking, channel, interaction, Lead, Contact, API, version, 47.0, later, Calls]
---

# ChannelObjectLinkingRule

> Represents a rule for linking a channel interaction with an object (such as
      Lead or Contact). This object is available in API version 47.0 and later.

# ChannelObjectLinkingRule

Represents a rule for linking a channel interaction with an object (such as Lead or Contact). This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionForNoRecordFound | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAction to take when no matching records are found.Possible values are:CreateNewRecordAndLink—Create Record and Link (Recommended)PromptAgent—Prompt Agent |
| ActionForSingleRecordFound | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAction to take when one matching record is found.Possible values are:AutoLink—Auto-Link Record (Recommended)PromptAgent—Prompt Agent |
| ChannelType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of channel used for this rule.Possible values are:FacebookMessengerPhoneTextWeChatWhatsApp |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description for this linking rule. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| IsLinkedRecordOpenedAsSubTab | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to open the linked record as a subtab when the link is established. |
| IsRuleActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the rule is active. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language for this linking rule.Possible values are:ar—Arabicbg—Bulgariancs—Czechda—Danishde—Germanel—Greeken_GB—English (UK)en_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchhr—Croatianhu—Hungarianin—Indonesianit—Italianiw—Hebrewja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpl—Polishpt_BR—Portuguese (Brazil)pt_PT—Portuguese (European)ro—Romanianru—Russiansk—Slovaksl—Slovenesv—Swedishth—Thaitr—Turkishuk—Ukrainianvi—Vietnamesezh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique label name for this rule. |
| ObjectToLink | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of object to link to the channel interaction.Possible values are:Contact |
| RuleName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the rule as it appears in the UI. Maximum length is 80 characters. |
