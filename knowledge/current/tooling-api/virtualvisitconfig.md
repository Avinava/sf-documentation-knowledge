---
title: "VirtualVisitConfig"
domain: tooling-api
topic: virtualvisitconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.076Z
estimatedTokens: 1702
keywords: [VirtualVisitConfig, Represents, configuration, external, video, provider, which, relays, events, Salesforce, provider., API, version, 56.0, later., Important, Supported, SOAP, Calls, REST]
---

# VirtualVisitConfig

> Represents the configuration of an external video provider, which
         relays events from Salesforce to the provider. This object is available in API version
      56.0 and later.

# VirtualVisitConfig

Represents the configuration of an external video provider, which relays events from Salesforce to the provider. This object is available in API version 56.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

## Fields

To use the Virtual Visit feature you need the Video Call license add on

| Field | Details |
| --- | --- |
| ComprehendServiceType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of service used to convert speech into text or to analyze the converted speech text.Possible values are:ComprehendMedicalService—Transcribe MedicalComprehendService—Transcribe |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for the VirtualVisitConfig object.Required. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| ExperienceCloudSiteUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL of the Digital Experience site where the Video Call component is available to portal or guest users. |
| ExternalRoleIdentifier | TypestringPropertiesFilter, Nillable, SortDescriptionEnter the ID of the role that's used to allow users join a video call and to grant them temporary access to certain functions needed to participate in the call. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated VirtualVisitConfig in Metadata API. The full name can include a namespaceprefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the VirtualVisitConfig. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the VirtualVisitConfig. In the UI, this field is Virtual Visit Config. |
| MessagingRegion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the region in which the waiting room and messaging channel data is processed and stored. Available in API version 57.0 and later. |
| Metadata | TypeEventRelayConfigPropertiesCreate, Nillable, UpdateDescriptionThe VirtualVisitConfig’s metadata. |
| NamedCredentialId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe named credential record that's used to authenticate and authorize an account of the video call vendor.This field is a relationship field.Relationship NameNamedCredentialRelationship TypeLookupRefers ToNamedCredential |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| StorageBucketName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the storage bucket that stores the meeting transcript. |
| UsageType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe name of the Salesforce feature for which the video call configuration record is created.Possible values are:CHIME—ChimeINTELLIGENT_FORM_READER—Intelligent Form ReaderSENTIMENT_ANALYSIS—Sentiment Analysis |
| VideoCallApptTypeValue | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Default Appointment Type picklist values from the Service Appointment object that represent a video appointment type. Use semicolons to separate multiple values. |
| VideoControlRegion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the region through which API calls related to Video Calls are made. Available in API version 57.0 and later. |
| VisitRegion | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the region through which the Video Call video and audio data are processed.Possible values are:af-south-1—Africa (Cape Town)ap-east-1—Asia Pacific (Hong Kong)ap-northeast-1—Asia Pacific (Tokyo)ap-northeast-2—Asia Pacific (Seoul)ap-northeast-3—Asia Pacific (Osaka)ap-south-1—Asia Pacific (Mumbai)ap-southeast-1—Asia Pacific (Singapore)ap-southeast-2—Asia Pacific (Sydney)ca-central-1—Canada (Central)eu-central-1—Europe (Frankfurt)eu-north-1—Europe (Stockholm)eu-south-1—Europe (Milan)eu-west-1—Europe (Ireland)eu-west-2—Europe (London)eu-west-3—Europe (Paris)me-south-1—Middle East (Bahrain)sa-east-1—South America (São Paulo)us-east-1—US East (N. Virginia)us-east-2—US East (Ohio)us-west-1—US West (N. California)us-west-2—US West (Oregon) |
