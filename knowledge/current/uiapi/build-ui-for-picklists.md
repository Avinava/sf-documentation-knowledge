---
title: "Build UI for Picklists"
domain: uiapi
topic: build-ui-for-picklists
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.068Z
estimatedTokens: 2235
keywords: [Build, Picklists, User, API, resources, easy, client, dependent, Check, Picklist, Record, Viewer, Sample, App]
---

# Build UI for Picklists

> User Interface API exposes properties and resources that make it
      easy for a client to build picklists and dependent picklists.

# Build UI for Picklists

User Interface API exposes properties and resources that make it easy for a client to build picklists and dependent picklists.

Picklists are complicated UI elements, and dependent picklists are especially tricky. The values in a dependent picklist field are filtered based on the selection in another field, called a controlling field. A controlling field can be a picklist field or a checkbox field. For example, imagine a Continents picklist that controls a Countries picklist that controls a Cities picklist and a Languages picklist field.

Dependent picklists exist in a field dependency tree that shows a hierarchy of controlling and dependent fields. Each node in the tree can have any number of child nodes. To build UI, you need to know the complete hierarchy.![Field dependency tree diagram](/docs/resources/img/en-us/260.0?doc_id=api_ui%2Fimages%2Ffield_dependency_tree.png&folder=uiapi)

