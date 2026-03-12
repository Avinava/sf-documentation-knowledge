---
title: "Provider Network Management"
domain: health-cloud-object-reference
topic: provider-network-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:34.129Z
estimatedTokens: 1795
keywords: [Provider, Network, Management, health, insurance, companies, bring, providers, their, helps, members, patients, care, fits, needs]
---

# Provider Network Management

> Provider Network Management allows health insurance companies to bring providers into
    their network and helps members or patients find care that fits their needs. It provides objects
    for managing provider networks and contract payment agreement terms.

# Provider Network Management

Provider Network Management allows health insurance companies to bring providers into their network and helps members or patients find care that fits their needs. It provides objects for managing provider networks and contract payment agreement terms.

| Available in: Enterprise and Unlimited Editions |
| --- |


To use all the objects in Provider Network Management, you must have the Health Cloud Provider Network Management Add On license as well as the Health Cloud Platform license. Assign the Health Cloud Foundation permission set and the Provider Network Management permission set to your users.

## Provider Network Management

![Diagram showing the relationship between provider network contract objects](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhealthcloud_providernetworkcontractmgmt_erd.png&folder=health_cloud_object_reference)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/provider-network-contract-management.html "HTML (New Window)").

-   **[Access to Provider Network Management](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_provider_data_model_permissions.htm)**
    The provider network management standard objects are available to users with the Health Cloud Platform and Provider Network Management permission set licenses and the Health Foundation permission set.
-   **[ApplicationCase](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_applicationcase.htm)**
    This junction object stores a relationship between Case and IndividualApplication. This object is available in API version 52.0 and later with the Provider Network Management permission set license.
-   **[IndividualApplication](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_individualapplication_hc.htm)**
    Represents an application form submitted by an individual. Available with the Provider Network Management permission set license.
-   **[InsurancePolicy](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_insurancepolicy.htm)**
    Represents a type of insurance policy. Available with the Provider Network Management permission set license.
-   **[BundledCareFeeAgreement](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_bundledcarefeeagreement.htm)**
    Specifies the payment terms for contracts of Bundled Care Fee Agreement. This object is available in API version 54.0 and later with the Provider Network Management permission set license.
-   **[CapitationCareFeeAgreement](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_capitationcarefeeagreement.htm)**
    Specifies the payment terms for contracts of Capitation Care Fee Agreement type. This object is available in API version 54.0 and later with the Provider Network Management permission set license.
-   **[CareFeeScheduleItem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carefeescheduleitem.htm)**
    Stores procedure level fees for a fee schedule definition. This object is available in API version 54.0 and later with the Provider Network Management permission set license.
-   **[CaseRelatedFile](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caserelatedfile.htm)**
    Represents the details of a file attached to a case, such as file properties, file processing details, and other additional relevant information. This object is available in API version 62.0 and later.
-   **[CategorizedCareFeeAgreement](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_categorizedcarefeeagreement.htm)**
    Specifies the payment terms for contracts of Categorized Care Fee Agreement. This object is available in API version 54.0 and later with the Provider Network Management permission set license.
-   **[ContractPaymentAgreement](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_contractpaymentagreement.htm)**
    Stores information about the contract payment agreement associated with a contract. This object is available in API version 54.0 and later with the Provider Network Management permission set license.
-   **[FeeScheduleDefinition](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_feescheduledefinition.htm)**
    Stores fee schedule information for contracts of Standard Care Fee Agreement types. This object is available in API version 54.0 and later with the Provider Network Management permission set license.
-   **[PercentileBsdCareFeeAgreement](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_percentilebsdcarefeeagreement.htm)**
    Specifies the payment terms for contracts of Percentile Based Care Fee Agreement. This object is available in API version 54.0 and later with the Provider Network Management permission set license.
-   **[ProviderNetworkContract](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_providernetworkcontract.htm)**
    Represents a provider and a network bound together by a contract. This object is available in API version 53.0 and later with the Provider Network Management permission set license.
-   **[ProviderNetworkTier](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_providernetworktier.htm)**
    Represents unique tiers for each provider network. This object is available in API version 53.0 and later with the Provider Network Management permission set license.
-   **[PreventiveCareAgreement](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_preventivecareagreement.htm)**
    Specifies the payment terms for contracts of Preventive Care Fee Agreement. This object is available in API version 54.0 and later with the Provider Network Management permission set license.
-   **[SharedSavingPaymentAgreement](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_sharedsavingpaymentagreement.htm)**
    Specifies the payment terms for contracts of Shared Saving Payment Agreement type. This object is available in API version 54.0 and later with the Provider Network Management permission set license.
-   **[StandardCareFeeAgreement](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_standardcarefeeagreement.htm)**
    Specifies the payment terms for contracts of Standard Care Fee Agreement type. This object is available in API version 54.0 and later with the Provider Network Management permission set license.

#### See Also

-   [Health Cloud Administrator Guide: Provider Network Management](https://help.salesforce.com/s/articleView?id=ind.landing_provider_network_mgmt.htm&type=5&language=en_US)

## Related Topics

- Access to Provider Network Management (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_provider_data_model_permissions.htm)
- ApplicationCase (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_applicationcase.htm)
- IndividualApplication (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_individualapplication_hc.htm)
- InsurancePolicy (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_insurancepolicy.htm)
- BundledCareFeeAgreement (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_bundledcarefeeagreement.htm)
- CapitationCareFeeAgreement (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_capitationcarefeeagreement.htm)
- CareFeeScheduleItem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carefeescheduleitem.htm)
- CaseRelatedFile (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caserelatedfile.htm)
- CategorizedCareFeeAgreement (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_categorizedcarefeeagreement.htm)
- ContractPaymentAgreement (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_contractpaymentagreement.htm)
