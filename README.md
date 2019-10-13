# ReactMaterial-UIDatatable.JS

This library creates a material-ui datable based on JSON parameters

## Example

![alt text](https://github.com/juanbjs/ReactMaterial-UIDatatable.JS/blob/master/MaterialUIDatatbale.png)

## Installation

Copy the files src/* on your proyect

## Usage

```node
import { Table } from './widget'

// Initialize the state of the component with rowsProperties
// in this parameter you put the columns of the data table
// label: is the name of the column
// id: is the key in the rowData variable
constructor() {
  super();
  this.state = {
    rowsProperties: [
      { label: 'columna 1', id: 'columna1', aling: 'right' },
      { label: 'columna 2', id: 'columna2', aling: 'left' },
      { label: 'columna 3', id: 'columna3', aling: 'right' },
      { label: 'columna 4', id: 'columna4', aling: 'left' },
    ],
    data: [],
  }
}

//in the data variable, you define the rows of the data table
//JSON keys is the same with the "id" key in rowsProperties
componentDidMount() {
  let data = [
    {
      columna1: '123',
      columna2: 'Texto de prueba',
      columna3: '1.132.654',
      columna4: 'Texto de prueba 2',
    },
    {
      columna1: '456',
      columna2: 'Texto de prueba',
      columna3: '1.132.654',
      columna4: 'Texto de prueba 2',
    },
    {
      columna1: '789',
      columna2: 'Texto de prueba',
      columna3: '1.132.654',
      columna4: 'Texto de prueba 2',
    },
    {
      columna1: '147',
      columna2: 'Texto de prueba',
      columna3: '1.132.654',
      columna4: 'Texto de prueba 2',
    },
  ];

  this.setState({
    data: data,
  })
}
```

```html
// this is an example for implementation
// rows, are the rows of the data table
// rowsProperties, are columns of the data table
// exportFileName, is the name of the file to download
// exportData, is a flag, show or hide the export button
// onDobleClickRowSelected, is a double click action function
<Table
  rows={this.state.data}
  rowsProperties={this.state.rowsProperties}
  title=""
  exportFileName={"Documento prueba"}
  exportData={true}
  onDobleClickRowSelected={this.onDobleClickRowSelected}
/>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
