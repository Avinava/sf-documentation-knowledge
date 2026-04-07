---
title: "Retrieve Open Events Details"
domain: mc-apis
topic: retrieve-open-events-details
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:18.854Z
estimatedTokens: 2224
keywords: [Retrieve, Open, Events, retrieving, Why, How, Sample, NET, Code, Java, Axis, 1.4, PHP]
---

> This page contains information  about retrieving open events details.

# Retrieve Open Events Details

This page contains information about retrieving open events details.

## Why Retrieve Open Events Details

You can use information about open events to understand who opened specific sends and when the emails were opened.

## How To Retrieve Open Events Details

Use the sample code below as an example to create your own API calls.

### Sample .NET Code

```apex
/**
        * Code to retrieve Open Events, Required Job ID or Triggered Send Object ID. When using
        * Triggered Send Object ID, always include date range to retrieve results.
       */
        public void testOpenEvents()
         {

            RetrieveRequest retrieveRequest = new RetrieveRequest();
            retrieveRequest.ObjectType = "OpenEvent";

            String[] props = {"SendID","EventDate","TriggeredSendDefinitionObjectID","SubscriberKey"};
            retrieveRequest.Properties = props;
            /**
            * Details for single JobId/SendId
            */
            SimpleFilterPart filter = new SimpleFilterPart();
            filter.Property = "SendID";
            String[] vlaues = { "6785559 " };
            filter.Value = vlaues;
            retrieveRequest.Filter = filter;
            /**
            * Use this ClientId only to retrieve data from Child account belonging to Parent account
            */
            ClientID id = new ClientID();
            id.ID = 90554;
            id.IDSpecified = true;
            retrieveRequest.ClientIDs = new ClientID[] { id };
            APIObject[] results = null;
            String requestId = null;
            String response = soapClient.Retrieve(retrieveRequest, out requestId, out results);
            OpenEvent openEvent = null;
            if (response != null && response.ToLower().Equals("ok"))
            {
                if (results != null)
                {
                    openEvent = (OpenEvent)results[0];
                }
            }
            Assert.IsNotNull(openEvent);
           }
```

### Sample Java Code (Axis 1.4)

```apex
public void testGetOpenEventsforSendIdIn() throws RemoteException {
        Soap stub = init();       //Initiate soap connection
        RetrieveRequest request = new RetrieveRequest();
        request.setObjectType("OpenEvent");                  //You can replace objectTypes with following Values :: OpenEvent,NotSentEvent,BounceEvent
        String[] stringArray = { "EventDate", "SendID", "SubscriberKey","BatchID"};
        request.setProperties(stringArray);
        SimpleFilterPart inf = new SimpleFilterPart();
        inf.setProperty("SendID");
        inf.setSimpleOperator(SimpleOperators.IN);
        String [] val= {"12345", "6789"} ;
        inf.setValue(val);
        SimpleFilterPart filter2 = new SimpleFilterPart();
        filter2.setProperty("SubscriberKey");
        String[] filterValues2 = {"acruz@example.com"};
        filter2.setValue(filterValues2);
        filter2.setSimpleOperator(SimpleOperators.equals);
        ComplexFilterPart complexFilterPart = new ComplexFilterPart();
        complexFilterPart.setLeftOperand(inf);
        complexFilterPart.setRightOperand(filter2);
        complexFilterPart.setLogicalOperator(LogicalOperators.AND);
        request.setFilter(complexFilterPart);
       //request.setRetrieveAllSinceLastBatch(true);
       //This brings only latest records, eliminates previous records from resultset.
        RetrieveRequestMsg requestMsg = new RetrieveRequestMsg();
        requestMsg.setRetrieveRequest(request);
        RetrieveResponseMsg responseMsg = stub.retrieve(requestMsg);
        System.out.println("Overall request status ::: " + responseMsg.getOverallStatus());
    }
    String[] fields = {"SendID", "SubscriberKey", "EventDate", "Client.ID", "EventType", "BatchID", "TriggeredSendDefinitionObjectID", "ListID", "SubscriberID"};
}
```

### Sample PHP Code

The sample code below retrieves OpenEvent details and then examines the unique SendID details to retrieve the number of unique opens.

