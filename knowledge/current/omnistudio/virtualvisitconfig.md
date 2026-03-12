---
title: "VirtualVisitConfig"
domain: omnistudio
topic: virtualvisitconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:54.416Z
estimatedTokens: 1476
keywords: [VirtualVisitConfig, Represents, configuration, external, video, provider., API, version, 54.0, later., Supported, Calls, Fields]
---

# VirtualVisitConfig

> Represents the configuration of an external video provider. This object
      is available in API version 54.0 and later.

# VirtualVisitConfig

Represents the configuration of an external video provider. This object is available in API version 54.0 and later.

## Supported Calls

create() , delete() , describeSObjects() , query() , retrieve() , update() , upsert()

## Fields

| Field | Details |
| --- | --- |
| ComprehendServiceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe name of the external service that’s going to be used to analyze the transcribed logs and get insights.Possible values are:ComprehendMedicalService —Transcribe MedicalComprehendService —Transcribe |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| ExperienceCloudSiteUrl | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the Experience Cloud site where the Video Call component is available to portal or guest users. |
| ExternalRoleIdentifier | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe ID of the role that's used to allow users to join a video call and to grant them temporary access to certain functions needed to participate in the call.Available in API version 56.0 and later. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language in which translation of record labels is supported.Possible values are:da —Danishde —Germanen_US —Englishes —Spanishes_MX —Spanish (Mexico)fi —Finnishfr —Frenchit —Italianja —Japaneseko —Koreannl_NL —Dutchno —Norwegianpt_BR —Portuguese (Brazil)ru —Russiansv —Swedishth —Thaizh_CN —Chinese (Simplified)zh_TW —Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA user-friendly name for the VirtualVisitConfig. |
| MessagingRegion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the region in which the waiting room and messaging channel data are processed and stored. Available in version 57.0 and later. |
| NamedCredentialId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe named credential record that's used to authenticate and authorize an account of the video call vendor.This field is a relationship field.Relationship NameNamedCredentialRelationship TypeLookupRefers ToNamedCredential |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There’s an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that aren’t Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There’s no namespace prefix for all other objects. |
| StorageBucketName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the storage bucket that stores the meeting transcript. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe name of the Salesforce feature for which the video call configuration record is created. This field is unique within your organization.Possible values are:CHIME —ChimeENTITY_DETECTION —Entity DetectionINTELLIGENT_FORM_READER —Intelligent Form ReaderKEY_PHRASE_EXTRACTION —Key Phrase ExtractionSENTIMENT_ANALYSIS —Sentiment Analysis |
| VideoCallApptTypeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Default Appointment Type picklist values from the Service Appointment object that represent a video appointment type. Use semicolons to separate multiple values.Available in API version 55.0 and later. |
| VideoControlRegion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the region through which API calls related to Video Calls are made.Available in API version 57.0 and later. |
| VisitRegion | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe region where the Video Call video and audio data are processed.Possible values are:af-south-1 —Africa (Cape Town)ap-east-1 —Asia Pacific (Hong Kong)ap-northeast-1 —Asia Pacific (Tokyo)ap-northeast-2 —Asia Pacific (Seoul)ap-northeast-3 —Asia Pacific (Osaka)ap-south-1 —Asia Pacific (Mumbai)ap-southeast-1 —Asia Pacific (Singapore)ap-southeast-2 —Asia Pacific (Sydney)ca-central-1 —Canada (Central)eu-central-1 —Europe (Frankfurt)eu-north-1 —Europe (Stockholm)eu-south-1 —Europe (Milan)eu-west-1 —Europe (Ireland)eu-west-2 —Europe (London)eu-west-3 —Europe (Paris)me-south-1 —Middle East (Bahrain)sa-east-1 —South America (São Paulo)us-east-1 —US East (N. Virginia)us-east-2 —US East (Ohio)us-west-1 —US West (N. California)us-west-2 —US West (Oregon) |
