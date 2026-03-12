---
title: "DataKitDeploymentLog"
domain: object-reference
topic: datakitdeploymentlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.054Z
estimatedTokens: 1356
keywords: [DataKitDeploymentLog, log, data, kit, component, deployment, API, version, 61.0, later, Calls, Special, Access, Rules, Usage]
---

# DataKitDeploymentLog

> Represents the log details of a data kit component deployment. This
			object is available in API version 61.0 or later.

# DataKitDeploymentLog

Represents the log details of a data kit component deployment. This object is available in API version 61.0 or later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Users that have access to Data Cloud.

## Fields

| Field | Details |
| --- | --- |
| BundleName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the data stream bundle if a data stream is deployed from a data kit. |
| ComponentName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the component that’s deployed from a data kit. |
| ComponentTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the data kit template from which the component is deployed. This field is a polymorphic relationship field.Relationship NameComponentTemplateRefers ToDataSourceBundle |
| ComponentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the component for which the deployment is tracked in the log details.Possible values are:MktCalculatedInsightMktDataLakeObjectMktDataModelObjectMktDataStreamMktDataTransformPossible values available in API version 63.0 and later are:ActivationTargetDataActionDataActionTargetDataGraphDataSemanticSearchEngagementSignalExtDataShareIdentityResolutionMarketSegmentMarketSegmentActivationMktDataConnectionMktMLModelPersonalizationObjectivePersonalizationRecommenderPossible values available in API version 64.0 and later are:IrRelatedListEnrichmentMktCalculatedInsightMktDataLakeObjectMktDataStreamMktDataTransformPersonalizationPointPersonalizationSchemaPossible values available in API version 66.0 and later are:CopyFieldEnrichmentSemanticModel |
| DataKitName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the data kit being deployed. |
| DataPackageKitDefinition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionID of the data kit being deployed. Available in API version 63.0 and later.Possible values are:1dk.Collections1dk.SalesNextGenForecastingDatakit1dk.Test_Fbdk1dk.sf_mktg_ae__Marketing_Account_Engagement_CRM_Data |
| DataSpaceName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the data space the components are deployed to. |
| DeployJob | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe deployment job ID. |
| DeploymentAction | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDeployment action of the data kit components.Possible values are:DeployUndeploy |
| DeploymentError | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionContains the error details if the data kit deployment fails. |
| DeploymentStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDeployment status of the data kit components.Possible values are:FailedStartedSuccessful |
| FileBasedComponentTemplate | TypestringPropertiesCreate, Filter, Sort, UpdateDescriptionID of the file-based component template that corresponds to the deployment log entry. Available in API version 63.0 and later. |
| FlowInterviewIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier of the flow interview if the deployment was triggered using a flow. |
| JobIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier of the data kit component deployment job. Available in API version 66.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed the deployment log file. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this deployment log. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the deployment log. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user that owns the deployment.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PublisherOrgComponentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the component in the publisher org.This field is a polymorphic relationship field.Relationship NamePublisherOrgComponentRefers ToMktCalculatedInsight, MktDataTransform |
| SubscriberOrgComponentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the component in the subscriber org in which the components of a data kit are deployed.This field is a polymorphic relationship field.Relationship NameSubscriberOrgComponentRefers ToActivationTarget, DataGraph, DataStream, ExtDataShare, IdentityResolution, MarketSegment, MarketSegmentActivation, MktCalculatedInsight, MktDataTransform |
| TemplateVersion | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe version of the template from which the deployment was done. |

## Usage

Use the DataKitDeploymentLog object to track the deployment of a data kit component.
