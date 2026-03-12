---
title: "ConnectorTestUtil Class"
domain: apex-reference
topic: connectortestutil-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.878Z
estimatedTokens: 504
namespace: UserProvisioning
keywords: [ConnectorTestUtil, developers, write, Apex, test, classes, connectors, connected, app, provisioning, solution, simulates, associated, Usage, createConnectedApp]
---

# ConnectorTestUtil Class

> Enables developers to write Apex test classes for connectors used by
      the connected app provisioning solution. This class simulates provisioning for the associated
      app.

**Namespace:** `UserProvisioning`

# ConnectorTestUtil Class

Enables developers to write Apex test classes for connectors used by the connected app provisioning solution. This class simulates provisioning for the associated app.

## Namespace

[UserProvisioning](atlas.en-us.apexref.meta/apexref/apex_namespace_UserProvisioning.htm "The UserProvisioning namespace provides methods for monitoring outbound user provisioning requests.")

## Usage

Use this class for connector-based test accelerators. You can invoke it only from within an Apex test.

## Example

This example creates an instance of a connected app, gets a value, and checks whether the value is correct. The test is simply a row inserted in the database table.

```

```

-   **[ConnectorTestUtil Method](atlas.en-us.apexref.meta/apexref/apex_class_UserProvisioning_ConnectorTestUtil.htm#apex_UserProvisioning_ConnectorTestUtil_methods)**


#### See Also

-   [*Salesforce Help*: User Provisioning for Connected Apps](https://help.salesforce.com/articleView?id=connected_app_user_provisioning.htm&language=en_US "Salesforce Help: User Provisioning for Connected Apps - html (New Window)")


## ConnectorTestUtil Method

The ConnectorTestUtil class has 1 method.

-   **[createConnectedApp(connectedAppName)](atlas.en-us.apexref.meta/apexref/apex_class_UserProvisioning_ConnectorTestUtil.htm#apex_UserProvisioning_ConnectorTestUtil_createConnectedApp)**
    Creates an instance of a connected app to simulate provisioning.

### createConnectedApp(connectedAppName)

Creates an instance of a connected app to simulate provisioning.

#### Signature

public static ConnectedApplication createConnectedApp(String connectedAppName)

#### Parameters

connectedAppName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the connected app to test for provisioning.

#### Return Value

Type: ConnectedApplication

The instance of the connected app to test for provisioning.

## Code Examples

```apex
@isTest 
        private class SCIMCreateUserPluginTest {
        public static void callPlugin(Boolean validInputParams) {
        
        //Create an instance of a connected app
        ConnectedApplication capp =UserProvisioning.ConnectorTestUtil.createConnectedApp('TestApp');
        Profile p = [SELECT Id FROM Profile WHERE Name='Standard User'];
        //Create a user
        User user = new User(username='testuser1@scimuserprov.test', Firstname= 'Test', Lastname='User1', email='testuser1@testemail.com',
        FederationIdentifier='testuser1@testemail.com', profileId= p.Id, communityNickName='tuser1', alias='tuser', TimeZoneSidKey='GMT', 
        LocaleSidKey='en_US', EmailEncodingKey='ISO-8859-1', LanguageLocaleKey='en_US');
        //insert user into a row in the database table
        insert user;
        //Create a UPR
        UserProvisioningRequest upr = new UserProvisioningRequest(appname = capp.name, connectedAppId=capp.id, operation='Create', 
        state='New', approvalStatus='NotRequired',salesforceUserId=user.id);
        
        //Insert the UPR to test the flow end to end
        insert upr;
       }}
```

## Related Topics

- UserProvisioning (atlas.en-us.apexref.meta/apexref/apex_namespace_UserProvisioning.htm)
- ConnectorTestUtil Method (atlas.en-us.apexref.meta/apexref/apex_class_UserProvisioning_ConnectorTestUtil.htm)
- createConnectedApp(connectedAppName) (atlas.en-us.apexref.meta/apexref/apex_class_UserProvisioning_ConnectorTestUtil.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
