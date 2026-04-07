---
title: "Participant Management"
domain: life-sciences-dev-guide
topic: participant-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:04:07.986Z
estimatedTokens: 669
keywords: [Participant, Management, data, model, helps, streamline, recruitment, enrollment, processes, clinical, trials, advanced, digital, solutions, store]
---

# Participant Management

> Participant Management data model helps you to streamline the recruitment and enrollment
  processes in clinical trials with advanced digital solutions. With this data model, you can store
  clinical trial data representing care programs and research studies. It’s USCDI and FHIR
  R4-aligned, which helps with your system's interoperability and compliance while managing
  participant data efficiently.

# Participant Management

Participant Management data model helps you to streamline the recruitment and enrollment processes in clinical trials with advanced digital solutions. With this data model, you can store clinical trial data representing care programs and research studies. It’s USCDI and FHIR R4-aligned, which helps with your system's interoperability and compliance while managing participant data efficiently.

| Available in: Lightning ExperienceAvailable in: Enterprise and Unlimited Editions with Life Sciences or Health Cloud |
| --- |


Participant data in clinical trials is essential in the Life Sciences industry as it helps you track and manage participants' enrollment journey. This data model is your key to collecting information on participants and monitoring the effectiveness and safety of clinical trials.

The Participant Management data model allows you to store clinical trial data representing care program management and research studies. Participant Management uses Care Program Management objects to improve patient outcomes. It also uses the Discovery Framework objects to build more complex prescreening assessment forms and questions to check participants' eligibility. To learn more about Care Program Management objects and Discovery Framework objects, refer [Care Program Management](https://developer.salesforce.com/docs/atlas.en-us.260.0.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_care_program_data_model.htm) and [Discovery Framework Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.250.0.industries_reference.meta/industries_reference/discovery_framework_standard_objects.htm).

Participant Management also reuses some of the standard Salesforce objects to digitize the Consent Management flow. You can add consent documents to clinical trials by associating them with the related care program and defining their data use purpose. To learn more about the standard objects used for e-consents, refer [Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm).

The participant management objects are available to users with Health Cloud Starter and the Participant Enrollment Add-On license. Available in API version 61.0 and later.

![Participant Management entity relationship diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_participant_management_erd.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/participant-management.html "HTML (New Window)").
