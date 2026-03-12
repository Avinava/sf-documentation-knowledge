---
title: "Salesforce Contracts Standard Objects"
domain: clm-developer-guide
topic: salesforce-contracts-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:22.079Z
estimatedTokens: 2579
keywords: [Salesforce, Contracts, Standard, Objects, work, application]
---

# Salesforce Contracts Standard Objects

> Use standard objects to work with the Salesforce Contracts application.

# Salesforce Contracts Standard Objects

Use standard objects to work with the Salesforce Contracts application.

-   **[ClauseCatgConfiguration](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_clausecatgconfiguration.htm)**
    Represents the configuration about the clause category that can be used in a response document by the user.
-   **[ContextUseCaseMapping](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contextusecasemapping.htm)**
    Represents the setup configuration details such as the context definition and mapping definitions used to invoke context service APIs. This object is available in API version 61.0 and later.
-   **[ContractDocumentReview](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contractdocumentreview.htm)**
    Represents the review process-related details, such as the reference object type and review status. This object is available in API version 58.0 and later.
-   **[ContractDocumentVersion](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contractdocumentversion.htm)**
    Tracks contract document versions through contract lifecycle stages. This object is available in API version 56.0 and later.
-   **[ContractDocVerContentDoc](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contractdocvercontentdoc.htm)**
    Associates a contract document version with a content document. This object is available in API version 56.0 and later.
-   **[ContractDocVersionSection](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contractdocversionsection.htm)**
    Tracks contract document sections through contract lifecycle stages. This object is available in API version 56.0 and later.
-   **[ContractExtractionResult](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contractextractionresult.htm)**
    Represents contract-specific data extracted by the Contracts AI from an uploaded PDF that's ready for review. For example, account name, owner, start date, contract name, contract record type, contract term, and clauses. Before contract record creation, users can access, review, and modify the temporarily stored information. This object is available in API version 60.0 and later.
-   **[ContractType](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contracttype.htm)**
    A sub type that groups contracts with similar characteristics, such as lifecycle states, permissions, and templates and clauses used. This object is available in API version 56.0 and later.
-   **[ContractTypeConfig](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contracttypeconfig.htm)**
    The settings that define the characteristics and behavior of all contracts of that type. This object is available in API version 56.0 and later.
-   **[DocGenerationBatchProcess](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_docgenerationbatchprocess.htm)**
    Represents a grouping of document generation requests associated with the batch document generation ID. Only one batch document generation request can be processed at a time. To create a new batch document generation record, pause or cancel the current record. This object is available in API version 58.0 and later.
-   **[DocGenBtchStsChgEvent](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_docgenbtchstschgevent.htm)**
    Represents the change in the status of the batch document generation request. A batch document generation request groups multiple document generation requests by associating the individual requests with a batch document generation ID. This object is available in API version 62.0 and later.
-   **[DocGenProcStsChgEvent](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_docgenprocstschgevent.htm)**
    Represents the change in status of a document generation request. This object is available in API version 62.0 and later.
-   **[DocumentAuthoredContent](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_documentauthoredcontent.htm)**
    Represents the metadata of the content within the content boundary of a document such as a template or contract document. You can store metadata details of the marked clauses and sections in Salesforce with the document authored content. This object is available in API version 58.0 and later.
-   **[DocumentClause](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_documentclause.htm)**
    Represents a clause that can be associated with multiple documents.
-   **[DocumentClauseSet](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_documentclauseset.htm)**
    Represents a grouping for clauses, which can hold multiple variations of the same clause such as main clause and alternate pre-approved clauses based on language.
-   **[DocumentEnvelope](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_documentenvelope.htm)**
    The container for a document that is routed for signatures. This object is available in API version 56.0 and later.
-   **[DocumentGenerationProcess](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_documentgenerationprocess.htm)**
    Supports server-side document generation requests and responses. This object is available in API version 56.0 and later.
-   **[DocumentGenerationSetting](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_documentgenerationsetting.htm)**
    Represents an org's settings for automatic document generation from templates. This object is available in API version 54.0 and later.
-   **[DocumentTemplate](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_documenttemplate.htm)**
    Represents information about dynamic document generation. This object is available in API version 56.0 and later.
-   **[DocumentTemplateConfig](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_documenttemplateconfig.htm)**
    Represents the shadow object that supports migration of document templates between environments. The Developer field in the shadow object references the UniqueName field in the document template object and is used to retrieve the document template details. For internal use only. This object is available in API version 58.0 and later.
-   **[DocumentTemplateSection](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_documenttemplatesection.htm)**
    Represents a section in a document template. A document template section can be a clause, image, context, embedded template, or signature. This object is available in API version 52.0 and later.
-   **[ESignatureConfig](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_esignatureconfig.htm)**
    The settings for integrating with external eSignature providers. This object is available in API version 56.0 and later.
-   **[ESignatureEnvelopeConfig](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_esignatureenvelopeconfig.htm)**
    The notification-specific settings for integrating with external eSignature providers. This object is available in API version 56.0 and later.
-   **[ExternalDocStorageConfig](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_externaldocstorageconfig.htm)**
    Represents a collection of fields to configure the external document storage for an object. It includes details such as location, path, and named credentials. For example, OneDrive is defined as an External Document Storage and is associated with the Salesforce Contract object.
-   **[GeneratedDocumentSection](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_generateddocumentsection.htm)**
    Represents a section of a generated document. This object is available in API version 60.0 and later.
-   **[ObjectStateActionDefinition](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_objectstateactiondefinition.htm)**
    Represents the link between the object state definition and object state transition based on a defined action.
-   **[ObjectStateTransitionAction](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_objectstatetransitionaction.htm)**
    Represents a junction between object state transition and object state action definition. State transition determines the valid transition of an object from one state to another and the state action determines which action triggers which state transition.
-   **[Obligation](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_obligation.htm)**
    Represents an obligation between parties to fulfill agreed conditions, such as contractual commitments. The obligation commitment assists with a strategy to achieve the desired outcome within a set timeframe and reduce risk with compliance tracking. For example, payment due dates, contract terms, renewals. This object is available in API version 59.0 and later.
-   **[SalesContractLine](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_salescontractline.htm)**
    Stores a contract's product information, including price, quantity, and components covered. This object is available in API version 56.0 and later.
-   **[UserEsignVendorIdentifier](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_useresignvendoridentifier.htm)**
    Used for integrating eSignature users. This object is available in API version 56.0 and later.

#### See Also

-   [*Object Reference for the Salesforce Platform*: Overview of Salesforce Objects and Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Object Reference for the Salesforce Platform: Overview of Salesforce Objects
    and Fields  - HTML (New Window)")

-   [*SOAP API Developer Guide*: Introduction to SOAP API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm "SOAP API Developer Guide: Introduction to SOAP API - HTML (New Window)")

## Related Topics

- ClauseCatgConfiguration (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_clausecatgconfiguration.htm)
- ContextUseCaseMapping (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contextusecasemapping.htm)
- ContractDocumentReview (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contractdocumentreview.htm)
- ContractDocumentVersion (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contractdocumentversion.htm)
- ContractDocVerContentDoc (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contractdocvercontentdoc.htm)
- ContractDocVersionSection (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contractdocversionsection.htm)
- ContractExtractionResult (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contractextractionresult.htm)
- ContractType (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contracttype.htm)
- ContractTypeConfig (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_contracttypeconfig.htm)
- DocGenerationBatchProcess (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_docgenerationbatchprocess.htm)
