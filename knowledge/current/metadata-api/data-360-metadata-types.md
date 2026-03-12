---
title: "Data 360 Metadata Types"
domain: metadata-api
topic: data-360-metadata-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:38.413Z
estimatedTokens: 1997
keywords: [Data, 360, Metadata, Types, Check, metadata, types, used, development, 360.]
---

# Data 360 Metadata Types

> Check out the metadata types that are used for development in Data 360.

# Data 360 Metadata Types

Check out the metadata types that are used for development in Data 360.

-   **[ActivationPlatform](atlas.en-us.api_meta.meta/api_meta/meta_activationplatform.htm)**
    Represents the ActivationPlatform configuration, such as platform name, delivery schedule, output format, and destination folder.
-   **[ActivationPlatformActvAttr](atlas.en-us.api_meta.meta/api_meta/meta_activationplatformactvattr.htm)**
    Represents the information about activation attributes. Reserved for future use.
-   **[ActivationPlatformField](atlas.en-us.api_meta.meta/api_meta/meta_activationplatformfield.htm)**
    Represents the information about the fields used in ActivationPlatform.
-   **[ActvPfrmDataConnectorS3](atlas.en-us.api_meta.meta/api_meta/meta_actvpfrmdataconnectors3.htm)**
    Represents the Amazon S3 bucket name and export directory.
-   **[ActvPlatformAdncIdentifier](atlas.en-us.api_meta.meta/api_meta/meta_actvplatformadncidentifier.htm)**
    Represents the information about the identifiers to be activated, such as Email, Phone, Mobile Advertiser (MAID) ID, and Over-the-top (OTT) ID.
-   **[ActvPlatformFieldValue](atlas.en-us.api_meta.meta/api_meta/meta_actvplatformfieldvalue.htm)**
    Represents the field values for the ActivationPlatformFields.
-   **[AiPluginUtteranceDef](atlas.en-us.api_meta.meta/api_meta/meta_aipluginutterancedef.htm)**
    Represents an utterance that can be used to pick a topic during runtime.
-   **[CustomerDataPlatformSettings](atlas.en-us.api_meta.meta/api_meta/meta_customerdataplatformsettings.htm)**
    Represents an org's Data 360 settings.
-   **[DataConnector](atlas.en-us.api_meta.meta/api_meta/meta_dataconnector.htm)**
    Represents the white-labeled metadata configuration for an external connector in Data 360.
-   **[DataConnectorIngestApi](atlas.en-us.api_meta.meta/api_meta/meta_dataconnectoringestapi.htm)**
    Represents the connection information specific to Ingestion API.
-   **[DataConnectorS3](atlas.en-us.api_meta.meta/api_meta/meta_dataconnectors3.htm)**
    Represents the connection information specific to Amazon S3.
-   **[DataKitObjectTemplate](atlas.en-us.api_meta.meta/api_meta/meta_datakitobjecttemplate.htm)**
    Represents the object in Data Kit Object Template. These object templates are added inside the data kit.
-   **[DataKitObjectDependency](atlas.en-us.api_meta.meta/api_meta/meta_datakitobjectdependency.htm)**
    Represents the dependency between two data kit objects. The object templates are added inside the data kit.
-   **[DataObjectBuildOrgTemplate](atlas.en-us.api_meta.meta/api_meta/meta_dataobjectbuildorgtemplate.htm)**
    Represents the derived object template used to define the structure and configuration of data objects in a build organization. The object templates are added inside the data kit to deploy metadata.
-   **[DataPackageKitDefinition](atlas.en-us.api_meta.meta/api_meta/meta_datapackagekitdefinition.htm)**
    Represents the top-level data kit container definition. Content objects can be added after the data kit is defined.
-   **[DataPackageKitObject](atlas.en-us.api_meta.meta/api_meta/meta_datapackagekitobject.htm)**
    Represents the object in Data Kit Content Object. These objects are added inside the data kit.
-   **[DataSource](atlas.en-us.api_meta.meta/api_meta/meta_datasource.htm)**
    Used to represent the system where the data was sourced. This object is always needed when creating a Data Stream Definition.
-   **[DataSourceBundleDefinition](atlas.en-us.api_meta.meta/api_meta/meta_datasourcebundledefinition.htm)**
    Represents the bundle of streams that a user adds to a data kit.
-   **[DataSourceField](atlas.en-us.api_meta.meta/api_meta/meta_datasourcefield.htm)**
    Represents the details of a data source field.
-   **[DataSourceObject](atlas.en-us.api_meta.meta/api_meta/meta_datasourceobject.htm)**
    Represents the object from where the data was sourced.
-   **[DataSourceTenant](atlas.en-us.api_meta.meta/api_meta/meta_datasourcetenant.htm)**
    For internal use only.
-   **[DataSrcDataModelFieldMap](atlas.en-us.api_meta.meta/api_meta/meta_datasrcdatamodelfieldmap.htm)**
    Represents the entity that is used for storing the design time bundle level mappings for the data source fields and data model fields.
