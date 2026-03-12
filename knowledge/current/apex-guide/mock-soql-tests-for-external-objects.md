---
title: "Mock SOQL Tests for External Objects"
domain: apex-guide
topic: mock-soql-tests-for-external-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.012Z
estimatedTokens: 289
keywords: [Mock, SOQL, Tests, External, Objects, query, responses, Apex, testing, stub, new, test, basic, joined, queries]
---

# Mock SOQL Tests for External Objects

> You can mock SOQL query responses for external objects in Apex testing by using SOQL stub
        methods and a new test class. Use basic and joined SOQL queries against external objects and
        return mock records in a testing context.

# Mock SOQL Tests for External Objects

You can mock SOQL query responses for external objects in Apex testing by using SOQL stub methods and a new test class. Use basic and joined SOQL queries against external objects and return mock records in a testing context.

Create mock test classes by extending the new System.SoqlStubProvider class and overriding the handleSoqlQuery() class method. Create external object records using either Test.createStubQueryRow() or Test.createStubQueryRows(). Register the mock provider in the test using Test.createSoqlStub() and execute the test code.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex governor limits apply to the stubbed records.

The SOQL query must be against an external object, either directly with a FROM clause or via a subquery. These features aren’t allowed within a stub implementation.

-   SOQL
-   SOSL
-   Callouts
-   Future methods
-   Queueable Jobs
-   Batch Jobs
-   DML
-   Platform events

This example shows a mock test class for the GithubIssueTest class with joined and basic queries.

```

```

```

```

```

```

```

```

## Code Examples

```apex
/**
 *   Test class that utilizes the SoqlStubProvider classes.
 *   Each test sets the appropriate SoqlStubProvider
 *   and runs validation against the mocked query results.
 **/

@isTest
public class GithubIssueTest {
    @isTest
    static void testGithubIssueQuery() {
        QueryIssueUtil queryIssueUtil = new QueryIssueUtil();
        SObjectType type = queryIssueUtil.getSObjectTypeForDynamicSoql('GithubIssues__x');
        Test.createSoqlStub(type, new IssueStubProvider());
        Test.startTest();
        Assert.isTrue(Test.isSoqlStubDefined(type));
        Assert.isTrue(queryIssueUtil.queryGithubIssuesAndCheckForId());
        Assert.areEqual(Limits.getQueries(), 1);
        Assert.areEqual(Limits.getQueryRows(), 1);
        Assert.areEqual(Limits.getAggregateQueries(), 0);
        Assert.isTrue(queryIssueUtil.queryGithubIssuesAndVerifyResultSize(1));
        Assert.areEqual(Limits.getQueries(), 2);
        Assert.areEqual(Limits.getQueryRows(), 2);
        Assert.areEqual(Limits.getAggregateQueries(), 0);
        Test.stopTest();
    }

    @isTest
    static void testIssueToCommentJoinQuery() {
        QueryIssueUtil queryIssueUtil = new QueryIssueUtil();
        Test.createSoqlStub(GithubIssues__x.SObjectType, new IssueCommentJoinStubProvider());
        Test.startTest();
        Assert.isTrue(Test.isSoqlStubDefined(GithubIssues__x.SObjectType));
        Assert.isTrue(queryIssueUtil.queryIssueToCommentJoinAndCheckForCommentId());
        Assert.areEqual(Limits.getQueries(), 1);
        Assert.areEqual(Limits.getQueryRows(), 3);
        Assert.areEqual(Limits.getAggregateQueries(), 1);
        Assert.isTrue(queryIssueUtil.queryIssueToCommentJoinAndVerifyResultSize(1, 2));
        Assert.areEqual(Limits.getQueries(), 2);
        Assert.areEqual(Limits.getQueryRows(), 6);
        Assert.areEqual(Limits.getAggregateQueries(), 2);
        Test.stopTest();
    }
}
```

