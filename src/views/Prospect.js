import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';

import Header from 'components/UI/Header';
import UITable from 'components/UI/Table';
import { getProspects } from 'store/actions/prospect';
import { redirectIfNotLoggedIn } from 'helpers/authentication';

class Prospect extends Component {
  constructor(props) {
    super(props);
    redirectIfNotLoggedIn(props);
  }

  componentDidMount() {
    if(this.props.auth.loggedIn)
      this.props.getProspects();
  }

  shouldComponentUpdate(nextProps) {
    return redirectIfNotLoggedIn(nextProps);
  }

  render() {
    const { prospects, prospectsCount } = this.props;
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <UITable
                data={prospects}
                dataCount={prospectsCount}
                updateProspects={this.props.getProspects}
              />
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authentication,
  prospects: state.prospect.list,
  prospectsCount: state.prospect.count
});

const mapDispatchToProps = dispatch => ({
  getProspects: (query) => dispatch(getProspects(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Prospect);