-   **[DataStreamDefinition](atlas.en-us.api_meta.meta/api_meta/meta_datastreamdefinition.htm)**
    Contains data ingestion information such as connection, API, and file retrieval settings.
-   **[DataStreamTemplate](atlas.en-us.api_meta.meta/api_meta/meta_datastreamtemplate.htm)**
    Represents the data stream that a user adds to a data kit.
-   **[ExternalDataConnector](atlas.en-us.api_meta.meta/api_meta/meta_externaldataconnector.htm)**
    Used to represent the object where the data was sourced.
-   **[ExternalDataSource](atlas.en-us.api_meta.meta/api_meta/meta_externaldatasource.htm)**
    Represents the metadata associated with an external data source. Create external data sources to manage connection details for integration with data and content that are stored outside your Salesforce org.
-   **[ExternalDataTransportFieldTemplate](atlas.en-us.api_meta.meta/api_meta/meta_externaldatatransportfieldtemplate.htm)**
    For internal use only.
-   **[ExternalDataTranObject](atlas.en-us.api_meta.meta/api_meta/meta_externaldatatranobject.htm)**
    Represents a definition of a Data 360 schema object. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.
-   **[ExternalDataTransportObjectTemplate](atlas.en-us.api_meta.meta/api_meta/meta_externaldatatransportobjecttemplate.htm)**
    For internal use only.
-   **[FieldSrcTrgtRelationship](atlas.en-us.api_meta.meta/api_meta/meta_fieldsrctrgtrelationship.htm)**
    Stores the relationships between a data model object (DMO) and its fields. For example, the Individual.Id field has a one-to-many relationship (1:M) with the ContactPointEmail.PartyId field.
-   **[InternalDataConnector](atlas.en-us.api_meta.meta/api_meta/meta_internaldataconnector.htm)**
    For internal use only.
-   **[MarketSegmentDefinition](atlas.en-us.api_meta.meta/api_meta/meta_marketsegmentdefinition.htm)**
    Represents the field values for MarketSegmentDefinition. MarketSegmentDefinition is used to store the exportable metadata of a segment, such as segment criteria and other attributes. Developers can create segment definition packages, pass segment definition in the form of data build tool (DBT), and publish it on AppExchange for subscriber organizations to install and instantiate these segments.
-   **[MktCalcInsightObjectDef](atlas.en-us.api_meta.meta/api_meta/meta_mktcalcinsightobjectdef.htm)**
    Represents Calculated Insight definition such as expression.
-   **[MktDataTranObject](atlas.en-us.api_meta.meta/api_meta/meta_mktdatatranobject.htm)**
    An entity that is used to deliver (aka transport) information from the source to a target (target will be called a landing entity).This can be the schema of a file, API, Event, or other means of transporting data, such as SubscriberFile1.csv, or SubscriberCDCEvent.
-   **[ObjectSourceTargetMap](atlas.en-us.api_meta.meta/api_meta/meta_objectsourcetargetmap.htm)**
    Contains the object-level mappings between the source and the target objects. The source and target objects can be an MktDataLakeObject or an MktDataModelObject. For example, an Email source object can be mapped to the ContactPointEmail object.
-   **[StreamingAppDataConnector](atlas.en-us.api_meta.meta/api_meta/meta_streamingappdataconnector.htm)**
    Represents the connection information specific to Web and Mobile Connectors.

#### See Also

-   [*Developer Center*: Data Cloud](https://developer.salesforce.com/developer-centers/data-cloud "Developer Center: Data Cloud - HTML (New Window)")

## Related Topics

- ActivationPlatform (atlas.en-us.api_meta.meta/api_meta/meta_activationplatform.htm)
- ActivationPlatformActvAttr (atlas.en-us.api_meta.meta/api_meta/meta_activationplatformactvattr.htm)
- ActivationPlatformField (atlas.en-us.api_meta.meta/api_meta/meta_activationplatformfield.htm)
- ActvPfrmDataConnectorS3 (atlas.en-us.api_meta.meta/api_meta/meta_actvpfrmdataconnectors3.htm)
- ActvPlatformAdncIdentifier (atlas.en-us.api_meta.meta/api_meta/meta_actvplatformadncidentifier.htm)
- ActvPlatformFieldValue (atlas.en-us.api_meta.meta/api_meta/meta_actvplatformfieldvalue.htm)
- AiPluginUtteranceDef (atlas.en-us.api_meta.meta/api_meta/meta_aipluginutterancedef.htm)
- CustomerDataPlatformSettings (atlas.en-us.api_meta.meta/api_meta/meta_customerdataplatformsettings.htm)
- DataConnector (atlas.en-us.api_meta.meta/api_meta/meta_dataconnector.htm)
- DataConnectorIngestApi (atlas.en-us.api_meta.meta/api_meta/meta_dataconnectoringestapi.htm)
