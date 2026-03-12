---
title: "SurveyResponse"
domain: salesforce-feedback-management-dev-guide
topic: surveyresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.691Z
estimatedTokens: 1561
keywords: [SurveyResponse, participant’s, survey, status, location, completed, Calls, Associated, Objects]
---

# SurveyResponse

> Represents information about a participant’s response to a survey,
			such as the status of the response, the participant’s location, and when the survey was
			completed.

# SurveyResponse

Represents information about a participant’s response to a survey, such as the status of the response, the participant’s location, and when the survey was completed.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_feedback_management_dev_guide)

#### Note

You can’t define custom fields for the SurveyResponse object using the Object Manager.

## Fields

| Field Name | Details |
| --- | --- |
| CompletionDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the participant completed the survey. |
| DataMapperExecutionStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionStatus of all the survey data maps after a response is received. This field is available in API v49.0 and later, with Feedback Management - Starter and Feedback Management - Growth licenses.Possible values are:PendingInProgressSuccessError |
| InterviewGuid | TypestringPropertiesFilter, Group, idLookup, NillableDescriptionAn automatically-generated, unique ID for a saved survey response. |
| InterviewId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the FlowInterview object that’s associated with this response. |
| InvitationId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the SurveyInvitation object that’s associated with this response. |
| IpAddress | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the device the participant used to take the survey. |
| Language | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe language that the participant used to complete the survey.Possible values are:af—Afrikaansar—Arabicar_AE—Arabic (United Arab Emirates)ar_BH—Arabic (Bahrain)ar_DZ—Arabic (Algeria)ar_EG—Arabic (Egypt)ar_IQ—Arabic (Iraq)ar_JO—Arabic (Jordan)ar_KW—Arabic (Kuwait)ar_LB—Arabic (Lebanon)ar_LY—Arabic (Libya)ar_MA—Arabic (Morocco)ar_OM—Arabic (Oman)ar_QA—Arabic (Qatar)ar_SA—Arabic (Saudi Arabia)ar_SD—Arabic (Sudan)ar_SY—Arabic (Syria)ar_TN—Arabic (Tunisia)ar_YE—Arabic (Yemen)bg—Bulgarianbn—Bengalibs—Bosnianca—Catalancs—Czechcy—Welshda—Danishde—Germande_AT—German (Austria)de_BE—German (Belgium)de_CH—German (Switzerland)de_LU—German (Luxembourg)el—Greeken_AU—English (Australian)en_CA—English (Canadian)en_GB—English (UK)en_HK—English (Hong Kong)en_IE—English (Ireland)en_IN—English (Indian)en_MY—English (Malaysian)en_NZ—English (New Zealand)en_PH—English (Philippines)en_SG—English (Singapore)en_US—Englishen_ZA—English (South Africa)es—Spanishes_AR—Spanish (Argentina)es_BO—Spanish (Bolivia)es_CL—Spanish (Chile)es_CO—Spanish (Colombia)es_CR—Spanish (Costa Rica)es_DO—Spanish (Dominican Republic)es_EC—Spanish (Ecuador)es_GT—Spanish (Guatemala)es_HN—Spanish (Honduras)es_MX—Spanish (Mexico)es_NI—Spanish (Nicaragua)es_PA—Spanish (Panama)es_PE—Spanish (Peru)es_PR—Spanish (Puerto Rico)es_PY—Spanish (Paraguay)es_SV—Spanish (El Salvador)es_US—Spanish (United States)es_UY—Spanish (Uruguay)es_VE—Spanish (Venezuela)et—Estonianeu—Basquefa—Farsifi—Finnishfr—Frenchfr_BE—French (Belgium)fr_CA—French (Canadian)fr_CH—French (Switzerland)fr_LU—French (Luxembourg)ga—Irishgu—Gujaratihi—Hindihr—Croatianhu—Hungarianhy—Armenianin—Indonesianis—Icelandicit—Italianit_CH—Italian (Switzerland)iw—Hebrewja—Japaneseka—Georgiankn—Kannadako—Koreanlb—Luxembourgishlt—Lithuanianlv—Latvianmi—Te reomk—Macedonianml—Malayalammr—Marathims—Malaymt—Maltesemy—Burmesenl_BE—Dutch (Belgium)nl_NL—Dutchno—Norwegianpl—Polishpt_BR—Portuguese (Brazil)pt_PT—Portuguese (European)rm—Romanshro—Romanianro_MD—Romanian (Moldova)ru—Russiansh—Serbian (Latin)sh_ME—Montenegrinsk—Slovaksl—Slovenesq—Albaniansr—Serbian (Cyrillic)sv—Swedishsw—Swahilita—Tamilte—Teluguth—Thaitl—Tagalogtr—Turkishuk—Ukrainianur—Urduvi—Vietnamesexh—Xhosazh_CN—Chinese (Simplified)zh_HK—Chinese (Hong Kong)zh_SG—Chinese (Singapore)zh_TW—Chinese (Traditional)zu—Zulu |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that another Salesforce object last referenced this SurveyResponse object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that someone last viewed this SurveyResponse object. |
| Latitude | TypedoublePropertiesFilter, Nillable, SortDescriptionThe latitude of the participant’s location. |
| Location | TypelocationPropertiesNillableDescriptionThe latitude and longitude coordinates of the participant’s location. |
| Longitude | TypedoublePropertiesFilter, Nillable, SortDescriptionThe longitude of the participant’s location. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the participant. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the survey. Possible values include:NotStarted — The participant hasn't opened the survey.Started — The participant has opened the survey.Paused — The participant has paused the survey. Paused isn't available for invitations in which either OptionsAllowParticipantAccessTheirResponse or OptionsCollectAnonymousResponse is true.PartiallyCompleted — The participant has partially completed the survey. Available in API version 63.0 and later.Completed — The participant has completed the survey. |
| SubmitterId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Salesforce user, contact, or lead who completed the survey.Relationship NameSubmitterRelationship TypeLookupRefers ToContact, Lead, User |
| SurveyId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the survey that the participant completed. |
| SurveyVersionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the version of the survey that the participant completed. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

SurveyResponseChangeEvent

Change events are available for the object.
