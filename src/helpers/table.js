import React from 'react';
import Paginate from 'react-paginate';
import { CardFooter } from 'reactstrap';


const composeRow = (headers, item) => {
  return headers.map((h, i) => <td key={`td-${i}`}>{item[h]}</td>);
}

const paginationSettingsB4 = () => {
  const pageItemClass = 'page-item';
  const pageLinkClass = 'page-link';
  return {
    previousLabel: <i className='fas fa-angle-left' />,
    nextLabel: <i className='fas fa-angle-right' />,
    breakLabel: '...',
    activeClassName: 'active',
    containerClassName: 'pagination justify-content-center mb-0',
    pageClassName: pageItemClass,
    pageLinkClassName: pageLinkClass,
    previousClassName: pageItemClass,
    previousLinkClassName: pageLinkClass,
    nextClassName: pageItemClass,
    nextLinkClassName: pageLinkClass,
    breakClassName: pageItemClass,
    breakLinkClassName: pageLinkClass,
    marginPagesDisplayed: 2,
    pageRangeDisplayed: 4
  }
}

export const composeHeader = headers => {
  const columns = headers.map((h, i) => <th key={`th-${i}`} scope="col">{h}</th>)
  return <tr>{columns}</tr>
}

export const composeBody = (headers, data) => {
  return data.map((item, i) => (
    <tr key={`row-${i}`}>{composeRow(headers, item)}</tr>
  ))
}

export const PaginationB4 = ({ data, dataCount, pageChangeHandler }) => (
  <CardFooter className="py-4">
    <Paginate
      pageCount={Math.ceil(dataCount / 10)}
      onPageChange={pageChangeHandler}
      {...paginationSettingsB4()}
    />
  </CardFooter>
)
