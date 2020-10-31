import React from 'react';
import { Table } from 'reactstrap';
import { composeHeader, composeBody, PaginationB4 } from 'helpers/table';
import { Card } from 'reactstrap';


const UITable = props => {
  const { data, dataCount, updateProspects } = props;
  var headers = [];
  var header = undefined;
  var body = undefined;

  if (data.length > 0) {
    headers = Object.keys(data[0])
    header = composeHeader(headers)
    body = composeBody(headers, data)
  }
  return (
    <Card className="shadow">
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">{header}</thead>
        <tbody>{body}</tbody>
      </Table>
      <PaginationB4
        data={data}
        dataCount={dataCount}
        pageChangeHandler={data => updateProspects(`page=${data.selected + 1}`)}
      />
    </Card>
  )
}

export default UITable;
