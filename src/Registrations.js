import React from "react";
import firebase from 'firebase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

class Registrations extends React.Component {

    state = {
        order: 'asc',
        orderBy: 'calories',
        selected: [],
        participants: [
        ],
        page: 0,
        rowsPerPage: 5,
    };

    componentDidMount() {
        const participantRef = firebase.app().firestore().collection('participants');

        participantRef.onSnapshot(querySnapshot => {
            const participants = []

            querySnapshot.forEach(participant => {
                participants.push({
                    id: participant.id,
                    ...participant.data()
                });
            })

            this.setState({
                participants: participants,
                loading: false
            });

            console.log(this.state.participants);
        });
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({ order, orderBy });
    };

    createSortHandler = property => event => {
        this.handleRequestSort(event, property);
    };

    render() {
        const { classes } = this.props;
        const { order, orderBy, selected, rowsPerPage, page, numSelected, rowCount } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.state.participants.length - page * rowsPerPage);

        return <div>
            <h3>Lista de Registrados</h3>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                key='firstName'
                                sortDirection={orderBy === 'firstName' ? order : false}
                            >
                                <Tooltip
                                    title="Nombre(s)"
                                    placement='bottom-start'
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'firstName'}
                                        direction={order}
                                        onClick={this.createSortHandler('firstName')}
                                    >
                                        Nombre(s)
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell
                                key='lastName'
                                sortDirection={orderBy === 'lastName' ? order : false}
                            >
                                <Tooltip
                                    title="Apellido(s)"
                                    placement='bottom-start'
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'lastName'}
                                        direction={order}
                                        onClick={this.createSortHandler('lastName')}
                                    >
                                        Apellido(s)
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell
                                key='ward'
                                sortDirection={orderBy === 'ward' ? order : false}
                            >
                                <Tooltip
                                    title="Barrio"
                                    placement='bottom-start'
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'ward'}
                                        direction={order}
                                        onClick={this.createSortHandler('ward')}
                                    >
                                        Barrio
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell
                                key='stake'
                                sortDirection={orderBy === 'stake' ? order : false}
                            >
                                <Tooltip
                                    title="Estaca"
                                    placement='bottom-start'
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'stake'}
                                        direction={order}
                                        onClick={this.createSortHandler('stake')}
                                    >
                                        Estaca
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell
                                key='gender'
                                sortDirection={orderBy === 'gender' ? order : false}
                            >
                                <Tooltip
                                    title="Sexo"
                                    placement='bottom-start'
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'gender'}
                                        direction={order}
                                        onClick={this.createSortHandler('gender')}
                                    >
                                        Sexo
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell
                                key='email'
                                sortDirection={orderBy === 'email' ? order : false}
                            >
                                <Tooltip
                                    title="E-mail"
                                    placement='bottom-start'
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'email'}
                                        direction={order}
                                        onClick={this.createSortHandler('email')}
                                    >
                                        E-mail
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell
                                key='phone'
                                sortDirection={orderBy === 'phone' ? order : false}
                            >
                                <Tooltip
                                    title="Teléfono"
                                    placement='bottom-start'
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'phone'}
                                        direction={order}
                                        onClick={this.createSortHandler('phone')}
                                    >
                                        Teléfono
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell
                                key='specialNeeds'
                                sortDirection={orderBy === 'specialNeeds' ? order : false}
                            >
                                <Tooltip
                                    title="Necesidades Especiales"
                                    placement='bottom-start'
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'specialNeeds'}
                                        direction={order}
                                        onClick={this.createSortHandler('specialNeeds')}
                                    >
                                        Necesidades Especiales
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stableSort(this.state.participants, getSorting(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(participant => (
                                <TableRow key={participant.id}>
                                    <TableCell component="th" scope="row">
                                        {participant.firstName}
                                    </TableCell>
                                    <TableCell>{participant.lastName}</TableCell>
                                    <TableCell>{participant.ward}</TableCell>
                                    <TableCell>{participant.stake}</TableCell>
                                    <TableCell>{participant.gender}</TableCell>
                                    <TableCell>{participant.email}</TableCell>
                                    <TableCell>{participant.phone}</TableCell>
                                    <TableCell>{participant.specialNeeds}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={this.state.participants.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        </div>


    }
}

export default Registrations;