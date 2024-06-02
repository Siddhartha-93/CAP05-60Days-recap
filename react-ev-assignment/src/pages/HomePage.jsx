import { useEffect, useState } from "react";
import { Box, Container, Flex, Select, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import ProductCard from "../component/ProductCard";
import LoadingIndicator from "../component/LoadingIndicator";
import ErrorIndicator from "../component/ErrorIndicator";

function HomePage() {
  const [productList, setproductList] = useState([]);
  const [shotBy, setShotBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchTicketData(shotBy, filterBy) {
    setLoading(true);
    try {
      //create object query parameters for shot and filter
      const qParams = {};
      //set status for filter parameter...
      if (filterBy) {
        qParams.filter = filterBy;
      }
      if (shotBy) {
        qParams.sort = "price";
        qParams.order = shotBy;
      }
    
      let res = await axios({
        method: "get",
        url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products",
        params: qParams,
      });
      let data = res?.data?.data;
     
      setproductList(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }

  //handel side Effect.....
  useEffect(() => {
    fetchTicketData(shotBy, filterBy);
  }, [shotBy, filterBy]);
  //loading and error
  if (loading) {
    <LoadingIndicator />;
  }
  if (error) {
    <ErrorIndicator />;
  }
  return (
    <Box>
      {/* Shot and filter in put */}
      <Container marginY={4}>
        <Flex gap={10}>
          <Select
            variant="outline"
            placeholder="Select Status"
            value={filterBy}
            onChange={(e) => {
              setFilterBy(e.target.value);
            }}
          >
            <option value="men">Men </option>
            <option value="women">Women </option>
            <option value="kids">Kids</option>
            <option value="homedecor">Home Decor </option>
          </Select>
          <Select
            variant="outline"
            placeholder="Select Priority"
            value={shotBy}
            onChange={(e) => {
              setShotBy(e.target.value);
            }}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
        </Flex>
      </Container>

      <SimpleGrid
        justifyContent={"Center"}
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={5}
      >
        {productList?.map((ele) => (
          <ProductCard {...ele} key={ele.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default HomePage;
