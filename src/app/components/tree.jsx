"use client"
import * as React from 'react';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { styled, alpha } from '@mui/material/styles';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.content}`]: {
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,

  },
}));

function ExpandIcon(props) {
  return <KeyboardArrowDownIcon {...props} sx={{ opacity: 0.8 }} />;
}

function CollapseIcon(props) {
  return <KeyboardArrowDownIcon {...props} sx={{ opacity: 0.8 }} />;
}

function EndIcon(props) {
  return <KeyboardArrowDownIcon {...props} sx={{ opacity: 0.3 }} />;
}

export default function BorderedTreeView() {
  return (
    <SimpleTreeView
      aria-label="customized"
      defaultExpandedItems={['1', '3']}
      slots={{
        expandIcon: ExpandIcon,
        collapseIcon: CollapseIcon,
        endIcon: EndIcon,
      }}
      sx={{ overflowX: 'hidden', minHeight: 270, flexGrow: 1, maxWidth: 300 , marginTop:'2%', }}
    >
      <CustomTreeItem itemId="1" label="Group Title">
        <CustomTreeItem itemId="2" label="Option" />
        <CustomTreeItem itemId="3" label="Option" >
          <CustomTreeItem itemId="6" label="Item" />
          <CustomTreeItem itemId="7" label="Item">
            <CustomTreeItem itemId="9" label="Child 1" />
            <CustomTreeItem itemId="10" label="Child 2" />
            <CustomTreeItem itemId="11" label="Child 3" />
          </CustomTreeItem>
          <CustomTreeItem itemId="8" label="Item" />
          <CustomTreeItem itemId="13" label="Item" />
          <CustomTreeItem itemId="14" label="Item" />
        </CustomTreeItem>
        
      </CustomTreeItem>
    </SimpleTreeView>
  );
}