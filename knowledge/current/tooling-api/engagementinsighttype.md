---
title: "EngagementInsightType"
domain: tooling-api
topic: engagementinsighttype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:40:16.777Z
estimatedTokens: 944
keywords: [EngagementInsightType, configuration, engagement, insight, voice, video, call, insights, API, 65.0]
---

> Represents the configuration for engagement insight types for voice and video
         call insights. This object is available in API version 65.0 and later.

# EngagementInsightType

Represents the configuration for engagement insight types for voice and video call insights. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivatedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRequired. The timestamp when the insight type was activated. |
| AdditionalConfig | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionRequired. The additional configuration information specific to the insight type. For example, timing configurations for time-based insights and prompt-based configurations for generative insights. |
| Category | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The category of the insight type.Possible values are:CUSTOM—Custom insights are created by the admin.SYSTEM—System insights are provided out-of-the-box by Salesforce.The default value is CUSTOM. |
| ChannelType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The engagement channel used to generate the insight.Possible values are:EmailsVideoCallsVoiceCallsThe default value is VoiceCalls. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the insight type. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for the EngagementInsightType object. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID generated for each insight type. |
| InsightModel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The computational model that the user selects to generate the insight.Possible values are:GENERATIVEKEYWORDSITUATIONALTIME_BASEDThe default value is KEYWORD. |
| InsightName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The name of the insight. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The language used in the insight type. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the insight type. |
| SpeakerType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies if the participant is internal (internal rep), external (customer), or either (not sure). It indicates the 'Said by' field in the UI.Possible values are:EITHEREXTERNALINTERNALThe default value is INTERNAL. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the insight type.Possible values are:ENABLEDUSER_DISABLEDThe default value is ENABLED. |
| SupportedLanguageList | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe list of languages supported for the insight type. |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe industry where the insight type is applicable.Possible values are:SALESSALES_SERVICESERVICEThe default value is SALES. |
