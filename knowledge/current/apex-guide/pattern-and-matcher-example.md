---
title: "Pattern and Matcher Example"
domain: apex-guide
topic: pattern-and-matcher-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.692Z
estimatedTokens: 339
keywords: [Pattern, Matcher, end, position, match, character, matched, parsing, want, additional, work, found]
---

# Pattern and Matcher Example

> The Matcher class end method
returns the position in the match string after the last character
that was matched. You would use this when you are parsing a string
and want to do additional work with it after you have found a match,
such as find the next match.

# Pattern and Matcher Example

The Matcher class end method returns the position in the match string after the last character that was matched. You would use this when you are parsing a string and want to do additional work with it after you have found a match, such as find the next match.

In regular expression syntax, ? means match once or not at all, and + means match 1 or more times.

In the following example, the string passed in with the Matcher object matches the pattern since (a(b)?) matches the string 'ab' - 'a' followed by 'b' once. It then matches the last 'a' - 'a' followed by 'b' not at all.

```

```

In the following example, email addresses are normalized and duplicates are reported if there is a different top-level domain name or subdomain for similar email addresses. For example, john@fairway.smithco is normalized to john@smithco.

```

```

#### See Also

-   [*Apex Reference Guide*: Pattern Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm "Apex Reference Guide: Pattern Class - HTML (New Window)")

-   [*Apex Reference Guide*: Matcher Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm "Apex Reference Guide: Matcher Class - HTML (New Window)")

## Code Examples

```apex
pattern myPattern = pattern.compile('(a(b)?)+'); 
matcher myMatcher = myPattern.matcher('aba');
System.assert(myMatcher.matches() && myMatcher.hitEnd());

// We have two groups: group 0 is always the whole pattern, and group 1 contains 
// the substring that most recently matched--in this case, 'a'. 
// So the following is true:

System.assert(myMatcher.groupCount() == 2 &&
              myMatcher.group(0) == 'aba' && 
              myMatcher.group(1) == 'a');
 
// Since group 0 refers to the whole pattern, the following is true:

System.assert(myMatcher.end() == myMatcher.end(0));

// Since the offset after the last character matched is returned by end, 
// and since both groups used the last input letter, that offset is 3
// Remember the offset starts its count at 0. So the following is also true:

System.assert(myMatcher.end() == 3 && 
              myMatcher.end(0) == 3 && 
              myMatcher.end(1) == 3);
```

```apex
class normalizeEmailAddresses{

    public void hasDuplicatesByDomain(Lead[] leads) {
           // This pattern reduces the email address to 'john@smithco' 
           // from 'john@*.smithco.com' or 'john@smithco.*'
        Pattern emailPattern = Pattern.compile('(?<=@)((?![\\w]+\\.[\\w]+$)
                                               [\\w]+\\.)|(\\.[\\w]+$)');
           // Define a set for emailkey to lead:
        Map<String,Lead> leadMap = new Map<String,Lead>();
                for(Lead lead:leads) {
                    // Ignore leads with a null email
                    if(lead.Email != null) {
                           // Generate the key using the regular expression
                       String emailKey = emailPattern.matcher(lead.Email).replaceAll('');
                           // Look for duplicates in the batch
                       if(leadMap.containsKey(emailKey)) 
                            lead.email.addError('Duplicate found in batch');
                       else {
                           // Keep the key in the duplicate key custom field
                            lead.Duplicate_Key__c = emailKey;
                            leadMap.put(emailKey, lead);
                       }
                 }
             }
                // Now search the database looking for duplicates 
                for(Lead[] leadsCheck:[SELECT Id, duplicate_key__c FROM Lead WHERE 
                duplicate_key__c IN :leadMap.keySet()]) {
               for(Lead lead:leadsCheck) {
               // If there's a duplicate, add the error.
                   if(leadMap.containsKey(lead.Duplicate_Key__c)) 
                      leadMap.get(lead.Duplicate_Key__c).email.addError('Duplicate found 
                         in salesforce(Id: ' + lead.Id + ')');
            }
        }
    }
 }
```
