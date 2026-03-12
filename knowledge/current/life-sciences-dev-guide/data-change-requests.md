---
title: "Data Change Requests"
domain: life-sciences-dev-guide
topic: data-change-requests
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.672Z
estimatedTokens: 521
keywords: [Data, Change, Requests, organizations, implement, configurable, validation, processes, tailored, their, specific, business, needs, Validate, changes]
---

# Data Change Requests

> With Data Change Requests, organizations can implement configurable data validation
  processes that are tailored to their specific business needs. Validate data changes by objects and
  fields and configure data changes by profile and record type. Data Change Requests support
  controlled data synchronization of externally managed data domains.

# Data Change Requests

With Data Change Requests, organizations can implement configurable data validation processes that are tailored to their specific business needs. Validate data changes by objects and fields and configure data changes by profile and record type. Data Change Requests support controlled data synchronization of externally managed data domains.

![images/lsc_consent_mgmt_data_model.png](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_data_change_requests_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/atlas.en-us.260.0.life_sciences_dev_guide.meta/life_sciences_dev_guide/life_sciences_data_change_requests.htm "HTML (New Window)").

-   **[LifeSciDataChangeDef](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachangedef.htm)**
    Represents the object for which the data change request is configured. This object is available in API version 65.0 and later.
-   **[LifeSciDataChangeRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachangerequest.htm)**
    Represents the data change requests for the all objects. This object is available in API version 65.0 and later.
-   **[LifeSciDataChgDefMngFld](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachgdefmngfld.htm)**
    Represents the fields for which the data change request is configured for all objects. This object is available in API version 65.0 and later.
-   **[LifeSciDataChgDefRecType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachgdefrectype.htm)**
    Represents the management of data validation for the object by record type.
-   **[LifeSciDataChgPersonaDef](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachgpersonadef.htm)**
    Represents the configuration of data updates for the object by persona.

## Related Topics

- LifeSciDataChangeDef (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachangedef.htm)
- LifeSciDataChangeRequest (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachangerequest.htm)
- LifeSciDataChgDefMngFld (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachgdefmngfld.htm)
- LifeSciDataChgDefRecType (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachgdefrectype.htm)
- LifeSciDataChgPersonaDef (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescidatachgpersonadef.htm)
