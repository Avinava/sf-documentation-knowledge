---
title: "Subject Management"
domain: life-sciences-dev-guide
topic: subject-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.789Z
estimatedTokens: 321
keywords: [Subject, Management, Subjects, organize, manage, across, various, functions, Users, add, topics, medical, inquiries, facilitating, automatic]
---

# Subject Management

> Use Subjects to organize and manage information across various functions. Users can add
  topics to medical inquiries as subjects, facilitating automatic queue assignments and building a
  knowledge repository. Subjects can also be applied to medical insights and email templates for
  easy searching by subject filtering.

# Subject Management

Use Subjects to organize and manage information across various functions. Users can add topics to medical inquiries as subjects, facilitating automatic queue assignments and building a knowledge repository. Subjects can also be applied to medical insights and email templates for easy searching by subject filtering.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_subject_mgmt_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/subject-management.html "HTML (New Window)").

-   **[Subject](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_subject.htm)**
    Represents a topic of a managed event. This object is available in API version 65.0 and later.
-   **[SubjectAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_subjectassignment.htm)**
    Represents a junction between a subject and the inquiry that the subject belongs to. This object is available in API version 65.0 and later.

## Related Topics

- Subject (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_subject.htm)
- SubjectAssignment (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_subjectassignment.htm)
