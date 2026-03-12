---
title: "describeSObjectResult"
domain: api
topic: describesobjectresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.149Z
estimatedTokens: 72
keywords: [describeSObjectResult, describeSObject, call, DescribeSObjectResult, possible, changed, noninclusive, terms, align, company, Equality, Because, changing, code, break, current, implementations, maintained]
---

# describeSObjectResult

> Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

# DescribeSObjectResult

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

The [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") call returns an array of DescribeSObjectResult objects. Each object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| actionOverrides | ActionOverride[] | An array of action overrides. Action overrides replace the URLs specified in the urlDetail, urlEdit and urlNew fields. This field is available in API version 32.0 and later. |
| activateable | boolean | Reserved for future use. |
| actionOverrides | ActionOverride[] | An array of action overrides. Action overrides replace the URLs specified in the urlDetail, urlEdit and urlNew fields. This field is available in API version 32.0 and later. |
| associateEntityType | string | If the object is associated with a parent object, the type of association it has to its parent, such as History. Otherwise, its value is null. Available in API version 50.0 and later. |
| associateParentEntity | string | If the object is associated with a parent object, the parent object it’s associated with. Otherwise, its value is null. Available in API version 50.0 and later. |
| childRelationships | ChildRelationship[] | An array of child relationships, which is the name of the sObject that has a foreign key to the sObject being described. |
| compactLayoutable | boolean | Indicates that the object can be used in describeCompactLayouts(). |
| createable | boolean | Indicates whether the object can be created via the create() call (true) or not (false). |
| custom | boolean | Indicates whether the object is a custom object (true) or not (false). |
| customSetting | boolean | Indicates whether the object is a custom setting object (true) or not (false). |
| dataTranslationEnabled | boolean | Indicates whether data translation is enabled for the object (true) or not (false). Available in API version 49.0 and later. |
| deepCloneable | boolean | Reserved for future use. |
| defaultImplementation | string | Reserved for future use. |
| deletable | boolean | Indicates whether the object can be deleted via the delete() call (true) or not (false). |
| deprecatedAndHidden | boolean | Reserved for future use. |
| extendedBy | string | Reserved for future use. |
| extendsInterfaces | string | Reserved for future use. |
| feedEnabled | boolean | Indicates whether Chatter feeds are enabled for the object (true) or not (false). This property is available in API version 19.0 and later. |
| fields | Field[] | Array of fields associated with the object. The mechanism for retrieving information from this list varies among development tools. |
| implementedBy | string | Reserved for future use. |
| implementsInterfaces | string | Reserved for future use. |
| isInterface | boolean | Reserved for future use. |
| keyPrefix | string | Three-character prefix code in the object ID. Object IDs are prefixed with three-character codes that specify the type of the object. For example, Account objects have a prefix of 001 and Opportunity objects have a prefix of 006. Note that a key prefix can sometimes be shared by multiple objects so it does not always uniquely identify an object.Use the value of this field to determine the object type of a parent in those cases where the child may have more than one object type as parent (polymorphic). For example, you may need to obtain the keyPrefix value for the parent of a Task or Event. |
| label | string | Label text for a tab or field renamed in the user interface, if applicable, or the object name, if not. For example, an organization representing a medical vertical might rename Account to Patient. Tabs and fields can be renamed in the Salesforce user interface. See the Salesforce online help for more information. |
| labelPlural | string | Label text for an object that represents the plural version of an object name, for example, “Accounts.” |
| layoutable | boolean | Indicates whether the object supports the describeLayout() call (true) or not (false). |
| mergeable | boolean | Indicates whether the object can be merged with other objects of its type (true) or not (false). true for leads, contacts, and accounts. |
| mruEnabled | boolean | Indicates whether Most Recently Used (MRU) list functionality is enabled for the object (true) or not (false). |
| name | string | Name of the object. This is the same string that was passed in as the sObjectType parameter. |
| namedLayoutInfos | NamedLayoutInfo[] | The specific named layouts that are available for the objects other than the default layout. |
| networkScopeFieldName | string | The API name of the networkScopeField that scopes the entity to an Experience Cloud site. For most entities, the value of this property is null. |
| queryable | boolean | Indicates whether the object can be queried via the query() call (true) or not (false). |
| recordTypeInfos | [] | An array of the record types supported by this object. The user need not have access to all the returned record types to see them here. |
| replicateable | boolean | Indicates whether the object can be replicated via the getUpdated() and getDeleted() calls (true) or not (false). |
| retrieveable | boolean | Indicates whether the object can be retrieved via the retrieve() call (true) or not (false). |
| searchable | boolean | Indicates whether the object can be searched via the search() call (true) or not (false). |
| searchLayoutable | boolean | Indicates whether search layout information can be retrieved via the describeSearchLayouts() call (true) or not (false). |
| supportedScopes | ScopeInfo | The list of supported scopes for the object. For example, Account might have supported scopes of “All Accounts”, “My Accounts”, and “My Team’s Accounts”. |
| triggerable | boolean | Indicates whether the object supports Apex triggers. |
| undeletable | boolean | Indicates whether an object can be undeleted using the undelete() call (true) or not (false). |
| updateable | boolean | Indicates whether the object can be updated via the update() call (true) or not (false). |
| urlDetail | string | URL to the read-only detail page for this object. Compare with urlEdit, which is read-write. Client applications can use this URL to redirect to, or access, the Salesforce user interface for standard and custom objects. To provide flexibility and allow for future enhancements, returned urlDetail values are dynamic. To ensure that client applications are forward compatible, it is recommended that they use this capability where possible. Note that, for objects for which a stable URL is not available, this field is returned empty. |
| urlEdit | string | URL to the edit page for this object. For example, the urlEdit field for the Account object returns https://yourInstance.salesforce.com/{ID}/e. Substituting the {ID} field for the current object ID will return the edit page for that specific account in the Salesforce user interface. Compare with urlDetail, which is read-only. Client applications can use this URL to redirect to, or access, the Salesforce user interface for standard and custom objects. To provide flexibility and allow for future enhancements, returned urlDetail values are dynamic. To ensure that client applications are forward compatible, it is recommended that they use this capability where possible. Note that, for objects for which a stable URL is not available, this field is returned empty. |
| urlNew | string | URL to the new/create page for this object. Client applications can use this URL to redirect to, or access, the Salesforce user interface for standard and custom objects. To provide flexibility and allow for future enhancements, returned urlNew values are dynamic. To ensure that client applications are forward compatible, it is recommended that they use this capability where possible. Note that, for objects for which a stable URL is not available, this field is returned empty. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

The properties with a Boolean value indicate whether certain API calls can be used for an object. However, other factors, such as permissions, also affect whether such operations can be performed on the object.

## ActionOverride

ActionOverride provides details about an action that replaces the default action pages for an object. For example, an object could be configured to replace the new/create page with a custom page. This type is available in API version 32.0 and later.

| Name | Type | Description |
| --- | --- | --- |
| formFactor | string | Represents the environment to which the action override applies. For example, a Large value in this field represents the Lightning Experience desktop environment, and is valid for Lightning pages and Lightning components. A Small value represents the Salesforce mobile app on a phone or tablet.This field is available in API version 37.0 and later. |
| isAvailableInTouch | boolean | Indicates whether the action override is available in the Salesforce mobile app (true) or not (false). |
| name | string | The name of the action that overrides the default action. For example, if the new/create page was overridden with a custom action, the name might be “New”. |
| pageId | reference | The ID of the page for the action override. |
| url | string | The URL of the item being used for the action override, such as a Visualforce page. Returns as null for Lightning page overrides. |

## ChildRelationship

The name of the sObject that has a foreign key to the sObject being described.

| Name | Type | Description |
| --- | --- | --- |
| cascadeDelete | boolean | Indicates whether the child object is deleted when the parent object is deleted (true) or not (false). |
| childSObject | string | The name of the object on which there is a foreign key back to the parent sObject. |
| deprecatedAndHidden | boolean | Reserved for future use. |
| field | string | The name of the field that has a foreign key back to the parent sObject. |
| junctionIdListNames | String[] | The names of the lists of junction IDs associated with an object. Each ID represents an object that has a relationship with the associated object.For more information on JunctionIdList fields, see Field Types. |
| junctionReferenceTo | String[] | A collection of object names that the polymorphic keys in the junctionIdListNames property can reference.You can query these object names. |
| relationshipName | string | The name of the relationship, usually the plural of the value in childSObject. |
| restrictedDelete | boolean | Indicates whether the parent object can’t be deleted because it is referenced by a child object (true) or not (false). |

## Field

In the DescribeSObjectResult, the fields property contains an array of Field objects. Each field represents a field in an API object. The array contains only the fields that the user can view, as defined by the user's field-level security settings.

| Name | Type | Description |
| --- | --- | --- |
| autonumber | boolean | Indicates whether this field is an autonumber field (true) or not (false). Analogous to a SQL IDENTITY type, autonumber fields are read only, non-createable text fields with a maximum length of 30 characters. Autonumber fields are read-only fields used to provide a unique ID that is independent of the internal object ID (such as a purchase order number or invoice number). Autonumber fields are configured entirely in the Salesforce user interface. The API provides access to this attribute so that client applications can determine whether a given field is an autonumber field. |
| byteLength | int | For variable-length fields (including binary fields), the maximum size of the field, in bytes. |
| calculated | boolean | Indicates whether the field is a custom formula field (true) or not (false). Note that custom formula fields are always read-only. |
| caseSensitive | boolean | Indicates whether the field is case sensitive (true) or not (false). |
| controllerName | string | The name of the field that controls the values of this picklist. It only applies if type is picklist or multipicklist and dependentPicklist is true. The mapping of controlling field to dependent field is stored in the validFor attribute of each PicklistEntry for this picklist. |
| createable | boolean | Indicates whether the field can be created (true) or not (false). If true, then this field value can be set in a create() call. |
| custom | boolean | Indicates whether the field is a custom field (true) or not (false). |
| dataTranslationEnabled | boolean | Indicates whether data translation is enabled for the field (true) or not (false). Available in API version 49.0 and later. |
| defaultedOnCreate | boolean | Indicates whether this field is defaulted when created (true) or not (false). If true, then Salesforce implicitly assigns a value for this field when the object is created, even if a value for this field is not passed in on the create() call. For example, in the Opportunity object, the Probability field has this attribute because its value is derived from the Stage field. Similarly, the Owner has this attribute on most objects because its value is derived from the current user (if the Owner field is not specified). |
| defaultValueFormula | string | The default value specified for this field if the formula is not used. If no value has been specified, this field is not returned. |
| dependentPicklist | boolean | Indicates whether a picklist is a dependent picklist (true) where available values depend on the chosen values from a controlling field, or not (false). See About Dependent Picklists. |
| deprecatedAndHidden | boolean | Reserved for future use. |
| digits | int | For fields of type integer. Maximum number of digits. The API returns an error if an integer value exceeds the number of digits. |
| displayLocationInDecimal | boolean | Indicates how the geolocation values of a Location custom field appears in the user interface. If true, the geolocation values appear in decimal notation. If false, the geolocation values appear as degrees, minutes, and seconds. |
| encrypted | boolean | NoteThis page is about Shield Platform Encryption, not Classic Encryption. What's the difference?Indicates whether this field is encrypted. This value only appears in the results of a describeSObjects() call when it is true; otherwise, it is omitted from the results. This field is available in API version 31.0 and later. |
| extraTypeInfo | string | If the field is a textarea field type, indicates if the text area is plain text (plaintextarea) or rich text (richtextarea).If the field is a url field type, if this value is imageurl, the URL references an image file. Available on standard fields on standard objects only, for example, Account.photoUrl, Contact.photoUrl, and so on.If the field is a reference field type, indicates the type of external object relationship. Available on external objects only.null—lookup relationshipexternallookup—external lookup relationshipindirectlookup—indirect lookup relationship |
| filterable | boolean | Indicates whether the field is filterable (true) or not (false). If true, then this field can be specified in the WHERE clause of a query string in a query() call. |
| filteredLookupInfo | FilteredLookupInfo | If the field is a reference field type with a lookup filter, filteredLookupInfo contains the lookup filter information for the field. If there is no lookup filter, or the filter is inactive, this field is null.This field is available in API version 31.0 and later. |
| formula | string | The formula specified for this field. If no formula is specified for this field, it is not returned. |
| groupable | boolean | Indicates whether the field can be included in the GROUP BY clause of a SOQL query (true) or not (false). See GROUP BY in the Salesforce SOQL and SOSL Reference Guide. Available in API version 18.0 and later. |
| highScaleNumber | boolean | Indicates whether the field stores numbers to 8 decimal places regardless of what’s specified in the field details (true) or not (false). Used to handle currencies for products that cost fractions of a cent, in large quantities. If high-scale unit pricing isn’t enabled in your organization, this field isn’t returned. Available in API version 33.0 and later. |
| htmlFormatted | boolean | Indicates whether a field such as a hyperlink custom formula field has been formatted for HTML and should be encoded for display in HTML (true) or not (false). Also indicates whether a field is a custom formula field that has an IMAGE text function. |
| idLookup | boolean | Indicates whether the field can be used to specify a record in an upsert() call (true) or not (false). |
| inlineHelpText | string | The text that displays in the field-level help hover text for this field.NoteThis property is not returned unless at least one field on the object contains a value. When at least one field has field-level help, all fields on the object list the property with either the field-level help value or null for fields that have blank field-level help. |
| label | string | Text label that is displayed next to the field in the Salesforce user interface. This label can be localized. |
| length | int | Returns the maximum size of the field in Unicode characters (not bytes) or 255, whichever is less. The maximum value returned by the getLength() property is 255. Available in API version 49.0 and later. |
| mask | string | Reserved for future use. |
| maskType | string | Reserved for future use. |
| name | string | Field name used in API calls, such as create(), delete(), and query(). |
| nameField | boolean | Indicates whether this field is a name field (true) or not (false). Used to identify the name field for standard objects (such as AccountName for an Account object) and custom objects. Limited to one per object, except where FirstName and LastName fields are used (such as in the Contact object).If a compound name is present, for example the Name field on a person account, nameField is set to true for that record. If no compound name is present, FirstName and LastName have this field set to true. |
| namePointing | boolean | Indicates whether the field's value is the Name of the parent of this object (true) or not (false). Used for objects whose parents may be more than one type of object, for example a task may have an account or a contact as a parent. |
| nillable | boolean | Indicates whether the field is nillable (true) or not (false). A nillable field can have empty content. A non-nillable field must have a value in order for the object to be created or saved. |
| permissionable | boolean | Indicates whether FieldPermissions can be specified for the field (true) or not (false). |
| picklistValues | PicklistEntry[] | Provides the list of valid values for the picklist. Specified only if restrictedPicklist is true. |
| polymorphicForeignKey | boolean | Indicates whether the foreign key includes multiple entity types (true) or not (false). |
| precision | int | For fields of type double. Maximum number of digits that can be stored, including all numbers to the left and to the right of the decimal point (but excluding the decimal point character). |
| relationshipName | string | The name of the relationship, if this is a master-detail relationship field. |
| relationshipOrder | int | The type of relationship for a master-detail relationship field. Valid values are:0 if the field is the primary relationship1 if the field is the secondary relationship |
| referenceTargetField | string | Applies only to indirect lookup relationships on external objects. Name of the custom field on the parent standard or custom object whose values are matched against the values of the child external object's indirect lookup relationship field. This matching is done to determine which records are related to each other. This field is available in API version 32.0 and later. |
| referenceTo | string[] | For fields that refer to other objects, this array indicates the object types of the referenced objects. |
| restrictedPicklist | boolean | Indicates whether the field is a restricted picklist (true) or not (false). |
| scale | int | For fields of type double. Number of digits to the right of the decimal point. The API silently truncates any extra digits to the right of the decimal point, but it returns a fault response if the number has too many digits to the left of the decimal point. |
| searchPrefilterable | boolean | Indicates whether a foreign key can be included in prefiltering (true) or not (false) when used in a SOSL WHERE clause. Prefiltering means to filter by a specific field value before executing the full search query. Available in API version 40.0 and later. |
| soapType | SOAPType | See SOAPType for a list of allowable values. |
| sortable | boolean | Indicates whether a query can sort on this field (true) or not (false). |
| type | FieldType | See FieldType for a list of allowable values. |
| unique | boolean | Indicates whether the value must be unique true) or not false). |
| updateable | boolean | Indicates one of the following:Whether the field is updateable, (true) or not (false).If true, then this field value can be set in an update() call.If the field is in a master-detail relationship on a custom object, indicates whether the child records can be reparented to different parent records (true), false otherwise. |
| writeRequiresMasterRead | boolean | This field only applies to master-detail relationships. Indicates whether a user requires read sharing access (true) or write sharing access (false) to the parent record to insert, update, and delete a child record. In both cases, a user also needs Create, Edit, and Delete object permissions for the child object. |

