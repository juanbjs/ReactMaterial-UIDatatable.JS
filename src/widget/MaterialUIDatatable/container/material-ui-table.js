import React, { Component } from 'react';

import Table from '../component/table';

import { jsonToExcel } from '../../../utils/JsonToExcel.js';

class MaterialUITable extends Component {

  constructor() {
    super();
    this.state = {
      rowsFilter: [],
      rows: [],
      rowsProperties: [],
      rowsName: [],
      title: '',
      exportData: false,
      exportFileName: '',
      loadData: false,
      filterValue: '',
      page: 0,
      rowsPerPage: 10,
    };

    this.filterData = this.filterData.bind(this)
    this.exportXLS = this.exportXLS.bind(this)
    this.clearFilterData = this.clearFilterData.bind(this)
    this.handleChangePage = this.handleChangePage.bind(this)
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this)
  }

  componentDidUpdate() {
    if (this.state.rows.length !== this.props.rows.length) {

      const rowsName = this.props.rowsProperties.map(
        (item) => ({
          id: item.id,
          aling: item.aling
        })
      );

      this.setState({
        rowsFilter: this.props.rows,
        rows: this.props.rows,
        rowsProperties: this.props.rowsProperties,
        rowsName: rowsName,
        title: this.props.title,
        exportData: this.props.exportData,
        exportFileName: this.props.exportFileName,
      });
    }
  }

  filter(value) {

    let dataSearch = value;
    let dataFilter = []
    let rowsName = this.state.rowsName;
    let flag = true;

    this.state.rows.forEach(
      (row) => {
        rowsName.forEach(
          (item) => {
            if ((row[item.id] + "").toUpperCase().includes(dataSearch) && flag) {
              dataFilter.push(row)
              flag = false;
            }
          }
        )
        flag = true;
      }
    )

    this.setState({
      rowsFilter: dataFilter,
      filterValue: dataSearch,
      page: 0,
    });
  }

  filterData(e) {
    this.filter(e.target.value.toUpperCase())
  }

  clearFilterData() {
    this.filter('')
  }

  exportXLS() {
    jsonToExcel(this.state.rowsProperties, this.state.rows, this.state.exportFileName)
  }

  handleChangePage(event, newPage) {
    this.setState({
      page: newPage,
    });
  }

  handleChangeRowsPerPage(event) {
    this.setState({
      page: 0,
      rowsPerPage: +event.target.value,
    });
  }

  render() {

    return (
      <Table
        rows={this.state.rowsFilter}
        rowsProperties={this.state.rowsProperties}
        checkView={this.state.checkView}
        title={this.state.title}
        filterData={this.filterData}
        filterValue={this.state.filterValue}
        clearFilterData={this.clearFilterData}
        exportXLS={this.exportXLS}
        rowsName={this.state.rowsName}
        exportData={this.state.exportData}
        page={this.state.page}
        rowsPerPage={this.state.rowsPerPage}
        handleChangePage={this.handleChangePage}
        handleChangeRowsPerPage={this.handleChangeRowsPerPage}
        onDobleClickRowSelected = {this.props.onDobleClickRowSelected}
      />
    )
  }
}

export default MaterialUITable;
