---
title: "ActivityFieldHistory"
domain: object-reference
topic: activityfieldhistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.003Z
estimatedTokens: 942
namespace: Namespace
keywords: [ActivityFieldHistory, change, tracked, big, API, version, 55.0, later, Calls, Special, Access, Rules, Indexed]
---

# ActivityFieldHistory

> Represents a change in a field value for a tracked object or field.
      This object is a big
      object. This object is available in API version 55.0 and later.

**Namespace:** `Namespace`

# ActivityFieldHistory

Represents a change in a field value for a tracked object or field. This object is a big object. This object is available in API version 55.0 and later.

## Supported Calls

delete()describeSObjects(), query(), retrieve()

## Special Access Rules

To see this object, users must have ViewAllData permissions.

## Fields

| Field | Details |
| --- | --- |
| ActivityId | TypereferencePropertiesFilter, SortDescriptionThe ID of the task or event that changed.This field is a polymorphic relationship field.Relationship NameActivityRefers ToEvent, Task |
| ChangedById | TypereferencePropertiesFilter, SortDescriptionThe ID of the user who made the change.This field is a relationship field.Relationship NameChangedByRefers ToUser |
| ChangedDate | TypedateTimePropertiesFilter, SortDescriptionThe date the field value changed. |
| DataType | TypepicklistPropertiesRestricted picklistDescriptionThe type of the field with the changed value.Possible values are:AddressAnyTypeAutoNumberBase64BitVectorBooleanContentCurrencyDataCategoryGroupReferenceDateOnlyDateTimeDivisionDoubleDynamicEnumEmailEncryptedBase64EncryptedTextEntityIdEnumOrIdExternalIdFaxFileHtmlMultiLineTextHtmlStringPlusClobInetAddressJsonLocationMultiEnumMultiLineTextNamespacePercentPersonNamePhoneRawRecordTypeSfdcEncryptedTextSimpleNamespaceStringPlusClobSwitchable_PersonNameTextTimeOnlyUrlYearQuarter |
| FieldName | TypestringPropertiesFilter, SortDescriptionThe name of the field changed. |
| IsDataAvailable | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether valid data is available in the old and new value fields. This field is false if, for example, the fields are encrypted or the changed values are too large, such as for Description field types.The default value is false. |
| NewValueDateTime | TypedateTimePropertiesNillableDescriptionThe new value for date type fields. |
| NewValueNumber | TypedoublePropertiesNillableDescriptionThe new value for number type fields. |
| NewValueText | TypestringPropertiesNillableDescriptionThe new value for all other field types that are not a date or number type. |
| OldValueDateTime | TypedateTimePropertiesNillableDescriptionOld value for date type fields. |
| OldValueNumber | TypedoublePropertiesNillableDescriptionOld value for number type fields. |
| OldValueText | TypestringPropertiesNillableDescriptionThe old value for all other field types that are not a date or number type. |
| Operation | TypepicklistPropertiesRestricted picklistDescriptionThe operation of the field value change.Possible values are:deleteupdate |

## Indexed Fields

When you're querying ActivityFieldHistory with SOQL, you must specify indexed fields in the WHERE clause filter starting from the first field defined in the index. If you specify a partial list of indexed fields, don't leave any gaps between indexed fields after the first field. Here are the indexed fields for ActivityFieldHistory, listed from first to last in the index order.

1\. ActivityId

2\. ChangedDate

3\. ChangedById

4\. FieldName

5\. ActivityFieldChange

For example, this SOQL query succeeds because the first three indexed fields are in the WHERE clause.

```

```

If you remove the ActivityId field from the WHERE clause, the query fails.

```

```

#### See Also

-   [Big Objects Implementation Guide: SOQL with Big Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object_querying.htm "Big Objects Implementation Guide: SOQL with Big Objects - html (New Window)")

-   [Big Objects Implementation Guide: Big Objects](https://developer.salesforce.com/docs/atlas.en-us.254.0.bigobjects.meta/bigobjects/big_object.htm "Big Objects Implementation Guide: Big Objects - html (New Window)")

## Code Examples

```
SELECT ActivityId, OldValueText, NewValueText, FieldName, ChangedDate
FROM ActivityFieldHistory
WHERE ActivityId = 'SomeId' AND ChangedDate >= :startDate AND ChangedDate <= :endDate
ORDER BY ChangedDate
```

```
SELECT ActivityId, OldValueText, NewValueText, FieldName, ChangedDate
FROM ActivityFieldHistory
WHERE ChangedDate >= :startDate AND ChangedDate <= :endDate
ORDER BY ChangedDate
```
