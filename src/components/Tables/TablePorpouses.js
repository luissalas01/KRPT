import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Row,
  Col,
  Button,
  Input
} from "reactstrap";


class TablePorpouses extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isActive: null
        };
    }

    toggleActive = i => {
        //Remove the if statement if you don't want to unselect an already selected item
        if (i === this.state.isActive) {
          this.setState({
            isActive: null
          });
        } else {
          this.setState({
            isActive: i
          });
        }
    };
    
    renderEditButton = (values) => {
        var edit = this.props.showEdit;
        if (edit){
            return (
            <th>
                <Button 
                    className=""
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.onEdit(values);
                    }}
                >
                    <i className="fa fa-hand-o-up" />
                </Button>
            </th>)
        }
    }

    renderDeleteButton = (values) => {
        var del = this.props.showDelete;
        if (del){
            return (
                <th>
                <Button 
                    className="icon icon-shape bg-light text-white rounded-circle shadow"
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.onDelete(values);
                    }}
                >
                    <i className="fas fa-trash" />
                </Button>
            </th>)
        }
    }

    renderColumns = () => {
        var columns = this.props.columns;
        if (this.props.title === 'Cargos') {
            // debugger
        }
        return columns.map((values, index) => {
            return (
                    <tr className="text-center" key={`row${index}`}
                        style={
                            this.state.isActive === index
                            ? { background: '#80bfff' }
                            : { background: '#FFFFFF' }
                        }
                        onClick={(e) => { e.preventDefault();
                                        this.toggleActive(index); 
                                        if (this.props.onClick){
                                            this.props.onClick(values)
                                        }
                                    } }
                    >
                        {values.map((val, i) => (
                            <th key={`column${i}`}>
                                {val}
                            </th>
                            )
                        )}
                        {this.renderEditButton(values)}
                        {this.renderDeleteButton(values)}
                    </tr>
            );
        })
    }

    renderAddColumns = () => {
        var headers = this.props.headers;
        return headers.map((values, index) => (
                <th><Input></Input></th>
            )
        );
    }


    renderHeaders = () => {
        var headers = this.props.headers;
        return headers.map((value, index) => (
            <th key={`header${index}`} scope="col">{value}</th>
        ));
    }

    render() {
        const { title, showEdit, showDelete, showAdd } = this.props;
        return (
            <Row className="p-0 m-0">
                <Col className="p-0 m-0" sm="12">
                    <Card className="shadow">
                    <CardHeader className="border-0">
                        <h3 className="mb-0">{title}</h3>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                        <tr className="text-center"
                        >
                            {this.renderHeaders()}
                            { showEdit ? <th style={{ width:'10%' }} scope="col">Votar</th> : null }
                            { showDelete ? <th style={{ width:'10%' }} scope="col">Eliminar</th> : null }
                        </tr>
                        </thead>
                        <tbody>
                            {this.renderColumns()}
                            {showAdd ? <tr> {this.renderAddColumns() }</tr>: undefined}
                        </tbody>
                    </Table>
                    </Card>
                </Col>
            </Row>
        );
    }
}


export default TablePorpouses;
