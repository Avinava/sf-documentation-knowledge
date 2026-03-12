---
title: "Test Reports"
domain: apex-guide
topic: test-reports
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.237Z
estimatedTokens: 289
keywords: [Test, Reports, Apex, code, Salesforce, Dashboards, API, via, requires, coverage]
---

# Test Reports

> Like all Apex code, Salesforce Reports and Dashboards API via Apex code requires test
        coverage.

# Test Reports

Like all Apex code, Salesforce Reports and Dashboards API via Apex code requires test coverage.

The Reporting Apex methods don’t run in system mode, they run in the context of the current user (also called the *context user* or the *logged-in* user). The methods have access to whatever the current user has access to.

In Apex tests, report runs always ignore the SeeAllData annotation, regardless of whether the annotation is set to true or false. This means that report results will include pre-existing data that the test didn’t create. There is no way to disable the SeeAllData annotation for a report execution. To limit results, use a filter on the report.

## Create a Reports Test Class

The following example tests asynchronous and synchronous reports. Each method:

-   Creates a new Opportunity object and uses it to set a filter on the report.
-   Runs the report.
-   Calls assertions to validate the data.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

In Apex tests, asynchronous reports execute only after the test is stopped using the Test.stopTest method.

```

```

## Code Examples

```apex
@isTest
public class ReportsInApexTest{

    @isTest(SeeAllData='true')
    public static void testAsyncReportWithTestData() {

      List <Report> reportList = [SELECT Id,DeveloperName FROM Report where
          DeveloperName = 'Closed_Sales_This_Quarter'];
      String reportId = (String)reportList.get(0).get('Id');
      
      // Create an Opportunity object.
      Opportunity opp = new Opportunity(Name='ApexTestOpp', StageName='stage',
          Probability = 95, CloseDate=system.today());
      insert opp;
    
      Reports.ReportMetadata reportMetadata =
          Reports.ReportManager.describeReport(reportId).getReportMetadata();
      
      // Add a filter.
      List<Reports.ReportFilter> filters = new List<Reports.ReportFilter>(); 
      Reports.ReportFilter newFilter = new Reports.ReportFilter();
      newFilter.setColumn('OPPORTUNITY_NAME');
      newFilter.setOperator('equals');
      newFilter.setValue('ApexTestOpp');
      filters.add(newFilter);
      reportMetadata.setReportFilters(filters);
      
      Test.startTest();
       
      Reports.ReportInstance instanceObj =
          Reports.ReportManager.runAsyncReport(reportId,reportMetadata,false);
      String instanceId = instanceObj.getId();
      
      // Report instance is not available yet.
      Test.stopTest();
      // After the stopTest method, the report has finished executing
      // and the instance is available.
     
      instanceObj = Reports.ReportManager.getReportInstance(instanceId);
      System.assertEquals(instanceObj.getStatus(),'Success');
      Reports.ReportResults result = instanceObj.getReportResults();
      Reports.ReportFact grandTotal = (Reports.ReportFact)result.getFactMap().get('T!T');
      System.assertEquals(1,(Decimal)grandTotal.getAggregates().get(1).getValue());
    }
  
    @isTest(SeeAllData='true')
    public static void testSyncReportWithTestData() {
    
      // Create an Opportunity Object.
      Opportunity opp = new Opportunity(Name='ApexTestOpp', StageName='stage',
          Probability = 95, CloseDate=system.today());
      insert opp;
      
      List <Report> reportList = [SELECT Id,DeveloperName FROM Report where
          DeveloperName = 'Closed_Sales_This_Quarter'];
      String reportId = (String)reportList.get(0).get('Id');
      
      Reports.ReportMetadata reportMetadata =
          Reports.ReportManager.describeReport(reportId).getReportMetadata();
      
      // Add a filter.
      List<Reports.ReportFilter> filters = new List<Reports.ReportFilter>(); 
      Reports.ReportFilter newFilter = new Reports.ReportFilter();
      newFilter.setColumn('OPPORTUNITY_NAME');
      newFilter.setOperator('equals');
      newFilter.setValue('ApexTestOpp');
      filters.add(newFilter);
      reportMetadata.setReportFilters(filters);
      
      Reports.ReportResults result =
          Reports.ReportManager.runReport(reportId,reportMetadata,false); 
      Reports.ReportFact grandTotal = (Reports.ReportFact)result.getFactMap().get('T!T');
      System.assertEquals(1,(Decimal)grandTotal.getAggregates().get(1).getValue());
    }
}
```
