---
title: "ApexTestQueueItem"
domain: tooling-api
topic: apextestqueueitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.665Z
estimatedTokens: 968
keywords: [ApexTestQueueItem, Represents, single, Apex, job, queue., API, version, 30.0, later., Supported, SOAP, Calls, REST, HTTP, Fields, Usage, Note]
---

# ApexTestQueueItem

> Represents a single Apex class in the Apex job queue. Available
      in API version 30.0 and later.

# ApexTestQueueItem

Represents a single Apex class in the Apex job queue. Available in API version 30.0 and later.

## Supported SOAP API Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

Query, GET, POST, PATCH

## Fields

| Field Name | Details |
| --- | --- |
| ApexClassId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Apex class whose tests are to be executed.This field can't be updated. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the test. Valid values are:QueuedProcessingAbortedCompletedFailedPreparingHoldingTo abort a class that is in the Apex job queue, perform an update operation on the ApexTestQueueItem object and set its Status field to Aborted. |
| ExtendedStatus | TypestringPropertiesFilter, Nillable, SortDescriptionThe pass rate of the test run.For example: “(4/6)”. This means that four out of a total of six tests passed.If the class fails to execute, this field contains the cause of the failure. |
| ParentJobId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRead-only. Points to the AsyncApexJob that represents the entire test run.If you insert multiple Apex test queue items in a single bulk operation, the queue items will share the same parent job. This means that a test run can consist of the execution of the tests of several classes if all the test queue items are inserted in the same bulk operation. |
| ShouldSkipCodeCoverage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to opt out of collecting code coverage information during Apex test runs. Available in API version 43.0 and later. |
| TestRunResultID | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the associated ApexTestRunResult object. Available in API version 37.0 and later. |

## Usage

Insert an ApexTestQueueItem object to place its corresponding Apex class in the Apex job queue for execution. The Apex job executes the test methods in the class.

The example RunTestListener.java class subscribes to the TestResult system topic and prints out the test results using ApexTestQueueItem and ApexTestResult. The example makes these assumptions:

