import React, { Component } from 'react';

import './App.css';

import { Table, Button } from './widget';


class App extends Component {

  constructor() {
    super();
    this.state = {
      rowsProperties: [
        { label: 'columna 1', id: 'columna1', aling: 'right' },
        { label: 'columna 2', id: 'columna2', aling: 'left' },
        { label: 'columna 3', id: 'columna3', aling: 'right' },
        { label: 'columna 4', id: 'columna4', aling: 'left' },
        { label: 'columna 5', id: 'columna5', aling: 'left' },
      ],
      data: [],
    }
  }

  componentDidMount() {
    let data = [
      {
        columna1: '123',
        columna2: 'Texto de prueba',
        columna3: '1.132.654',
        columna4: 'Texto de prueba 2',
        columna5: <Button
                    title="Detalle"
                    onClick={() => console.log("Evento Click desde boton dentro del data table")}
                  />,
      },
      {
        columna1: '456',
        columna2: 'Texto de prueba',
        columna3: '1.132.654',
        columna4: 'Texto de prueba 2',
        columna5: <Button
                    title="Detalle"
                    onClick={() => console.log("Evento Click desde boton dentro del data table")}
                  />,
      },
      {
        columna1: '789',
        columna2: 'Texto de prueba',
        columna3: '1.132.654',
        columna4: 'Texto de prueba 2',
        columna5: <Button
                    title="Detalle"
                    onClick={() => console.log("Evento Click desde boton dentro del data table")}
                  />,
      },
      {
        columna1: '147',
        columna2: 'Texto de prueba',
        columna3: '1.132.654',
        columna4: 'Texto de prueba 2',
        columna5: <Button
                    title="Detalle"
                    onClick={() => console.log("Evento Click desde boton dentro del data table")}
                  />,
      },
    ];

    this.setState({
      data: data,
    })
  }

  async onDobleClickRowSelected(data) {
    console.log(data)
  }

  render() {
    return (
      <div className="App" >
        <section className="App-Section">
          <div>
            <Table
              rows={this.state.data}
              rowsProperties={this.state.rowsProperties}
              title=""
              exportFileName={"Documento prueba"}
              exportData={true}
              onDobleClickRowSelected={this.onDobleClickRowSelected}
            />
          </div>
        </section>
      </div>
    )
  }
}

export default App;
