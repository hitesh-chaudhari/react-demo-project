import React, { Component } from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import { Layout, Form, Input } from '../../components';
import {getMovies} from "../../redux/actions/";

class DashboardPage extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        const { fetching } = this.props;

        if(fetching) {
            return <div>Loading...</div>;
        }

        return (
            <Layout>
                <Form>
                    <Input type="file" name="pic" accept="image/*" />
                </Form>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movie.movies,
    fetching: state.movie.fetching
});

const mapDispatchToProps = (dispatch) => ({
    fetchMovies: (page) => dispatch(getMovies(page))
});

DashboardPage.propTypes = {
    fetchMovies: PropTypes.func.isRequired
};

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardPage);

export { Dashboard };
