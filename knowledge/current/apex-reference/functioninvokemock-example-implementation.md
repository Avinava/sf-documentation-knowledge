---
title: "FunctionInvokeMock Example Implementation"
domain: apex-reference
topic: functioninvokemock-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:42:40.808Z
keywords: [FunctionInvokeMock, Example, Implementation]
---

# FunctionInvokeMock Example Implementation

## FunctionInvokeMock Example Implementation

This is sample implementation of the functions.FunctionInvokeMock interface.

@isTest public class FunctionsInvokeMockImpl implements functions.FunctionInvokeMock { public functions.FunctionInvocation respond(String functionName, String payload) { // return mock success response String invocationId = '000000000000000'; String response = 'mockResponse'; return functions.MockFunctionInvocationFactory.createSuccessResponse(invocationId, response); } }

This example shows the minimal setup required for testing synchronous and asynchronous functions and is simplified to include both function invocations and the FunctionCallback class.

@isTest public class FunctionTest { @isTest  static void testSyncFunctionCall() {         // Set mock class to respond to function invocations      Test.setMock( functions.FunctionInvokeMock.class, new FunctionsInvokeMockInner());         functions.Function mockedFunction = functions.Function.get('example.function');                  Test.startTest(); // Synchronous function call         functions.FunctionInvocation invokeResult = mockedFunction.invoke('{}');         Test.stopTest();         // Verify that the received response contains expected mock values   System.assertEquals(functions.FunctionInvocationStatus.SUCCESS, invokeResult.getStatus());         System.assertEquals('mockResponse', invokeResult.getResponse());         System.assertEquals('000000000000000', invokeResult.getInvocationId());     }     @isTest      static void testAsyncFunctionCall() {         // Set mock class to respond to function invocations         Test.setMock( functions.FunctionInvokeMock.class, new FunctionsInvokeMockInner());                  functions.Function mockedFunction = functions.Function.get('example.function2');                  Test.startTest(); //Asynchronous function invocation with callback         mockedFunction.invoke('{}', new DemoCallback());         Test.stopTest(); // Include assertions here about the expected callback processing             }           public class DemoCallback implements functions.FunctionCallback {         public void handleResponse(functions.FunctionInvocation invokeResult) {             // Handle result of function invocation             // The callback is included in the example here for convenience // It would normally be defined in the classes being tested             // Verify that the received response contains expected mock values System.assertEquals(invokeResult.getStatus(), functions.FunctionInvocationStatus.ERROR);             functions.FunctionInvocationError resultError = invokeResult.getError();          System.assertEquals('bang', invokeResult.getError().getMessage());          System.assertEquals('000000000000000', invokeResult.getInvocationId());         }     }     public class FunctionsInvokeMockInner implements functions.FunctionInvokeMock {         public functions.FunctionInvocation respond(String functionName, String payload) {             // return mock success response             String invocationId = '000000000000000';                           if(functionName == 'example.function2') {                 return functions.MockFunctionInvocationFactory.createErrorResponse(                     invocationId,                     functions.FunctionErrorType.FUNCTION\_EXCEPTION,                     'bang');             }                          String response = 'mockResponse';             return functions.MockFunctionInvocationFactory.createSuccessResponse(invocationId, response);                }     } }