// JavaScript source code
function getRowDataByClass(rowObj,className)
{
    RowValElement = rowObj.getElementsByClassName(className)[0];
    RowValField = RowValElement.getElementsByClassName('field-content')[0];
    if (RowValField.firstChild == null)
        return '';
    RowVal = RowValField.firstChild.data;
    return RowVal;
}
function toCsv(input)
{
    return input.map(row => row.join(',')).join('\n')
}
// Declare table element and class names 
const tableNameElementId = 'voterfraud-print-view';
const tableRowClassName = 'views-row';

//Dec
const dataClassFields = ['views-field views-field-field-fraud-state-administrative-area', // State Field Class Name
                         'views-field views-field-field-year-of-disposition',             // Year Field Class Name
                         'views-field views-field-name',                                  // Name Field Class Name
                         'views-field views-field-field-case-type',                       // Case Type Field Class Name
                         'views-field views-field-field-fraud-type'];                     // Fraud Type Field Class Name

var ancestor = document.getElementById(tableNameElementId);
descendents = ancestor.getElementsByTagName('*');

const dataTable = [["State","Year","Name","Case Type","Fraud Type"]]
for (let i = 0; i < descendents.length; i++) 
{
    e = descendents[i];
    if (e.className == tableRowClassName)
    {
        const rowArray = [];
        for (let j = 0; j < dataClassFields.length; j++)
        {
            rowArray.push(getRowDataByClass(e, dataClassFields[j]));
        }
        dataTable.push(rowArray);
    }
}

const csvString = toCsv(dataTable);
console.log(csvString)