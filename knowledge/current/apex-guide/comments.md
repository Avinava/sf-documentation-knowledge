---
title: "Comments"
domain: apex-guide
topic: comments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:48.111Z
keywords: [Comments, Tip]
---

# Comments

# Comments

Both single and multiline comments are supported in Apex code.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

We recommend using the standardized ApexDoc comment format to increase code readability, collaboration, and long-term maintainability. For the full specifications, see [Document Your Apex Code](atlas.en-us.apexcode.meta/apexcode/apex_doc_intro.htm "ApexDoc is a standardized comment format that makes it easier for humans, documentation generators, and AI agents to understand your codebase. We recommend using ApexDoc comments to facilitate code collaboration and increase long-term code maintainability. Based on the JavaDoc standard, ApexDoc provides specifications, such as specialized tags and guidelines, that are tailored to Apex and the Salesforce ecosystem.").

-   To create a single line comment, use //. All characters on the same line to the right of the // are ignored by the parser. For example:
    
    ```
    
    ```
    
-   To create a multiline comment, use /\* and \*/ to demarcate the beginning and end of the comment block. For example:
    
    ```
    
    ```