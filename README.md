# [Smart Table Element](https://www.htmlelements.com) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Get%20over%2020%20free%20custom%20elements%20based%20on%20SmartHTMLElements%20&url=https://www.htmlelements.com/&via=htmlelements&hashtags=bootstrap,design,templates,table,developers,webcomponents,customelements,polymer,material)

&nbsp;
[![Price](https://img.shields.io/badge/price-FREE-0098f7.svg)](https://github.com/HTMLElements/smart-table/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/@smarthtmlelements/smart-table.svg?style=flat)](https://www.npmjs.com/package/@smarthtmlelements/smart-table)
[![GitHub package version](https://img.shields.io/github/package-json/v/HTMLElements/smart-table.svg)](https://github.com/HTMLElements/smart-table)
[![License: APACHE](https://img.shields.io/badge/license-APACHE-blue.svg)](https://github.com/HTMLElements/smart-table/blob/master/LICENSE)
[![](https://img.shields.io/website-up-down-green-red/https/shields.io.svg?label=www.htmlelements.com)](https://www.htmlelements.com)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/htmlelements/smart-table)

# &lt;smart-table&gt;

[Live Demo ↗](https://htmlelements.com/demos/table/)
|
[Documentation ↗](https://www.htmlelements.com/docs/)
|
[Installation ↗](https://www.npmjs.com/package/@smarthtmlelements/smarthtmlelements-core)

[&lt;smart-table&gt;](https://htmlelements.com/demos/table/) is a Custom HTML Element providing an alternative of the standard Table, part of the [Smart HTML Elements](https://htmlelements.com/).

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="../smart-core/source/smart.core.js"></script>
    <link rel="stylesheet" href="../smart-core/source/styles/smart.default.css" type="text/css" />
     <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<smart-table>
        <table>
            <thead>
                <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Area</th>
                    <th scope="col">Population_Rural</th>
                    <th scope="col">Population_Total</th>
                    <th scope="col">GDP_Total</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Brazil</td><td>8515767</td><td>0.15</td><td>205809000</td><td>2353025</td></tr>
                <tr><td>China</td><td>9388211</td><td>0.46</td><td>1375530000</td><td>10380380</td></tr>
                <tr><td>France</td><td>675417</td><td>0.21</td><td>64529000</td><td>2846889</td></tr>
                <tr><td>Germany</td><td>357021</td><td>0.25</td><td>81459000</td><td>3859547</td></tr>
                <tr><td>India</td><td>3287590</td><td>0.68</td><td>1286260000</td><td>2047811</td></tr>
                <tr><td>Italy</td><td>301230</td><td>0.31</td><td>60676361</td><td>2147952</td></tr>
                <tr><td>Japan</td><td>377835</td><td>0.07</td><td>126920000</td><td>4616335</td></tr>
                <tr><td>Russia</td><td>17098242</td><td>0.26</td><td>146544710</td><td>1857461</td></tr>
                <tr><td>United States</td><td>9147420</td><td>0.19</td><td>323097000</td><td>17418925</td></tr>
                <tr><td>United Kingdom</td><td>244820</td><td>0.18</td><td>65097000</td><td>2945146</td></tr>
            </tbody>
        </table>
</smart-table>
```

[<img src="https://raw.githubusercontent.com/htmlelements/smart-table/master/smart-table.png" alt="Screenshot of smart-table, using the Material theme">](https://htmlelements.com/demos/table)


[<img src="https://raw.githubusercontent.com/htmlelements/smart-table/master/smart-table-sort.png" alt="Screenshot of smart-table, using which is sortable">](https://htmlelements.com/demos/table)


[<img src="https://raw.githubusercontent.com/htmlelements/smart-table/master/tables.png" alt="Screenshot of smart-table, using the Responsive Tablet mode">](https://htmlelements.com/demos/table)


[<img src="https://raw.githubusercontent.com/htmlelements/smart-table/master/responsive-table.png" alt="Screenshot of smart-table, using the Responsive mode">](https://htmlelements.com/demos/table)


## Getting Started

Smart HTML Elements components documentation includes getting started, customization and api documentation topics.

[Getting Started Documentation](https://www.htmlelements.com/docs/table/)
|
[CSS Documentation](https://www.htmlelements.com/docs/table-css/)
|
[API Documentation](https://www.htmlelements.com/docs/table-api/)


## The file structure for Smart HTML Elements

- `source/`

  Javascript files.

- `source/styles/`

  Component CSS Files.

- `demos/`

  Demo files

## Running demos in browser

1. Fork the `Smart-HTML-Elements-Core` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `Smart-HTML-Elements-Core` directory, run `npm install` and then `bower install` to install dependencies.

1. Run a localhost or upload the demo on a web server. Then run:

  - /demos/smart-table/overview/


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. 

## Creating a pull request

  - Make sure your code is compliant with ESLint
  - [Submit a pull request](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github) with detailed title and description
  - Wait for response from one of our team members


## License

Apache License 2.0
