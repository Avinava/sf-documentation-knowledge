---
title: "Get the Fields Available for Retrieval"
domain: mc-apis
topic: get-the-fields-available-for-retrieval
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:22.299Z
estimatedTokens: 1146
keywords: [Retrieval, getting, identify, kind, Retrieve, call, Why, How, Sample, NET, Code, Output, PHP, Items]
---

# Get the Fields Available for Retrieval

> By getting the fields available for retrieval, you can identify what kind of information is returned on a Retrieve call.

# Get the Fields Available for Retrieval

## Why Get the Fields Available for Retrieval

By getting the fields available for retrieval, you can identify what kind of information is returned on a Retrieve call.

## How to Get the Fields Available for Retrieval

The Retrievemethod takes a list of properties to retrieve on a given object. To build a dynamic list of retrievable properties, use the Describe call and filter out the retrievable fields using the IsRetrievable property.

You can use the Describe method to build your integration. However, do not use this call before every Retrieve call. These fairly static nature of these values make frequent retrieval impractical and unnecessary.

### Sample .NET Code

```apex
private void Describe(SoapClient framework)
{
    string requestID;
    ObjectDefinitionRequest objDefs = new ObjectDefinitionRequest();
    objDefs.ObjectType = "SentEvent";
    ObjectDefinition[] definitions = framework.Describe(new ObjectDefinitionRequest[] { objDefs }, out requestID);

    foreach (ObjectDefinition od in definitions)
    {
        Console.WriteLine("***Object Name: " + od.ObjectType + "****");
        foreach (PropertyDefinition pd in od.Properties)
        {
            Console.WriteLine("  Property Name: " + pd.Name);
            Console.WriteLine("  IsRetrievable: " + pd.IsRetrievable.ToString());
        }
        Console.WriteLine("");
    }
}
```

### Sample .NET Output

```
***Object Name: SentEvent****
  Property Name: SendID
  IsRetrievable: True
  Property Name: SubscriberKey
  IsRetrievable: True
  Property Name: EventDate
  IsRetrievable: True
  Property Name: Client.ID
  IsRetrievable: True
  Property Name: EventType
  IsRetrievable: True
  Property Name: BatchID
  IsRetrievable: True
  Property Name: TriggeredSendDefinitionObjectID
  IsRetrievable: True
  Property Name: ListID
  IsRetrievable: True
  Property Name: SubscriberID
  IsRetrievable: True
  Property Name: Client
  IsRetrievable: False
  Property Name: PartnerProperties
  IsRetrievable: False
  Property Name: CreatedDate
  IsRetrievable: False
  Property Name: ModifiedDate
  IsRetrievable: False
  Property Name: ID
  IsRetrievable: False
  Property Name: ObjectID
  IsRetrievable: False
  Property Name: CustomerKey
  IsRetrievable: False
  Property Name: Owner
  IsRetrievable: False
  Property Name: CorrelationID
  IsRetrievable: False
  Property Name: ObjectState
  IsRetrievable: False
  Property Name: IsPlatformObject
  IsRetrievable: False
```

### Sample PHP Code

```
<?php
class ObjectDefinitionClass {

    function getDefintionofObject($objectType){
        $wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
        $lstProps = array();
        try{
                $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
                $client->username = XXXXX;
                $client->password = XXXXX;

                $request = new Marketing Cloud_ObjectDefinitionRequest();
                $request->ObjectType= $objectType;

                $defRqstMsg = new Marketing Cloud_DefinitionRequestMsg();
                $defRqstMsg->DescribeRequests[] =  new SoapVar($request, SOAP_ENC_OBJECT, 'ObjectDefinitionRequest', "http://exacttarget.com/wsdl/partnerAPI");
                /* Call the Retrieve method passing the instantiated Marketing Cloud_RetrieveRequestMsg object */
                $status = $client->Describe($defRqstMsg);
                $results = $status->ObjectDefinition;
                print 'ResultCount: '.count($results)."
";
                print 'ExtendedProperties: '.count($results->ExtendedProperties->ExtendedProperty)."
";
                print 'Properties: '.count($results->Properties)."
";

                if (count($results->Properties) > 0) {

                $properties = $results->Properties;
                foreach( $properties as $letter ){
                    if($letter->IsRetrievable==true){
                        $lstProps[] = $letter->Name;
                    }
                    }
                   // print_r ($lstProps);
        }

           return $lstProps;
        }catch (SoapFault $e) {
            /* output the resulting SoapFault upon an error */
        var_dump($e);
        }
    }
}
try{

    $test = new ObjectDefinitionClass();
    $test->getDefintionofObject("Account");

}catch(Exception $e){
    print $e->__toString();
}
?>
```

## Related Items

-   [Retrieve Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)
-   [Describe Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/describe.htm)

## Related Topics

- Retrieve Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)
- Describe Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/describe.htm)