## FieldType

In the Field object associated with DescribeSObjectResult, the type field can contain one of the following strings. For more information about field types, see [Field Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm).

| type Field Value | What the Field Object Contains |
| --- | --- |
| string | String values. |
| boolean | Boolean (true / false) values. |
| int | Integer values. |
| double | Double values. |
| date | Date values. |
| datetime | Date and time values. |
| base64 | Base64-encoded arbitrary binary data (of type base64Binary). Used for Attachment, Document, and Scontrol objects. |
| ID | Primary key field for the object. For information on IDs, see Field Types. |
| reference | Cross-references to a different object. Analogous to a foreign key field in SQL. |
| currency | Currency values. |
| textarea | String that is displayed as a multiline text field. |
| percent | Percentage values. |
| phone | Phone numbers. Values can include alphabetic characters. Client applications are responsible for phone number formatting. |
| url | URL values. Client applications should commonly display these as hyperlinks.If Field.extraTypeInfo is imageurl, the URL references an image, and can be displayed as an image instead. |
| email | Email addresses. |
| combobox | Comboboxes, which provide a set of enumerated values and allow the user to specify a value not in the list. |
| picklist | Single-select picklists, which provide a set of enumerated values from which only one value can be selected. |
| multipicklist | Multi-select picklists, which provide a set of enumerated values from which multiple values can be selected. |
| anyType | Values can be any of these types: string, picklist, boolean, int, double, percent, ID, date, dateTime, url, or email. |
| location | Geolocation values, including latitude and longitude, for custom geolocation fields on custom objects. |

