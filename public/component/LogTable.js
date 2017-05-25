import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {indigo600} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import DataTables from 'material-ui-datatables';

import FakeAPI from './FakeAPI';

const styles = {
  appBarTitle: {
    fontSize: 24,
    fontWeight: 'normal',
    WebkitFontSmoothing: 'antialiased',
  },
  container: {
    width:1000
  },
  component: {
    textAlign: 'center',
  },
  iconStyles: {
    paddingLeft: 2,
    color: '#FFF',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo600,
    accent1Color: indigo600,
  },
});

const TABLE_COLUMNS_SORT_STYLE = [
  {
    key: 'id',
    label: 'id',
    sortable: true,
    width: 50,
  }, {
    key: 'url_path',
    label: 'url路径',
    sortable: false,
    width: 50,
  }, {

    key: 'http_method',
    label: '请求类型',
    width: 50,
  }, {
    key: 'http_headers',
    label: '请求头',
    style: {
      lineHeight:'25px',
      width: 500,
      whiteSpace: 'normal',
      textOverflow: 'clip',
      height:100,
      wordWrap: 'break-word',
      wordBreak: 'normal',
    }
  }, {
    width: 50,
    key: 'http_time',
    label: '时间',
  }, 
];

class LogTable extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
    this.handleFilterValueChange = this.handleFilterValueChange.bind(this);
    this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handleRowSizeChange = this.handleRowSizeChange.bind(this);

    this.state = {
      data: [],
      currentPage: 1,
      rowSize: 5,
      total: 0,
      sort: '',
      order: '',
      filter: '',
    };
  }

  componentDidMount() {
    FakeAPI(this.state.currentPage, this.state.rowSize, this.state.sort,
      this.state.order, this.state.filter, (result) => {
        this.setState({
          total: result.count,
          data: result.data,
        });
      }
    );
  }

  handleSortOrderChange(key, order) {
    FakeAPI(this.state.currentPage, this.state.rowSize, key,
      order, this.state.filter, (result) => {
        this.setState({
          total: result.count,
          data: result.data,
          sort: key,
          order: order,
        });
      }
    );
  }

  handleFilterValueChange(value) {
    const page = 1;
    FakeAPI(page, this.state.rowSize, this.state.sort,
      this.state.order, value, (result) => {
        this.setState({
          total: result.count,
          data: result.data,
          filter: value,
          currentPage: page,
        });
      }
    );
  }

  handlePreviousPageClick() {
    const page = this.state.currentPage - 1;
    FakeAPI(page, this.state.rowSize, this.state.sort,
      this.state.order, this.state.filter, (result) => {
        this.setState({
          total: result.count,
          data: result.data,
          currentPage: page,
        });
      }
    );
  }

  handleNextPageClick() {
    const page = this.state.currentPage + 1;
    FakeAPI(page, this.state.rowSize, this.state.sort,
      this.state.order, this.state.filter, (result) => {
        this.setState({
          total: result.count,
          data: result.data,
          currentPage: page,
        });
      }
    );
  }

  handleRowSizeChange(index, rowSize) {
    let page = this.state.currentPage;
    if ((page - 1) * rowSize > this.state.total) {
      page = 1;
    }
    FakeAPI(page, rowSize, this.state.sort,
      this.state.order, this.state.filter, (result) => {
        this.setState({
          total: result.count,
          data: result.data,
          currentPage: page,
          rowSize: rowSize,
        });
      }
    );
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <div style={styles.component}>
            <h2>DataTables (Filter & Column Sort & Styled Column)</h2>
            <Card style={{margin: 12}}>
              <DataTables
                title={'Nutrition'}
                height={'auto'}
                selectable={true}
                showRowHover={true}
                columns={TABLE_COLUMNS_SORT_STYLE}
                data={this.state.data}
                showCheckboxes={false}
                showHeaderToolbar={true}
                onCellClick={this.handleCellClick}
                onCellDoubleClick={this.handleCellDoubleClick}
                onFilterValueChange={this.handleFilterValueChange}
                onNextPageClick={this.handleNextPageClick}
                onPreviousPageClick={this.handlePreviousPageClick}
                onSortOrderChange={this.handleSortOrderChange}
                onRowSizeChange={this.handleRowSizeChange}
                page={this.state.currentPage}
                count={this.state.total}
                rowSize={this.state.rowSize}
                rowSizeList={[5, 10, 15]}
                tableRowColumnStyle={{height:100}}
                tableRowStyle={{height:100}}
              />
            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default LogTable;