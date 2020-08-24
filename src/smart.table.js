
/* Smart UI v7.7.4 (2020-Aug) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

/**
* Table custom element.
*/
Smart('smart-table', class Table extends Smart.ContentElement {
    /**
    * Table's properties
    */
    static get properties() {
        return {
            'columns': {
                value: [],
                type: 'any?',
                reflectToAttribute: false
            },
            'columnReorder': {
                value: false,
                type: 'boolean'
            },
            'conditionalFormatting': {
                value: null,
                type: 'array?',
                reflectToAttribute: false
            },
            'conditionalFormattingButton': {
                value: false,
                type: 'boolean'
            },
            'dataSource': {
                value: null,
                type: 'any?',
                reflectToAttribute: false
            },
            'dataTransform': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            },
            'editing': {
                value: false,
                type: 'boolean'
            },
            'editMode': {
                value: 'cell',
                allowedValues: ['cell', 'row'],
                type: 'string'
            },
            'filtering': {
                value: false,
                type: 'boolean'
            },
            'filterRow': {
                value: false,
                type: 'boolean'
            },
            'filterTemplate': {
                value: null,
                type: 'string?'
            },
            'footerRow': {
                value: null,
                type: 'string?'
            },
            'freezeFooter': {
                value: false,
                type: 'boolean'
            },
            'freezeHeader': {
                value: false,
                type: 'boolean'
            },
            'grouping': {
                value: false,
                type: 'boolean'
            },
            'headerRow': {
                value: null,
                type: 'string?'
            },
            'keyboardNavigation': {
                value: false,
                type: 'boolean'
            },
            'messages': {
                value: {
                    'en': {
                        'add': 'Add condition',
                        'all': 'All columns',
                        'apply': 'Apply',
                        'between': 'Between',
                        'cancel': 'Cancel',
                        'clearFilter': 'Clear filter',
                        'close': 'Close',
                        'column': 'Column:',
                        'condition': 'Condition:',
                        'conditionalFormatting': 'Conditional Formatting',
                        'CONTAINS': 'contains',
                        'CONTAINS_CASE_SENSITIVE': 'contains (case sensitive)',
                        'DOES_NOT_CONTAIN': 'does not contain',
                        'DOES_NOT_CONTAIN_CASE_SENSITIVE': 'does not contain (case sensitive)',
                        'EMPTY': 'empty',
                        'ENDS_WITH': 'ends with',
                        'ENDS_WITH_CASE_SENSITIVE': 'ends with (case sensitive)',
                        'EQUAL': 'equal',
                        'equal': 'Equal To',
                        'EQUAL_CASE_SENSITIVE': 'equal (case sensitive)',
                        'filterPlaceholder': 'Filter',
                        'filterCondition': 'Filter condition',
                        'firstButton': 'First',
                        'fontFamily': 'Font family:',
                        'fontSize': 'Font size:',
                        'format': 'Format:',
                        'formatColumn': 'Format Column',
                        'GREATER_THAN': 'greater than',
                        'GREATER_THAN_OR_EQUAL': 'greater than or equal',
                        'greaterThan': 'Greater Than',
                        'highlight': 'Highlight',
                        'invalidValue': 'Invalid value',
                        'itemsPerPage': 'Items per page:',
                        'lastButton': 'Last',
                        'LESS_THAN': 'less than',
                        'LESS_THAN_OR_EQUAL': 'less than or equal',
                        'lessThan': 'Less Than',
                        'nextButton': 'Next',
                        'NOT_EMPTY': 'not empty',
                        'NOT_EQUAL': 'not equal',
                        'NOT_NULL': 'not null',
                        'notEqual': 'Not Equal To',
                        'NULL': 'null',
                        'ok': 'OK',
                        'previousButton': 'Previous',
                        'remove': 'Remove condition',
                        'secondValue': 'Second value:',
                        'STARTS_WITH': 'starts with',
                        'STARTS_WITH_CASE_SENSITIVE': 'starts with (case sensitive)',
                        'summaryPrefix': 'of',
                        'text': 'Text',
                        'value': 'Value:',
                        'with': 'with'
                    }
                },
                type: 'object',
                extend: true
            },
            'onCellRender': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            },
            'onColumnRender': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            },
            'onInit': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            },
            'pageSize': {
                value: 10,
                allowedValues: [10, 25, 50],
                type: 'int'
            },
            'pageIndex': {
                value: 0,
                type: 'int'
            },
            'paging': {
                value: false,
                type: 'boolean'
            },
            'rowDetailTemplate': {
                value: null,
                type: 'string?'
            },
            'selection': {
                value: false,
                type: 'boolean'
            },
            'selectionMode': {
                value: 'many',
                type: 'string',
                allowedValues: ['many', 'extended']
            },
            'sort': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            },
            'sortMode': {
                value: 'none',
                type: 'string',
                allowedValues: ['none', 'one', 'many']
            },
            'tooltip': {
                value: false,
                type: 'boolean'
            }
        }
    }

    /**
     * Table's event listeners.
     */
    static get listeners() {
        return {
            'resize': '_resizeHandler',
            'conditionalFormattingButton.click': '_conditionalFormattingButtonClickHandler',
            'filterInput.keyup': '_filterInputKeyupHandler',
            'pager.change': '_pagerChangeHandler',
            'pager.pageSizeChanged': '_pagerPageSizeChanged',
            'tableContainer.change': '_tableContainerChangeHandler',
            'tableContainer.click': '_tableContainerClickHandler',
            'tableContainer.down': '_tableContainerDownHandler',
            'tableContainer.focus': '_tableContainerFocusHandler',
            'tableContainer.keydown': '_tableContainerKeydownHandler',
            'tableContainer.keyup': '_tableContainerKeyupHandler',
            'tableContainer.pointerover': '_tableContainerPointeroverHandler',
            'document.down': '_documentDownHandler',
            'document.move': '_documentMoveHandler',
            'document.up': '_documentUpHandler'
        };
    }

    template() {
        return `<div id="container" class="smart-container" role="presentation">
                    <div id="header" class="smart-table-header">
                        <smart-input id="filterInput" class="underlined" animation="[[animation]]" locale="[[locale]]" right-to-left="[[rightToLeft]]"></smart-input>
                        <div id="filterTemplateContainer" class="smart-table-filter-template-container smart-hidden"></div>
                        <smart-button id="conditionalFormattingButton" class="smart-table-toolbar-button conditional-formatting" animation="[[animation]]" right-to-left="[[rightToLeft]]" aria-label="Conditional Formatting"></smart-button>
                    </div>
                    <table id="tableContainer" inner-h-t-m-l=\'[[innerHTML]]\' class="smart-table-container">
                        <content></content>
                    </table>
                    <smart-pager id="pager" animation="[[animation]]" locale="[[locale]]" page-index="[[pageIndex]]" page-size="[[pageSize]]" pages-count="null" show-first-last-navigation-buttons show-page-size-selector show-prev-next-navigation-buttons show-summary right-to-left="[[rightToLeft]]"></smart-pager>
                    <div id="loadingIndicatorContainer" class="smart-loader-container smart-hidden" aria-label="Loading">
                        <span id="loadingIndicator" class="smart-loader" role="presentation"></span>
                    </div>
                </div>`;
    }

    render() {
        const that = this,
            computedStyle = getComputedStyle(that);

        that.setAttribute('role', 'presentation');

        that._defaults = {
            fontFamily: computedStyle.fontFamily,
            fontSize: computedStyle.fontSize,
            text: that._toHex(computedStyle.color),
            highlight: that._toHex(computedStyle.backgroundColor)
        };
        that._isMobile = Smart.Utilities.Core.isMobile;
        that._autoScrollCoefficient = Smart.Utilities.Core.Browser.Firefox ? 8 : Smart.Utilities.Core.Browser.Edge ? 16 : 4;
        that._dblclickObject = { numberOfClicks: 0 };
        that._selectedIds = [];
        that._disabledSelection = [];

        that._setFocusable();

        if (that.selection) {
            that.$.tableContainer.setAttribute('aria-multiselectable', true);
        }

        that._createElement();

        super.render();
    }

    /**
     * Called when the element is attached to the DOM.
     */
    attached() {
        const that = this;

        super.attached();

        if (that.isCompleted && that._dialog) {
            that._addDialogHandlers();
            that.getShadowRootOrBody().appendChild(that._dialog);
        }
    }

    /**
     * Called when the element is detached from the DOM.
     */
    detached() {
        const that = this;

        super.detached();

        if (!that._dialog) {
            return;
        }

        const dialog = that._dialog;

        dialog.removeEventListener('change', that._dialogEventHandler);
        dialog.removeEventListener('clear', that._dialogEventHandler);
        dialog.removeEventListener('click', that._dialogEventHandler);
        dialog.removeEventListener('close', that._dialogEventHandler);
        dialog.removeEventListener('filter', that._dialogEventHandler);
        dialog.remove();
    }

    /**
     * Adds a filter to a specific column.
     *
     * @param {string} dataField The column's data field.
     * @param {FilterGroup} filter FilterGroup object.
     */
    addFilter(dataField, filter) {
        const that = this,
            column = that.columnByDataField[dataField];

        if (!column || column.allowFilter === false ||
            filter instanceof Smart.Utilities.FilterGroup === false) {
            return;
        }

        dataField = column.dataField;

        if (that._designerFiltersApplied) {
            that._clearDesignerFilters();
        }

        if (!that._filterInfo.appliedFilters) {
            that._filterInfo.appliedFilters = {};
        }

        that._filterInfo.appliedFilters[dataField] = filter;
        that._refreshFilters('add');
    }

    /**
     * Groups by a column.
     *
     * @param {string} dataField The column's data field.
     */
    addGroup(dataField) {
        const that = this;

        if (!that.grouping) {
            return;
        }

        const column = that.columnByDataField[dataField];

        if (!column || column.allowGroup === false) {
            return;
        }

        const dataSource = that.dataSource,
            groupBy = dataSource.groupBy;

        dataField = column.dataField;

        if (groupBy.indexOf(dataField) !== -1) {
            return;
        }

        groupBy.push(dataField);
        dataSource.refreshHierarchy();
        that._fullRefresh();

        that.$.fireEvent('group', { action: 'add', dataField: dataField });
    }

    /**
     * Begins an edit operation.
     *
     * @param {number|string} row The id of the row to edit.
     * @param {string} dataField Optional The dataField of the cell's column.
     */
    beginEdit(row, dataField) {
        const that = this;

        if (!that.editing) {
            return;
        }

        const column = that.columnByDataField[dataField];

        if (!column) {
            dataField = undefined;
        }
        else {
            dataField = column.dataField;
        }

        if (that.editMode === 'cell' && !dataField ||
            column && column.allowEdit === false) {
            return;
        }

        const rowObject = that.rowById[row];

        if (!rowObject) {
            return;
        }

        const parsedId = rowObject.data.$.id;

        if (that._editing) {
            that.endEdit();
        }

        that._beginEdit({
            rowId: parsedId,
            rowObject: rowObject,
            dataField: dataField
        });
    }

    /**
     * Ends the current edit operation and discards changes.
     */
    cancelEdit() {
        const that = this,
            editingInfo = that._editing;

        if (!editingInfo) {
            return;
        }

        for (let i = 0; i < editingInfo.cells.length; i++) {
            const cell = editingInfo.cells[i];

            if (cell.editor.contains((that.shadowRoot || that.getRootNode()).activeElement)) {
                that._focusCell(cell.element);
            }

            cell.editor.remove();
            that._setCellContent(cell.element, that._formatCellValue(editingInfo.row, that.columnByDataField[cell.dataField], cell.element));
            cell.element.classList.remove('editing');
        }

        delete that._editing;
    }

    /**
     * Clears applied filters.
     */
    clearFilters() {
        const that = this;

        that._clearFilterInput();
        that._clearRowFilters();
        delete that._filterInfo.appliedFilters;

        if (!that.dataSource.virtualDataSource) {
            that.dataSource.clearFilter();
        }

        that._fullRefresh('filter');
        that.$.fireEvent('filter', { action: 'remove' });
    }

    /**
     * Clears grouping.
     */
    clearGrouping() {
        const that = this,
            dataSource = that.dataSource,
            groupBy = dataSource.groupBy;

        if (groupBy.length === 0) {
            return;
        }

        dataSource.groupBy = [];
        dataSource.refreshHierarchy();
        that._fullRefresh();

        that.$.fireEvent('group', { action: 'remove' });
    }

    /**
     * Clears selection.
     */
    clearSelection() {
        const that = this;

        if (that._selectedIds.length === 0) {
            return;
        }

        Array.from(that.$.tableContainer.querySelectorAll('.smart-table-select-row')).forEach(td => {
            td.parentElement.setAttribute('aria-selected', false);
            td.classList.remove('selected');
        });
        that.$.tableContainer.querySelector('.smart-table-select-all').classList.remove('indeterminate', 'selected');

        that._selectedIds = [];
    }

    /**
     * Collapses all rows (in tree mode).
     */
    collapseAllRows() {
        const that = this;

        if (!that.hasAttribute('hierarchy') || that.grouping) {
            return;
        }

        function collapse(siblings) {
            for (let i = 0; i < siblings.length; i++) {
                const sibling = siblings[i];

                if (sibling.leaf) {
                    continue;
                }

                if (sibling.children) {
                    collapse(sibling.children);
                }

                if (sibling.expanded) {
                    that.collapseRow(sibling.$.id);
                }
            }
        }

        collapse(that.dataSource.boundHierarchy);
    }

    /**
     * Collapses a group.
     *
     * @param {string} index The group's hierarchical index.
     */
    collapseGroup(index) {
        const that = this;

        if (!that.grouping || that.dataSource.groupBy.length === 0) {
            return;
        }

        const group = that._getGroupByIndex(index);

        if (!group || !group.expanded) {
            return;
        }

        const groupHeader = that.$.tableContainer.querySelector(`tr[row-id="${group.$.id}"]`);

        that.$.fireEvent('group', { action: 'collapse', dataField: group.groupDataField, label: group.label });

        if (!groupHeader) {
            // group is not in view
            group.expanded = false;
            return;
        }

        if (that._isCollapsed(group)) {
            groupHeader.setAttribute('aria-expanded', false);
            groupHeader.classList.remove('expanded');
            group.expanded = false;
            return;
        }

        that._hierarchyArrowClickHandler(groupHeader);
    }

    /**
     * Collapses a row (in tree mode).
     *
     * @param {string | number} rowId The id of the row to collapse.
     */
    collapseRow(rowId) {
        const that = this;

        if (!that.hasAttribute('hierarchy') || that.grouping) {
            return;
        }

        const rowObject = that.rowById[rowId],
            data = rowObject.data;

        if (!rowObject || data.leaf || !data.expanded) {
            return;
        }

        const rowElement = that.$.tableContainer.querySelector(`tr[row-id="${rowId}"]`);

        if (!rowElement) {
            // row is not in view
            data.expanded = false;
            return;
        }

        if (that._isCollapsed(data)) {
            rowElement.setAttribute('aria-expanded', false);
            rowElement.classList.remove('expanded');
            data.expanded = false;
            return;
        }

        that._hierarchyArrowClickHandler(rowElement);
    }

    /**
     * Ends the current edit operation and saves changes.
     */
    endEdit() {
        const that = this,
            editingInfo = that._editing;

        if (!editingInfo) {
            return;
        }

        const row = editingInfo.row,
            data = row.data,
            editingResults = [];
        let valid = true;

        for (let i = 0; i < editingInfo.cells.length; i++) {
            const cell = editingInfo.cells[i],
                column = that.columnDataField[cell.dataField],
                cellElement = cell.element,
                editor = cell.editor;
            let newValue;

            if (column.editor && column.editor.template) {
                if (column.editor.getValue) {
                    newValue = column.editor.getValue(editor);
                }
            }
            else {
                newValue = editor.value;

                if (editor instanceof HTMLInputElement) {
                    if (editor.type === 'number') {
                        newValue = parseFloat(newValue);
                    }
                    else if (editor.type === 'date') {
                        newValue = new Date(newValue);

                        if (isNaN(newValue.getTime())) {
                            newValue = null;
                        }
                    }
                }
            }

            if (column.validation) {
                const validationResult = column.validation(newValue),
                    invalid = validationResult !== undefined && validationResult !== true;

                if (invalid) {
                    let message;

                    if (typeof validationResult === 'object' && validationResult.message) {
                        message = validationResult.message;
                    }
                    else {
                        message = that.localize('invalidValue');
                    }

                    cellElement.setAttribute('validation-message', message);
                }
                else {
                    cellElement.removeAttribute('validation-message');
                }

                cellElement.classList.toggle('invalid', invalid);
                valid = valid && !invalid;
            }

            editingResults.push({ column: column, newValue: newValue });
        }

        if (!valid) {
            return;
        }

        for (let i = 0; i < editingInfo.cells.length; i++) {
            const cell = editingInfo.cells[i],
                editingResult = editingResults[i],
                column = editingResult.column,
                editor = cell.editor;

            if (editor.contains((that.shadowRoot || that.getRootNode()).activeElement)) {
                that._focusCell(cell.element);
            }

            editor.remove();
            data[cell.dataField] = editingResult.newValue;
            that._setCellContent(cell.element, that._formatCellValue(row, column, cell.element));
            cell.element.classList.remove('editing');

            that.$.fireEvent('cellEndEdit', { row: data, dataField: cell.dataField });
        }

        delete that._editing;
    }

    /**
     * Expands all rows (in tree mode).
     */
    expandAllRows() {
        const that = this;

        if (!that.hasAttribute('hierarchy') || that.grouping) {
            return;
        }

        function expand(siblings) {
            for (let i = 0; i < siblings.length; i++) {
                const sibling = siblings[i];

                if (sibling.leaf) {
                    continue;
                }

                if (sibling.children) {
                    expand(sibling.children);
                }

                if (!sibling.expanded) {
                    that.expandRow(sibling.$.id);
                }
            }
        }

        expand(that.dataSource.boundHierarchy);
    }

    /**
     * Expands a group.
     *
     * @param {string} index The group's hierarchical index.
     */
    expandGroup(index) {
        const that = this,
            dataSource = that.dataSource;

        if (!that.grouping || dataSource.groupBy.length === 0) {
            return;
        }

        const group = that._getGroupByIndex(index);

        if (!group) {
            return;
        }

        const groupHeader = that.$.tableContainer.querySelector(`tr[row-id="${group.$.id}"]`);

        if (!group.expanded) {
            that.$.fireEvent('group', { action: 'expand', dataField: group.groupDataField, label: group.label });
        }

        if (!groupHeader) {
            // group is not in view
            group.expanded = true;
            return;
        }

        if (that._isCollapsed(group)) {
            let parent = group.parent;

            if (parent && !parent.expanded) {
                that.expandGroup(group.parent.$.id.replace('Item', '').replace(/_/g, '.'));
            }
        }

        if (!group.expanded) {
            that._hierarchyArrowClickHandler(groupHeader);
        }
    }

    /**
     * Expands a row (in tree mode).
     *
     * @param {string | number} rowId The id of the row to expand.
     */
    expandRow(rowId) {
        const that = this;

        if (!that.hasAttribute('hierarchy') || that.grouping) {
            return;
        }

        const rowObject = that.rowById[rowId],
            data = rowObject.data;

        if (!rowObject || data.leaf) {
            return;
        }

        const rowElement = that.$.tableContainer.querySelector(`tr[row-id="${rowId}"]`);

        if (!rowElement) {
            // row is not in view
            data.expanded = true;
            return;
        }

        if (that._isCollapsed(data)) {
            let parent = data.parent;

            if (parent && !parent.expanded) {
                that.expandRow(parent.$.id);
            }
        }

        if (!data.expanded) {
            that._hierarchyArrowClickHandler(rowElement);
        }
    }

    /**
     * Exports the Table's data.
     *
     * @param {String} dataFormat The file format to export to.
     * @param {String} fileName Optional The name of the file to export to.
     * @param {boolean} exportFiltered Optional If set to true, exports only filtered records.
     * @param {Function} callback Optional A callback function to pass the exported data to (if fileName is not provided).
     */
    exportData(dataFormat, fileName, exportFiltered, callback) {
        const that = this,
            dataSource = that.dataSource,
            computedStyle = getComputedStyle(that),
            borderColor = computedStyle.borderRightColor,
            dataExporter = new Smart.Utilities.DataExporter(undefined, dataSource.groupBy.toArray()),
            headerRow = {},
            headerCells = that.$.tableContainer.firstElementChild.querySelectorAll('th');
        let dataSourceToExport;

        function processHierarchy(siblings) {
            const result = [];

            siblings.forEach(child => {
                if (exportFiltered && child.$.filtered === false) {
                    return;
                }

                result.push(child);

                if (!child.leaf) {
                    child._expanded = child.expanded;

                    if (child.children) {
                        child.children = processHierarchy(child.children);

                        if (child.children.length === 0) {
                            child._expanded = undefined;
                            child.children = undefined;
                            child.leaf = true;
                        }
                    }
                }
            });

            return result;
        }

        if (dataSource.virtualDataSource) {
            dataSourceToExport = [];

            for (let i = 0; i < that.rows.length; i++) {
                dataSourceToExport.push(that.rows[i].data);
            }
        }
        else if (dataSource.boundHierarchy && !that.grouping) {
            dataExporter.hierarchical = true;
            dataSourceToExport =
                processHierarchy(JSON.parse(JSON.stringify(dataSource.boundHierarchy, (key, value) => {
                    if (key === 'parent') {
                        return undefined;
                    }

                    return value;
                })));
        }
        else {
            dataSourceToExport = Array.from(dataSource.toArray());

            if (exportFiltered) {
                dataSourceToExport = dataSourceToExport.filter(record => record.$.filtered !== false);
            }
        }

        dataExporter.style = {
            border: '1px solid ' + borderColor,
            borderCollapse: 'collapse',
            backgroundColor: computedStyle.backgroundColor,
            color: computedStyle.color,
            fontFamily: 'Helvetica',
            header: {
                border: '1px solid ' + borderColor,
                fontWeight: 'bold'
            },
            columns: {
                border: '1px solid ' + borderColor
            }
        };

        for (let i = 0; i < that._columns.length; i++) {
            const column = that._columns[i],
                headerCell = headerCells[i],
                headerStyle = {},
                columnStyle = {};
            let columnWidth = headerCell.offsetWidth + 'px';

            headerRow[column.dataField] = column.label;

            if (column.dataType === 'date') {
                columnStyle.format = 'd';
            }

            headerStyle.width = columnWidth;

            dataExporter.style.header[column.dataField] = headerStyle;
            dataExporter.style.columns[column.dataField] = columnStyle;
        }

        dataSourceToExport.unshift(headerRow);

        return dataExporter.exportData(dataSourceToExport, dataFormat, fileName, callback);
    }

    /**
     * Returns an array of selected row ids.
     */
    getSelection() {
        return this._selectedIds;
    }

    /**
     * Returns the value of a cell.
     *
     * @param {number|string} row The id of the cell's row.
     * @param {string} dataField The dataField of the cell's column.
     */
    getValue(row, dataField) {
        const that = this,
            column = that.columnDataField[dataField];

        if (!column) {
            return;
        }

        const rowObject = that.rowById[row];

        if (!rowObject) {
            return;
        }

        return rowObject.data[column.dataField];
    }

    /**
     * Navigates to a page.
     *
     * @param {number} pageIndex The zero-based page index to navigate to.
     */
    navigateTo(pageIndex) {
        const that = this;

        if (isNaN(pageIndex) || pageIndex === null) {
            return;
        }

        const oldValue = that.pageIndex;

        that.pageIndex = Math.max(Math.min(Math.round(pageIndex), that.$.pager.pagesCount - 1), 0);

        if (that.paging && that.pageIndex !== oldValue) {
            that._fullRefresh('pageIndexChange');
            that.$.fireEvent('page', { action: 'pageIndexChange' });
        }
    }

    /**
     * Removes filters applied to a specific column.
     *
     * @param {string} dataField The column's data field.
     */
    removeFilter(dataField) {
        const that = this,
            column = that.columnByDataField[dataField];

        if (!that._filterInfo.appliedFilters || !column) {
            return;
        }

        dataField = column.dataField;

        if (that._designerFiltersApplied) {
            that._clearDesignerFilters(dataField);
        }

        delete that._filterInfo.appliedFilters[dataField];
        that._refreshFilters('remove');
    }

    /**
     * Removes grouping by a column.
     *
     * @param {string} dataField The column's data field.
     */
    removeGroup(dataField) {
        const that = this,
            column = that.columnByDataField[dataField];

        if (!that.grouping || !column) {
            return;
        }

        dataField = column.dataField;

        const dataSource = that.dataSource,
            groupBy = dataSource.groupBy,
            index = groupBy.indexOf(dataField);

        if (index === -1) {
            return;
        }

        groupBy.splice(index, 1);
        dataSource.refreshHierarchy();
        that._fullRefresh();

        that.$.fireEvent('group', { action: 'remove', dataField: dataField });
    }

    /**
     * Selects a row.
     *
     * @param {string | number} rowId The id of the row to select.
     */
    select(rowId) {
        const that = this;

        if (!that.selection) {
            return;
        }

        const rowObject = that.rowById ? that.rowById[rowId] :
            that.rows.dataItemById[rowId];

        if (!rowObject) {
            return;
        }

        const parsedId = rowObject.data ? rowObject.data.$.id : rowObject.$.id;

        if (that._selectedIds.indexOf(parsedId) !== -1 ||
            that._disabledSelection.indexOf(parsedId) !== -1) {
            return;
        }

        const rowElement = that.$.tableContainer.querySelector(`tr[row-id="${parsedId}"`);

        that._selectedIds.push(parsedId);

        if (rowElement) {
            rowElement.firstElementChild.classList.add('selected');
            rowElement.setAttribute('aria-selected', true);
        }

        that._updateSelectAllState();
        that.$.fireEvent('change');
    }

    /**
     * Sets the value of a cell.
     *
     * @param {number|string} row The id of the cell's row.
     * @param {string} dataField The dataField of the cell's column.
     * @param {any} value The new value of the cell.
     */
    setValue(row, dataField, value) {
        const that = this,
            column = that.columnByDataField[dataField];

        if (!column) {
            return;
        }

        const rowObject = that.rowById[row];

        if (!rowObject) {
            return;
        }

        dataField = column.dataField;

        const cell = that.$.tableContainer.querySelector(`tr[row-id="${row}"] td[data-field="${dataField}"]`);

        that.dataSource._updating = true;
        rowObject.data[dataField] = value;
        that._setCellContent(cell, that._formatCellValue(rowObject, column, cell), cell.classList.contains('tree-cell'));
        delete that.dataSource._updating;
    }

    /**
     * Unselects a row.
     *
     * @param {string | number} rowId The id of the row to unselect.
     */
    unselect(rowId) {
        const that = this;

        if (!that.selection) {
            return;
        }

        const rowObject = that.rowById ? that.rowById[rowId] :
            that.rows.dataItemById[rowId];

        if (!rowObject) {
            return;
        }

        const parsedId = rowObject.data ? rowObject.data.$.id : rowObject.$.id,
            selectedIdIndex = that._selectedIds.indexOf(parsedId);

        if (selectedIdIndex === -1) {
            return;
        }

        const rowElement = that.$.tableContainer.querySelector(`tr[row-id="${parsedId}"`);

        that._selectedIds.splice(selectedIdIndex, 1);

        if (rowElement) {
            rowElement.firstElementChild.classList.remove('selected');
            rowElement.setAttribute('aria-selected', false);
        }

        that._updateSelectAllState();
        that.$.fireEvent('change');
    }

    /**
     * Called when a property is changed.
     */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        const that = this;

        function clearFilterSort() {
            that._clearFilterInput();
            that._clearRowFilters();
            delete that._filterInfo.appliedFilters;
            that._sortColumns = [];
        }

        function updateDialog(propertyToSet, valueToSet) {
            const elements = [];

            if (that._dialog) {
                elements.push(that._dialog, that._dialog.$.footer.firstElementChild, that._dialog.$.footer.children[1]);
            }

            if (that._formattingPanel) {
                elements.push(that._formattingPanel);
            }

            elements.forEach(element => element[propertyToSet] = valueToSet);
        }

        switch (propertyName) {
            case 'animation':
            case 'theme':
                if (propertyName === 'theme') {
                    const computedStyle = getComputedStyle(that);

                    that._defaults.text = that._toHex(computedStyle.color);
                    that._defaults.highlight = that._toHex(computedStyle.backgroundColor);
                }

                if (that.filterRow) {
                    const filterRow = that.$.tableContainer.querySelector('.smart-table-filter-row'),
                        elements = Array.from(filterRow.querySelectorAll('smart-input, smart-button'));

                    elements.forEach(element => element[propertyName] = newValue);
                }

                updateDialog(propertyName, newValue);
                break;
            case 'columns':
                if (that._conditionalFormatting) {
                    delete that._conditionalFormatting;
                }

                clearFilterSort();
                that._initColumns(true);
                that.refresh();

                if (that._formattingPanel) {
                    that._formattingPanel.columns = that._columns;
                }

                break;
            case 'conditionalFormatting':
                that._applyInitialConditionalFormatting(that.dataSource);
                that._refreshDataRows();
                break;
            case 'conditionalFormattingButton':
                if (!newValue && that._dialog) {
                    that._dialog.close();
                }

                break;
            case 'dataSource': {
                const sortColumns = that._sortColumns,
                    filterInfo = that._filterInfo;

                that._dataBind();

                // restores filtering and sorting after data bind
                if (filterInfo.inputFilters) {
                    that._filterByAll(filterInfo.query);
                }
                else if (filterInfo.rowFilters) {
                    that._applyRowFilters();
                }
                else if (filterInfo.appliedFilters) {
                    that._refreshFilters();
                }

                if (sortColumns) {
                    that._sortColumns = [];
                    sortColumns.forEach(col => {
                        that.columnByDataField[col.dataField].sortOrder = null;
                        that.sortBy(col.dataField, col.direction);
                    });
                }


                break;
            }
            case 'disabled':
            case 'unfocusable':
            case 'keyboardNavigation':
                that._setFocusable();
                updateDialog('unfocusable', that.disabled || that.unfocusable || !that.keyboardNavigation);

                if (propertyName === 'disabled' && that._dialog) {
                    that._dialog.close();
                }

                break;
            case 'editing':
                if (newValue) {
                    that.$.tableContainer.removeAttribute('aria-readonly');
                }
                else {
                    that.$.tableContainer.setAttribute('aria-readonly', true);
                }
                break;
            case 'filtering':
                if (newValue && that.filterRow) {
                    that._createFilterRow();
                }
                else if (newValue === false) {
                    if (that.filterRow) {
                        that.$.tableContainer.querySelector('.smart-table-filter-row').remove();
                    }

                    if (that._filterInfo.query || that._filterInfo.rowFilters || that._filterInfo.appliedFilters) {
                        that.clearFilters();
                    }
                }

                break;
            case 'filterRow':
                that.$.header.classList.toggle('smart-hidden', newValue && !that.filterTemplate);

                if (!that.filtering) {
                    return;
                }

                if (newValue) {
                    that._createFilterRow();
                }
                else {
                    that.$.tableContainer.querySelector('.smart-table-filter-row').remove();

                    if (that._filterInfo.rowFilters) {
                        that.clearFilters();
                    }
                }

                break;
            case 'filterTemplate':
                that._applyFilterTemplate();
                that.$.header.classList.toggle('smart-hidden', that.filterRow && !that.filterTemplate);
                break;
            case 'footerRow': {
                const footer = that.$.tableContainer.querySelector('tfoot');

                if (footer) {
                    footer.remove();
                }

                if (newValue) {
                    that._createFooterRow();
                }

                break;
            }
            case 'grouping':
                if (!newValue) {
                    that.clearGrouping();
                }

                break;
            case 'headerRow': {
                const headerRows = Array.from(that.$.tableContainer.firstElementChild.children);

                for (let i = 1; i < headerRows.length; i++) {
                    headerRows[i].remove();
                }

                if (newValue) {
                    that._createCustomHeaderRow();
                }

                break;
            }
            case 'locale':
            case 'messages': {
                const dialog = that._dialog;

                that._localize();

                if (that.filterRow) {
                    const filterRow = that.$.tableContainer.querySelector('.smart-table-filter-row'),
                        stringConditionsInputs = Array.from(filterRow.querySelectorAll('smart-input.string-filter')),
                        numDateConditionsInputs = Array.from(filterRow.querySelectorAll('smart-input.num-date-filter')),
                        clearFilterButtons = Array.from(filterRow.querySelectorAll('smart-button'));

                    stringConditionsInputs.concat(numDateConditionsInputs).forEach(input => input.title = that.localize('filterCondition'));
                    stringConditionsInputs.forEach(input => {
                        input.dataSource = that._filterInfo.stringConditions;

                        if (input.$.input.dataValue === undefined) {
                            input.value = that.localize('CONTAINS');
                        }
                        else {
                            input.value = that._filterInfo.stringConditions.find(condition => condition.value === input.$.input.dataValue).label;
                        }
                    });
                    numDateConditionsInputs.forEach(input => {
                        input.dataSource = that._filterInfo.numberAndDateConditions;

                        if (input.$.input.dataValue === undefined) {
                            input.value = that.localize('EQUAL');
                        }
                        else {
                            input.value = that._filterInfo.numberAndDateConditions.find(condition => condition.value === input.$.input.dataValue).label;
                        }
                    });
                    clearFilterButtons.forEach(button => button.title = that.localize('clearFilter'));
                }

                if (dialog) {
                    dialog.$.footer.firstElementChild.innerHTML = that.localize('ok');
                    dialog.$.footer.children[1].innerHTML = that.localize('cancel');

                    if (dialog.classList.contains('conditional-formatting')) {
                        dialog.label = that.localize('conditionalFormatting');
                    }
                    else if (dialog.classList.contains('drill-down')) {
                        dialog.label = that.localize('details');
                    }
                }

                if (that._formattingPanel) {
                    that._formattingPanel.messages = that.messages;
                    that._formattingPanel.locale = that.locale;
                }

                break;
            }
            case 'pageIndex':
                that.pageIndex = Math.max(Math.min(Math.round(newValue), that.$.pager.pagesCount - 1), 0);

                if (that.paging && that.pageIndex !== oldValue) {
                    that._fullRefresh('pageIndexChange');
                    that.$.fireEvent('page', { action: 'pageIndexChange' });
                }

                break;
            case 'pageSize':
                if (that.paging) {
                    that._fullRefresh('pageSizeChange');
                    that.$.fireEvent('page', { action: 'pageSizeChange' });
                }

                break;
            case 'paging':
                if (newValue === false) {
                    if (that.dataSource.virtualDataSource) {
                        that.paging = true;
                        return;
                    }

                    if (that.$.pager.pagesCount === 1) {
                        return;
                    }
                }

                that._fullRefresh();
                break;
            case 'rightToLeft':
                Array.from(that.$.tableContainer.querySelectorAll('.freeze-near, .freeze-far')).forEach(td => {
                    td.style.left = null;
                    td.style.right = null;
                    td.style.zIndex = null;
                });

                that._handleFrozenColumnPositions();
                updateDialog('rightToLeft', newValue);
                break;
            case 'selection':
                if (that.filterRow) {
                    const filterRow = that.$.tableContainer.querySelector('.smart-table-filter-row');

                    if (newValue) {
                        filterRow.insertBefore(document.createElement('td'), filterRow.firstElementChild);
                    }
                    else {
                        filterRow.firstElementChild.remove();
                    }
                }

                that.refresh();

                if (newValue) {
                    that.$.tableContainer.setAttribute('aria-multiselectable', true);
                    that._updateSelectAllState();
                }
                else {
                    that.$.tableContainer.removeAttribute('aria-multiselectable');
                }

                break;
            case 'sortMode':
                if (newValue === 'none') {
                    that.clearSort();
                }

                break;
        }
    }

    /**
     * Renders the element. Calls only element-specific functionality.
     */
    _createElement() {
        const that = this;

        that._expandedIds = [];
        that._editors = {};

        that._setupPagingAndFiltering();
        that._localize();
        that._dataBind();

        if (!that.editing) {
            that.$.tableContainer.setAttribute('aria-readonly', true);
        }
    }

    _initColumns(propertyChangedHandler) {
        const that = this,
            columns = that.columns;

        if (!that.isRendered && that.dataSource.length > 0 &&
            (!columns || Array.isArray(columns) && columns.length === 0)) {
            that.columns = that.dataSource.dataFields.map(dataField => {
                return { label: dataField.name, dataField: dataField.name, dataType: dataField.dataType };
            });
        }

        that._filterInfo.stringDataFields = [];
        that._columns = [];
        that.columnByDataField = {};

        for (let i = 0; i < that.columns.length; i++) {
            let boundColumn = that.columns[i];

            if (typeof boundColumn === 'string') {
                if (that.dataSource.dataFields) {
                    const field = that.dataSource.dataFields.find(field => {
                        if (field.name === boundColumn) {
                            return field;
                        }
                    });

                    boundColumn = { label: boundColumn, dataField: boundColumn, dataType: field ? field.dataType || 'string' : 'string' };
                }
            }

            if (boundColumn.label === undefined && boundColumn.dataField === undefined) {
                continue;
            }

            if (boundColumn.label === undefined) {
                boundColumn.label = boundColumn.dataField;
            }

            if (boundColumn.dataField === undefined) {
                boundColumn.dataField = boundColumn.label;
            }

            if (!boundColumn.dataType) {
                boundColumn.dataType = 'string';
            }

            if ((boundColumn.dataType === 'string' || boundColumn.dataType === 'number') && boundColumn.allowFilter !== false) {
                that._filterInfo.stringDataFields.push(boundColumn.dataField);
            }

            that._transformColumnDataField(boundColumn, propertyChangedHandler);

            that._columns.push(boundColumn);
            that.columnByDataField[boundColumn.dataField] = boundColumn;
        }

        that.columns = new Smart.ObservableArray(that._columns);
        that.columns.notify(function (changes) {
            if (!that.columns.canNotify || changes.action === 'length' ||
                changes.action === 'update' && ['allowGroup', 'allowSort', 'sortOrder'].indexOf(changes.propertyName) !== -1) {
                return;
            }

            const column = changes.target;

            if (changes.action === 'update') {
                const dataField = column.dataField;

                if (changes.propertyName === 'allowEdit') {
                    Array.from(that.$.tableContainer.querySelectorAll(`td[data-field="${dataField}"]`)).
                        forEach(td => {
                            td.classList.toggle('no-edit', changes.newValue === false);

                            if (changes.newValue === false) {
                                td.setAttribute('aria-readonly', true);
                            }
                            else {
                                td.removeAttribute('aria-readonly');
                            }
                        });
                    return;
                }

                if (changes.propertyName === 'allowFilter') {
                    if (column.dataType === 'string' || column.dataType === 'number') {
                        if (changes.newValue === false) {
                            that._filterInfo.stringDataFields = that._filterInfo.stringDataFields.filter(currentDataField => currentDataField !== dataField);
                        }
                        else if (changes.oldValue === false) {
                            that._filterInfo.stringDataFields.push(dataField);
                        }
                    }

                    if (that.filterRow) {
                        that.$.tableContainer.querySelector(`.smart-table-filter-row td[filter-for="${dataField}"]`).classList.toggle('no-filter', changes.newValue === false);
                    }

                    return;
                }

                if (changes.propertyName === 'transform') {
                    if (column.sortOrder) {
                        that.sortBy(column.dataField, null);
                    }

                    if (column.originalDataField) {
                        column.dataField = column.originalDataField;
                    }

                    that._transformColumnDataField(column, true);
                }
                else if (['allowPivot', 'allowRowGroup', 'pivot', 'rowGroup', 'summary'].indexOf(changes.propertyName) !== -1 &&
                    that.nodeName.toLowerCase() === 'smart-pivot-table') {
                    that._columnNotify(changes);
                    return;
                }
            }

            that._columns = that.columns._array;
            that.columnByDataField = [];
            that._columns.forEach(column => {
                that.columnByDataField[column.dataField] = column;

                if (column.originalDataField) {
                    that.columnByDataField[column.originalDataField] = column;
                }
            });
            that.refresh(true);
        });

        that.$.tableContainer.setAttribute('aria-colcount', that._columns.length + (+that.selection));
    }

    /**
     * Transforms a column's data field.
     */
    _transformColumnDataField(column, propertyChangedHandler) {
        const that = this;

        if (typeof column.transform === 'function') {
            if (!that.isRendered || propertyChangedHandler) {
                const originalDataField = column.dataField,
                    transformedDataField = originalDataField + 'Transformed',
                    dataSource = that.dataSource;

                that.columnByDataField[originalDataField] = column;
                column.originalDataField = originalDataField;
                column.dataField = transformedDataField;

                dataSource.canNotify = false;

                for (let j = 0; j < dataSource.length; j++) {
                    const record = dataSource[j];

                    record[transformedDataField] = column.transform(record[originalDataField]);
                }

                dataSource.canNotify = true;
            }
        }
        else {
            delete column.transform;
        }
    }

    /**
     * Initializes rows.
     */
    _initRows() {
        const that = this,
            dataSource = that.dataSource,
            oldContext = that.context;

        that.context = that;
        that.rows = [];
        that.rowById = [];

        if (dataSource.boundHierarchy) {
            that.$.tableContainer.setAttribute('role', 'treegrid');
            that.setAttribute('hierarchy', '');
            that._initHierarchicalRows();
            return;
        }

        that.$.tableContainer.setAttribute('role', 'grid');

        let viewStart = 0,
            viewEnd = dataSource.length,
            pagingAndFiltering = false;

        that.removeAttribute('hierarchy');

        if (that.paging) {
            const pageSize = that.pageSize;

            if (that._filterInfo.query || that._filterInfo.rowFilters || that._filterInfo.appliedFilters) {
                let visibleRecords = 0;

                for (let i = 0; i < viewEnd; i++) {
                    if (dataSource[i].$.filtered !== false) {
                        visibleRecords++;
                    }
                }

                viewEnd = visibleRecords;
                pagingAndFiltering = true;
            }

            const pagesCount = Math.max(Math.ceil(viewEnd / pageSize), 1),
                oldPagesCount = that.$.pager.pagesCount;

            that.$.pager.pagesCount = pagesCount;
            that.$.pager.totalRecords = viewEnd;
            that.pageIndex = Math.max(Math.min(that.pageIndex, pagesCount - 1), 0);

            if (that.dataSource.virtualDataSource &&
                oldPagesCount !== null && oldPagesCount !== pagesCount) {
                that._fullRefresh();
                return;
            }

            viewStart = that.pageIndex * pageSize;
            viewEnd = viewStart + pageSize;
        }

        if (pagingAndFiltering) {
            let j = -1;

            for (let i = 0; i < dataSource.length; i++) {
                const data = dataSource[i];

                if (data && data.$.filtered !== false) {
                    j++;

                    if (j < viewStart) {
                        continue;
                    }

                    if (j >= viewEnd) {
                        break;
                    }

                    that._addNewRow(data, i);
                }
            }
        }
        else {
            for (let i = viewStart; i < viewEnd; i++) {
                const data = dataSource[i];

                if (data && data.$.filtered !== false) {
                    that._addNewRow(data, i);
                }
            }
        }

        that._observeRows();
        that.context = oldContext;
    }

    /**
     * Initializes hierarchical rows.
     */
    _initHierarchicalRows() {
        const that = this,
            boundHierarchy = that.dataSource.boundHierarchy;
        let viewStart = 0,
            viewEnd = boundHierarchy.length,
            pagingAndFiltering = false;

        if (that.paging) {
            const pageSize = that.pageSize;

            if (that._filterInfo.query || that._filterInfo.rowFilters || that._filterInfo.appliedFilters) {
                let visibleRecords = 0;

                for (let i = 0; i < viewEnd; i++) {
                    if (boundHierarchy[i].$.filtered !== false) {
                        visibleRecords++;
                    }
                }

                viewEnd = visibleRecords;
                pagingAndFiltering = true;
            }

            const pagesCount = Math.max(Math.ceil(viewEnd / pageSize), 1);

            that.$.pager.pagesCount = pagesCount;
            that.$.pager.totalRecords = viewEnd;
            that.pageIndex = Math.max(Math.min(that.pageIndex, pagesCount - 1), 0);

            viewStart = that.pageIndex * pageSize;
            viewEnd = viewStart + pageSize;
        }

        function processHierarchy(object, start, end) {
            for (let i = start; i < end; i++) {
                const item = object[i];

                if (!item) {
                    break;
                }

                if (item.leaf) {
                    if (item && item.$.filtered !== false) {
                        that._addNewRow(item, i);
                    }
                }
                else {
                    if (item.expanded === undefined) {
                        item.expanded = false;
                    }

                    if (item.children.length && item.$.filtered !== false) {
                        that._addNewRow(item, i);
                        processHierarchy(item.children, 0, item.children.length);
                    }
                }
            }
        }

        if (pagingAndFiltering) {
            let j = -1;

            for (let i = 0; i < boundHierarchy.length; i++) {
                const data = boundHierarchy[i];

                if (data && data.$.filtered !== false) {
                    j++;

                    if (j < viewStart) {
                        continue;
                    }

                    if (j >= viewEnd) {
                        break;
                    }

                    processHierarchy(boundHierarchy, i, i + 1);
                }
            }
        }
        else {
            processHierarchy(boundHierarchy, viewStart, viewEnd);
        }

        that._observeRows();
    }

    /**
     * Makes "rows" an observable array.
     */
    _observeRows() {
        const that = this;

        that.rows = new Smart.ObservableArray(that.rows);

        that.rows.notify(function (changes) {
            if (!that.rows.canNotify ||
                changes.path ||
                !that.dataSource) {
                return;
            }

            that.rows.canNotify = false;

            const changeType = changes.action;

            that.dataSource.canNotify = false;

            switch (changeType) {
                case 'add':
                    that.dataSource.add(that.rows[changes.index]);
                    break;
                case 'update':
                    that.dataSource.update(changes.index, that.rows[changes.index]);
                    break;
                case 'remove':
                    that.dataSource.removeAt(changes.index);
                    break;
            }

            that.dataSource.canNotify = true;
            that.rows.canNotify = true;
            that._fullRefresh();
        });
    }

    /**
     * Adds a new row
     */
    _addNewRow(data, index) {
        const that = this,
            id = data.$.id,
            row = new Smart.Observable({ data: data, boundIndex: index });

        if (that._disabledSelection.indexOf(id) !== -1) {
            row.allowSelect = false;
        }

        row.canNotify = true;

        row.notify(function (changes) {
            if (that._editing) {
                return;
            }

            if (changes.propertyName === 'allowSelect') {
                const rowElement = that.$.tableContainer.querySelector(`[row-id="${id}"]`),
                    disabledSelectionIndex = that._disabledSelection.indexOf(id);

                if (!changes.newValue && disabledSelectionIndex === -1) {
                    that.unselect(id);
                    rowElement.removeAttribute('aria-selected');
                    rowElement.classList.add('disable-select');

                    that._disabledSelection.push(id);
                }
                else if (changes.newValue && disabledSelectionIndex !== -1) {
                    rowElement.setAttribute('aria-selected', false);
                    rowElement.classList.remove('disable-select');
                    that._disabledSelection.splice(disabledSelectionIndex, 1);
                }
            }
        });

        that.rowById[id] = row;
        that.rows.push(row);
    }

    refresh() {
        const that = this,
            selection = that.selection,
            tableContainer = that.$.tableContainer,
            filterRow = tableContainer.querySelector('.smart-table-filter-row'),
            footer = tableContainer.querySelector('tfoot'),
            tbody = document.createElement('tbody'),
            thead = document.createElement('thead'),
            tr = document.createElement('tr'),
            fragment = document.createDocumentFragment();

        that.columns.canNotify = false;
        tableContainer.innerHTML = '';

        if (selection) {
            tr.innerHTML = '<th class="smart-table-select-all freeze-near" scope="col" aria-colindex="1"><div></div></th>';
        }

        for (let i = 0; i < that._columns.length; i++) {
            const th = document.createElement('th'),
                column = that._columns[i];

            th.setAttribute('aria-colindex', i + 1 + (+selection));

            if (column.width && !isNaN(parseFloat(column.width))) {
                if (typeof column.width === 'number') {
                    column.width += 'px';
                }

                th.style.width = column.width;
            }

            if (column.freeze) {
                th.classList.add('freeze-' + (column.freeze === 'far' ? 'far' : 'near'));
            }

            if (column.responsivePriority) {
                if (typeof column.responsivePriority !== 'number') {
                    column.responsivePriority = 1;
                }

                column.responsivePriority = Math.max(Math.min(Math.round(column.responsivePriority), 5), 1);

                th.classList.add('priority-' + column.responsivePriority);
            }

            th.setAttribute('data-field', column.dataField);
            th.innerHTML = `<div class="wrapper"><div class="label">${column.label}</div></div>`;

            if (that.onColumnRender) {
                that.onColumnRender(column.dataField, th);
            }

            fragment.appendChild(th);
        }

        tr.appendChild(fragment);
        thead.appendChild(tr);
        tableContainer.appendChild(thead);

        if (!that.isRendered && that.onInit) {
            that.onInit();
        }

        that._createDataRows(tbody);
        tableContainer.appendChild(tbody);

        that._createCustomHeaderRow();
        that._createFilterRow(filterRow);
        that._createFooterRow(footer);

        const headerCellElements = tableContainer.querySelectorAll('th[data-field]');

        for (let i = 0; i < that._columns.length; i++) {
            const column = that._columns[i];

            column.headerCellElement = headerCellElements[i];

            column.headerCellElement.onclick = function () {
                const dataField = this.dataField;

                that.$.fireEvent('columnClick', { dataField: dataField });

                if (that.sortMode === 'none' || column.allowSort === false || that._preventClickSort) {
                    return;
                }

                that._addSortIconContainer(this);

                if (this.headerCellElement.sortIconContainerElement.classList.contains('asc')) {
                    that.sortBy(dataField, 'desc');
                }
                else if (this.headerCellElement.sortIconContainerElement.classList.contains('desc')) {
                    that.sortBy(dataField, null);
                }
                else {
                    that.sortBy(dataField, 'asc');
                }

            }.bind(column);
        }

        if (that._sortColumns && that._sortColumns.length > 0) {
            for (let i = 0; i < that._sortColumns.length; i++) {
                const sortColumn = that._sortColumns[i];
                const column = that.columnByDataField[sortColumn.dataField];

                that._addSortIconContainer(column, sortColumn.direction);
            }
        }

        that._handleFrozenColumnPositions();
        that.columns.canNotify = true;
    }

    /**
     * Refreshes data rows only
     */
    _refreshDataRows() {
        const that = this,
            tbody = that.$.tableContainer.children[1],
            dataRows = Array.from(tbody.querySelectorAll('tr:not(.smart-table-filter-row)'));

        for (let i = 0; i < dataRows.length; i++) {
            dataRows[i].remove();
        }

        that._createDataRows(tbody);
        that._handleFrozenColumnPositions();
    }

    /**
     * Creates Table data rows.
     */
    _createDataRows(tbody) {
        const that = this,
            rowDetailTemplate = that.rowDetailTemplate,
            selection = that.selection,
            fragment = document.createDocumentFragment(),
            hierarchical = that.hasAttribute('hierarchy');

        for (let i = 0; i < that.rows.length; i++) {
            const rowObject = that.rows[i],
                data = rowObject.data;

            if (data.groupDataField) {
                that._createGroupHeader(data, selection, fragment);
                continue;
            }

            const id = data.$.id,
                rowElement = document.createElement('tr');
            let colspan = 0;

            rowElement.setAttribute('aria-rowindex', data.$.index + 1);

            if (selection) {
                const selectionTd = document.createElement('td'),
                    selected = that._selectedIds.indexOf(id) !== -1;

                selectionTd.className = `smart-table-select-row freeze-near${selected ? ' selected' : ''}`;
                selectionTd.innerHTML = '<div class="selection-checkbox"></div>';
                selectionTd.setAttribute('aria-colindex', 1);
                rowElement.appendChild(selectionTd);
                rowElement.setAttribute('aria-selected', selected);
                colspan++;
            }

            for (let j = 0; j < that._columns.length; j++) {
                const td = document.createElement('td'),
                    column = that._columns[j];

                td.setAttribute('data-field', column.dataField);
                td.setAttribute('aria-colindex', j + 1 + (+selection));

                let value = that._formatCellValue(rowObject, column, td),
                    isTreeCell;

                if (column.freeze) {
                    td.classList.add('freeze-' + (column.freeze === 'far' ? 'far' : 'near'));
                }

                if (column.responsivePriority) {
                    td.classList.add('priority-' + column.responsivePriority);
                }

                if (column.allowEdit === false) {
                    td.classList.add('no-edit');
                    td.setAttribute('aria-readonly', true);
                }

                if (j === 0 && hierarchical) {
                    const childrenFiltered = that._areChildrenFiltered(data);

                    if (!data.leaf) {
                        td.classList.add('tree-cell');
                        isTreeCell = childrenFiltered;
                    }

                    if (data.level) {
                        td.classList.add('outline-level-' + Math.min(data.level, 10));

                        if (data.leaf || !childrenFiltered) {
                            td.classList.add('tree-leaf');
                        }
                    }
                }

                that._setCellContent(td, value, isTreeCell);

                if (that.onCellRender) {
                    that.onCellRender(data, column.dataField, data[column.dataField], td);
                }

                that._applyConditionalFormattingToCell(td, column.dataField, data.$.index);

                rowElement.appendChild(td);
                colspan++;
            }

            rowElement.data = data;
            rowElement.setAttribute('row-id', id);

            if (that._disabledSelection.indexOf(id) !== -1) {
                rowElement.removeAttribute('aria-selected');
                rowElement.classList.add('disable-select');
            }

            if (data.expanded) {
                rowElement.setAttribute('aria-expanded', true);
                rowElement.classList.add('expanded');
            }

            if (data.level && that._isCollapsed(data)) {
                rowElement.setAttribute('aria-hidden', true);
                rowElement.classList.add('collapsed', 'smart-hidden');
            }

            fragment.appendChild(rowElement);

            if (rowDetailTemplate) {
                const detailTr = document.createElement('tr');

                detailTr.className = 'smart-table-row-detail';

                if (that._expandedIds.indexOf(id) === -1) {
                    detailTr.setAttribute('aria-hidden', true);
                    detailTr.classList.add('collapsed');
                }

                detailTr.innerHTML = `<td colspan="${colspan}"><div class="smart-table-detail-container">${that._applyRowDetailTemplate(rowObject)}</div></td>`;
                fragment.appendChild(detailTr);
            }
        }

        fragment.appendChild(that._createLastRow());
        tbody.appendChild(fragment);
    }

    /**
     * Applies conditional formatting to cell.
     */
    _applyConditionalFormattingToCell(cell, columnDataField, rowIndex) {
        const that = this;

        if (that._conditionalFormatting && that._conditionalFormatting[columnDataField]) {
            const cellStyle = that._conditionalFormatting[columnDataField][rowIndex];

            if (cellStyle) {
                cell.style.backgroundColor = cellStyle.background;
                cell.style.color = cellStyle.color;
                cell.style.fontFamily = cellStyle.fontFamily;
                cell.style.fontSize = cellStyle.fontSize;
            }
        }
    }

    /**
     * Creates last, invisible, row.
     */
    _createLastRow() {
        const lastVisibleRow = document.createElement('tr');

        lastVisibleRow.setAttribute('aria-hidden', true);
        lastVisibleRow.classList.add('last-visible');

        try {
            const resizeObserver = new ResizeObserver(entries => {
                try {
                    lastVisibleRow.classList.toggle('sized',
                        entries[0].contentRect.height > 0 && lastVisibleRow.previousSibling !== null);
                }
                catch (error) {
                    //
                }
            });

            resizeObserver.observe(lastVisibleRow);
        }
        catch (error) {
            //
        }

        return lastVisibleRow;
    }

    /**
     * Creates a group header.
     */
    _createGroupHeader(data, selection, container) {
        const that = this,
            groupLabel = that.columnByDataField[data.groupDataField].label,
            groupHeader = document.createElement('tr'),
            cell = document.createElement('td'),
            cellInnerContainer = document.createElement('div'),
            arrow = document.createElement('div'),
            label = document.createElement('div');

        groupHeader.data = data;
        arrow.classList.add('hierarchy-arrow', 'smart-arrow', 'smart-arrow-down');
        arrow.setAttribute('role', 'button');
        arrow.setAttribute('aria-label', 'Toggle row');
        label.classList.add('group-label')
        label.innerHTML = `${groupLabel}: <span class="group-label-value">${data.label}</span>`;
        cell.colSpan = that._columns.length;
        cell.classList.add('group-header');

        if (data.level) {
            cell.classList.add('outline-level-' + Math.min(data.level, 10));

            if (that._isCollapsed(data)) {
                groupHeader.setAttribute('aria-hidden', true);
                groupHeader.classList.add('collapsed', 'smart-hidden');
            }
        }

        groupHeader.setAttribute('row-id', data.$.id);

        cellInnerContainer.appendChild(arrow);
        cellInnerContainer.appendChild(label);
        cell.appendChild(cellInnerContainer);

        if (selection) {
            groupHeader.appendChild(document.createElement('td'));
        }

        groupHeader.appendChild(cell);
        container.appendChild(groupHeader);
    }

    /**
     * Returns whether a data row or group header is collapsed.
     */
    _isCollapsed(data) {
        let parent = data.parent;

        while (parent) {
            if (!parent.expanded) {
                return true;
            }

            parent = parent.parent;
        }

        return false;
    }

    /**
     * Returns whether at least one child is not filtered out.
     */
    _areChildrenFiltered(data) {
        if (data.leaf) {
            return;
        }

        for (let i = 0; i < data.children.length; i++) {
            if (data.children[i].$.filtered !== false) {
                return true;
            }
        }

        return false;
    }

    /**
     * Applies row detail template.
     */
    _applyRowDetailTemplate(rowObject) {
        const that = this,
            dataFields = that.dataSource.dataFields;
        let content = that.rowDetailTemplate;

        for (let i = 0; i < dataFields.length; i++) {
            const dataField = dataFields[i].name,
                regex = new RegExp(`{{${dataField}}}`, 'g');
            let column = that.columnDataField[dataField] || { dataField: dataField };

            if (regex.test(content)) {
                let data = that._formatCellValue(rowObject, column, document.createElement('td'));

                if (typeof data !== 'string') {
                    data = rowObject.data[column.dataField];
                }

                content = content.replace(regex, data);
            }
        }

        return content;
    }

    /**
     * Handles the relative positions of frozen columns.
     */
    _handleFrozenColumnPositions() {
        const that = this,
            rightToLeft = that.rightToLeft,
            columns = that._columns;
        let frozenNear = [],
            frozenFar = [],
            selectionModifier = 0;

        function applyStyle(property, index, value, i, zIndex) {
            Array.from(that.$.tableContainer.querySelectorAll(`th:nth-child(${index + 1}), td:nth-child(${index + 1})`)).
                forEach(td => {
                    td.style[property] = value + 'px';

                    if (zIndex) {
                        td.style.zIndex = 2 + i;
                    }
                });
        }

        if (that.selection) {
            if (!rightToLeft) {
                frozenNear.push(0);
            }
            else {
                frozenFar.push(0);
            }

            selectionModifier = 1;
        }

        for (let i = 0 + selectionModifier; i < columns.length + selectionModifier; i++) {
            const column = columns[i - selectionModifier];

            if (!column.freeze) {
                continue;
            }

            if (!rightToLeft && column.freeze === 'far' ||
                rightToLeft && column.freeze !== 'far') {
                frozenFar.push(i);
            }
            else {
                frozenNear.push(i);
            }
        }

        if (frozenNear.length < 2 && frozenFar.length < 2) {
            return;
        }

        const headerCells = that.$.tableContainer.firstElementChild.querySelectorAll('th'),
            widths = [];

        for (let i = 0; i < headerCells.length; i++) {
            widths.push(headerCells[i].offsetWidth);
        }

        if (!rightToLeft) {
            for (let i = 1; i < frozenNear.length; i++) {
                const index = frozenNear[i];
                let left = 0;

                for (let j = 0; j < index; j++) {
                    if (frozenNear.indexOf(j) !== -1) {
                        left += widths[j];
                    }
                }

                applyStyle('left', index, left, i, false);
            }

            for (let i = 0; i < frozenFar.length - 1; i++) {
                const index = frozenFar[i];
                let right = 0;

                for (let j = index + 1; j < widths.length; j++) {
                    if (frozenFar.indexOf(j) !== -1) {
                        right += widths[j];
                    }
                }

                applyStyle('right', index, right, i, true);
            }

            return;
        }

        // right-to-left
        for (let i = 0; i < frozenNear.length - 1; i++) {
            const index = frozenNear[i];
            let left = 0;

            for (let j = index + 1; j < widths.length; j++) {
                if (frozenNear.indexOf(j) !== -1) {
                    left += widths[j];
                }
            }

            applyStyle('left', index, left, i, true);
        }

        for (let i = 1; i < frozenFar.length; i++) {
            const index = frozenFar[i];
            let right = 0;

            for (let j = 0; j < index; j++) {
                if (frozenFar.indexOf(j) !== -1) {
                    right += widths[j];
                }
            }

            applyStyle('right', index, right, i, false);
        }
    }

    /**
     * Returns formatted cell value.
     */
    _formatCellValue(row, column, cell, value) {
        if (value === undefined) {
            value = row.data[column.dataField];
        }

        if (column.formatFunction) {
            const settings = {
                value: value,
                row: row && row.data ? row.data.$.id : row,
                column: column.dataField,
                cell: cell,
                template: null
            };

            column.formatFunction(settings);

            value = settings.value;

            if (settings.template instanceof HTMLElement) {
                return settings.template;
            }

            if (settings.template === null ||
                typeof settings.template !== 'string') {
                return value;
            }

            const template = settings.template;
            let result = '';

            if (template.startsWith('#')) {
                const templateElement = document.querySelector(template);

                if (templateElement && templateElement instanceof HTMLTemplateElement) {
                    const templateContent = templateElement.content.cloneNode(true),
                        tempElement = document.createElement('div');

                    tempElement.appendChild(templateContent);

                    value = value.toString();
                    value = value.replace(/'/ig, '\\\'');
                    value = value.replace(/"/ig, '\\"');

                    result = tempElement.innerHTML.replace(/{{value}}/ig, value);

                    if (result.indexOf('{{value=') >= 0) {
                        if (!value) {
                            result = result.replace(/{{value=/ig, '');
                            result = result.replace(/}}/ig, '');
                        }
                        else {
                            result = result.substring(0, result.indexOf('{{value=')) + value + result.substring(result.indexOf('}'));
                            result = result.replace(/}/ig, '');
                            result = result.replace(/{/ig, '');
                        }
                    }

                    return result;
                }
            }

            result = template.replace(/{{value}}/ig, value);
            return result;
        }
        else if (column.dataType === 'date' && value instanceof Date) {
            return value.toLocaleDateString();
        }

        return value;
    }

    /**
     * Sets cell content.
     */
    _setCellContent(cell, content, isTreeCell) {
        if (content instanceof HTMLElement !== true) {
            if (isTreeCell) {
                content = `<div>
                                <div class="hierarchy-arrow smart-arrow smart-arrow-down" role="button" aria-label="Toggle row"></div>
                                <div>${content}</div>
                            </div>`;
            }

            cell.innerHTML = content;
            return;
        }

        cell.innerHTML = '';

        if (isTreeCell) {
            const container = document.createElement('div');

            container.innerHTML = '<div class="hierarchy-arrow smart-arrow smart-arrow-down" role="button" aria-label="Toggle row"></div><div>';
            container.children[1].appendChild(content);
            cell.appendChild(container);
        }
        else {
            cell.appendChild(content);
        }
    }

    _dataBind() {
        const that = this;

        const removeLastRow = function () {
            const lastRow = that.rows[that.rows.length - 1];
            delete that.rowById[lastRow.uid];

            that.rows.pop();
        }

        const removeAt = function (index) {
            const lastRow = that.rows[that.rows.length - 1];
            delete that.rowById[lastRow.uid];

            that.rows.splice(index, 1);
        }

        if (!that.dataSource) {
            that.dataFields = [];

            if (!that.columns || Array.isArray(that.columns) && that.columns.length === 0) {
                that.columns = [];

                const th = that.querySelectorAll('th');

                for (let i = 0; i < th.length; i++) {
                    const label = th[i].innerHTML.trim();
                    let boundColumn = { label: label, dataField: label, dataType: 'string' };

                    that.columns.push(boundColumn);
                    that.dataFields.push(label);
                }
            }
            else {
                for (let i = 0; i < that.columns.length; i++) {
                    const column = that.columns[i];

                    if (typeof column === 'string') {
                        that.dataFields.push(column);
                    }
                    else if (typeof column === 'object') {
                        that.dataFields.push(column.dataField + (column.dataType ? ': ' + column.dataType : ''));
                    }
                }
            }

            let rows = [];

            if (!that.rows) {
                const tr = that.querySelectorAll('tr');

                for (let i = 0; i < tr.length; i++) {
                    const row = tr[i];
                    const newRow = {};
                    const td = row.querySelectorAll('td');

                    if (td.length > 0) {
                        for (let j = 0; j < that.columns.length; j++) {
                            const column = that.columns[j];

                            newRow[column.dataField] = td[j].innerHTML.trim();
                        }

                        rows.push(newRow);
                    }
                }

                that.dataSource = new Smart.DataAdapter(
                    {
                        dataSource: rows,
                        dataFields: that.dataFields
                    });
            }

            const tables = that.$.container.querySelectorAll('table');

            if (tables.length > 1) {
                tables[tables.length - 1].parentNode.removeChild(tables[tables.length - 1]);
            }
        }
        else if (that.dataSource instanceof Smart.DataAdapter === false) {
            const dataSource = that.dataSource;

            if (Array.isArray(dataSource)) {
                const columns = that.columns;
                let dataFields;

                if (dataSource.length > 0) {
                    const firstRecord = dataSource[0];

                    dataFields = [];

                    for (let dataField in firstRecord) {
                        const value = firstRecord[dataField];

                        if (typeof value === 'number') {
                            dataFields.push({ name: dataField, dataType: 'number' });
                        }
                        else if (typeof value === 'boolean') {
                            dataFields.push({ name: dataField, dataType: 'boolean' });
                        }
                        else if (value instanceof Date) {
                            dataFields.push({ name: dataField, dataType: 'date' });
                        }
                        else {
                            dataFields.push({ name: dataField, dataType: 'string' });
                        }
                    }
                }

                if (columns && columns.length > 0) {
                    dataFields = dataFields || [];

                    columns.forEach(column => {
                        if (column.dataType) {
                            const respectiveDataField = dataFields.find(dataField => dataField.name === column.dataField);

                            if (respectiveDataField) {
                                respectiveDataField.dataType = column.dataType;
                            }
                        }
                    });
                }

                that.dataSource = new Smart.DataAdapter({ dataSource: that.dataSource, dataFields: dataFields });
            }
            else {
                that.dataSource = new Smart.DataAdapter({ dataSource: [] });
            }
        }

        that._transformDataSource();
        that._applyInitialConditionalFormatting(that.dataSource);

        that._initColumns();
        that._initRows();

        that.dataSource.notify(function (changes) {
            if (that.dataSource._updating) {
                delete that.dataSource._updating;
                return;
            }

            if (that._editing) {
                return;
            }

            const data = changes.data;

            that.rows.canNotify = false;

            switch (changes.action) {
                case 'add':
                    if (data.length) {
                        for (let i = 0; i < data.length; i++) {
                            that._addNewRow(data[i], that.dataSource.length - data.length + i);
                        }
                    }
                    else {
                        that._addNewRow(data, that.dataSource.length - 1);
                    }

                    break;
                case 'update':
                    if (data.length) {
                        for (let i = 0; i < data.length; i++) {
                            const index = changes.index[i];

                            that.rows[index].data = data[i];
                        }
                    }
                    else {
                        /* const index = changes.index;
                        that.rows[index].data = data; */
                    }

                    break;
                case 'insert':
                    that._addNewRow(data, changes.index);

                    for (let i = 0; i < that.rows.length; i++) {
                        const row = that.rows[i];

                        row.dataIndex = i;
                    }
                    break;
                case 'remove':
                    removeAt(changes.index);
                    break;
                case 'removeLast':
                    removeLastRow();
                    break;
            }

            that.rows.canNotify = true;

            that._fullRefresh();
        });

        that.refresh();

        if (that.dataSource.virtualDataSource) {
            that.paging = true;
            that.dataSource._updating = true;
            that._requestVirtualDataSource('dataBind');
        }

        that.$.tableContainer.setAttribute('aria-rowcount', that.dataSource.length);
    }

    /**
     * Request virtual data source (remote data).
     */
    _requestVirtualDataSource(action) {
        const that = this,
            pageSize = that.pageSize,
            viewStart = Math.max(that.pageIndex * pageSize, 0),
            viewEnd = Math.min(viewStart + pageSize, that.dataSource.length),
            sorting = [],
            filtering = [];
        let filterOperator = null;

        if (that._sortColumns) {
            that._sortColumns.forEach((column, index) => sorting[column.dataField] = { sortOrder: column.direction, sortIndex: index });
            sorting.length = that._sortColumns.length;
        }

        if (that._filterInfo.appliedFilters) {
            for (let dataField in that._filterInfo.appliedFilters) {
                filtering[dataField] = that._filterInfo.appliedFilters[dataField];
            }

            filtering.length = Object.keys(that._filterInfo.appliedFilters).length;
            filterOperator = 'and';
        }
        else {
            const UIFilters = that._filterInfo.inputFilters || that._filterInfo.rowFilters;

            if (UIFilters) {
                UIFilters.forEach(filter => filtering[filter[0]] = filter[1]);
                filtering.length = UIFilters.length;
            }

            filterOperator = that._filterInfo.inputFilters ? 'or' : 'and';
        }

        that.$.loadingIndicatorContainer.classList.remove('smart-hidden');
        that.setAttribute('loading', '');

        that.dataSource.onVirtualDataSourceRequested(
            that._virtualDataSourceRequestedCallback.bind(that),
            { first: viewStart, last: viewEnd, sorting: sorting, filtering: filtering, filterOperator: filterOperator, grouping: [], action: action });
    }

    /**
     * "onVirtualDataSourceRequested" callback function.
     */
    _virtualDataSourceRequestedCallback() {
        const that = this;

        that.$.loadingIndicatorContainer.classList.add('smart-hidden');
        that.removeAttribute('loading');

        that._initRows();
        that._refreshDataRows();
    }

    sortBy(columnDataField, sortOrder) {
        const that = this,
            column = that.columnByDataField[columnDataField];

        if (column && column.allowSort === false) {
            return;
        }

        columnDataField = column.dataField;

        that._sortBy({
            column: column,
            columnDataField: columnDataField,
            sortOrder: sortOrder,
            dataFields: that.dataSource.dataFields,
            columnByDataField: 'columnByDataField'
        });
    }

    /**
     * General sorting functionality
     */
    _sortBy(settings) {
        const that = this,
            column = settings.column,
            columnDataField = settings.columnDataField,
            sortOrder = settings.sortOrder,
            dataFields = settings.dataFields,
            columnByDataField = settings.columnByDataField,
            sortDataFields = [],
            sortOrders = [],
            sortDataTypes = [];

        const clearSortColumn = function (column) {
            that._addSortIconContainer(column);

            column.headerCellElement.sortIconContainerElement.classList.remove('desc');
            column.headerCellElement.sortIconContainerElement.classList.remove('asc');
            column.sortOrder = null;
        }

        const clearSortColumns = function () {
            if (that._sortColumns && that._sortColumns.length > 0) {
                for (let i = 0; i < that._sortColumns.length; i++) {
                    const sortColumn = that._sortColumns[i];
                    const column = that[columnByDataField][sortColumn.dataField];

                    clearSortColumn(column);
                }
            }

            that._sortColumns = [];
        }

        if (column === null || column === undefined) {
            if (that._sortColumns && that._sortColumns.length > 0) {
                clearSortColumns();
                that._sortCallback(sortDataFields, sortOrders, sortDataTypes);
            }

            return;
        }

        if (that.sortMode === 'none' || !that.dataSource) {
            return;
        }

        if (sortOrder && column.sortOrder === sortOrder) {
            return;
        }

        let sortColumnDirection = sortOrder || 'asc';

        clearSortColumn(column);

        if (!that._sortColumns) {
            that._sortColumns = [];
        }

        let dataType = 'string';

        for (let i = 0; i < dataFields.length; i++) {
            const field = dataFields[i];

            if (field.name === columnDataField) {
                dataType = field.dataType;

                if (dataType === 'any') {
                    dataType = 'number';
                }

                break;
            }
        }

        let addNewSortColumn = true;

        for (let i = 0; i < that._sortColumns.length; i++) {
            const sortColumn = that._sortColumns[i];

            if (sortColumn.dataField === columnDataField) {
                addNewSortColumn = false;

                if (sortColumn.direction === 'asc') {
                    sortColumn.direction = 'desc';
                    sortColumnDirection = 'desc';
                }
                else if (sortColumn.direction === 'desc') {
                    that._sortColumns.splice(i, 1);
                    clearSortColumn(column);
                    sortColumnDirection = null;
                    break;
                }
            }
        }

        if (addNewSortColumn) {
            if (that.sortMode === 'one') {
                clearSortColumns();
            }

            that._sortColumns.push({ dataField: columnDataField, direction: sortColumnDirection, dataType: dataType });
        }

        that._addSortIconContainer(column);

        if (sortColumnDirection !== null) {
            column.headerCellElement.sortIconContainerElement.classList.remove('asc');
            column.headerCellElement.sortIconContainerElement.classList.remove('desc');
            column.sortOrder = sortColumnDirection;

            if (sortColumnDirection === 'desc') {
                column.headerCellElement.sortIconContainerElement.classList.add('desc');
                column.headerCellElement.setAttribute('aria-sort', 'descending');
            }
            else {
                column.headerCellElement.sortIconContainerElement.classList.add('asc');
                column.headerCellElement.setAttribute('aria-sort', 'ascending');
            }
        }
        else {
            column.headerCellElement.sortIconContainerElement.classList.remove('asc');
            column.headerCellElement.sortIconContainerElement.classList.remove('desc');
            column.headerCellElement.removeAttribute('aria-sort');
        }

        for (let i = 0; i < that._sortColumns.length; i++) {
            const sortColumn = that._sortColumns[i];

            sortDataFields.push(sortColumn.dataField);
            sortOrders.push(sortColumn.direction);
            sortDataTypes.push(sortColumn.dataType);
        }

        that._sortCallback(sortDataFields, sortOrders, sortDataTypes);

        that.$.fireEvent('sort', { columns: that._sortColumns });
    }

    /**
     * Adds sort icon container to a header cell
     */
    _addSortIconContainer(column, direction) {
        const headerCellElement = column.headerCellElement;

        if (!headerCellElement.sortIconContainerElement) {
            const arrow = document.createElement('div');

            arrow.classList.add('sort-by');

            if (direction) {
                arrow.classList.add(direction);
            }

            headerCellElement.firstElementChild.appendChild(arrow);
            headerCellElement.sortIconContainerElement = arrow;
        }
    }

    /**
     * Applies sorting; refreshes the view
     */
    _sortCallback(sortDataFields, sortOrders, sortDataTypes) {
        const that = this,
            dataSource = that.dataSource;

        if (!dataSource.virtualDataSource) {
            dataSource._sort(that.dataSource.boundSource, sortDataFields, sortOrders, sortDataTypes, that.sort);
            dataSource.refreshHierarchy();
        }

        that._fullRefresh('sort');
    }

    /**
     * Clears the sorting of all columns
     */
    clearSort() {
        this.sortBy(null);
    }

    /**
     * Makes a full Table refresh
     */
    _fullRefresh(action) {
        const that = this;

        if (that.dataSource.virtualDataSource) {
            that.dataSource._updating = true;
            that._requestVirtualDataSource(action);
            return;
        }

        that._initRows();
        that._refreshDataRows();
    }

    /**
     * pager change handler
     */
    _pagerChangeHandler(event) {
        const that = this,
            target = that.isInShadowDOM || that.shadowRoot ? event.composedPath()[0] : event.target;

        if (target !== that.$.pager) {
            return;
        }

        that.pageIndex = event.detail.index;

        that._fullRefresh('pageIndexChange');
        that.$.fireEvent('page', { action: 'pageIndexChange' });
    }

    /**
     * pager pageSizeChanged handler
     */
    _pagerPageSizeChanged(event) {
        const that = this;

        that.pageSize = event.detail.value;
        that._fullRefresh('pageSizeChange');
        that.$.fireEvent('page', { action: 'pageSizeChange' });
    }

    /**
     * filterInput keyup handler.
     */
    _filterInputKeyupHandler() {
        const that = this;

        clearTimeout(that._filterInputTimeout);

        that._filterInputTimeout = setTimeout(function () {
            if (that._filterInfo && that.$.filterInput.value !== that._filterInfo.query) {
                const oldContext = that.context;

                that.context = that;
                that._filterByAll(that.$.filterInput.value);
                that.context = oldContext;
            }
        }, 500);
    }

    /**
     * Filters by all data fields.
     */
    _filterByAll(query) {
        const that = this;

        that._filterInfo.query = query;

        if (query === '') {
            that.clearFilters();
            return;
        }

        const filters = [];

        that._clearRowFilters();
        delete that._filterInfo.appliedFilters;
        that._filterInfo.stringDataFields.forEach(dataField => {
            const filterGroup = new Smart.Utilities.FilterGroup(),
                filterObject = filterGroup.createFilter('string', query, 'CONTAINS');

            filterGroup.addFilter('or', filterObject);
            filters.push([dataField, filterGroup]);
        });

        if (!that.dataSource.virtualDataSource) {
            that.dataSource._filter(filters, 'or');
        }

        that._filterInfo.inputFilters = filters;
        that._fullRefresh('filter');
        that.$.fireEvent('filter', { action: 'add', filters: filters });
    }

    /**
     * Initial paging and filtering setup.
     */
    _setupPagingAndFiltering() {
        const that = this;

        that.$.pager.$.pageSizeSelector.classList.add('underlined');
        that.$.pager.$.pageSizeSelector.dropDownAppendTo = 'body';

        that._filterInfo = { query: '' };
        that._applyFilterTemplate();
        that.$.header.classList.toggle('smart-hidden', that.filterRow && !that.filterTemplate);
    }

    /**
     * Applies filter template.
     */
    _applyFilterTemplate() {
        const that = this,
            filterTemplate = that.filterTemplate;

        that.$.filterTemplateContainer.innerHTML = '';

        if (!filterTemplate) {
            that.$.filterInput.classList.remove('smart-hidden');
            that.$.filterTemplateContainer.classList.add('smart-hidden');
            that.filterTemplate = null;
            return;
        }

        const potentialHTMLTemplate = document.getElementById(filterTemplate);

        if (potentialHTMLTemplate && potentialHTMLTemplate instanceof HTMLTemplateElement) {
            const templateContent = document.importNode(potentialHTMLTemplate.content, true);

            that.$.filterInput.classList.add('smart-hidden');
            that.$.filterTemplateContainer.classList.remove('smart-hidden');
            that.$.filterTemplateContainer.appendChild(templateContent);
        }
        else {
            that.filterTemplate = null;
            that.$.filterInput.classList.remove('smart-hidden');
            that.$.filterTemplateContainer.classList.add('smart-hidden');
        }
    }

    /**
     * Refreshes applied filters.
     */
    _refreshFilters(action) {
        const that = this,
            filters = [];

        for (let columnDataField in that._filterInfo.appliedFilters) {
            let filterGroup = that._filterInfo.appliedFilters[columnDataField];

            filters.push([columnDataField, filterGroup]);
        }

        if (filters.length === 0) {
            that.clearFilters();
            return;
        }

        that._clearFilterInput();
        that._clearRowFilters();

        if (!that.dataSource.virtualDataSource) {
            that.dataSource._filter(filters, 'or');
        }

        that._fullRefresh('filter');

        if (action) {
            that.$.fireEvent('filter', { action: action, filters: filters });
        }
    }

    /**
     * Localizes labels displayed in the Table.
     */
    _localize() {
        const that = this,
            pager = that.$.pager;

        if (!pager.messages[that.locale]) {
            pager.messages[that.locale] = {};
        }

        pager.messages[that.locale].pageSizeLabel = that.localize('itemsPerPage');
        pager.messages[that.locale].summaryPrefix = that.localize('summaryPrefix');
        pager.messages[that.locale].summarySuffix = '';
        pager.$.firstButton.setAttribute('tooltip', that.localize('firstButton'));
        pager.$.previousButton.setAttribute('tooltip', that.localize('previousButton'));
        pager.$.nextButton.setAttribute('tooltip', that.localize('nextButton'));
        pager.$.lastButton.setAttribute('tooltip', that.localize('lastButton'));

        that.$.filterInput.placeholder = that.localize('filterPlaceholder');
        that.$.conditionalFormattingButton.setAttribute('tooltip', that.localize('conditionalFormatting'));

        that._filterInfo.stringConditions = [
            { value: 'EMPTY', label: that.localize('EMPTY') },
            { value: 'NOT_EMPTY', label: that.localize('NOT_EMPTY') },
            { value: 'CONTAINS', label: that.localize('CONTAINS') },
            { value: 'CONTAINS_CASE_SENSITIVE', label: that.localize('CONTAINS_CASE_SENSITIVE') },
            { value: 'DOES_NOT_CONTAIN', label: that.localize('DOES_NOT_CONTAIN') },
            { value: 'DOES_NOT_CONTAIN_CASE_SENSITIVE', label: that.localize('DOES_NOT_CONTAIN_CASE_SENSITIVE') },
            { value: 'STARTS_WITH', label: that.localize('STARTS_WITH') },
            { value: 'STARTS_WITH_CASE_SENSITIVE', label: that.localize('STARTS_WITH_CASE_SENSITIVE') },
            { value: 'ENDS_WITH', label: that.localize('ENDS_WITH') },
            { value: 'ENDS_WITH_CASE_SENSITIVE', label: that.localize('ENDS_WITH_CASE_SENSITIVE') },
            { value: 'EQUAL', label: that.localize('EQUAL') },
            { value: 'EQUAL_CASE_SENSITIVE', label: that.localize('EQUAL_CASE_SENSITIVE') },
            { value: 'NULL', label: that.localize('NULL') },
            { value: 'NOT_NULL', label: that.localize('NOT_NULL') }
        ];
        that._filterInfo.numberAndDateConditions = [
            { value: 'EQUAL', label: that.localize('EQUAL') },
            { value: 'NOT_EQUAL', label: that.localize('NOT_EQUAL') },
            { value: 'LESS_THAN', label: that.localize('LESS_THAN') },
            { value: 'LESS_THAN_OR_EQUAL', label: that.localize('LESS_THAN_OR_EQUAL') },
            { value: 'GREATER_THAN', label: that.localize('GREATER_THAN') },
            { value: 'GREATER_THAN_OR_EQUAL', label: that.localize('GREATER_THAN_OR_EQUAL') },
            { value: 'NULL', label: that.localize('NULL') },
            { value: 'NOT_NULL', label: that.localize('NOT_NULL') }
        ];
    }

    /**
     * Creates the Table's filter row.
     */
    _createFilterRow(existingFilterRow) {
        const that = this;

        if (!that.filtering || !that.filterRow) {
            return;
        }

        if (existingFilterRow) {
            that.$.tableContainer.children[1].insertBefore(existingFilterRow, that.$.tableContainer.children[1].firstElementChild);
            return;
        }

        const row = document.createElement('tr'),
            animation = ` animation="${that.animation}" `,
            rightToLeft = that.rightToLeft ? ' right-to-left' : '';
        let content = '';

        row.className = 'smart-table-filter-row';

        if (that.selection) {
            content += '<td></td>';
        }

        for (let i = 0; i < that._columns.length; i++) {
            const column = that._columns[i],
                classes = [];
            let dataSource, inputType, className, value;

            if (column.dataType === 'string') {
                dataSource = that._filterInfo.stringConditions;
                inputType = 'string';
                className = 'string-filter';
                value = that.localize('CONTAINS');
            }
            else {
                dataSource = that._filterInfo.numberAndDateConditions;
                inputType = column.dataType;
                className = 'num-date-filter';
                value = that.localize('EQUAL');
            }

            if (column.freeze) {
                classes.push('freeze-' + (column.freeze === 'far' ? 'far' : 'near'));
            }

            if (column.responsivePriority) {
                classes.push('priority-' + column.responsivePriority);
            }

            if (column.allowFilter === false) {
                classes.push('no-filter');
            }

            content += `<td${classes.length ? ' class="' + classes.join(' ') + '"' : ''} filter-for="${column.dataField}">
                            <div>
                                <input type="${inputType}" class="filter-value" aria-label="Filter value" />
                                <smart-input class="${className}${animation}data-source='${JSON.stringify(dataSource)}' drop-down-button-position="right" drop-down-width="auto" readonly${rightToLeft} value="${value}" title="${that.localize('filterCondition')}" aria-label="Filter condition"></smart-input>
                                <smart-button class="smart-hidden" title="${that.localize('clearFilter')}"${animation}${rightToLeft} aria-label="Clear filter"></smart-button>
                            </div>
                        </td>`;
        }

        row.innerHTML = content;

        that.$.tableContainer.children[1].insertBefore(row, that.$.tableContainer.children[1].firstElementChild);
    }

    /**
     * tableContainer change handler.
     */
    _tableContainerChangeHandler(event) {
        const that = this,
            target = that.isInShadowDOM || that.shadowRoot ? event.composedPath()[0] : event.target;

        if (target.classList.contains('filter-value') && target.type === 'date' ||
            target instanceof Smart.Input &&
            (target.previousElementSibling.value !== '' || ['EMPTY', 'NOT_EMPTY', 'NULL', 'NOT_NULL'].indexOf(event.detail.value) !== -1)) {
            that._applyRowFilters();
        }
    }

    /**
     * tableContainer click handler.
     */
    _tableContainerClickHandler(event) {
        const that = this;

        if (that._editing) {
            return;
        }

        const target = that.isInShadowDOM || that.shadowRoot ? event.composedPath()[0] : event.target,
            row = target.closest('tbody tr[row-id], tfoot tr.grand-total');

        if (row) {
            const cell = target.closest('td');

            if (target.classList.contains('hierarchy-arrow')) {
                that._hierarchyArrowClickHandler(row, cell);
                return;
            }

            const id = row.getAttribute('row-id'),
                rowData = that.rowById ? that.rowById[id].data :
                    that.rows.dataItemById[id],
                parsedId = rowData ? rowData.$.id : undefined,
                dataField = cell ? cell.getAttribute('data-field') : undefined;

            if (dataField !== undefined) {
                that.$.fireEvent('cellClick', { row: rowData, dataField: dataField });
            }

            that._toggleSelection(row, parsedId, event, target);

            if (that.editing || that.drillDown) {
                if (!dataField || cell.classList.contains('no-edit')) {
                    return;
                }

                clearTimeout(that._dblclickObject.timeout);
                that._dblclickObject.numberOfClicks++;

                if (that._dblclickObject.numberOfClicks === 2) {
                    that._dblclickObject.numberOfClicks = 0;

                    that._beginEdit({
                        rowElement: row,
                        cell: cell,
                        dataField: dataField
                    });
                }
                else {
                    that._dblclickObject.timeout = setTimeout(function () {
                        that._dblclickObject.numberOfClicks = 0;
                    }, 300);
                }
            }

            if (that.rowDetailTemplate) {
                that._toggleRowDetail(row, parsedId);
            }

            return;
        }

        const selectAllCheckbox = target.closest('.smart-table-select-all');

        if (selectAllCheckbox) {
            that._selectAllCheckboxClickHandler(selectAllCheckbox);
            return;
        }

        const clearFilterButton = target.closest('.smart-table-filter-row smart-button');

        if (clearFilterButton) {
            const filterValueInput = clearFilterButton.parentElement.firstElementChild,
                filterConditionInput = clearFilterButton.parentElement.children[1];

            filterValueInput.value = '';

            if (['EMPTY', 'NOT_EMPTY', 'NULL', 'NOT_NULL'].indexOf(filterConditionInput.$.input.dataValue) !== -1) {
                filterConditionInput.value = that.localize(filterValueInput.type === 'text' ? 'CONTAINS' : 'EQUAL');
                delete filterConditionInput.$.input.dataValue;
            }

            that._applyRowFilters();
            return;
        }
    }

    /**
     * Toggles selection.
     */
    _toggleSelection(row, id, event, target) {
        const that = this;

        if (!that.selection || row.classList.contains('disable-select')) {
            return;
        }

        function clearSelection() {
            that._selectedIds = [];
            Array.from(that.$.tableContainer.querySelectorAll('.smart-table-select-row.selected')).forEach(td => {
                if (!td.parentElement.classList.contains('disable-select')) {
                    td.parentElement.setAttribute('aria-selected', false);
                }

                td.classList.remove('selected');
            });
        }

        const rowSelected = that._selectedIds.indexOf(id) !== -1;

        if (that.selectionMode === 'many') {
            if (rowSelected) {
                that.unselect(id);
            }
            else {
                that.select(id);
                that._selectionStart = row;
            }
        }
        else {
            if (that._selectionStart && event.shiftKey) {
                const allRows = Array.from(that.$.tableContainer.querySelectorAll('tr[row-id]')),
                    currentIndex = allRows.indexOf(row),
                    startIndex = allRows.indexOf(that._selectionStart);

                if (currentIndex !== startIndex) {
                    const oldSelectedIds = JSON.stringify(that._selectedIds.slice(0).sort()),
                        start = Math.min(currentIndex, startIndex),
                        end = Math.max(currentIndex, startIndex);

                    clearSelection();

                    for (let i = start; i <= end; i++) {
                        const currentRow = allRows[i];

                        if (!currentRow.classList.contains('disable-select') && !currentRow.firstElementChild.classList.contains('selected')) {
                            const id = currentRow.data.$.id;

                            currentRow.setAttribute('aria-selected', true);
                            currentRow.firstElementChild.classList.add('selected');
                            that._selectedIds.push(id);
                        }
                    }

                    if (oldSelectedIds !== JSON.stringify(that._selectedIds.slice(0).sort())) {
                        that.$.fireEvent('change');
                    }

                    that._updateSelectAllState();
                    getSelection().removeAllRanges();
                    return;
                }
                else if (that._selectedIds.length === 1) {
                    return;
                }
            }

            const checkboxClicked = target ? target.classList.contains('selection-checkbox') : false;

            if (rowSelected && (checkboxClicked || that._selectedIds.length === 1 || event.ctrlKey || event.metaKey)) {
                delete that._selectionStart;
                that.unselect(id);
                return;
            }

            if (!checkboxClicked && !event.ctrlKey && !event.metaKey) {
                clearSelection();
            }

            that.select(id);
            that._selectionStart = row;
        }
    }

    /**
     * "Select all" checkbox click handler.
     */
    _selectAllCheckboxClickHandler(checkbox, dataSource) {
        const that = this;

        if (dataSource === undefined) {
            dataSource = that.dataSource;
        }

        const dataSourceLength = dataSource.length,
            on = that._selectedIds.length === dataSourceLength - that._disabledSelection.length,
            oldSelectedIds = that._selectedIds.slice(0);

        that._selectedIds = [];

        if (on) {
            checkbox.classList.remove('indeterminate', 'selected');
            Array.from(that.$.tableContainer.querySelectorAll('.smart-table-select-row')).forEach(td => {
                if (!td.parentElement.classList.contains('disable-select')) {
                    td.parentElement.setAttribute('aria-selected', false);
                }

                td.classList.remove('selected');
            });
        }
        else {
            let numberOfSelected = 0;

            for (let i = 0; i < dataSourceLength; i++) {
                const id = dataSource[i].$.id;

                if (that._disabledSelection.indexOf(id) === -1) {
                    that._selectedIds.push(id);
                    numberOfSelected++;
                }
            }

            if (numberOfSelected === dataSourceLength) {
                checkbox.classList.remove('indeterminate');
                checkbox.classList.add('selected');
            }
            else if (numberOfSelected === 0) {
                checkbox.classList.remove('indeterminate', 'selected');
            }
            else {
                checkbox.classList.remove('selected');
                checkbox.classList.add('indeterminate');
            }

            Array.from(that.$.tableContainer.querySelectorAll('.smart-table-select-row')).forEach(td => {
                if (!td.parentElement.classList.contains('disable-select')) {
                    td.parentElement.setAttribute('aria-selected', true);
                    td.classList.add('selected');
                }
            });
        }

        if (oldSelectedIds.length !== that._selectedIds.length) {
            that.$.fireEvent('change');
        }
    }

    /**
     * Begins an edit operation.
     */
    _beginEdit(details) {
        const that = this,
            dataField = details.dataField;
        let rowId = details.rowId,
            rowElement = details.rowElement,
            rowObject = details.rowObject,
            cell = details.cell,
            cells = [],
            dataFields = [];

        if (!that.editing) {
            return;
        }

        if (!rowElement) {
            rowElement = that.$.tableContainer.querySelector(`tr[row-id="${rowId}"]`);
        }

        if (!rowObject) {
            rowId = rowElement.getAttribute('row-id');
            rowObject = that.rowById[rowId];
            rowId = rowObject.data.$.id;
        }

        if (that.editMode === 'row') {
            cells = rowElement.querySelectorAll('td[data-field]');
            dataFields = that._columns.map(col => col.dataField);

            if (!cell) {
                cell = dataField ? rowElement.querySelector(`td[data-field="${dataField}"`) : cells[0];
            }
        }
        else {
            if (!cell) {
                cell = rowElement.querySelector(`td[data-field="${dataField}"`);
            }

            cells = [cell];
            dataFields = [dataField];
        }

        that._editing = { row: rowObject, cells: [] };

        for (let i = 0; i < dataFields.length; i++) {
            const currentCell = cells[i],
                currentDataField = dataFields[i],
                column = that.columnByDataField[currentDataField];

            if (column.allowEdit === false) {
                continue;
            }

            const cellValue = rowObject.data[currentDataField],
                editor = that._initEditor(column, rowId, currentDataField, cellValue);
            let standardDateEditor = editor instanceof HTMLInputElement && editor.type === 'date';

            if (column.editor && column.editor.template) {
                if (column.editor.onRender) {
                    column.editor.onRender(rowId, currentDataField, editor, cellValue);
                }
            }
            else if (standardDateEditor) {
                if (cellValue instanceof Date && !isNaN(cellValue.getTime())) {
                    const month = (cellValue.getMonth() + 1).toString(),
                        date = cellValue.getDate().toString();

                    editor.value = `${cellValue.getFullYear()}-${'0'.repeat(2 - month.length)}${month}-${'0'.repeat(2 - date.length)}${date}`;
                }
                else {
                    editor.value = '';
                }
            }
            else {
                editor.value = cellValue;
            }

            currentCell.classList.add('editing');
            currentCell.innerHTML = '';
            currentCell.appendChild(editor);

            if (currentCell === cell && editor.focus) {
                editor.focus();

                if (!(column.editor && column.editor.template) && !standardDateEditor && editor.select) {
                    editor.select();
                }
            }

            that._editing.cells.push({ dataField: currentDataField, editor: editor, element: currentCell });
            that.$.fireEvent('cellBeginEdit', { row: rowObject.data, dataField: currentDataField });
        }
    }

    /**
     * Initializes column editor.
     */
    _initEditor(column, rowId, dataField, value) {
        const that = this;
        let editor = that._editors[dataField];

        if (editor) {
            return editor;
        }

        if (column.editor && column.editor.template) {
            const wrapper = document.createElement('div');

            wrapper.innerHTML = column.editor.template;

            editor = wrapper.firstElementChild;
            editor.className = 'smart-table-editor';

            if (column.editor.onInit) {
                column.editor.onInit(rowId, dataField, editor, value);
            }

            return editor;
        }

        editor = document.createElement('input');
        editor.className = 'smart-table-editor standard';

        if (column.dataType === 'number') {
            editor.type = 'number';
        }
        else if (column.dataType === 'date') {
            editor.type = 'date';
        }
        else {
            editor.type = 'text';
        }

        that._editors[dataField] = editor;
        return editor;
    }

    /**
     * Toggles row detail.
     */
    _toggleRowDetail(row, id) {
        const that = this,
            detailRow = row.nextElementSibling;

        if (that.animation === 'none') {
            detailRow.classList.toggle('collapsed');

            if (!detailRow.classList.contains('collapsed')) {
                detailRow.removeAttribute('aria-hidden');
                that._expandedIds.push(id);
            }
            else {
                detailRow.setAttribute('aria-hidden', true);
                that._expandedIds = that._expandedIds.filter(currentId => currentId !== id);
            }

            return;
        }

        const detailContainer = detailRow.firstElementChild.firstElementChild;

        if (detailRow.classList.contains('collapsed')) {
            const fullHeight = `calc(${detailRow.firstElementChild.scrollHeight}px + 2 * var(--smart-table-cell-padding))`;

            detailRow.ontransitionend = function () {
                detailRow.style.height = null;
                detailContainer.style.height = null;
                detailRow.removeAttribute('aria-hidden');
                detailRow.classList.remove('collapsed');
                detailContainer.style.paddingTop = null;
                detailContainer.style.paddingBottom = null;
                detailRow.ontransitionend = null;
            };

            detailRow.style.height = fullHeight;
            detailContainer.style.height = fullHeight;
            detailContainer.style.paddingTop = 'var(--smart-table-cell-padding)';
            detailContainer.style.paddingBottom = 'var(--smart-table-cell-padding)';
            that._expandedIds.push(id);
            return;
        }

        const fullHeight = detailRow.firstElementChild.scrollHeight + 'px';

        detailContainer.style.height = fullHeight;
        detailContainer.style.paddingTop = 'var(--smart-table-cell-padding)';
        detailContainer.style.paddingBottom = 'var(--smart-table-cell-padding)';
        detailRow.style.height = fullHeight;
        that._expandedIds = that._expandedIds.filter(currentId => currentId !== id);

        requestAnimationFrame(() => {
            detailRow.ontransitionend = function () {
                detailRow.setAttribute('aria-hidden', true);
                detailRow.classList.add('collapsed');
                detailContainer.style.paddingTop = null;
                detailContainer.style.paddingBottom = null;
                detailContainer.style.height = null;
                detailRow.style.height = null;
                detailRow.ontransitionend = null;
            }

            detailContainer.style.paddingTop = 0;
            detailContainer.style.paddingBottom = 0;
            detailContainer.style.height = 0;
            detailRow.style.height = 0;
        });
    }

    /**
     * Sets whether the element can be focused.
     */
    _setFocusable() {
        const that = this,
            table = that.nodeName.toLowerCase() === 'smart-table';

        if (!that.keyboardNavigation || that.disabled || that.unfocusable ||
            that.hasAttribute('modal')) {
            that.$.tableContainer.removeAttribute('tabindex');

            if (table) {
                that.$.filterInput.unfocusable = true;
                that.$.pager.unfocusable = true;
            }

            that.$.conditionalFormattingButton.unfocusable = true;
            return;
        }

        const tabindex = that.$.tableContainer.getAttribute('tabindex');

        if (tabindex === null || tabindex < 0) {
            that.$.tableContainer.setAttribute('tabindex', 0);
        }

        if (table) {
            that.$.filterInput.unfocusable = false;
            that.$.pager.unfocusable = false;
        }

        that.$.conditionalFormattingButton.unfocusable = false;
    }

    /**
     * tableContainer focus handler.
     */
    _tableContainerFocusHandler() {
        const that = this;

        if (!that._focusedCell || !that.$.tableContainer.contains(that._focusedCell)) {
            that._focusCell(that.$.tableContainer.children[1].querySelector('td[data-field], td.group-header'));
        }
    }

    /**
     * tableContainer down handler.
     */
    _tableContainerDownHandler(event) {
        const that = this,
            target = that.isInShadowDOM || that.shadowRoot ? event.originalEvent.composedPath()[0] : event.originalEvent.target;

        that._focusCell(target.closest('td[data-field], td.group-header'));
    }

    /**
     * Focuses a cell.
     */
    _focusCell(cell, scrollTo) {
        const that = this;

        if (!cell || !cell.hasAttribute('data-field') && !cell.classList.contains('group-header') ||
            cell.parentElement.classList.contains('grand-total')) {
            return;
        }

        if (that._focusedCell) {
            if (that._focusedCell === cell) {
                return;
            }

            that._focusedCell.removeAttribute('focus');
        }

        that._focusedCell = cell;
        cell.setAttribute('focus', '');

        if (!scrollTo) {
            return;
        }

        const container = that.$.tableContainer.parentElement,
            frozenHeaderHeight = (that.freezeHeader ? that.$.tableContainer.firstElementChild.offsetHeight : 0),
            currentScrollTop = container.scrollTop;
        let targetScrollTop = cell.offsetTop - frozenHeaderHeight;

        // vertical scroll to
        if (targetScrollTop < currentScrollTop) {
            container.scrollTop = targetScrollTop;
        }
        else {
            const filterHeaderHeight = that.$.header.offsetHeight,
                frozenFooterHeight = that.footerRow && that.freezeFooter ? that.$.tableContainer.lastElementChild.offsetHeight : 0,
                pagerHeight = that.$.pager.offsetHeight,
                scrollableHeight = container.clientHeight - (filterHeaderHeight + frozenHeaderHeight + frozenFooterHeight + pagerHeight);

            targetScrollTop += cell.offsetHeight;

            if (targetScrollTop > currentScrollTop + scrollableHeight) {
                container.scrollTop = targetScrollTop - scrollableHeight;
            }
        }

        if (cell.classList.contains('freeze-near') || cell.classList.contains('freeze-far')) {
            return;
        }

        // horizontal scroll to
        const currentScrollLeft = container.scrollLeft,
            firstRow = that.$.tableContainer.querySelector('tr[row-id]');
        let targetScrollLeft = cell.offsetLeft,
            frozenNearWidth = 0;

        Array.from(firstRow.children).forEach(td => {
            if (td.classList.contains('freeze-near')) {
                frozenNearWidth += td.offsetWidth;
            }
        });

        targetScrollLeft -= frozenNearWidth;

        if (targetScrollLeft < currentScrollLeft) {
            container.scrollLeft = targetScrollLeft;
        }
        else {
            const scrollableWidth = container.clientWidth;

            targetScrollLeft += cell.offsetWidth + frozenNearWidth;

            if (targetScrollLeft > currentScrollLeft + scrollableWidth) {
                container.scrollLeft = targetScrollLeft - scrollableWidth;
            }
        }
    }

    /**
     * tableContainer keydown handler.
     */
    _tableContainerKeydownHandler(event) {
        const that = this,
            key = event.key,
            focusedCell = that._focusedCell;

        if (!focusedCell) {
            return;
        }

        const isGroupHeader = focusedCell.classList.contains('group-header');

        if (isGroupHeader && ['ArrowRight', 'ArrowLeft', 'Home', 'End', ' ', 'Escape', 'F2'].indexOf(key) !== -1) {
            event.preventDefault();
            return;
        }

        if (that._editing) {
            switch (key) {
                case 'Enter':
                    that.endEdit();
                    break;
                case 'Escape':
                    that.cancelEdit();
                    break;
                default:
                    return;
            }

            that.$.tableContainer.focus();
            event.preventDefault();
            return;
        }

        const row = focusedCell.parentElement;
        let nextArrow = 'ArrowRight',
            prevArrow = 'ArrowLeft';

        if (that.rightToLeft) {
            nextArrow = 'ArrowLeft';
            prevArrow = 'ArrowRight';
        }

        switch (key) {
            case nextArrow:
            case prevArrow: {
                const siblingSelector = key === nextArrow ? 'nextElementSibling' : 'previousElementSibling';
                let sibling = focusedCell[siblingSelector];

                while (sibling && sibling.classList.contains('smart-hidden')) {
                    sibling = sibling[siblingSelector];
                }

                that._focusCell(sibling, true);
                break;
            }
            case 'ArrowUp':
            case 'ArrowDown': {
                const siblingSelector = key === 'ArrowUp' ? 'previousElementSibling' : 'nextElementSibling';
                let sibling = row[siblingSelector];

                while (sibling && (sibling.classList.contains('smart-table-row-detail') || sibling.classList.contains('collapsed'))) {
                    sibling = sibling[siblingSelector];
                }

                if (sibling) {
                    if (isGroupHeader) {
                        that._focusCell(sibling.querySelector('td[data-field], .group-header'), true);
                    }
                    else {
                        that._focusCell(sibling.querySelector(`td[data-field="${focusedCell.getAttribute('data-field')}"], .group-header`), true);
                    }
                }

                break;
            }
            case 'Home':
                that._focusCell(row.querySelector('td[data-field]'), true);
                break;
            case 'End': {
                const cellsOnRow = row.querySelectorAll('td[data-field]');
                let i = cellsOnRow.length - 1,
                    cellToFocus = cellsOnRow[i];

                while (cellToFocus.classList.contains('smart-hidden')) {
                    i--;
                    cellToFocus = cellsOnRow[i];
                }

                that._focusCell(cellToFocus, true);
                break;
            }
            case 'PageDown':
                that._pageDownHandler(focusedCell);// to test with filtering/paging with scrolling
                break;
            case 'PageUp':
                that._pageUpHandler(focusedCell);// to test with filtering/paging with scrolling
                break;
            case 'Enter': {
                const data = row.data;

                if (that.dataSource.boundHierarchy && that._areChildrenFiltered(data)) {
                    that._hierarchyArrowClickHandler(row, focusedCell);
                }
                else if (that.rowDetailTemplate) {
                    that._toggleRowDetail(row, data.$.id);
                }

                break;
            }
            case ' ':
                that._toggleSelection(row, row.data.$.id, event);
                break;
            case 'F2':
                that.beginEdit(row.data.$.id, focusedCell.getAttribute('data-field'));
                break;
            default:
                return;
        }

        event.preventDefault();
    }

    /**
     * Handles PageDown navigation.
     */
    _pageDownHandler(focusedCell) {
        const that = this,
            paging = that.paging;

        if (!paging && focusedCell.parentElement === focusedCell.parentElement.parentElement.lastElementChild) {
            return;
        }

        const container = that.$.tableContainer.parentElement;
        let dataField = focusedCell.getAttribute('data-field');

        dataField = dataField ? `="${dataField}"` : '';

        function getLastCellInView() {
            const rows = that.$.tableContainer.querySelectorAll('tr[row-id]');
            let correction = that.$.header.offsetHeight + that.$.pager.offsetHeight;

            if (that.footerRow && that.freezeFooter) {
                correction += that.$.tableContainer.lastElementChild.offsetHeight;
            }

            for (let i = rows.length - 1; i >= 0; i--) {
                const currentRow = rows[i];

                if (currentRow.classList.contains('collapsed')) {
                    continue;
                }

                if (currentRow.offsetTop + currentRow.offsetHeight <=
                    container.scrollTop + container.clientHeight - correction) {
                    return currentRow.querySelector(`td[data-field${dataField}], .group-header`);
                }
            }
        }

        let lastCellInView = getLastCellInView();

        if (!lastCellInView) {
            return;
        }

        if (focusedCell === lastCellInView) {
            container.scrollTop += container.clientHeight;
            lastCellInView = getLastCellInView();

            if (paging && focusedCell === lastCellInView) {
                const oldPageIndex = that.pageIndex;

                that.navigateTo(that.pageIndex + 1);

                if (that.pageIndex !== oldPageIndex) {
                    that._focusCell(that.$.tableContainer.querySelector(`td[data-field${dataField}], .group-header`), true);
                }
            }
            else {
                that._focusCell(lastCellInView);
            }
        }
        else {
            that._focusCell(lastCellInView);
        }
    }

    /**
     * Handles PageUp navigation.
     */
    _pageUpHandler(focusedCell) {
        const that = this;

        const container = that.$.tableContainer.parentElement;
        let dataField = focusedCell.getAttribute('data-field');

        dataField = dataField ? `="${dataField}"` : '';

        function getFirstCellInView() {
            const rows = that.$.tableContainer.querySelectorAll('tr[row-id]');
            let correction = 0;

            if (that.freezeHeader) {
                correction = that.$.tableContainer.firstElementChild.offsetHeight;
            }

            for (let i = 0; i < rows.length; i++) {
                const currentRow = rows[i];

                if (currentRow.classList.contains('collapsed')) {
                    continue;
                }

                if (currentRow.offsetTop >= container.scrollTop + correction) {
                    return currentRow.querySelector(`td[data-field${dataField}], .group-header`);
                }
            }
        }

        let firstCellInView = getFirstCellInView();

        if (!firstCellInView) {
            return;
        }

        if (focusedCell === firstCellInView) {
            container.scrollTop -= container.clientHeight;
            firstCellInView = getFirstCellInView();

            if (that.paging && focusedCell === firstCellInView) {
                const oldPageIndex = that.pageIndex;

                that.navigateTo(that.pageIndex - 1);

                if (that.pageIndex !== oldPageIndex) {
                    const allCellsInColumn = that.$.tableContainer.querySelectorAll(`td[data-field${dataField}], .group-header`);

                    that._focusCell(allCellsInColumn[allCellsInColumn.length - 1], true);
                }
            }
            else {
                that._focusCell(firstCellInView);
            }
        }
        else {
            that._focusCell(firstCellInView);
        }
    }

    /**
     * tableContainer keyup handler.
     */
    _tableContainerKeyupHandler(event) {
        const that = this,
            target = that.isInShadowDOM || that.shadowRoot ? event.composedPath()[0] : event.target;

        if (target.classList.contains('filter-value') && target.type !== 'date') {
            clearTimeout(that._filterRowTimeout);

            that._filterRowTimeout = setTimeout(function () {
                const oldContext = that.context;

                that.context = that;
                that._applyRowFilters();
                that.context = oldContext;
            }, 500);
        }
    }

    /**
     * tableContainer pointerover handler.
     */
    _tableContainerPointeroverHandler(event) {
        const that = this;

        if (!that.tooltip) {
            return;
        }

        const target = that.isInShadowDOM ? event.composedPath()[0] : event.target,
            cell = target.closest('tbody td[data-field]');

        if (!cell) {
            return;
        }

        const previousHoveredCell = that.$.tableContainer.querySelector('.tooltip');

        if (previousHoveredCell) {
            previousHoveredCell.classList.remove('tooltip');
            previousHoveredCell.removeAttribute('title');
        }

        if (cell.classList.contains('tree-cell') &&
            cell.firstElementChild.children[1].scrollWidth > cell.firstElementChild.children[1].offsetWidth ||
            cell.scrollWidth > cell.offsetWidth) {
            cell.classList.add('tooltip');
            cell.title = cell.innerText;
        }
    }

    /**
     * Document down handler.
     */
    _documentDownHandler(event) {
        const that = this,
            target = that.isInShadowDOM || that.shadowRoot ? event.originalEvent.composedPath()[0] : event.originalEvent.target;

        if (that._editing && !target.closest('.smart-table-editor')) {
            const dropDown = target.closest('.smart-drop-down')

            if (!dropDown) {
                that.endEdit();
                return;
            }

            const ownerElement = dropDown.ownerElement;

            if (!ownerElement) {
                that.endEdit();
                return;
            }

            if (that.$.container.contains(ownerElement) && ownerElement.classList.contains('smart-table-editor')) {
                return;
            }

            that.endEdit();
            return;
        }

        if (that.columnReorder && !that.columnTotals) {
            const th = target.closest('th[data-field]:not(.smart-pivot-table-total-header)');

            if (th && that.$.tableContainer.contains(th)) {
                that._dragDetails = {
                    FeedbackShown: false,
                    Item: th,
                    StartPosition: { left: event.pageX, top: event.pageY },
                    StartTime: new Date()
                };
            }
        }
    }

    /**
     * document move handler.
     */
    _documentMoveHandler(event) {
        const that = this,
            dragDetails = that._dragDetails;

        if (!dragDetails) {
            return;
        }

        if (!dragDetails.FeedbackShown) {
            const now = new Date(),
                timePassed = now.getTime() - dragDetails.StartTime.getTime() > 500,
                moved = Math.abs(dragDetails.StartPosition.left - event.pageX) > 5 ||
                    Math.abs(dragDetails.StartPosition.top - event.pageY) > 5;

            if (moved && (!that._isMobile || that._isMobile && timePassed)) {
                that._hideBodyOverflow();
                dragDetails.Feedback = that._addDragFeedback();
                dragDetails.FeedbackShown = true;
                dragDetails.Item.classList.add('dragged');
                that.classList.add('smart-unselectable');
            }
            else {
                if (that._isMobile && moved && !timePassed) {
                    delete that._dragDetails;
                }

                return;
            }
        }

        const container = that.$.tableContainer.parentElement;

        dragDetails.Feedback.style.left = event.pageX + 10 + 'px';
        dragDetails.Feedback.style.top = event.pageY + 10 + 'px';

        if (dragDetails.HoveredItem) {
            dragDetails.HoveredItem.classList.remove('drop-column', 'left', 'right');
            delete dragDetails.HoveredItem;
        }

        if (container.offsetWidth < container.scrollWidth) {
            clearInterval(that._dragInterval);
            that._dragInterval = setInterval(function () {
                const rect = container.getBoundingClientRect();

                if (rect.left <= event.clientX && rect.left + rect.width >= event.clientX) {
                    if (event.clientX >= rect.left && event.clientX <= rect.left + 25) {
                        container.scrollLeft -= that._autoScrollCoefficient;
                    }
                    else if (event.clientX >= rect.left + rect.width - 25 && event.clientX <= rect.left + rect.width) {
                        container.scrollLeft += that._autoScrollCoefficient;
                    }
                    else {
                        clearInterval(that._dragInterval);
                    }
                }
                else {
                    clearInterval(that._dragInterval);
                }
            }, 10);
        }

        const hoveredItem = that._getClosestThToHover(event);

        if (hoveredItem) {
            hoveredItem.classList.add('drop-column');
            dragDetails.HoveredItem = hoveredItem;
        }
    }

    /**
     * Hides body overflow.
     */
    _hideBodyOverflow() {
        const that = this,
            isVerticalScrollable = (document.scrollingElement || document.documentElement).scrollHeight > document.documentElement.clientHeight,
            isHorizontalScrollable = (document.scrollingElement || document.documentElement).scrollWidth > document.documentElement.clientWidth;

        that._originalBodyOverflow = { overflowX: document.body.style.overflowX, overflowY: document.body.style.overflowY, overflow: document.body.style.overflow };

        document.body.classList.add('smart-dragging');
        document.body.style.overflow = document.body.style.overflowX = document.body.style.overflowY = '';

        if (isVerticalScrollable && !isHorizontalScrollable) {
            document.body.style.overflowX = 'hidden';
        }
        else if (isHorizontalScrollable && !isVerticalScrollable) {
            document.body.style.overflowY = 'hidden';
        }
        else if (!isHorizontalScrollable && !isVerticalScrollable) {
            document.body.style.overflow = 'hidden';
        }
    }



    /**
     * Adds drag feedback.
     */
    _addDragFeedback() {
        const that = this,
            draggedItem = that._dragDetails.Item,
            feedback = document.createElement('div');

        feedback.className = 'smart-table-feedback';
        feedback.setAttribute('parent-table-id', that.id);
        feedback.innerHTML = that.columnByDataField[draggedItem.getAttribute('data-field')].label;

        if (that.theme) {
            feedback.setAttribute('theme', that.theme);
        }

        document.body.appendChild(feedback);
        return feedback;
    }

    /**
     * Gets the closest th element to hover.
     */
    _getClosestThToHover(event) {
        const that = this,
            x = event.clientX,
            headerCellElements = Array.from(that.$.tableContainer.querySelectorAll('th[data-field]:not(.smart-pivot-table-total-header)'));
        let closest, closestDistance, side;

        for (let i = 0; i < headerCellElements.length; i++) {
            const currentCell = headerCellElements[i];

            if (!currentCell || this._dragDetails.Item === currentCell) {
                continue;
            }

            const rect = currentCell.getBoundingClientRect(),
                leftDistance = Math.abs(x - rect.left),
                rightDistance = Math.abs(x - rect.right),
                bestHorizontalDistance = Math.min(leftDistance, rightDistance);

            if (closestDistance === undefined || bestHorizontalDistance < closestDistance) {
                closest = currentCell;
                closestDistance = bestHorizontalDistance;
                side = leftDistance < rightDistance ? 'left' : 'right';
            }
            else {
                break;
            }
        }

        if (closest) {
            closest.classList.add(side);
        }

        return closest;
    }

    /**
     * Document up handler.
     */
    _documentUpHandler() {
        const that = this,
            dragDetails = that._dragDetails;

        if (!dragDetails) {
            return;
        }

        delete that._dragDetails;

        if (!dragDetails.FeedbackShown) {
            return;
        }

        const hoveredItem = dragDetails.HoveredItem;

        document.body.classList.remove('smart-dragging');
        document.body.style.overflow = that._originalBodyOverflow.overflow;
        document.body.style.eoverflowX = that._originalBodyOverflow.overflowX;
        document.body.style.overflowY = that._originalBodyOverflow.overflowY;
        delete that._originalBodyOverflow;

        that.classList.remove('smart-unselectable');
        dragDetails.Item.classList.remove('dragged');

        document.body.removeChild(dragDetails.Feedback);

        clearInterval(that._dragInterval);
        delete that._dragInterval;

        if (hoveredItem) {
            that._applyColumnReorder(dragDetails, hoveredItem);
        }

        that._preventClickSort = true;
        requestAnimationFrame(() => delete that._preventClickSort);
    }

    /**
     * Applies column reorder.
     */
    _applyColumnReorder(dragDetails, hoveredItem) {
        const that = this,
            rightToLeft = that.rightToLeft,
            originalColumns = that._columns,
            originDataField = dragDetails.Item.getAttribute('data-field'),
            originColumn = originalColumns.find(col => col.dataField === originDataField),
            targetDataField = hoveredItem.getAttribute('data-field'),
            dropAfter = hoveredItem.classList.contains('right'),
            newColumns = that._columns.filter(col => col.dataField !== originDataField);
        const index = newColumns.findIndex(col => col.dataField === targetDataField);

        hoveredItem.classList.remove('drop-column', 'left', 'right');

        if (dropAfter && !rightToLeft || !dropAfter && rightToLeft) {
            newColumns.splice(index + 1, 0, originColumn);
        }
        else {
            newColumns.splice(index, 0, originColumn);
        }

        if (originalColumns.map(col => col.dataField).join(',') === newColumns.map(col => col.dataField).join(',')) {
            // new column order is the same as old one
            return;
        }

        that.columns = newColumns;
        that._initColumns();
        that.refresh();
    }

    /**
     * Applies filters from filter row.
     */
    _applyRowFilters() {
        const that = this;

        if (!that.filtering || !that.filterRow) {
            return;
        }

        const filterRow = that.$.tableContainer.querySelector('.smart-table-filter-row'),
            selectionColumnCorrection = that.selection ? 1 : 0,
            filters = [];

        for (let i = 0; i < that._columns.length; i++) {
            const dataField = that._columns[i].dataField,
                dataType = that._columns[i].dataType,
                container = filterRow.children[i + selectionColumnCorrection].firstElementChild,
                button = container.children[2];
            let filterValue = container.firstElementChild.value,
                filterCondition = container.children[1].value;

            if (dataType === 'string') {
                filterCondition = that._filterInfo.stringConditions.find(condition => condition.label === filterCondition).value;

            }
            else {
                filterCondition = that._filterInfo.numberAndDateConditions.find(condition => condition.label === filterCondition).value;

                if (filterValue !== '') {
                    if (dataType === 'number') {
                        filterValue = parseFloat(filterValue);

                        if (isNaN(filterValue)) {
                            container.firstElementChild.value = '';
                            filterValue = '';
                        }
                    }
                    else if (dataType === 'date') {
                        filterValue = new Date(filterValue);
                        filterValue.setHours(0, 0, 0);
                    }
                }
            }

            const conditionWithEmptyValue = ['EMPTY', 'NOT_EMPTY', 'NULL', 'NOT_NULL'].indexOf(filterCondition) !== -1;

            if (filterValue !== '' || conditionWithEmptyValue) {
                const filterGroup = new Smart.Utilities.FilterGroup(),
                    filterObject = filterGroup.createFilter(dataType, filterValue, filterCondition);

                filterGroup.addFilter('or', filterObject);
                filters.push([dataField, filterGroup]);

                button.classList.remove('smart-hidden');
            }
            else {
                button.classList.add('smart-hidden');
            }

            if (conditionWithEmptyValue) {
                container.firstElementChild.setAttribute('disabled', true);
            }
            else {
                container.firstElementChild.removeAttribute('disabled');
            }
        }

        if (filters.length > 0) {
            if (!that.dataSource.virtualDataSource) {
                that.dataSource._filter(filters, 'and');
            }

            that._filterInfo.rowFilters = filters;
            delete that._filterInfo.appliedFilters;
            that._fullRefresh('filter');
            that.$.fireEvent('filter', { action: 'add', filters: filters });
        }
        else if (that._filterInfo.rowFilters) {
            that.clearFilters();
        }
    }

    /**
     * Clears filter input value.
     */
    _clearFilterInput() {
        const that = this;

        that._filterInfo.query = '';
        delete that._filterInfo.inputFilters;
        that.$.filterInput.value = '';
    }

    /**
     * Clears filter row UI.
     */
    _clearRowFilters() {
        const that = this;

        if (!that._filterInfo.rowFilters) {
            return;
        }

        const filterRow = that.$.tableContainer.querySelector('.smart-table-filter-row'),
            selectionColumnCorrection = that.selection ? 1 : 0;

        for (let i = 0; i < that._columns.length; i++) {
            const container = filterRow.children[i + selectionColumnCorrection].firstElementChild;

            container.firstElementChild.value = '';
            container.children[2].classList.add('smart-hidden');
        }

        delete that._filterInfo.rowFilters;
    }

    /**
     * Creates the Table's footer row.
     */
    _createFooterRow(existingFooter) {
        const that = this,
            footerRow = that.footerRow;

        if (!footerRow) {
            return;
        }

        if (existingFooter) {
            that.$.tableContainer.appendChild(existingFooter);
            return;
        }

        const potentialHTMLTemplate = document.getElementById(footerRow);

        if (potentialHTMLTemplate && potentialHTMLTemplate instanceof HTMLTemplateElement) {
            const tfoot = document.createElement('tfoot'),
                templateContent = document.importNode(potentialHTMLTemplate.content, true);

            tfoot.appendChild(templateContent);
            that.$.tableContainer.appendChild(tfoot);
        }
        else {
            that.footerRow = null;
        }
    }

    /**
     * Creates the Table's custom header row.
     */
    _createCustomHeaderRow() {
        const that = this,
            headerRow = that.headerRow;

        if (!headerRow) {
            return;
        }

        const potentialHTMLTemplate = document.getElementById(headerRow);

        if (potentialHTMLTemplate && potentialHTMLTemplate instanceof HTMLTemplateElement) {
            const templateContent = document.importNode(potentialHTMLTemplate.content, true);

            that.$.tableContainer.firstElementChild.appendChild(templateContent);
        }
        else {
            that.headerRow = null;
        }
    }

    /**
     * Updates the state of the "Select all" checkbox.
     */
    _updateSelectAllState(dataSourceLength) {
        const that = this,
            selectedIdsLength = that._selectedIds.length,
            selectAllCheckboxTd = that.$.tableContainer.querySelector('.smart-table-select-all');

        if (dataSourceLength === undefined) {
            dataSourceLength = that.dataSource.length;
        }

        if (selectedIdsLength === 0) {
            selectAllCheckboxTd.classList.remove('selected', 'indeterminate');
        }
        else if (selectedIdsLength === dataSourceLength) {
            selectAllCheckboxTd.classList.remove('indeterminate');
            selectAllCheckboxTd.classList.add('selected');
        }
        else {
            selectAllCheckboxTd.classList.remove('selected');
            selectAllCheckboxTd.classList.add('indeterminate');
        }
    }

    /**
     * resize handler.
     */
    _resizeHandler() {
        const that = this;

        that._handleFrozenColumnPositions();
    }

    /**
     * Expand/collapse arrow click handler.
     */
    _hierarchyArrowClickHandler(groupHeader) {
        const that = this,
            tableContainer = that.$.tableContainer,
            groupData = groupHeader.data;

        function expandChildren(siblings) {
            siblings.forEach(child => {
                that._expandSingleChildRow(tableContainer.querySelector(`tr[row-id="${child.$.id}"]`));

                if (child.children && child.expanded) {
                    expandChildren(child.children);
                }
            });
        }

        function collapseChildren(siblings) {
            siblings.forEach(child => {
                that._collapseSingleChildRow(tableContainer.querySelector(`tr[row-id="${child.$.id}"]`));

                if (child.children) {
                    collapseChildren(child.children);
                }
            });
        }

        if (groupData.expanded) {
            collapseChildren(groupData.children);
        }
        else {
            expandChildren(groupData.children);
        }

        groupData.expanded = !groupData.expanded;
        groupHeader.setAttribute('aria-expanded', groupData.expanded);
        groupHeader.classList.toggle('expanded', groupData.expanded);
    }

    /**
     * Expands a single child row.
     */
    _expandSingleChildRow(childRow) {
        if (!childRow) {
            return;
        }

        if (this.animation !== 'none') {
            childRow.classList.remove('smart-hidden');

            requestAnimationFrame(() => {
                childRow.classList.add('no-height');

                childRow.ontransitionend = function () {
                    childRow.classList.remove('no-height');
                    childRow.ontransitionend = null;
                }

                childRow.removeAttribute('aria-hidden');
                childRow.classList.remove('collapsed');
            });
        }
        else {
            childRow.removeAttribute('aria-hidden');
            childRow.classList.remove('collapsed', 'smart-hidden');
        }
    }

    /**
     * Collapses a single child row.
     */
    _collapseSingleChildRow(childRow) {
        if (!childRow) {
            return;
        }

        if (this.animation !== 'none') {
            childRow.ontransitionend = function () {
                childRow.classList.add('smart-hidden');
                childRow.ontransitionend = null;
            }
        }
        else {
            childRow.classList.add('smart-hidden');
        }

        childRow.setAttribute('aria-hidden', true);
        childRow.classList.add('collapsed');
    }

    /**
     * Gets a group by its hierarchical index.
     */
    _getGroupByIndex(index) {
        const that = this;

        if (typeof index === 'number') {
            index = index.toString();
        }

        const boundHierarchy = that.dataSource.boundHierarchy,
            indexes = index.split('.');
        let group = boundHierarchy[indexes[0]];

        if (!group) {
            return;
        }

        for (let i = 1; i < indexes.length; i++) {
            group = group.children[indexes[i]];

            if (!group || group.leaf) {
                return;
            }
        }

        return group;
    }

    /**
     * Creates dialog.
     */
    _createDialog() {
        const that = this,
            dialog = document.createElement('smart-window'),
            footerTemplate = document.createElement('template'),
            propertySync = ` animation=${that.animation} theme="${that.theme}"${that.rightToLeft ? ' right-to-left' : ''}${!that.keyboardNavigation || that.unfocusable ? ' unfocusable' : ''}`;

        footerTemplate.innerHTML = `<smart-button class="ok primary"${propertySync}>${that.localize('ok')}</smart-button>
<smart-button class="cancel"${propertySync}>${that.localize('cancel')}</smart-button>`;

        dialog.animation = that.animation;
        dialog.footerTemplate = footerTemplate;
        dialog.headerButtons = ['close'];
        dialog.rightToLeft = that.rightToLeft;
        dialog.theme = that.theme;
        dialog.unfocusable = !that.keyboardNavigation || that.unfocusable;
        dialog.className = 'smart-table-window';
        dialog.ownerElement = that;

        that._dialog = dialog;
        that._addDialogHandlers();
        that.getShadowRootOrBody().appendChild(dialog);
    }

    /**
     * Adds dialog handlers.
     */
    _addDialogHandlers() {
        const that = this,
            dialog = that._dialog;

        dialog.addEventListener('close', that._dialogEventHandler);
        dialog.addEventListener('click', that._dialogEventHandler);
    }

    /**
     * Dialog event handler.
     */
    _dialogEventHandler(event) {
        const dialog = this,
            that = dialog.ownerElement,
            target = dialog.isInShadowDOM ? event.composedPath()[0] : event.target,
            eventType = event.type,
            oldContext = that.context;

        that.context = that;

        if (eventType === 'close') {
            if (target !== dialog) {
                that.context = oldContext;
                return;
            }

            const conditionalFormatting = dialog.classList.contains('conditional-formatting');

            if (dialog.ok) {
                if (conditionalFormatting) {
                    that._applyConditionalFormatting();
                }

                delete dialog.ok;
            }
            else if (conditionalFormatting &&
                JSON.stringify(that._formattingPanel.items) !== JSON.stringify(that._formattingPanel.getItems())) {
                that._formattingPanel.$.itemsContainer.innerHTML = '';
                that._formattingPanel._addDefaultItems();
            }

            dialog.content.innerHTML = '';
            dialog.classList.remove('conditional-formatting', 'drill-down', 'fields');

            if (that.keyboardNavigation && !that.disabled && !that.unfocusable) {
                that.$.tableContainer.setAttribute('tabindex', 0);

                if (that.nodeName.toLowerCase() === 'smart-table') {
                    that.$.filterInput.unfocusable = false;
                    that.$.pager.unfocusable = false;
                }

                that.$.conditionalFormattingButton.unfocusable = false;
            }

            that.removeAttribute('modal');

            if (conditionalFormatting) {
                that.$.conditionalFormattingButton.focus();
            }
            else {
                that.$.tableContainer.focus();
            }
        }
        else if (eventType === 'click' && dialog.$.footer.contains(target)) {
            if (target.closest('.ok')) {
                dialog.ok = true;
                dialog.close();
            }
            else if (target.closest('.cancel')) {
                dialog.close();
            }
        }

        that.context = oldContext;
    }

    /**
     * Opens dialog.
     */
    _openDialog(header, content, className) {
        const that = this;

        if (!that._dialog) {
            that._createDialog();
        }

        const dialog = that._dialog;

        dialog.label = header;
        dialog.classList.add(className);
        dialog.appendChild(content);
        that.$.tableContainer.removeAttribute('tabindex');

        if (that.nodeName.toLowerCase() === 'smart-table') {
            that.$.filterInput.unfocusable = true;
            that.$.pager.unfocusable = true;
        }

        that.$.conditionalFormattingButton.unfocusable = true;
        that.setAttribute('modal', '');
        dialog.open();
    }

    /**
     * "Conditional Formatting" button click handler.
     */
    _conditionalFormattingButtonClickHandler(event, columns, dataSource) {
        const that = this;
        let formattingPanel;

        if (that._formattingPanel) {
            formattingPanel = that._formattingPanel;
        }
        else {
            formattingPanel = document.createElement('smart-formatting-panel');
            formattingPanel.animation = that.animation;
            formattingPanel.columns = columns || that._columns;
            formattingPanel.dataSource = dataSource || that.dataSource;
            formattingPanel.locale = that.locale;
            formattingPanel.messages = that.messages;
            formattingPanel.rightToLeft = that.rightToLeft;
            formattingPanel.theme = that.theme;
            formattingPanel.unfocusable = !that.keyboardNavigation || that.unfocusable;
            formattingPanel.ownerElement = that;

            that._formattingPanel = formattingPanel;
        }

        if (that.conditionalFormatting) {
            formattingPanel.items = that.conditionalFormatting;
        }

        that._openDialog(that.localize('conditionalFormatting'), formattingPanel, 'conditional-formatting');
    }

    /**
     * Transforms dataSource records using dataTransform callback.
     */
    _transformDataSource() {
        const that = this;

        if (!that.isRendered && that.dataTransform) {
            const dataSource = that.dataSource;

            for (let i = 0; i < dataSource.length; i++) {
                that.dataTransform(dataSource[i]);
            }
        }
    }

    /**
     * Applies initial conditional formatting.
     */
    _applyInitialConditionalFormatting(dataSource) {
        const that = this,
            conditionalFormatting = that.conditionalFormatting;

        if (!conditionalFormatting || conditionalFormatting.length === 0) {
            return;
        }

        const defaults = that._defaults,
            formatter = new Smart.Utilities.ConditionalFormatter(dataSource),
            dataStyleCollection = [];
        let getColumns;

        if (that.nodeName.toLowerCase() === 'smart-pivot-table') {
            const pivotColumns = that._dynamicColumns;

            getColumns = function (column) {
                if (column === 'all') {
                    return pivotColumns.map(col => col.id);
                }
                else {
                    return pivotColumns.
                        filter(col => col.dataFields[col.dataFields.length - 1].dataField === column).
                        map(col => col.id);
                }
            }
        }
        else {
            getColumns = function (column) {
                if (column === 'all') {
                    return that._columns.map(col => col.value);
                }
                else {
                    return [column];
                }
            }
        }

        for (let i = 0; i < conditionalFormatting.length; i++) {
            conditionalFormatting[i] = Object.assign({
                column: 'all',
                condition: 'lessThan',
                firstValue: 0,
                secondValue: 1,
                fontFamily: defaults.fontFamily,
                fontSize: defaults.fontSize,
                text: defaults.text,
                highlight: defaults.highlight
            }, conditionalFormatting[i]);

            const data = conditionalFormatting[i],
                columns = getColumns(data.column),
                condition = data.condition;

            formatter.color = data.highlight;
            formatter.comparator = data.firstValue;
            formatter.min = data.firstValue;
            formatter.max = data.secondValue;

            const dataStyles = formatter.format(condition, columns);

            for (let column in dataStyles) {
                const columnStyles = dataStyles[column];

                for (let index in columnStyles) {
                    const cellStyle = columnStyles[index];

                    cellStyle.color = data.text;
                    cellStyle.fontFamily = data.fontFamily;
                    cellStyle.fontSize = data.fontSize;
                }
            }

            dataStyleCollection.push(dataStyles);
        }

        if (that._formattingPanel) {
            that._formattingPanel.items = conditionalFormatting;
        }

        if (dataStyleCollection.length === 0) {
            return dataStyleCollection[0];
        }

        const finalStyle = {};

        for (let i = 0; i < dataStyleCollection.length; i++) {
            const dataStyles = dataStyleCollection[i];

            for (let column in dataStyles) {
                const columnStyles = dataStyles[column];

                if (!finalStyle[column]) {
                    finalStyle[column] = {};
                }

                for (let index in columnStyles) {
                    finalStyle[column][index] = Object.assign({}, finalStyle[column][index], columnStyles[index]);
                }
            }
        }

        that._conditionalFormatting = finalStyle;
    }

    /**
     * Converts RGB to HEX.
     */
    _toHex(rgb) {
        if (rgb.indexOf('#') !== -1) {
            return rgb;
        }

        const result = /rgb\((\d+), (\d+), (\d+)\)/g.exec(rgb);

        if (!result) {
            return '#FFFFFF';
        }

        return '#' + (parseFloat(result[1]).toString(16).padStart(2, '0') +
            parseFloat(result[2]).toString(16).padStart(2, '0') +
            parseFloat(result[3]).toString(16).padStart(2, '0')).toUpperCase();
    }

    /**
     * Applies conditional formatting.
     */
    _applyConditionalFormatting() {
        const that = this,
            previousConditionalFormatting = that._conditionalFormatting;

        that._conditionalFormatting = that._formattingPanel.apply();
        that.conditionalFormatting = that._formattingPanel.getItems();

        if (that._conditionalFormatting !== previousConditionalFormatting) {
            that._refreshDataRows();
        }
    }
});