## FilteredLookupInfo

In the Field object associated with the DescribeSObjectResult, the filteredLookupInfo field contains information about the lookup filter associated with the field.

This subtype is available in API version 31.0 and later.

| Name | Type | Description |
| --- | --- | --- |
| controllingFields | string[] | Array of the field’s controlling fields when the lookup filter is dependent on the source object. |
| dependent | boolean | Indicates whether the lookup filter is dependent upon the source object (true) or not (false). |
| optionalFilter | boolean | Indicates whether the lookup filter is optional (true) or not (false). |

## SOAPType

The DescribeSObjectResult returns the fields property, which contains an array of fields whose value provides information about the object being described. One of those fields, soapType, contains one of the following string values. All of the values preceded by xsd: are XML schema primitive data types. For more information about the XML schema primitive data types, see the World Wide Web Consortium’s publication XML Schema Part 2: Data Types at: [http://www.w3.org/TR/xmlschema-2/](http://www.w3.org/TR/xmlschema-2/).

| Value | Description |
| --- | --- |
| tns:ID | Unique ID associated with an sObject. For information on IDs, see Field Types. |
| xsd:anyType | Can be ID, Boolean, double, integer, string, date, or dateTime. |
| xsd:base64Binary | Base 64-encoded binary data. |
| xsd:boolean | Boolean (true / false) values. |
| xsd:date | Date values. |
| xsd:dateTime | Date/time values. |
| xsd:double | Double values. |
| xsd:int | Integer values. |
| xsd:string | Character strings. |

## PicklistEntry

In the Field object associated with the DescribeSObjectResult, the picklistValues field contains an array of PicklistEntry properties. Each PicklistEntry can contain any one of the following string values. For more information, see [Field Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm).

| Name | Type | Description |
| --- | --- | --- |
| active | boolean | Indicates whether this item must be displayed (true) or not (false) in the drop-down list for the picklist field in the user interface. |
| validFor | byte[] | A set of bits where each bit indicates a controlling value for which this PicklistEntry is valid. See About Dependent Picklists. |
| defaultValue | boolean | Indicates whether this item is the default item (true) in the picklist or not (false). Only one item in a picklist can be designated as the default. |
| label | string | Display name of this item in the picklist. |
| value | string | Value of this item in the picklist. |

## About Dependent Picklists

A dependent picklist works in conjunction with a controlling field to filter its values. The value chosen in the controlling field affects the values available in the dependent picklist.

A dependent picklist can be any custom picklist or multi-select picklist field that displays available values based on the value selected in its corresponding controlling field. A controlling field can be any standard or custom picklist (with at least one and less than 200 values) or checkbox field whose values control the available values in one or more corresponding dependent fields.

In the following example, the controlling picklist Beverage has two values, which relate to the values of the dependent picklist Beverage Variety:

| Beverage | Beverage Variety |
| --- | --- |
| Coffee | Decaffeinated |
|  | Regular |
| Tea | Chamomile |
|  | Earl Grey |
|  | English Breakfast |

For each PicklistEntry that represents a value in a dependent picklist, the validFor attribute contains a set of bits. Each bit indicates a controlling field value for which the PicklistEntry is valid. Read the bits from left to right.

For more information on dependent picklists, see the “Dependent Picklists” topic in the Salesforce online help.

## Sample Java Code for Dependent Picklists

```

```

## RecordTypeInfo

Base class for the old RecordTypeMapping object. This object contains all of the existing fields of RecordTypeMapping except layoutId and picklistForRecordType.

| Name | Type | Description |
| --- | --- | --- |
| available | boolean | Indicates whether this record type is available (true) or not (false). Availability is used to display a list of available record types to the user when they are creating a new record. |
| defaultRecordTypeMapping | boolean | Indicates whether this is the default record type mapping (true) or not (false). |
| developerName | string | Developer name of this record type. Available in API versions 43.0 and later. |
| master | boolean | Indicates whether this is the main record type (true) or not (false). The main record type is the default record type that’s used when a record has no custom record type associated with it. |
| name | string | Name of this record type. |
| recordTypeId | ID | ID of this record type. |

## NamedLayoutInfo

The name of the named layout for the object. Standard objects can have defined named layouts which are separate from the primary layout for both the profile and the record type. For more information on layout names, see [describeLayout()](atlas.en-us.api.meta/api/sforce_api_calls_describelayout.htm#sforce_api_calls_describelayout "Retrieves metadata about page layouts for the specified object type.").

| Name | Type | Description |
| --- | --- | --- |
| name | string | Name of this layout. |

## ScopeInfo

A scope for an object that can be used to filter object records. For example, Account may have a supported ScopeInfo of “mine” (with a UI label of “My accounts”) which filters only Account records for the current user.

| Name | Type | Description |
| --- | --- | --- |
| label | string | UI label for this scope. |
| name | string | Name of this scope. |

## Code Examples

```apex
public void dependentPicklistSample() {
  // inner class to decode a "validFor" bitset
  class Bitset {
    byte[] data;
    
    public Bitset(byte[] data) {
      this.data = data == null ? new byte[0] : data;
    }
    
    public boolean testBit(int n) {
      return (data[n >> 3] & (0x80 >> n % 8)) != 0;
    }
    
    public int size() {
      return data.length * 8;
    }
  }
  
  try {
    DescribeSObjectResult describeSObjectResult = connection.describeSObject("Case");
    Field[] fields = describeSObjectResult.getFields();
    // create a map of all fields for later lookup 
    Map fieldMap = new HashMap();
    for (int i = 0; i < fields.length; i++) {
      fieldMap.put(fields[i].getName(), fields[i]);
    }
    for (int i = 0; i < fields.length; i++) {
      // check whether this is a dependent picklist
      if (fields[i].getDependentPicklist()) {
        // get the controller by name
        Field controller = (Field)fieldMap.get(fields[i].getControllerName());
        System.out.println("Field '" + fields[i].getLabel() + "' depends on '" +
        controller.getLabel() + "'");
        PicklistEntry[] picklistValues = fields[i].getPicklistValues();
        for (int j = 0; j < picklistValues.length; j++) {
          // for each PicklistEntry: list all controlling values for which it is valid
          System.out.println("Item: '" + picklistValues[j].getLabel() +
          "' is valid for: ");
          Bitset validFor = new Bitset(picklistValues[j].getValidFor());
          if (FieldType.picklist == controller.getType()) {
            // if the controller is a picklist, list all
            // controlling values for which this entry is valid
            for (int k = 0; k < validFor.size(); k++) {
              if (validFor.testBit(k)) {
                // if bit k is set, this entry is valid for the
                // for the controlling entry at index k
                System.out.println(controller.getPicklistValues()[k].getLabel());
              }
            }
          } else if (FieldType._boolean == controller.getType()) {
            // the controller is a checkbox
            // if bit 1 is set this entry is valid if the controller is checked
            if (validFor.testBit(1)) {
              System.out.println(" checked");
            }
            // if bit 0 is set this entry is valid if the controller is not checked
            if (validFor.testBit(0)) {
              System.out.println(" unchecked");
            }
          }
        }
      }
    }
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

## Related Topics

- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- describeCompactLayouts() (atlas.en-us.api.meta/api/sforce_api_calls_describecompactlayouts.htm)
- describeLayout() (atlas.en-us.api.meta/api/sforce_api_calls_describelayout.htm)
- query() (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
