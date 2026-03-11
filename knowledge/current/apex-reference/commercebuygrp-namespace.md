---
title: "CommerceBuyGrp Namespace"
domain: apex-reference
topic: commercebuygrp-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.063Z
keywords: [CommerceBuyGrp, Namespace, See]
---

# CommerceBuyGrp Namespace

# CommerceBuyGrp Namespace

The CommerceBuyGrp namespace provides classes and methods for retrieving information about the buyer groups associated with a user.

The following are the classes in the CommerceBuyGrp namespace.

-   **[BuyerGroupEvaluationService Class](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupEvaluationService.htm#apex_class_CommerceBuyGrp_BuyerGroupEvaluationService)**  
    The BuyerGroupEvaluationService class allows you define and execute custom business logic for dynamically assigning users to buyer groups. Unlike out-of-the-box configurations limited to account, market, or data segment-based buyer groups, this service supports extensibility and empowers you to implement tailored buyer group evaluation strategies. It supports both guest and logged-in user scenarios, enabling highly customizable and context-specific buyer group determination.
-   **[BuyerGroupRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupRequest.htm#apex_class_CommerceBuyGrp_BuyerGroupRequest)**  
    Contains methods to retrieve account and store details used to identify the buyer groups associated with a user.
-   **[BuyerGroupResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupResponse.htm#apex_class_CommerceBuyGrp_BuyerGroupResponse)**  
    Contains constructors and methods to retrieve the buyer groups associated with a user.

#### See Also

-   [*Salesforce B2B Commerce and D2C Commerce*: Assign Users to Buyer Groups](https://help.salesforce.com/s/articleView?id=commerce.comm_buyer_group_extension.htm&language=en_US "Salesforce B2B Commerce and D2C Commerce: Assign Users to Buyer
    Groups - HTML (New Window)")
    
-   [*B2B Commerce and D2C Commerce Developer Guide*: Available Domain Extensions](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/available-extensions.html "B2B Commerce and D2C Commerce Developer Guide: Available Domain
    Extensions - HTML (New Window)")