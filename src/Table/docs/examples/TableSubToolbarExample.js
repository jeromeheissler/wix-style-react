/* eslint-disable */

() => {
  const [filterId, setFilterId] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState('');
    const [currentTags, setTags] = React.useState([
    { id: 'In Stock', children: 'In Stock' },
    { id: 'Out Of Stock', children: 'Out Of Stock' },
  ]);
  
  var data = [
    {
      name: `Red Slippers`,
      SKU: '0231664667',
      price: '$14.00',
      inventory: 'In Stock',
    },
    {
      name: `Velvet Hat`,
      SKU: '0231664669',
      price: '$23.00',
      inventory: 'In Stock',
    },
    {
      name: `Silver Jeans`,
      SKU: '0231664667',
      price: '$69.00',
      inventory: 'In Stock',
    },
    {
      name: `Orange Stocks`,
      SKU: '0231664671',
      price: '$9.00',
      inventory: 'Out Of Stock',
    },
    {
      name: `Black T-shirts`,
      SKU: '0231664672',
      price: '$19.00',
      inventory: 'In Stock',
    },
  ];

  const columns = [
    {
      title: 'Name',
      render: row => <Highlighter match={searchTerm}>{row.name}</Highlighter>,
      width: '30%',
    },
    {
      title: 'SKU',
      render: row => row.SKU,
      width: '20%',
    },
    {
      title: 'Price',
      render: row => row.price,
      width: '20%',
    },
    {
      title: 'Inventory',
      render: row => row.inventory,
      width: '20%',
    },
  ];
  
      const filterOptions = [
      { id: 0, value: 'In Stock, Out Of Stock' },
      { id: 'In Stock', value: 'In Stock' },
      { id: 'Out Of Stock', value: 'Out Of Stock' },
    ];

  const _renderMainToolbar = () => {
    return (
      <Card>
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <TableToolbar.Title>Products</TableToolbar.Title>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
          <TableToolbar.ItemGroup position="end">
            <TableToolbar.Item>
              <TableToolbar.Label>
                Status
                <span style={{ width: '150px' }}>
                  <Dropdown
                    options={filterOptions}
                    selectedId={filterId}
                    onSelect={selectedOption => setFilterId(selectedOption.id)}
                    roundInput
                  />
                </span>
              </TableToolbar.Label>
            </TableToolbar.Item>
            <TableToolbar.Item>{_renderSearch(false)}</TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      </Card>
    );
  };

  const _renderEmptyState = () => (
    <Table.EmptyState
      title="You haven't added any items yet"
      subtitle="Add items to your website so people can buy them"
      image={
        <Box
          height={120}
          width={120}
          backgroundColor="#dfe5eb"
          borderRadius="50%"
        />
      }
    >
      <TextButton suffixIcon={<Icons.ExternalLink />}>
        Learn how to add items
      </TextButton>
    </Table.EmptyState>
  );

  const _clearSearch = () => {
    setFilterId(0);
    setSearchTerm('');
  };

  const _renderSearch = expandable => {
    return (
      <Search
        expandable={expandable}
        onChange={event => {
          setSearchTerm(event.target.value);
        }}
        value={searchTerm}
        onClear={_clearSearch}
      />
    );
  };

  const _getFilteredData = () => {
    if (filterId !== 0) {
      data = data.filter(row => row.inventory === filterId);
    }


    if (searchTerm !== '') {
      data = data.filter(row =>
        row.name.toUpperCase().includes(searchTerm.toUpperCase()),
      );
    }

    return data;
  };

  const filteredData = _getFilteredData();

  return (
    <Page height="400px">
      <Page.Content>
        <Table
          onSelectionChange={selectedIds =>
            console.log('Table.onSelectionChange(): selectedIds=', selectedIds)
          }
          showSelection
          data={filteredData}
          columns={columns}
        >
          <Page.Sticky>
            <Card>
              <Table.ToolbarContainer>
                {() => _renderMainToolbar()}
              </Table.ToolbarContainer>
              <Table.SubToolbar>
                <FormField label="Filtered by:" labelPlacement="left">
                  <TagList
                    tags={currentTags}
                    maxVisibleTags={2}
                    actionButton={{ label: 'Clear All', onClick: () => {} }}
                    onTagRemove={tagId =>
                      setTags(currentTags.filter(({ id }) => id !== tagId))
                    }
                  />
                </FormField>
              </Table.SubToolbar>
              {filteredData.length ? <Table.Titlebar /> : _renderEmptyState()}
            </Card>
          </Page.Sticky>
          <Card>
            <Table.Content titleBarVisible={false} />
          </Card>
        </Table>
      </Page.Content>
    </Page>
  );
};
