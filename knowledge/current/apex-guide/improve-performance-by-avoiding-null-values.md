---
title: "Improve Performance by Avoiding Null Values"
domain: apex-guide
topic: improve-performance-by-avoiding-null-values
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:34.544Z
estimatedTokens: 146
keywords: [Improve, Performance, Avoiding, Null, Values]
---

# Improve Performance by Avoiding Null Values

# Improve Performance by Avoiding Null Values

In your SOQL and SOSL queries, explicitly filtering out null values in the WHERE clause allows Salesforce to improve query performance. In the following example, any records where the Thread\_\_c value is null are eliminated from the search.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_single_row.htm "Using SOQL Queries That Return One Record")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_polymorphic_relationships.htm "Working with Polymorphic Relationships in SOQL Queries")

## Code Examples

```apex
Public class TagWS {

/* getThreadTags
*
* a quick method to pull tags not in the existing list
*
*/
   public static webservice List<String> 
   getThreadTags(String threadId, List<String> tags) {

      system.debug(LoggingLevel.Debug,tags);

      List<String> retVals = new List<String>();
      Set<String> tagSet = new Set<String>();
      Set<String> origTagSet = new Set<String>();
      origTagSet.addAll(tags);

// Note WHERE clause optimizes search where Thread__c is not null

      for(CSO_CaseThread_Tag__c t : 
         [SELECT Name FROM CSO_CaseThread_Tag__c 
         WHERE Thread__c = :threadId AND
         Thread__c != null]) 

      {
         tagSet.add(t.Name);
      }
      for(String x : origTagSet) { 
   // return a minus version of it so the UI knows to clear it
         if(!tagSet.contains(x)) retVals.add('-' + x);
      }
      for(String x : tagSet) { 
   // return a plus version so the UI knows it's new
         if(!origTagSet.contains(x)) retvals.add('+' + x);
      }

      return retVals;
   }
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_single_row.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_polymorphic_relationships.htm)
