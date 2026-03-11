---
title: "Datacloud Namespace"
domain: apex-reference
topic: datacloud-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.162Z
keywords: [Datacloud, Namespace]
---

# Datacloud Namespace

# Datacloud Namespace

The Datacloud namespace provides classes and methods for retrieving information about duplicate rules. Duplicate rules let you control whether and when users can save duplicate records within Salesforce.

The Datacloud namespace is related to the Duplicate Management feature. For more information, see [Manage Duplicate Records](https://help.salesforce.com/s/articleView?id=sales.managing_duplicates_overview.htm&type=5&language=en_US) in Salesforce Help and [Duplicate Management](https://trailhead.salesforce.com/content/learn/modules/sales_admin_duplicate_management) in Trailhead. The Datacloud namespace isn’t related to the Salesforce Data Cloud product. See [Data Cloud](https://www.salesforce.com/products/data/).

The following are the classes in the Datacloud namespace.

-   **[AdditionalInformationMap Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_AdditionalInformationMap.htm#apex_class_Datacloud_AdditionalInformationMap)**  
    Represents other information, if any, about matched records.
-   **[DuplicateResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_class_Datacloud_DuplicateResult)**  
    Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.
-   **[FieldDiff Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FieldDiff.htm#apex_class_Datacloud_FieldDiff)**  
    Represents the name of a matching rule field and how the values of the field compare for the duplicate and its matching record.
-   **[FindDuplicates Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicates.htm#apex_class_Datacloud_FindDuplicates)**  
    Performs rule-based searches for duplicate records. The input is an array of sObjects. Each sObject represents a record you want to find duplicates of. The output identifies the detected duplicates for each input sObject based on active duplicate rules for the given object.
-   **[FindDuplicatesByIds Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesByIds.htm#apex_class_Datacloud_FindDuplicatesByIds)**  
    Performs rule-based searches for duplicate records. The input is an array of IDs. Each ID specifies records to search for duplicates among. The duplicates are detected based on the active duplicate rules applicable to the object type corresponding to the input IDs.
-   **[FindDuplicatesResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm#apex_class_Datacloud_FindDuplicatesResult)**  
    Output for rule-based searches for duplicate records. FindDuplicatesResult contains results of detecting duplicates using instances of FindDuplicates or FindDuplicatesByIds classes.
-   **[MatchRecord Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchRecord.htm#apex_class_Datacloud_MatchRecord)**  
    Represents a duplicate record detected by a matching rule.
-   **[MatchResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_class_Datacloud_MatchResult)**  
    Represents the duplicate results for a matching rule.