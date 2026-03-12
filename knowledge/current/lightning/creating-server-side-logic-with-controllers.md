---
title: "Creating Server-Side Logic with Controllers"
domain: lightning
topic: creating-server-side-logic-with-controllers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.643Z
estimatedTokens: 1179
keywords: [Creating, Server-Side, Logic, Controllers, framework, supports, client-side, JavaScript, Apex, event, always, wired, controller, action, turn]
---

# Creating Server-Side Logic with Controllers

> The framework supports client-side (JavaScript) and server-side (Apex) controllers. An
    event is always wired to a client-side controller action, which can in turn call an Apex
    controller action. For example, a client-side controller
      might handle an event and call an Apex controller action to persist a record.

# Creating Server-Side Logic with Controllers

The framework supports client-side (JavaScript) and server-side (Apex) controllers. An event is always wired to a client-side controller action, which can in turn call an Apex controller action. For example, a client-side controller might handle an event and call an Apex controller action to persist a record.

Server-side actions make a round trip from the client to the server and back again, so they usually complete more slowly than client-side actions.

For more details on the process of calling a server-side action, see [Calling a Server-Side Action](atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm "Call a server-side controller action from a client-side controller. In the client-side controller, you set a callback, which is called after the server-side action is completed. A server-side action can return any object containing serializable JSON data.").

-   **[Apex Server-Side Controller Overview](atlas.en-us.lightning.meta/lightning/controllers_server_apex.htm)**
    Create a server-side controller in Apex and use the @AuraEnabled annotation to enable access to the controller method.
-   **[AuraEnabled Annotation Annotation](atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm)**
    The AuraEnabled annotation enables Lightning components to access Apex methods and properties.
-   **[Creating an Apex Server-Side Controller](atlas.en-us.lightning.meta/lightning/controllers_server_apex_create.htm)**
    Use the Developer Console to create an Apex server-side controller.
-   **[Using Apex to Work with Salesforce Records](atlas.en-us.lightning.meta/lightning/apex_records.htm)**
    Use Apex only if you need to customize your user interface to do more than what Lightning Data Service allows, such as using a SOQL query to select certain records. Apex provisions data that’s not managed and you must handle data refresh on your own.
-   **[Granting User Access for Apex Classes](atlas.en-us.lightning.meta/lightning/apex_grant_permission.htm)**
    An authenticated or guest user can access an @AuraEnabled Apex method only when the user’s profile or an assigned permission set allows access to the Apex class.
-   **[Securing Data in Apex Controllers](atlas.en-us.lightning.meta/lightning/apex_crud_fls.htm)**
    By default, Apex runs in system mode, which means that it runs with substantially elevated permissions, acting as if the user had most permissions and all field- and object-level access granted. Because these security layers aren’t enforced like they are in the Salesforce UI, you must write code to enforce them. Otherwise, your components may inadvertently expose sensitive data that would normally be hidden from users in the Salesforce UI.
-   **[Calling a Server-Side Action](atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm)**
    Call a server-side controller action from a client-side controller. In the client-side controller, you set a callback, which is called after the server-side action is completed. A server-side action can return any object containing serializable JSON data.
-   **[Queuing of Server-Side Actions](atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm)**
    The framework queues up actions before sending them to the server. Actions are grouped together into batches, and then sent to the server together. This process enables the framework to reduce network traffic by batching multiple actions into fewer, more efficient requests.
-   **[Storable Actions](atlas.en-us.lightning.meta/lightning/controllers_server_storable_actions.htm)**
    Enhance your component’s performance by marking actions as storable (cacheable) to quickly show cached data from client-side storage without waiting for a server trip. If the cached data is stale, the framework retrieves the latest data from the server. Caching is especially beneficial for users on high latency, slow, or unreliable connections such as 3G networks.
-   **[Abortable Actions](atlas.en-us.lightning.meta/lightning/controllers_server_abortable_actions.htm)**
    Mark an action as abortable to make it potentially abortable while it's queued to be sent to the server. An abortable action in the queue is not sent to the server if the component that created the action is no longer valid, that is cmp.isValid() == false. A component is automatically destroyed and marked invalid by the framework when it is unrendered.
-   **[Action Limits and Considerations](atlas.en-us.lightning.meta/lightning/controllers_server_actions_limits.htm)**
    Keep the following limits and other considerations in mind when using server-side actions.

## Related Topics

- Calling a Server-Side Action (atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm)
- Apex Server-Side Controller Overview (atlas.en-us.lightning.meta/lightning/controllers_server_apex.htm)
- AuraEnabled Annotation Annotation (atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm)
- Creating an Apex Server-Side Controller (atlas.en-us.lightning.meta/lightning/controllers_server_apex_create.htm)
- Using Apex to Work with Salesforce Records (atlas.en-us.lightning.meta/lightning/apex_records.htm)
- Granting User Access for Apex Classes (atlas.en-us.lightning.meta/lightning/apex_grant_permission.htm)
- Securing Data in Apex Controllers (atlas.en-us.lightning.meta/lightning/apex_crud_fls.htm)
- Queuing of Server-Side Actions (atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm)
- Storable Actions (atlas.en-us.lightning.meta/lightning/controllers_server_storable_actions.htm)
- Abortable Actions (atlas.en-us.lightning.meta/lightning/controllers_server_abortable_actions.htm)
