---
title: "Visit Management"
domain: life-sciences-dev-guide
topic: visit-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.744Z
estimatedTokens: 1318
keywords: [Visit, Management, supports, call, planning, execution, process, Life, Sciences, Industry, users, engage, compliantly, accounts, various]
---

# Visit Management

> Visit Management supports the call planning and execution process in the Life Sciences
  Industry. Field users can engage compliantly with accounts through various channels such as
  face-to-face, phone, and remote. With integrated intelligent content and remote engagement
  capabilities, field sales representatives and medical teams can plan, execute, and report on
  visits to healthcare providers and healthcare organizations. Information entered in a provider
  visit typically includes product details, product messages, presentations, marketing items and
  samples. Provider Visit Management also supports various compliance requirements regarding sample
  eligibility, sample limits and allocations, and e-signature capture.

# Visit Management

Visit Management supports the call planning and execution process in the Life Sciences Industry. Field users can engage compliantly with accounts through various channels such as face-to-face, phone, and remote. With integrated intelligent content and remote engagement capabilities, field sales representatives and medical teams can plan, execute, and report on visits to healthcare providers and healthcare organizations. Information entered in a provider visit typically includes product details, product messages, presentations, marketing items and samples. Provider Visit Management also supports various compliance requirements regarding sample eligibility, sample limits and allocations, and e-signature capture.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_visit_mgmt.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/visit-management.html "HTML (New Window)").

-   **[DigitalSignature](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_digitalsignature.htm)**
    Life Sciences Cloud fields extend the standard DigitalSignature object to represent a signature. This object is available in API version 65.0 and later.
-   **[Expense](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_expense.htm)**
    Life Sciences Cloud fields extend the standard Expense object to represent expenses related to a visit. This object is available in API version 65.0 and later.
-   **[ExpenseParticipant](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_expenseparticipant.htm)**
    Represents a participant in an expence and is used in expense allocation. This object is available in API version 65.0 and later..
-   **[ExpenseType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_expensetype.htm)**
    The ExpenseType object is a category that's used to classify an expense that occurs. This object is available in API version 65.0 and later.
-   **[PresentationForum](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_presentationforum.htm)**
    Represents the details of the forums (call, meetings, order) where the presentation was presented. This object is available in API version 65.0 and later.
-   **[ProviderVisit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisit.htm)**
    Represents the details of a field user's visit to a health care provider. For example, a sales representative visiting a health care provider to discuss product usage and efficacy to enhance adoption. This object is available in API version 65.0 and later.
-   **[ProviderVisitChangedEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitchangedevent.htm)**
    Represents an event for a data manipulation operation performed on a provider visit record. This object is available in API version 65.0 and later.
-   **[ProviderVisitDtlProductMsg](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitdtlproductmsg.htm)**
    Represents delivered messages and reactions from the health care provider for products discussed during a visit. This object is available in API version 65.0 and later.
-   **[ProviderVisitMarketingItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitmarketingitem.htm)**
    Represents marketing items provided to the health care provider as part of a visit. This object is available in API version 65.0 and later.
-   **[ProviderVisitProdDetailing](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitproddetailing.htm)**
    Represents products discussed during a visit with a health care provider, including key details such as the product brand, therapeutic area, and other relevant information. This object is available in API version 65.0 and later.
-   **[ProviderVisitProdDiscussion](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitproddiscussion.htm)**
    Represents any additional notes or information regarding the products discussed during a visit to a health care provider. This object is available in API version 65.0 and later.
-   **[ProviderVisitRqstSample](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitrqstsample.htm)**
    Represents sample products requested to be shipped to the health care provider during a visit. This object is available in API version 65.0 and later.
-   **[Visit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_visit.htm)**
    Track information related to a field rep’s visit to a health care provider.
-   **[Visitor](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_visitor.htm)**
    Represents the sales reps performing visits.

## Related Topics

- DigitalSignature (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_digitalsignature.htm)
- Expense (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_expense.htm)
- ExpenseParticipant (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_expenseparticipant.htm)
- ExpenseType (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_expensetype.htm)
- PresentationForum (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_presentationforum.htm)
- ProviderVisit (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisit.htm)
- ProviderVisitChangedEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitchangedevent.htm)
- ProviderVisitDtlProductMsg (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitdtlproductmsg.htm)
- ProviderVisitMarketingItem (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitmarketingitem.htm)
- ProviderVisitProdDetailing (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providervisitproddetailing.htm)
