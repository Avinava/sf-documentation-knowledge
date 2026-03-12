---
title: "FHIR Subscription"
domain: health-cloud-object-reference
topic: fhir-subscription
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:34.091Z
estimatedTokens: 843
keywords: [FHIR, Subscription, Publishers, Fast, Healthcare, Interoperability, Resources, data, model, store, topics, subscriber, filters, applied, event]
---

# FHIR Subscription

> Publishers can use the Fast Healthcare Interoperability Resources (FHIR) Subscription
  data model to store subscription topics, subscriber details, the filters and parameters applied to
  a subscription, and other subscription details. When an event change occurs in the subscribed
  resource, it triggers a notification and a platform event is created as an Interoperability Topic
  Subscription Event record. Then, Mulesoft sends the notification to the subscriber’s endpoint in
  real time.

# FHIR Subscription

Publishers can use the Fast Healthcare Interoperability Resources (FHIR) Subscription data model to store subscription topics, subscriber details, the filters and parameters applied to a subscription, and other subscription details. When an event change occurs in the subscribed resource, it triggers a notification and a platform event is created as an Interoperability Topic Subscription Event record. Then, Mulesoft sends the notification to the subscriber’s endpoint in real time.

| Available in: Lightning ExperienceAvailable in: Enterprise and Unlimited Editions |
| --- |


The FHIR Subscription data model is available to users with the Health Cloud Foundation and the FHIR Subscription permission sets.

-   **[InteropTopic](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopic.htm)**
    Represents the interoperability topic for which notifications are sent to subscribers. This object is available in API version 64.0 and later.
-   **[InteropTopicDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicdetail.htm)**
    Represents the details of an interoperability topic. This object is available in API version 64.0 and later.
-   **[InteropTopicFilter](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicfilter.htm)**
    Represents the properties by which an interoperability topic's notification can be filtered. This object is available in API version 64.0 and later.
-   **[InteropTopicNtfcnResource](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicntfcnresource.htm)**
    Represents the notification resource for an interoperability topic. This object is available in API version 64.0 and later.
-   **[InteropTopicSubcrFilter](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicsubcrfilter.htm)**
    Represents the subscriber's criteria for filtering the interoperability topic subscription event. This object is available in API version 64.0 and later.
-   **[InteropTopicSubcrParameter](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicsubcrparameter.htm)**
    Represents the parameters added to an interoperability topic subscription. This object is available in API version 64.0 and later.
-   **[InteropTopicSubscription](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicsubscription.htm)**
    Represents a subscription to an interoperability topic. This object is available in API version 64.0 and later.
-   **[InteropTopicSubscriptionDtl](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicsubscriptiondtl.htm)**
    Represents the details of an interoperability topic subscription. This object is available in API version 64.0 and later.
-   **[InteropTopicTriggerCriteria](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopictriggercriteria.htm)**
    Represents the criteria that trigger a notification for an interoperability topic. This object is available in API version 64.0 and later.

## Related Topics

- InteropTopic (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopic.htm)
- InteropTopicDetail (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicdetail.htm)
- InteropTopicFilter (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicfilter.htm)
- InteropTopicNtfcnResource (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicntfcnresource.htm)
- InteropTopicSubcrFilter (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicsubcrfilter.htm)
- InteropTopicSubcrParameter (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicsubcrparameter.htm)
- InteropTopicSubscription (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicsubscription.htm)
- InteropTopicSubscriptionDtl (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopicsubscriptiondtl.htm)
- InteropTopicTriggerCriteria (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_interoptopictriggercriteria.htm)
