---
title: "SurveyVersionAddlInfo"
domain: object-reference
topic: surveyversionaddlinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.612Z
estimatedTokens: 979
keywords: [SurveyVersionAddlInfo, additional, survey, version, settings, API, 49.0, later, Calls]
---

# SurveyVersionAddlInfo

> Represents additional information about a survey version. This information
      defines the default settings of a survey version. This object is available in API version
    49.0 and later.

# SurveyVersionAddlInfo

Represents additional information about a survey version. This information defines the default settings of a survey version. This object is available in API version 49.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| EmailSender | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe organization-wide email address used to send a survey invitation. |
| EmailTemplateId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the email template that's used to send an automated survey invitation. |
| EngagementContextMetadata | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe custom metadata created to get the engagement context from the participants. |
| InvitationSharingRole | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the users that share edit access to a survey invitation.Possible values are:InvitationRecordCreator— Owner of the record that's associated with a survey invitation.SurveyOwner |
| Language | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionLanguage used to create the survey.Possible values are:af—Afrikaansar—Arabicar_AE—Arabic (United Arab Emirates)ar_BH—Arabic (Bahrain)ar_DZ—Arabic (Algeria)ar_EG—Arabic (Egypt)ar_IQ—Arabic (Iraq)ar_JO—Arabic (Jordan)ar_KW—Arabic (Kuwait)ar_LB—Arabic (Lebanon)ar_LY—Arabic (Libya)ar_MA—Arabic (Morocco)ar_OM—Arabic (Oman)ar_QA—Arabic (Qatar)ar_SA—Arabic (Saudi Arabia)ar_SD—Arabic (Sudan)ar_SY—Arabic (Syria)ar_TN—Arabic (Tunisia)ar_YE—Arabic (Yemen)bg—Bulgarianbn—Bengalibs—Bosnianca—Catalancs—Czechcy—Welshda—Danishde—Germande_AT—German (Austria)de_BE—German (Belgium)de_CH—German (Switzerland)de_LU—German (Luxembourg)el—Greeken_AU—English (Australian)en_CA—English (Canadian)en_GB—English (UK)en_HK—English (Hong Kong)en_IE—English (Ireland)en_IN—English (Indian)en_MY—English (Malaysian)en_NZ—English (New Zealand)en_PH—English (Philippines)en_SG—English (Singapore)en_US—Englishen_ZA—English (South Africa)es—Spanishes_AR—Spanish (Argentina)es_BO—Spanish (Bolivia)es_CL—Spanish (Chile)es_CO—Spanish (Colombia)es_CR—Spanish (Costa Rica)es_DO—Spanish (Dominican Republic)es_EC—Spanish (Ecuador)es_GT—Spanish (Guatemala)es_HN—Spanish (Honduras)es_MX—Spanish (Mexico)es_NI—Spanish (Nicaragua)es_PA—Spanish (Panama)es_PE—Spanish (Peru)es_PR—Spanish (Puerto Rico)es_PY—Spanish (Paraguay)es_SV—Spanish (El Salvador)es_US—Spanish (United States)es_UY—Spanish (Uruguay)es_VE—Spanish (Venezuela)et—Estonianeu—Basquefa—Farsifi—Finnishfr—Frenchfr_BE—French (Belgium)fr_CA—French (Canadian)fr_CH—French (Switzerland)fr_LU—French (Luxembourg)ga—Irishgu—Gujaratihi—Hindihr—Croatianhu—Hungarianhy—Armenianin—Indonesianis—Icelandicit—Italianit_CH—Italian (Switzerland)iw—Hebrewja—Japaneseka—Georgiankn—Kannadako—Koreanlb—Luxembourgishlt—Lithuanianlv—Latvianmi—Te reomk—Macedonianml—Malayalammr—Marathims—Malaymt—Maltesemy—Burmesenl_BE—Dutch (Belgium)nl_NL—Dutchno—Norwegianpl—Polishpt_BR—Portuguese (Brazil)pt_PT—Portuguese (European)rm—Romanshro—Romanianro_MD—Romanian (Moldova)ru—Russiansh—Serbian (Latin)sh_ME—Montenegrinsk—Slovaksl—Slovenesq—Albaniansr—Serbian (Cyrillic)sv—Swedishsw—Swahilita—Tamilte—Teluguth—Thaitl—Tagalogtr—Turkishuk—Ukrainianur—Urduvi—Vietnamesexh—Xhosazh_CN—Chinese (Simplified)zh_HK—Chinese (Hong Kong)zh_SG—Chinese (Singapore)zh_TW—Chinese (Traditional)zu—Zulu |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the record. |
| SurveyQuestionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the survey question embedded in the email template used to send automated survey invitations. |
| SurveyVersionId | TypereferencePropertiesFilter, Group, SortDescriptionID of the survey version. This field is unique within your organization |
