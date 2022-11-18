import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import { useMemo } from "react";
import { useInfiniteQuery } from "react-query";
import { useBlockLayout, useTable } from "react-table";
import { FixedSizeList } from "react-window";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  useTheme,
} from "@mui/material";
import { TableHeadContract } from '../table/TableHead'
import { TableRowContract } from '../table/TableRow'
import { SkeletonLoading } from "../skeleton/SkeletonLoading";


const columnsDefault = [
  { Header: "Contrato", accessor: "Teste", width: "100%" },
  { Header: "Cliente", accessor: "client.name", width: 200 },
  { Header: "Ações", accessor: "action", width: 100 },
];

const skeletonLoadingDefault = (style) => {
  return <SkeletonLoading style={style} />
}

const dataRowDefault = (rowData, style) => {
  return <TableRowContract row={rowData} style={style} />
}

export const TableVirtualized = ({
  itemCount = 9,
  dataList = data.objects,
  fetchList = () => { },
  columns = columnsDefault,
  skeletonLoading = skeletonLoadingDefault,
  dataRow = dataRowDefault,
  itemSize = 56,
  threshold = 30,
  tableHead = <TableHeadContract />,
}) => {
  const theme = useTheme();

  const fetchListByPage = () => {
    return fetchList?.();
  };

  const { isFetchingNextPage, isError, error, fetchNextPage } =
    useInfiniteQuery('customer', fetchListByPage, {
      getNextPageParam: (_, pages) => pages.length + 1,
    });


  const memoizedColumns = useMemo(() => columns, []);

  const { getTableBodyProps, rows, prepareRow } = useTable(
    { data: dataList, columns: memoizedColumns },
    useBlockLayout,
  );

  const isItemLoaded = (index) => index < rows.length;

  const loadMoreItems = async () => {
    if (!isFetchingNextPage) {
      await fetchNextPage();
    }
  };

  const fixedSizeListChild = ({ index, style }) => {
    if (!isItemLoaded(index)) {
      return skeletonLoading(style);
    }

    const row = rows[index];
    prepareRow(row);

    return dataRow(row.original, row.getRowProps({ style }));
  };

  const autoSizerChild = ({ height, width }) => {
    const infiniteLoaderChild = ({ onItemsRendered, ref }) => (
      <FixedSizeList
        height={height}
        width={width}
        itemSize={itemSize}
        itemCount={itemCount}
        onItemsRendered={onItemsRendered}
        ref={ref}
      >
        {fixedSizeListChild}
      </FixedSizeList>
    );

    return (
      <InfiniteLoader
        itemCount={itemCount}
        threshold={threshold}
        isItemLoaded={isItemLoaded}
        loadMoreItems={loadMoreItems}
      >
        {infiniteLoaderChild}
      </InfiniteLoader>
    );
  };

  if (isError) return <span>{error.message}</span>;

  return (
    <TableContainer
      component={"div"}
      sx={{ height: "100vh", overflowX: "visible !important" }}
    >
      <Table sx={{ height: "100%" }} size="small">
        <TableHead sx={{ color: theme.palette.secondary.main, fontSize: 16 }}>
          {tableHead}
        </TableHead>
        <TableBody {...getTableBodyProps()} sx={{ height: "fit-content" }}>
          <AutoSizer>{autoSizerChild}</AutoSizer>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const data = {
  "count": 9,
  "currentPage": 0,
  "objects": [
    {
      "id": "a15c70c8",
      "email": "leandro@bestdeal.com.br",
      "name": "teste1808"
    },
    {
      "id": "4630c80a",
      "email": "leandro@bestdeal.com.br",
      "name": "teste integração 1908"
    },
    {
      "id": "9ad1fce6",
      "email": "leandro@bestdeal.com.br",
      "name": "teste integração PF2"
    },
    {
      "id": "cfbbc679",
      "email": "leandro@bestdeal.com.br",
      "name": "Diego Ferreira de Carvalho"
    },
    {
      "id": "db79585f",
      "email": "leandro@bestdeal.com.br",
      "name": "Alexandre oliv"
    },
    {
      "id": "50530736",
      "email": "leandro@bestdeal.com.br",
      "name": "teste teste"
    },
    {
      "id": "3bef2976",
      "email": "leandro@bestdeal.com.br",
      "name": "teste2508"
    },
    {
      "id": "b6b9695a",
      "email": "leandro@bestdeal.com.br",
      "name": "Marcela Aline Bernardes"
    },
    {
      "id": "9b7b8dce",
      "email": "renan.tartari@deltaenergia.com",
      "name": "renan tartari"
    },
  ],
  "pageSize": 10,
  "totalPages": 1
}
