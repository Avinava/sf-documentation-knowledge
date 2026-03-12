---
title: "RemoteKeyCalloutEvent"
domain: platform-events
topic: remotekeycalloutevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:29.157Z
estimatedTokens: 1359
keywords: [RemoteKeyCalloutEvent, Notifies, subscribers, callouts, fetch, encrypted, key, material, customer, endpoint, API, versions, 45.0, later, Calls]
---

# RemoteKeyCalloutEvent

> Notifies subscribers of callouts that fetch encrypted key material
         from a customer endpoint. This object is available in API versions 45.0 and
      later.

# RemoteKeyCalloutEvent

Notifies subscribers of callouts that fetch encrypted key material from a customer endpoint. This object is available in API versions 45.0 and later.

The RemoteKeyCalloutEvent captures events related to the success or failure of a callout that fetches encrypted key material from an end point. Based on the Platform Events framework, a RemoteKeyCalloutEvent is published every time a callout is made to an external key service. This event lets you monitor your cache-only key callouts in real time, and receive alerts about any errors that might occur. You can subscribe to events with after insert Apex triggers and store events in custom objects, security information event management (SIEM), or other back-end systems.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/RemoteKeyCalloutEvent

## Special Access Rules

Access to RemoteKeyCalloutEvent data requires purchasing Salesforce Shield or Shield Platform Encryption. The RemoteKeyCalloutEvent only applies to callouts that fetch cache-only key material.

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| Details | TypetextareaPropertiesNillableDescriptionA JSON representation with more information about the StatusCode. Not all status codes (for example, SUCCESS) show a populated Details field. Populated Details fields include key-value pairs that you can use to make Apex triggers and other programmatic assertions. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| ReplayID | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionWhen Replay Detection for Cache-Only Keys is enabled, a unique marker automatically generated and sent with every callout. This marker includes the key identifier, a nonce generated for that callout instance, and the nonce required from the endpoint.Available in API version 45.0 and later. |
| StatusCode | TypepicklistPropertiesNillable, Restricted picklistDescriptionA code that characterizes the error. The full list of status codes is available in the WSDL file for your org. |
| TenantSecretID | TypereferencePropertiesNillableDescriptionThe record ID of the tenant secret associated with the published event. |

## Usage

To view a RemoteKeyCalloutEvent and perform custom actions after your callout, create an after insert Apex trigger in Dev Console. These triggers let you assign custom actions for your event. You can set in-app alerts and send email alerts to people who maintain your key service, including users who don’t have a Salesforce login.

For longer-term monitoring, you can store RemoteKeyCalloutEvent data in custom objects and custom fields, SIEM, or other back-end systems. Then use business rules to send alerts. For example, you can set an alert that sends admins an email when something is wrong with a key service.

Here’s an example of an after insert trigger that stores RemoteKeyCalloutEvent results in a custom object called Key Service Callout Log. The custom object also draws data from the TenantSecret object.

| Field Label | Field Name | Data Type |
| --- | --- | --- |
| Key Service Callout Log ID | Name | Auto Number |
| Details | Details__c | Text(255) |
| Replay Detection | Replay_Detection__c | Text (255) |
| Status Code | Status_Code__c | Text(255) |
| Tenant Secret Id | Tenant_Secret_Id__c | Text(50) |
| Tenant Secret Status | Tenant_Secret_Status__c | Text(255) |
| Type | Type__c | Text(100) |
| Version | Version__c | Number(10,0) |

If you use this trigger sample, adjust the field API names to suit your needs.

```

```

Then, you can use this test case to verify that the trigger is working

```

```

To troubleshoot callout errors, review the StatusCode and Details fields. These fields give you information about remote key callout errors or exceptions in raw JSON format. Successful, empty callout, and timeout responses return empty Details fields.

#### See Also

-   [*Apex Developer Guide*: Triggers](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_triggers.htm "Apex Developer Guide: Triggers - HTML (New Window)")

-   [*Apex Developer Guide*: Add an Apex Trigger](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_qs_trigger.htm "Apex Developer Guide: Add an Apex Trigger - HTML (New Window)")

-   [*SOAP API Developer Guide*: Custom Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_objects_custom_objects.htm "
    SOAP API Developer Guide: Custom Objects - HTML (New Window)")

-   [*Salesforce Help:* Cache-Only Key Service](https://help.salesforce.com/articleView?id=security_pe_byok_cache.htm&language=en_US "
    Salesforce Help: Cache-Only Key Service  - HTML (New Window)")

## Code Examples

```apex
trigger RemoteKeyCalloutEvent on RemoteKeyCalloutEvent (after insert){ 
    List<Key_Service_Callout_Log__c> l = new List<Key_Service_Callout_Log__c>();
    Set<ID> TenantSecretIds = new Set<ID>();
    Map<ID, TenantSecret> TenantSecrets;
    for(RemoteKeyCalloutEvent event : Trigger.new){
        if(event.TenantSecretId != null && !TenantSecretIds.contains(event.TenantSecretId))
            TenantSecretIds.add(event.TenantSecretId);
    }
    if(TenantSecretIds != null && !TenantSecretIds.isEmpty())
      TenantSecrets = new Map<ID, TenantSecret>([SELECT Type, Version, Status FROM TenantSecret where Id In: TenantSecretIds]);
    
    for(RemoteKeyCalloutEvent event : Trigger.new){
        Key_Service_Callout_Log__c log = new Key_Service_Callout_Log__c();
      log.Status_Code__c = event.StatusCode;
        log.Tenant_Secret_ID__c = event.TenantSecretId;
          log.Replay_Detection__c = event.RequestIdentifier;
      log.Details__c = event.Details;
        if(TenantSecrets != null && TenantSecrets.containsKey(event.TenantSecretId)){
            log.Type__c = TenantSecrets.get(event.TenantSecretId).Type;
            log.Version__c = TenantSecrets.get(event.TenantSecretId).Version;
            log.Tenant_Secret_Status__c = TenantSecrets.get(event.TenantSecretId).Status;
        }
        l.add(log);
    }
    
    insert l;
}
```

```apex
@IsTest
public class without sharing TestRemoteKey { //important: do not enforce sharing
  @IsTest
  public static void myUnitMethod1(){
    List<RemoteKeyCalloutEvent> eList = new List<RemoteKeyCalloutEvent>();
    List<TenantSecret> tsList = [Select Id, Type, Status From TenantSecret];
    for(TenantSecret ts : tsList){
      RemoteKeyCalloutEvent e = new RemoteKeyCalloutEvent();
      e.TenantSecretId = ts.Id;
      e.RequestIdentifier = '22222'+ts.Id;
      e.StatusCode = 'SUCCESS';
      eList.add(e);
    }
    Test.startTest();
    try {
       EventBus.publish(eList);
      Test.getEventBus().deliver();
      System.debug('delivered... ');
    } catch(Exception ex) {
      System.debug(ex.getMessage());
      Boolean expectedExceptionThrown = ex.getMessage().contains('New Event Cannot be Created') ? true : false;
      System.AssertEquals(expectedExceptionThrown, true);        
    }
```
