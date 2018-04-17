import React, { Component } from 'react';
import { connect } from 'react-redux';
import Griddle, { plugins } from 'griddle-react';
import { InputGroup, InputGroupAddon, Input, Button, Card, CardColumns, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


class SubmitOffersTable extends Component {
    componentDidMount() {
        this.props.getProperties();
    }

    onInputChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(ethid) {
        console.log("Submitting offer for", ethid);
        const offer = (this.state == null ? 0 : this.state[ethid]);
        if (offer <= 0) {
            return alert('Amount offered has to be greater than zero.')
        }
        this.props.onSubmitOffer(ethid, offer);
    }

    render() {
        const styleConfig = {
            icons: {
                TableHeadingCell: {
                    sortDescendingIcon: '▼',
                    sortAscendingIcon: '▲',
                },
            },
            classNames: {
                Row: 'row-class',
                Table: 'table-striped, table',
            },
            styles: {
                Filter: { fontSize: 18 },
            },
        };

        const CustomRowComponent = connect((state, props) => ({
            rowData: plugins.LocalPlugin.selectors.rowDataSelector(state, props)
        }))(({ rowData }) => (
            <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{rowData.address1}, {rowData.address2}</CardTitle>
                    <CardSubtitle>{rowData.city}, {rowData.state} {rowData.zip}</CardSubtitle>
                    <CardText>
                        <strong>Beds</strong>: {rowData.beds} <br />
                        <strong>Baths</strong>: {rowData.baths} <br />
                        <strong>Sq. Ft.</strong>: {rowData.sqft} <br />
                        <strong>Price</strong>: {rowData.price} <br />
                        <strong>Ethid</strong>: {rowData.ethid} <br />
                        <strong>Owner</strong>: {rowData.owner} <br />
                    </CardText>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Offer</InputGroupAddon>
                        <Input id={rowData.ethid} value={(this.state == null ? '' : this.state[rowData.ethid])} placeholder={rowData.price} type="number" step="1" onChange={this.onInputChange.bind(this)}/>
                        <InputGroupAddon addonType="append">RT</InputGroupAddon>
                        <InputGroupAddon addonType="append">
                            <Button color="primary" onClick={() => this.handleSubmit(rowData.ethid)}>Submit</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </CardBody>
            </Card>
        ));

        const CustomTableComponent = OriginalComponent => class CustomTableComponent extends Component {
            static contextTypes = {
                components: React.PropTypes.object
            }
            render() {
                return <this.context.components.TableBody />
            }
        }

        const CustomTableBody = ({ rowIds, Row, style, className }) => (
            <div style={style} className={className}>
                {rowIds && rowIds.map(r => <Row key={r} griddleKey={r} />)}
            </div>
        );

        const griddleLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
            <div>
                <CardColumns>
                    <Table />
                </CardColumns>
                <br />
                Page <Pagination />
            </div>
        );

        return (
            <div className="pure-u-1-1 reduced-font">
                <h1>Real Estate</h1>
                <Griddle
                    data={this.props.propertiesData}
                    pageProperties={{
                        pageSize: 5
                    }}
                    styleConfig={styleConfig}
                    showFilter={false}
                    showSettings={false}
                    plugins={[plugins.LocalPlugin]}
                    components={{
                        Layout: griddleLayout,
                        Row: CustomRowComponent,
                        TableContainer: CustomTableComponent,
                        TableBody: CustomTableBody,
                    }}
                />
            </div>
        );
    }
}

export default SubmitOffersTable
