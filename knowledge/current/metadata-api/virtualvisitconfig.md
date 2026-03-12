---
title: "VirtualVisitConfig"
domain: metadata-api
topic: virtualvisitconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.572Z
estimatedTokens: 1491
keywords: [VirtualVisitConfig, Represents, external, video, provider, configuration, which, relays, events, Salesforce, provider., Important, Parent, File, Suffix, Directory, Location, Version, Special, Access]
---

# VirtualVisitConfig

> Represents an external video provider configuration, which
			relays events from Salesforce to the provider.

# VirtualVisitConfig

Represents an external video provider configuration, which relays events from Salesforce to the provider.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

VirtualVisitConfig components have the suffix .virtualVisitConfig and are stored in the VirtualVisitConfigs folder.

## Version

VirtualVisitConfig components are available in API version 54.0 and later.

## Special Access Rules

Access to this metadata type requires at least one of these preferences:

-   Video Calls: Org Pref (VideoVisits) Org preference
-   Industries Einstein: Intelligent Form Reader (EinsteinDocReader)
-   Industries Einstein: Sentiment Insights Account (IESentimentAnalysis)
-   Natural Language Processing: Key phrase extraction and entity detection (NLPServiceEnabled) Org Preference and the NLP: Key phrase extraction (KeyPhrasePrefEnabled) Org Preference
-   Natural Language Processing (NLPServicePrefEnabled) Org Preference

## Fields

| Field Name | Description |
| --- | --- |
| comprehendServiceType | Field TypeVirtualVisitComprehendServiceType (enumeration of type string)DescriptionSpecifies the type of service used to convert speech into text or to analyze the converted speech text.Valid values are:ComprehendMedicalServiceComprehendService |
| developerName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API. |
| experienceCloudSiteUrl | Field TypestringDescriptionThe URL of the Digital Experience site where the Video Call component is available to portal or guest users. |
| externalMsgServiceIdentifier | Field TypestringDescriptionFor internal use only. |
| externalRoleIdentifier | Field TypestringDescriptionThe ID of the role that's used to allow users to join a video call and to grant them temporary access to certain functions needed to participate in the call. |
| externalUserIdentifier | Field TypestringDescriptionFor internal use only. |
| fullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the VirtualVisitConfig type in Metadata API. The full name can include a namespace prefix. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t currently impact the behavior of the metadata type. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for VirtualVisitConfig, which is defined when the VirtualVisitConfig is created. |
| messagingRegion | Field TypestringDescriptionThe region where the waiting room and messaging channel data is processed and stored. Available in API version 57.0 and later. |
| namedCredential | Field TypestringDescriptionThe named credential record used to authenticate and authorize a video call vendor’s account. |
| storageBucketName | Field TypestringDescriptionThe name of the storage bucket that stores the meeting transcript. |
| usageType | Field TypeVirtualVisitUsageType (enumeration of type string)DescriptionThe name of the Salesforce feature for which the video call configuration record is created.Valid values are:CHIMEENTITY_DETECTIONINTELLIGENT_FORM_READERKEY_PHRASE_EXTRACTIONSENTIMENT_ANALYSIS |
| videoCallApptTypeValue | Field TypestringDescriptionThe default Appointment Type picklist values from the Service Appointment object that represent a video appointment type. Use semicolons to separate multiple values. |
| videoControlRegion | Field TypestringDescriptionThe region where API calls related to Video Calls are made. Available in API version 57.0 and later. |
| visitRegion | Field TypeVirtualVisitVisitRegion (enumeration of type string)DescriptionThe region where the Video Call audio and video data is processed.Valid values are:af-south-1ap-east-1ap-northeast-1ap-northeast-2ap-northeast-3ap-south-1ap-southeast-1ap-southeast-2ca-central-1eu-central-1eu-north-1eu-south-1eu-west-1eu-west-2eu-west-3me-south-1sa-east-1us-east-1us-east-2us-west-1us-west-2 |

## Declarative Metadata Sample Definition

This is an example of a VirtualVisitConfig component.

```

```

This is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
 <VirtualVisitConfig xmlns="http://soap.sforce.com/2006/04/metadata">
     <usageType>CHIME</usageType>
     <visitRegion>us-east-1</visitRegion>
     <masterLabel>vvconfig1</masterLabel>
     <experienceCloudSiteUrl>videocall_c@testcloudurl.com</experienceCloudSiteUrl>
     <namedCredential>SampleNamedCredential</namedCredential>
     <comprehendServiceType>ComprehendService</comprehendServiceType>
     <storageBucketName>comprehendbucket</storageBucketName>
     <isProtected>false</isProtected>
 </VirtualVisitConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
 <Package xmlns="http://soap.sforce.com/2006/04/metadata">
     <namespacePrefix>[namespacePrefix]</namespacePrefix>
     <fullName>deployPackage</fullName>
     <types>
         <members>*</members>
         <name>VirtualVisitConfig</name>
     </types>
     <types>
         <members>*</members>
         <name>NamedCredential</name>
     </types>
     <version>55.0</version>
 </Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
