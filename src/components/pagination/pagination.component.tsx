import React from 'react';
import { PaginationProps } from './pagination.props';
import { PaginationButton, PaginationWrapper } from './pagination.styles';

export default function Pagination(props: PaginationProps) {
  return (
    <PaginationWrapper>
      <PaginationButton type="button" onClick={props.goToPreviousPage} disabled={props.currentPage === 1}>
        Previous
      </PaginationButton>
      <PaginationButton type="button" onClick={props.goToNextPage}>
        Next
      </PaginationButton>
    </PaginationWrapper>
  );
}