```apex
/**
 *   SoqlStubProvider class that returns a mocked query result
 *   for joined queries between the Github Issues object and
 *   the associated Comments object.
 **/

public class IssueCommentJoinStubProvider extends SoqlStubProvider {
    public override List<SObject> handleSoqlQuery(SObjectType sobjectType, String rawQuery, Map<String,Object> binds) {
        if (sobjectType.equals(GithubIssues__x.SObjectType)) {
            Assert.areEqual(binds.size(), 0);

            List<GithubIssues__x> issues = new List<GithubIssues__x>();
            List<Map<String,Object>> commentMaps = new List<Map<String,Object>>();

            Map<String, Object> comment1 = new Map<String, Object> {
                'Id' => 'x09xx000000brk9AAA'
            };
            Map<String, Object> comment2 = new Map<String, Object> {
                'Id' => 'x09xx000001brk9AAA'
            };

            commentMaps.add(comment1);
            commentMaps.add(comment2);

            List<IssueComments__x> comments = (List<IssueComments__x>) Test.createStubQueryRows(IssueComments__x.SObjectType, commentMaps);

            Map<String, Object> issueMap = new Map<String, Object> {
                'Id' => 'x08xx000002HNZ6AAO',
                'Title__c' => 'Sample Issue 1',
                'IssueComments__r' => comments
            };

            GithubIssues__x obj = (GithubIssues__x) Test.createStubQueryRow(sobjectType, issueMap);

            issues.add(obj);
            return issues;
        }
        return null;
    }
}
```

```apex
/**
 *   SoqlStubProvider class that returns a mocked query result
 *   for queries against the Github Issues object.
 **/

public class IssueStubProvider extends SoqlStubProvider {
    public override List<SObject> handleSoqlQuery(SObjectType sobjectType, String rawQuery, Map<String,Object> binds) {
        if (sobjectType.equals(GithubIssues__x.SObjectType)) {
        Assert.areEqual(binds.size(), 1);
        Assert.areEqual(binds.get('tmpVar1'), 'x08xx000002HNZ6AAO');

            List<SObject> objs = new List<SObject>();
            Map<String, Object> individualMap = new Map<String, Object> {
                'Id' => 'x08xx000002HNZ6AAO'
            };
            GithubIssues__x obj = (GithubIssues__x) Test.createStubQueryRow(sobjectType, individualMap);
            objs.add(obj);
            return objs;
        }
        return null;
    }
}
```

```apex
/**
 *   Utility class that runs queries to be mocked 
 *   in the Apex tests.  
 **/

public class QueryIssueUtil {
    public boolean queryGithubIssuesAndCheckForId() {
        // BINDS WITH USER_MODE DYNAMIC QUERY
        Map<String, Object> binds = new Map<String, Object>{'tmpVar1' => 'x08xx000002HNZ6AAO'};
        List<GithubIssues__x> issues = Database.queryWithBinds('SELECT Id FROM GithubIssues__x WHERE Id  = :tmpVar1', binds, AccessLevel.USER_MODE);

        for (GithubIssues__x issue : issues ) {
            if (issue.Id.equals('x08xx000002HNZ6AAO')) {
                return true;
            }
        }
        return false;
    }

    public boolean queryGithubIssuesAndVerifyResultSize(Integer size) {
        // BINDS WITH SYSTEM_MODE STATIC QUERY
        String issueId = 'x08xx000002HNZ6AAO';
        List<GithubIssues__x> issues = [SELECT Id FROM GithubIssues__x WHERE Id  = :issueId];
        if(issues.size() == size) {
            return true;
        }
            return false;
    }

    public boolean queryIssueToCommentJoinAndCheckForCommentId() {
        // DYNAMIC QUERY
        List<GithubIssues__x> issues = Database.query('SELECT Id, Title__c, (SELECT Id FROM IssueComments__r) FROM GithubIssues__x WHERE Id = \'003000000000000\'');


        for (GithubIssues__x issue : issues) {
            List<IssueComments__x> comments = issue.IssueComments__r;
            System.debug(comments);
            if(!comments.get(0).Id.equals('x09xx000000brk9AAA') && !comments.get(1).Id.equals('x09xx000001brk9AAA'))return false;
        }
        return true;
    }

    public boolean queryIssueToCommentJoinAndVerifyResultSize(Integer parentSize, Integer childSize) {
        // STATIC QUERY
        List<GithubIssues__x> issues = [SELECT Id, Title__c, (SELECT Id FROM IssueComments__r) FROM GithubIssues__x WHERE Id = '003000000000000'];

        if(issues.size() == parentSize && issues.get(0).IssueComments__r.size() == childSize) {
            return true;
        }
        return false;
    }

    public SObjectType getSObjectTypeForDynamicSoql(String name) {
        Schema.DescribeSObjectResult[] descResult = Schema.describeSobjects(new List<String>{name});
        SObjectType type = descResult.get(0).getSobjectType();
        return type;
    }
}
```
