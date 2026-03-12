---
title: "Lists and Filters"
domain: life-sciences-dev-guide
topic: lists-and-filters
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.696Z
estimatedTokens: 639
keywords: [Filters, Quickly, identify, target, group, accounts, manually-curated, remain, fixed, Users, add, remove, individually, Dynamic, apply]
---

# Lists and Filters

> Quickly identify a target group of accounts by using Lists and Filters. Static lists are
  manually-curated lists of accounts that remain fixed. Users can add or remove accounts
  individually. Dynamic filters apply to a list of accounts that updates based on user pre-defined
  criteria, and show sortable relevant fields that users add. By using dynamic filters, users can
  quickly associate the group of accounts with tailored actions, saving time and efforts by removing
  the need for repetitive manual updates. Lists and Filters streamline workflows by enabling users
  to identify, interact with, and act on relevant accounts.

# Lists and Filters

Quickly identify a target group of accounts by using Lists and Filters. Static lists are manually-curated lists of accounts that remain fixed. Users can add or remove accounts individually. Dynamic filters apply to a list of accounts that updates based on user pre-defined criteria, and show sortable relevant fields that users add. By using dynamic filters, users can quickly associate the group of accounts with tailored actions, saving time and efforts by removing the need for repetitive manual updates. Lists and Filters streamline workflows by enabling users to identify, interact with, and act on relevant accounts.

![images/lsc_key_account_plan_data_model.png](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_lists_and_filters_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/lists-and-filters.html "HTML (New Window)").

-   **[LifeSciAccountListColumn](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciaccountlistcolumn.htm)**
    Represents the information of the columns selected from accounts or its supported direct relationship objects in account filters. This object is available in API version 65.0 and later.
-   **[LifeSciAccountListMember](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciaccountlistmember.htm)**
    Represents information about account static lists and routine. This object is available in API version 65.0 and later.
-   **[LifeSciAcctListFilterCrit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciacctlistfiltercrit.htm)**
    Stores the rules and conditions derived from the Account object or its supported direct relationship objects to filter Life Sciences accounts. This object is available in API version 65.0 and later.
-   **[LifeScienceAccountList](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescienceaccountlist.htm)**
    Represents the type of account lists, such as filter, static list, and routine. This object is available in API version 65.0 and later.
-   **[LifeScienceAccountListObject](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescienceaccountlistobject.htm)**
    Represents the object that is referenced in the provider account list. This object is available in API version 65.0 and later.

## Related Topics

- LifeSciAccountListColumn (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciaccountlistcolumn.htm)
- LifeSciAccountListMember (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciaccountlistmember.htm)
- LifeSciAcctListFilterCrit (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciacctlistfiltercrit.htm)
- LifeScienceAccountList (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescienceaccountlist.htm)
- LifeScienceAccountListObject (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescienceaccountlistobject.htm)
