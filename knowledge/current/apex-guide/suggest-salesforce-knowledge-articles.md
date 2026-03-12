---
title: "Suggest Salesforce Knowledge Articles"
domain: apex-guide
topic: suggest-salesforce-knowledge-articles
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.423Z
estimatedTokens: 298
keywords: [Suggest, Salesforce, Knowledge, Articles, Provide, users, shortcuts, navigate, relevant, articles, before, they, perform, search., Call, Search.suggest, searchText, objectType, options, list]
---

# Suggest Salesforce Knowledge Articles

> Provide users with shortcuts to navigate to relevant articles before they perform a
        search. Call Search.suggest(searchText, objectType,
            options) to return a list of Salesforce Knowledge articles whose titles match a
        user’s search query string.

# Suggest Salesforce Knowledge Articles

Provide users with shortcuts to navigate to relevant articles before they perform a search. Call Search.suggest(searchText, objectType, options) to return a list of Salesforce Knowledge articles whose titles match a user’s search query string.

To return suggestions, enable Salesforce Knowledge. See [Salesforce Knowledge Implementation Guide](https://resources.docs.salesforce.com/260/latest/en-us/sfdc/pdf/salesforce_knowledge_implementation_guide.pdf "Adobe Acrobat PDF (New Window)") for more information on setting up Salesforce Knowledge.

This Visualforce page has an input field for searching articles or accounts. When the user presses the Suggest button, suggested records are displayed. If there are more than five results, the More results button appears. To display more results, click the button.

```

```

This code is the custom Visualforce controller for the page:

```

```

#### See Also

-   [Search.suggest(searchQuery,sObjectType,suggestions)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_search.htm "Search.suggest(searchQuery,sObjectType,suggestions) - HTML (New Window)")

## Code Examples

```
<apex:page controller="SuggestionDemoController">
    <apex:form >
        <apex:pageBlock mode="edit" id="block">
            <h1>Article and Record Suggestions</h1>
            <apex:pageBlockSection >
                <apex:pageBlockSectionItem >
                    <apex:outputPanel >
                        <apex:panelGroup >
                            <apex:selectList value="{!objectType}" size="1">
                                <apex:selectOption itemLabel="Account" itemValue="Account" />
                                <apex:selectOption itemLabel="Article" itemValue="KnowledgeArticleVersion" />
                                <apex:actionSupport event="onchange" rerender="block"/>
                            </apex:selectList>
                        </apex:panelGroup>
                        <apex:panelGroup >
                            <apex:inputHidden id="nbResult" value="{!nbResult}" />
                            <apex:outputLabel for="searchText">Search Text</apex:outputLabel>
                            &nbsp;
                            <apex:inputText id="searchText" value="{!searchText}"/>
                            <apex:commandButton id="suggestButton" value="Suggest" action="{!doSuggest}" 
                                                rerender="block"/>
                            <apex:commandButton id="suggestMoreButton" value="More results..." action="{!doSuggestMore}" 
                                                rerender="block" style="{!IF(hasMoreResults, '', 'display: none;')}"/>
                        </apex:panelGroup>
                    </apex:outputPanel>
                </apex:pageBlockSectionItem>
            </apex:pageBlockSection>
            <apex:pageBlockSection title="Results" id="results" columns="1" rendered="{!results.size>0}">
                <apex:dataList value="{!results}" var="w" type="1">
                    Id: {!w.SObject['Id']}
                    <br />
                    <apex:panelGroup rendered="{!objectType=='KnowledgeArticleVersion'}">
                        Title: {!w.SObject['Title']}
                    </apex:panelGroup>
                    <apex:panelGroup rendered="{!objectType!='KnowledgeArticleVersion'}">
                        Name: {!w.SObject['Name']}
                    </apex:panelGroup>
                    <hr />
                </apex:dataList>
            </apex:pageBlockSection>
            <apex:pageBlockSection id="noresults" rendered="{!results.size==0}">
                No results
            </apex:pageBlockSection>
            <apex:pageBlockSection rendered="{!LEN(searchText)>0}">
                Search text: {!searchText}
            </apex:pageBlockSection>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```

```apex
public class SuggestionDemoController {
    
    public String searchText;
    public String language = 'en_US';
    public String objectType = 'Account';
    public Integer nbResult = 5;
    public Transient Search.SuggestionResults suggestionResults;

    public String getSearchText() {
        return searchText;
    }

    public void setSearchText(String s) {
        searchText = s;
    }
    
    public Integer getNbResult() {
        return nbResult;
    }

    public void setNbResult(Integer n) {
        nbResult = n;
    }
    
    public String getLanguage() {
        return language;
    }
    
    public void setLanguage(String language) {
        this.language = language;
    }
            
    public String getObjectType() {
        return objectType;
    }
    
    public void setObjectType(String objectType) {
        this.objectType = objectType;
    }

    public List<Search.SuggestionResult> getResults() {
        if (suggestionResults == null) {
            return new List<Search.SuggestionResult>();
        }
        
        return suggestionResults.getSuggestionResults();
    }
    
    public Boolean getHasMoreResults() {
        if (suggestionResults == null) {
            return false;
        }
        return suggestionResults.hasMoreResults();
    }
    
    public PageReference doSuggest() {
        nbResult = 5;
        suggestAccounts();
        return null;
    }
    
    public PageReference doSuggestMore() {
        nbResult += 5;
        suggestAccounts();
        return null;
    }
    
    private void suggestAccounts() {
        Search.SuggestionOption options = new Search.SuggestionOption();
        Search.KnowledgeSuggestionFilter filters = new Search.KnowledgeSuggestionFilter();
        if (objectType=='KnowledgeArticleVersion') {
            filters.setLanguage(language);
            filters.setPublishStatus('Online');
        }
        options.setFilter(filters);
        options.setLimit(nbResult);
        suggestionResults = Search.suggest(searchText, objectType, options);
    }
}
```
