var $ = jQuery = require('jquery');
var _ = require('lodash');
var bootstrap = require('bootstrap');
var fs = eRequire('fs');

var React = require('react');
var ReactDom = require('react-dom');

//load react data gird with addons
var ReactDataGrid = require('react-data-grid/addons');

import reactDataGridCss1 from '../css/grid_theme/react-data-grid-checkbox.css';
import reactDataGridCss2 from '../css/grid_theme/react-data-grid-row.css';
import reactDataGridCss3 from '../css/grid_theme/react-data-grid-cell.css';
import reactDataGridCss4 from '../css/grid_theme/react-data-grid-header.css';
import reactDataGridCss5 from '../css/grid_theme/react-data-grid-core.css';
import reactDataGridCss6 from '../css/grid_theme/react-data-grid-toolbar.css';
import reactDataGridCss7 from '../css/grid_theme/react-data-grid-drop-target.css';
import reactDataGridCss8 from '../css/grid_theme/react-data-grid-image.css';

var MainInterface = React.createClass({
    getInitialState() {
        this.createRows();
        this._columns = [
            { key: 'id', name: 'ID' },
            { key: 'title', name: 'Title' },
            { key: 'count', name: 'Count' }];

        return null;
    },
    createRows() {
        let rows = [];
        for (let i = 1; i < 1000; i++) {
            rows.push({
                id: i,
                title: 'Title ' + i,
                count: i * 1000
            });
        }

        this._rows = rows;
    },
    rowGetter(i) {
        return this._rows[i];
    },
    render: function () {
        return (
            <ReactDataGrid columns={this._columns} rowGetter={this.rowGetter} rowsCount={this._rows.length} minHeight={500} />
        );
    }
});

ReactDom.render(
    <MainInterface />,
    document.getElementById("main")
);