```apex
<?php
class Marketing Cloud{
    var $_soap = null;
    var $_key = "";
    var $_filter_property = null;
    // set the soap interface
    function __construct(&$client=null) {
        global $exacttarget_config;
        if (!$client) {
            $wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
            $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
            $client->username = $exacttarget_config['username'];
            $client->password = $exacttarget_config['password'];
    }
    $this->_enable_debugging = $exacttarget_config['debug'];
    $this->_soap =& $client;
}
function _log($text) {
    global $exacttarget_config;
    if ($exacttarget_config['debug']) {
        echo "<div class='log' style='font-size:smaller;font-style-italic;'>$text</div>";
    }
}
function setSubscriberKey($key) {
    $this->_key = $key;
    $this->_log("Setting subscriber key to '$key'");
}
// Set the type of tracking to retrieve
function setType($type) {
    if (!in_array($type, $this->_allowed_types)) {
        $this->_log("'$type' is not an allowed type (" .implode(", ", $this->_allowed_types). ")");
        $this->_type = "";
        return false;
    } else {
        $this->_data type = $type;
        $this->_type = ucfirst($type).$this->_type_suffix;
        $this->_log("type set to " .$this->_type);
    }
}
function _getData() {
    $var = "_".strtolower($this->_type);
    $this->_log("getting data for " .$var);
    if (!isset($this->{$var}[$this->_key]) or empty($this->{$var}[$this->_key])) {
        $event = new Marketing Cloud_RetrieveRequest();
        $event->ObjectType = $this->_type;
        $event->Properties = $this->_properties[$this->_data type];
        if ($this->_filter_property) {
            $event_sfp = new Marketing Cloud_SimpleFilterPart();
            $event_sfp->Value = array($this->_key);
            $event_sfp->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
            $event_sfp->Property = $this->_filter_property;
            $event->Filter = new SoapVar($event_sfp, SOAP_ENC_OBJECT, 'SimpleFilterPart', 'http://exacttarget.com/wsdl/partnerAPI');
        }
        $event->Options = null;
        $event_msg = new Marketing Cloud_RetrieveRequestMsg();
        $event_msg->RetrieveRequest = $event;
        $event_result = $this->_soap->Retrieve($event_msg);
        if ($event_result->OverallStatus == 'OK') {
            if (property_exists($event_result, 'Results')) {
                $this->_log("Found result, setting to this->{$var}[{$this->_key}]");
                $this->{$var}[$this->_key] = $event_result->Results;
                return $this->{$var}[$this->_key];
            } else {
                $this->_log("Got OK response, but no results. Nothing in this result set");
            }
        } else {
            $this->_log("Error retrieving result. <pre>".print_r($event_result, true). "</pre>");
            return false;
        }
    } else {
        $this->_log("Already have result, reusing from this->{$var}[{$this->_key}]");
        return $this->{$var}[$this->_key];
    }
  }
}
class TrackingData extends Marketing Cloud{
    var $_allowed_types = array('sent', 'open', 'click', 'unsub');
    var $_total_sent = null;
    var $_total_open = null;
    var $_total_click = null;
    var $_total_unsub = null;
    var $_openevent = array();
    var $_sentevent = array();
    var $_clickevent = array();
    var $_unsubevent = array();
    var $_filter_property = 'SubscriberKey';
    var $_type_suffix = "Event";
    var $_properties = array(
        'sent' => array('ListID', 'SubscriberID', 'EventDate', 'EventType', 'SubscriberKey', 'SendID'),
        'open' => array('EventDate', 'EventType', 'SubscriberKey', 'SendID'),
        'click' => array('EventDate', 'EventType', 'SubscriberKey', 'SendID'),
        'unsub' => array('EventDate', 'EventType', 'SubscriberKey', 'SendID')
    );
    // set the soap interface
    function __construct(&$client=null) {
        parent::__construct($client);
    }    function getOpenCount() {
        $this->_log("Getting open count");
        if (is_null($this->_total_open)) {
            $this->setType('open');
            $total = $this->_getData();
            //$this->_log("<pre>".print_r($total, true). "</pre>");
            if ($total) {
                // no get the opens per SendID
                $sends = array();
                for ($i=0, $k=count($total); $i<$k; $i++) {
                    if (!in_array($total[$i]->SendID, $sends)) {
                        $sends[] = $total[$i]->SendID;
                        $this->_total_open++;
                    }
                }
                //$this->_total_open = count($total);
            } else {
                $this->_total_open = 0;
            }
        }
        return $this->_total_open;
    }
}
```
