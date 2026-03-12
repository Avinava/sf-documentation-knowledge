---
title: "Testing ConnectApi Code"
domain: apex-guide
topic: testing-connectapi-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.272Z
estimatedTokens: 620
keywords: [Testing, ConnectApi, Code, Apex, Connect, requires, test, coverage]
---

# Testing ConnectApi Code

> Like all Apex code, Connect in Apex code requires test coverage.

# Testing ConnectApi Code

Like all Apex code, Connect in Apex code requires test coverage.

Connect in Apex methods don’t run in system mode, they run in the context of the current user (also called the *context user*). The methods have access to whatever the context user has access to. Connect in Apex doesn’t support the runAs system method.

Most Connect in Apex methods require access to real org data, and fail unless used in test methods marked @IsTest(SeeAllData=true).

However, some Connect in Apex methods, such as getFeedElementsFromFeed, are not permitted to access org data in tests and must be used with special test methods that register outputs to be returned in a test context. If a method requires a setTest method, the requirement is stated in the method’s “Usage” section.

A test method name is the regular method name with a setTest prefix. The test method signature (combination of parameters) matches a signature of the regular method. For example, if the regular method has three overloads, the test method has three overloads.

Using Connect in Apex test methods is similar to testing web services in Apex. First, build the data you expect the method to return. To build data, create output objects and set their properties. To create objects, you can use no-argument constructors for any non-abstract output classes. If you’re testing binary input parameters, use the same instance for creating and executing data.

After you build the data, call the test method to register the data. Call the test method that has the same signature as the regular method you’re testing.

After you register the test data, run the regular method. When you run the regular method, the registered data is returned.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Use the test method signature that matches the regular method signature. If data wasn't registered with the matching set of parameters when you call the regular method, you receive an exception.

This example shows a test that constructs an ConnectApi.FeedElementPage and registers it to be returned when getFeedElementsFromFeed is called with a particular combination of parameters.

```

```

```

```

#### See Also

-   [Testing Apex](atlas.en-us.apexcode.meta/apexcode/apex_testing.htm "Apex provides a testing framework that allows you to write unit tests, run your tests, check test results, and have code coverage results.")

## Code Examples

```apex
global class NewsFeedClass {
    global static Integer getNewsFeedCount() {
        ConnectApi.FeedElementPage elements = 
            ConnectApi.ChatterFeeds.getFeedElementsFromFeed(null,
                ConnectApi.FeedType.News, 'me');
        return elements.elements.size();
    }
}
```

```apex
@isTest
private class NewsFeedClassTest {
    @IsTest
    static void doTest() {
        // Build a simple feed item
        ConnectApi.FeedElementPage testPage = new ConnectApi.FeedElementPage();
        List<ConnectApi.FeedItem> testItemList = new List<ConnectApi.FeedItem>();
        testItemList.add(new ConnectApi.FeedItem());
        testItemList.add(new ConnectApi.FeedItem());
        testPage.elements = testItemList;

        // Set the test data
        ConnectApi.ChatterFeeds.setTestGetFeedElementsFromFeed(null,
            ConnectApi.FeedType.News, 'me', testPage);

        // The method returns the test page, which we know has two items in it.
        Test.startTest();
        System.assertEquals(2, NewsFeedClass.getNewsFeedCount());
        Test.stopTest();
    }
}
```

## Related Topics

- Testing Apex (atlas.en-us.apexcode.meta/apexcode/apex_testing.htm)
