---
title: "Medical Inquiries"
domain: life-sciences-dev-guide
topic: medical-inquiries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.699Z
estimatedTokens: 666
keywords: [Medical, Inquiries, Capture, critical, questions, healthcare, professionals, adverse, events, product, quality, complaints, come, multiple, channels]
---

# Medical Inquiries

> Capture critical questions from healthcare professionals such as medical inquiries,
  adverse events, and product quality complaints with Medical Inquiries. Inquiries can come from
  multiple channels such as face-to-face visits, remote engagements, or contact centers. Inquiries
  require a quick and compliant response by the right individuals, typically medical experts like
  Medical Science Liaisons and Medical Communication Specialists. Medical Science Liaisons (MSLs)
  are skilled professionals who can answer scientific questions about drug details, interactions,
  off-label usage, and clinical product information. Medical Communication Specialists work in
  contact center environments and partner with MSLs to resolve inquiries, including incoming patient
  and consumer calls about product information, side effects, and adverse reactions.

# Medical Inquiries

Capture critical questions from healthcare professionals such as medical inquiries, adverse events, and product quality complaints with Medical Inquiries. Inquiries can come from multiple channels such as face-to-face visits, remote engagements, or contact centers. Inquiries require a quick and compliant response by the right individuals, typically medical experts like Medical Science Liaisons and Medical Communication Specialists. Medical Science Liaisons (MSLs) are skilled professionals who can answer scientific questions about drug details, interactions, off-label usage, and clinical product information. Medical Communication Specialists work in contact center environments and partner with MSLs to resolve inquiries, including incoming patient and consumer calls about product information, side effects, and adverse reactions.

![images/lsc_key_account_plan_data_model.png](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_medical_inquiries_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/medical-inquiries.html "HTML (New Window)").

-   **[Inquiry](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inquiry.htm)**
    Represents the details of an inquiry logged by a sales representative or other user. This object is available in API version 65.0 and later.
-   **[InquiryQuestion](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inquiryquestion.htm)**
    Represents a question asked by a healthcare professional (HCP) during an inquiry. This object is available in API version 65.0 and later.
-   **[InquiryQuestionAnswer](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inquiryquestionanswer.htm)**
    Represents the answer provided by the Medical Science Liaison (MSL) to the inquiry question. This object is available in API version 65.0 and later.

#### See Also

-   [*Object Reference for the Salesforce Platform*: Subject](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_subject.htm "Represents a topic of a managed event. This object is available in API version 65.0 and later.")

-   [*Object Reference for the Salesforce Platform*: SubjectAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_subjectassignment.htm "Represents a junction between a subject and the inquiry that the subject belongs to. This object is available in API version 65.0 and later.")

## Related Topics

- Inquiry (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inquiry.htm)
- InquiryQuestion (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inquiryquestion.htm)
- InquiryQuestionAnswer (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inquiryquestionanswer.htm)
- Object Reference for the Salesforce Platform: Subject (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_subject.htm)
- Object Reference for the Salesforce Platform: SubjectAssignment (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_subjectassignment.htm)
