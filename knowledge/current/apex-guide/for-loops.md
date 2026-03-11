---
title: "For Loops"
domain: apex-guide
topic: for-loops
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:48.154Z
keywords: [Loops, Note]
---

# For Loops

# For Loops

Apex supports three variations of the for loop:

-   The traditional for loop:
    
    ```
    
    ```
    
-   The list or set iteration for loop:
    
    ```
    
    ```
    
    where variable must be of the same primitive or sObject type as list\_or\_set.
    
-   The SOQL for loop:
    
    ```
    
    ```
    
    or
    
    ```
    
    ```
    
    Both variable and variable\_list must be of the same sObject type as is returned by the soql\_query.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Curly braces ({}) are required around a code\_block only if the block contains more than one statement.

Each is discussed further in the sections that follow.

-   **[Traditional For Loops](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_for_traditional.htm)**  
    
-   **[List or Set Iteration for Loops](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_for_lists.htm)**  
    
-   **[Iterating Collections](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_iterating.htm)**  
    

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_while.htm "While Loops")