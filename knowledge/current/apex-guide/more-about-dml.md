---
title: "More About DML"
domain: apex-guide
topic: more-about-dml
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:48.058Z
keywords: [DML]
---

# More About DML

# More About DML

Here are some things you may want to know about using Data Manipulation Language.

-   **[Setting DML Options](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_database_dmloptions.htm)**  
    
-   **[Transaction Control](atlas.en-us.apexcode.meta/apexcode/langCon_apex_transaction_control.htm)**  
    Read about transaction requests, generating and releasing savepoints, rolling back transactions, and more.
-   **[sObjects That Can’t Be Used Together in DML Operations](atlas.en-us.apexcode.meta/apexcode/apex_dml_non_mix_sobjects.htm)**  
    DML operations on certain sObjects, sometimes referred to as setup objects, can’t be mixed with DML on non-setup sObjects in the same transaction. This restriction exists because some sObjects affect the user’s access to records in the org. You must insert or update these types of sObjects in a different transaction to prevent operations from happening with incorrect access-level permissions. For example, you can’t update an account and a user role in a single transaction.
-   **[sObjects That Don’t Support DML Operations](atlas.en-us.apexcode.meta/apexcode/apex_dml_non_dml_objects.htm)**  
    
-   **[Bulk DML Exception Handling](atlas.en-us.apexcode.meta/apexcode/apex_dml_bulk_exceptions.htm)**  
    
-   **[Things You Should Know about Data in Apex](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_limitations.htm)**