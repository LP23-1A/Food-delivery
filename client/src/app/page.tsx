import ActionAreaCard from "@/components/Cards";
import FastDelivery from "@/components/FastDelivery";
import BasicCard from "@/components/FastDelivery";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BackImg from "@/components/images/BackImg";
import { Box, Stack, Typography } from "@mui/material";
import image14 from "@/components/images/image14.png";
import image13 from "@/components/images/image13.png";
import Image from "next/image";

function Home() {
  return (
    <Stack>
      <Box>
        <Navbar />
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
                src="https://s3-alpha-sig.figma.com/img/0735/ebea/ea841e6608a7206e8f3e2cbcdcb911cf?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xy4AvKQFaBQZEZdxOygITSvFv0n0SFiyFQuje3W7clAQnoXNpIwqzM~u6JGWNwVf4mY9URTiu~9bzBZtwdmOGwnqm6pRayvkebllAkhH3jxxkhywjs27chHkG5RR5ic2HSDPrIs6hsDLZris4GttlF5xrSzSNQ6LW9ogWfhsY8LhE185PyvDhM1eXOQ05OuUZZhRJw0591n8h74QAww3-w97pXX-8hwzWTe3eUD3tlUjCtmSHGJYpykjMje4J9mlgajhWEaXSyc-WplyXF8ow5jiXxSYRlh0gcJ0Gesc28WsrRShCkhygq8WSmho0nN4h-WYVAr9caj4Z21wPZ~CAA__"
                alt="Picture"
                height={438}
                width={543}
                priority={true}
              />
              <Image
                style={{ position: "absolute", right: 70, bottom: 160 }}
                src="https://s3-alpha-sig.figma.com/img/7e09/e5d0/2949632a6a2df2f49b384d2050707197?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F9OSMa6ek1UFx14Dp82WQADRPz25AnVuw6EdVUT1JwS4Zvl-D6SGwxG11pF3a3TpuKBweI3RZfqwgVJ1W6vBq4S9pf6F~JgLfGvi9x7uzXOu-LndUvyxdc7RG3eQ~nU5O0faIoQB4tq2IiG6-6ZlHQJy1XvPcqz11HSKbb0ie-~9PX-4L1EiIFcBwnp1FkWWGhKMV3HH7Tr0~L5trnSYarOAW4Q0kJbqoeswyfynwfD~256AkoCaw1v9-JUD9CfnBFRNqEYj9VfgYZURxppiDCwRGyuhR3RGgUbpmYy520KXLuhaXt4nkoedZ3fCGQ2pzHkYpZOpcSaC9d9AcIFgQQ__"
                alt="picture"
                height={313}
                width={313}
                priority={false}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "120px" }}>
          <Box sx={{ margin: "120px" }}>
            <Box
              sx={{
                display: "flex",
                gap: "47px",
                width: "1200px",
                margin: "auto",
              }}
            >
              <FastDelivery
                text="Хүргэлтийн төлөв хянах"
                text1="Захиалга бэлтгэлийн явцыг хянах"
              />
              <FastDelivery
                text="Шуурхай хүргэлт"
                text1="Захиалга бэлтгэлийн явцыг хянах"
              />
              <FastDelivery
                text="Эрүүл, баталгаат орц"
                text1="Захиалга бэлтгэлийн явцыг хянах"
              />
              <FastDelivery
                text="Хоолны өргөн сонголт"
                text1="Захиалга бэлтгэлийн явцыг хянах"
              />
            </Box>
          </Box>
          <Box
            sx={{
              marginBottom: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
            }}
          >
            <ActionAreaCard
              image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KA0seZMfBI4cfT2mi3IslQI6oxPPtt8IC5fGuzEHfNWIVx1hMieo0vnt1dCKywqoOffZtglxdW4pP7kV9cwOAguidwu3r4p-99QxAAgvG8tnyZG4inP7BZg7otJydZZNtFd0YJ3LTlq9S59HuZWQKn45qdkyFAe17K4Drz2LtqzimvNKNJ49mhqS~rlej5tfz876iy8tme9VR--rGYzgF~Vy167l5VVbuKqbaJe2c0zFgtdqpHyddFB3N6Rl0KO54kGCMTWVZsOhNQpDpaHhHTdm3WTBgKUrv7JIbyeWRjG2~UXxvxyviSCvsQcbZs3oNX695ZwVLneI1976CC6PGQ__"
              text="asdfdsdfasdf"
              price="16,800"
            />
            <ActionAreaCard
              image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KA0seZMfBI4cfT2mi3IslQI6oxPPtt8IC5fGuzEHfNWIVx1hMieo0vnt1dCKywqoOffZtglxdW4pP7kV9cwOAguidwu3r4p-99QxAAgvG8tnyZG4inP7BZg7otJydZZNtFd0YJ3LTlq9S59HuZWQKn45qdkyFAe17K4Drz2LtqzimvNKNJ49mhqS~rlej5tfz876iy8tme9VR--rGYzgF~Vy167l5VVbuKqbaJe2c0zFgtdqpHyddFB3N6Rl0KO54kGCMTWVZsOhNQpDpaHhHTdm3WTBgKUrv7JIbyeWRjG2~UXxvxyviSCvsQcbZs3oNX695ZwVLneI1976CC6PGQ__"
              text="asdfdsdfasdf"
              price="6,800"
            />
            <ActionAreaCard
              image="https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZTYGXkdrBGE~om1HZ2Bo7yJU1lzitXIddPJ6wM56sVkdEwH8CxhYOBN-uNGjfMgzRW11AWFiKLlgRrttYbEcjjn-IeI7gg1Y0uiSKlpidpSIpgu4kDf82u-3QUuVGDWG1MgbmGjp~em45L0gQisu38m7ir8fII5qPgOEnVtE-rvB5zQcvPrZRgL6vz0wcH~kwMnN6Z6d7rQCfqkgZLyiYB7lRo4GEKSESa-BHe3YptjmvGJCIaJNHskU0GXzuZf-4v48Te~NjBC0Clg03itgYUuwlvG8YKaeBgfl6KZKqUqgZ0Q3Z9oh0uOAe6V2KEzHY8atiy5LxqalO~LUMwB2Kg__"
              text="asdfdsdfasdf"
              price="26,800"
            />
            <ActionAreaCard
              image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KA0seZMfBI4cfT2mi3IslQI6oxPPtt8IC5fGuzEHfNWIVx1hMieo0vnt1dCKywqoOffZtglxdW4pP7kV9cwOAguidwu3r4p-99QxAAgvG8tnyZG4inP7BZg7otJydZZNtFd0YJ3LTlq9S59HuZWQKn45qdkyFAe17K4Drz2LtqzimvNKNJ49mhqS~rlej5tfz876iy8tme9VR--rGYzgF~Vy167l5VVbuKqbaJe2c0zFgtdqpHyddFB3N6Rl0KO54kGCMTWVZsOhNQpDpaHhHTdm3WTBgKUrv7JIbyeWRjG2~UXxvxyviSCvsQcbZs3oNX695ZwVLneI1976CC6PGQ__"
              text="asdfdsdfasdf"
              price="26,800"
            />
          </Box>
        </Box>

        <Footer />
      </Box>
    </Stack>
  );
}
export default Home;
