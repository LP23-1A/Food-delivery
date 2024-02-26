import { Box, Button, Stack, Typography } from "@mui/material";
import BackImg from "./images/BackImg";
import Image from "next/image";
import FastDelivery from "./FastDelivery";
import ActionAreaCard from "./Cards";
import Footer from "./Footer";
import SearchAppBar from "./Navbar";

const Home = () => {
  const Delivery = [
    {
      text: "Хүргэлтийн төлөв хянах",
      text1: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      text: "Шуурхай хүргэлт",
      text1: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      text: "Эрүүл, баталгаат орц",
      text1: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      text: "Хоолны өргөн сонголт",
      text1: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  const data = [
    {
      image:
        "https://www.cnet.com/a/img/resize/989e8e3be4eb8baae522f982b7cc1f6a3f4c0f6d/hub/2022/12/14/8af299d7-0c8f-493f-9771-c5b4738cb690/gettyimages-1306753442.jpg?auto=webp&fit=crop&height=675&width=1200",
      text: "asdfdsdfasdf",
      price: "16,800",
    },
    {
      image:
        "https://www.cnet.com/a/img/resize/989e8e3be4eb8baae522f982b7cc1f6a3f4c0f6d/hub/2022/12/14/8af299d7-0c8f-493f-9771-c5b4738cb690/gettyimages-1306753442.jpg?auto=webp&fit=crop&height=675&width=1200",
      text: "asdfdsdfasdf",
      price: "6,800",
    },
    {
      image:
        "https://www.cnet.com/a/img/resize/989e8e3be4eb8baae522f982b7cc1f6a3f4c0f6d/hub/2022/12/14/8af299d7-0c8f-493f-9771-c5b4738cb690/gettyimages-1306753442.jpg?auto=webp&fit=crop&height=675&width=1200",
      text: "asdfdsdfasdf",
      price: "26,800",
    },
    {
      image:
        "https://www.cnet.com/a/img/resize/989e8e3be4eb8baae522f982b7cc1f6a3f4c0f6d/hub/2022/12/14/8af299d7-0c8f-493f-9771-c5b4738cb690/gettyimages-1306753442.jpg?auto=webp&fit=crop&height=675&width=1200",
      text: "asdfdsdfasdf",
      price: "26,800",
    },
  ];
  return (
    <Stack>
      <Box>
        <SearchAppBar />
        <Box
          sx={{
            height: "788px",
            backgroundColor: "#18BA51",
          }}
        >
          <Box sx={{ position: "absolute", alignItems: "center" }}>
            <BackImg />
          </Box>
          <Box
            sx={{
              gap: "228px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <Typography variant="h2" sx={{ color: "white" }}>
                Pinecone <br /> Food delivery
              </Typography>
              <Box
                width={384}
                borderTop={2}
                color={"white"}
                sx={{ opacity: 0.5 }}
              ></Box>
              <Typography sx={{ color: "white" }}>
                Horem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
              </Typography>
            </Box>
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Image
                style={{ position: "relative" }}
                src="https://www.adityabirlacapital.com/healthinsurance/active-together/wp-content/uploads/2018/10/Unhealthy-Food-Chart.jpg"
                alt="Picture"
                height={438}
                width={543}
                priority={true}
              />
              <Image
                style={{ position: "absolute", right: 70, bottom: 160 }}
                src="https://www.adityabirlacapital.com/healthinsurance/active-together/wp-content/uploads/2018/10/Unhealthy-Food-Chart.jpg"
                alt="picture"
                height={313}
                width={313}
                priority={false}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "120px" }}>
          <Box sx={{ margin: "auto", marginTop: "100px" }}>
            <Box>
              <Box sx={{ display: "flex", gap: 3 }}>
                {Delivery.map((item, index) => (
                  <FastDelivery
                    key={index}
                    text={item.text}
                    text1={item.text}
                  />
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              marginBottom: "120px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              <Typography> Хямдралтай</Typography>
              <Button sx={{ color: "#18BA51" }}>Бүгдийг харах {">"}</Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: 3 }}>
                {data.map((item, index) => (
                  <ActionAreaCard
                    key={index}
                    image={item.image}
                    text={item.text}
                    price={item.price}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        <Footer />
      </Box>
    </Stack>
  );
};
export default Home;
