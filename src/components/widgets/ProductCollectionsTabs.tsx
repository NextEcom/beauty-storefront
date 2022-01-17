import { ProductsDataByCollection } from "@/types";
import { Box, Tab, Tabs, useTheme } from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { AppContainer } from "../base";
import ProductView from "./ProductView";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

type Props = {
  productsByCollection: ProductsDataByCollection;
};

export default function TabbedCollectionProducts({
  productsByCollection,
}: Props) {
  const theme = useTheme();
  const [selectedProductsTabIndex, setSelectedProductsTab] = useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedProductsTab(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setSelectedProductsTab(index);
  };

  return productsByCollection ? (
    <Box data-testid="collection-products" margin={`${theme.spacing(4)} 0`}>
      <AppContainer
        maxWidth="sm"
        sx={{
          margin: `${theme.spacing(4)}px auto`,
        }}
      >
        <Tabs
          value={selectedProductsTabIndex}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          aria-label="Products by collection"
          centered
        >
          {Object.keys(productsByCollection).map((key, index) => (
            <Tab label={key} key={key} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppContainer>
      <AppContainer maxWidth="lg">
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={selectedProductsTabIndex}
          onChangeIndex={handleChangeIndex}
        >
          {Object.keys(productsByCollection).map((key, index) => (
            <TabPanel
              key={key}
              index={index}
              value={selectedProductsTabIndex}
              dir={theme.direction}
            >
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                gap={theme.spacing(1)}
                marginY={theme.spacing(12)}
              >
                {productsByCollection[key].map((product) => (
                  <ProductView data={product} key={product.id} />
                ))}
              </Box>
            </TabPanel>
          ))}
        </SwipeableViews>
      </AppContainer>
    </Box>
  ) : null;
}