An object can have any number of field dependency trees. User Interface API exposes the collection of field dependency trees in a single property on each object called dependentFields. Each dependent field has a controllingFields property that lists the fields that control it. User Interface API also provides a batch resource to get all picklist values for a record type: [/ui-api/object-info/{objectApiName}/picklist-values/{recordTypeId}](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm#ui_api_resources_picklist_values_collection "Use this resource to get the values for all the picklist fields of a specific record type. This resource is especially useful for getting dependent picklist values. For example, if an object has a tree of dependent picklists (Continents__c, Countries__c, Cities__c), use this resource to get all the values for each picklist in one request.").

## Check for Picklists

To build UI to create, display, edit, and delete records, make a request to one of the User Interface API resources. The response from each of these resources includes an [Object Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm#ui_api_responses_object_info "The metadata for an object.") response body, which contains the object metadata, including information about picklists.

-   [Get Record Data and Object Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm#ui_api_resources_record_ui "Get layout information, metadata, and data to build UI for a single record or for a collection of records.")
-   [Get Object Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info.htm#ui_api_resources_object_info "Get metadata about a specific object. The response includes metadata describing fields, child relationships, record type, and theme.")
-   [Get Default Values to Create a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_create.htm#ui_api_resources_record_defaults_create "Get the default values for fields for a new record of a specified object and optional record type. After getting the default values, make a request to POST /ui-api/records to create the record.")
-   [Get Default Values to Clone a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm#ui_api_resources_record_defaults_clone "Get the default layout information, object information, and data for cloning a record. After getting the default values, make a request to POST /ui-api/records to create the record.")

1.  Parse the response for each field’s dataType. If the dataType is Picklist or MultiPicklist, the field is a picklist.
2.  If you find a picklist, grab the recordTypeId, you’ll use it in a request to get the picklist values.
3.  Parse the response for dependent picklists. If the field is a picklist and if the controllingFields property is non-null, the field is a dependent picklist.
4.  If the field is a dependent picklist, look at the dependentFields property on the object to see the tree structure of the object’s dependent and controlling fields. A dependent picklist can depend on (be controlled by) standard or and custom picklists and checkboxes.

```

```

Here’s a bit more info about the dependent and controlling fields properties.

-   {Object}.dependentFields—A map of the dependent fields tree structure. Each nested object is another Map<String, Object>. When the object is empty, it indicates a leaf of the tree, which is a field that doesn’t control other fields. An object can have multiple independent trees, which means this property can have multiple root objects.

    Imagine an object with the picklists Continents\_\_c, Countries\_\_c, and Cities\_\_c. Continents\_\_c is the root. Cities\_\_c is a leaf. Continents\_\_c and Countries\_\_c are controlling fields. Countries\_\_c and Cities\_\_c are dependent picklists.

-   {Field}.controllingFields—If this field is a dependent picklist, this property is a collection of fields that control the values in the picklist. When there’s a hierarchy of controlling fields, the collection starts with the immediate parent and moves up the tree.

## Get Picklist Values

You know that the object has picklists, you know whether it has dependent picklists, and you know how the dependent picklists are controlled. It’s time to get the picklist values.

1.  Do one of the following:
    -   To retrieve the values for all picklists of a record type, make a request to [GET /ui-api/object-info/${objectApiName}/picklist-values/${recordTypeId}](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm#ui_api_resources_picklist_values_collection "Use this resource to get the values for all the picklist fields of a specific record type. This resource is especially useful for getting dependent picklist values. For example, if an object has a tree of dependent picklists (Continents__c, Countries__c, Cities__c), use this resource to get all the values for each picklist in one request."). It’s handy to retrieve the values in a batch instead of requesting them for each field.
    -   To get the values for a single picklist, make a request to [GET /ui-api/object-info/{objectApiName}/picklist-values/{recordTypeId}/{fieldApiName}](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm#ui_api_resources_picklist_values "If a field’s dataType property is equal to Picklist or MultiPicklist, use this resource to get its values.").
2.  Get the values for independent picklists.
    1.  To determine whether a picklist is independent, look at the {Field}.controllingFields property. If the property is empty, the picklist is independent.

        ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=uiapi)

        #### Tip

        If the controllerValues property is empty, like it is for the AccountSource field in the following example, the field isn’t necessarily independent. If the controlling field is protected by field-level security (FLS), it doesn’t appear in the controllerValues property.

    2.  To populate a picklist in the UI, use the field’s label and value properties.
3.  Get the values for dependent picklists.
    1.  If a picklist is dependent, its controllerValues property lists the values and indexes of its controlling field (except when the immediate controlling field is protected by FLS). The indexes are used in the validFor property to indicate which controlling field values map to which picklist value. For example, in controllerValues, Italy has index 5. In the values.validFor property, you see that Rome is valid for index 5.
    2.  To populate a picklist in the UI, use the field’s label and value properties.

```

```

## Record Viewer Sample App

To view sample code that parses a response and displays dependent picklists, check out the [Record Viewer](https://github.com/forcedotcom/RecordViewer "HTML (New Window)") sample app on GitHub. To contribute to the app, fork it and submit a pull request. We love to see what people do with User Interface API.

#### See Also

-   [User Interface API Sample Apps](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_sample_apps.htm "We’ve built two sample apps that use User Interface API to create, read, update, and delete records. The apps are open-source and available on GitHub.")

-   [Get Values for a Picklist Field](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm "If a field’s dataType property is equal to Picklist or MultiPicklist, use this resource to get its values.")

-   [Get Values for All Picklist Fields of a Record Type](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm "Use this resource to get the values for all the picklist fields of a specific record type. This resource is especially useful for getting dependent picklist values. For example, if an object has a tree of dependent picklists (Continents__c, Countries__c, Cities__c), use this resource to get all the values for each picklist in one request.")

## Code Examples

```
{
  ...
  "dependentFields" : {
    "Continents__c" : {
      "Countries__c" : {
        "Cities__c" : { },
        "Languages__c" : { },
      }
    }
  },
  ...
 "fields" : {
     "AccountSource" : {
      ...
      "controllingFields" : [ ],
      ...
      "dataType" : "Picklist",
      ...
     },
    "Cities__c" : {
      ...
      "controllingFields" : [ "Countries__c", "Continents__c" ],
      ...
      "dataType" : "Picklist",
      ...
    },
    "Continents__c" : {
      ...
      "controllingFields" : [ ],
      ...
      "dataType" : "Picklist",
      ...
    },
    "Countries__c" : {
      ...
      "controllingFields" : [ "Continents__c" ],
      ...
      "dataType" : "Picklist",
      ...
    },
    "Languages__c" : {
      ...
      "controllingFields" : [ "Countries__c", "Continents__c" ],
      ...
      "dataType" : "Picklist",
      ...
    },  
...   
  "recordTypeInfos" : {
    "012000000000000AAA" : {
      ...
      "recordTypeId" : "012000000000000AAA"
    }
  },
  ...
}
```

```
{
  "picklistFieldValues" : {
    "AccountSource" : {
      "controllerValues" : { },
      "defaultValue" : null,
      "url" : "/services/data/v66.0/ui-api/object-info/account/picklist-values/012000000000000AAA/AccountSource",
      "values" : [ {
        "attributes" : null,
        "label" : "Advertisement",
        "validFor" : [ ],
        "value" : "Advertisement"
      }, {
        "attributes" : null,
        "label" : "Employee Referral",
        "validFor" : [ ],
        "value" : "Employee Referral"
      },
     ...
    }
    "Cities__c" : {
      "controllerValues" : {
        "Australia" : 0,
        "Brazil" : 1,
        "China" : 2,
        "Colombia" : 3,
        "France" : 4,
        "Italy" : 5,
        "Mexico" : 6,
        "New Zealand" : 7,
        "Nigeria" : 8,
        "Senegal" : 9,
        "South Korea" : 10,
        "US" : 11
      },
      "defaultValue" : null,
      "url" : "/services/data/v66.0/ui-api/object-info/account/picklist-values/012000000000000AAA/Cities__c",
      "values" : [ {
        "attributes" : null,
        "label" : "Cali",
        "validFor" : [ 3 ],
        "value" : "Cali"
      }, {
        "attributes" : null,
        "label" : "Chicago",
        "validFor" : [ 11 ],
        "value" : "Chicago"
      }, {
        "attributes" : null,
        "label" : "Dakar",
        "validFor" : [ 9 ],
        "value" : "Dakar"
      }, {
        "attributes" : null,
        "label" : "Lagos",
        "validFor" : [ 8 ],
        "value" : "Lagos"
      }, {
        "attributes" : null,
        "label" : "Los Angeles",
        "validFor" : [ 11 ],
        "value" : "Los Angeles"
      }, {
        "attributes" : null,
        "label" : "Oaxaca",
        "validFor" : [ 6 ],
        "value" : "Oaxaca"
      }, {
        "attributes" : null,
        "label" : "Wellington",
        "validFor" : [ 7 ],
        "value" : "Wellington"
      } ]
    },
```

## Related Topics

- /ui-api/object-info/{objectApiName}/picklist-values/{recordTypeId} (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm)
- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- Get Record Data and Object Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm)
- Get Object Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info.htm)
- Get Default Values to Create a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_create.htm)
- Get Default Values to Clone a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm)
- GET
                    /ui-api/object-info/${objectApiName}/picklist-values/${recordTypeId} (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm)
- GET
                    /ui-api/object-info/{objectApiName}/picklist-values/{recordTypeId}/{fieldApiName} (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm)
- User Interface API Sample Apps (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_sample_apps.htm)
- Get Values for a Picklist Field (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm)