-   You have already set up a Java client application for Streaming API. This example uses the org.cometd.client.BayeuxClient created in the Java Client code example in the [*Streaming API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/).
-   You have a logged in com.sforce.soap.tooling.SoapConnection. For examples, see the [*SOAP API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/).
-   The logged-in user has the View All Data permission to subscribe to the TestResult system topic, /systemTopic/TestResult.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Instead of Streaming API, you can use Pub/Sub API to subscribe to events. Based on gRPC API and HTTP/2, Pub/Sub API delivers binary event messages in the Apache Avro format and is more efficient than Streaming API. See the [Pub/Sub API Documentation](https://developer.salesforce.com/docs/platform/pub-sub-api/overview "HTML (New Window)").

As an alternative to using ApexTestQueueItem, you can run test methods using the Salesforce CLI commands. See [Run Apex Tests](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_testing.htm "HTML (New Window)") in the Salesforce DX Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

The RunTestListener.java class must be instantiated after the Streaming API handshake. For example:

```

```

```

```

## Code Examples

```apex
SoapConnection toolingConn; //Already set and logged in
BayeuxClient client; //Already set and logged in

//Listen on the handshake event 
boolean handshaken = client.waitFor(10 * 1000, BayeuxClient.State.CONNECTED); 
if (!handshaken) {
   System.out.println("Failed to handshake: " + client); 
   System.exit(1); 
} 
final RunTestListener = null; 
client.getChannel(Channel.META_SUBSCRIBE).addListener( 
   new ClientSessionChannel.MessageListener() { 
      public void onMessage(ClientSessionChannel channel, Message message) { 
         boolean success = message.isSuccessful(); 
         if (success) { 
            //Replace with your own classes and suites
            String apexTestClassId1 = "01pD00000007M0CIAU"; 
            String apexTestClassId2 = "01pD00000007NqtIAE";
            String apexTestSuiteId1 = "05FD00000004CDBMA2";
            String apexTestClassName1 = "Test_MyClass";
            String apexTestSuiteName1 = "TestSuite_MySuite";
            listener.runTests(new String[]{apexTestClassId1, apexTestClassId2},
               new String[]{apexTestSuiteId1}, 1, new String[]{apexTestClassName1},
               new String[]{apexTestSuiteName1});
         }
      }
   };
);
//This will subscribe to the TestRun system topic 
listener = new RunTestListener(client, toolingConn);
```

```apex
import java.util.HashMap;
import org.apache.commons.lang3.StringUtils;
import org.cometd.bayeux.Message;
import org.cometd.bayeux.client.ClientSessionChannel;
import org.cometd.bayeux.client.ClientSessionChannel.MessageListener;
import org.cometd.client.BayeuxClient;

import com.sforce.soap.tooling.ApexTestQueueItem;
import com.sforce.soap.tooling.ApexTestResult;
import com.sforce.soap.tooling.QueryResult;
import com.sforce.soap.tooling.SObject;
import com.sforce.soap.tooling.SoapConnection;
import com.sforce.soap.tooling.TestLevel;
import com.sforce.ws.ConnectionException;

public class RunTestListener {
   private static final String CHANNEL = "/systemTopic/TestResult";
   private SoapConnection conn;

   public RunTestListener(BayeuxClient client, SoapConnection conn) {
      this.conn = conn;  
      System.out.println("Subscribing for channel: " + CHANNEL);  
      client.getChannel(CHANNEL).subscribe(new MessageListener() {   
         @Override
         public void onMessage(ClientSessionChannel channel, Message message) {    
            HashMap data = (HashMap) message.getData();    
            HashMap sobject = (HashMap) data.get("sobject");    
            String id = (String) sobject.get("Id");    
            System.out.println("
AysncApexJob " + id);    
            getTestQueueItems(id);
         }
     }); 
   }

   public void runTests(String[] apexTestClassIds, String[] apexTestSuiteIds,
      Integer maxFailedTests, String[] apexTestClassNames, String[] apexTestSuiteNames) {

      // All parameters are required

      if (apexTestClassIds == null && apexTestSuiteIds == null
         && apexTestClassNames == null && apexTestSuiteNames == null) {
         System.out.println("No tests to run");
         return;
      }
      String classIds = StringUtils.join(apexTestClassIds,", ");
      String suiteIds = StringUtils.join(apexTestSuiteIds,", ");
      String classNames = StringUtils.join(apexTestClassNames,", ");
      String suiteNames = StringUtils.join(apexTestSuiteNames,", ");

      String tests = null;
      Boolean skipCodeCover = false;

      try {
         System.out.println("Running async test run");
         conn.runTestsAsynchronous(classIds, suiteIds, maxFailedTests,
            TestLevel.RunSpecifiedTests, classNames, suiteNames, tests, skipCodeCover);
      } catch (ConnectionException e) {
         e.printStackTrace();
      }
   }
   public void createAndRunTestsNode(String apexTestClassName,
      String apexTestClassId, String[] apexTestMethods) {

      //Currently, the array size of TestNode objects must be 1

      //Provide a non-null class name or a non-null class ID
      if (apexTestClassName != null && apexTestClassId != null) {
         System.out.println("Specify a class name OR a class ID");
         return;
      } else if (apexTestClassName == null && apexTestClassId == null) {
         System.out.println("No tests to run");
         return;
      }

      TestsNode thisTestsNode = new TestsNode();
      thisTestsNode.setClassName(apexTestClassName);
      thisTestsNode.setClassId(apexTestClassId);
      thisTestsNode.setTestMethods(apexTestMethods);
      TestsNode[] tests = new TestsNode[] { thisTestsNode };

      try {
         System.out.println("Running async test run");
         conn.runTestsAsynchronous(null, null, -1, null, null, null, tests);
      } catch (ConnectionException e) {
         e.printStackTrace();
      }
   }

   private void getTestQueueItems(String asyncApexJobId) {
      try {   
         QueryResult res = conn     
            .query("SELECT Id, Status, ApexClassId FROM ApexTestQueueItem
               WHERE ParentJobId = '" + asyncApexJobId + "'");
         if (res.getSize() > 0) {
            for (SObject o : res.getRecords()) {     
               ApexTestQueueItem atqi = (ApexTestQueueItem) o;     
               System.out.println("\tApexTestQueueItem - "+atqi.getStatus());
               if (atqi.getStatus().equals("Completed")) {      
                  getApexTestResults(atqi.getId());     
               }    
            }   
         } else {    
            System.out.println("No queued items for " + asyncApexJobId);  
         }  
      } catch (ConnectionException e) {   
         e.printStackTrace();  
      } 
   }

   private void getApexTestResults(String apexTestQueueItemId) {
      try {   
         QueryResult res = conn     
            .query("SELECT StackTrace,Message, AsyncApexJobId,MethodName, Outcome,ApexClassId
               FROM ApexTestResult WHERE QueueItemId = '" + apexTestQueueItemId + "'");
         if (res.getSize() > 0) {
            for (SObject o : res.getRecords()) {     
               ApexTestResult atr = (ApexTestResult) o;     
               System.out.println("\tTest result for "       
                  + atr.getApexClassId() + "." + atr.getMethodName());     
               String msg = atr.getOutcome().equals("Fail") ? " - "       
                  + atr.getMessage() + " " + atr.getStackTrace() : "";     
               System.out.println("\t\tTest " + atr.getOutcome() + msg);    
            }   
         } else {    
            System.out.println("No Test Results for " + apexTestQueueItemId);   
         }  
      } catch (ConnectionException e) {
          e.printStackTrace();  
      } 
   }
}
```

## Related Topics

- ApexTestRunResult (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestrunresult.htm)
